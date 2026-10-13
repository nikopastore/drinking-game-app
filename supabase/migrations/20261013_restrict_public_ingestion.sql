-- Phase 2: apply ONLY after SUPABASE_SERVICE_ROLE_KEY is configured and the
-- server-only API build is deployed and verified. No data is deleted.
BEGIN;
REVOKE ALL ON TABLE public.email_subscribers, public.product_events, public.ratings FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.subscribe_email(TEXT, TEXT, TEXT),
  public.record_product_event(TEXT, TEXT, TEXT), public.submit_rating(TEXT, INTEGER, TEXT),
  public.submit_rating_server(TEXT, INTEGER, TEXT, UUID) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.subscribe_email(TEXT, TEXT, TEXT),
  public.record_product_event(TEXT, TEXT, TEXT),
  public.submit_rating_server(TEXT, INTEGER, TEXT, UUID) TO service_role;
COMMIT;
