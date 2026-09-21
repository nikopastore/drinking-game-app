import { getGameBySlug } from "@/config/gameData";
import type { Game } from "@/types";

/** Classics people search for. Drunkenness is a filter, not the ranking. */
export const CLASSIC_GAME_SLUGS = [
  "kings-cup",
  "beer-pong",
  "flip-cup",
] as const;

export function getClassicGames(): Game[] {
  return CLASSIC_GAME_SLUGS.flatMap((slug) => {
    const game = getGameBySlug(slug);
    return game ? [game] : [];
  });
}
