import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { checkRateLimit, createRateLimitHeaders, getClientIP, rateLimiters } from "@/lib/rateLimit";

const RatingRequest = z.object({
  gameSlug: z.string().regex(/^[a-z0-9-]{1,80}$/),
  score: z.number().int().min(1).max(5),
  deviceId: z.string().uuid(),
});

export async function POST(request: NextRequest) {
  const rateLimit = checkRateLimit(`ratings:${getClientIP(request)}`, rateLimiters.strict);
  const headers = createRateLimitHeaders(rateLimit);
  if (!rateLimit.allowed) {
    return NextResponse.json({ error: "Too many ratings" }, { status: 429, headers });
  }

  try {
    const parsed = RatingRequest.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid rating" }, { status: 400, headers });
    }

    const supabase = await createClient();
    const { data: accepted, error } = await supabase.rpc("submit_rating", {
      p_game_id: parsed.data.gameSlug,
      p_score: parsed.data.score,
      p_device_id: parsed.data.deviceId,
    });

    if (error || !accepted) {
      return NextResponse.json({ error: "Rating unavailable" }, { status: 503, headers });
    }

    return NextResponse.json({ ok: true }, { headers });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400, headers });
  }
}
