import { afterEach, describe, expect, it, vi } from "vitest";
import { ANALYTICS_EVENTS, trackEvent } from "./analytics";

afterEach(() => vi.unstubAllGlobals());

describe("privacy-safe analytics", () => {
  it("allowlists provider observability events without sending the query", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 204 }));
    vi.stubGlobal("fetch", fetchMock);
    Object.defineProperty(window, "location", { value: { pathname: "/games" }, configurable: true });
    trackEvent("game_finder_search", "openai");
    trackEvent("game_finder_fallback", "catalog");
    expect(ANALYTICS_EVENTS).toContain("game_finder_search");
    expect(ANALYTICS_EVENTS).toContain("game_finder_fallback");
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(JSON.parse(fetchMock.mock.calls[0][1].body)).toEqual({ name: "game_finder_search", slug: "openai", path: "/games" });
    expect(JSON.parse(fetchMock.mock.calls[1][1].body)).toEqual({ name: "game_finder_fallback", slug: "catalog", path: "/games" });
  });
});
