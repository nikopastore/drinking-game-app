# SipWiki SEO QA Checklist

## Page structure
- Home page has exactly one H1: “SipWiki – Drinking Game Rules, Ideas, and How to Play.”
- Category pages have exactly one H1: “{Category Name} Drinking Games.”
- Game pages have exactly one H1: “{Game Name} Drinking Game – Rules & How to Play.”
- Heading hierarchy uses H2/H3 for sections (no styling-only headings).

## Metadata & canonicals
- Each game page has a unique title + meta description.
- Each category page has a unique title + meta description.
- Canonical tags resolve to `https://sipwiki.app/games/{slug}`.
- `/game/{slug}` requests redirect to `/games/{slug}` (301).

## Structured data
- Game pages include JSON-LD graph for `Game` + `HowTo` with required fields.
- FAQ schema renders on game pages.
- About page includes Organization + WebSite schema with SearchAction.
- Validate a few pages in Google Rich Results Test.

## E-E-A-T signals
- Game pages show author byline with name, short bio, and last updated date.
- Quick Facts include players, game length, difficulty, equipment, intensity, and popularity.

## Technical & performance
- Sitemap lists game URLs under `/games/{slug}`.
- Core Web Vitals: verify LCP/CLS/INP in PageSpeed Insights after deployment.
- Check that YouTube embeds lazy-load and don’t block initial render.

## Regression checks
- Game links throughout the app navigate to `/games/{slug}`.
- Category pages still resolve under `/games/{category}`.
- `/games` index still lists all games.
