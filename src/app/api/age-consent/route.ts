import { NextRequest, NextResponse } from "next/server";
import { ageConsentSecret, signAgeConsent } from "@/lib/ageConsent";
import { AGE_CONSENT_COOKIE, AGE_CONSENT_MAX_AGE, AGE_CONSENT_VERSION } from "@/lib/ageConsentConfig";
import { checkRateLimit, getClientIP, rateLimiters } from "@/lib/rateLimit";

const noStore = { "Cache-Control": "private, no-store" };
const cookieOptions = { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax" as const, path: "/" };
function sameOrigin(request: NextRequest) {
  return request.headers.get("origin") === request.nextUrl.origin;
}

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) return NextResponse.json({ error: "Invalid origin" }, { status: 403, headers: noStore });
  if (!checkRateLimit(`age-consent:${getClientIP(request)}`, rateLimiters.relaxed).allowed) return NextResponse.json({ error: "Please try again shortly" }, { status: 429, headers: noStore });
  const secret = ageConsentSecret();
  if (!secret) return NextResponse.json({ error: "Age confirmation is temporarily unavailable" }, { status: 503, headers: noStore });
  try {
    if (!request.headers.get("content-type")?.startsWith("application/json")) return NextResponse.json({ error: "JSON required" }, { status: 415, headers: noStore });
    const reader = request.body?.getReader();
    if (!reader) return NextResponse.json({ error: "Confirmation required" }, { status: 400, headers: noStore });
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 512) {
        await reader.cancel();
        return NextResponse.json({ error: "Request too large" }, { status: 413, headers: noStore });
      }
      chunks.push(value);
    }
    const text = Buffer.concat(chunks).toString("utf8");
    const data = JSON.parse(text);
    if (data?.confirmed !== true || data?.version !== AGE_CONSENT_VERSION) return NextResponse.json({ error: "Explicit age confirmation is required" }, { status: 400, headers: noStore });
    const response = NextResponse.json({ confirmed: true, version: AGE_CONSENT_VERSION }, { headers: noStore });
    response.cookies.set(AGE_CONSENT_COOKIE, signAgeConsent(secret), { ...cookieOptions, maxAge: AGE_CONSENT_MAX_AGE });
    return response;
  } catch {
    return NextResponse.json({ error: "Invalid confirmation" }, { status: 400, headers: noStore });
  }
}

export async function DELETE(request: NextRequest) {
  if (!sameOrigin(request)) return NextResponse.json({ error: "Invalid origin" }, { status: 403, headers: noStore });
  const response = NextResponse.json({ confirmed: false }, { headers: noStore });
  response.cookies.set(AGE_CONSENT_COOKIE, "", { ...cookieOptions, maxAge: 0 });
  return response;
}
