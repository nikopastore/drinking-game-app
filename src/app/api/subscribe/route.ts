import { NextRequest, NextResponse } from "next/server";
import {
  checkRateLimit,
  createRateLimitHeaders,
  getClientIP,
  rateLimiters,
} from "@/lib/rateLimit";
import { createClient } from "@/lib/supabase/server";
import { sendWelcomeEmail } from "@/lib/welcomeEmail";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Stores a signup and sends the party planner email when Resend is configured.
 * A missing mail key, or a failed send, still keeps the signup.
 */
export async function POST(request: NextRequest) {
  const clientIP = getClientIP(request);
  const rateLimitResult = checkRateLimit(`subscribe:${clientIP}`, rateLimiters.strict);

  if (!rateLimitResult.allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: createRateLimitHeaders(rateLimitResult) }
    );
  }

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return NextResponse.json({ error: "Signups are unavailable" }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const record = body && typeof body === "object" ? (body as Record<string, unknown>) : {};
  const email = typeof record.email === "string" ? record.email.trim().toLowerCase() : "";
  const source = typeof record.source === "string" ? record.source.slice(0, 80) : null;
  const pagePath = typeof record.pagePath === "string" ? record.pagePath.slice(0, 200) : null;

  if (!EMAIL_PATTERN.test(email) || email.length > 200) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const supabase = await createClient();
  const { error } = await supabase.from("email_subscribers").insert({
    email,
    source,
    lead_magnet: "party-tips",
    page_path: pagePath,
  });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ ok: true, already: true, emailed: false });
    }
    return NextResponse.json({ error: "Could not save signup" }, { status: 500 });
  }

  const emailed = await sendWelcomeEmail(email);
  return NextResponse.json({ ok: true, already: false, emailed });
}
