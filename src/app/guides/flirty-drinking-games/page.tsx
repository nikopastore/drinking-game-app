import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flirty Drinking Games (2024) | Romantic Party Games",
  description: "Flirty drinking games for when there's chemistry! Perfect for date nights, couples parties, and when you want to turn up the heat.",
  keywords: ["flirty drinking games", "romantic drinking games", "sexy drinking games", "drinking games for couples", "spicy drinking games"],
  openGraph: { title: "Flirty Drinking Games", description: "Turn up the heat!", type: "article", url: "https://sipwiki.app/guides/flirty-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/flirty-drinking-games" },
};

export default function FlirtyDrinkingGamesPage() {
  return (
    <GuideLayout title="Flirty Drinking Games" description="Sparks flying? These games add some romantic tension to your night - perfect for date nights or when the chemistry is obvious." breadcrumb="Flirty Games" relatedGames={[{ name: "Truth or Drink", slug: "truth-or-drink", description: "Ask anything" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Spicy edition" }]}>
      <h2>Flirty Favorites</h2>
      <ul><li><Link href="/game/truth-or-drink" className="text-neon-pink">Truth or Drink</Link> - Spicy questions</li><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Flirty version</li><li><strong>Strip or Drink</strong> - You choose each time</li><li><strong>Seven Minutes in Heaven</strong> - Or finish drink</li></ul>
      <h2>For Couples</h2>
      <ul><li><strong>Compliment or Drink</strong> - Keep them coming</li><li><strong>Kissing Card Game</strong> - Different cards, different kisses</li><li><strong>Fantasy Reveal</strong> - Share or drink</li></ul>
      <h2>Keep It Consensual</h2>
      <ul><li>Everyone should be comfortable</li><li>Easy opt-out (just drink)</li><li>Read the room</li><li>Respect boundaries always</li></ul>
    </GuideLayout>
  );
}
