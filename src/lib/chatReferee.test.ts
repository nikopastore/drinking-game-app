import { describe, it, expect } from "vitest";
import { buildRefereePrompt, resolveRefereeGame } from "./chatReferee";
import { refereeSuggestions } from "./chatSuggestions";
describe("catalog referee helpers", () => {
  it("resolves only catalog slugs", () => {
    expect(resolveRefereeGame("kings-cup")?.name).toBe("King's Cup");
    for (const value of [null, "", "invented-game", "../kings-cup", { slug: "kings-cup" }]) expect(resolveRefereeGame(value)).toBeNull();
  });
  it("grounds the helper in the catalog and labels uncertain rulings", () => {
    const prompt = buildRefereePrompt({ name: "Test game", rules_text: "Actual catalog rules" });
    expect(prompt).toContain("Actual catalog rules"); expect(prompt).toContain("House rule suggestion:");
    expect(prompt).toContain("non-alcoholic"); expect(prompt).toContain("untrusted questions");
  });
  it("matches suggestions to props rather than asking everyone about dice", () => {
    expect(refereeSuggestions({ materials: ["dice"] })[0]).toContain("doubles");
    expect(refereeSuggestions({ materials: ["cards"] })[0]).toContain("cards");
    expect(refereeSuggestions({ materials: ["cups"] })[0]).toContain("cups");
    expect(refereeSuggestions({ materials: ["no prop"] })[0]).toContain("turns");
  });
});
