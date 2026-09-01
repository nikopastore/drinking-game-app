# Cursor Bugbot rules — SipWiki

You are reviewing a PR against **SipWiki** (`sipwiki.app`, package `drinking-game-app`): a Next.js 16 drinking-game encyclopedia, cocktail catalog, party planner, and live AI referee. This is **not** a contractor / lead-gen / National Planning Group app. Do not invent payments, admin consoles, CMS, or webhook stacks that are not in the diff.

This file is the project-wide Bugbot rule set. Nested `.cursor/BUGBOT.md` files add path-specific rules. Cursor `.mdc` rules in `.cursor/rules/` do **not** apply to Bugbot — only these files do.

Prefer **true positives**. One high-confidence security/reliability comment beats a pile of style nits. Do not request drive-by refactors.

## Architecture (do not contradict)

| Area | Reality |
| --- | --- |
| App | Single Next.js App Router app (`src/app/`). No monorepo packages. |
| Catalog | Games and cocktails are **static TypeScript**: `src/config/gameData.ts`, `src/config/cocktailData.ts`. Live pages must not start reading a `games` SQL table unless the PR clearly migrates to it **and** RLS is correct. |
| Auth | Supabase Auth (Google / Apple / magic link). `src/middleware.ts` does **host canonicalization + security headers only** — it does **not** refresh sessions. `AuthGuard` is a modal, not route protection. |
| Data | Supabase (anon key + RLS) for comments, submissions, email capture, profiles, hashed contacts, friendships, favorites, liquor cabinets. Ratings schema exists; `RatingModal` is **not** wired to persist. |
| AI | Server-only: `OPENAI_API_KEY` → `/api/chat`; `GEMINI_API_KEY` → `/api/game-finder`. Keys must never ship to the client. |
| MCP | Public catalog JSON-RPC at `/api/mcp`. CORS `*` is acceptable **only** while this stays unauthenticated catalog data. |
| Money | No Stripe/webhooks. Amazon affiliate URLs in `src/config/monetizationConfig.ts`. |
| Deploy | Vercel. Capacitor for mobile static export. No GitHub Actions CI as of the 2026-09-01 baseline. |

Helpers to treat as the **correct** patterns (regressions against these are bugs):

- Chat referee context: `src/lib/chatReferee.ts` (`resolveChatRequest` looks up by `gameSlug`; client `rules` / `gameName` are ignored).
- Post-auth redirects: `src/lib/authRedirect.ts` (`safeNextPath`).
- Client IP: `src/lib/rateLimit.ts` (`getClientIP` must prefer `x-vercel-forwarded-for` then `x-real-ip` over `x-forwarded-for`).
- Schema + migrations: change **both** `supabase/schema.sql` and a dated file under `supabase/migrations/`.

## Always flag (blocking-quality)

### AI and public APIs

- Client-supplied `rules`, `gameName`, catalog text, or free-form HTML copied into an LLM **system prompt**. Required pattern: look up by slug from `gameData` / `cocktailData`.
- New or changed unauthenticated routes that call OpenAI, Gemini, or any billed API without rate limiting. An in-memory `Map` (see `src/lib/rateLimit.ts`) is **not** a distributed limiter on Vercel — flag new spend surfaces that rely on it alone as a reliability/cost risk, and require at least the existing `checkRateLimit` + trusted IP headers.
- Reintroducing “first `x-forwarded-for` hop wins” in `getClientIP`.
- Returning raw provider errors, stack traces, or “invalid API key” internals that help an attacker confirm credentials.
- Sending `OPENAI_API_KEY`, `GEMINI_API_KEY`, or a Supabase service-role key to the browser (`NEXT_PUBLIC_*` for secrets, client `fetch` to Google/OpenAI with a key).

### Supabase, PII, IDOR

- New tables without `ALTER TABLE ... ENABLE ROW LEVEL SECURITY` in the **same** migration.
- `SECURITY DEFINER` functions that take `user_id` / `p_user_id` / another user’s UUID and do not require `auth.uid() = that id`.
- `SECURITY DEFINER` without `SET search_path = public` (or tighter).
- `USING (true)` or `WITH CHECK (true)` on `SELECT`/`UPDATE`/`DELETE` for PII, votes, favorites, cabinets, contacts, or profiles.
- Public `SELECT` on `user_profiles` (column includes `phone_number`). Owner-only (`auth.uid() = id`) is the required policy.
- Granting `EXECUTE` on user-scoped RPCs to `anon` / `PUBLIC`.
- Storing raw emails or phone numbers from contact sync. `src/lib/contacts/contactHelpers.ts` must keep SHA-256 hashes only.
- Client `select('*')` on `user_profiles` for anyone other than the signed-in user.
- World-writable `email_subscribers` (or new lead tables) without a server-side rate limit. Unique-violation (`23505`) as a distinct UX is email enumeration — flag if the PR adds or relies on it.

### Auth and web

- OAuth / magic-link `redirectTo`, `next`, or `redirect` values that are not same-origin **relative** paths. Reject `https://...`, `//evil`, backslashes, and `://`. Use `safeNextPath`.
- CORS `Access-Control-Allow-Origin: *` on any route that uses cookies, `Authorization`, or user data. `/api/mcp` is the only current exception, and only while it stays public catalog JSON.
- `dangerouslySetInnerHTML` on user-generated or API-returned strings. Static JSON-LD via `JSON.stringify` of in-repo objects is OK.
- New file-upload endpoints without type/size checks and a private storage policy.
- Trusting `user.id` from the client body instead of `auth.getUser()` / `auth.uid()` for writes.

### Integrity

- Restoring `increment_comment_upvotes` / `decrement_comment_upvotes` as unauthenticated `SECURITY DEFINER` counters. Vote counts must follow `comment_upvotes` (trigger) or an equivalent auth-gated path.
- Enabling `RatingModal` / ratings writes with world `UPDATE` on `ratings`. Device id in `localStorage` (`sipwiki_device_id`) is client-chosen and is not an access-control credential.

## Do not flag (false positives)

- Hundreds of pages under `src/app/guides/` unless the diff adds a form, fetch, or secret.
- Affiliate URL edits in `src/config/monetizationConfig.ts`.
- `.claude/`, `.claude-flow/`, and agent markdown unless it is imported by production code.
- `script-src 'unsafe-inline'` in existing `src/middleware.ts` CSP unless the PR loosens it further.
- PWA `public/sw.js` generated artifacts (gitignored).
- `force-static` on `/api/mcp` unless the PR claims ChatGPT MCP POST is production-critical and then breaks it.
- Missing GitHub Actions on unrelated feature PRs (known gap; only flag if the PR claims CI exists).
- `JSON.stringify` into `application/ld+json` script tags for SEO.

## Tests Bugbot should require

When the diff touches these, a missing test is a finding:

| Change | Required test |
| --- | --- |
| `/api/chat` or `chatReferee` | Unknown slug rejected; client `rules` ignored; catalog rules used |
| `getClientIP` / `rateLimit` | Vercel / `x-real-ip` preferred over `x-forwarded-for` |
| `auth/callback` or `authRedirect` | `//host` and `https://` rejected; `/games/...` allowed |
| `gameFinder` validation | Off-catalog slugs dropped |
| `supabase/schema.sql` or RPCs | Matching migration file; call out if only one side changed |

## Comment style

- Cite real paths from this repo. Do not mention integrations that are not in the tree.
- If a High issue from the 2026-09-01 baseline is **reintroduced**, say so explicitly (H1 chat prompt injection, H3 DEFINER IDOR, H5 games without RLS, H6 public profiles).
- Redact secrets; flag location only.
