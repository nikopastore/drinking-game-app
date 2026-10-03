"use client";

import { useState, useCallback } from "react";
import { Capacitor } from "@capacitor/core";
import { createClient } from "@/lib/supabase/client";
import { Friend } from "@/types";
import { normalizeEmail, normalizePhone } from "./contactHelpers";

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

      // De-duplicate before sending the normalized values to the server. The
      // database applies a private keyed HMAC; no reversible client-side hash
      // is persisted or exposed to other users.
      const uniqueContacts = [...new Set(contactItems)].slice(0, 5000);

      if (uniqueContacts.length === 0) {
        return { skipped: false, friends: [] };
      }

      const supabase = createClient();

      // The SECURITY DEFINER function validates the signed-in user, applies a
      // private server-side HMAC, replaces the user's contact set, updates the
      // sync timestamp, and returns only matching profile data.
      const { data: friends, error: friendsError } = await supabase.rpc("sync_contacts", {
        p_user_id: userId,
        p_contacts: uniqueContacts,
      });

      if (friendsError) {
        console.error("Error finding friends:", friendsError);
        return { skipped: false, friends: [] };
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
