-- Match contacts to confirmed account identities, never to shared address books.
-- Enrollment and rate limits are private server-owned state. Legacy hashes and
-- derived friendships are retained for recovery but are not exposed or matched.
SET search_path = public, extensions;

ALTER TABLE public.user_contacts ADD COLUMN IF NOT EXISTS hash_version INTEGER NOT NULL DEFAULT 1;

CREATE TABLE IF NOT EXISTS private.contact_sync_state (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  opted_in BOOLEAN NOT NULL DEFAULT FALSE,
  window_started_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  sync_count INTEGER NOT NULL DEFAULT 0
);
ALTER TABLE private.contact_sync_state ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON private.contact_sync_state FROM PUBLIC, anon, authenticated;
REVOKE ALL ON TABLE public.friendships FROM PUBLIC, anon, authenticated;

-- Bind crypto to the installed extension schema (older databases use public).
DO $bind$
DECLARE v_schema TEXT;
BEGIN
  SELECT n.nspname INTO STRICT v_schema
  FROM pg_extension e JOIN pg_namespace n ON n.oid = e.extnamespace
  WHERE e.extname = 'pgcrypto';
  EXECUTE format($ddl$
    CREATE OR REPLACE FUNCTION private.contact_hash(p_value TEXT)
    RETURNS TEXT LANGUAGE sql STABLE
    SET search_path = pg_catalog
    AS $hash$
      SELECT encode(%I.hmac(convert_to(lower(trim(p_value)), 'UTF8'),
        (SELECT secret FROM private.contact_match_keys WHERE key_id), 'sha256'), 'hex');
    $hash$;
  $ddl$, v_schema);
END;
$bind$;
REVOKE ALL ON FUNCTION private.contact_hash(TEXT) FROM PUBLIC, anon, authenticated;

CREATE OR REPLACE FUNCTION private.contact_matches(p_uid UUID)
RETURNS TABLE (friend_id UUID, display_name TEXT, avatar_url TEXT)
LANGUAGE sql
SET search_path = pg_catalog, extensions
AS $$
  SELECT DISTINCT up.id, up.display_name, up.avatar_url
  FROM auth.users au
  JOIN public.user_profiles up ON up.id = au.id
  JOIN private.contact_sync_state consent ON consent.user_id = au.id AND consent.opted_in
  CROSS JOIN private.contact_match_keys k
  WHERE k.key_id AND au.id <> p_uid
    AND EXISTS (SELECT 1 FROM private.contact_sync_state caller WHERE caller.user_id = p_uid AND caller.opted_in)
    AND EXISTS (
      SELECT 1 FROM public.user_contacts uc
      WHERE uc.user_id = p_uid AND uc.hash_version = 2
        AND (
          (au.email_confirmed_at IS NOT NULL AND au.email IS NOT NULL
            AND uc.contact_hash = private.contact_hash(au.email))
          OR (au.phone_confirmed_at IS NOT NULL AND au.phone ~ '^\+?[1-9][0-9]{7,14}$'
            AND uc.contact_hash = private.contact_hash('+' || ltrim(au.phone, '+')))
        )
    )
  ORDER BY up.id
  LIMIT 100;
$$;
REVOKE ALL ON FUNCTION private.contact_matches(UUID) FROM PUBLIC, anon, authenticated;

CREATE OR REPLACE FUNCTION public.find_friends(p_user_id UUID)
RETURNS TABLE (friend_id UUID, display_name TEXT, avatar_url TEXT)
LANGUAGE plpgsql SECURITY DEFINER
SET search_path = pg_catalog, extensions
AS $$
BEGIN
  IF auth.uid() IS NULL OR p_user_id IS DISTINCT FROM auth.uid() THEN
    RAISE EXCEPTION 'Not authorized' USING ERRCODE = '42501';
  END IF;
  RETURN QUERY SELECT * FROM private.contact_matches(auth.uid());
END;
$$;

CREATE OR REPLACE FUNCTION public.sync_contacts(p_user_id UUID, p_contacts TEXT[])
RETURNS TABLE (friend_id UUID, display_name TEXT, avatar_url TEXT)
LANGUAGE plpgsql SECURITY DEFINER
SET search_path = pg_catalog, extensions
AS $$
DECLARE
  v_uid UUID := auth.uid();
  v_secret BYTEA;
  v_contact TEXT;
  v_count INTEGER;
BEGIN
  IF v_uid IS NULL OR p_user_id IS DISTINCT FROM v_uid THEN
    RAISE EXCEPTION 'Not authorized' USING ERRCODE = '42501';
  END IF;
  IF p_contacts IS NULL OR cardinality(p_contacts) > 5000
     OR COALESCE(array_ndims(p_contacts), 1) <> 1
     OR EXISTS (SELECT 1 FROM unnest(p_contacts) c WHERE c IS NULL OR char_length(c) > 200
        OR NOT (c ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$' OR c ~ '^\+[1-9][0-9]{7,14}$')) THEN
    RAISE EXCEPTION 'Invalid contacts' USING ERRCODE = '22023';
  END IF;

  SELECT secret INTO STRICT v_secret FROM private.contact_match_keys WHERE key_id;
  INSERT INTO private.contact_sync_state AS state (user_id, opted_in, sync_count)
  VALUES (v_uid, TRUE, 1)
  ON CONFLICT (user_id) DO UPDATE SET
    opted_in = TRUE,
    window_started_at = CASE WHEN state.window_started_at <= NOW() - INTERVAL '1 day' THEN NOW() ELSE state.window_started_at END,
    sync_count = CASE WHEN state.window_started_at <= NOW() - INTERVAL '1 day' THEN 1 ELSE state.sync_count + 1 END
  RETURNING sync_count INTO v_count;
  IF v_count > 3 THEN
    RAISE EXCEPTION 'Contact sync limit reached. Try again tomorrow.' USING ERRCODE = 'P0001';
  END IF;

  DELETE FROM public.user_contacts WHERE user_id = v_uid;
  FOREACH v_contact IN ARRAY p_contacts LOOP
    INSERT INTO public.user_contacts (user_id, contact_hash, hash_version)
    VALUES (v_uid, private.contact_hash(v_contact), 2)
    ON CONFLICT (user_id, contact_hash) DO NOTHING;
  END LOOP;
  UPDATE public.user_profiles SET contacts_synced_at = NOW() WHERE id = v_uid;
  RETURN QUERY SELECT * FROM private.contact_matches(v_uid);
END;
$$;

CREATE OR REPLACE FUNCTION public.stop_contact_sync()
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER
SET search_path = pg_catalog
AS $$
BEGIN
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'Not authorized' USING ERRCODE = '42501';
  END IF;
  UPDATE private.contact_sync_state SET opted_in = FALSE WHERE user_id = auth.uid();
  DELETE FROM public.user_contacts WHERE user_id = auth.uid();
  UPDATE public.user_profiles SET contacts_synced_at = NULL WHERE id = auth.uid();
END;
$$;

REVOKE ALL ON FUNCTION public.find_friends(UUID), public.sync_contacts(UUID, TEXT[]), public.stop_contact_sync() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.find_friends(UUID), public.sync_contacts(UUID, TEXT[]), public.stop_contact_sync() TO authenticated;
