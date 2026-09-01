# Bugbot — `src/lib` and client data writes

## Rate limit (`src/lib/rateLimit.ts`)

`getClientIP` order must remain:

1. `x-vercel-forwarded-for` (first hop)
2. `x-real-ip`
3. `x-forwarded-for` (last resort)
4. `"unknown"`

Flag swapping that order. Flag using `"unknown"` as a shared bucket for a new expensive endpoint (one global limit for all unidentified clients).

In-memory `Map` does not work across Vercel isolates. Flag **new** billed or PII-write endpoints that only use it, and say a distributed limiter is still missing.

## Chat referee (`src/lib/chatReferee.ts`)

Do not delete `resolveChatRequest` or pass `parsed.rules` into `getSystemPrompt`. Tests in `src/lib/chatReferee.test.ts` must keep covering “client rules ignored”.

## Contacts (`src/lib/contacts/`)

Normalize then SHA-256 before upsert to `user_contacts`. Flag uploading `email.address` or `phone.number` in plaintext. `find_friends` must be called with the signed-in user id **and** the RPC must still enforce `auth.uid()`.

## Favorites / cabinet

`useFavorites` and `useLiquorCabinet` should write `user_id` from the session user, not a prop the parent can spoof. RLS is the backstop; still flag passing an arbitrary `userId` from the URL.

## Sanitize (`src/lib/sanitize.ts`)

`formatMarkdownBold` must keep HTML-escaping before markdown. Flag skipping `DOMPurify` or adding `ALLOWED_TAGS` like `script`, `iframe`, `img` with handlers. Comments render as **text nodes** today (`CommentSection`); flag switching comment bodies to `dangerouslySetInnerHTML`.
