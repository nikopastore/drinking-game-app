/**
 * SipWiki MCP Server for ChatGPT Apps SDK
 *
 * This server exposes drinking game data to ChatGPT through the Model Context Protocol.
 * Tools available:
 * - search_games: Filter games by players, materials, sip factor, alcohol type
 * - get_game_rules: Get full rules for a specific game
 * - random_game: Pick a random game matching criteria (spin the wheel)
 * - get_categories: List all available game categories
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { games } from "../config/gameData";
import { Game } from "../types";

const SIPWIKI_URL = process.env.SIPWIKI_URL || "https://sipwiki.com";

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

// Create server
const server = new Server(
  {
    name: "sipwiki-mcp-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
      resources: {},
    },
  }
);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "search_games",
        description: "Search for drinking games by various criteria. Returns a list of matching games with summaries.",
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
              description: "Desired intensity level 1-5 (1=light drinking, 5=heavy drinking)",
            },
            alcoholType: {
              type: "string",
              enum: ["beer", "liquor", "any"],
              description: "Type of alcohol for the game",
            },
            search: {
              type: "string",
              description: "Search term to find games by name",
            },
            limit: {
              type: "number",
              description: "Maximum number of results to return (default: 10)",
            },
          },
        },
      },
      {
        name: "get_game_rules",
        description: "Get the complete rules and details for a specific drinking game.",
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
        name: "random_game",
        description: "Pick a random drinking game, optionally filtered by criteria. Like spinning a wheel!",
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
              description: "Desired intensity level",
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
        name: "get_categories",
        description: "Get all available game categories with game counts.",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
    ],
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
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

      // Filter by player count
      if (players) {
        filtered = filtered.filter(
          (g) => g.min_players <= players && (g.max_players === null || g.max_players >= players)
        );
      }

      // Filter by materials
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

      // Filter by sip factor
      if (sipFactor) {
        filtered = filtered.filter((g) => g.drunkenness_level === sipFactor);
      }

      // Filter by alcohol type
      if (alcoholType && alcoholType !== "any") {
        filtered = filtered.filter(
          (g) => g.alcohol_type === alcoholType || g.alcohol_type === "any"
        );
      }

      // Filter by search term
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
              ? `Found ${filtered.length} games${filtered.length > limit ? ` (showing first ${limit})` : ""}:\n\n${results
                  .map(
                    (g, i) =>
                      `${i + 1}. **${g.name}** (${g.players} players, Sip Factor: ${"🍷".repeat(g.sipFactor)})\n   ${g.description}\n   Materials: ${g.materials.join(", ")}\n   [View Rules](${g.url})`
                  )
                  .join("\n\n")}`
              : "No games found matching your criteria. Try adjusting your filters!",
          },
        ],
      };
    }

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
              text: `Game not found. Try searching for games with the search_games tool.`,
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
              `**Materials:** ${formatted.materials.join(", ")}\n` +
              `**Alcohol Type:** ${formatted.alcoholType}\n` +
              `**Sip Factor:** ${"🍷".repeat(formatted.sipFactor)} (${formatted.sipFactor}/5)\n\n` +
              `## Description\n${formatted.description}\n\n` +
              `## Rules\n${formatted.rules}\n\n` +
              `[Play on SipWiki](${formatted.url})`,
          },
        ],
      };
    }

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
              text: "No games match your criteria! Try removing some filters.",
            },
          ],
        };
      }

      // Pick random game
      const randomIndex = Math.floor(Math.random() * filtered.length);
      const game = filtered[randomIndex];
      const formatted = formatGameFull(game);

      return {
        content: [
          {
            type: "text",
            text: `🎰 **The wheel has spoken!**\n\n` +
              `# ${formatted.name}\n\n` +
              `**Players:** ${formatted.players}\n` +
              `**Materials:** ${formatted.materials.join(", ")}\n` +
              `**Sip Factor:** ${"🍷".repeat(formatted.sipFactor)} (${formatted.sipFactor}/5)\n\n` +
              `${formatted.description}\n\n` +
              `## Quick Rules\n${formatted.rules.slice(0, 500)}${formatted.rules.length > 500 ? "..." : ""}\n\n` +
              `[View Full Rules on SipWiki](${formatted.url})`,
          },
        ],
      };
    }

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
            text: `# Game Categories\n\n` +
              categoryList
                .map((c) => `- **${c.name}** (${c.gameCount} games) - [Browse](${c.url})`)
                .join("\n") +
              `\n\n**Total Games:** ${games.length}`,
          },
        ],
      };
    }

    default:
      return {
        content: [
          {
            type: "text",
            text: `Unknown tool: ${name}`,
          },
        ],
      };
  }
});

// List resources (web component)
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: [
      {
        uri: `${SIPWIKI_URL}/chatgpt-widget.html`,
        name: "SipWiki Game Widget",
        description: "Interactive widget for displaying drinking games in ChatGPT",
        mimeType: "text/html",
      },
    ],
  };
});

// Read resource
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const { uri } = request.params;

  if (uri === `${SIPWIKI_URL}/chatgpt-widget.html`) {
    return {
      contents: [
        {
          uri,
          mimeType: "text/html",
          text: "<!-- Widget loaded from SipWiki -->",
        },
      ],
    };
  }

  throw new Error(`Resource not found: ${uri}`);
});

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("SipWiki MCP server running on stdio");
}

main().catch(console.error);
