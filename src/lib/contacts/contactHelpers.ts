/**
 * Normalizes an email address for consistent hashing
 */
export function normalizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

/**
 * Normalizes a phone number for consistent hashing
 * Keeps country codes; ten-digit numbers are treated as North American.
 */
export function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (phone.trim().startsWith("+") && /^[1-9][0-9]{7,14}$/.test(digits)) return `+${digits}`;
  if (/^[2-9][0-9]{9}$/.test(digits)) return `+1${digits}`;
  if (/^1[2-9][0-9]{9}$/.test(digits)) return `+${digits}`;
  return "";
}
