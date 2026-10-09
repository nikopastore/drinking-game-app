-- Run after tests/bootstrap.sql + schema.sql in a disposable database.
BEGIN;
INSERT INTO auth.users(id,email,email_confirmed_at,phone,phone_confirmed_at) VALUES
 ('00000000-0000-4000-8000-000000000001','alice@example.test',NOW(),NULL,NULL),
 ('00000000-0000-4000-8000-000000000002','bob@example.test',NOW(),'+442079460123',NOW()),
 ('00000000-0000-4000-8000-000000000003','unconfirmed@example.test',NULL,NULL,NULL),
 ('00000000-0000-4000-8000-000000000004','private@example.test',NOW(),NULL,NULL);
INSERT INTO public.user_profiles(id,display_name,phone_number,phone_verified,contacts_synced_at)
 SELECT id, email, '+12079460123', TRUE, NOW() FROM auth.users;

SELECT set_config('request.jwt.claim.sub','00000000-0000-4000-8000-000000000002',TRUE);
SELECT * FROM public.sync_contacts(auth.uid(),ARRAY['thirdparty@example.test']);
SELECT set_config('request.jwt.claim.sub','00000000-0000-4000-8000-000000000003',TRUE);
SELECT * FROM public.sync_contacts(auth.uid(),ARRAY['thirdparty@example.test']);
SELECT set_config('request.jwt.claim.sub','00000000-0000-4000-8000-000000000001',TRUE);

DO $$ BEGIN
 IF EXISTS (SELECT 1 FROM public.sync_contacts(auth.uid(),ARRAY['thirdparty@example.test'])) THEN RAISE EXCEPTION 'Shared-contact disclosure'; END IF;
 IF EXISTS (SELECT 1 FROM public.find_friends(auth.uid())) THEN RAISE EXCEPTION 'Legacy RPC disclosure'; END IF;
 IF (SELECT count(*) FROM public.sync_contacts(auth.uid(),ARRAY['bob@example.test','unconfirmed@example.test','private@example.test'])) <> 1 THEN RAISE EXCEPTION 'Identity/consent boundary failed'; END IF;
 IF (SELECT count(*) FROM public.sync_contacts(auth.uid(),ARRAY['+442079460123','+12079460123'])) <> 1 THEN RAISE EXCEPTION 'Country-code/verified-phone boundary failed'; END IF;
 BEGIN
   PERFORM public.sync_contacts(auth.uid(),ARRAY['bob@example.test']);
   RAISE EXCEPTION 'Missing sync quota';
 EXCEPTION WHEN SQLSTATE 'P0001' THEN
   IF SQLERRM NOT LIKE 'Contact sync limit%' THEN RAISE; END IF;
 END;
 BEGIN
   PERFORM public.sync_contacts('00000000-0000-4000-8000-000000000002',ARRAY['bob@example.test']);
   RAISE EXCEPTION 'Wrong-user accepted';
 EXCEPTION WHEN insufficient_privilege THEN NULL; END;
 BEGIN
   PERFORM public.sync_contacts(auth.uid(),ARRAY[NULL]);
   RAISE EXCEPTION 'Null contact accepted';
 EXCEPTION WHEN invalid_parameter_value THEN NULL; END;
 BEGIN
   PERFORM public.sync_contacts(auth.uid(),ARRAY[['bob@example.test']]);
   RAISE EXCEPTION 'Nested contacts accepted';
 EXCEPTION WHEN invalid_parameter_value THEN NULL; END;
END $$;

-- Empty replacement clears matches atomically. Opt-out hides the account immediately.
UPDATE private.contact_sync_state SET window_started_at=NOW()-INTERVAL '2 days' WHERE user_id=auth.uid();
DO $$ BEGIN
 IF EXISTS (SELECT 1 FROM public.sync_contacts(auth.uid(),ARRAY[]::TEXT[])) THEN RAISE EXCEPTION 'Empty sync retained match'; END IF;
 IF EXISTS (SELECT 1 FROM public.user_contacts WHERE user_id=auth.uid()) THEN RAISE EXCEPTION 'Stale contacts'; END IF;
END $$;
SELECT * FROM public.sync_contacts(auth.uid(),ARRAY['bob@example.test']);
SELECT set_config('request.jwt.claim.sub','00000000-0000-4000-8000-000000000002',TRUE);
SELECT public.stop_contact_sync();
SELECT set_config('request.jwt.claim.sub','00000000-0000-4000-8000-000000000001',TRUE);
DO $$ BEGIN
 IF EXISTS (SELECT 1 FROM public.find_friends(auth.uid())) THEN RAISE EXCEPTION 'Opt-out retained match'; END IF;
 IF has_function_privilege('anon','public.sync_contacts(UUID,TEXT[])','EXECUTE') THEN RAISE EXCEPTION 'Anonymous sync allowed'; END IF;
 IF has_table_privilege('authenticated','private.contact_match_keys','SELECT') THEN RAISE EXCEPTION 'Secret readable'; END IF;
 IF has_table_privilege('authenticated','public.friendships','SELECT') THEN RAISE EXCEPTION 'Stale friendships exposed'; END IF;
END $$;
SET LOCAL ROLE authenticated;
SELECT * FROM public.find_friends(auth.uid());
SELECT public.stop_contact_sync();
RESET ROLE;
SELECT set_config('request.jwt.claim.sub','',TRUE);
DO $$ BEGIN
 BEGIN
   PERFORM public.find_friends('00000000-0000-4000-8000-000000000001');
   RAISE EXCEPTION 'Anonymous identity accepted';
 EXCEPTION WHEN insufficient_privilege THEN NULL; END;
END $$;
ROLLBACK;
SELECT 'Contact matching regression checks passed' AS result;
