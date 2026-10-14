import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { z } from "zod";
import { checkRateLimit, getClientIP, createRateLimitHeaders, rateLimiters } from "@/lib/rateLimit";
import { createCorsHeaders, handleCorsPreflightRequest } from "@/lib/cors";
import { buildRefereePrompt, resolveRefereeGame } from "@/lib/chatReferee";
import { requireAgeConsent } from "@/lib/ageConsent";
import { CHAT_MESSAGE_LIMIT, CHAT_CONTEXT_MESSAGES, CHAT_HISTORY_CONTENT_LIMIT, CHAT_PROVIDER_TIMEOUT_MS } from "@/lib/chatConfig";

const ChatRequestSchema = z.object({
  gameSlug: z.string().min(1).max(80),
  message: z.string().trim().min(1).max(CHAT_MESSAGE_LIMIT),
  history: z.array(z.object({
    role: z.enum(["user", "assistant"]),
    content: z.string().max(CHAT_HISTORY_CONTENT_LIMIT),
  })).max(20).default([]),
});

export async function OPTIONS(request: NextRequest) {
  return handleCorsPreflightRequest(request);
}

export async function POST(request: NextRequest) {
  const rate = checkRateLimit(`chat:${getClientIP(request)}`, rateLimiters.chat);
  const headers = { ...createCorsHeaders(request), ...createRateLimitHeaders(rate), "Cache-Control": "private, no-store" };
  const fail = (status: number, code: string, reply: string, retryAfter?: number) => NextResponse.json(
    { error: reply, reply, code, ...(retryAfter ? { retryAfter } : {}) },
    { status, headers: { ...headers, ...(retryAfter ? { "Retry-After": String(retryAfter) } : {}) } },
  );
  const consentError = requireAgeConsent(request, headers);
  if (consentError) return consentError;
  if (!rate.allowed) return fail(429, "CHAT_RATE_LIMITED", "Too many questions. Try again shortly.", Math.max(1, Math.ceil((rate.resetAt - Date.now()) / 1000)));

  let body: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) return fail(400, "INVALID_REQUEST", "A question is required.");
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 64 * 1024) {
        await reader.cancel();
        return fail(413, "REQUEST_TOO_LARGE", "Your question is too large. Please shorten it.");
      }
      chunks.push(value);
    }
    body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch { return fail(400, "INVALID_REQUEST", "Could not read your question. Please try again."); }

  const parsed = ChatRequestSchema.safeParse(body);
  if (!parsed.success) return fail(400, "INVALID_REQUEST", "Send a question of 1–500 characters about a SipWiki game.");
  const { gameSlug, message, history } = parsed.data;
  const game = resolveRefereeGame(gameSlug);
  if (!game) return fail(400, "UNKNOWN_GAME", "Choose a game from SipWiki's catalog.");
  if (!process.env.OPENAI_API_KEY) return fail(503, "AI_UNAVAILABLE", "AI referee is unavailable. You can still read the game rules.");
  if (request.signal.aborted) return fail(499, "AI_CANCELED", "Question canceled.");
  const deadline = AbortSignal.timeout(CHAT_PROVIDER_TIMEOUT_MS);

  try {
    // Preserve the existing provider/model. Bound one attempt instead of the
    // SDK's default ten-minute timeout plus automatic retries.
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, timeout: CHAT_PROVIDER_TIMEOUT_MS, maxRetries: 0 });
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: buildRefereePrompt(game) },
        ...history.slice(-CHAT_CONTEXT_MESSAGES),
        { role: "user", content: message },
      ],
      max_tokens: 200,
      temperature: 0.7,
    }, { signal: AbortSignal.any([request.signal, deadline]) });
    const reply = completion.choices[0]?.message?.content?.trim();
    if (!reply) return fail(502, "AI_EMPTY_REPLY", "The referee returned no answer. Please try again or read the rules.");
    return NextResponse.json({ reply: reply.slice(0, CHAT_HISTORY_CONTENT_LIMIT) }, { headers });
  } catch (error) {
    if (request.signal.aborted) return fail(499, "AI_CANCELED", "Question canceled.");
    const timeout = deadline.aborted || error instanceof OpenAI.APIConnectionTimeoutError;
    const status = error instanceof OpenAI.APIError ? error.status : undefined;
    const code = timeout ? "AI_TIMEOUT" : status === 429 ? "AI_BUSY" : "AI_UNAVAILABLE";
    // Never log transcripts, provider error bodies, auth headers or keys.
    console.error("AI referee request failed", { code, status: status ?? null });
    if (timeout) return fail(504, code, "The referee took too long. Try again or read the game rules.");
    if (status === 429) return fail(503, code, "The referee is busy. Try again shortly or read the game rules.", 30);
    return fail(503, code, "AI referee is temporarily unavailable. You can still read the game rules.");
  }
}
