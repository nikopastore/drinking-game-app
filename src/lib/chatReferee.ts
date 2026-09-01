import { z } from "zod";
import { getGameBySlug } from "@/config/gameData";
import type { Game } from "@/types";

/**
 * Chat body validation. Catalog rules are looked up by slug; client-supplied
 * `rules` / `gameName` are ignored so they cannot rewrite the system prompt.
 */
export const ChatRequestSchema = z.object({
  gameSlug: z
    .string()
    .min(1, "Game is required")
    .max(100, "Game slug too long")
    .regex(/^[a-z0-9-]+$/, "Invalid game slug"),
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
  gameName: z.string().max(100).optional(),
  rules: z.string().max(10000).optional(),
});

export type ResolvedChatRequest = {
  game: Game;
  message: string;
  history: Array<{ role: "user" | "assistant"; content: string }>;
};

export function resolveChatRequest(
  body: unknown
): { ok: true; data: ResolvedChatRequest } | { ok: false; error: string } {
  const parseResult = ChatRequestSchema.safeParse(body);
  if (!parseResult.success) {
    const errors = parseResult.error.issues.map((issue) => issue.message).join(", ");
    return { ok: false, error: `Invalid request: ${errors}` };
  }

  const game = getGameBySlug(parseResult.data.gameSlug);
  if (!game) {
    return { ok: false, error: "Unknown game" };
  }

  return {
    ok: true,
    data: {
      game,
      message: parseResult.data.message,
      history: parseResult.data.history,
    },
  };
}

export function getSystemPrompt(game: Game): string {
  return `You are the official referee for "${game.name}". You know the rules inside and out.

RULES:
${game.rules_text}

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
