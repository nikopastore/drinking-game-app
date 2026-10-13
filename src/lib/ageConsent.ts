import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { AGE_CONSENT_COOKIE, AGE_CONSENT_MAX_AGE, AGE_CONSENT_VERSION } from "./ageConsentConfig";

/** A receipt for a self-declaration, not proof of identity or age. */
export function signAgeConsent(secret: string, now = Date.now()): string {
  const issued = Math.floor(now / 1000);
  const payload = Buffer.from(JSON.stringify({ version: AGE_CONSENT_VERSION, issued, expires: issued + AGE_CONSENT_MAX_AGE })).toString("base64url");
  return `${payload}.${createHmac("sha256", secret).update(payload).digest("base64url")}`;
}

export function verifyAgeConsent(token: string | undefined, secret: string, now = Date.now()): boolean {
  if (!token || token.length > 512) return false;
  const parts = token.split(".");
  if (parts.length !== 2 || !/^[A-Za-z0-9_-]+$/.test(parts[0]) || !/^[A-Za-z0-9_-]{43}$/.test(parts[1])) return false;
  const signature = createHmac("sha256", secret).update(parts[0]).digest("base64url");
  if (!timingSafeEqual(Buffer.from(signature), Buffer.from(parts[1]))) return false;
  try {
    const data = JSON.parse(Buffer.from(parts[0], "base64url").toString("utf8"));
    const time = Math.floor(now / 1000);
    return data.version === AGE_CONSENT_VERSION && Number.isSafeInteger(data.issued)
      && Number.isSafeInteger(data.expires) && data.issued <= time
      && data.expires > time && data.expires === data.issued + AGE_CONSENT_MAX_AGE;
  } catch { return false; }
}

export function ageConsentSecret(): string | null {
  const secret = process.env.AGE_CONSENT_SECRET;
  return secret && secret.length >= 32 ? secret : null;
}

/** Enforce at the cost/write boundary; a client-side flag never authorizes it. */
export function requireAgeConsent(request: NextRequest, headers: Record<string, string> = {}): NextResponse | null {
  headers = { ...headers, "Cache-Control": "private, no-store" };
  const secret = ageConsentSecret();
  if (!secret) return NextResponse.json({ error: "Age confirmation is temporarily unavailable", reply: "Age confirmation is temporarily unavailable." }, { status: 503, headers });
  if (!verifyAgeConsent(request.cookies.get(AGE_CONSENT_COOKIE)?.value, secret)) {
    return NextResponse.json({ error: "Confirm your legal drinking age to continue", reply: "Confirm your legal drinking age to continue.", code: "AGE_CONFIRMATION_REQUIRED" }, { status: 428, headers });
  }
  return null;
}
