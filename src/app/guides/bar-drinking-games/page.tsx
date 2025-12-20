import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bar Drinking Games (2024) | Games to Play at Bars",
  description: "Best drinking games to play at bars! Games that work in public, don't need much space, and won't get you kicked out.",
  keywords: ["bar drinking games", "drinking games at bars", "pub drinking games", "bar games with friends", "games to play at a bar"],
  openGraph: { title: "Bar Drinking Games", description: "Games for going out!", type: "article", url: "https://sipwiki.app/guides/bar-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/bar-drinking-games" },
};

export default function BarDrinkingGamesPage() {
  return (
    <GuideLayout title="Bar Drinking Games" description="Out at a bar with friends? These games work in public settings, need minimal equipment, and keep the fun going without causing a scene." breadcrumb="Bar Games" relatedGames={[{ name: "Most Likely To", slug: "most-likely-to", description: "Just need friends" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "No equipment" }]}>
      <h2>Bar-Appropriate Games</h2>
      <ul><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Point and drink</li><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Classic bar game</li><li><strong>Two Truths and a Lie</strong> - Guess wrong, drink</li><li><strong>Categories</strong> - Name things in a category</li></ul>
      <h2>Bar Games Already There</h2>
      <ul><li>Darts - Add drink rules</li><li>Pool - Loser drinks</li><li>Trivia night - Wrong answers = sips</li><li>Jukebox roulette</li></ul>
      <h2>Bar Etiquette</h2>
      <ul><li>Don&apos;t be too loud</li><li>Tip your bartender</li><li>Don&apos;t involve strangers without asking</li><li>Keep your group together</li><li>Know when to stop</li></ul>
    </GuideLayout>
  );
}
