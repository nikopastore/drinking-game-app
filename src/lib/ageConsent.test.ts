import { describe, expect, it, vi, afterEach } from "vitest";
import { NextRequest } from "next/server";
vi.mock("server-only", () => ({}));
import { signAgeConsent, verifyAgeConsent, requireAgeConsent } from "./ageConsent";
import { AGE_CONSENT_MAX_AGE } from "./ageConsentConfig";

const key = "test-secret-that-is-at-least-32-characters";
const now = Date.now();
afterEach(() => vi.unstubAllEnvs());

describe("adult declaration receipts", () => {
  it("accepts a current receipt and rejects tampered or foreign signatures", () => {
    const token = signAgeConsent(key, now);
    expect(verifyAgeConsent(token, key, now)).toBe(true);
    expect(verifyAgeConsent(token + "x", key, now)).toBe(false);
    expect(verifyAgeConsent(token, "a-different-preview-secret", now)).toBe(false);
    expect(verifyAgeConsent("true", key, now)).toBe(false);
  });
  it("rejects expired, future, and oversized receipts", () => {
    expect(verifyAgeConsent(signAgeConsent(key, now - AGE_CONSENT_MAX_AGE * 1000), key, now)).toBe(false);
    expect(verifyAgeConsent(signAgeConsent(key, now + 60_000), key, now)).toBe(false);
    expect(verifyAgeConsent("x".repeat(513), key, now)).toBe(false);
  });
  it("fails closed when signing configuration or acknowledgement is absent", () => {
    vi.stubEnv("AGE_CONSENT_SECRET", "");
    expect(requireAgeConsent(new NextRequest("https://sipwiki.app/api/chat"))?.status).toBe(503);
    vi.stubEnv("AGE_CONSENT_SECRET", key);
    expect(requireAgeConsent(new NextRequest("https://sipwiki.app/api/chat", { headers: { Cookie: "sipwiki-age-verified=true" } }))?.status).toBe(428);
  });
});
