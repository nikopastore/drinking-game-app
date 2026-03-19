import { Game } from "@/types";
import { formatPlayerCount } from "@/lib/utils";

export type GameQuickFacts = {
  players: string;
  gameLength: string;
  difficulty: "Easy" | "Medium" | "Hard";
  equipment: string[];
  intensity: "Low" | "Medium" | "High";
  popularity: string;
};

const classicSlugs = new Set([
  "beer-pong",
  "kings-cup",
  "flip-cup",
  "rage-cage",
  "never-have-i-ever",
  "quarters",
  "power-hour",
  "thunderstruck",
  "ride-the-bus",
]);

const intensityByLevel: Record<Game["drunkenness_level"], GameQuickFacts["intensity"]> = {
  1: "Low",
  2: "Low",
  3: "Medium",
  4: "High",
  5: "High",
};

const difficultyByLevel: Record<Game["drunkenness_level"], GameQuickFacts["difficulty"]> = {
  1: "Easy",
  2: "Easy",
  3: "Medium",
  4: "Hard",
  5: "Hard",
};

const lengthByLevel: Record<Game["drunkenness_level"], string> = {
  1: "10–15 min",
  2: "15–25 min",
  3: "25–40 min",
  4: "40–60 min",
  5: "60+ min",
};

const formatDurationRange = (min: number, max?: number | null) => {
  if (max && max > min) {
    return `${min}–${max} min`;
  }
  return `${min}+ min`;
};

const buildPopularityContext = (game: Game): string => {
  if (game.popularity) {
    return game.popularity;
  }

  if (classicSlugs.has(game.slug)) {
    return "Classic party staple with broad name recognition.";
  }

  if (game.materials[0] === "no prop") {
    return "Popular icebreaker when you want to start fast without setup.";
  }

  if (game.max_players === null || game.max_players >= 8) {
    return "Popular choice for big groups and loud party energy.";
  }

  if (game.alcohol_type === "beer") {
    return "Popular for house parties and tailgates.";
  }

  return "Popular pick for casual game nights and smaller groups.";
};

export const getGameQuickFacts = (game: Game): GameQuickFacts => {
  const players = formatPlayerCount(game.min_players, game.max_players);

  const gameLength = game.estimated_time_minutes
    ? formatDurationRange(
        game.estimated_time_minutes.min,
        game.estimated_time_minutes.max
      )
    : lengthByLevel[game.drunkenness_level];

  const difficulty = game.difficulty || difficultyByLevel[game.drunkenness_level];
  const intensity = game.intensity || intensityByLevel[game.drunkenness_level];

  const equipment =
    game.materials[0] === "no prop"
      ? ["No props needed"]
      : game.materials.map((material) => material);

  return {
    players,
    gameLength,
    difficulty,
    equipment,
    intensity,
    popularity: buildPopularityContext(game),
  };
};
