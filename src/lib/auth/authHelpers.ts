import { createClient } from "@/lib/supabase/client";
import { UserProfile } from "@/types";

/**
 * Creates or updates a user profile after OAuth sign-in
 */
export async function createOrUpdateProfile(
  userId: string,
  displayName: string | null,
  avatarUrl: string | null
): Promise<UserProfile | null> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("user_profiles")
    .upsert(
      {
        id: userId,
        display_name: displayName,
        avatar_url: avatarUrl,
      },
      { onConflict: "id" }
    )
    .select()
    .single();

  if (error) {
    console.error("Error creating/updating profile:", error);
    return null;
  }

  return data as UserProfile;
}

/**
 * Gets a user profile by ID
 */
export async function getProfile(userId: string): Promise<UserProfile | null> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("user_profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    console.error("Error fetching profile:", error);
    return null;
  }

  return data as UserProfile;
}

/**
 * Updates the contacts_synced_at timestamp
 */
export async function markContactsSynced(userId: string): Promise<void> {
  const supabase = createClient();

  await supabase
    .from("user_profiles")
    .update({ contacts_synced_at: new Date().toISOString() })
    .eq("id", userId);
}

/**
 * Checks if contacts have been synced for a user
 */
export async function hasContactsSynced(userId: string): Promise<boolean> {
  const supabase = createClient();

  const { data } = await supabase
    .from("user_profiles")
    .select("contacts_synced_at")
    .eq("id", userId)
    .single();

  return data?.contacts_synced_at !== null;
}
