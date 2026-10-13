-- Disposable database only. Load bootstrap.sql and schema.sql before this file.
BEGIN;
INSERT INTO auth.users(id,email,email_confirmed_at)
VALUES ('00000000-0000-4000-8000-000000000002','member@example.test',NOW());

SET LOCAL ROLE anon;
DO $$ BEGIN
  BEGIN
    PERFORM public.subscribe_email('blocked@example.test',NULL,NULL);
    RAISE EXCEPTION 'Anonymous subscriber bypass';
  EXCEPTION WHEN insufficient_privilege THEN NULL; END;
  BEGIN
    PERFORM public.record_product_event('play_started','beer-pong','/play/beer-pong');
    RAISE EXCEPTION 'Anonymous event bypass';
  EXCEPTION WHEN insufficient_privilege THEN NULL; END;
  BEGIN
    PERFORM public.submit_rating('beer-pong',4,'00000000-0000-4000-8000-000000000001');
    RAISE EXCEPTION 'Legacy rating bypass';
  EXCEPTION WHEN insufficient_privilege THEN NULL; END;
  BEGIN
    PERFORM public.submit_rating_server('beer-pong',4,'00000000-0000-4000-8000-000000000001',NULL);
    RAISE EXCEPTION 'Trusted rating bypass';
  EXCEPTION WHEN insufficient_privilege THEN NULL; END;
END $$;
RESET ROLE;
SET LOCAL ROLE authenticated;
DO $$ BEGIN
  BEGIN
    PERFORM public.subscribe_email('blocked@example.test',NULL,NULL);
    RAISE EXCEPTION 'Authenticated subscriber bypass';
  EXCEPTION WHEN insufficient_privilege THEN NULL; END;
  BEGIN
    PERFORM public.record_product_event('email_submit','party-guide','/shop');
    RAISE EXCEPTION 'Authenticated event bypass';
  EXCEPTION WHEN insufficient_privilege THEN NULL; END;
  BEGIN
    PERFORM public.submit_rating('beer-pong',4,'00000000-0000-4000-8000-000000000001');
    RAISE EXCEPTION 'Authenticated legacy rating bypass';
  EXCEPTION WHEN insufficient_privilege THEN NULL; END;
  BEGIN
    PERFORM public.submit_rating_server('beer-pong',4,'00000000-0000-4000-8000-000000000001',NULL);
    RAISE EXCEPTION 'Authenticated trusted rating bypass';
  EXCEPTION WHEN insufficient_privilege THEN NULL; END;
END $$;
RESET ROLE;

SET LOCAL ROLE service_role;
DO $$ BEGIN
  IF NOT public.subscribe_email(' Host@Example.test ','party-guide','/shop') THEN RAISE EXCEPTION 'Trusted signup failed'; END IF;
  IF public.subscribe_email('host@example.test','party-guide','/shop') THEN RAISE EXCEPTION 'Duplicate not recognized'; END IF;
  PERFORM public.record_product_event('play_started','beer-pong','/play/beer-pong');
  IF NOT public.submit_rating_server('beer-pong',4,'00000000-0000-4000-8000-000000000001',NULL) THEN RAISE EXCEPTION 'Anonymous API rating failed'; END IF;
  IF NOT public.submit_rating_server('beer-pong',5,'00000000-0000-4000-8000-000000000001','00000000-0000-4000-8000-000000000002') THEN RAISE EXCEPTION 'Attributed API rating failed'; END IF;
  IF public.submit_rating_server('beer-pong',NULL,'00000000-0000-4000-8000-000000000001',NULL) THEN RAISE EXCEPTION 'Null score accepted'; END IF;
END $$;
RESET ROLE;
DO $$ BEGIN
  IF (SELECT count(*) FROM public.email_subscribers WHERE email='host@example.test') <> 1 THEN RAISE EXCEPTION 'Signup storage mismatch'; END IF;
  IF NOT EXISTS (SELECT 1 FROM public.product_events WHERE name='play_started') THEN RAISE EXCEPTION 'Event storage failed'; END IF;
  IF NOT EXISTS (SELECT 1 FROM public.ratings WHERE game_id='beer-pong' AND score=5 AND user_id='00000000-0000-4000-8000-000000000002') THEN RAISE EXCEPTION 'Rating attribution lost'; END IF;
  IF (SELECT count(*) FROM public.ratings) <> 1 THEN RAISE EXCEPTION 'Rating upsert failed'; END IF;
  IF has_table_privilege('anon','public.ratings','INSERT')
    OR has_table_privilege('authenticated','public.email_subscribers','INSERT')
    OR has_table_privilege('anon','public.product_events','INSERT') THEN RAISE EXCEPTION 'Direct table write allowed'; END IF;
END $$;
ROLLBACK;
SELECT 'Ingestion boundary regression checks passed' AS result;
