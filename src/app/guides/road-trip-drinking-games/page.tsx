import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Road Trip Drinking Games (2024) | Car & Travel Games",
  description: "Drinking games for road trips and travel! Games for passengers, rest stops, and destinations. Note: Driver stays sober!",
  keywords: ["road trip drinking games", "car drinking games", "travel drinking games", "passenger drinking games", "road trip games adults"],
  openGraph: { title: "Road Trip Drinking Games", description: "Passengers only!", type: "article", url: "https://sipwiki.app/guides/road-trip-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/road-trip-drinking-games" },
};

export default function RoadTripDrinkingGamesPage() {
  return (
    <GuideLayout title="Road Trip Drinking Games" description="Long drive ahead? These games make the journey fun for passengers. Important: DRIVER NEVER DRINKS!" breadcrumb="Road Trip" relatedGames={[{ name: "Most Likely To", slug: "most-likely-to", description: "Perfect for cars" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "No hands needed" }]}>
      <h2>⚠️ IMPORTANT</h2>
      <p><strong>The driver NEVER participates in drinking. These games are for passengers only!</strong></p>
      <h2>In-Car Games (Passengers)</h2>
      <ul><li><strong>License Plate Game</strong> - Spot a state = others drink</li><li><strong>Billboard Bingo</strong> - First to spot drinks gives</li><li><strong>Road Trip Trivia</strong> - Wrong answers = sip</li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link></li></ul>
      <h2>Rest Stop Games</h2>
      <ul><li>Quick card games at picnic areas</li><li>Cornhole at rest stops</li><li>Stretch and drink break</li></ul>
      <h2>Destination Games</h2>
      <ul><li>Save the real games for arrival</li><li>Hotel room games</li><li>Campsite drinking games</li></ul>
    </GuideLayout>
  );
}
