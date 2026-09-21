import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { ANALYTICS_EVENTS } from "@/lib/analytics";

const eventSchema = z.object({
  name: z.enum(ANALYTICS_EVENTS),
  slug: z.string().max(80).optional(),
  path: z.string().max(200).optional(),
});

/**
 * Accepts allowlisted product events. Nothing is stored yet — there is no
 * analytics warehouse in this app. The route exists so the client can emit
 * events without PII and without a third-party script.
 */
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = eventSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid event" }, { status: 400 });
  }

  return new NextResponse(null, { status: 204 });
}
