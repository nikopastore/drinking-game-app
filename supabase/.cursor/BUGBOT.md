# Bugbot — Supabase (`supabase/`)

Applies to `schema.sql` and `supabase/migrations/*.sql`.

Every new table in the same migration must:

1. `ENABLE ROW LEVEL SECURITY`
2. Policies that default-deny, then allow specific roles/actions
3. No PII columns on world-readable `SELECT`

## DEFINER RPCs

`find_friends`, `toggle_favorite`, `get_user_favorites`, `is_favorited` must:

- `SECURITY DEFINER SET search_path = public`
- `IF auth.uid() IS NULL OR auth.uid() <> p_user_id THEN RAISE EXCEPTION 'Not authorized'`
- `REVOKE ALL ... FROM PUBLIC, anon` and `GRANT EXECUTE ... TO authenticated`

Flag any new `LANGUAGE sql SECURITY DEFINER` helper that takes a UUID user id without that check.

## Known tables

| Table | Required posture |
| --- | --- |
| `games` | RLS on; public `SELECT` only. No anon insert/update/delete. |
| `user_profiles` | `SELECT`/`UPDATE`/`INSERT` owner-only. Never `USING (true)` — includes `phone_number`. |
| `user_contacts` | Owner-only. Hashes only. |
| `friendships` | Caller must be `user_id` (or documented two-sided read). |
| `favorites` / `user_cabinets` | Owner-only. |
| `comments` | Public read; insert/update/delete `auth.uid() = user_id`. |
| `comment_upvotes` | Auth user matches `user_id`. Counts via trigger `comment_upvotes_sync`, not world-callable increment RPCs. |
| `email_subscribers` | Insert-only for anon is existing; **no SELECT policy**. Flag adding SELECT or skipping uniqueness/rate-limit discussion. |
| `ratings` | World `UPDATE` is unsafe. Flag wiring the UI to upsert with `USING (true)`. |
| `game_submissions` | Insert/select own rows only. |

## Process

- Do not edit only `schema.sql` or only `migrations/` — both must stay aligned.
- Flag `GRANT ALL` to `anon` on new objects.
- Flag policies that check a client-supplied `device_id` as if it were a secret.
