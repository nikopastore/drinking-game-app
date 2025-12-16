"use client";

import { useState, useCallback } from "react";
import { Capacitor } from "@capacitor/core";
import { createClient } from "@/lib/supabase/client";
import { Friend } from "@/types";
import { normalizeEmail, normalizePhone, sha256 } from "./contactHelpers";

interface ContactSyncResult {
  skipped: boolean;
  friends: Friend[];
  error?: string;
}

interface UseContactsReturn {
  syncContacts: (userId: string) => Promise<ContactSyncResult>;
  isLoading: boolean;
  error: string | null;
}

/**
 * Hook for syncing contacts and finding friends
 * Works on native (Capacitor) and falls back gracefully on web
 */
export function useContacts(): UseContactsReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const syncContacts = useCallback(async (userId: string): Promise<ContactSyncResult> => {
    setIsLoading(true);
    setError(null);

    try {
      // Check if we're on a native platform
      if (!Capacitor.isNativePlatform()) {
        // On web, we can't access contacts - skip gracefully
        return { skipped: true, friends: [] };
      }

      // Dynamically import the contacts plugin (only on native)
      const { Contacts } = await import("@capacitor-community/contacts");

      // Request permission
      const permission = await Contacts.requestPermissions();
      if (permission.contacts !== "granted") {
        return { skipped: true, friends: [] };
      }

      // Get contacts
      const result = await Contacts.getContacts({
        projection: {
          emails: true,
          phones: true,
        },
      });

      // Collect all emails and phones
      const contactItems: string[] = [];

      for (const contact of result.contacts) {
        if (contact.emails) {
          for (const email of contact.emails) {
            if (email.address) {
              contactItems.push(normalizeEmail(email.address));
            }
          }
        }
        if (contact.phones) {
          for (const phone of contact.phones) {
            if (phone.number) {
              const normalized = normalizePhone(phone.number);
              if (normalized.length >= 10) {
                contactItems.push(normalized);
              }
            }
          }
        }
      }

      // Hash all contacts
      const hashes = await Promise.all(
        contactItems.map((item) => sha256(item))
      );

      // Remove duplicates
      const uniqueHashes = [...new Set(hashes)];

      if (uniqueHashes.length === 0) {
        return { skipped: false, friends: [] };
      }

      const supabase = createClient();

      // Batch insert hashes (upsert to handle duplicates)
      const contactRecords = uniqueHashes.map((hash) => ({
        user_id: userId,
        contact_hash: hash,
      }));

      // Insert in batches of 500 to avoid payload limits
      const batchSize = 500;
      for (let i = 0; i < contactRecords.length; i += batchSize) {
        const batch = contactRecords.slice(i, i + batchSize);
        await supabase
          .from("user_contacts")
          .upsert(batch, { onConflict: "user_id,contact_hash" });
      }

      // Update sync timestamp
      await supabase
        .from("user_profiles")
        .update({ contacts_synced_at: new Date().toISOString() })
        .eq("id", userId);

      // Find friends using the RPC function
      const { data: friends, error: friendsError } = await supabase.rpc(
        "find_friends",
        { p_user_id: userId }
      );

      if (friendsError) {
        console.error("Error finding friends:", friendsError);
        return { skipped: false, friends: [] };
      }

      // Create friendship records for discovered friends
      if (friends && friends.length > 0) {
        const friendshipRecords = friends.map((f: Friend) => ({
          user_id: userId,
          friend_id: f.friend_id,
        }));

        await supabase
          .from("friendships")
          .upsert(friendshipRecords, { onConflict: "user_id,friend_id" });
      }

      return { skipped: false, friends: friends || [] };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to sync contacts";
      setError(errorMessage);
      console.error("Contact sync error:", err);
      return { skipped: true, friends: [], error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    syncContacts,
    isLoading,
    error,
  };
}
