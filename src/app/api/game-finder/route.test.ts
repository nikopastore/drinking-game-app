import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";
vi.mock("server-only", () => ({}));
const openai = vi.hoisted(() => ({ create: vi.fn() }));
vi.mock("openai", () => {
  class MockOpenAI {
    static APIError = class extends Error { status?: number; constructor(status?: number) { super("provider error"); this.status = status; } };
    chat = { completions: { create: openai.create } };
    constructor() {}
  }
  return { default: MockOpenAI };
});
import { POST } from "./route";
import { AGE_CONSENT_COOKIE } from "@/lib/ageConsentConfig";
import { signAgeConsent } from "@/lib/ageConsent";
import { clearAllRateLimits } from "@/lib/rateLimit";

const secret = "game-finder-test-signing-secret-at-least-32-characters";
const token = signAgeConsent(secret);
function request(query = "A relaxed card game for four friends") {
  return new NextRequest("https://sipwiki.app/api/game-finder", {
    method: "POST",
    headers: { "Content-Type": "application/json", Cookie: `${AGE_CONSENT_COOKIE}=${token}` },
    body: JSON.stringify({ query }),
  });
}
beforeEach(() => {
  clearAllRateLimits();
  vi.stubEnv("AGE_CONSENT_SECRET", secret);
  vi.stubEnv("GEMINI_API_KEY", "gemini-test-key");
  vi.stubEnv("GEMINI_MODEL", "gemini-test-model");
  vi.stubEnv("OPENAI_API_KEY", "openai-test-key");
  openai.create.mockReset();
  openai.create.mockResolvedValue({ choices: [{ message: { content: JSON.stringify({ summary: "Backup matches.", recommendations: [{ slug: "kings-cup", reason: "Works for a group.", matchScore: 88 }] }) } }] });
});
afterEach(() => { vi.unstubAllEnvs(); vi.unstubAllGlobals(); });

describe("game finder provider recovery", () => {
  it("uses OpenAI when Gemini returns a billing/quota failure", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(JSON.stringify({ error: "billing" }), { status: 402 })));
    const response = await POST(request());
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.source).toBe("openai");
    expect(data.notice).toContain("backup AI");
    expect(data.recommendations).toHaveLength(3);
    expect(openai.create).toHaveBeenCalledOnce();
  });

  it("returns the catalog fallback when both providers fail", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("", { status: 402 })));
    openai.create.mockRejectedValue(new Error("backup unavailable"));
    const response = await POST(request());
    const data = await response.json();
    expect(response.status).toBe(200);
    expect(data.source).toBe("catalog");
    expect(data.notice).toContain("catalog");
    expect(data.recommendations).toHaveLength(3);
  });

  it("does not call OpenAI when Gemini succeeds", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(JSON.stringify({ candidates: [{ content: { parts: [{ text: JSON.stringify({ summary: "Gemini matches.", recommendations: [{ slug: "kings-cup", reason: "Good group fit.", matchScore: 90 }] }) }] } }] }), { status: 200 })));
    const response = await POST(request());
    expect(response.status).toBe(200);
    expect((await response.json()).source).toBe("gemini");
    expect(openai.create).not.toHaveBeenCalled();
  });
});
