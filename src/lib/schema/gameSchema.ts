import { Game } from "@/types";
import { WithContext, Game as GameSchema, HowTo } from "schema-dts";

interface GameSchemaOptions {
  game: Game;
  url: string;
  imageUrl?: string;
  aggregateRating?: {
    ratingValue: number;
    ratingCount: number;
  };
}

/**
 * Generate Game schema for drinking game pages
 * Uses hybrid Game + HowTo approach for maximum SEO impact
 */
export function generateGameSchema(
  options: GameSchemaOptions
): WithContext<GameSchema> {
  const { game, url, imageUrl, aggregateRating } = options;

  const schema: WithContext<GameSchema> = {
    "@context": "https://schema.org",
    "@type": "Game",
    name: game.name,
    description: game.description,
    image: imageUrl || game.image || `/games/${game.slug}.jpg`,
    url: url,
    genre: "Party Game",
    numberOfPlayers: {
      "@type": "QuantitativeValue",
      minValue: game.min_players,
      maxValue: game.max_players || 20, // Default max if unlimited
    },
    keywords: [
      game.name,
      "drinking game",
      "party game",
      game.alcohol_type,
      `${game.min_players} players`,
      `drunkenness level ${game.drunkenness_level}`,
    ].join(", "),
  };

  // Add aggregate rating if available
  if (aggregateRating && aggregateRating.ratingCount >= 5) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      ratingCount: aggregateRating.ratingCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return schema;
}

/**
 * Generate HowTo schema for drinking game rules
 * Provides step-by-step instructions for playing the game
 */
export function generateGameHowToSchema(
  options: GameSchemaOptions
): WithContext<HowTo> {
  const { game, url, imageUrl } = options;

  // Parse rules_text to extract steps
  const steps = parseGameRules(game.rules_text || "");

  // Build supplies list
  const supplies = game.materials?.map((material) => ({
    "@type": "HowToSupply" as const,
    name: material,
  })) || [];

  const schema: WithContext<HowTo> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Play ${game.name}`,
    description: `Complete rules and instructions for playing ${game.name}, a popular drinking game`,
    image: imageUrl || game.image || `/games/${game.slug}.jpg`,
    totalTime: getEstimatedGameTime(game),
    supply: supplies,
    tool: [
      {
        "@type": "HowToTool",
        name: game.alcohol_type === "any" ? "Alcoholic beverages" : game.alcohol_type,
      },
    ],
    step: steps.map((step, index) => ({
      "@type": "HowToStep" as const,
      position: index + 1,
      name: step.title,
      text: step.text,
    })),
  };

  return schema;
}

/**
 * Parse game rules text into structured steps
 * Extracts sections like "Setup", "Gameplay", "Winning" etc.
 */
function parseGameRules(rulesText: string): Array<{ title: string; text: string }> {
  const steps: Array<{ title: string; text: string }> = [];

  // Split by markdown headers (** **:)
  const sections = rulesText.split(/\*\*([^*]+)\*\*:/);

  for (let i = 1; i < sections.length; i += 2) {
    const title = sections[i].trim();
    const text = sections[i + 1]?.trim() || "";

    if (title && text) {
      steps.push({ title, text });
    }
  }

  // If no sections found, create a single step
  if (steps.length === 0) {
    steps.push({
      title: "How to Play",
      text: rulesText,
    });
  }

  return steps;
}

/**
 * Estimate game duration based on drunkenness level
 */
function getEstimatedGameTime(game: Game): string {
  // Higher drunkenness = longer game usually
  const level = game.drunkenness_level || 3;

  if (level <= 2) return "PT15M"; // 15 minutes
  if (level <= 3) return "PT30M"; // 30 minutes
  if (level <= 4) return "PT45M"; // 45 minutes
  return "PT60M"; // 60 minutes
}

/**
 * Generate combined Game + HowTo schemas in a graph
 * This is the recommended approach for maximum SEO benefit
 */
export function generateCombinedGameSchemas(
  options: GameSchemaOptions
): { "@context": string; "@graph": Array<GameSchema | HowTo> } {
  return {
    "@context": "https://schema.org",
    "@graph": [
      generateGameSchema(options) as GameSchema,
      generateGameHowToSchema(options) as HowTo,
    ],
  };
}
