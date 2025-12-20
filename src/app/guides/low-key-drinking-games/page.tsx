import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Low Key Drinking Games (2024) | Chill & Relaxed Games",
  description: "Low-key drinking games for chill nights! Games that don't require high energy, perfect for relaxed hangouts and winding down.",
  keywords: ["low key drinking games", "chill drinking games", "relaxed drinking games", "calm drinking games", "mellow drinking games"],
  openGraph: { title: "Low Key Drinking Games", description: "Chill vibes only!", type: "article", url: "https://sipwiki.app/guides/low-key-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/low-key-drinking-games" },
};

export default function LowKeyDrinkingGamesPage() {
  return (
    <GuideLayout title="Low Key Drinking Games" description="Not every night needs to be wild. These games are perfect for chill hangs, winding down, or when you want drinks without chaos." breadcrumb="Low Key Games" relatedGames={[{ name: "Truth or Drink", slug: "truth-or-drink", description: "Conversation focus" }, { name: "Ride the Bus", slug: "ride-the-bus", description: "Relaxed card game" }]}>
      <h2>Chill Games</h2>
      <ul><li><Link href="/game/truth-or-drink" className="text-neon-pink">Truth or Drink</Link> - Just conversation</li><li><Link href="/game/ride-the-bus" className="text-neon-pink">Ride the Bus</Link> - Quiet card game</li><li><Link href="/game/horse-race" className="text-neon-pink">Horse Race</Link> - Watch and sip</li><li><strong>Movie Drinking Games</strong> - Passive drinking</li></ul>
      <h2>Low Energy Vibes</h2>
      <ul><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Sitting game</li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - No movement needed</li><li><strong>Trivia</strong> - Thinking, not running</li></ul>
      <h2>Perfect For</h2>
      <ul><li>Small groups</li><li>Late night wind-downs</li><li>Recovery days</li><li>Wine nights</li><li>When you&apos;re tired but social</li></ul>
    </GuideLayout>
  );
}
