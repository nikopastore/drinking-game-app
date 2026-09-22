import { z } from "zod";
import { ANALYTICS_EVENTS, type AnalyticsEventName } from "@/lib/analytics";
import { isSupabaseConfigured } from "@/lib/supabase/client";

/**
 * Allowlisted commerce events. Zod strips unknown keys, so email, user id,
 * IP, and any other extra fields never reach storage.
 */
export const productEventSchema = z.object({
  name: z.enum(ANALYTICS_EVENTS),
  slug: z.string().max(80).optional(),
  path: z.string().max(200).optional(),
});

export type ProductEventRow = {
  name: AnalyticsEventName;
  slug: string | null;
  path: string | null;
};

export type ProductEventWriter = {
  insert: (row: ProductEventRow) => Promise<{ error: { message: string } | null }>;
};

function errorMessage(error: unknown): string {
  if (typeof error === "object" && error !== null && "message" in error) {
    const message = error.message;
    if (typeof message === "string" && message.length > 0) {
      return message;
    }
  }
  return "Failed to store product event";
}

function toProductEventRow(input: unknown): ProductEventRow | null {
  const parsed = productEventSchema.safeParse(input);
  if (!parsed.success) return null;

  return {
    name: parsed.data.name,
    slug: parsed.data.slug ?? null,
    path: parsed.data.path ?? null,
  };
}

/**
 * Validate and store an allowlisted commerce event.
 * Returns false for unknown names or invalid payloads.
 * Skips the writer when Supabase env vars are absent.
 * Insert failures are logged by message only and still count as accepted
 * so a shop click is never blocked by storage.
 */
export async function recordProductEvent(
  input: unknown,
  writer: ProductEventWriter
): Promise<boolean> {
  const row = toProductEventRow(input);
  if (!row) return false;

  if (!isSupabaseConfigured()) return true;

  try {
    const { error } = await writer.insert(row);
    if (error) {
      console.error(errorMessage(error));
    }
  } catch (error) {
    console.error(errorMessage(error));
  }

  return true;
}
