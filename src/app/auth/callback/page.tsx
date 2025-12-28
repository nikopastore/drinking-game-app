"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

// This page handles the OAuth callback on the client side
// Used for mobile app builds where server-side route handlers don't work
export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get("code");
      const next = searchParams.get("next") ?? "/";

      if (code) {
        const supabase = createClient();
        const { data, error } = await supabase.auth.exchangeCodeForSession(code);

        if (!error && data.user) {
          // Create or update user profile
          const displayName =
            data.user.user_metadata.full_name ||
            data.user.user_metadata.name ||
            data.user.email?.split("@")[0] ||
            "User";

          const avatarUrl =
            data.user.user_metadata.avatar_url ||
            data.user.user_metadata.picture ||
            null;

          await supabase.from("user_profiles").upsert(
            {
              id: data.user.id,
              display_name: displayName,
              avatar_url: avatarUrl,
            },
            { onConflict: "id" }
          );

          router.push(`${next}?auth=success`);
          return;
        }
      }

      // Auth failed, redirect to home
      router.push("/?auth=error");
    };

    handleCallback();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-pink mx-auto mb-4"></div>
        <p className="text-gray-400">Completing sign in...</p>
      </div>
    </div>
  );
}
