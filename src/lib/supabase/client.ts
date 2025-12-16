import { createBrowserClient } from "@supabase/ssr";

// Check if Supabase is configured
export function isSupabaseConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    // Return a mock client that throws helpful errors
    return {
      auth: {
        getUser: async () => ({ data: { user: null }, error: null }),
        onAuthStateChange: () => ({
          data: { subscription: { unsubscribe: () => {} } },
        }),
        signInWithOAuth: async () => ({ error: new Error("Supabase not configured") }),
        signInWithOtp: async () => ({ error: new Error("Supabase not configured") }),
      },
      from: () => ({
        select: () => ({
          eq: () => ({
            order: () => Promise.resolve({ data: [], error: null }),
            single: () => Promise.resolve({ data: null, error: null }),
          }),
        }),
        insert: () => Promise.resolve({ error: new Error("Supabase not configured") }),
        delete: () => ({
          eq: () => ({
            eq: () => Promise.resolve({ error: null }),
          }),
        }),
      }),
      rpc: () => Promise.resolve({ error: null }),
    } as unknown as ReturnType<typeof createBrowserClient>;
  }

  return createBrowserClient(url, key);
}
