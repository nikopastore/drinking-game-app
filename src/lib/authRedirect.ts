/**
 * Only allow same-origin relative paths for post-auth redirects.
 * Reject protocol-relative URLs (`//evil.com`) and schemes.
 */
export function isSafeInternalPath(next: string | null | undefined): next is string {
  if (!next) return false;
  if (!next.startsWith("/")) return false;
  if (next.startsWith("//")) return false;
  if (next.includes("\\") || next.includes("://")) return false;
  return true;
}

export function safeNextPath(next: string | null | undefined, fallback = "/"): string {
  return isSafeInternalPath(next) ? next : fallback;
}
