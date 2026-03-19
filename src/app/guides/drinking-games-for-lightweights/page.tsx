import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drinking Games for Lightweights (2024) | Low Alcohol Games",
  description: "Drinking games perfect for lightweights! Games with pacing, low alcohol options, and ways to participate without overdoing it.",
  keywords: ["drinking games for lightweights", "light drinking games", "low alcohol drinking games", "drinking games low tolerance", "beginner drinking games"],
  openGraph: { title: "Games for Lightweights", description: "Pace yourself!", type: "article", url: "https://sipwiki.app/guides/drinking-games-for-lightweights" },
  alternates: { canonical: "https://sipwiki.app/guides/drinking-games-for-lightweights" },
};

export default function DrinkingGamesForLightweightsPage() {
  return (
    <GuideLayout title="Drinking Games for Lightweights" description="Low tolerance? No shame! These games let you participate fully without getting wrecked. Smart drinking is good drinking." breadcrumb="Lightweight Games" relatedGames={[{ name: "Most Likely To", slug: "most-likely-to", description: "Sip-based" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Control your pace" }]}>
      <h2>Best for Low Tolerance</h2>
      <ul><li><Link href="/games/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Small sips</li><li><Link href="/games/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Pace yourself</li><li><Link href="/games/truth-or-drink" className="text-neon-pink">Truth or Drink</Link> - Answer = skip drink</li><li><Link href="/games/kings-cup" className="text-neon-pink">Kings Cup</Link> - Use weak drinks</li></ul>
      <h2>Lightweight Strategies</h2>
      <ul><li>Use beer instead of liquor</li><li>Fill cups with less</li><li>Take smaller sips</li><li>Alternate with water</li><li>Eat beforehand</li></ul>
      <h2>Games to Avoid</h2>
      <ul><li>Power Hour/Century Club</li><li>Rage Cage (too fast)</li><li>Anything with &quot;finish your drink&quot;</li><li>Shot-based games</li></ul>
    </GuideLayout>
  );
}
