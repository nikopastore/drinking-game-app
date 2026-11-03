import { describe, expect, it } from "vitest";
import { getGuideQuickAnswer } from "./GuideQuickAnswer";

describe("guide answer coverage", () => {
  it("covers the selected high-intent guide gaps", () => {
    for (const path of [
      "/guides/baseball-drinking-game-rules",
      "/guides/avalanche-drinking-game-rules",
      "/guides/5-minute-drinking-games",
      "/guides/easy-drinking-games",
      "/guides/drinking-game-ideas",
      "/guides/drinking-games-for-couples",
      "/guides/drinking-games-for-small-groups",
      "/guides/game-night-drinking-games",
      "/guides/high-energy-drinking-games",
      "/guides/flip-cup-vs-rage-cage",
    ]) {
      const answer = getGuideQuickAnswer(path);
      expect(answer?.question.length).toBeGreaterThan(20);
      expect(answer?.answer.length).toBeGreaterThan(120);
      expect(answer?.tips).toHaveLength(3);
    }
  });

  it("does not add generic copy to unlisted programmatic pages", () => {
    expect(getGuideQuickAnswer("/guides/beer-pong-in-phoenix-az")).toBeNull();
    expect(getGuideQuickAnswer("/guides/kings-cup-rules")).toBeNull();
  });
});
