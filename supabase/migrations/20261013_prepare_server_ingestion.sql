-- Phase 1: additive preparation. Apply before deploying server-only clients.
-- Existing routes continue to work until the separately reviewed lockdown.
BEGIN;
CREATE OR REPLACE FUNCTION public.submit_rating_server(
  p_game_id TEXT,
  p_score INTEGER,
  p_device_id TEXT,
  p_user_id UUID DEFAULT NULL
)
RETURNS BOOLEAN
LANGUAGE plpgsql SECURITY DEFINER
SET search_path = pg_catalog
AS $$
BEGIN
  IF p_game_id IS NULL OR p_game_id !~ '^[a-z0-9-]{1,80}$'
     OR p_score IS NULL OR p_score < 1 OR p_score > 5
     OR p_device_id IS NULL OR p_device_id !~ '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$' THEN
    RETURN FALSE;
  END IF;
  INSERT INTO public.ratings (game_id, device_id, user_id, score)
  VALUES (p_game_id, p_device_id, p_user_id, p_score)
  ON CONFLICT (game_id, device_id)
  DO UPDATE SET score = EXCLUDED.score, user_id = EXCLUDED.user_id;
  RETURN TRUE;
END;
$$;
REVOKE ALL ON FUNCTION public.submit_rating_server(TEXT, INTEGER, TEXT, UUID) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.submit_rating_server(TEXT, INTEGER, TEXT, UUID) TO service_role;
GRANT EXECUTE ON FUNCTION public.subscribe_email(TEXT, TEXT, TEXT),
  public.record_product_event(TEXT, TEXT, TEXT) TO service_role;
COMMIT;
