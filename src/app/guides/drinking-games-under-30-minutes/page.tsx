import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drinking Games Under 30 Minutes (2024) | Medium Length Games",
  description: "Drinking games that wrap up in 30 minutes or less! Perfect length for multiple games in one night without dragging on.",
  keywords: ["30 minute drinking games", "drinking games under 30 minutes", "medium length drinking games", "half hour drinking games", "timed drinking games"],
  openGraph: { title: "30 Minute Drinking Games", description: "Perfect pacing!", type: "article", url: "https://sipwiki.app/guides/drinking-games-under-30-minutes" },
  alternates: { canonical: "https://sipwiki.app/guides/drinking-games-under-30-minutes" },
};

export default function DrinkingGamesUnder30MinutesPage() {
  return (
    <GuideLayout title="Drinking Games Under 30 Minutes" description="The Goldilocks zone of drinking games - long enough to be fun, short enough to play multiple rounds or switch games." breadcrumb="30 Minute Games" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Usually 20-30 min" }, { name: "Ride the Bus", slug: "ride-the-bus", description: "Quick rounds" }]}>
      <h2>Perfect Length Games</h2>
      <ul><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> - ~20-30 minutes</li><li><Link href="/game/ride-the-bus" className="text-neon-pink">Ride the Bus</Link> - ~15-20 minutes</li><li><Link href="/game/beeramid" className="text-neon-pink">Beeramid</Link> - ~20 minutes</li><li><Link href="/game/horse-race" className="text-neon-pink">Horse Race</Link> - ~15 minutes</li></ul>
      <h2>Why 30 Minutes Works</h2>
      <ul><li>Time to get into it</li><li>Doesn&apos;t overstay welcome</li><li>Can play 2-3 different games/night</li><li>Attention spans remain</li><li>Natural drink pacing</li></ul>
      <h2>Timing Tips</h2>
      <ul><li>Set a timer if needed</li><li>Kings Cup: faster turns = faster game</li><li>Skip slow players&apos; turns</li></ul>
    </GuideLayout>
  );
}
