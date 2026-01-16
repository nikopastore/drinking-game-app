import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  checkRateLimit,
  getClientIP,
  createRateLimitHeaders,
  rateLimiters,
  resetRateLimit,
  clearAllRateLimits,
} from './rateLimit'

describe('checkRateLimit', () => {
  beforeEach(() => {
    // Clear all rate limits before each test
    clearAllRateLimits()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('allows requests under the limit', () => {
    const config = { maxRequests: 5, windowMs: 60000 }
    const identifier = 'test-ip-1'

    const result = checkRateLimit(identifier, config)

    expect(result.allowed).toBe(true)
    expect(result.remaining).toBe(4) // 5 - 1 = 4 remaining
    expect(result.limit).toBe(5)
  })

  it('tracks multiple requests correctly', () => {
    const config = { maxRequests: 3, windowMs: 60000 }
    const identifier = 'test-ip-2'

    const result1 = checkRateLimit(identifier, config)
    expect(result1.allowed).toBe(true)
    expect(result1.remaining).toBe(2)

    const result2 = checkRateLimit(identifier, config)
    expect(result2.allowed).toBe(true)
    expect(result2.remaining).toBe(1)

    const result3 = checkRateLimit(identifier, config)
    expect(result3.allowed).toBe(true)
    expect(result3.remaining).toBe(0)
  })

  it('blocks requests over the limit', () => {
    const config = { maxRequests: 2, windowMs: 60000 }
    const identifier = 'test-ip-3'

    // Make 2 allowed requests
    checkRateLimit(identifier, config)
    checkRateLimit(identifier, config)

    // Third request should be blocked
    const result = checkRateLimit(identifier, config)
    expect(result.allowed).toBe(false)
    expect(result.remaining).toBe(0)
  })

  it('resets after window expires', () => {
    const config = { maxRequests: 2, windowMs: 60000 }
    const identifier = 'test-ip-4'

    // Exhaust the limit
    checkRateLimit(identifier, config)
    checkRateLimit(identifier, config)

    // Should be blocked
    const blocked = checkRateLimit(identifier, config)
    expect(blocked.allowed).toBe(false)

    // Advance time past the window
    vi.advanceTimersByTime(61000)

    // Should be allowed again
    const allowed = checkRateLimit(identifier, config)
    expect(allowed.allowed).toBe(true)
    expect(allowed.remaining).toBe(1)
  })

  it('tracks different identifiers separately', () => {
    const config = { maxRequests: 1, windowMs: 60000 }

    // First IP makes a request
    const result1 = checkRateLimit('ip-1', config)
    expect(result1.allowed).toBe(true)

    // First IP is now blocked
    const result2 = checkRateLimit('ip-1', config)
    expect(result2.allowed).toBe(false)

    // Second IP should still be allowed
    const result3 = checkRateLimit('ip-2', config)
    expect(result3.allowed).toBe(true)
  })

  it('provides correct resetAt timestamp', () => {
    const config = { maxRequests: 2, windowMs: 60000 }
    const identifier = 'test-ip-5'
    const now = Date.now()
    vi.setSystemTime(now)

    const result = checkRateLimit(identifier, config)

    // Reset should be windowMs after the first request
    expect(result.resetAt).toBe(now + config.windowMs)
  })

  it('uses sliding window correctly', () => {
    const config = { maxRequests: 2, windowMs: 60000 }
    const identifier = 'test-ip-6'

    // First request at t=0
    vi.setSystemTime(0)
    checkRateLimit(identifier, config)

    // Second request at t=30s
    vi.setSystemTime(30000)
    checkRateLimit(identifier, config)

    // At t=30s, both requests are in window, should be blocked
    const blocked = checkRateLimit(identifier, config)
    expect(blocked.allowed).toBe(false)

    // At t=61s, first request expired, should have 1 slot
    vi.setSystemTime(61000)
    const allowed = checkRateLimit(identifier, config)
    expect(allowed.allowed).toBe(true)
    expect(allowed.remaining).toBe(0) // 1 old + 1 new = 2, so 0 remaining
  })
})

describe('getClientIP', () => {
  it('extracts IP from x-forwarded-for header', () => {
    const request = new Request('https://example.com', {
      headers: { 'x-forwarded-for': '192.168.1.1, 10.0.0.1' },
    })

    expect(getClientIP(request)).toBe('192.168.1.1')
  })

  it('extracts IP from x-real-ip header', () => {
    const request = new Request('https://example.com', {
      headers: { 'x-real-ip': '192.168.1.2' },
    })

    expect(getClientIP(request)).toBe('192.168.1.2')
  })

  it('extracts IP from x-vercel-forwarded-for header', () => {
    const request = new Request('https://example.com', {
      headers: { 'x-vercel-forwarded-for': '192.168.1.3' },
    })

    expect(getClientIP(request)).toBe('192.168.1.3')
  })

  it('prefers x-forwarded-for over other headers', () => {
    const request = new Request('https://example.com', {
      headers: {
        'x-forwarded-for': '192.168.1.1',
        'x-real-ip': '192.168.1.2',
      },
    })

    expect(getClientIP(request)).toBe('192.168.1.1')
  })

  it('returns "unknown" when no headers present', () => {
    const request = new Request('https://example.com')

    expect(getClientIP(request)).toBe('unknown')
  })

  it('trims whitespace from IP addresses', () => {
    const request = new Request('https://example.com', {
      headers: { 'x-forwarded-for': '  192.168.1.1  ' },
    })

    expect(getClientIP(request)).toBe('192.168.1.1')
  })
})

describe('createRateLimitHeaders', () => {
  it('creates correct headers from rate limit result', () => {
    const result = {
      allowed: true,
      remaining: 5,
      resetAt: 1700000000000,
      limit: 10,
    }

    const headers = createRateLimitHeaders(result)

    expect(headers['X-RateLimit-Limit']).toBe('10')
    expect(headers['X-RateLimit-Remaining']).toBe('5')
    expect(headers['X-RateLimit-Reset']).toBe('1700000000') // Seconds, not milliseconds
  })
})

describe('rateLimiters presets', () => {
  it('has chat preset with 10 requests per minute', () => {
    expect(rateLimiters.chat.maxRequests).toBe(10)
    expect(rateLimiters.chat.windowMs).toBe(60000)
  })

  it('has strict preset with 5 requests per minute', () => {
    expect(rateLimiters.strict.maxRequests).toBe(5)
    expect(rateLimiters.strict.windowMs).toBe(60000)
  })

  it('has relaxed preset with 30 requests per minute', () => {
    expect(rateLimiters.relaxed.maxRequests).toBe(30)
    expect(rateLimiters.relaxed.windowMs).toBe(60000)
  })
})

describe('resetRateLimit', () => {
  beforeEach(() => {
    clearAllRateLimits()
  })

  it('resets rate limit for specific identifier', () => {
    const config = { maxRequests: 1, windowMs: 60000 }
    const identifier = 'test-ip-reset'

    // Exhaust limit
    checkRateLimit(identifier, config)
    expect(checkRateLimit(identifier, config).allowed).toBe(false)

    // Reset
    resetRateLimit(identifier)

    // Should be allowed again
    expect(checkRateLimit(identifier, config).allowed).toBe(true)
  })

  it('does not affect other identifiers', () => {
    const config = { maxRequests: 1, windowMs: 60000 }

    checkRateLimit('ip-a', config)
    checkRateLimit('ip-b', config)

    // Both should be blocked
    expect(checkRateLimit('ip-a', config).allowed).toBe(false)
    expect(checkRateLimit('ip-b', config).allowed).toBe(false)

    // Reset only ip-a
    resetRateLimit('ip-a')

    // ip-a allowed, ip-b still blocked
    expect(checkRateLimit('ip-a', config).allowed).toBe(true)
    expect(checkRateLimit('ip-b', config).allowed).toBe(false)
  })
})
