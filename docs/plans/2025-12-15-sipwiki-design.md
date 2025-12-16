# SipWiki - Design Document

**Date:** 2025-12-15
**Status:** Approved

## Overview

SipWiki is a drinking game encyclopedia and party companion app. Users can browse games, filter by party constraints, enter "Live Mode" with an AI referee, and submit their own games.

## Tech Stack

- **Framework:** Next.js 14+ (App Router, TypeScript)
- **Styling:** Tailwind CSS (Mobile-first, "Party Dark Mode")
- **Database:** Supabase (PostgreSQL)
- **State:** Zustand (play session, timers)
- **Icons:** Lucide-React
- **AI:** OpenAI GPT-4o-mini
- **Deployment:** Vercel

## Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Authentication | Hybrid (anonymous ratings, auth for comments) | Zero friction for core experience |
| AI Provider | OpenAI GPT-4o-mini | Fast, cheap, reliable |
| Supabase Setup | Env vars, configure later | Don't block on setup |
| Seed Data | 20 curated games | Quality over quantity for MVP |

---

## Project Structure

```
drinking-game-app/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Home - Game Library
│   │   ├── game/[slug]/page.tsx     # Game Detail
│   │   ├── play/[slug]/page.tsx     # Live Mode
│   │   ├── spin/page.tsx            # Spin the Wheel
│   │   ├── submit/page.tsx          # Submit a Game
│   │   ├── api/
│   │   │   ├── chat/route.ts        # OpenAI chat endpoint
│   │   │   └── auth/...             # Supabase auth callbacks
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/                      # Button, Card, Modal, etc.
│   │   ├── GameCard.tsx
│   │   ├── FilterBar.tsx
│   │   ├── WheelSpinner.tsx
│   │   ├── AIChatFAB.tsx
│   │   ├── RatingModal.tsx
│   │   └── CommentSection.tsx
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts
│   │   │   └── server.ts
│   │   ├── store.ts                 # Zustand store
│   │   └── utils.ts
│   ├── config/
│   │   ├── monetizationConfig.ts
│   │   └── gameData.ts
│   └── types/
│       └── index.ts
├── supabase/
│   └── schema.sql
└── .env.example
```

---

## Data Models

### Game

```typescript
interface Game {
  id: string;
  slug: string;
  name: string;
  description: string;
  rules_text: string;
  materials: string[];
  min_players: number;
  max_players: number | null;
  alcohol_type: "beer" | "liquor" | "any";
  drunkenness_level: 1 | 2 | 3 | 4 | 5;
  video_url?: string;
  created_at: string;
  is_user_submitted: boolean;
}
```

### Comment

```typescript
interface Comment {
  id: string;
  game_id: string;
  user_id: string;
  parent_id: string | null;
  content: string;
  upvotes: number;
  created_at: string;
}
```

### Rating

```typescript
interface Rating {
  id: string;
  game_id: string;
  device_id: string;
  user_id: string | null;
  score: 1 | 2 | 3 | 4 | 5;
  created_at: string;
}
```

---

## Feature Specifications

### 1. Game Library (Home)

- Grid/masonry layout of GameCards
- FilterBar with:
  - Group size: 2, 3-5, 6-10, 10+
  - Materials: multi-select checkboxes
  - Alcohol type: toggle
- Instant search by name
- Mobile: single column, Desktop: 2-3 columns

### 2. Game Detail View

- Header with title + video placeholder
- Metadata badges (players, drunkenness, materials)
- **Affiliate Links:** Materials render as "Buy on Amazon" buttons via `monetizationConfig.ts`
- Sticky "Play" button → enters Live Mode
- Comments section (auth required)

### 3. Live Mode

- Simplified rules view
- Elapsed time display
- **AI Chat FAB:** Opens chat drawer, uses game rules as context
- "End Game" button
- **Rating Prompt:** If user returns >1 hour later, show rating modal

### 4. Spin the Wheel

- Filter inputs: player count, materials available, alcohol type
- Animated wheel with matching games
- Confetti on selection
- "Play [Game]!" CTA

### 5. User Submission

- Auth-gated form
- Fields: name, description, rules, materials, player range, alcohol type
- Optional source URL field with upsell copy
- Submissions go to review queue

### 6. Comments System

- Reddit-style threading
- Upvote functionality
- Sort by Top or New
- Supabase with RLS policies

---

## Monetization

**Affiliate Link Mapping:**

```typescript
const affiliateLinks = {
  "cards": { url: "...", label: "Waterproof Cards" },
  "red solo cups": { url: "...", label: "Red Solo Cups (Bulk)" },
  "ping pong balls": { url: "...", label: "Pro Ping Pong Balls" },
  "jenga blocks": { url: "...", label: "Giant Wood Block Game" },
  // ... full mapping in monetizationConfig.ts
};

const nonAffiliateItems = ["no prop", "beer", "table", "tv", "empty bottle"];
```

Upsell strategy: Link to premium versions (waterproof cards, giant Jenga, party speakers).

---

## Zustand Store

```typescript
interface AppState {
  // Play Session
  session: PlaySession | null;
  startSession: (slug: string, name: string) => void;
  endSession: () => void;

  // AI Chat
  chatHistory: ChatMessage[];
  addMessage: (msg: ChatMessage) => void;
  clearChat: () => void;

  // Rating
  pendingRating: { slug: string; name: string } | null;
  setPendingRating: (data: { slug: string; name: string } | null) => void;
}
```

Session persists to localStorage. Rating prompt triggers if session age >1 hour on app reopen.

---

## AI Chat System

**API Route:** `POST /api/chat`

**System Prompt Template:**
```
You are the official referee for "{gameName}". You know the rules inside and out.

RULES:
{rules_text}

INSTRUCTIONS:
- Answer questions about the rules concisely (1-3 sentences)
- If asked about a scenario not covered, make a fair ruling and say "House rule suggestion:"
- Be fun and casual - you're at a party, not a courtroom
- Never encourage dangerous drinking behavior
```

**Environment:** `OPENAI_API_KEY`

---

## Database Schema (Supabase)

```sql
-- Games (seeded, not user-editable directly)
CREATE TABLE games (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  rules_text TEXT NOT NULL,
  materials TEXT[] NOT NULL,
  min_players INT NOT NULL,
  max_players INT,
  alcohol_type TEXT NOT NULL,
  drunkenness_level INT NOT NULL,
  video_url TEXT,
  is_user_submitted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Comments
CREATE TABLE comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  game_id TEXT REFERENCES games(id),
  user_id UUID REFERENCES auth.users(id),
  parent_id UUID REFERENCES comments(id),
  content TEXT NOT NULL,
  upvotes INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Upvote tracking
CREATE TABLE comment_upvotes (
  user_id UUID REFERENCES auth.users(id),
  comment_id UUID REFERENCES comments(id),
  PRIMARY KEY (user_id, comment_id)
);

-- Ratings
CREATE TABLE ratings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  game_id TEXT REFERENCES games(id),
  device_id TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id),
  score INT NOT NULL CHECK (score >= 1 AND score <= 5),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(game_id, device_id)
);

-- User submissions
CREATE TABLE game_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  rules_text TEXT NOT NULL,
  materials TEXT[] NOT NULL,
  min_players INT NOT NULL,
  max_players INT,
  alcohol_type TEXT NOT NULL,
  source_url TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policies
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read comments" ON comments FOR SELECT USING (true);
CREATE POLICY "Auth users can insert comments" ON comments FOR INSERT WITH CHECK (auth.uid() = user_id);

ALTER TABLE ratings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read ratings" ON ratings FOR SELECT USING (true);
CREATE POLICY "Anyone can insert ratings" ON ratings FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can update own ratings" ON ratings FOR UPDATE USING (device_id = device_id);
```

---

## Visual Design

**Color Palette:**
- Background: `#0a0a0f` (dark-900)
- Cards: `#12121a` (dark-800)
- Neon Pink: `#ff2d92` (primary)
- Neon Blue: `#00d4ff` (secondary)
- Neon Green: `#39ff14` (success)
- Neon Purple: `#b94dff` (highlight)

**Component Styles:**
- Cards: dark background, subtle glow on hover
- Buttons: gradient pink→purple, glow shadow
- FAB: pulsing neon blue
- Active filters: neon outline

**Mobile-First Breakpoints:**
- Default: 1 column
- md (768px): 2 columns
- lg (1024px): 3 columns

---

## Environment Variables

```env
# .env.example
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
OPENAI_API_KEY=your_openai_key
```

---

## Implementation Order

1. Next.js project setup + Tailwind config
2. Types + config files (gameData.ts, monetizationConfig.ts)
3. UI components (Button, Card, Modal)
4. Home page with GameCard grid + FilterBar
5. Game Detail page with affiliate links
6. Zustand store + Live Mode page
7. AI Chat API route + FAB component
8. Spin the Wheel page
9. Supabase client setup + schema
10. Comments section
11. Rating modal + 1-hour logic
12. User submission page
13. Auth flow (Google + magic link)
