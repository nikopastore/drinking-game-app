-- Route public ingestion through bounded SECURITY DEFINER functions.
-- Safe to re-run.

-- Some older production projects were provisioned without the newsletter table.
-- Keep this migration self-contained so the public signup path can be hardened
-- without requiring a separate manual schema bootstrap.
CREATE TABLE IF NOT EXISTS public.email_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  source TEXT,
  page_path TEXT,
  lead_magnet TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.email_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can update ratings by device_id" ON public.ratings;
DROP POLICY IF EXISTS "Anyone can insert ratings" ON public.ratings;
REVOKE ALL ON TABLE public.ratings FROM PUBLIC, anon, authenticated;

DROP POLICY IF EXISTS "Anyone can insert email subscribers" ON public.email_subscribers;
REVOKE ALL ON TABLE public.email_subscribers FROM PUBLIC, anon, authenticated;

DROP POLICY IF EXISTS "Anon and authenticated can insert product events" ON public.product_events;
REVOKE ALL ON TABLE public.product_events FROM PUBLIC, anon, authenticated;

ALTER TABLE public.product_events
  DROP CONSTRAINT IF EXISTS product_events_name_check,
  ADD CONSTRAINT product_events_name_check CHECK (name IN ('play_started', 'affiliate_click', 'email_submit'));

CREATE OR REPLACE FUNCTION public.subscribe_email(
  p_email TEXT,
  p_source TEXT DEFAULT NULL,
  p_page_path TEXT DEFAULT NULL
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  normalized_email TEXT := lower(trim(p_email));
  inserted_count INTEGER;
BEGIN
  IF normalized_email IS NULL
     OR char_length(normalized_email) > 200
     OR normalized_email !~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$' THEN
    RETURN FALSE;
  END IF;

  INSERT INTO public.email_subscribers (email, source, lead_magnet, page_path)
  VALUES (normalized_email, left(p_source, 80), 'party-tips', left(p_page_path, 200))
  ON CONFLICT (email) DO NOTHING;

  GET DIAGNOSTICS inserted_count = ROW_COUNT;
  RETURN inserted_count > 0;
END;
$$;

CREATE OR REPLACE FUNCTION public.record_product_event(
  p_name TEXT,
  p_slug TEXT DEFAULT NULL,
  p_path TEXT DEFAULT NULL
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF p_name NOT IN ('play_started', 'affiliate_click', 'email_submit') THEN
    RETURN;
  END IF;

  INSERT INTO public.product_events (name, slug, path)
  VALUES (p_name, left(p_slug, 80), left(p_path, 200));
END;
$$;

CREATE OR REPLACE FUNCTION public.submit_rating(
  p_game_id TEXT,
  p_score INTEGER,
  p_device_id TEXT
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF p_game_id IS NULL OR char_length(p_game_id) > 80
     OR p_score < 1 OR p_score > 5
     OR p_device_id IS NULL OR char_length(p_device_id) > 128 THEN
    RETURN FALSE;
  END IF;

  INSERT INTO public.ratings (game_id, device_id, user_id, score)
  VALUES (p_game_id, p_device_id, auth.uid(), p_score)
  ON CONFLICT (game_id, device_id)
  DO UPDATE SET score = EXCLUDED.score, user_id = EXCLUDED.user_id;

  RETURN TRUE;
END;
$$;

REVOKE ALL ON FUNCTION public.subscribe_email(TEXT, TEXT, TEXT) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.record_product_event(TEXT, TEXT, TEXT) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.submit_rating(TEXT, INTEGER, TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.subscribe_email(TEXT, TEXT, TEXT) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.record_product_event(TEXT, TEXT, TEXT) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.submit_rating(TEXT, INTEGER, TEXT) TO anon, authenticated;

ALTER TABLE public.comments
  DROP CONSTRAINT IF EXISTS comments_content_length,
  ADD CONSTRAINT comments_content_length CHECK (char_length(content) BETWEEN 1 AND 4000);

ALTER TABLE public.user_contacts
  DROP CONSTRAINT IF EXISTS user_contacts_hash_length,
  ADD CONSTRAINT user_contacts_hash_length CHECK (char_length(contact_hash) BETWEEN 1 AND 128);
