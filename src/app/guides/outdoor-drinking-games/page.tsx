import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Best Outdoor Drinking Games (2024) | Backyard & BBQ Games",
  description: "Best drinking games for outdoors! Perfect for backyards, BBQs, parks, and beaches. Games that work in open spaces.",
  keywords: ["outdoor drinking games", "backyard drinking games", "bbq drinking games", "yard games with drinking", "outdoor party games"],
  openGraph: { title: "15 Best Outdoor Drinking Games", description: "Take the party outside.", type: "article", url: "https://sipwiki.app/guides/outdoor-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/outdoor-drinking-games" },
};

export default function OutdoorDrinkingGamesPage() {
  return (
    <GuideLayout title="15 Best Outdoor Drinking Games" description="Sun's out, drinks out! These games are perfect for backyards, parks, beaches, and anywhere outdoors." breadcrumb="Outdoor Games" relatedGames={[{ name: "Flip Cup", slug: "flip-cup", description: "Works anywhere" }, { name: "Beer Pong", slug: "beer-pong", description: "Classic outdoor game" }]}>
      <h2>Best Outdoor Games</h2>
      <ul><li><strong>Cornhole</strong> - Drink when opponent scores</li><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> - Just need a table</li><li><Link href="/game/beer-pong" className="text-neon-pink">Beer Pong</Link> - Classic for a reason</li><li><strong>KanJam</strong> - Frisbee + drinking</li><li><strong>Ladder Toss</strong> - Drink per point scored on you</li><li><Link href="/game/bite-the-bag" className="text-neon-pink">Bite the Bag</Link> - Just need a paper bag</li></ul>
      <h2>No-Props Outdoor Games</h2>
      <ul><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link></li><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link></li><li><Link href="/game/medusa" className="text-neon-pink">Medusa</Link></li></ul>
      <h2>Tips for Outdoor Drinking</h2>
      <ul><li>Keep drinks in a cooler</li><li>Use plastic, not glass</li><li>Stay hydrated with water</li><li>Watch for wind with cards/cups</li></ul>
    </GuideLayout>
  );
}
