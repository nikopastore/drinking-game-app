# Bugbot — API routes (`src/app/api`)

Applies when this PR changes `/api/chat`, `/api/game-finder`, `/api/mcp`, or any new `src/app/api/**/route.ts`.

## `/api/chat`

Required contract (`src/lib/chatReferee.ts` + `src/app/api/chat/route.ts`):

- Body must include `gameSlug` matching `/^[a-z0-9-]+$/`.
- Rules and title come from `getGameBySlug`. **Never** interpolate request `rules` or `gameName` into the system prompt.
- Unknown slug → 400. Rate-limit before calling OpenAI.
- `AIChatFAB` must send `{ gameSlug, message, history }` only.

Flag: restoring the old `{ gameName, rules }` prompt path; raising `max_tokens` / history / rules size without a cost note; skipping `checkRateLimit`.

## `/api/game-finder`

- User `query` is allowed (3–300 chars). Catalog is server-side.
- Model output must pass `validateGeminiRecommendations` (catalog slugs only). Do not return raw model JSON to the client.
- Flag dropping validation, sending the full `rules_text` corpus unnecessarily, or omitting rate limits.

## `/api/mcp`

- Public catalog search is OK. Do not add authenticated user data, emails, or cabinets to MCP tools.
- Flag reflecting `params.uri` (or any client string) into HTML/`iframe src` without an allowlist.
- Flag CORS `*` if the handler starts reading cookies or user rows.
- `vercel.json` sets `Access-Control-Allow-Origin: *` for `/api/mcp` only — do not copy that header to other `/api/*` routes.

## New routes

- Default deny: if it spends money or writes user data, it needs auth **or** a documented public contract plus rate limit + Zod.
- Do not use `export const dynamic = "force-static"` on POST handlers that must run per request on Vercel.
- CORS: use `src/lib/cors.ts` allowlist (`sipwiki.app`, localhost). Do not add `credentials: true` with `*`.
