import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boat Drinking Games (2024) | Games for Boats & Yachts",
  description: "Best drinking games for boats! Water-safe games, yacht party ideas, and activities perfect for lake days and boat parties.",
  keywords: ["boat drinking games", "drinking games for boats", "yacht drinking games", "lake boat games", "pontoon drinking games"],
  openGraph: { title: "Boat Drinking Games", description: "Party on the water!", type: "article", url: "https://sipwiki.app/guides/boat-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/boat-drinking-games" },
};

export default function BoatDrinkingGamesPage() {
  return (
    <GuideLayout title="Boat Drinking Games" description="On a boat? These games work perfectly on the water - stable enough for movement, waterproof friendly, and boat-party approved." breadcrumb="Boat Games" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Works on boats" }, { name: "Most Likely To", slug: "most-likely-to", description: "No equipment needed" }]}>
      <h2>Boat-Safe Games</h2>
      <ul><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> - Secure the cards!</li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - No equipment to lose</li><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Just talking</li><li><Link href="/game/truth-or-drink" className="text-neon-pink">Truth or Drink</Link> - Perfect for cruising</li></ul>
      <h2>Water Activities + Drinks</h2>
      <ul><li>Tubing tournaments - losers drink</li><li>Fishing - no catch = drink</li><li>Diving contests - judges score</li><li>Swimming races</li></ul>
      <h2>Boat Safety</h2>
      <ul><li>Designate a sober captain</li><li>Life jackets accessible</li><li>Stay hydrated</li><li>Know your limits on water</li><li>Secure all bottles/cans</li></ul>
    </GuideLayout>
  );
}
