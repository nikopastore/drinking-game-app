import { NextRequest, NextResponse } from "next/server";
import { after } from "next/server";
import {
  checkRateLimit,
  createRateLimitHeaders,
  getClientIP,
  rateLimiters,
} from "@/lib/rateLimit";
import { createIngestionClient } from "@/lib/supabase/ingestion";
import { sendWelcomeEmail } from "@/lib/welcomeEmail";
import { requireAgeConsent } from "@/lib/ageConsent";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Stores a signup and sends the party planner email when Resend is configured.
 * A missing mail key, or a failed send, still keeps the signup.
 */
export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 4 * 1024) {
    return NextResponse.json({ error: "Request body too large" }, { status: 413 });
  }

  const clientIP = getClientIP(request);
  const rateLimitResult = checkRateLimit(`subscribe:${clientIP}`, rateLimiters.strict);
  const consentError = requireAgeConsent(request);
  if (consentError) return consentError;

  if (!rateLimitResult.allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: createRateLimitHeaders(rateLimitResult) }
    );
  }

  const supabase = createIngestionClient();
  if (!supabase) {
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

  const { data: accepted, error } = await supabase.rpc("subscribe_email", {
    p_email: email,
    p_source: source,
    p_page_path: pagePath,
  });

  if (error) {
    return NextResponse.json({ error: "Could not save signup" }, { status: 500 });
  }

  after(async () => {
    if (accepted) await sendWelcomeEmail(email);
  });
  return NextResponse.json({ ok: true });
}
