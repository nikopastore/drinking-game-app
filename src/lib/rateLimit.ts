/**
 * Simple in-memory rate limiter using sliding window algorithm
 *
 * For production with multiple instances, consider using:
 * - Redis with @upstash/ratelimit
 * - Vercel KV
 * - Other distributed cache
 */

interface RateLimitEntry {
  timestamps: number[];
}

interface RateLimitConfig {
  /** Maximum number of requests allowed in the window */
  maxRequests: number;
  /** Time window in milliseconds */
  windowMs: number;
}

interface RateLimitResult {
  /** Whether the request is allowed */
  allowed: boolean;
  /** Number of remaining requests in current window */
  remaining: number;
  /** Timestamp when the rate limit resets */
  resetAt: number;
  /** Total limit for the window */
  limit: number;
}

// In-memory store for rate limit data
// Key: identifier (IP address or user ID)
// Value: array of request timestamps
const rateLimitStore = new Map<string, RateLimitEntry>();

// Cleanup old entries periodically to prevent memory leaks
const CLEANUP_INTERVAL = 60 * 1000; // 1 minute
let lastCleanup = Date.now();

function cleanupOldEntries(windowMs: number): void {
  const now = Date.now();

  // Only cleanup once per interval
  if (now - lastCleanup < CLEANUP_INTERVAL) {
    return;
  }

  lastCleanup = now;
  const cutoff = now - windowMs;

  for (const [key, entry] of rateLimitStore.entries()) {
    // Filter out old timestamps
    entry.timestamps = entry.timestamps.filter(ts => ts > cutoff);

    // Remove entry if no recent requests
    if (entry.timestamps.length === 0) {
      rateLimitStore.delete(key);
    }
  }
}

/**
 * Check if a request should be rate limited
 *
 * @param identifier - Unique identifier for the client (IP address, user ID, etc.)
 * @param config - Rate limit configuration
 * @returns Rate limit result with allowed status and metadata
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig
): RateLimitResult {
  const now = Date.now();
  const windowStart = now - config.windowMs;

  // Periodic cleanup
  cleanupOldEntries(config.windowMs);

  // Get or create entry for this identifier
  let entry = rateLimitStore.get(identifier);
  if (!entry) {
    entry = { timestamps: [] };
    rateLimitStore.set(identifier, entry);
  }

  // Filter timestamps to only include those within the current window
  entry.timestamps = entry.timestamps.filter(ts => ts > windowStart);

  // Calculate remaining requests
  const requestsInWindow = entry.timestamps.length;
  const remaining = Math.max(0, config.maxRequests - requestsInWindow);
  const allowed = requestsInWindow < config.maxRequests;

  // Calculate reset time (when the oldest request in window expires)
  const oldestTimestamp = entry.timestamps[0] || now;
  const resetAt = oldestTimestamp + config.windowMs;

  // If allowed, record this request
  if (allowed) {
    entry.timestamps.push(now);
  }

  return {
    allowed,
    remaining: allowed ? remaining - 1 : 0,
    resetAt,
    limit: config.maxRequests,
  };
}

/**
 * Get the client IP address from a request
 * Handles various proxy headers
 */
export function getClientIP(request: Request): string {
  // Check various headers that proxies use
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    // x-forwarded-for can contain multiple IPs, take the first one
    return forwardedFor.split(",")[0].trim();
  }

  const realIP = request.headers.get("x-real-ip");
  if (realIP) {
    return realIP.trim();
  }

  // Vercel-specific header
  const vercelForwardedFor = request.headers.get("x-vercel-forwarded-for");
  if (vercelForwardedFor) {
    return vercelForwardedFor.split(",")[0].trim();
  }

  // Fallback to a default identifier
  return "unknown";
}

/**
 * Create rate limit headers for the response
 */
export function createRateLimitHeaders(result: RateLimitResult): Record<string, string> {
  return {
    "X-RateLimit-Limit": result.limit.toString(),
    "X-RateLimit-Remaining": result.remaining.toString(),
    "X-RateLimit-Reset": Math.ceil(result.resetAt / 1000).toString(),
  };
}

/**
 * Pre-configured rate limiters for different use cases
 */
export const rateLimiters = {
  /** Chat API: 10 requests per minute per IP */
  chat: {
    maxRequests: 10,
    windowMs: 60 * 1000, // 1 minute
  },
  /** Strict: 5 requests per minute per IP */
  strict: {
    maxRequests: 5,
    windowMs: 60 * 1000,
  },
  /** Relaxed: 30 requests per minute per IP */
  relaxed: {
    maxRequests: 30,
    windowMs: 60 * 1000,
  },
} as const;

/**
 * Reset rate limit for a specific identifier (useful for testing)
 */
export function resetRateLimit(identifier: string): void {
  rateLimitStore.delete(identifier);
}

/**
 * Clear all rate limit data (useful for testing)
 */
export function clearAllRateLimits(): void {
  rateLimitStore.clear();
}
