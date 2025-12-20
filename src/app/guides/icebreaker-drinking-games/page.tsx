import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Icebreaker Drinking Games (2024) | Games for New Groups",
  description: "Best icebreaker drinking games! Perfect for parties where not everyone knows each other. Break the ice and make friends fast.",
  keywords: ["icebreaker drinking games", "drinking games for strangers", "party icebreaker games", "get to know you drinking games", "first time meeting drinking games"],
  openGraph: { title: "Icebreaker Drinking Games", description: "Break the ice!", type: "article", url: "https://sipwiki.app/guides/icebreaker-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/icebreaker-drinking-games" },
};

export default function IcebreakerDrinkingGamesPage() {
  return (
    <GuideLayout title="Icebreaker Drinking Games" description="Meeting new people? These games help everyone loosen up, learn names, and make connections fast - the social lubricant of parties!" breadcrumb="Icebreakers" relatedGames={[{ name: "Never Have I Ever", slug: "never-have-i-ever", description: "Learn about everyone" }, { name: "Most Likely To", slug: "most-likely-to", description: "Quick judgments" }]}>
      <h2>Best Icebreaker Games</h2>
      <ul><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Instant bonding</li><li><strong>Two Truths One Lie</strong> - Learn real facts</li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - First impressions</li><li><strong>Name Game</strong> - Learn names with drinks</li></ul>
      <h2>Quick Icebreakers</h2>
      <ul><li><strong>Categories</strong> - Fast and easy</li><li><strong>This or That</strong> - Quick preferences</li><li><strong>Speed Dating Style</strong> - Rotate partners</li></ul>
      <h2>Why These Work</h2>
      <ul><li>Everyone participates equally</li><li>Reveals interesting facts</li><li>Alcohol lowers inhibitions</li><li>Creates shared experiences</li><li>Gives people something to talk about</li></ul>
    </GuideLayout>
  );
}
