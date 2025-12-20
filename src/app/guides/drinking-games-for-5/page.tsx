import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Drinking Games for 5 People (2024) | Five Player Games",
  description: "Perfect drinking games for 5 players! Not too small, not too big - these games are ideal for groups of five.",
  keywords: ["drinking games for 5", "drinking games for 5 people", "five person drinking games", "drinking games 5 players", "5 player drinking games"],
  openGraph: { title: "Drinking Games for 5 People", description: "Five's the vibe!", type: "article", url: "https://sipwiki.app/guides/drinking-games-for-5" },
  alternates: { canonical: "https://sipwiki.app/guides/drinking-games-for-5" },
};

export default function DrinkingGamesFor5Page() {
  return (
    <GuideLayout title="Best Drinking Games for 5 People" description="Five is the Goldilocks zone - not too small for group games, not too big to manage. These games shine with exactly five players." breadcrumb="Games for 5" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Great at any size" }, { name: "Rage Cage", slug: "rage-cage", description: "Works well at 5+" }]}>
      <h2>Best Games for 5</h2>
      <ul><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link></li><li><Link href="/game/rage-cage" className="text-neon-pink">Rage Cage</Link> - Minimum for max fun</li><li><Link href="/game/beeramid" className="text-neon-pink">Beeramid</Link></li><li><Link href="/game/ride-the-bus" className="text-neon-pink">Ride the Bus</Link></li><li><Link href="/game/chandelier" className="text-neon-pink">Chandelier</Link></li></ul>
      <h2>Social Games</h2>
      <ul><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link></li><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link></li><li><Link href="/game/medusa" className="text-neon-pink">Medusa</Link></li></ul>
      <h2>Why 5 Works</h2>
      <ul><li>Enough for elimination games</li><li>Still intimate conversations</li><li>Good pacing on turns</li><li>Works for most card games</li></ul>
    </GuideLayout>
  );
}
