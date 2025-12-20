import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Competitive Drinking Games (2024) | Games for Rivals",
  description: "Intense competitive drinking games for those who play to win! 1v1 battles and tournament-style games.",
  keywords: ["competitive drinking games", "1v1 drinking games", "tournament drinking games", "drinking game competition", "versus drinking games"],
  openGraph: { title: "Competitive Drinking Games", description: "Play to win!", type: "article", url: "https://sipwiki.app/guides/competitive-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/competitive-drinking-games" },
};

export default function CompetitiveGamesPage() {
  return (
    <GuideLayout title="Competitive Drinking Games" description="For those who hate losing! These games bring out your competitive side with clear winners, losers, and bragging rights." breadcrumb="Competitive Games" relatedGames={[{ name: "Beer Pong", slug: "beer-pong", description: "The classic" }, { name: "Rage Cage", slug: "rage-cage", description: "Elimination" }]}>
      <h2>1v1 Battles</h2>
      <ul><li><strong>Speed Quarters</strong> - Race to sink first</li><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> - Best of 5</li><li><strong>Chug Off</strong> - Pure speed</li></ul>
      <h2>Tournament Games</h2>
      <ul><li><Link href="/game/beer-pong" className="text-neon-pink">Beer Pong</Link> bracket</li><li><Link href="/game/rage-cage" className="text-neon-pink">Rage Cage</Link> elimination</li><li><Link href="/game/quarters" className="text-neon-pink">Quarters</Link> tournament</li></ul>
      <h2>Keeping Score</h2>
      <ul><li>Use a bracket system</li><li>Track wins on a whiteboard</li><li>Prize for tournament winner</li></ul>
    </GuideLayout>
  );
}
