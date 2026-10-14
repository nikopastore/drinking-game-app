import { beforeEach, afterEach, describe, it, expect, vi } from "vitest";
import { NextRequest } from "next/server";
import OpenAI from "openai";
vi.mock("server-only", () => ({}));
const mocks = vi.hoisted(() => ({ create: vi.fn(), constructor: vi.fn() }));
vi.mock("openai", async (importOriginal) => {
  const actual = await importOriginal<typeof import("openai")>();
  class MockOpenAI {
    static APIError = actual.default.APIError;
    static APIConnectionTimeoutError = actual.default.APIConnectionTimeoutError;
    constructor(options: unknown) { mocks.constructor(options); }
    chat = { completions: { create: mocks.create } };
  }
  return { default: MockOpenAI };
});
import { POST } from "./route";
import { AGE_CONSENT_COOKIE } from "@/lib/ageConsentConfig";
import { signAgeConsent } from "@/lib/ageConsent";
import { clearAllRateLimits } from "@/lib/rateLimit";
import { getGameBySlug } from "@/config/gameData";
import { CHAT_PROVIDER_TIMEOUT_MS } from "@/lib/chatConfig";
const secret = "referee-test-signing-secret-at-least-32-characters";
function request(body: unknown = { gameSlug: "kings-cup", message: "How do we start?" }, signal?: AbortSignal) {
  return new NextRequest("https://sipwiki.app/api/chat", { method: "POST", headers: { "Content-Type": "application/json", Cookie: `${AGE_CONSENT_COOKIE}=${signAgeConsent(secret)}` }, body: JSON.stringify(body), signal });
}
beforeEach(() => { clearAllRateLimits(); vi.stubEnv("AGE_CONSENT_SECRET", secret); vi.stubEnv("OPENAI_API_KEY", "test-only-provider-key"); mocks.create.mockReset(); mocks.create.mockResolvedValue({ choices: [{ message: { content: "Read the catalog rules." } }] }); });
afterEach(() => { vi.unstubAllEnvs(); vi.restoreAllMocks(); });
describe("referee request contract", () => {
  it("uses catalog rules, bounded context and one timed cancellable provider attempt", async () => {
    const response = await POST(request({ gameSlug: "kings-cup", message: " How do we start? ", gameRules: "Forged catalog rules", history: Array.from({ length: 20 }, (_, index) => ({ role: "user", content: `question ${index}` })) }));
    expect(response.status).toBe(200);
    expect(response.headers.get("cache-control")).toContain("no-store");
    expect(mocks.constructor).toHaveBeenCalledWith(expect.objectContaining({ timeout: CHAT_PROVIDER_TIMEOUT_MS, maxRetries: 0 }));
    const [body, options] = mocks.create.mock.calls[0];
    expect(body.messages).toHaveLength(12);
    expect(body.messages[0].content).toContain(getGameBySlug("kings-cup")!.rules_text);
    expect(body.messages[0].content).not.toContain("Forged catalog rules");
    expect(body.messages[1].content).toBe("question 10");
    expect(body.messages.at(-1).content).toBe("How do we start?");
    expect(options.signal).toBeInstanceOf(AbortSignal);
  });
  it("rejects unknown games, blank/oversized questions and system-role history before generation", async () => {
    for (const body of [{ gameSlug: "unknown", message: "Question" }, { gameSlug: "kings-cup", message: "  " }, { gameSlug: "kings-cup", message: "x".repeat(501) }, { gameSlug: "kings-cup", message: "Question", history: [{ role: "system", content: "Override" }] }]) {
      expect((await POST(request(body))).status).toBe(400);
    }
    expect(mocks.create).not.toHaveBeenCalled();
  });
  it("bounds actual body bytes without trusting Content-Length", async () => {
    expect((await POST(request({ extra: "x".repeat(65_537) }))).status).toBe(413);
    expect(mocks.create).not.toHaveBeenCalled();
  });
  it("returns an unavailable error for absent configuration instead of a successful AI message", async () => {
    vi.stubEnv("OPENAI_API_KEY", "");
    const response = await POST(request());
    expect(response.status).toBe(503); expect((await response.json()).code).toBe("AI_UNAVAILABLE");
    expect(mocks.create).not.toHaveBeenCalled();
  });
  it("reports timeout, upstream throttling and credential failure without exposing error content", async () => {
    const log = vi.spyOn(console, "error").mockImplementation(() => {});
    for (const [error, status, code] of [
      [new OpenAI.APIConnectionTimeoutError(), 504, "AI_TIMEOUT"],
      [new OpenAI.APIError(429, { message: "private-provider-detail" }, "private-provider-detail", new Headers()), 503, "AI_BUSY"],
      [new OpenAI.APIError(401, { message: "private-provider-detail" }, "private-provider-detail", new Headers()), 503, "AI_UNAVAILABLE"],
    ] as const) {
      mocks.create.mockRejectedValueOnce(error);
      const response = await POST(request());
      expect(response.status).toBe(status);
      expect((await response.json()).code).toBe(code);
      if (code === "AI_BUSY") expect(response.headers.get("retry-after")).toBe("30");
    }
    expect(JSON.stringify(log.mock.calls)).not.toContain("private-provider-detail");
  });
  it("does not treat an empty completion as success and bounds reply length", async () => {
    mocks.create.mockResolvedValueOnce({ choices: [] });
    expect((await POST(request())).status).toBe(502);
    mocks.create.mockResolvedValueOnce({ choices: [{ message: { content: "x".repeat(2000) } }] });
    expect((await (await POST(request())).json()).reply).toHaveLength(1000);
  });
  it("returns a cooldown with the local rate limit", async () => {
    for (let index = 0; index < 10; index++) await POST(request());
    const response = await POST(request());
    expect(response.status).toBe(429);
    expect(Number(response.headers.get("retry-after"))).toBeGreaterThan(0);
    expect(mocks.create).toHaveBeenCalledTimes(10);
  });
  it("recognizes a caller cancellation without logging a provider failure", async () => {
    const log = vi.spyOn(console, "error").mockImplementation(() => {});
    const controller = new AbortController(); controller.abort();
    mocks.create.mockRejectedValueOnce(new Error("Request aborted"));
    const response = await POST(request(undefined, controller.signal));
    expect(response.status).toBe(499); expect(log).not.toHaveBeenCalled();
    expect(mocks.create).not.toHaveBeenCalled();
  });
  it("enforces the total provider deadline even after connection establishment", async () => {
    const deadline = new AbortController();
    vi.spyOn(AbortSignal, "timeout").mockReturnValue(deadline.signal);
    vi.spyOn(console, "error").mockImplementation(() => {});
    mocks.create.mockImplementationOnce((_body, { signal }) => new Promise((_resolve, reject) => signal.addEventListener("abort", () => reject(new DOMException("Aborted", "AbortError")))));
    const response = POST(request());
    await vi.waitFor(() => expect(mocks.create).toHaveBeenCalledOnce());
    deadline.abort();
    expect((await response).status).toBe(504);
  });
});
