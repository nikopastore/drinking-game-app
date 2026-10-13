import { NextRequest, NextResponse } from "next/server";
import { ageConsentSecret, verifyAgeConsent } from "@/lib/ageConsent";
import { AGE_CONSENT_COOKIE, AGE_CONSENT_VERSION } from "@/lib/ageConsentConfig";

// POST keeps this cookie-dependent status route out of Capacitor's static
// export. It is read-only, uncached, and only accepts same-origin callers.
export async function POST(request: NextRequest) {
  const headers = { "Cache-Control": "private, no-store" };
  if (request.headers.get("origin") !== request.nextUrl.origin) {
    return NextResponse.json({ error: "Invalid origin" }, { status: 403, headers });
  }
  const secret = ageConsentSecret();
  if (!secret) return NextResponse.json({ error: "Age confirmation is temporarily unavailable" }, { status: 503, headers });
  return NextResponse.json({ confirmed: verifyAgeConsent(request.cookies.get(AGE_CONSENT_COOKIE)?.value, secret), version: AGE_CONSENT_VERSION }, { headers });
}
