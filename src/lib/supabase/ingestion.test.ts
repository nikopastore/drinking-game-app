import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
vi.mock("server-only", () => ({}));
import { createIngestionClient } from "./ingestion";

describe("trusted ingestion transport", () => {
  beforeEach(() => {
    vi.stubEnv("NEXT_PUBLIC_SUPABASE_URL", "https://example.supabase.co");
    vi.stubEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY", "public-test-key");
    vi.stubEnv("SUPABASE_SERVICE_ROLE_KEY", "server-test-key");
  });
  afterEach(() => { vi.unstubAllEnvs(); vi.unstubAllGlobals(); });

  it("uses only the trusted credential for PostgREST, with no cookie session", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response("true", { headers: { "Content-Type": "application/json" } }));
    vi.stubGlobal("fetch", fetchMock);
    await createIngestionClient()!.rpc("subscribe_email", { p_email: "player@example.test" });
    const [url, options] = fetchMock.mock.calls[0];
    expect(String(url)).toBe("https://example.supabase.co/rest/v1/rpc/subscribe_email");
    const headers = new Headers(options.headers);
    expect(headers.get("authorization")).toBe("Bearer server-test-key");
    expect(headers.get("apikey")).toBe("server-test-key");
    expect(headers.has("cookie")).toBe(false);
  });

  it("never falls back to public credentials", () => {
    vi.stubEnv("SUPABASE_SERVICE_ROLE_KEY", "");
    expect(createIngestionClient()).toBeNull();
    vi.stubEnv("SUPABASE_SERVICE_ROLE_KEY", "public-test-key");
    expect(createIngestionClient()).toBeNull();
  });
});
