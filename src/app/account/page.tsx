"use client";

import Link from "next/link";
import { useState } from "react";
import { Header } from "@/components/Header";
import { MobileNav } from "@/components/MobileNav";
import { Button, Card, CardContent } from "@/components/ui";
import { useAuthContext } from "@/components/auth/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import { ContactSyncPrompt } from "@/components/contacts/ContactSyncPrompt";

export default function AccountPage() {
  const { user, loading, requireAuth, signOut } = useAuthContext();
  const [disabling, setDisabling] = useState(false);
  const [discoveryMessage, setDiscoveryMessage] = useState("");
  const [syncOpen, setSyncOpen] = useState(false);
  const disableDiscovery = async () => {
    setDisabling(true);
    setDiscoveryMessage("");
    try {
      const { error } = await createClient().rpc("stop_contact_sync");
      if (error) throw error;
      setDiscoveryMessage("Friend discovery is off and your synced contacts have been removed.");
    } catch {
      setDiscoveryMessage("Could not turn discovery off. Please try again.");
    } finally { setDisabling(false); }
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <main className="mx-auto max-w-2xl px-4 py-12 pb-28">
        <h1 className="text-3xl font-bold text-white">Account</h1>
        <Card className="mt-6">
          <CardContent className="p-6">
            {loading ? (
              <p className="text-gray-400">Loading your account…</p>
            ) : user ? (
              <div className="space-y-4">
                <p className="text-gray-300">Signed in as {user.email ?? "SipWiki member"}.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/favorites" className="text-neon-pink hover:underline">View favorites</Link>
                  <Link href="/recent" className="text-neon-pink hover:underline">Recent games</Link>
                  <Button variant="outline" onClick={() => void signOut()}>Sign out</Button>
                </div>
                <div className="border-t border-dark-600 pt-4">
                  <h2 className="font-semibold text-white">Contact discovery</h2>
                  <p className="mt-2 text-sm text-gray-400">Mobile contact sync enables discovery by contacts who also opt in. Turn it off here at any time.</p>
                  <Button className="mt-3 mr-3" onClick={() => setSyncOpen(true)}>Enable or refresh discovery</Button>
                  <Button variant="outline" className="mt-3" disabled={disabling} onClick={() => void disableDiscovery()}>Turn off friend discovery</Button>
                  {discoveryMessage && <p role="status" className="mt-3 text-sm text-gray-300">{discoveryMessage}</p>}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-gray-400">Sign in to save favorites and join the community.</p>
                <Button onClick={() => requireAuth()}>Sign in</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      {user && <ContactSyncPrompt
        isOpen={syncOpen}
        userId={user.id}
        onClose={() => setSyncOpen(false)}
        onSkip={() => { setSyncOpen(false); setDiscoveryMessage("Contact sync is available in the mobile app after you grant contact permission."); }}
        onFriendsFound={(friends) => { setSyncOpen(false); setDiscoveryMessage(`Discovery enabled. Found ${friends.length} matching ${friends.length === 1 ? "contact" : "contacts"}.`); }}
      />}
      <MobileNav />
    </div>
  );
}
