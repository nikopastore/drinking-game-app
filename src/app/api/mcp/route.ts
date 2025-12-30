/**
 * MCP API Route for ChatGPT Apps SDK
 *
 * This endpoint handles Model Context Protocol requests from ChatGPT.
 * It exposes SipWiki's drinking game data as tools that ChatGPT can use.
 */

// Force static export for mobile builds - API not available in mobile app
export const dynamic = "force-static";

import { NextRequest, NextResponse } from "next/server";
import { games } from "@/config/gameData";
import { cocktails } from "@/config/cocktailData";
import { Game, Cocktail } from "@/types";

const SIPWIKI_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sipwiki.com";

// Helper function to format game for response
function formatGameSummary(game: Game) {
  return {
    id: game.id,
    slug: game.slug,
    name: game.name,
    description: game.description,
    players: game.max_players
      ? `${game.min_players}-${game.max_players}`
      : `${game.min_players}+`,
    materials: game.materials,
    alcoholType: game.alcohol_type,
    sipFactor: game.drunkenness_level,
    url: `${SIPWIKI_URL}/game/${game.slug}`,
    image: game.image ? `${SIPWIKI_URL}${game.image}` : null,
  };
}

function formatGameFull(game: Game) {
  return {
    ...formatGameSummary(game),
    rules: game.rules_text,
    videoUrl: game.video_url || null,
  };
}

// Helper function to format cocktail for response
function formatCocktailSummary(cocktail: Cocktail) {
  const difficultyLabel = ["Easy", "Medium", "Hard"][cocktail.difficulty - 1];
  return {
    id: cocktail.id,
    slug: cocktail.slug,
    name: cocktail.name,
    description: cocktail.description,
    baseSpirit: cocktail.baseSpirit,
    category: cocktail.category,
    glass: cocktail.glass,
    difficulty: difficultyLabel,
    strength: cocktail.strength,
    ingredientCount: cocktail.ingredients.length,
    url: `${SIPWIKI_URL}/cocktails/${cocktail.slug}`,
  };
}

function formatCocktailFull(cocktail: Cocktail) {
  const difficultyLabel = ["Easy", "Medium", "Hard"][cocktail.difficulty - 1];
  return {
    ...formatCocktailSummary(cocktail),
    ingredients: cocktail.ingredients.map((i) =>
      `${i.amount}${i.unit ? ` ${i.unit}` : ""} ${i.name}`
    ),
    instructions: cocktail.instructions,
    garnish: cocktail.garnish || "None",
    tags: cocktail.tags,
  };
}

// Cocktail categories
const cocktailCategories = [
  { slug: "vodka", name: "Vodka Cocktails", filter: (c: Cocktail) => c.baseSpirit === "vodka" },
  { slug: "gin", name: "Gin Cocktails", filter: (c: Cocktail) => c.baseSpirit === "gin" },
  { slug: "rum", name: "Rum Cocktails", filter: (c: Cocktail) => c.baseSpirit === "rum" },
  { slug: "tequila", name: "Tequila Cocktails", filter: (c: Cocktail) => c.baseSpirit === "tequila" },
  { slug: "whiskey", name: "Whiskey Cocktails", filter: (c: Cocktail) => c.baseSpirit === "whiskey" },
  { slug: "classic", name: "Classic Cocktails", filter: (c: Cocktail) => c.category === "classic" },
  { slug: "tropical", name: "Tropical Drinks", filter: (c: Cocktail) => c.category === "tropical" },
  { slug: "shooters", name: "Shooters & Shots", filter: (c: Cocktail) => c.category === "shooter" },
  { slug: "party", name: "Party Drinks", filter: (c: Cocktail) => c.category === "party" },
  { slug: "mocktails", name: "Mocktails (Non-Alcoholic)", filter: (c: Cocktail) => c.category === "mocktail" },
];

// Category definitions
const categories = [
  { slug: "card-games", name: "Card Games", filter: (g: Game) => g.materials.includes("cards") },
  { slug: "cup-games", name: "Cup Games", filter: (g: Game) => g.materials.includes("cups") },
  { slug: "dice-games", name: "Dice Games", filter: (g: Game) => g.materials.includes("dice") },
  { slug: "no-props", name: "No Props Needed", filter: (g: Game) => g.materials.includes("no prop") },
  { slug: "two-player", name: "Two Player", filter: (g: Game) => g.min_players <= 2 && (g.max_players === null || g.max_players >= 2) },
  { slug: "large-groups", name: "Large Groups (6+)", filter: (g: Game) => g.max_players === null || g.max_players >= 6 },
  { slug: "beer-games", name: "Beer Games", filter: (g: Game) => g.alcohol_type === "beer" || g.alcohol_type === "any" },
  { slug: "quick-easy", name: "Quick & Easy", filter: (g: Game) => g.drunkenness_level <= 2 },
  { slug: "extreme", name: "Extreme (High Sip Factor)", filter: (g: Game) => g.drunkenness_level >= 4 },
];

// MCP Server info - optimized for ChatGPT App Directory discoverability
const serverInfo = {
  name: "sipwiki",
  version: "1.0.0",
  description: "Find drinking games and cocktail recipes for your party! Search 100+ games like Kings Cup, Beer Pong with complete rules. Plus 50+ cocktail recipes from Margaritas to Mojitos. Filter by players, spirits, difficulty & more.",
  vendor: "SipWiki",
  homepage: SIPWIKI_URL,
  categories: ["lifestyle", "games", "entertainment", "social", "food-drink"],
  keywords: [
    "drinking games",
    "party games",
    "cocktail recipes",
    "how to make cocktails",
    "margarita recipe",
    "mojito recipe",
    "beer pong",
    "kings cup",
    "mixed drinks",
    "bartending",
    "party ideas"
  ],
};

// Tool definitions - optimized for discoverability
const tools = [
  {
    name: "search_drinking_games",
    description: "Search 100+ drinking games and party games like Kings Cup, Beer Pong, Flip Cup, Never Have I Ever, Quarters, and more. Filter by number of players (2-20+), required materials (cards, dice, cups, ping pong balls, or nothing), drinking intensity (light to heavy), and alcohol type. Perfect for finding the right game for your party, pregame, or college gathering.",
    inputSchema: {
      type: "object",
      properties: {
        players: {
          type: "number",
          description: "Number of players (will find games that support this player count)",
        },
        materials: {
          type: "array",
          items: { type: "string" },
          description: "Materials available (e.g., 'cards', 'dice', 'cups', 'ping pong balls', 'no prop')",
        },
        sipFactor: {
          type: "number",
          minimum: 1,
          maximum: 5,
          description: "Desired intensity/drunkenness level 1-5 (1=light drinking, 5=heavy drinking)",
        },
        alcoholType: {
          type: "string",
          enum: ["beer", "liquor", "any"],
          description: "Type of alcohol for the game (beer, liquor, or any)",
        },
        search: {
          type: "string",
          description: "Search term to find games by name or description",
        },
        limit: {
          type: "number",
          description: "Maximum number of results to return (default: 10)",
        },
      },
    },
  },
  {
    name: "get_drinking_game_rules",
    description: "Get complete rules and how-to-play instructions for any drinking game. Includes step-by-step setup, gameplay rules, variations, and pro tips. Works for classics like Kings Cup (Circle of Death), Beer Pong, Flip Cup, Ride the Bus, Waterfall, and 100+ more party games.",
    inputSchema: {
      type: "object",
      properties: {
        slug: {
          type: "string",
          description: "The game's URL slug (e.g., 'kings-cup', 'beer-pong')",
        },
        name: {
          type: "string",
          description: "The game's name (will search if slug not provided)",
        },
      },
    },
  },
  {
    name: "spin_the_wheel",
    description: "Can't decide what drinking game to play? Spin the wheel! Randomly picks a party game for you, optionally filtered by your group size, available materials, and preferred drinking intensity. Great for spontaneous fun when you want fate to choose your next game.",
    inputSchema: {
      type: "object",
      properties: {
        players: {
          type: "number",
          description: "Number of players",
        },
        materials: {
          type: "array",
          items: { type: "string" },
          description: "Materials you have available",
        },
        sipFactor: {
          type: "number",
          minimum: 1,
          maximum: 5,
          description: "Desired intensity level (1-5)",
        },
        alcoholType: {
          type: "string",
          enum: ["beer", "liquor", "any"],
          description: "Type of alcohol",
        },
      },
    },
  },
  {
    name: "browse_game_categories",
    description: "Browse all drinking game categories: Card Games (Kings Cup, Ride the Bus), Cup Games (Beer Pong, Flip Cup), Dice Games, No Props Needed (Never Have I Ever, Most Likely To), Two Player games, Large Group games (6+ people), and Extreme/High Intensity games. See how many games are in each category.",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },
  // COCKTAIL TOOLS
  {
    name: "search_cocktail_recipes",
    description: "Search 50+ cocktail recipes including classics like Margarita, Mojito, Old Fashioned, Moscow Mule, Martini, Cosmopolitan, and more. Filter by base spirit (vodka, gin, rum, tequila, whiskey), category (classic, tropical, shooter, party, mocktail), difficulty (easy, medium, hard), and strength. Find the perfect drink for any occasion.",
    inputSchema: {
      type: "object",
      properties: {
        spirit: {
          type: "string",
          enum: ["vodka", "gin", "rum", "tequila", "whiskey", "brandy", "none", "various"],
          description: "Base spirit for the cocktail (use 'none' for mocktails/non-alcoholic)",
        },
        category: {
          type: "string",
          enum: ["classic", "tropical", "shooter", "party", "mocktail", "beer-cocktail", "wine-cocktail"],
          description: "Type of cocktail",
        },
        difficulty: {
          type: "number",
          minimum: 1,
          maximum: 3,
          description: "Difficulty level: 1=easy, 2=medium, 3=hard",
        },
        strength: {
          type: "number",
          minimum: 1,
          maximum: 5,
          description: "Alcohol strength: 1=light, 5=strong (1 for mocktails)",
        },
        search: {
          type: "string",
          description: "Search by name, ingredient, or tag (e.g., 'vodka', 'lime', 'refreshing')",
        },
        limit: {
          type: "number",
          description: "Maximum results to return (default: 10)",
        },
      },
    },
  },
  {
    name: "get_cocktail_recipe",
    description: "Get the complete recipe for a specific cocktail including all ingredients with measurements, step-by-step instructions, glass type, garnish, and pro tips. Works for classics like Margarita, Mojito, Old Fashioned, Martini, Moscow Mule, Pina Colada, Long Island Iced Tea, and 50+ more.",
    inputSchema: {
      type: "object",
      properties: {
        slug: {
          type: "string",
          description: "The cocktail's URL slug (e.g., 'margarita', 'moscow-mule', 'old-fashioned')",
        },
        name: {
          type: "string",
          description: "The cocktail's name (will search if slug not provided)",
        },
      },
    },
  },
  {
    name: "random_cocktail",
    description: "Can't decide what to drink? Get a random cocktail recipe! Optionally filter by spirit, category, or difficulty. Perfect for trying something new or letting fate choose your next drink.",
    inputSchema: {
      type: "object",
      properties: {
        spirit: {
          type: "string",
          enum: ["vodka", "gin", "rum", "tequila", "whiskey", "brandy", "none"],
          description: "Base spirit preference",
        },
        category: {
          type: "string",
          enum: ["classic", "tropical", "shooter", "party", "mocktail"],
          description: "Type of cocktail",
        },
        difficulty: {
          type: "number",
          minimum: 1,
          maximum: 3,
          description: "Maximum difficulty level",
        },
      },
    },
  },
  {
    name: "browse_cocktail_categories",
    description: "Browse all cocktail categories: Vodka Cocktails (Cosmopolitan, Moscow Mule), Gin Cocktails (Martini, Negroni), Rum Cocktails (Mojito, Pina Colada), Tequila Cocktails (Margarita, Paloma), Whiskey Cocktails (Old Fashioned, Manhattan), Tropical drinks, Shooters, Party punches, and Mocktails. See how many recipes are in each category.",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },
];

// Handle tool execution
function executeTool(name: string, args: Record<string, unknown>): { content: Array<{ type: string; text: string }> } {
  switch (name) {
    case "search_drinking_games":
    case "search_games": {
      const { players, materials, sipFactor, alcoholType, search, limit = 10 } = args as {
        players?: number;
        materials?: string[];
        sipFactor?: number;
        alcoholType?: "beer" | "liquor" | "any";
        search?: string;
        limit?: number;
      };

      let filtered = [...games];

      if (players) {
        filtered = filtered.filter(
          (g) => g.min_players <= players && (g.max_players === null || g.max_players >= players)
        );
      }

      if (materials && materials.length > 0) {
        filtered = filtered.filter((g) => {
          if (materials.includes("no prop") && g.materials.includes("no prop")) {
            return true;
          }
          const gameMaterials = g.materials.filter((m) => m !== "no prop");
          if (gameMaterials.length === 0) return materials.includes("no prop");
          return gameMaterials.every((m) => materials.includes(m));
        });
      }

      if (sipFactor) {
        filtered = filtered.filter((g) => g.drunkenness_level === sipFactor);
      }

      if (alcoholType && alcoholType !== "any") {
        filtered = filtered.filter(
          (g) => g.alcohol_type === alcoholType || g.alcohol_type === "any"
        );
      }

      if (search) {
        const searchLower = search.toLowerCase();
        filtered = filtered.filter(
          (g) =>
            g.name.toLowerCase().includes(searchLower) ||
            g.description.toLowerCase().includes(searchLower)
        );
      }

      const results = filtered.slice(0, limit).map(formatGameSummary);

      return {
        content: [
          {
            type: "text",
            text: results.length > 0
              ? `Found ${filtered.length} drinking games${filtered.length > limit ? ` (showing first ${limit})` : ""}:\n\n${results
                  .map(
                    (g, i) =>
                      `${i + 1}. **${g.name}** (${g.players} players, Sip Factor: ${"🍷".repeat(g.sipFactor)})\n   ${g.description}\n   Materials: ${g.materials.join(", ")}\n   [View Full Rules](${g.url})`
                  )
                  .join("\n\n")}`
              : "No games found matching your criteria. Try adjusting your filters or removing some requirements!",
          },
        ],
      };
    }

    case "get_drinking_game_rules":
    case "get_game_rules": {
      const { slug, name: gameName } = args as { slug?: string; name?: string };

      let game: Game | undefined;

      if (slug) {
        game = games.find((g) => g.slug === slug);
      } else if (gameName) {
        const nameLower = gameName.toLowerCase();
        game = games.find(
          (g) =>
            g.name.toLowerCase() === nameLower ||
            g.name.toLowerCase().includes(nameLower)
        );
      }

      if (!game) {
        return {
          content: [
            {
              type: "text",
              text: `Game not found. Try searching for games with the search_games tool to see available options.`,
            },
          ],
        };
      }

      const formatted = formatGameFull(game);

      return {
        content: [
          {
            type: "text",
            text: `# ${formatted.name}\n\n` +
              `**Players:** ${formatted.players}\n` +
              `**Materials Needed:** ${formatted.materials.join(", ")}\n` +
              `**Best For:** ${formatted.alcoholType === "beer" ? "Beer/Seltzer" : formatted.alcoholType === "liquor" ? "Liquor/Shots" : "Any Drink"}\n` +
              `**Sip Factor:** ${"🍷".repeat(formatted.sipFactor)} (${formatted.sipFactor}/5 - ${formatted.sipFactor <= 2 ? "Light drinking" : formatted.sipFactor <= 3 ? "Moderate drinking" : "Heavy drinking"})\n\n` +
              `## About\n${formatted.description}\n\n` +
              `## How to Play\n${formatted.rules}\n\n` +
              `---\n[Play this game on SipWiki](${formatted.url})`,
          },
        ],
      };
    }

    case "spin_the_wheel":
    case "random_game": {
      const { players, materials, sipFactor, alcoholType } = args as {
        players?: number;
        materials?: string[];
        sipFactor?: number;
        alcoholType?: "beer" | "liquor" | "any";
      };

      let filtered = [...games];

      if (players) {
        filtered = filtered.filter(
          (g) => g.min_players <= players && (g.max_players === null || g.max_players >= players)
        );
      }

      if (materials && materials.length > 0) {
        filtered = filtered.filter((g) => {
          if (materials.includes("no prop") && g.materials.includes("no prop")) {
            return true;
          }
          const gameMaterials = g.materials.filter((m) => m !== "no prop");
          if (gameMaterials.length === 0) return materials.includes("no prop");
          return gameMaterials.every((m) => materials.includes(m));
        });
      }

      if (sipFactor) {
        filtered = filtered.filter((g) => g.drunkenness_level === sipFactor);
      }

      if (alcoholType && alcoholType !== "any") {
        filtered = filtered.filter(
          (g) => g.alcohol_type === alcoholType || g.alcohol_type === "any"
        );
      }

      if (filtered.length === 0) {
        return {
          content: [
            {
              type: "text",
              text: "🎰 No games match your criteria! Try removing some filters and spin again.",
            },
          ],
        };
      }

      const randomIndex = Math.floor(Math.random() * filtered.length);
      const game = filtered[randomIndex];
      const formatted = formatGameFull(game);

      return {
        content: [
          {
            type: "text",
            text: `🎰 **The wheel has spoken!** You're playing...\n\n` +
              `# ${formatted.name}\n\n` +
              `**Players:** ${formatted.players}\n` +
              `**Materials:** ${formatted.materials.join(", ")}\n` +
              `**Sip Factor:** ${"🍷".repeat(formatted.sipFactor)} (${formatted.sipFactor}/5)\n\n` +
              `${formatted.description}\n\n` +
              `## Quick Start Rules\n${formatted.rules.length > 800 ? formatted.rules.slice(0, 800) + "...\n\n*[See full rules on SipWiki]*" : formatted.rules}\n\n` +
              `---\n[View Full Rules & Tips on SipWiki](${formatted.url})`,
          },
        ],
      };
    }

    case "browse_game_categories":
    case "get_categories": {
      const categoryList = categories.map((cat) => {
        const count = games.filter(cat.filter).length;
        return {
          slug: cat.slug,
          name: cat.name,
          gameCount: count,
          url: `${SIPWIKI_URL}/games/${cat.slug}`,
        };
      });

      return {
        content: [
          {
            type: "text",
            text: `# Drinking Game Categories\n\n` +
              `Browse our collection of ${games.length} drinking games:\n\n` +
              categoryList
                .map((c) => `- **${c.name}** - ${c.gameCount} games ([Browse](${c.url}))`)
                .join("\n") +
              `\n\n---\n[Explore all games on SipWiki](${SIPWIKI_URL}/games)`,
          },
        ],
      };
    }

    // COCKTAIL TOOL HANDLERS
    case "search_cocktail_recipes": {
      const { spirit, category, difficulty, strength, search, limit = 10 } = args as {
        spirit?: Cocktail["baseSpirit"];
        category?: Cocktail["category"];
        difficulty?: number;
        strength?: number;
        search?: string;
        limit?: number;
      };

      let filtered = [...cocktails];

      if (spirit) {
        filtered = filtered.filter((c) => c.baseSpirit === spirit);
      }

      if (category) {
        filtered = filtered.filter((c) => c.category === category);
      }

      if (difficulty) {
        filtered = filtered.filter((c) => c.difficulty === difficulty);
      }

      if (strength) {
        filtered = filtered.filter((c) => c.strength === strength);
      }

      if (search) {
        const searchLower = search.toLowerCase();
        filtered = filtered.filter(
          (c) =>
            c.name.toLowerCase().includes(searchLower) ||
            c.description.toLowerCase().includes(searchLower) ||
            c.tags.some((t) => t.toLowerCase().includes(searchLower)) ||
            c.ingredients.some((i) => i.name.toLowerCase().includes(searchLower))
        );
      }

      const results = filtered.slice(0, limit).map(formatCocktailSummary);

      return {
        content: [
          {
            type: "text",
            text: results.length > 0
              ? `Found ${filtered.length} cocktail recipes${filtered.length > limit ? ` (showing first ${limit})` : ""}:\n\n${results
                  .map(
                    (c, i) =>
                      `${i + 1}. **${c.name}** (${c.baseSpirit === "none" ? "Non-Alcoholic" : c.baseSpirit}, ${c.difficulty})\n   ${c.description}\n   Glass: ${c.glass} | Strength: ${"🍸".repeat(c.strength)}\n   [View Recipe](${c.url})`
                  )
                  .join("\n\n")}`
              : "No cocktails found matching your criteria. Try adjusting your filters!",
          },
        ],
      };
    }

    case "get_cocktail_recipe": {
      const { slug, name: cocktailName } = args as { slug?: string; name?: string };

      let cocktail: Cocktail | undefined;

      if (slug) {
        cocktail = cocktails.find((c) => c.slug === slug);
      } else if (cocktailName) {
        const nameLower = cocktailName.toLowerCase();
        cocktail = cocktails.find(
          (c) =>
            c.name.toLowerCase() === nameLower ||
            c.name.toLowerCase().includes(nameLower)
        );
      }

      if (!cocktail) {
        return {
          content: [
            {
              type: "text",
              text: `Cocktail not found. Try searching for cocktails with the search_cocktail_recipes tool.`,
            },
          ],
        };
      }

      const formatted = formatCocktailFull(cocktail);

      return {
        content: [
          {
            type: "text",
            text: `# ${formatted.name}\n\n` +
              `${formatted.description}\n\n` +
              `**Base Spirit:** ${formatted.baseSpirit === "none" ? "Non-Alcoholic" : formatted.baseSpirit.charAt(0).toUpperCase() + formatted.baseSpirit.slice(1)}\n` +
              `**Glass:** ${formatted.glass}\n` +
              `**Difficulty:** ${formatted.difficulty}\n` +
              `**Strength:** ${"🍸".repeat(formatted.strength)} (${formatted.strength}/5)\n\n` +
              `## Ingredients\n${formatted.ingredients.map((i) => `- ${i}`).join("\n")}\n\n` +
              `## Instructions\n${formatted.instructions.map((s, i) => `${i + 1}. ${s}`).join("\n")}\n\n` +
              `**Garnish:** ${formatted.garnish}\n\n` +
              `---\n[View on SipWiki](${formatted.url})`,
          },
        ],
      };
    }

    case "random_cocktail": {
      const { spirit, category, difficulty } = args as {
        spirit?: Cocktail["baseSpirit"];
        category?: Cocktail["category"];
        difficulty?: number;
      };

      let filtered = [...cocktails];

      if (spirit) {
        filtered = filtered.filter((c) => c.baseSpirit === spirit);
      }

      if (category) {
        filtered = filtered.filter((c) => c.category === category);
      }

      if (difficulty) {
        filtered = filtered.filter((c) => c.difficulty <= difficulty);
      }

      if (filtered.length === 0) {
        return {
          content: [
            {
              type: "text",
              text: "🍹 No cocktails match your criteria! Try removing some filters.",
            },
          ],
        };
      }

      const randomIndex = Math.floor(Math.random() * filtered.length);
      const cocktail = filtered[randomIndex];
      const formatted = formatCocktailFull(cocktail);

      return {
        content: [
          {
            type: "text",
            text: `🍹 **The bartender recommends...**\n\n` +
              `# ${formatted.name}\n\n` +
              `${formatted.description}\n\n` +
              `**Glass:** ${formatted.glass} | **Difficulty:** ${formatted.difficulty} | **Strength:** ${"🍸".repeat(formatted.strength)}\n\n` +
              `## Ingredients\n${formatted.ingredients.map((i) => `- ${i}`).join("\n")}\n\n` +
              `## Quick Instructions\n${formatted.instructions.slice(0, 4).map((s, i) => `${i + 1}. ${s}`).join("\n")}${formatted.instructions.length > 4 ? "\n..." : ""}\n\n` +
              `---\n[Full Recipe on SipWiki](${formatted.url})`,
          },
        ],
      };
    }

    case "browse_cocktail_categories": {
      const categoryList = cocktailCategories.map((cat) => {
        const count = cocktails.filter(cat.filter).length;
        return {
          slug: cat.slug,
          name: cat.name,
          count: count,
        };
      });

      return {
        content: [
          {
            type: "text",
            text: `# Cocktail Categories\n\n` +
              `Browse our collection of ${cocktails.length} cocktail recipes:\n\n` +
              categoryList
                .map((c) => `- **${c.name}** - ${c.count} recipes`)
                .join("\n") +
              `\n\n---\n[Explore all cocktails on SipWiki](${SIPWIKI_URL}/cocktails)`,
          },
        ],
      };
    }

    default:
      return {
        content: [
          {
            type: "text",
            text: `Unknown tool: ${name}. Available tools: search_drinking_games, get_drinking_game_rules, spin_the_wheel, browse_game_categories, search_cocktail_recipes, get_cocktail_recipe, random_cocktail, browse_cocktail_categories`,
          },
        ],
      };
  }
}

// Handle MCP protocol requests
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { method, params, id } = body;

    let result: unknown;

    switch (method) {
      case "initialize":
        result = {
          protocolVersion: "2024-11-05",
          capabilities: {
            tools: {},
            resources: {},
          },
          serverInfo,
        };
        break;

      case "tools/list":
        result = { tools };
        break;

      case "tools/call":
        const { name, arguments: args } = params;
        result = executeTool(name, args || {});
        break;

      case "resources/list":
        result = {
          resources: [
            {
              uri: `${SIPWIKI_URL}/chatgpt-widget.html`,
              name: "SipWiki Game Widget",
              description: "Interactive widget for displaying drinking games",
              mimeType: "text/html",
            },
          ],
        };
        break;

      case "resources/read":
        result = {
          contents: [
            {
              uri: params.uri,
              mimeType: "text/html",
              text: `<iframe src="${SIPWIKI_URL}/chatgpt-widget.html" style="width:100%;height:400px;border:none;"></iframe>`,
            },
          ],
        };
        break;

      default:
        return NextResponse.json(
          {
            jsonrpc: "2.0",
            error: { code: -32601, message: `Method not found: ${method}` },
            id,
          },
          { status: 400 }
        );
    }

    return NextResponse.json({
      jsonrpc: "2.0",
      result,
      id,
    });
  } catch (error) {
    console.error("MCP API error:", error);
    return NextResponse.json(
      {
        jsonrpc: "2.0",
        error: { code: -32603, message: "Internal error" },
        id: null,
      },
      { status: 500 }
    );
  }
}

// Handle GET requests - return server info for discovery
export async function GET() {
  return NextResponse.json({
    name: serverInfo.name,
    version: serverInfo.version,
    description: serverInfo.description,
    vendor: serverInfo.vendor,
    homepage: serverInfo.homepage,
    mcp_endpoint: "/api/mcp",
    tools: tools.map((t) => ({ name: t.name, description: t.description })),
    total_games: games.length,
    total_cocktails: cocktails.length,
  });
}
