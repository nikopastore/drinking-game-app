import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drinking Games for Roommates (2024) | Apartment Games",
  description: "Best drinking games for roommates! Perfect for staying in, pre-gaming, or just a random Tuesday night with your housemates.",
  keywords: ["drinking games for roommates", "roommate drinking games", "housemate drinking games", "apartment drinking games roommates", "living together drinking games"],
  openGraph: { title: "Roommate Drinking Games", description: "Home is where the drinks are!", type: "article", url: "https://sipwiki.app/guides/drinking-games-for-roommates" },
  alternates: { canonical: "https://sipwiki.app/guides/drinking-games-for-roommates" },
};

export default function DrinkingGamesForRoommatesPage() {
  return (
    <GuideLayout title="Drinking Games for Roommates" description="Live with your drinking buddies? These games are perfect for random weeknights, pre-gaming, or when you're too lazy to go out." breadcrumb="Roommate Games" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Kitchen table classic" }, { name: "Ride the Bus", slug: "ride-the-bus", description: "Quick card game" }]}>
      <h2>Any Night Games</h2>
      <ul><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> - The go-to</li><li><Link href="/game/ride-the-bus" className="text-neon-pink">Ride the Bus</Link> - Quick rounds</li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - You know each other</li></ul>
      <h2>TV/Movie Night Add-Ons</h2>
      <ul><li>Drinking rules for shows you watch together</li><li>Commercial break challenges</li><li>Reality TV prediction games</li></ul>
      <h2>Roommate Advantages</h2>
      <ul><li>No commute home</li><li>Your own fridge full of drinks</li><li>No noise complaints (you ARE the noise)</li><li>Can pause for snack breaks</li><li>Already in pajamas</li></ul>
    </GuideLayout>
  );
}
