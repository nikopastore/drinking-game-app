"use client";

import Link from "next/link";
import { Header } from "@/components/Header";
import { MobileNav } from "@/components/MobileNav";
import { Button, Card, CardContent } from "@/components/ui";
import { useAuthContext } from "@/components/auth/AuthProvider";

export default function AccountPage() {
  const { user, loading, requireAuth, signOut } = useAuthContext();

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
                  <Link href="/favorites"><Button>View favorites</Button></Link>
                  <Button variant="outline" onClick={() => void signOut()}>Sign out</Button>
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
      <MobileNav />
    </div>
  );
}
