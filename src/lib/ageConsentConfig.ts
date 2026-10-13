export const AGE_CONSENT_VERSION = "2026-10-13";
export const AGE_CONSENT_MAX_AGE = 30 * 24 * 60 * 60;
export const AGE_CONSENT_COOKIE = process.env.NODE_ENV === "production" ? "__Host-sipwiki-age-consent" : "sipwiki-age-consent";
export const AGE_CONSENT_STORAGE = "sipwiki-age-confirmation";

export function nativeAgeConfirmed(raw: string | null, now = Date.now()): boolean {
  try {
    const data = raw ? JSON.parse(raw) : null;
    return data?.version === AGE_CONSENT_VERSION && Number.isFinite(data.expires)
      && data.expires > now && data.expires <= now + AGE_CONSENT_MAX_AGE * 1000;
  } catch { return false; }
}
