# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SipWiki is a drinking game encyclopedia and party companion app built with Next.js. Users can browse games, filter by party constraints, enter "Live Mode" with an AI referee, and submit their own games.

## Common Commands

```bash
# Development
npm run dev              # Start dev server with webpack (uses --webpack flag)
npm run build            # Production build
npm run lint             # Run ESLint

# Mobile (Capacitor)
npm run build:mobile     # Build for mobile (static export)
npm run mobile:ios       # Build + sync + open Xcode
npm run mobile:android   # Build + sync + open Android Studio
npm run cap:sync         # Sync web assets to native projects
```

## Tech Stack

- **Framework:** Next.js 16 with App Router and TypeScript
- **Styling:** Tailwind CSS v4 with custom "Party Dark Mode" theme
- **Database:** Supabase (PostgreSQL with RLS)
- **State:** Zustand with localStorage persistence
- **AI:** OpenAI GPT-4o-mini for game referee chat
- **Mobile:** Capacitor for iOS/Android builds
- **Icons:** Lucide React
- **PWA:** @ducanh2912/next-pwa

## Architecture

### Key Directories

- `src/app/` - Next.js App Router pages
- `src/components/` - React components (ui/ contains reusable primitives)
- `src/lib/` - Utilities, Supabase clients, Zustand store
- `src/config/` - Game data and monetization config
- `src/types/` - TypeScript interfaces

### Important Files

- `src/config/gameData.ts` - All game definitions (30+ games with rules)
- `src/config/monetizationConfig.ts` - Amazon affiliate link mappings
- `src/lib/store.ts` - Zustand store for play sessions, chat, ratings
- `src/lib/supabase/client.ts` and `server.ts` - Supabase client setup

### Page Routes

- `/` - Home with Netflix-style game rows
- `/game/[slug]` - Game detail with rules and affiliate links
- `/play/[slug]` - Live Mode with timer and AI chat
- `/spin` - Spin the Wheel random game picker
- `/submit` - User game submission (auth required)
- `/shop` - Marketplace for game supplies

### Data Flow

1. Games are defined in `gameData.ts` with full rules text
2. Zustand store manages play sessions (persisted to localStorage)
3. Sessions older than 1 hour trigger rating prompts
4. AI chat uses game rules as context via `/api/chat`

### Authentication

- Hybrid model: anonymous for browsing/ratings, auth required for comments
- Supabase Auth with magic link support
- `AuthProvider` wraps the app, `AuthGuard` protects routes

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
OPENAI_API_KEY=
```

## Design System

- Background: `#0a0a0f` (dark-900)
- Cards: `#12121a` (dark-800)
- Primary: `#ff2d92` (neon-pink)
- Secondary: `#00d4ff` (neon-blue)
- Fonts: Geist Sans, Geist Mono, Pacifico (logo)

## Mobile Considerations

- Static export mode (`NEXT_PUBLIC_STATIC_EXPORT=true`) for Capacitor
- PWA disabled during static export
- Images unoptimized in mobile builds
