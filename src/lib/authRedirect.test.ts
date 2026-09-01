import { describe, expect, it } from "vitest";
import { isSafeInternalPath, safeNextPath } from "./authRedirect";

describe("isSafeInternalPath", () => {
  it("allows relative app paths", () => {
    expect(isSafeInternalPath("/games/kings-cup")).toBe(true);
    expect(isSafeInternalPath("/")).toBe(true);
    expect(isSafeInternalPath("/submit")).toBe(true);
  });

  it("rejects open redirects", () => {
    expect(isSafeInternalPath("https://evil.example")).toBe(false);
    expect(isSafeInternalPath("//evil.example")).toBe(false);
    expect(isSafeInternalPath("/\\evil.example")).toBe(false);
    expect(isSafeInternalPath("https://sipwiki.app/games")).toBe(false);
  });

  it("rejects empty and missing values", () => {
    expect(isSafeInternalPath("")).toBe(false);
    expect(isSafeInternalPath(null)).toBe(false);
    expect(isSafeInternalPath(undefined)).toBe(false);
  });
});

describe("safeNextPath", () => {
  it("falls back when the target is unsafe", () => {
    expect(safeNextPath("https://evil.example", "/games")).toBe("/games");
    expect(safeNextPath("/play/beer-pong")).toBe("/play/beer-pong");
  });
});
