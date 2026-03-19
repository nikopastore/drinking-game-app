import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quick Drinking Games (2024) | Fast Games Under 10 Minutes",
  description: "Fast drinking games you can play in under 10 minutes! Perfect for pregaming or quick rounds between activities.",
  keywords: ["quick drinking games", "fast drinking games", "short drinking games", "5 minute drinking games", "pregame drinking games"],
  openGraph: { title: "Quick Drinking Games", description: "Fast and furious fun!", type: "article", url: "https://sipwiki.app/guides/quick-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/quick-drinking-games" },
};

export default function QuickGamesPage() {
  return (
    <GuideLayout title="Quick Drinking Games" description="No time for a full game of Kings Cup? These games are lightning fast - perfect for pregaming or quick rounds." breadcrumb="Quick Games" relatedGames={[{ name: "Medusa", slug: "medusa", description: "30-second rounds" }, { name: "Flip Cup", slug: "flip-cup", description: "2-minute games" }]}>
      <h2>Under 5 Minutes</h2>
      <ul><li><Link href="/games/medusa" className="text-neon-pink">Medusa</Link> - Instant rounds</li><li><Link href="/games/flip-cup" className="text-neon-pink">Flip Cup</Link> - One race, done</li><li><strong>Shot Roulette</strong> - Spin and drink</li><li><strong>Thunderstruck</strong> - One song</li></ul>
      <h2>5-10 Minutes</h2>
      <ul><li><Link href="/games/rage-cage" className="text-neon-pink">Rage Cage</Link> - Quick elimination</li><li><Link href="/games/ride-the-bus" className="text-neon-pink">Ride the Bus</Link> (short version)</li><li><strong>Speed Quarters</strong></li></ul>
      <h2>Best For Pregaming</h2>
      <ul><li>Play 2-3 quick games before heading out</li><li>Keeps energy high</li><li>Everyone gets involved fast</li></ul>
    </GuideLayout>
  );
}
