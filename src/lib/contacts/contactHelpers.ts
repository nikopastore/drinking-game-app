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
