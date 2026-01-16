import DOMPurify from "dompurify";

/**
 * Sanitize configuration for DOMPurify
 * Only allow safe formatting tags, no scripts or event handlers
 */
const SANITIZE_CONFIG = {
  ALLOWED_TAGS: ["strong", "em", "b", "i", "br", "p", "span"],
  ALLOWED_ATTR: ["class"],
  ALLOW_DATA_ATTR: false,
  ALLOW_UNKNOWN_PROTOCOLS: false,
};

/**
 * Safely formats markdown-style bold text (**text**) to HTML
 * and sanitizes the output to prevent XSS attacks
 */
export function formatMarkdownBold(text: string): string {
  // First, escape any existing HTML to prevent injection
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

  // Then apply markdown bold formatting
  const formatted = escaped.replace(
    /\*\*(.*?)\*\*/g,
    '<strong class="text-neon-pink">$1</strong>'
  );

  // Finally, sanitize the output as defense-in-depth
  return DOMPurify.sanitize(formatted, SANITIZE_CONFIG) as string;
}

/**
 * Sanitizes arbitrary HTML content
 * Use this for any user-generated content that may contain HTML
 */
export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, SANITIZE_CONFIG) as string;
}
