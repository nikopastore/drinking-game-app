import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Night Drinking Games (2024) | Marathon Party Games",
  description: "Drinking games designed for long nights! Games that last for hours, scale with energy, and keep the party going until dawn.",
  keywords: ["all night drinking games", "marathon drinking games", "long drinking games", "party all night games", "hours long drinking games"],
  openGraph: { title: "All Night Drinking Games", description: "Party until dawn!", type: "article", url: "https://sipwiki.app/guides/all-night-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/all-night-drinking-games" },
};

export default function AllNightDrinkingGamesPage() {
  return (
    <GuideLayout title="All Night Drinking Games" description="In it for the long haul? These games keep going as long as you do, perfect for cabin trips, NYE, and marathon party sessions." breadcrumb="All Night" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Endless rounds" }, { name: "Power Hour", slug: "power-hour", description: "100 min version" }]}>
      <h2>Marathon Games</h2>
      <ul><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> - Reset and repeat</li><li><strong>Century Club</strong> - 100 minutes of drinking</li><li><strong>Drunk Board Games</strong> - Monopoly takes hours</li><li><Link href="/game/rage-cage" className="text-neon-pink">Rage Cage</Link> - Tournament style</li></ul>
      <h2>Pacing Strategies</h2>
      <ul><li>Start light, escalate later</li><li>Water breaks every hour</li><li>Food throughout the night</li><li>Rotate game types</li><li>Take breaks outside</li></ul>
      <h2>All-Night Essentials</h2>
      <ul><li>Plenty of drinks</li><li>Snacks accessible</li><li>Comfortable seating</li><li>Good playlist</li><li>No early morning plans</li></ul>
    </GuideLayout>
  );
}
