import { NextRequest, NextResponse } from "next/server";
import {
  checkRateLimit,
  createRateLimitHeaders,
  getClientIP,
  rateLimiters,
} from "@/lib/rateLimit";
import { createClient } from "@/lib/supabase/server";
import { recordProductEvent, type ProductEventRow } from "@/lib/productEvents";

/**
 * Accepts allowlisted commerce events (affiliate clicks and email signups).
 * Stores name, slug, and path only. No email address, user id, or IP.
 * A missing database or a failed insert still returns 204 so the click is not blocked.
 */
export async function POST(request: NextRequest) {
  const clientIP = getClientIP(request);
  const rateLimitResult = checkRateLimit(clientIP, rateLimiters.events);

  if (!rateLimitResult.allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      {
        status: 429,
        headers: createRateLimitHeaders(rateLimitResult),
      }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const accepted = await recordProductEvent(body, {
    insert: async (row: ProductEventRow) => {
      const supabase = await createClient();
      const { error } = await supabase.from("product_events").insert({
        name: row.name,
        slug: row.slug,
        path: row.path,
      });
      return { error: error ? { message: error.message } : null };
    },
  });

  if (!accepted) {
    return NextResponse.json({ error: "Invalid event" }, { status: 400 });
  }

  return new NextResponse(null, { status: 204 });
}
