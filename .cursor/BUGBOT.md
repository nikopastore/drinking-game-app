# Bugbot / review rules for SipWiki

Derived from the 2026-09-01 baseline audit (`docs/audits/2026-09-01-baseline.md`). Prefer these over generic checklists when reviewing this repo.

## Product facts (do not invent)

- This is **SipWiki**, a drinking-game / cocktail catalog with optional Supabase social features.
- Games and cocktails are **static catalogs** (`src/config/gameData.ts`, `src/config/cocktailData.ts`), not a CMS, unless a future PR actually reads the `games` table.
- There is **no payments stack**. Monetization is Amazon affiliate links.
- There is **no admin app**. Do not assume role checks that are not in the code.
- LLM keys (`OPENAI_API_KEY`, `GEMINI_API_KEY`) must stay server-side.

## Always flag

### AI / public APIs

- Client-supplied `rules`, `gameName`, or other catalog text copied into a **system prompt**. Look up by `slug` from `gameData` / `cocktailData` instead.
- New unauthenticated routes that call OpenAI, Gemini, or any billed API without a **distributed** rate limit (in-memory `Map` does not count on Vercel).
- Trusting the first `x-forwarded-for` hop over `x-vercel-forwarded-for` / `x-real-ip`.
- Returning raw provider errors or leaking key-configuration details to the client.

### Supabase / PII

- New tables without `ENABLE ROW LEVEL SECURITY` in the same migration.
- `SECURITY DEFINER` functions that take a `user_id` / `p_user_id` and do not require `auth.uid() = that id`.
- `SECURITY DEFINER` without `SET search_path = public` (or a tighter path).
- `USING (true)` / `WITH CHECK (true)` on `UPDATE` or `SELECT` for tables that hold PII, votes, or user-owned rows.
- Public `SELECT` on `user_profiles` (or any table with `phone_number`, email, or contact hashes).
- World-writable `email_subscribers` (or similar lead tables) without a server-side rate limit.
- Storing raw emails/phones from the contacts sync. Hashes only.

### Auth / web

- OAuth or magic-link `redirectTo` / `next` / `redirect` values that are not same-origin relative paths (`/` but not `//`).
- Middleware that skips session refresh if server components start using `createClient()` from `src/lib/supabase/server.ts` for authorization.
- CORS `*` on any route that reads cookies, Authorization, or user data. `*` on `/api/mcp` is only acceptable while that endpoint remains public catalog JSON-RPC.
- `dangerouslySetInnerHTML` on user-generated strings. JSON-LD via `JSON.stringify` of static objects is OK.

### Do not waste review on

- Programmatic SEO pages under `src/app/guides/` unless they grow a form or API call.
- Affiliate URL churn in `monetizationConfig.ts`.
- `.claude/` agent/skill markdown unless it is shipped to production.

## Test expectations

- Changes to `/api/chat` or `/api/game-finder` need unit tests for validation (unknown slug rejected; client `rules` ignored).
- Changes to `getClientIP` must not reintroduce “first `x-forwarded-for` wins”.
- Schema changes should update **both** `supabase/schema.sql` and a dated file under `supabase/migrations/`.
