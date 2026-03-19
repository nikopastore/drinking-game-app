import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drinking Game Ideas (2024) | 100+ Game Ideas & Inspiration",
  description: "Need drinking game inspiration? 100+ ideas for every occasion, group size, and vibe. Find your perfect game tonight!",
  keywords: ["drinking game ideas", "drinking games list", "party game ideas", "drinking game inspiration", "what drinking game to play"],
  openGraph: { title: "Drinking Game Ideas", description: "100+ ideas for any party!", type: "article", url: "https://sipwiki.app/guides/drinking-game-ideas" },
  alternates: { canonical: "https://sipwiki.app/guides/drinking-game-ideas" },
};

export default function DrinkingGameIdeasPage() {
  return (
    <GuideLayout title="Drinking Game Ideas" description="Not sure what to play? Browse our comprehensive list of drinking game ideas organized by category, group size, and vibe." breadcrumb="Game Ideas" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Classic choice" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Always works" }]}>
      <h2>By Group Size</h2>
      <ul><li><strong>2 people:</strong> <Link href="/games/truth-or-drink" className="text-neon-pink">Truth or Drink</Link>, Higher or Lower</li><li><strong>3-5 people:</strong> <Link href="/games/kings-cup" className="text-neon-pink">Kings Cup</Link>, <Link href="/games/ride-the-bus" className="text-neon-pink">Ride the Bus</Link></li><li><strong>6-10 people:</strong> <Link href="/games/flip-cup" className="text-neon-pink">Flip Cup</Link>, <Link href="/games/rage-cage" className="text-neon-pink">Rage Cage</Link></li><li><strong>10+ people:</strong> <Link href="/games/most-likely-to" className="text-neon-pink">Most Likely To</Link>, <Link href="/games/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link></li></ul>
      <h2>By Vibe</h2>
      <ul><li><strong>Chill:</strong> Truth or Drink, Wine games</li><li><strong>Competitive:</strong> Beer Pong, Flip Cup</li><li><strong>Chaotic:</strong> Rage Cage, Civil War</li><li><strong>Social:</strong> Kings Cup, Most Likely To</li></ul>
      <h2>By Props</h2>
      <ul><li><strong>No props:</strong> Never Have I Ever, Medusa</li><li><strong>Cards:</strong> Kings Cup, Ride the Bus</li><li><strong>Cups:</strong> Beer Pong, Flip Cup</li><li><strong>Dice:</strong> Three Man, 7-11 Doubles</li></ul>
      <p>Browse all <Link href="/games" className="text-neon-pink hover:underline">drinking games</Link>!</p>
    </GuideLayout>
  );
}
