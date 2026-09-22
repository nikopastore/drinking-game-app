-- Allowlisted commerce events only. No email, user id, IP, or other PII.
-- Safe to re-run.

CREATE TABLE IF NOT EXISTS public.product_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (name IN ('affiliate_click', 'email_submit')),
  slug text CHECK (slug IS NULL OR char_length(slug) <= 80),
  path text CHECK (path IS NULL OR char_length(path) <= 200),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.product_events ENABLE ROW LEVEL SECURITY;

-- No SELECT, UPDATE, or DELETE policies: anon and authenticated cannot read or change rows.
-- The table owner used by the Supabase dashboard bypasses RLS and can still read events.
-- Do not FORCE ROW LEVEL SECURITY; that would block the owner as well.

DROP POLICY IF EXISTS "Anon and authenticated can insert product events" ON public.product_events;

CREATE POLICY "Anon and authenticated can insert product events"
  ON public.product_events
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (name IN ('affiliate_click', 'email_submit'));

GRANT INSERT ON TABLE public.product_events TO anon, authenticated;
