import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { z } from "zod";
import { games } from "@/config/gameData";
import { requireAgeConsent } from "@/lib/ageConsent";
import {
  findCatalogMatches,
  validateGeminiRecommendations,
  validateModelRecommendations,
} from "@/lib/gameFinder";
import {
  checkDistributedRateLimit,
  createRateLimitHeaders,
  getClientIP,
  rateLimiters,
} from "@/lib/rateLimit";

const requestSchema = z.object({
  query: z.string().trim().min(3).max(300),
});

const responseSchema = {
  type: "OBJECT",
  properties: {
    summary: { type: "STRING" },
    recommendations: {
      type: "ARRAY",
      minItems: 3,
      maxItems: 3,
      items: {
        type: "OBJECT",
        properties: {
          slug: { type: "STRING" },
          reason: { type: "STRING" },
          matchScore: { type: "INTEGER", minimum: 1, maximum: 100 },
        },
        required: ["slug", "reason", "matchScore"],
      },
    },
  },
  required: ["summary", "recommendations"],
};

const catalogForModel = games.map((game) => ({
  slug: game.slug,
  name: game.name,
  description: game.description,
  materials: game.materials,
  players: {
    min: game.min_players,
    max: game.max_players,
  },
  alcohol: game.alcohol_type,
  sipFactor: game.drunkenness_level,
  difficulty: game.difficulty ?? null,
  intensity: game.intensity ?? null,
  durationMinutes: game.estimated_time_minutes ?? null,
}));

function json(data: unknown, status: number, headers: Record<string, string>) {
  return NextResponse.json(data, {
    status,
    headers: {
      ...headers,
      "Cache-Control": "no-store",
    },
  });
}

const fallbackNotice = "Gemini is temporarily unavailable; SipWiki used its backup AI route.";
const catalogNotice = "AI providers are temporarily unavailable, so these matches were found directly from SipWiki's catalog.";

async function openAIFallback(query: string, fallback: ReturnType<typeof findCatalogMatches>, headers: Record<string, string>, request: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return json({ ...fallback, notice: catalogNotice }, 200, headers);
  try {
    const client = new OpenAI({ apiKey, timeout: 8_000, maxRetries: 0 });
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: [
            "You are SipWiki's backup game finder.",
            "Use only the supplied catalog. Return JSON with summary and exactly three recommendations.",
            "Each recommendation must use an exact catalog slug, a practical reason under 30 words, and matchScore 1-100.",
            "Never invent games, rules, URLs, or availability. Alcohol is optional; non-alcoholic drinks are valid.",
          ].join(" "),
        },
        {
          role: "user",
          content: `USER REQUEST:\n${query}\n\nSIPWIKI CATALOG:\n${JSON.stringify(catalogForModel)}`,
        },
      ],
      response_format: { type: "json_object" },
      max_tokens: 900,
      temperature: 0.2,
    }, { signal: AbortSignal.any([request.signal, AbortSignal.timeout(8_000)]) });
    const text = completion.choices[0]?.message?.content;
    if (!text) return json({ ...fallback, notice: catalogNotice }, 200, headers);
    const validated = validateModelRecommendations(JSON.parse(text), query, games, fallback, "openai");
    return json({ ...validated, notice: fallbackNotice }, 200, headers);
  } catch (error) {
    console.warn("AI game finder fallback unavailable", { status: error instanceof OpenAI.APIError ? error.status : null });
    return json({ ...fallback, notice: catalogNotice }, 200, headers);
  }
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 32 * 1024) {
    return json({ error: "Request body too large" }, 413, {});
  }

  const rateLimit = await checkDistributedRateLimit(`finder:${getClientIP(request)}`, rateLimiters.chat);
  const rateHeaders = createRateLimitHeaders(rateLimit);
  const consentError = requireAgeConsent(request, rateHeaders);
  if (consentError) return consentError;

  if (!rateLimit.allowed) {
    return json({ error: "Too many searches. Try again in a minute." }, 429, rateHeaders);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON body." }, 400, rateHeaders);
  }

  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return json({ error: "Describe the kind of SipWiki game you want in 3-300 characters." }, 400, rateHeaders);
  }

  const query = parsed.data.query;
  const fallback = findCatalogMatches(query, games);
  if (fallback.recommendations.length === 0) return json(fallback, 200, rateHeaders);
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return json({
      ...fallback,
      notice: "These matches were found directly from SipWiki's catalog.",
    }, 200, rateHeaders);
  }

  const model = process.env.GEMINI_MODEL || "gemini-3.5-flash";
  const systemInstruction = [
    "You are SipWiki's game finder.",
    "Your entire knowledge base for this answer is the supplied SipWiki game catalog.",
    "Only recommend exact slugs from the catalog. Never invent games, rules, facts, URLs, or availability.",
    "Do not answer questions outside finding or explaining games represented in this catalog.",
    "If the request is unrelated, briefly say you only help with SipWiki games, then recommend three broadly useful catalog games.",
    "Keep reasons practical, upbeat, and under 30 words. Never pressure alcohol use; games can be played with non-alcoholic drinks.",
  ].join(" ");

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/" + encodeURIComponent(model) + ":generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemInstruction }] },
          contents: [{
            role: "user",
            parts: [{
              text: "USER REQUEST:\n" + query + "\n\nSIPWIKI CATALOG:\n" + JSON.stringify(catalogForModel),
            }],
          }],
          generationConfig: {
            temperature: 0.25,
            maxOutputTokens: 1800,
            responseMimeType: "application/json",
            responseSchema,
          },
        }),
        signal: AbortSignal.timeout(12000),
      }
    );

    if (!response.ok) {
      console.warn("Gemini game finder request failed; trying backup AI", response.status);
      return openAIFallback(query, fallback, rateHeaders, request);
    }

    const payload = await response.json() as {
      candidates?: Array<{ content?: { parts?: Array<{ text?: string; thought?: boolean }> } }>;
    };
    const text = payload.candidates?.[0]?.content?.parts?.filter((part) => !part.thought).map((part) => part.text ?? "").join("");
    if (!text) return json(fallback, 200, rateHeaders);

    const modelResult = JSON.parse(text.replace(/^\u0060\u0060\u0060json\s*|\s*\u0060\u0060\u0060$/g, ""));
    return json(validateGeminiRecommendations(modelResult, query, games, fallback), 200, rateHeaders);
  } catch (error) {
    console.warn("Gemini game finder error; trying backup AI", error instanceof Error ? error.message : "Unknown error");
    return openAIFallback(query, fallback, rateHeaders, request);
  }
}
