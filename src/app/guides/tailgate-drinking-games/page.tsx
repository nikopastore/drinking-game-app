import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Tailgate Drinking Games (2024) | Football Pregame Games",
  description: "Best drinking games for tailgating before the big game! Cornhole, Flip Cup, and more outdoor games perfect for parking lots.",
  keywords: ["tailgate drinking games", "tailgating games", "football drinking games", "pregame drinking games", "parking lot games"],
  openGraph: { title: "Best Tailgate Drinking Games", description: "Pregame like a champion.", type: "article", url: "https://sipwiki.app/guides/tailgate-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/tailgate-drinking-games" },
};

export default function TailgateDrinkingGamesPage() {
  return (
    <GuideLayout title="Best Tailgate Drinking Games" description="The party before the party! Tailgating is an art form, and these games will make your setup the envy of the parking lot." breadcrumb="Tailgate Games" relatedGames={[{ name: "Flip Cup", slug: "flip-cup", description: "Team classic" }, { name: "Beer Pong", slug: "beer-pong", description: "The standard" }]}>
      <h2>Essential Tailgate Games</h2>
      <ul><li><strong>Cornhole</strong> - Add drinking rules for hits</li><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> - Team rivalries</li><li><Link href="/game/beer-pong" className="text-neon-pink">Beer Pong</Link> - Bring a portable table</li><li><strong>Ladder Toss</strong></li><li><strong>KanJam</strong></li></ul>
      <h2>Quick Games Between Sets</h2>
      <ul><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link></li><li><Link href="/game/quarters" className="text-neon-pink">Quarters</Link></li><li>Shotgun races</li></ul>
      <h2>Tailgate Tips</h2>
      <ul><li>Arrive early to stake your spot</li><li>Bring a folding table</li><li>Coolers with ice are essential</li><li>Pack extra cups and balls</li></ul>
    </GuideLayout>
  );
}
