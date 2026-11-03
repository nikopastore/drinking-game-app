/**
 * Sliding-window limiter with an in-memory fast path and optional Vercel
 * Runtime Cache propagation for blocked clients.
 *
 * The Runtime Cache only propagates a block marker; it is deliberately not
 * used as an increment counter because get/set is not an atomic operation.
 * Vercel WAF rules remain the authoritative global limiter.
 */

import { createHash } from "node:crypto";
import { getCache } from "@vercel/functions";

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
const MAX_RATE_LIMIT_KEYS = 10_000;

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
    if (rateLimitStore.size >= MAX_RATE_LIMIT_KEYS) {
      cleanupOldEntries(config.windowMs);
    }
    if (rateLimitStore.size >= MAX_RATE_LIMIT_KEYS) {
      return {
        allowed: false,
        remaining: 0,
        resetAt: now + config.windowMs,
        limit: config.maxRequests,
      };
    }
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

const RUNTIME_BLOCK_NAMESPACE = "sipwiki-rate-limit-block";

function runtimeCacheAvailable(): boolean {
  return process.env.VERCEL === "1" || Boolean(process.env.RUNTIME_CACHE_ENDPOINT);
}

function runtimeBlockKey(identifier: string): string {
  return createHash("sha256").update(identifier).digest("hex");
}

/**
 * Propagate local blocks across warm Vercel functions in the same runtime
 * cache region. Cache failures fail open to the local limiter for availability.
 */
export async function checkDistributedRateLimit(
  identifier: string,
  config: RateLimitConfig,
): Promise<RateLimitResult> {
  const local = checkRateLimit(identifier, config);
  if (!runtimeCacheAvailable()) return local;

  try {
    const cache = getCache({ namespace: RUNTIME_BLOCK_NAMESPACE });
    const key = runtimeBlockKey(identifier);
    const remote = await cache.get(key);
    const remoteResetAt = remote && typeof remote === "object" && "resetAt" in remote
      && Number.isFinite((remote as { resetAt?: unknown }).resetAt)
      ? Number((remote as { resetAt: number }).resetAt)
      : null;

    if (remoteResetAt && remoteResetAt > Date.now()) {
      return { ...local, allowed: false, remaining: 0, resetAt: Math.max(local.resetAt, remoteResetAt) };
    }

    if (!local.allowed) {
      const ttl = Math.max(1, Math.ceil((local.resetAt - Date.now()) / 1000));
      await cache.set(key, { resetAt: local.resetAt }, { ttl, name: "rate-limit-block" });
    }
  } catch {
    // Runtime Cache is defense-in-depth. Keep the bounded local limiter alive.
  }
  return local;
}

/**
 * Get the client IP address from a request
 * Handles various proxy headers
 */
export function getClientIP(request: Request): string {
  // Vercel sets this from the connecting client. Prefer it over the
  // spoofable x-forwarded-for header that callers can send themselves.
  const vercelForwardedFor = request.headers.get("x-vercel-forwarded-for");
  if (vercelForwardedFor) {
    return vercelForwardedFor.split(",")[0].trim();
  }

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
  /** Commerce events: 60 requests per minute per IP */
  events: {
    maxRequests: 60,
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
