import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";
import { clearAllRateLimits } from "@/lib/rateLimit";

const mocks = vi.hoisted(() => ({
  rpc: vi.fn(), getUser: vi.fn(), send: vi.fn(), client: vi.fn(),
  callbacks: [] as Array<() => Promise<void>>,
}));
vi.mock("@/lib/supabase/ingestion", () => ({ createIngestionClient: mocks.client }));
vi.mock("@/lib/supabase/server", () => ({ createClient: async () => ({ auth: { getUser: mocks.getUser } }) }));
vi.mock("@/lib/welcomeEmail", () => ({ sendWelcomeEmail: mocks.send }));
vi.mock("next/server", async (importOriginal) => ({
  ...await importOriginal<typeof import("next/server")>(),
  after: (callback: () => Promise<void>) => mocks.callbacks.push(callback),
}));
import { POST as rate } from "./ratings/route";
import { POST as subscribe } from "./subscribe/route";
import { POST as event } from "./events/route";

function request(path: string, body: unknown) {
  return new NextRequest(`https://sipwiki.app/api/${path}`, {
    method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
  });
}
const rating = { gameSlug: "beer-pong", score: 4, deviceId: "00000000-0000-4000-8000-000000000001" };

describe("ingestion APIs", () => {
  beforeEach(() => {
    clearAllRateLimits(); mocks.callbacks.length = 0;
    vi.stubEnv("NEXT_PUBLIC_SUPABASE_URL", "https://example.supabase.co");
    vi.stubEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY", "public-test-key");
    mocks.client.mockReturnValue({ rpc: mocks.rpc });
    mocks.rpc.mockResolvedValue({ data: true, error: null });
    mocks.getUser.mockResolvedValue({ data: { user: null }, error: { name: "AuthSessionMissingError" } });
  });
  afterEach(() => vi.unstubAllEnvs());

  it("preserves anonymous ratings and ignores body-supplied user identities", async () => {
    const response = await rate(request("ratings", { ...rating, userId: "forged" }));
    expect(response.status).toBe(200);
    expect(mocks.rpc).toHaveBeenCalledWith("submit_rating_server", expect.objectContaining({ p_user_id: null }));
  });

  it("attributes signed-in ratings only to the verified session", async () => {
    mocks.getUser.mockResolvedValue({ data: { user: { id: "00000000-0000-4000-8000-000000000002" } }, error: null });
    await rate(request("ratings", { ...rating, userId: "forged" }));
    expect(mocks.rpc).toHaveBeenCalledWith("submit_rating_server", expect.objectContaining({ p_user_id: "00000000-0000-4000-8000-000000000002" }));
  });

  it("fails closed when trusted configuration or identity verification is unavailable", async () => {
    mocks.client.mockReturnValue(null);
    expect((await rate(request("ratings", rating))).status).toBe(503);
    expect((await subscribe(request("subscribe", { email: "player@example.test" }))).status).toBe(503);
    expect(mocks.rpc).not.toHaveBeenCalled();
    mocks.client.mockReturnValue({ rpc: mocks.rpc });
    mocks.getUser.mockResolvedValue({ data: { user: null }, error: { name: "AuthApiError" } });
    expect((await rate(request("ratings", rating))).status).toBe(503);
    expect(mocks.rpc).not.toHaveBeenCalled();
  });

  it("returns identical signup responses before any mail delivery work", async () => {
    const first = await subscribe(request("subscribe", { email: "player@example.test" }));
    mocks.rpc.mockResolvedValue({ data: false, error: null });
    const duplicate = await subscribe(request("subscribe", { email: "player@example.test" }));
    expect(await first.json()).toEqual({ ok: true });
    expect(await duplicate.json()).toEqual({ ok: true });
    expect(mocks.send).not.toHaveBeenCalled();
    await mocks.callbacks[0](); await mocks.callbacks[1]();
    expect(mocks.send).toHaveBeenCalledTimes(1);
  });

  it("blocks excessive ratings before trusted writes", async () => {
    for (let i = 0; i < 5; i++) expect((await rate(request("ratings", rating))).status).toBe(200);
    expect((await rate(request("ratings", rating))).status).toBe(429);
    expect(mocks.rpc).toHaveBeenCalledTimes(5);
  });

  it("rejects unknown games and invalid event payloads without writes", async () => {
    expect((await rate(request("ratings", { ...rating, gameSlug: "not-a-game" }))).status).toBe(400);
    expect((await event(request("events", { name: "unknown" }))).status).toBe(400);
    expect(mocks.rpc).not.toHaveBeenCalled();
  });

  it("retains best-effort analytics when storage is unavailable", async () => {
    mocks.client.mockReturnValue(null);
    const log = vi.spyOn(console, "error").mockImplementation(() => {});
    expect((await event(request("events", { name: "play_started", slug: "beer-pong" }))).status).toBe(204);
    expect(mocks.rpc).not.toHaveBeenCalled();
    log.mockRestore();
  });
});
