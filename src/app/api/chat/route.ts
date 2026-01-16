import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { z } from "zod";
import {
  checkRateLimit,
  getClientIP,
  createRateLimitHeaders,
  rateLimiters,
} from "@/lib/rateLimit";
import { createCorsHeaders, handleCorsPreflightRequest } from "@/lib/cors";

/**
 * Zod schema for chat request validation
 * Enforces type safety and size limits to prevent abuse
 */
const ChatRequestSchema = z.object({
  gameName: z
    .string()
    .min(1, "Game name is required")
    .max(100, "Game name too long"),
  rules: z
    .string()
    .min(1, "Rules are required")
    .max(10000, "Rules text too long"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(500, "Message too long (max 500 characters)"),
  history: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().max(1000, "History message too long"),
      })
    )
    .max(20, "Too many history messages")
    .default([]),
});

// Initialize OpenAI client lazily to avoid build-time errors
function getOpenAIClient() {
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

function getSystemPrompt(gameName: string, rules: string): string {
  return `You are the official referee for "${gameName}". You know the rules inside and out.

RULES:
${rules}

INSTRUCTIONS:
- Answer questions about the rules concisely (1-3 sentences max)
- If asked about a scenario not covered by the rules, make a fair ruling and say "House rule suggestion:"
- Be fun and casual - you're at a party, not a courtroom
- Use simple language, avoid complex explanations
- If someone asks something unrelated to the game, redirect them playfully back to the game
- Never encourage dangerous drinking behavior or excessive consumption
- If asked about drinking amounts, always remind players to drink responsibly

Remember: Keep responses SHORT and PARTY-FRIENDLY!`;
}

/**
 * Handle CORS preflight requests
 */
export async function OPTIONS(request: NextRequest) {
  return handleCorsPreflightRequest(request);
}

export async function POST(request: NextRequest) {
  // Get CORS headers for this request
  const corsHeaders = createCorsHeaders(request);

  // Check rate limit first
  const clientIP = getClientIP(request);
  const rateLimitResult = checkRateLimit(clientIP, rateLimiters.chat);
  const rateLimitHeaders = createRateLimitHeaders(rateLimitResult);

  // Merge all headers
  const allHeaders = { ...corsHeaders, ...rateLimitHeaders };

  if (!rateLimitResult.allowed) {
    return NextResponse.json(
      {
        error: "Too many requests",
        reply: "Whoa, slow down! The AI referee needs a breather. Try again in a minute.",
        retryAfter: Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000),
      },
      {
        status: 429,
        headers: allHeaders,
      }
    );
  }

  try {
    const body = await request.json();

    // Validate input with Zod schema
    const parseResult = ChatRequestSchema.safeParse(body);
    if (!parseResult.success) {
      const errors = parseResult.error.issues.map((e) => e.message).join(", ");
      return NextResponse.json(
        { error: `Invalid request: ${errors}` },
        { status: 400, headers: allHeaders }
      );
    }

    const { gameName, rules, message, history } = parseResult.data;

    // Check if API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          reply: "AI referee is not configured yet. Please add your OpenAI API key to enable this feature!"
        },
        { status: 200, headers: allHeaders }
      );
    }

    // Build messages array
    const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: getSystemPrompt(gameName, rules),
      },
      // Add chat history (last 10 messages to keep context manageable)
      ...history.slice(-10).map((msg) => ({
        role: msg.role as "user" | "assistant",
        content: msg.content,
      })),
      // Add current message
      {
        role: "user" as const,
        content: message,
      },
    ];

    const completion = await getOpenAIClient().chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      max_tokens: 200,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || "I'm not sure about that one!";

    return NextResponse.json({ reply }, { headers: allHeaders });
  } catch (error) {
    console.error("Chat API error:", error);

    // Handle specific OpenAI errors
    if (error instanceof OpenAI.APIError) {
      if (error.status === 401) {
        return NextResponse.json(
          { reply: "AI referee credentials are invalid. Please check your API key." },
          { status: 200, headers: allHeaders }
        );
      }
      if (error.status === 429) {
        return NextResponse.json(
          { reply: "AI referee is taking a break (rate limited). Try again in a moment!" },
          { status: 200, headers: allHeaders }
        );
      }
    }

    return NextResponse.json(
      { reply: "AI referee had a hiccup. Try asking again!" },
      { status: 200, headers: allHeaders }
    );
  }
}
