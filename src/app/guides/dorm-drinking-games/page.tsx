import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Dorm Drinking Games (2024) | College Dorm Room Games",
  description: "Perfect drinking games for dorm rooms! Games that work in tiny spaces, stay quiet enough for RAs, and are college-budget friendly.",
  keywords: ["dorm drinking games", "dorm room drinking games", "college dorm games", "drinking games for dorm", "small room drinking games"],
  openGraph: { title: "Dorm Room Drinking Games", description: "Dorm life essentials!", type: "article", url: "https://sipwiki.app/guides/dorm-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/dorm-drinking-games" },
};

export default function DormDrinkingGamesPage() {
  return (
    <GuideLayout title="Best Dorm Room Drinking Games" description="Cramped space? RA on patrol? These games work perfectly in dorm rooms without getting you written up." breadcrumb="Dorm Games" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Classic dorm game" }, { name: "Ride the Bus", slug: "ride-the-bus", description: "Card game perfection" }]}>
      <h2>RA-Proof Games</h2>
      <ul><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> - The dorm classic</li><li><Link href="/game/ride-the-bus" className="text-neon-pink">Ride the Bus</Link> - Quiet card game</li><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Just conversation</li><li><Link href="/game/truth-or-drink" className="text-neon-pink">Truth or Drink</Link> - Keep it down</li></ul>
      <h2>What to Avoid</h2>
      <ul><li>Beer Pong - Too loud, too much space</li><li>Flip Cup - RA magnet</li><li>Anything with yelling</li><li>Games that need standing room</li></ul>
      <h2>Dorm Survival Tips</h2>
      <ul><li>Keep it to 6-8 people max</li><li>Use opaque cups</li><li>Music at reasonable volume</li><li>Know quiet hours</li><li>Have a lookout</li></ul>
    </GuideLayout>
  );
}
