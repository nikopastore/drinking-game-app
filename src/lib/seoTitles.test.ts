import { describe, expect, it } from "vitest";
import { getGameMetadataTitle } from "./seoTitles";

describe("getGameMetadataTitle", () => {
  it("leaves the brand suffix to the root metadata template", () => {
    const title = getGameMetadataTitle("Beer Pong");

    expect(title).toBe("Beer Pong Rules - How to Play");
    expect(title).not.toContain("SipWiki");
  });
});