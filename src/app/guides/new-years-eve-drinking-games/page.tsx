import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best New Year's Eve Drinking Games (2024) | NYE Party Games",
  description: "Ring in the new year with these drinking games! Countdown games, champagne challenges, and party activities for New Year's Eve.",
  keywords: ["new years eve drinking games", "nye drinking games", "new years party games", "countdown drinking games", "new years eve party ideas"],
  openGraph: { title: "New Year's Eve Drinking Games", description: "Countdown to midnight!", type: "article", url: "https://sipwiki.app/guides/new-years-eve-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/new-years-eve-drinking-games" },
};

export default function NewYearsEvePage() {
  return (
    <GuideLayout title="Best New Year's Eve Drinking Games" description="Make the countdown to midnight unforgettable! These games build excitement throughout the night and culminate in epic celebrations." breadcrumb="NYE Games" relatedGames={[{ name: "Power Hour", slug: "power-hour", description: "Time-based drinking" }, { name: "Kings Cup", slug: "kings-cup", description: "Classic party game" }]}>
      <h2>Countdown Games</h2>
      <ul><li><strong>Hourly Shots</strong> - One shot per hour until midnight</li><li><strong>Countdown Challenges</strong> - New challenge each hour</li><li><strong>Resolution Roulette</strong> - Drink if you won&apos;t keep yours</li></ul>
      <h2>Midnight Games</h2>
      <ul><li><strong>Champagne Chug</strong> - Race when the ball drops</li><li><strong>Kiss or Drink</strong> - No kiss at midnight? Finish your drink</li><li><strong>New Year Predictions</strong> - Drink when predictions are wrong</li></ul>
      <h2>All Night Games</h2>
      <ul><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link></li><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> (year in review edition)</li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> (next year predictions)</li></ul>
    </GuideLayout>
  );
}
