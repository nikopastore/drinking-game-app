import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Date Night Drinking Games (2024) | Couples Games for Two",
  description: "Fun drinking games for date night! Perfect for couples wanting to spice up an evening at home with flirty, romantic games.",
  keywords: ["date night drinking games", "couples drinking games", "romantic drinking games", "drinking games for two", "date night games"],
  openGraph: { title: "Date Night Drinking Games", description: "Couples game night!", type: "article", url: "https://sipwiki.app/guides/date-night-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/date-night-drinking-games" },
};

export default function DateNightDrinkingGamesPage() {
  return (
    <GuideLayout title="Date Night Drinking Games" description="Stay in and have fun! These games are perfect for couples looking to add some excitement to date night at home." breadcrumb="Date Night" relatedGames={[{ name: "Truth or Drink", slug: "truth-or-drink", description: "Learn something new" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Couples edition" }]}>
      <h2>Get-to-Know-You Games</h2>
      <ul><li><Link href="/games/truth-or-drink" className="text-neon-pink">Truth or Drink</Link> - Deep questions</li><li><strong>Two Truths One Lie</strong> - Discover secrets</li><li><strong>This or That</strong> - Quick fire preferences</li></ul>
      <h2>Flirty Games</h2>
      <ul><li><Link href="/games/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Spicy edition</li><li><strong>Strip or Drink</strong> - You choose</li><li><strong>Compliment or Drink</strong> - Say something nice</li></ul>
      <h2>Movie Night Add-On</h2>
      <ul><li>Character does something dumb = drink</li><li>Predict what happens next - wrong = drink</li><li>Finish drink during credits</li></ul>
    </GuideLayout>
  );
}
