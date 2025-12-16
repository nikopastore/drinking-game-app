/**
 * Normalizes an email address for consistent hashing
 */
export function normalizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

/**
 * Normalizes a phone number for consistent hashing
 * Strips all non-digits and keeps last 10 digits (US format)
 */
export function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  // Keep last 10 digits for US numbers
  return digits.slice(-10);
}

/**
 * Creates a SHA-256 hash of a string
 * Used to hash contact info for privacy-safe matching
 */
export async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

/**
 * Hashes an array of normalized contact strings
 */
export async function hashContacts(contacts: string[]): Promise<string[]> {
  const hashes = await Promise.all(contacts.map((c) => sha256(c)));
  // Remove duplicates
  return [...new Set(hashes)];
}
