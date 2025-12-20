import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Easy Drinking Games (2024) | Simple Rules, Maximum Fun",
  description: "The easiest drinking games with super simple rules! Anyone can play these games in seconds. Perfect for casual hangouts.",
  keywords: ["easy drinking games", "simple drinking games", "drinking games easy rules", "basic drinking games", "drinking games for anyone"],
  openGraph: { title: "Easy Drinking Games", description: "Simple rules, big fun!", type: "article", url: "https://sipwiki.app/guides/easy-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/easy-drinking-games" },
};

export default function EasyGamesPage() {
  return (
    <GuideLayout title="Easy Drinking Games" description="Don't want to explain complicated rules? These games are dead simple - anyone can learn them in seconds and start having fun immediately." breadcrumb="Easy Games" relatedGames={[{ name: "Most Likely To", slug: "most-likely-to", description: "Point and drink" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Say it, drink if done" }]}>
      <h2>Simplest Games Ever</h2>
      <ul><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Point at someone, they drink</li><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Done it? Drink</li><li><strong>Higher or Lower</strong> - Guess the next card</li><li><Link href="/game/medusa" className="text-neon-pink">Medusa</Link> - Eye contact = drink</li></ul>
      <h2>One-Sentence Rules</h2>
      <ul><li><strong>Thumbs</strong> - Last to put thumb on table drinks</li><li><strong>Buffalo</strong> - Wrong hand = chug</li><li><strong>Categories</strong> - Can&apos;t name one? Drink</li></ul>
      <p>See all <Link href="/games/quick-easy" className="text-neon-pink hover:underline">quick & easy games</Link>!</p>
    </GuideLayout>
  );
}
