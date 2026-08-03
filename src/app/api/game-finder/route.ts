import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { games } from "@/config/gameData";
import {
  findCatalogMatches,
  validateGeminiRecommendations,
} from "@/lib/gameFinder";
import {
  checkRateLimit,
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

export async function POST(request: NextRequest) {
  const rateLimit = checkRateLimit(getClientIP(request), rateLimiters.chat);
  const rateHeaders = createRateLimitHeaders(rateLimit);

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
    return json({ error: "Describe the kind of SipWiki game you want in 3?300 characters." }, 400, rateHeaders);
  }

  const query = parsed.data.query;
  const fallback = findCatalogMatches(query, games);
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return json({
      ...fallback,
      notice: "Smart catalog matching is active. Add GEMINI_API_KEY to enable Gemini reasoning.",
    }, 200, rateHeaders);
  }

  const model = process.env.GEMINI_MODEL || "gemini-2.5-flash-lite";
  const systemInstruction = [
    "You are SipWiki?s game finder.",
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
            maxOutputTokens: 700,
            responseMimeType: "application/json",
            responseSchema,
          },
        }),
        signal: AbortSignal.timeout(12000),
      }
    );

    if (!response.ok) {
      console.error("Gemini game finder request failed", response.status);
      return json({
        ...fallback,
        notice: "Gemini is temporarily unavailable, so these matches were found directly from SipWiki?s catalog.",
      }, 200, rateHeaders);
    }

    const payload = await response.json() as {
      candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
    };
    const text = payload.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) return json(fallback, 200, rateHeaders);

    const modelResult = JSON.parse(text.replace(/^\u0060\u0060\u0060json\s*|\s*\u0060\u0060\u0060$/g, ""));
    return json(validateGeminiRecommendations(modelResult, query, games, fallback), 200, rateHeaders);
  } catch (error) {
    console.error("Gemini game finder error", error instanceof Error ? error.message : "Unknown error");
    return json({
      ...fallback,
      notice: "Gemini is temporarily unavailable, so these matches were found directly from SipWiki?s catalog.",
    }, 200, rateHeaders);
  }
}
