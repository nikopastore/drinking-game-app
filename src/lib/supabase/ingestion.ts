import "server-only";
import { createClient } from "@supabase/supabase-js";

/** Trusted write client. Never attach request cookies or user access tokens. */
export function createIngestionClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key || key === process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) return null;

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
}
