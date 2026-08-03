import { describe, expect, it } from "vitest";
import { games } from "@/config/gameData";
import { findCatalogMatches, validateGeminiRecommendations } from "./gameFinder";

describe("game finder", () => {
  it("only recommends catalog games", () => {
    const result = findCatalogMatches("6 people, no props, something quick", games);
    const slugs = new Set(games.map((game) => game.slug));
    expect(result.recommendations).toHaveLength(3);
    expect(result.recommendations.every((item) => slugs.has(item.slug))).toBe(true);
  });

  it("prioritizes no-prop games when requested", () => {
    const result = findCatalogMatches("We have 6 friends and no cards or equipment", games);
    const recommended = result.recommendations.map((item) => games.find((game) => game.slug === item.slug));
    expect(recommended.every((game) => game?.materials.includes("no prop"))).toBe(true);
  });

  it("rejects invented Gemini slugs", () => {
    const fallback = findCatalogMatches("a chill game", games);
    const result = validateGeminiRecommendations({
      summary: "Try these.",
      recommendations: [
        { slug: "totally-invented", reason: "Made up", matchScore: 100 },
        { slug: games[0].slug, reason: "Real match", matchScore: 90 },
      ],
    }, "a chill game", games, fallback);
    expect(result.recommendations.some((item) => item.slug === "totally-invented")).toBe(false);
    expect(result.recommendations).toHaveLength(3);
  });

  it("keeps unrelated requests inside SipWiki", () => {
    const result = findCatalogMatches("What is the weather tomorrow?", games);
    expect(result.summary).toContain("only help with games");
  });
});
