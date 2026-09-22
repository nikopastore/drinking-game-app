import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { recordProductEvent, type ProductEventWriter } from "./productEvents";

const originalUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const originalKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function restoreSupabaseEnv(): void {
  if (originalUrl === undefined) delete process.env.NEXT_PUBLIC_SUPABASE_URL;
  else process.env.NEXT_PUBLIC_SUPABASE_URL = originalUrl;

  if (originalKey === undefined) delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  else process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = originalKey;
}

function configureSupabaseEnv(): void {
  process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon-test-key";
}

function clearSupabaseEnv(): void {
  delete process.env.NEXT_PUBLIC_SUPABASE_URL;
  delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
}

describe("recordProductEvent", () => {
  beforeEach(() => {
    clearSupabaseEnv();
  });

  afterEach(() => {
    restoreSupabaseEnv();
    vi.restoreAllMocks();
  });

  it("rejects unknown event names", async () => {
    configureSupabaseEnv();
    const insert = vi.fn();
    const writer: ProductEventWriter = { insert };

    await expect(
      recordProductEvent({ name: "play_started", slug: "kings-cup", path: "/play/kings-cup" }, writer)
    ).resolves.toBe(false);
    await expect(
      recordProductEvent({ name: "page_view" }, writer)
    ).resolves.toBe(false);

    expect(insert).not.toHaveBeenCalled();
  });

  it("drops extra fields before insert", async () => {
    configureSupabaseEnv();
    const insert = vi.fn().mockResolvedValue({ error: null });

    const accepted = await recordProductEvent(
      {
        name: "affiliate_click",
        slug: "kings-cup",
        path: "/games/kings-cup",
        email: "player@example.com",
        userId: "user-1",
        ip: "203.0.113.4",
      },
      { insert }
    );

    expect(accepted).toBe(true);
    expect(insert).toHaveBeenCalledTimes(1);
    expect(insert).toHaveBeenCalledWith({
      name: "affiliate_click",
      slug: "kings-cup",
      path: "/games/kings-cup",
    });
    expect(insert.mock.calls[0][0]).not.toHaveProperty("email");
    expect(insert.mock.calls[0][0]).not.toHaveProperty("userId");
    expect(insert.mock.calls[0][0]).not.toHaveProperty("ip");
  });

  it("skips insert when supabase env is absent", async () => {
    clearSupabaseEnv();
    const insert = vi.fn();

    const accepted = await recordProductEvent(
      { name: "email_submit", slug: "party-guide", path: "/shop" },
      { insert }
    );

    expect(accepted).toBe(true);
    expect(insert).not.toHaveBeenCalled();
  });

  it("logs only the insert error message", async () => {
    configureSupabaseEnv();
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const insert = vi.fn().mockResolvedValue({
      error: { message: "new row violates row-level security policy" },
    });

    const accepted = await recordProductEvent(
      {
        name: "email_submit",
        path: "/shop",
        email: "player@example.com",
      },
      { insert }
    );

    expect(accepted).toBe(true);
    expect(errorSpy).toHaveBeenCalledTimes(1);
    expect(errorSpy).toHaveBeenCalledWith("new row violates row-level security policy");
  });
});
