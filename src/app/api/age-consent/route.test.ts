import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";
vi.mock("server-only", () => ({}));
import { POST, DELETE } from "./route";
import { POST as checkStatus } from "./status/route";
import { AGE_CONSENT_VERSION } from "@/lib/ageConsentConfig";
import { clearAllRateLimits } from "@/lib/rateLimit";

function request(body: unknown, origin = "https://sipwiki.app") {
  return new NextRequest("https://sipwiki.app/api/age-consent", { method: "POST", headers: { Origin: origin, "Content-Type": "application/json" }, body: JSON.stringify(body) });
}
beforeEach(() => { clearAllRateLimits(); vi.stubEnv("AGE_CONSENT_SECRET", "test-secret-that-is-at-least-32-characters"); });
afterEach(() => vi.unstubAllEnvs());
describe("confirmation lifecycle", () => {
  it("requires an explicit current declaration and rejects cross-site requests", async () => {
    expect((await POST(request({ confirmed: false, version: AGE_CONSENT_VERSION }))).status).toBe(400);
    expect((await POST(request({ confirmed: true, version: "old" }))).status).toBe(400);
    expect((await POST(request({ confirmed: true, version: AGE_CONSENT_VERSION }, "https://foreign.example"))).status).toBe(403);
    expect((await POST(request({ confirmed: true, version: AGE_CONSENT_VERSION }, "null"))).status).toBe(403);
  });
  it("issues a private receipt, validates it, and clears it on reset", async () => {
    const response = await POST(request({ confirmed: true, version: AGE_CONSENT_VERSION }));
    expect(response.status).toBe(200);
    const setCookie = response.headers.get("set-cookie")!;
    expect(setCookie).toContain("HttpOnly"); expect(setCookie).toContain("SameSite=lax");
    const status = await checkStatus(new NextRequest("https://sipwiki.app/api/age-consent/status", { method: "POST", headers: { Origin: "https://sipwiki.app", Cookie: setCookie.split(";")[0] } }));
    expect(await status.json()).toEqual({ confirmed: true, version: AGE_CONSENT_VERSION });
    expect(status.headers.get("cache-control")).toContain("no-store");
    const reset = await DELETE(new NextRequest("https://sipwiki.app/api/age-consent", { method: "DELETE", headers: { Origin: "https://sipwiki.app" } }));
    expect(reset.headers.get("set-cookie")).toContain("Max-Age=0");
    expect((await DELETE(new NextRequest("https://sipwiki.app/api/age-consent", { method: "DELETE" }))).status).toBe(403);
    expect((await checkStatus(new NextRequest("https://sipwiki.app/api/age-consent/status", { method: "POST" }))).status).toBe(403);
  });
  it("bounds the body even when Content-Length is omitted", async () => {
    expect((await POST(request({ confirmed: true, version: AGE_CONSENT_VERSION, extra: "x".repeat(512) }))).status).toBe(413);
  });
});
