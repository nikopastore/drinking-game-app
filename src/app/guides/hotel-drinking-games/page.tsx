import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hotel Room Drinking Games (2024) | Hotel Party Games",
  description: "Best drinking games for hotel rooms! Games perfect for vacations, conventions, and hotel pregames. Travel-friendly fun!",
  keywords: ["hotel drinking games", "hotel room drinking games", "hotel party games", "vacation drinking games", "hotel room party"],
  openGraph: { title: "Hotel Room Drinking Games", description: "Hotel party time!", type: "article", url: "https://sipwiki.app/guides/hotel-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/hotel-drinking-games" },
};

export default function HotelDrinkingGamesPage() {
  return (
    <GuideLayout title="Hotel Room Drinking Games" description="Vacation mode activated! These games are perfect for hotel rooms - easy setup, packable supplies, and won't get you kicked out." breadcrumb="Hotel Games" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Pack a deck of cards" }, { name: "Most Likely To", slug: "most-likely-to", description: "No supplies needed" }]}>
      <h2>Packable Games</h2>
      <ul><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> - Just bring cards</li><li><Link href="/game/ride-the-bus" className="text-neon-pink">Ride the Bus</Link> - Card game perfection</li><li><Link href="/game/beeramid" className="text-neon-pink">Beeramid</Link> - More cards</li></ul>
      <h2>No-Supply Games</h2>
      <ul><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link></li><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link></li><li><Link href="/game/truth-or-drink" className="text-neon-pink">Truth or Drink</Link></li></ul>
      <h2>Hotel Tips</h2>
      <ul><li>Ice machine = free ice</li><li>Buy drinks beforehand (minibar = expensive)</li><li>Keep noise reasonable</li><li>Use the bathroom cups</li><li>Check checkout time for morning recovery</li></ul>
    </GuideLayout>
  );
}
