# Bugbot — React components (`src/components`)

## AI chat (`AIChatFAB.tsx`)

Fetch body must be `{ gameSlug: game.slug, message, history }`. Flag sending `rules` or `gameName` to `/api/chat`.

## Email capture (`EmailCapture.tsx`)

Direct anon `insert` into `email_subscribers` is an existing lead-magnet path. Flag:

- Adding `select` on that table from the client
- Showing different copy for unique-violation vs success if the PR treats that as “already subscribed” **and** expands it to other emails (enumeration)
- New lead fields (phone, name) without RLS review

## Comments (`CommentSection.tsx`)

Do not call `increment_comment_upvotes` / `decrement_comment_upvotes` to adjust counts; inserts/deletes on `comment_upvotes` own the count via trigger. Sanitize on write is defense in depth; display must stay a text node unless a new sanitizer + test is added.

Flag GitHub OAuth here unless the PR also configures the provider.

## Ratings (`RatingModal.tsx`)

Persisting scores is unfinished (`TODO`). Flag the first PR that writes to `ratings` if RLS still allows anyone to `UPDATE` any row. `device_id` from `localStorage` is not auth.
