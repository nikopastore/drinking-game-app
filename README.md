# SipWiki

SipWiki is a party companion built with Next.js. It combines a searchable library of drinking games, cocktail and mocktail recipes, party-planning tools, live game sessions, an AI game finder, and an optional AI referee.

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The age gate appears on a fresh browser profile.

## Checks

```bash
npm run test:run
npm run build
npm run build:mobile
```

`build:mobile` creates a static export for Capacitor. API routes, middleware, AI requests, and email delivery require the web deployment; the mobile build falls back to the catalog and local device state when those services are unavailable.

## Environment

Copy `.env.example` to `.env.local` and configure the services you plan to use:

- `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` for auth, favorites, comments, cabinets, and submissions.
- `OPENAI_API_KEY` for the live AI referee.
- `GEMINI_API_KEY` for the catalog-grounded game finder.
- `RESEND_API_KEY` and `RESEND_FROM_EMAIL` for the party-list email.
- `NEXT_PUBLIC_SITE_URL` for canonical URLs and MCP links.

Apply Supabase migrations in `supabase/migrations/` in order. The SQL bootstrap file is kept for reference and new projects.

## Main routes

- `/games` and `/games/[slug]` — game library and rules
- `/play/[slug]` — live session with timer and AI referee
- `/cocktails` and `/drinks` — cocktail, punch, shot, and mocktail recipes
- `/party-planner` — supplies and party planning calculator
- `/spin` — filtered random game picker
- `/shop` — affiliate party supplies
- `/submit` — authenticated community submissions

## Mobile

Capacitor configuration lives in `capacitor.config.ts`. Use `npm run build:mobile` before `npx cap sync`, then open the native project with `npm run cap:ios` or `npm run cap:android`.
