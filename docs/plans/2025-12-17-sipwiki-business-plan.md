# SipWiki Business Plan: Becoming the "Kleenex" of Party Apps

**Date:** 2025-12-17
**Status:** Strategic Planning
**Goal:** Establish SipWiki as the definitive, first-thought resource for drinking games, party games, and cocktail recipes.

---

## Executive Summary

The drinking game and party companion app space is **fragmented with no dominant leader**. Competitors like Picolo (5M+ downloads) focus on single-mode dare games, while cocktail apps like Cocktail Flow focus only on recipes. **No one owns the complete party experience.**

SipWiki's opportunity: Become the comprehensive party companion that handles **games + drinks + planning** - the place everyone checks first when planning a party.

---

## Part 1: SEO Domination Strategy

### The Opportunity

Current landscape analysis reveals:
- High search volume for game rules with **no authoritative single source**
- Most competitors are apps (not indexed by Google) or thin affiliate sites
- Long-tail keywords are severely underserved
- No one has built proper topical authority in this space

### Content Silo Architecture

Build **topical authority** through interconnected content silos:

```
sipwiki.com/
├── /games/                          # SILO 1: Drinking Games
│   ├── /card-games/
│   │   ├── kings-cup/
│   │   ├── ride-the-bus/
│   │   ├── pyramid/
│   │   └── ... (20+ games)
│   ├── /cup-games/
│   │   ├── beer-pong/
│   │   ├── flip-cup/
│   │   ├── rage-cage/
│   │   └── ... (15+ games)
│   ├── /dice-games/
│   ├── /no-props/
│   ├── /two-player/
│   └── /large-groups/
│
├── /drinks/                         # SILO 2: Drink Recipes
│   ├── /cocktails/
│   ├── /shots/
│   ├── /punches/                    # Batch drinks for parties
│   ├── /mocktails/
│   └── /game-pairings/              # "What to drink while playing X"
│
├── /tv-movie-games/                 # SILO 3: Media Drinking Games
│   ├── /the-office/
│   ├── /friends/
│   ├── /harry-potter/
│   ├── /game-of-thrones/
│   └── ... (50+ shows/movies)
│
├── /occasions/                      # SILO 4: Event-Specific
│   ├── /super-bowl/
│   ├── /bachelorette/
│   ├── /halloween/
│   ├── /christmas/
│   ├── /new-years/
│   └── /college-parties/
│
└── /guides/                         # SILO 5: Authority Content
    ├── /how-to-host-party/
    ├── /drinking-responsibly/
    └── /party-supply-guides/
```

### Priority Keywords & Pages to Create

#### Tier 1: High Volume, High Intent (Create First)
| Keyword | Est. Monthly Searches | Current Competition | Page to Create |
|---------|----------------------|---------------------|----------------|
| kings cup rules | 40,000+ | Medium | `/games/card-games/kings-cup/` |
| beer pong rules | 35,000+ | Medium | `/games/cup-games/beer-pong/` |
| flip cup rules | 15,000+ | Low | `/games/cup-games/flip-cup/` |
| never have i ever questions | 50,000+ | High | `/games/no-props/never-have-i-ever/` |
| ride the bus drinking game | 20,000+ | Low | `/games/card-games/ride-the-bus/` |
| waterfall drinking game | 12,000+ | Low | `/games/card-games/waterfall/` |

#### Tier 2: Long-Tail Gold (Underserved, High Conversion)
| Keyword Pattern | Examples | Volume Each |
|-----------------|----------|-------------|
| "[game] rules" | rage cage rules, chandelier rules | 1-5K |
| "drinking games for [N] people" | drinking games for 2 people, for 3 people | 2-8K |
| "drinking games without [X]" | without cards, without cups | 1-3K |
| "[show] drinking game" | the office drinking game, friends drinking game | 5-20K |
| "[event] drinking games" | super bowl drinking games, bachelorette games | 5-15K |
| "best [type] drinking games" | best card drinking games, best outdoor | 1-5K |

#### Tier 3: Cocktail & Drink Keywords
| Keyword | Volume | Page |
|---------|--------|------|
| margarita recipe | 200K+ | `/drinks/cocktails/margarita/` |
| espresso martini | 100K+ | `/drinks/cocktails/espresso-martini/` |
| jello shots | 50K+ | `/drinks/shots/jello-shots/` |
| party punch recipes | 30K+ | `/drinks/punches/` |
| jungle juice recipe | 25K+ | `/drinks/punches/jungle-juice/` |

### Programmatic SEO Strategy

Generate **hundreds of pages** from structured data:

1. **Game Variation Pages**
   - `kings-cup-rules-for-2-players`
   - `kings-cup-rules-with-shots`
   - `kings-cup-rules-easy-version`

2. **TV/Movie Drinking Games** (50+ pages)
   - Template: "Take a drink when [character] does [action]"
   - Auto-generate from IMDb-style data

3. **Occasion + Game Combinations**
   - `super-bowl-beer-pong-rules`
   - `bachelorette-never-have-i-ever-questions`

4. **Player Count Variants**
   - `best-drinking-games-for-4-people`
   - `drinking-games-for-couples`

### Schema Markup Implementation

Add structured data for rich snippets:

```json
{
  "@context": "https://schema.org",
  "@type": "Game",
  "name": "King's Cup",
  "numberOfPlayers": {
    "@type": "QuantitativeValue",
    "minValue": 3,
    "maxValue": 15
  },
  "gameItem": ["deck of cards", "large cup"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1250"
  }
}
```

For recipes:
```json
{
  "@context": "https://schema.org",
  "@type": "Recipe",
  "name": "Classic Margarita",
  "recipeCategory": "Cocktail",
  "prepTime": "PT5M",
  "recipeIngredient": [...],
  "recipeInstructions": [...]
}
```

---

## Part 2: Content Expansion Roadmap

### Phase 1: Game Library Expansion (Weeks 1-4)

**Current:** 30 games
**Target:** 100+ games

Games to add immediately (from research):

**Card Games (High Search Volume)**
- Asshole/President
- Across the Bridge
- Up the River, Down the River
- Give and Take
- Higher or Lower (standalone)
- Black or Red
- Spoons (drinking version)

**Dice Games**
- Mexico
- Beer Die
- Snappa
- Liar's Dice
- Ship Captain Crew

**Cup Games**
- Beer Ball
- Flunkyball

**No-Prop Games**
- Paranoia
- Drink While You Think
- If You Know You Know
- Fuzzy Duck
- The Name Game
- I'm Going on a Picnic

**Video Game Drinking Rules**
- Mario Kart drinking rules
- Super Smash Bros drinking rules
- FIFA drinking rules
- Jackbox drinking rules

**Board Game Drinking Variants**
- Drunk Twister
- BattleShots
- Drunk Checkers
- UNO drinking rules
- Cards Against Humanity drinking rules

### Phase 2: Drinks Section Launch (Weeks 5-8)

**Target:** 200+ drink recipes

**Categories:**
1. **Party Cocktails** (50 recipes)
   - Margarita + 5 variations
   - Mojito + variations
   - Moscow Mule + variations
   - Espresso Martini
   - Long Island Iced Tea
   - Sex on the Beach
   - Tequila Sunrise

2. **Shot Recipes** (50 recipes)
   - Lemon Drop
   - Kamikaze
   - Buttery Nipple
   - Jäger Bomb
   - Irish Car Bomb
   - B-52
   - Jolly Rancher variations

3. **Batch Punches** (30 recipes)
   - Jungle Juice (multiple versions)
   - Sangria
   - Fish Bowl
   - Hunch Punch
   - Trashcan Punch

4. **Jello Shots** (20 recipes)
   - By flavor/color
   - Themed (holiday, team colors)

5. **Mocktails** (30 recipes)
   - Virgin versions of all popular drinks
   - Original mocktails

6. **Game Pairings** (20 articles)
   - "What to Drink While Playing Beer Pong"
   - "Best Cocktails for Card Game Night"

### Phase 3: TV/Movie Drinking Games (Weeks 9-12)

**Target:** 100+ show/movie drinking game pages

**Priority Shows:**
1. The Office
2. Friends
3. How I Met Your Mother
4. Game of Thrones
5. Harry Potter (movies)
6. Lord of the Rings
7. The Bachelor/Bachelorette
8. Rick and Morty
9. It's Always Sunny in Philadelphia
10. Parks and Recreation
11. Brooklyn Nine-Nine
12. Schitt's Creek
13. New Girl
14. Succession
15. Euphoria

**Sports:**
- NFL game drinking rules
- NBA drinking rules
- March Madness drinking game
- World Cup drinking game

### Phase 4: Occasion Pages (Weeks 13-16)

**Create comprehensive guides:**

1. **Super Bowl Party Guide**
   - Drinking games + rules
   - Football-themed drinks
   - Commercial bingo
   - Prop bet games

2. **Bachelorette Party Guide**
   - Games ranked by raunchiness
   - Themed drinks
   - Printable game cards

3. **College Party Guide**
   - Dorm-friendly games
   - Budget drinks
   - Noise-conscious options

4. **Holiday Guides**
   - Christmas/Holiday party
   - Halloween
   - New Year's Eve
   - St. Patrick's Day
   - Cinco de Mayo
   - 4th of July

---

## Part 3: Monetization Strategy

### Revenue Stream 1: Amazon Affiliate (Primary)

**Current Setup:** Basic affiliate links on materials

**Optimization Strategy:**

1. **Expand Product Categories:**
   - Party supplies (cups, decorations)
   - Bar tools (shakers, jiggers, muddlers)
   - Glassware (shot glasses, pint glasses, cocktail glasses)
   - Games (card decks, dice sets, Jenga)
   - Premium items (cocktail kits, giant beer pong sets)

2. **Create "Shop the Game" Modules:**
   ```
   EVERYTHING YOU NEED FOR KING'S CUP:
   [Waterproof Cards - $12] [Party Goblet - $15] [Solo Cups 100pk - $8]
   Total: ~$35 | [Buy Bundle on Amazon]
   ```

3. **"Party Supply Lists":**
   - "The $50 Complete Party Setup"
   - "Beer Pong Tournament Kit"
   - "Home Bar Starter Kit"

**Estimated Revenue:**
- 4% commission on party supplies
- 1-3% on most other items
- Target: $5-15 per conversion
- With 10K monthly visitors converting at 2% = $1,000-3,000/month

### Revenue Stream 2: Display Advertising

**Implementation:**
- Google AdSense or premium network (Mediavine at 50K sessions)
- Strategic placement: between game sections, sidebar on desktop

**Estimated Revenue:**
- RPM of $5-15 for this demographic
- 100K monthly pageviews = $500-1,500/month

### Revenue Stream 3: Premium Features (Future)

**SipWiki Pro ($2.99/month or $19.99/year):**
- Ad-free experience
- Exclusive game packs
- Custom game creator
- Printable game cards
- Saved favorites across devices
- Party planning tools

### Revenue Stream 4: Sponsored Content

**Opportunities:**
- Alcohol brand partnerships (21+ focused content)
- Party supply brand features
- App/game sponsorships

**Pricing:** $500-2,000 per sponsored post once traffic established

### Revenue Stream 5: Merchandise

**Products:**
- "SipWiki" branded party cups
- Drinking game card decks
- Party game bundles
- Printable game packs (digital download)

---

## Part 4: Growth & Viral Strategy

### Social Media Playbook

**TikTok (Primary):**
- Short-form game demos (15-30 seconds)
- "POV: You're playing King's Cup and draw the 4th King"
- "Drinking game tier lists"
- User-generated content challenges

**Instagram:**
- Reels (repurpose TikTok)
- Stories with game cards
- Carousel posts (game rules simplified)
- Cocktail photography

**Pinterest:**
- Party planning boards
- Printable game cards
- Drink recipe pins
- Infographics

### Viral Features to Build

1. **Game Randomizer / Wheel Spin** (Already have!)
   - Make shareable: "SipWiki picked [Game] for us!"

2. **Party Playlist Generator**
   - "Generate your party playlist" → share to Spotify

3. **"What Drinking Game Are You?" Quiz**
   - Viral quiz format → share results

4. **Printable Game Cards**
   - PDF downloads people share
   - Watermarked with SipWiki branding

5. **AI Party Planner**
   - Input: # of people, vibe, supplies available
   - Output: Recommended games + drinks + playlist

### User-Generated Content

1. **Game Submission Portal** (Already have!)
   - Feature submitted games
   - Credit creators

2. **House Rules Section**
   - Let users add variations
   - Vote on best house rules

3. **Photo/Video Sharing**
   - "Share your party moments"
   - User testimonials

### Referral Program

**"Share SipWiki, Get Perks":**
- Share app → unlock exclusive games
- 5 referrals → premium features free
- Leaderboard for top referrers

---

## Part 5: Technical SEO Checklist

### Immediate Actions

- [ ] Add sitemap.xml (auto-generated by Next.js)
- [ ] Set up Google Search Console
- [ ] Set up Google Analytics 4
- [ ] Implement canonical URLs
- [ ] Add Open Graph images for each game
- [ ] Create robots.txt with proper rules
- [ ] Implement JSON-LD schema for all games
- [ ] Add breadcrumb navigation
- [ ] Optimize Core Web Vitals (LCP, FID, CLS)
- [ ] Enable static generation for all game pages
- [ ] Add internal linking between related games

### Page-Level SEO Template

Each game page should have:
```
Title: [Game Name] Rules - How to Play | SipWiki
Meta Description: Learn how to play [Game Name] with our complete rules guide. Perfect for [X-Y] players. Materials needed: [list]. Get the official rules now!
H1: [Game Name] Rules & How to Play
H2s: What You Need, Setup, How to Play, Winning, Variations, House Rules, FAQ
```

### URL Structure
```
/games/[category]/[game-slug]/
/drinks/[type]/[drink-slug]/
/tv-games/[show-slug]/
/occasions/[event-slug]/
```

---

## Part 6: Implementation Priority Matrix

### NOW (This Week)

| Priority | Task | Impact | Effort |
|----------|------|--------|--------|
| 1 | Set up Google Search Console | High | Low |
| 2 | Add JSON-LD schema to existing games | High | Medium |
| 3 | Create /games/ category landing pages | High | Medium |
| 4 | Optimize meta titles/descriptions | High | Low |
| 5 | Add 20 more high-search-volume games | High | Medium |

### NEXT (Weeks 2-4)

| Priority | Task | Impact | Effort |
|----------|------|--------|--------|
| 1 | Launch drinks section with 50 recipes | High | High |
| 2 | Create TV/Movie drinking games (top 20) | High | Medium |
| 3 | Build "drinking games for X people" pages | High | Low |
| 4 | Implement affiliate product modules | Medium | Medium |
| 5 | Start TikTok content creation | Medium | Medium |

### LATER (Month 2+)

| Priority | Task | Impact | Effort |
|----------|------|--------|--------|
| 1 | Occasion/event landing pages | High | Medium |
| 2 | Premium subscription features | Medium | High |
| 3 | AI Party Planner feature | Medium | High |
| 4 | User accounts & social features | Medium | High |
| 5 | Native app optimization | Medium | High |

---

## Key Metrics to Track

### SEO Metrics
- Organic traffic (Google Analytics)
- Keyword rankings (track top 50 keywords)
- Indexed pages (Search Console)
- Click-through rate from search
- Average position for target keywords

### Engagement Metrics
- Time on page (target: >3 minutes for game pages)
- Bounce rate (target: <50%)
- Pages per session (target: >2)
- Return visitor rate

### Revenue Metrics
- Affiliate clicks and conversions
- Revenue per 1,000 visitors (RPM)
- Premium conversion rate
- Ad revenue (when implemented)

### Growth Metrics
- Monthly active users
- App installs
- Social followers
- Email subscribers
- Referral signups

---

## The Vision: 12 Months From Now

**SipWiki becomes:**
- The #1 Google result for "drinking game rules"
- 500K+ monthly organic visitors
- 100K+ app installs
- $10K+/month in affiliate + ad revenue
- The brand people mention when someone asks "what should we play?"

**The Kleenex Effect:**
> "Just SipWiki it" becomes the phrase for finding party games.

---

## Appendix A: 100 Drinking Games to Add

1. Asshole/President
2. Across the Bridge
3. Up the River Down the River
4. Give and Take
5. Higher or Lower
6. Black or Red
7. Spoons (drinking)
8. Mexico (dice)
9. Beer Die
10. Snappa
11. Liar's Dice
12. Ship Captain Crew
13. Beer Ball
14. Flunkyball
15. Paranoia
16. Drink While You Think
17. Fuzzy Duck
18. The Name Game
19. I'm Going on a Picnic
20. Attached at the Hip
21. Straight Face
22. Two Truths and a Lie
23. Battle of the Sexes
24. Thumbmaster (standalone)
25. Fingers
26. Doctor (Who Am I?)
27. Toepen
28. Stack Cup
29. Mario Kart drinking game
30. Super Smash Bros drinking game
31. FIFA drinking game
32. Jackbox drinking rules
33. Drunk Twister
34. BattleShots
35. Drunk Checkers
36. UNO drinking rules
37. Cards Against Humanity drinking rules
38. Exploding Kittens drinking rules
39. Shot Roulette
40. Avalanche
41. Icing
42. Go Fish (drinking)
43. Crazy Eights (drinking)
44. Sip Sip Shot
45. Taskmaster
46. Drinktionary
47. Drink Charades
48. If You Know You Know
49. Who's the Most
50. This or That (drinking)
51. Put a Finger Down
52. Finish the Lyric
53. Don't Drink If
54. The Office drinking game
55. Friends drinking game
56. Game of Thrones drinking game
57. Harry Potter drinking game
58. How I Met Your Mother drinking game
59. Rick and Morty drinking game
60. It's Always Sunny drinking game
61. Parks and Recreation drinking game
62. Brooklyn Nine-Nine drinking game
63. Schitt's Creek drinking game
64. New Girl drinking game
65. Succession drinking game
66. The Bachelor drinking game
67. NFL game drinking rules
68. NBA drinking rules
69. March Madness drinking game
70. World Cup drinking game
71. Super Bowl commercial bingo
72. Oscar drinking game
73. Grammy drinking game
74. Debate drinking game
75. Wedding reception games
76. Baby shower drinking games
77. Gender reveal drinking game
78. Reunion drinking games
79. Camping drinking games
80. Beach drinking games
81. Pool party games
82. Boat day drinking games
83. Tailgate games
84. House party classics
85. Pregame quickies
86. Late night wind-down games
87. Couples drinking games
88. Double date games
89. First date ice breakers
90. Work party safe games
91. Family-friendly alternatives
92. Drinking game creator (custom rules)
93. Speed rounds compilation
94. Drinking Olympics event list
95. Around the world (multi-game tournament)
96. King of the table (tournament style)
97. Survivor drinking (elimination)
98. Truth or Drink (deep questions)
99. Hot Seat
100. Confession (group storytelling)

---

## Appendix B: Top Cocktail Recipes to Add

**Classic Cocktails:**
1. Margarita
2. Mojito
3. Old Fashioned
4. Moscow Mule
5. Whiskey Sour
6. Daiquiri
7. Cosmopolitan
8. Manhattan
9. Negroni
10. Martini (classic + dirty)

**Trending/Popular:**
11. Espresso Martini
12. Aperol Spritz
13. Paloma
14. Porn Star Martini
15. Pornstar Martini
16. Long Island Iced Tea
17. Mai Tai
18. Piña Colada
19. Tequila Sunrise
20. Sex on the Beach

**Shots:**
21. Lemon Drop
22. Kamikaze
23. B-52
24. Buttery Nipple
25. Jäger Bomb
26. Irish Car Bomb
27. Washington Apple
28. Jolly Rancher
29. Gummy Bear
30. Green Tea Shot

**Batch/Punch:**
31. Jungle Juice
32. Sangria (red + white)
33. Fish Bowl
34. Hunch Punch
35. Trash Can Punch
36. Party Punch (vodka)
37. Champagne Punch
38. Rum Punch
39. Margarita Pitcher
40. Moscow Mule Pitcher

---

*This document serves as the strategic foundation for SipWiki's growth. Execute systematically, measure everything, and iterate based on data.*
