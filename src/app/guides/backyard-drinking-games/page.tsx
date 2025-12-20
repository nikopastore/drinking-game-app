import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Backyard Drinking Games (2024) | Outdoor Yard Games",
  description: "Top backyard drinking games for BBQs and parties! Games perfect for your yard, patio, or deck. Make the most of outdoor space.",
  keywords: ["backyard drinking games", "yard drinking games", "outdoor drinking games backyard", "patio drinking games", "backyard party games"],
  openGraph: { title: "Backyard Drinking Games", description: "Outdoor drinking fun!", type: "article", url: "https://sipwiki.app/guides/backyard-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/backyard-drinking-games" },
};

export default function BackyardDrinkingGamesPage() {
  return (
    <GuideLayout title="Best Backyard Drinking Games" description="Got outdoor space? These games take advantage of your backyard, patio, or deck for maximum party potential." breadcrumb="Backyard Games" relatedGames={[{ name: "Beer Pong", slug: "beer-pong", description: "Outdoor classic" }, { name: "Flip Cup", slug: "flip-cup", description: "Great for yards" }]}>
      <h2>Classic Backyard Games</h2>
      <ul><li><Link href="/game/beer-pong" className="text-neon-pink">Beer Pong</Link> - The outdoor essential</li><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> - Team competition</li><li><Link href="/game/rage-cage" className="text-neon-pink">Rage Cage</Link> - High energy</li><li><strong>Cornhole + Drinking Rules</strong></li></ul>
      <h2>Yard Game + Drink Combos</h2>
      <ul><li><strong>Kan Jam</strong> - Miss = drink</li><li><strong>Ladder Golf</strong> - Points = give drinks</li><li><strong>Giant Jenga</strong> - Rules on blocks</li><li><strong>Spikeball</strong> - Losers drink</li></ul>
      <h2>Backyard Setup Tips</h2>
      <ul><li>Set up in shade if possible</li><li>Have a cooler nearby</li><li>Use plastic cups for safety</li><li>Designate a game area</li><li>Keep neighbors happy</li></ul>
    </GuideLayout>
  );
}
