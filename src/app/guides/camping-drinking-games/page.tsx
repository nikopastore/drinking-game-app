import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Camping Drinking Games (2024) | Campfire & Tent Games",
  description: "Drinking games perfect for camping! No electricity needed, minimal props. Great for around the campfire or in the tent.",
  keywords: ["camping drinking games", "campfire drinking games", "outdoor drinking games camping", "tent drinking games", "hiking drinking games"],
  openGraph: { title: "Best Camping Drinking Games", description: "Games for the great outdoors.", type: "article", url: "https://sipwiki.app/guides/camping-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/camping-drinking-games" },
};

export default function CampingDrinkingGamesPage() {
  return (
    <GuideLayout title="Best Camping Drinking Games" description="Around the campfire with friends and cold drinks - doesn't get better than that. These games need minimal or no props, perfect for the wilderness." breadcrumb="Camping Games" relatedGames={[{ name: "Never Have I Ever", slug: "never-have-i-ever", description: "No props needed" }, { name: "Most Likely To", slug: "most-likely-to", description: "Just need drinks" }]}>
      <h2>No-Props Campfire Games</h2>
      <ul><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link></li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link></li><li><Link href="/game/truth-or-drink" className="text-neon-pink">Truth or Drink</Link></li><li><Link href="/game/cheers-to-the-governor" className="text-neon-pink">Cheers to the Governor</Link></li><li>Two Truths and a Lie</li><li>Story time (drink for clichés)</li></ul>
      <h2>Card Games (Bring a Deck!)</h2>
      <ul><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link></li><li><Link href="/game/ride-the-bus" className="text-neon-pink">Ride the Bus</Link></li><li><Link href="/game/irish-poker" className="text-neon-pink">Irish Poker</Link></li></ul>
      <h2>Camping Tips</h2>
      <ul><li>Cans over bottles (no broken glass)</li><li>Pack out what you pack in</li><li>Keep drinks in the creek to stay cold</li><li>Drink water between drinks</li></ul>
    </GuideLayout>
  );
}
