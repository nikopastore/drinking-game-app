import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Slow Paced Drinking Games (2024) | Relaxed Drinking Games",
  description: "Slow-paced drinking games for long, relaxed nights! Games that let you savor your drinks and enjoy conversation.",
  keywords: ["slow paced drinking games", "relaxed drinking games", "slow drinking games", "sipping games", "marathon drinking games"],
  openGraph: { title: "Slow Paced Drinking Games", description: "Savor the night!", type: "article", url: "https://sipwiki.app/guides/slow-paced-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/slow-paced-drinking-games" },
};

export default function SlowPacedDrinkingGamesPage() {
  return (
    <GuideLayout title="Slow Paced Drinking Games" description="Marathon, not a sprint. These games let you enjoy drinks over hours without rushing, perfect for long conversations and relaxed nights." breadcrumb="Slow Paced" relatedGames={[{ name: "Truth or Drink", slug: "truth-or-drink", description: "Deep conversations" }, { name: "Horse Race", slug: "horse-race", description: "Watch and wait" }]}>
      <h2>Sipping Games</h2>
      <ul><li><Link href="/game/truth-or-drink" className="text-neon-pink">Truth or Drink</Link> - Question by question</li><li><Link href="/game/horse-race" className="text-neon-pink">Horse Race</Link> - Slow reveal</li><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Story time</li><li><strong>Movie Drinking Games</strong> - 2 hour movies</li></ul>
      <h2>Why Slow Works</h2>
      <ul><li>Better conversations</li><li>Pace your drinking</li><li>Last all night</li><li>More memorable</li><li>Enjoy your drinks</li></ul>
      <h2>Perfect Settings</h2>
      <ul><li>Wine nights</li><li>Small groups</li><li>Catching up with friends</li><li>Double dates</li><li>Cozy nights in</li></ul>
    </GuideLayout>
  );
}
