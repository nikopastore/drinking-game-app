import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data.user) {
      // Create or update user profile with OAuth data
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

      // Redirect with auth success flag for the app to show contact sync prompt
      return NextResponse.redirect(`${origin}${next}?auth=success`);
    }
  }

  // Auth failed, redirect to home
  return NextResponse.redirect(`${origin}/?auth=error`);
}
