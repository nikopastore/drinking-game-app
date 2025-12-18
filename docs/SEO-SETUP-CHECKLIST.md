# SipWiki SEO Setup Checklist

Complete these steps IN ORDER to rank #1 for "SipWiki" on Google.

---

## STEP 1: Deploy Your Latest Changes

Before setting up Search Console, make sure your site is live with all the SEO fixes.

```bash
# If using Vercel
git add .
git commit -m "Add SEO improvements: sitemap, robots.txt, schema markup"
git push origin main
```

**Verify after deploy:**
- [ ] Visit https://sipwiki.com/robots.txt - should show your robots file
- [ ] Visit https://sipwiki.com/sitemap.xml - should show XML sitemap
- [ ] Visit https://sipwiki.com/about - should show About page

---

## STEP 2: Google Search Console Setup

### 2.1 Create/Access Search Console

1. Go to: **https://search.google.com/search-console/welcome**
2. Sign in with your Google account (use a business/personal account you'll keep forever)

### 2.2 Add Your Property

1. You'll see two boxes: "Domain" and "URL prefix"
2. Click on **"URL prefix"** (right side)
3. Enter: `https://sipwiki.com`
4. Click **"CONTINUE"**

### 2.3 Verify Ownership

Google will show several verification methods. Here are your options:

#### OPTION A: HTML File (Recommended for Vercel/Static Sites)

1. Google shows: "Download this HTML verification file"
2. Click **"DOWNLOAD"** - you'll get a file like `google1a2b3c4d5e6f7g8h.html`
3. Put this file in your `public/` folder:
   ```
   public/google1a2b3c4d5e6f7g8h.html
   ```
4. Deploy your site
5. Go back to Search Console and click **"VERIFY"**

#### OPTION B: HTML Tag (Alternative)

1. Google shows a meta tag like:
   ```html
   <meta name="google-site-verification" content="abc123xyz..." />
   ```
2. Copy the `content` value (just the code, not the whole tag)
3. Open `src/app/layout.tsx`
4. Find the `verification` section and add:
   ```typescript
   verification: {
     google: "abc123xyz...",  // paste your code here
   },
   ```
5. Deploy your site
6. Click **"VERIFY"** in Search Console

#### OPTION C: DNS Record (If you control DNS)

1. Google shows a TXT record like: `google-site-verification=abc123...`
2. Go to your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.)
3. Add a TXT record:
   - Type: TXT
   - Name: @ (or leave blank)
   - Value: `google-site-verification=abc123...`
4. Wait 5-10 minutes
5. Click **"VERIFY"** in Search Console

### 2.4 Verification Success

Once verified, you'll see "Ownership verified" - you now have access to Search Console!

---

## STEP 3: Submit Your Sitemap

This is the most important step for getting indexed.

### 3.1 Go to Sitemaps

1. In Search Console left sidebar, click **"Sitemaps"**
2. You'll see "Add a new sitemap"

### 3.2 Submit Sitemap

1. In the text box, enter: `sitemap.xml`
   (it will show: https://sipwiki.com/sitemap.xml)
2. Click **"SUBMIT"**
3. Status should change to "Success" (may take a few minutes)

### 3.3 Verify Sitemap Contents

1. Click on your submitted sitemap
2. You should see "Discovered URLs: 50+" (all your games + pages)

---

## STEP 4: Request Indexing for Key Pages

Force Google to crawl your most important pages NOW.

### 4.1 Index Homepage

1. In Search Console, click **"URL Inspection"** (top search bar)
2. Enter: `https://sipwiki.com/`
3. Wait for it to check the URL
4. Click **"REQUEST INDEXING"**
5. Wait for confirmation (takes 1-2 minutes)

### 4.2 Index About Page

1. In URL Inspection, enter: `https://sipwiki.com/about`
2. Click **"REQUEST INDEXING"**

### 4.3 Index Games Page

1. In URL Inspection, enter: `https://sipwiki.com/games`
2. Click **"REQUEST INDEXING"**

### 4.4 Index Top Game Pages

Request indexing for your highest-value pages:
- `https://sipwiki.com/game/kings-cup`
- `https://sipwiki.com/game/beer-pong`
- `https://sipwiki.com/game/flip-cup`
- `https://sipwiki.com/game/ride-the-bus`

---

## STEP 5: Create Social Media Profiles

Google uses social signals to understand brands. Create these accounts:

### 5.1 Twitter/X
1. Go to: https://twitter.com/signup
2. Username: **sipwiki** (or sipwikiapp if taken)
3. Display name: **SipWiki - Drinking Game Rules**
4. Bio: "The #1 drinking game rules app. 30+ party games with complete rules. 🎉🍻"
5. Website: https://sipwiki.com
6. Post at least 1 tweet linking to your site

### 5.2 Instagram
1. Go to: https://instagram.com
2. Username: **sipwiki**
3. Display name: **SipWiki**
4. Bio: "The #1 drinking game rules app 🎯 30+ games | Beer Pong | King's Cup | More"
5. Website: https://sipwiki.com
6. Post at least 1 image

### 5.3 TikTok
1. Go to: https://tiktok.com
2. Username: **sipwiki**
3. Display name: **SipWiki**
4. Bio: "Drinking game rules & party games 🎉"
5. Website: https://sipwiki.com

### 5.4 Facebook Page
1. Go to: https://facebook.com/pages/create
2. Page name: **SipWiki**
3. Category: "App" or "Entertainment Website"
4. Add website URL

### 5.5 Update Your Code

After creating social profiles, update `src/app/layout.tsx`:

```typescript
sameAs: [
  "https://twitter.com/sipwiki",
  "https://instagram.com/sipwiki",
  "https://tiktok.com/@sipwiki",
  "https://facebook.com/sipwiki",
],
```

---

## STEP 6: Get Initial Backlinks

Even 3-5 quality links dramatically help brand recognition.

### 6.1 Product Hunt
1. Go to: https://producthunt.com
2. Create account
3. Submit SipWiki as a product
4. Write compelling description

### 6.2 Reddit
Post in relevant subreddits (follow their rules!):
- r/SideProject - "I built SipWiki, a drinking game rules app"
- r/webdev - If sharing technical details
- r/InternetIsBeautiful - If your site qualifies

### 6.3 Hacker News
1. Go to: https://news.ycombinator.com
2. Submit with "Show HN: SipWiki - Drinking game rules for every party"

### 6.4 Free Directory Submissions
- https://www.producthunt.com
- https://betalist.com
- https://alternativeto.net (list as alternative to other party apps)

---

## STEP 7: Monitor Progress

### 7.1 Check Search Console Weekly
- Look at "Performance" tab for impressions/clicks
- Check "Coverage" for indexing issues
- Monitor "Core Web Vitals"

### 7.2 Track Your Brand Ranking
1. Open incognito/private browser
2. Search: "sipwiki"
3. Note your position (should improve over 2-4 weeks)

### 7.3 Track Game Rankings
Search for:
- "kings cup rules" - look for sipwiki.com
- "beer pong rules"
- "flip cup rules"

---

## Timeline Expectations

| Timeframe | Expected Result |
|-----------|-----------------|
| Day 1-3 | Google discovers sitemap, starts crawling |
| Week 1 | Some pages indexed, may appear in results |
| Week 2-3 | Most pages indexed, brand name starts ranking |
| Week 4+ | Should rank #1 for "sipwiki" |
| Month 2+ | Start ranking for game-specific keywords |

---

## Troubleshooting

### "SipWiki" still shows Wikipedia
- This is normal for the first 2-4 weeks
- Keep adding social signals and content
- Make sure sitemap is submitted

### Pages not getting indexed
1. Check robots.txt isn't blocking
2. Manually request indexing in Search Console
3. Make sure pages have unique content

### Search Console shows errors
- Check the specific error message
- Most common: redirect issues, mobile usability
- Fix issues and re-validate

---

## Quick Reference Links

- Google Search Console: https://search.google.com/search-console
- Rich Results Test: https://search.google.com/test/rich-results
- PageSpeed Insights: https://pagespeed.web.dev/
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

---

**Last Updated:** December 2024
