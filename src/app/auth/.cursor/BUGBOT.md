# Bugbot — Auth (`src/app/auth`, auth helpers)

## Callback (`src/app/auth/callback/page.tsx`)

After `exchangeCodeForSession`, navigation must use `safeNextPath` from `src/lib/authRedirect.ts`.

Flag:

- `router.push(searchParams.get("next"))` without validation
- `redirectTo: window.location.origin + untrusted query`
- Open redirects: `https://`, `//`, `\`, `://`

Allowed: paths like `/`, `/games/kings-cup`, `/submit`.

## OAuth / magic link

Providers in UI must match `useAuth` (Google / Apple / email). Flag new GitHub buttons that call `signInWithOAuth({ provider: "github" })` unless GitHub is actually configured.

`emailRedirectTo` / `redirectTo` must stay on `window.location.origin` plus a known path (`/auth/callback`, `/submit`, `/games/...`). Flag concatenating a user-controlled string onto that URL.

## Session

`src/lib/supabase/server.ts` swallows cookie `setAll` errors because middleware does not refresh sessions. Flag PRs that start **authorizing** Server Components or Route Handlers with `createClient()` from `server.ts` without adding session-refresh middleware — stale cookies will look like logged-out users.

## Logging

Flag new `console.log` of access tokens, full emails, or full user ids in client auth code. Existing truncated-id logs in `useAuth` are low; do not nit unless the PR expands them.
