import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guys Night Drinking Games (2024) | Boys Night Party Games",
  description: "Best drinking games for guys night! Competitive, hilarious, and perfect for poker nights, sports watching, and bro hangs.",
  keywords: ["guys night drinking games", "boys night drinking games", "mens drinking games", "guy drinking games", "drinking games for guys"],
  openGraph: { title: "Guys Night Drinking Games", description: "Boys night!", type: "article", url: "https://sipwiki.app/guides/guys-night-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/guys-night-drinking-games" },
};

export default function GuysNightDrinkingGamesPage() {
  return (
    <GuideLayout title="Guys Night Drinking Games" description="The boys are back! Whether it's poker night, watching the game, or just hanging - these games bring the competition." breadcrumb="Guys Night" relatedGames={[{ name: "Beer Pong", slug: "beer-pong", description: "The classic" }, { name: "Rage Cage", slug: "rage-cage", description: "High energy" }]}>
      <h2>Competitive Games</h2>
      <ul><li><Link href="/game/beer-pong" className="text-neon-pink">Beer Pong</Link> - The essential</li><li><Link href="/game/rage-cage" className="text-neon-pink">Rage Cage</Link> - Intense energy</li><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> - Team battles</li><li><Link href="/game/quarters" className="text-neon-pink">Quarters</Link> - Skill game</li></ul>
      <h2>Sports Watching Games</h2>
      <ul><li>Score = opposing fans drink</li><li>Penalty = everyone drinks</li><li>Commercial break challenges</li><li>Halftime flip cup tournament</li></ul>
      <h2>Poker Night Rules</h2>
      <ul><li>Fold = sip</li><li>Win a hand = give drinks</li><li>Bad beat = shot</li><li>All-in and lose = finish drink</li></ul>
    </GuideLayout>
  );
}
