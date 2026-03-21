# SipWiki Development Sprint - Codex Spec

**Created:** 2026-03-20
**Deadline:** EOD Friday (2026-03-21) for Week tasks, EOD 2026-03-31 for Month tasks
**Priority:** Execute in order listed

---

## THIS WEEK TASKS (High Priority - Complete First)

### 1. SEO Foundation Setup
- [ ] Verify sitemap.xml is working at /sitemap.xml
- [ ] Verify robots.txt is properly configured
- [ ] Add JSON-LD schema markup to ALL game pages using Schema.org `Game` type:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Game",
    "name": "King's Cup",
    "numberOfPlayers": { "@type": "QuantitativeValue", "minValue": 3, "maxValue": 15 },
    "gameItem": ["deck of cards", "large cup"],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "1250" }
  }
  ```
- [ ] Optimize meta titles/descriptions for all game pages using pattern:
  - Title: `[Game Name] Rules - How to Play | SipWiki`
  - Description: `Learn how to play [Game Name] with our complete rules guide. Perfect for [X-Y] players. Materials needed: [list]. Get the official rules now!`
- [ ] Add breadcrumb navigation to game pages
- [ ] Create category landing pages at:
  - `/games/card-games/`
  - `/games/cup-games/`
  - `/games/dice-games/`
  - `/games/no-props/`
  - `/games/two-player/`
  - `/games/large-groups/`

### 2. Add 20 High-Search-Volume Games
Expand from 30 to 50+ games. Add these (check `src/config/gameData.ts` for structure):

**Card Games:**
1. Asshole/President
2. Across the Bridge
3. Up the River, Down the River
4. Give and Take
5. Higher or Lower (standalone)
6. Black or Red
7. Spoons (drinking version)

**Dice Games:**
8. Mexico
9. Beer Die
10. Snappa
11. Liar's Dice
12. Ship Captain Crew

**Cup Games:**
13. Beer Ball
14. Flunkyball

**No-Prop Games:**
15. Paranoia
16. Drink While You Think
17. Fuzzy Duck
18. The Name Game
19. I'm Going on a Picnic
20. If You Know You Know

For each game, include:
- Full rules (setup, gameplay, winning conditions)
- Player count range
- Materials needed
- Difficulty rating
- At least 2-3 house rule variations
- Tips for beginners

### 3. Fix Any Build/Deploy Issues
- [ ] Run `npm run build` and fix any errors
- [ ] Ensure static export works (`NEXT_PUBLIC_STATIC_EXPORT=true`)
- [ ] Test PWA functionality

---

## THIS MONTH TASKS (Complete After Week Tasks)

### 4. Launch Drinks Section
Create `/drinks/` section with 50+ recipes. Structure:

```
/drinks/
├── cocktails/     (20 recipes)
├── shots/         (15 recipes)
├── punches/       (10 recipes - batch drinks)
├── mocktails/     (5 recipes)
```

**Must-have cocktails:**
- Margarita (+ variations: frozen, spicy, mango)
- Mojito
- Moscow Mule
- Espresso Martini
- Long Island Iced Tea
- Whiskey Sour
- Old Fashioned
- Cosmopolitan
- Piña Colada
- Tequila Sunrise

**Must-have shots:**
- Lemon Drop
- Kamikaze
- B-52
- Buttery Nipple
- Jäger Bomb
- Green Tea Shot

**Must-have punches:**
- Jungle Juice (3 variations)
- Sangria (red + white)
- Fish Bowl
- Party Punch

Each recipe needs:
- Ingredients list with measurements
- Step-by-step instructions
- Serving size
- Difficulty level
- Pro tips
- JSON-LD Recipe schema markup

### 5. TV/Movie Drinking Games (Top 20)
Create `/tv-games/` section:

1. The Office
2. Friends
3. How I Met Your Mother
4. Game of Thrones
5. Harry Potter (movies)
6. Parks and Recreation
7. Brooklyn Nine-Nine
8. Schitt's Creek
9. New Girl
10. Rick and Morty
11. It's Always Sunny in Philadelphia
12. The Bachelor/Bachelorette
13. Succession
14. Breaking Bad
15. Stranger Things
16. Euphoria
17. Ted Lasso
18. Lord of the Rings
19. Marvel movies (general)
20. Star Wars (general)

Template for each:
- Title: `[Show/Movie] Drinking Game - Complete Rules`
- 10-15 "Take a drink when..." rules
- 3-5 "Take a shot when..." rules (rare events)
- Safety disclaimer
- Episode recommendations for best experience

### 6. Player Count Pages (Programmatic SEO)
Create landing pages for:
- `/games/for-2-people/`
- `/games/for-3-people/`
- `/games/for-4-people/`
- `/games/for-5-plus/`
- `/games/for-large-groups/` (10+)

Each page lists relevant games from the database filtered by player count.

### 7. Affiliate Product Integration
Expand the shop/materials sections:
- Create "What You Need" component for each game with Amazon affiliate links
- Bundle suggestions (e.g., "Complete Beer Pong Kit")
- Price estimates
- Use existing `src/config/monetizationConfig.ts` structure

### 8. Core Web Vitals Optimization
- [ ] Run Lighthouse audit
- [ ] Optimize LCP (Largest Contentful Paint) < 2.5s
- [ ] Fix CLS (Cumulative Layout Shift) < 0.1
- [ ] Lazy load images below the fold
- [ ] Optimize fonts (Geist is already good, ensure proper loading)

---

## Technical Notes

### File Locations
- Game data: `src/config/gameData.ts`
- Monetization: `src/config/monetizationConfig.ts`
- Components: `src/components/`
- Pages: `src/app/`
- Utilities: `src/lib/`

### Commands
```bash
npm run dev              # Development
npm run build            # Production build
npm run lint             # ESLint
```

### Design System
- Background: `#0a0a0f` (dark-900)
- Cards: `#12121a` (dark-800)
- Primary: `#ff2d92` (neon-pink)
- Secondary: `#00d4ff` (neon-blue)

### Environment
Check `.env.example` for required variables. The actual `.env` should already exist.

---

## DO NOT DO (Out of Scope)

- ❌ TikTok integration or content creation
- ❌ Social media posting
- ❌ Product Hunt submission
- ❌ Any external marketing activities
- ❌ Mobile app builds (Capacitor)
- ❌ Premium/subscription features

---

## Success Criteria

1. **Week Tasks:** All SEO foundations in place, 20 new games added, build passes
2. **Month Tasks:** 50+ drink recipes, 20 TV/movie games, player count pages, affiliate integration improved

Run `npm run build` at the end to verify everything compiles.
