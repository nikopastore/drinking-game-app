-- Replace reversible client-side contact hashes with server-side keyed HMACs.
-- Safe to re-run. Raw normalized contact values are never persisted.

CREATE SCHEMA IF NOT EXISTS extensions;
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA extensions;
SET search_path = public, extensions;

CREATE SCHEMA IF NOT EXISTS private;

CREATE TABLE IF NOT EXISTS private.contact_match_keys (
  key_id BOOLEAN PRIMARY KEY DEFAULT TRUE CHECK (key_id),
  secret BYTEA NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO private.contact_match_keys (key_id, secret)
VALUES (TRUE, gen_random_bytes(32))
ON CONFLICT (key_id) DO NOTHING;

ALTER TABLE private.contact_match_keys ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON SCHEMA private FROM PUBLIC, anon, authenticated;
REVOKE ALL ON private.contact_match_keys FROM PUBLIC, anon, authenticated;

ALTER TABLE public.user_contacts ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE public.user_contacts FROM PUBLIC, anon, authenticated;

CREATE OR REPLACE FUNCTION public.sync_contacts(
  p_user_id UUID,
  p_contacts TEXT[]
)
RETURNS TABLE (
  friend_id UUID,
  display_name TEXT,
  avatar_url TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, private, extensions
AS $$
DECLARE
  v_uid UUID := auth.uid();
  v_secret BYTEA;
  v_contact TEXT;
  v_normalized TEXT;
BEGIN
  IF v_uid IS NULL OR p_user_id IS DISTINCT FROM v_uid
     OR COALESCE(cardinality(p_contacts), 0) > 5000 THEN
    RETURN;
  END IF;

  SELECT secret INTO v_secret
  FROM private.contact_match_keys
  WHERE key_id = TRUE;

  IF v_secret IS NULL THEN
    RETURN;
  END IF;

  DELETE FROM public.user_contacts WHERE user_id = v_uid;

  FOREACH v_contact IN ARRAY COALESCE(p_contacts, ARRAY[]::TEXT[]) LOOP
    v_normalized := lower(trim(v_contact));
    IF char_length(v_normalized) BETWEEN 1 AND 200 THEN
      INSERT INTO public.user_contacts (user_id, contact_hash)
      VALUES (
        v_uid,
        encode(hmac(convert_to(v_normalized, 'UTF8'), v_secret, 'sha256'), 'hex')
      )
      ON CONFLICT (user_id, contact_hash) DO NOTHING;
    END IF;
  END LOOP;

  UPDATE public.user_profiles
  SET contacts_synced_at = NOW()
  WHERE id = v_uid;

  INSERT INTO public.friendships (user_id, friend_id)
  SELECT DISTINCT v_uid, up.id
  FROM public.user_contacts uc
  JOIN public.user_contacts friend_uc ON uc.contact_hash = friend_uc.contact_hash
  JOIN public.user_profiles up ON friend_uc.user_id = up.id
  WHERE uc.user_id = v_uid
    AND friend_uc.user_id <> v_uid
  ON CONFLICT (user_id, friend_id) DO NOTHING;

  RETURN QUERY
  SELECT DISTINCT
    up.id,
    up.display_name,
    up.avatar_url
  FROM public.user_contacts uc
  JOIN public.user_contacts friend_uc ON uc.contact_hash = friend_uc.contact_hash
  JOIN public.user_profiles up ON friend_uc.user_id = up.id
  WHERE uc.user_id = v_uid
    AND friend_uc.user_id <> v_uid;
END;
$$;

REVOKE ALL ON FUNCTION public.find_friends(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.find_friends(UUID) TO authenticated;
REVOKE ALL ON FUNCTION public.sync_contacts(UUID, TEXT[]) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.sync_contacts(UUID, TEXT[]) TO authenticated;
