import { Game } from "@/types";

export interface GameFinderRecommendation {
  slug: string;
  reason: string;
  matchScore: number;
}

export interface GameFinderResult {
  query: string;
  summary: string;
  recommendations: GameFinderRecommendation[];
  source: "gemini" | "catalog";
  notice?: string;
}

interface QuerySignals {
  playerCount: number | null;
  noProps: boolean;
  materials: string[];
  alcohol: "beer" | "liquor" | null;
  intensity: number | null;
  maxMinutes: number | null;
  tokens: string[];
  isSiteIntent: boolean;
}

const materialAliases: Record<string, string[]> = {
  cards: ["card", "cards", "deck"],
  dice: ["die", "dice"],
  cups: ["cup", "cups"],
  "ping pong balls": ["ping pong", "ball", "balls"],
};

function parseSignals(query: string): QuerySignals {
  const normalized = query.toLowerCase();
  const playerMatch = normalized.match(/\b(\d{1,2})\s*(?:people|players|friends|guests|of us)\b/);
  const durationMatch = normalized.match(/(?:under|within|about|max(?:imum)?|for)?\s*(\d{1,3})\s*(?:min|mins|minutes)\b/);
  const noProps = /\b(?:no|without)\s+(?:props?|equipment|supplies|cards?|cups?|dice)|\bnothing (?:needed|required)|\bempty[- ]handed/.test(normalized);
  const materials = noProps
    ? []
    : Object.entries(materialAliases)
        .filter(([, aliases]) => aliases.some((alias) => normalized.includes(alias)))
        .map(([material]) => material);

  let intensity: number | null = null;
  if (/\b(chill|light|easy|casual|relaxed|low.?key|beginner)\b/.test(normalized)) intensity = 2;
  if (/\b(medium|moderate|balanced)\b/.test(normalized)) intensity = 3;
  if (/\b(wild|chaotic|intense|extreme|rowdy|hard)\b/.test(normalized)) intensity = 5;

  const alcohol = /\b(beer|seltzer)\b/.test(normalized)
    ? "beer"
    : /\b(liquor|spirits?|shots?)\b/.test(normalized)
      ? "liquor"
      : null;

  const tokens = normalized
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 2 && !["the", "and", "for", "with", "game", "games", "want", "need", "find"].includes(token));

  return {
    playerCount: playerMatch ? Number(playerMatch[1]) : null,
    noProps,
    materials,
    alcohol,
    intensity,
    maxMinutes: durationMatch ? Number(durationMatch[1]) : null,
    tokens,
    isSiteIntent: /\b(game|party|friends?|people|players?|cards?|cups?|dice|props?|chill|wild|minutes?|beer|liquor|drink|quick|group)\b/.test(normalized),
  };
}

function materialMatches(gameMaterial: string, wanted: string): boolean {
  const left = gameMaterial.toLowerCase();
  return left.includes(wanted) || wanted.includes(left);
}

function buildReason(game: Game, signals: QuerySignals): string {
  const reasons: string[] = [];
  if (signals.playerCount !== null) reasons.push("fits " + signals.playerCount + " players");
  if (signals.noProps && game.materials.includes("no prop")) reasons.push("needs no props");
  if (signals.materials.length > 0) reasons.push("uses " + signals.materials.join(" and "));
  if (signals.intensity !== null) reasons.push(signals.intensity <= 2 ? "keeps the energy easygoing" : signals.intensity >= 5 ? "brings high-energy chaos" : "has a balanced pace");
  if (signals.maxMinutes !== null && game.estimated_time_minutes?.min) reasons.push("can fit your time window");
  if (reasons.length === 0) reasons.push(game.description.replace(/[.!?].*$/, "").toLowerCase());
  return "A strong match because it " + reasons.slice(0, 3).join(", ") + ".";
}

export function findCatalogMatches(query: string, catalog: Game[], limit = 3): GameFinderResult {
  const signals = parseSignals(query);
  const scored = catalog.map((game, index) => {
    let score = Math.max(0, 12 - index * 0.04);
    const searchable = [game.name, game.description, game.rules_text, ...game.materials].join(" ").toLowerCase();

    if (signals.playerCount !== null) {
      const fits = game.min_players <= signals.playerCount && (game.max_players === null || game.max_players >= signals.playerCount);
      score += fits ? 34 : -30;
    }

    if (signals.noProps) score += game.materials.includes("no prop") ? 34 : -26;
    if (signals.materials.length > 0) {
      const count = signals.materials.filter((wanted) => game.materials.some((item) => materialMatches(item, wanted))).length;
      score += count * 20;
      if (count === 0) score -= 12;
    }

    if (signals.alcohol) score += game.alcohol_type === signals.alcohol || game.alcohol_type === "any" ? 12 : -8;
    if (signals.intensity !== null) score += 15 - Math.abs(game.drunkenness_level - signals.intensity) * 5;
    if (signals.maxMinutes !== null && game.estimated_time_minutes) {
      score += game.estimated_time_minutes.min <= signals.maxMinutes ? 14 : -8;
    }

    score += signals.tokens.filter((token) => searchable.includes(token)).length * 3;
    return { game, score };
  });

  const recommendations = scored
    .sort((a, b) => b.score - a.score || a.game.name.localeCompare(b.game.name))
    .slice(0, limit)
    .map(({ game, score }) => ({
      slug: game.slug,
      reason: buildReason(game, signals),
      matchScore: Math.max(58, Math.min(98, Math.round(score + 42))),
    }));

  return {
    query,
    summary: signals.isSiteIntent
      ? "These are the closest matches from SipWiki's game library."
      : "I can only help with games and information in SipWiki, so here are a few library favorites.",
    recommendations,
    source: "catalog",
  };
}

export function validateGeminiRecommendations(
  value: unknown,
  query: string,
  catalog: Game[],
  fallback: GameFinderResult
): GameFinderResult {
  if (!value || typeof value !== "object") return fallback;
  const record = value as Record<string, unknown>;
  const validSlugs = new Set(catalog.map((game) => game.slug));
  const seen = new Set<string>();
  const raw = Array.isArray(record.recommendations) ? record.recommendations : [];

  const recommendations: GameFinderRecommendation[] = raw.flatMap((item) => {
    if (!item || typeof item !== "object") return [];
    const candidate = item as Record<string, unknown>;
    const slug = typeof candidate.slug === "string" ? candidate.slug : "";
    if (!validSlugs.has(slug) || seen.has(slug)) return [];
    seen.add(slug);
    return [{
      slug,
      reason: typeof candidate.reason === "string"
        ? candidate.reason.slice(0, 240)
        : "A close match from the SipWiki library.",
      matchScore: typeof candidate.matchScore === "number"
        ? Math.max(1, Math.min(100, Math.round(candidate.matchScore)))
        : 80,
    }];
  });

  for (const recommendation of fallback.recommendations) {
    if (recommendations.length >= 3) break;
    if (!seen.has(recommendation.slug)) recommendations.push(recommendation);
  }

  return {
    query,
    summary: typeof record.summary === "string"
      ? record.summary.slice(0, 280)
      : "Here are the closest matches from SipWiki.",
    recommendations: recommendations.slice(0, 3),
    source: "gemini",
  };
}
