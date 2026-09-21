import { describe, expect, it } from "vitest";
import { withAssociateTag } from "./affiliateUrl";
import { resolveRefereeGame, buildRefereePrompt } from "./chatReferee";
import { getClassicGames } from "./classicGames";
import { isThinCityGuidePath, isThinCityGuideSlug } from "./cityGuides";
import { partyPlanShareText, partySupplyLinks } from "./partySupplies";
import { NEVER_HAVE_I_EVER, buildKingsDeck, buildPromptDeck } from "./playDecks";

describe("pass-the-phone decks", () => {
  it("builds a 52-card King's Cup deck", () => {
    const deck = buildKingsDeck(() => 0);
    expect(deck).toHaveLength(52);
    expect(new Set(deck.map((card) => card.id)).size).toBe(52);
  });

  it("keeps both prompts from each Never Have I Ever pair", () => {
    expect(NEVER_HAVE_I_EVER).toHaveLength(24);
    expect(NEVER_HAVE_I_EVER.some((card) => card.title.includes("skinny dipping"))).toBe(true);
    expect(NEVER_HAVE_I_EVER.some((card) => card.title.includes("wrong person"))).toBe(true);
  });

  it("shuffles prompt decks without dropping cards", () => {
    const deck = buildPromptDeck("most-likely-to", () => 0.5);
    expect(deck.length).toBeGreaterThan(10);
    expect(new Set(deck.map((card) => card.id)).size).toBe(deck.length);
  });
});

describe("homepage classics", () => {
  it("returns King's Cup, Beer Pong, and Flip Cup", () => {
    expect(getClassicGames().map((game) => game.slug)).toEqual([
      "kings-cup",
      "beer-pong",
      "flip-cup",
    ]);
  });
});

describe("affiliate tags", () => {
  it("adds sipwiki-20 to amazon.com search URLs", () => {
    expect(withAssociateTag("https://www.amazon.com/s?k=party+ice")).toContain("tag=sipwiki-20");
  });

  it("leaves short links and existing tags alone", () => {
    expect(withAssociateTag("https://a.co/d/eUXpEON")).toBe("https://a.co/d/eUXpEON");
    expect(withAssociateTag("https://www.amazon.com/s?k=cups&tag=other-20")).toContain("tag=other-20");
    expect(withAssociateTag("https://www.amazon.com/s?k=cups&tag=other-20")).not.toContain("sipwiki-20");
  });
});

describe("city guides", () => {
  it("matches thin city doorway slugs", () => {
    expect(isThinCityGuideSlug("beer-pong-in-chicago-il")).toBe(true);
    expect(isThinCityGuidePath("/guides/beer-pong-in-austin-tx")).toBe(true);
    expect(isThinCityGuideSlug("kings-cup-rules")).toBe(false);
  });
});

describe("party supplies", () => {
  it("includes tagged supply URLs in the share text", () => {
    const supplies = partySupplyLinks({ cups: 20, beerCases: 2, ice: 10 });
    const text = partyPlanShareText({
      guests: 10,
      beerCases: 2,
      liquorBottles: 1,
      cups: 20,
      ice: 10,
      games: ["King's Cup"],
      supplies,
    });
    expect(text).toContain("10 people");
    expect(text).toContain("King's Cup");
    expect(supplies.some((item) => item.url.includes("tag=sipwiki-20") || item.url.includes("a.co"))).toBe(true);
  });
});

describe("chat referee", () => {
  it("loads catalog rules for a known slug and ignores invented names", () => {
    const game = resolveRefereeGame("kings-cup");
    expect(game?.name).toBe("King's Cup");
    expect(buildRefereePrompt(game!).includes("King's Cup")).toBe(true);
    expect(resolveRefereeGame("../etc/passwd")).toBeNull();
    expect(resolveRefereeGame("not-a-real-game")).toBeNull();
  });
});
