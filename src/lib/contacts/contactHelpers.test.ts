import { describe, expect, it } from "vitest";
import { normalizeEmail, normalizePhone } from "./contactHelpers";

describe("contact normalization", () => {
  it("canonicalizes email case and surrounding spaces", () => {
    expect(normalizeEmail(" Alice@Example.com ")).toBe("alice@example.com");
  });
  it("retains phone country codes instead of collapsing identities", () => {
    expect(normalizePhone("+44 20 7946 0123")).toBe("+442079460123");
    expect(normalizePhone("+1 (207) 946-0123")).toBe("+12079460123");
    expect(normalizePhone("(207) 946-0123")).toBe("+12079460123");
    expect(normalizePhone("123")).toBe("");
  });
});
