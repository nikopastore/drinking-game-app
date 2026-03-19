import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Game Night Drinking Games (2024) | Board Games + Drinks",
  description: "Turn game night into drinking night! Add drinking rules to board games, card games, and video games for adult fun.",
  keywords: ["game night drinking games", "drinking board games", "adult game night", "drinking game night ideas", "board games with drinking"],
  openGraph: { title: "Game Night Drinking Games", description: "Level up game night!", type: "article", url: "https://sipwiki.app/guides/game-night-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/game-night-drinking-games" },
};

export default function GameNightDrinkingGamesPage() {
  return (
    <GuideLayout title="Game Night Drinking Games" description="Transform your regular game night into an adult drinking game night. Add drinking rules to classics or play dedicated drinking games!" breadcrumb="Game Night" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Card game essential" }, { name: "Ride the Bus", slug: "ride-the-bus", description: "Quick card game" }]}>
      <h2>Board Games + Drinking</h2>
      <ul><li><strong>Drunk Monopoly</strong> - Pay rent in sips</li><li><strong>Drunk Jenga</strong> - Rules on blocks</li><li><strong>Drunk Uno</strong> - Draw 4 = 4 sips</li><li><strong>Drunk Scrabble</strong> - Challenged word = drink</li></ul>
      <h2>Pure Drinking Card Games</h2>
      <ul><li><Link href="/games/kings-cup" className="text-neon-pink">Kings Cup</Link></li><li><Link href="/games/ride-the-bus" className="text-neon-pink">Ride the Bus</Link></li><li><Link href="/games/beeramid" className="text-neon-pink">Beeramid</Link></li><li><Link href="/games/horse-race" className="text-neon-pink">Horse Race</Link></li></ul>
      <h2>Video Game Drinking Rules</h2>
      <ul><li>Mario Kart - Hit by shell = drink</li><li>Smash Bros - Lost stock = drink</li><li>Any game - Loser drinks</li></ul>
    </GuideLayout>
  );
}
