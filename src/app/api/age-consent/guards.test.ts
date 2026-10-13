import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";
vi.mock("server-only", () => ({}));
const writer = vi.hoisted(() => vi.fn());
vi.mock("@/lib/supabase/ingestion", () => ({ createIngestionClient: writer }));
import { POST as chat } from "../chat/route";
import { POST as finder } from "../game-finder/route";
import { POST as rating } from "../ratings/route";
import { POST as signup } from "../subscribe/route";
import { clearAllRateLimits } from "@/lib/rateLimit";

beforeEach(() => { clearAllRateLimits(); vi.stubEnv("AGE_CONSENT_SECRET", "test-secret-that-is-at-least-32-characters"); });
afterEach(() => vi.unstubAllEnvs());
describe("interactive API acknowledgement boundary", () => {
  for (const [path, handler] of [["chat", chat], ["game-finder", finder], ["ratings", rating], ["subscribe", signup]] as const) {
    it(`rejects missing and client-forged flags before ${path} side effects`, async () => {
      for (const cookie of ["", "sipwiki-age-verified=true", "sipwiki-age-consent=true"]) {
        const response = await handler(new NextRequest(`https://sipwiki.app/api/${path}`, {
          method: "POST", headers: { "Content-Type": "application/json", Cookie: cookie }, body: "{}",
        }));
        expect(response.status).toBe(428);
        expect((await response.json()).code).toBe("AGE_CONFIRMATION_REQUIRED");
      }
      expect(writer).not.toHaveBeenCalled();
    });
  }
});
