import { describe, it, expect } from 'vitest'
import { formatMarkdownBold, sanitizeHtml } from './sanitize'

describe('formatMarkdownBold', () => {
  it('converts markdown bold to HTML strong tags', () => {
    const result = formatMarkdownBold('This is **bold** text')
    expect(result).toBe('This is <strong class="text-neon-pink">bold</strong> text')
  })

  it('handles multiple bold sections', () => {
    const result = formatMarkdownBold('**First** and **Second** bold')
    expect(result).toBe('<strong class="text-neon-pink">First</strong> and <strong class="text-neon-pink">Second</strong> bold')
  })

  it('returns plain text unchanged if no markdown', () => {
    const result = formatMarkdownBold('Plain text without markdown')
    expect(result).toBe('Plain text without markdown')
  })

  it('handles empty string', () => {
    const result = formatMarkdownBold('')
    expect(result).toBe('')
  })

  // XSS Prevention Tests
  // The key security property is that < and > are escaped to &lt; and &gt;
  // This prevents any HTML from being parsed/executed by the browser
  describe('XSS prevention', () => {
    it('escapes script tags - angle brackets become entities', () => {
      const result = formatMarkdownBold('<script>alert("xss")</script>')
      // Angle brackets must be escaped - this prevents script execution
      expect(result).not.toContain('<script>')
      expect(result).toContain('&lt;script&gt;')
    })

    it('escapes script tags inside bold markdown', () => {
      const result = formatMarkdownBold('**<script>alert("xss")</script>**')
      // Angle brackets must be escaped even inside bold
      expect(result).not.toContain('<script>')
      expect(result).toContain('&lt;script&gt;')
    })

    it('escapes img tag - prevents onerror XSS attack', () => {
      const result = formatMarkdownBold('**<img src=x onerror="alert(1)">**')
      // The key is that <img is escaped to &lt;img - browser won't parse it as HTML
      expect(result).not.toContain('<img')
      expect(result).toContain('&lt;img')
    })

    it('escapes div tag - prevents onclick execution', () => {
      const result = formatMarkdownBold('<div onclick="alert(1)">click</div>')
      // The key is that <div is escaped - browser won't parse it as HTML
      expect(result).not.toContain('<div')
      expect(result).toContain('&lt;div')
    })

    it('escapes anchor tag - prevents javascript: URL execution', () => {
      const result = formatMarkdownBold('<a href="javascript:alert(1)">link</a>')
      // The key is that <a is escaped - browser won't parse it as HTML
      expect(result).not.toContain('<a ')
      expect(result).toContain('&lt;a')
    })

    it('escapes iframe injection', () => {
      const result = formatMarkdownBold('<iframe src="evil.com"></iframe>')
      expect(result).not.toContain('<iframe')
      expect(result).toContain('&lt;iframe')
    })

    it('escapes SVG with embedded script', () => {
      const result = formatMarkdownBold('<svg onload="alert(1)"></svg>')
      // The key is that <svg is escaped - browser won't parse it as HTML
      expect(result).not.toContain('<svg')
      expect(result).toContain('&lt;svg')
    })

    it('escapes HTML entities bypass attempts', () => {
      const result = formatMarkdownBold('&lt;script&gt;alert(1)&lt;/script&gt;')
      // Should keep the escaped version, not convert back to script tags
      expect(result).not.toContain('<script>')
    })

    it('handles nested XSS attempts in markdown - escapes dangerous tags', () => {
      const result = formatMarkdownBold('Normal text **<img src=x onerror=alert(1)>injected** more text')
      // The img tag is escaped, bold formatting still works
      expect(result).not.toContain('<img')
      expect(result).toContain('&lt;img')
      expect(result).toContain('<strong class="text-neon-pink">')
    })

    it('escapes quotes to prevent attribute injection', () => {
      const result = formatMarkdownBold('Test "quoted" and \'single\'')
      expect(result).toContain('&quot;quoted&quot;')
      expect(result).toContain('&#039;single&#039;')
    })
  })
})

describe('sanitizeHtml', () => {
  it('allows safe tags', () => {
    const result = sanitizeHtml('<strong>bold</strong> and <em>italic</em>')
    expect(result).toBe('<strong>bold</strong> and <em>italic</em>')
  })

  it('removes script tags', () => {
    const result = sanitizeHtml('<script>alert(1)</script>')
    expect(result).toBe('')
  })

  it('removes onclick handlers', () => {
    const result = sanitizeHtml('<strong onclick="alert(1)">text</strong>')
    expect(result).toBe('<strong>text</strong>')
  })

  it('allows class attribute', () => {
    const result = sanitizeHtml('<span class="highlight">text</span>')
    expect(result).toBe('<span class="highlight">text</span>')
  })

  it('removes data attributes', () => {
    const result = sanitizeHtml('<span data-evil="payload">text</span>')
    expect(result).toBe('<span>text</span>')
  })

  it('removes dangerous tags', () => {
    const result = sanitizeHtml('<iframe src="evil.com"></iframe><object data="evil.swf"></object>')
    expect(result).toBe('')
  })
})
