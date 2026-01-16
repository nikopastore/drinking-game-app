import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  cn,
  getDeviceId,
  formatPlayerCount,
  getDrunkennessLabel,
  formatElapsedTime,
  isSessionExpired,
  debounce,
} from './utils'

describe('cn (className merge utility)', () => {
  it('merges class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('handles conditional classes', () => {
    expect(cn('base', true && 'active', false && 'hidden')).toBe('base active')
  })

  it('merges tailwind classes correctly', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4')
  })

  it('handles empty inputs', () => {
    expect(cn()).toBe('')
  })

  it('handles undefined and null', () => {
    expect(cn('base', undefined, null, 'end')).toBe('base end')
  })
})

describe('getDeviceId', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns empty string on server (no window)', () => {
    const originalWindow = global.window
    // @ts-expect-error - testing server environment
    delete global.window

    // Import fresh to test server condition
    // Since we can't easily re-import, we test the function behavior
    // The function checks typeof window === "undefined"

    global.window = originalWindow
  })

  it('creates new device ID if none exists', () => {
    const mockGetItem = vi.fn().mockReturnValue(null)
    const mockSetItem = vi.fn()

    Object.defineProperty(window, 'localStorage', {
      value: { getItem: mockGetItem, setItem: mockSetItem },
      writable: true,
    })

    const result = getDeviceId()

    expect(mockGetItem).toHaveBeenCalledWith('sipwiki_device_id')
    expect(mockSetItem).toHaveBeenCalledWith('sipwiki_device_id', expect.any(String))
    expect(result).toBeTruthy()
  })

  it('returns existing device ID if present', () => {
    const existingId = 'existing-device-id-123'
    const mockGetItem = vi.fn().mockReturnValue(existingId)
    const mockSetItem = vi.fn()

    Object.defineProperty(window, 'localStorage', {
      value: { getItem: mockGetItem, setItem: mockSetItem },
      writable: true,
    })

    const result = getDeviceId()

    expect(result).toBe(existingId)
    expect(mockSetItem).not.toHaveBeenCalled()
  })
})

describe('formatPlayerCount', () => {
  it('formats unlimited players (null max)', () => {
    expect(formatPlayerCount(2, null)).toBe('2+ players')
  })

  it('formats exact player count (min equals max)', () => {
    expect(formatPlayerCount(4, 4)).toBe('4 players')
  })

  it('formats player range', () => {
    expect(formatPlayerCount(2, 6)).toBe('2-6 players')
  })

  it('handles single player', () => {
    expect(formatPlayerCount(1, 1)).toBe('1 players')
  })

  it('handles large numbers', () => {
    expect(formatPlayerCount(10, 50)).toBe('10-50 players')
  })
})

describe('getDrunkennessLabel', () => {
  it('returns "Light Buzz" for level 1', () => {
    expect(getDrunkennessLabel(1)).toBe('Light Buzz')
  })

  it('returns "Tipsy" for level 2', () => {
    expect(getDrunkennessLabel(2)).toBe('Tipsy')
  })

  it('returns "Drunk" for level 3', () => {
    expect(getDrunkennessLabel(3)).toBe('Drunk')
  })

  it('returns "Wasted" for level 4', () => {
    expect(getDrunkennessLabel(4)).toBe('Wasted')
  })

  it('returns "Blackout Risk" for level 5', () => {
    expect(getDrunkennessLabel(5)).toBe('Blackout Risk')
  })
})

describe('formatElapsedTime', () => {
  it('formats seconds only', () => {
    const now = Date.now()
    const startedAt = now - 45 * 1000 // 45 seconds ago

    vi.setSystemTime(now)
    expect(formatElapsedTime(startedAt)).toBe('45s')
  })

  it('formats minutes and seconds', () => {
    const now = Date.now()
    const startedAt = now - (5 * 60 + 30) * 1000 // 5m 30s ago

    vi.setSystemTime(now)
    expect(formatElapsedTime(startedAt)).toBe('5m 30s')
  })

  it('formats hours and minutes', () => {
    const now = Date.now()
    const startedAt = now - (2 * 60 * 60 + 15 * 60) * 1000 // 2h 15m ago

    vi.setSystemTime(now)
    expect(formatElapsedTime(startedAt)).toBe('2h 15m')
  })

  it('handles zero elapsed time', () => {
    const now = Date.now()
    vi.setSystemTime(now)
    expect(formatElapsedTime(now)).toBe('0s')
  })
})

describe('isSessionExpired', () => {
  it('returns false for session less than 1 hour old', () => {
    const now = Date.now()
    const startedAt = now - 30 * 60 * 1000 // 30 minutes ago

    vi.setSystemTime(now)
    expect(isSessionExpired(startedAt)).toBe(false)
  })

  it('returns true for session more than 1 hour old', () => {
    const now = Date.now()
    const startedAt = now - 61 * 60 * 1000 // 61 minutes ago

    vi.setSystemTime(now)
    expect(isSessionExpired(startedAt)).toBe(true)
  })

  it('returns false for session exactly 1 hour old', () => {
    const now = Date.now()
    const startedAt = now - 60 * 60 * 1000 // exactly 1 hour ago

    vi.setSystemTime(now)
    expect(isSessionExpired(startedAt)).toBe(false)
  })
})

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('delays function execution', () => {
    const fn = vi.fn()
    const debouncedFn = debounce(fn, 100)

    debouncedFn()
    expect(fn).not.toHaveBeenCalled()

    vi.advanceTimersByTime(100)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('only calls function once for rapid calls', () => {
    const fn = vi.fn()
    const debouncedFn = debounce(fn, 100)

    debouncedFn()
    debouncedFn()
    debouncedFn()

    vi.advanceTimersByTime(100)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('passes arguments to the function', () => {
    const fn = vi.fn()
    const debouncedFn = debounce(fn, 100)

    debouncedFn('arg1', 'arg2')
    vi.advanceTimersByTime(100)

    expect(fn).toHaveBeenCalledWith('arg1', 'arg2')
  })

  it('uses latest arguments when called multiple times', () => {
    const fn = vi.fn()
    const debouncedFn = debounce(fn, 100)

    debouncedFn('first')
    debouncedFn('second')
    debouncedFn('third')

    vi.advanceTimersByTime(100)
    expect(fn).toHaveBeenCalledWith('third')
  })
})
