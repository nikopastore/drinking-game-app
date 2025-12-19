/**
 * MCP API Route for ChatGPT Apps SDK
 *
 * This endpoint handles Model Context Protocol requests from ChatGPT.
 * It exposes SipWiki's drinking game data as tools that ChatGPT can use.
 */

import { NextRequest, NextResponse } from "next/server";
import { games } from "@/config/gameData";
import { Game } from "@/types";

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
  description: "Find the perfect drinking game for your party! Search 100+ games like Kings Cup, Beer Pong, Flip Cup, Never Have I Ever with complete rules. Filter by players, materials & intensity.",
  vendor: "SipWiki",
  homepage: SIPWIKI_URL,
  categories: ["lifestyle", "games", "entertainment", "social"],
  keywords: [
    "drinking games",
    "party games",
    "beer pong",
    "kings cup",
    "flip cup",
    "never have i ever",
    "drinking game rules",
    "party ideas",
    "college games",
    "bar games"
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

    default:
      return {
        content: [
          {
            type: "text",
            text: `Unknown tool: ${name}. Available tools: search_drinking_games, get_drinking_game_rules, spin_the_wheel, browse_game_categories`,
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
  });
}
