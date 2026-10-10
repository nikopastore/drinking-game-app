"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { MobileNav } from "@/components/MobileNav";
import { Button, Card, CardContent } from "@/components/ui";
import { useAppStore } from "@/lib/store";
import { GameCard } from "@/components/GameCard";
import { getGameBySlug } from "@/config/gameData";

export default function RecentPage() {
  const recentGames = useAppStore((state) => state.recentGames);
  const clearRecentGames = useAppStore((state) => state.clearRecentGames);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const played = mounted ? recentGames.flatMap((entry) => {
    const game = getGameBySlug(entry.slug);
    return game ? [{ ...entry, game }] : [];
  }) : [];
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <main className="mx-auto max-w-2xl px-4 py-12 pb-28">
        <h1 className="text-3xl font-bold text-white">Recent games</h1>
        <p className="mt-2 text-gray-400">Your last 20 games, saved on this device.</p>
        {!mounted ? <p className="mt-6 text-gray-400">Loading your recent games…</p> : played.length ? (
          <>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {played.map(({ slug, playedAt, game }) => (
                <div key={slug}>
                  <GameCard game={game} />
                  <p className="mt-2 text-sm text-gray-400">Played {new Date(playedAt).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="mt-6" onClick={clearRecentGames}>Clear history on this device</Button>
          </>
        ) : <Card className="mt-6">
          <CardContent className="p-6">
            <p className="text-gray-400">Start a game to build your recent history.</p>
            <Link href="/games" className="mt-5 inline-block text-neon-pink hover:underline">Browse games</Link>
          </CardContent>
        </Card>}
      </main>
      <MobileNav />
    </div>
  );
}
