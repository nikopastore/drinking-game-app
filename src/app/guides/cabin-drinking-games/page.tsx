import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cabin Drinking Games (2024) | Weekend Getaway Games",
  description: "Best drinking games for cabin trips! Perfect for weekend getaways, ski trips, and cabin parties with friends.",
  keywords: ["cabin drinking games", "cabin trip games", "weekend getaway drinking games", "cabin party games", "ski trip drinking games"],
  openGraph: { title: "Cabin Drinking Games", description: "Cabin vibes!", type: "article", url: "https://sipwiki.app/guides/cabin-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/cabin-drinking-games" },
};

export default function CabinDrinkingGamesPage() {
  return (
    <GuideLayout title="Cabin Drinking Games" description="Weekend cabin trip? Whether it's a ski lodge or lakeside retreat, these games are perfect for cozy nights with friends." breadcrumb="Cabin Games" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Fireside classic" }, { name: "Ride the Bus", slug: "ride-the-bus", description: "Evening entertainment" }]}>
      <h2>Fireside Games</h2>
      <ul><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> - The cabin essential</li><li><Link href="/game/ride-the-bus" className="text-neon-pink">Ride the Bus</Link> - Gets intense</li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Around the fire</li></ul>
      <h2>Active Cabin Games</h2>
      <ul><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> - Kitchen table</li><li><Link href="/game/rage-cage" className="text-neon-pink">Rage Cage</Link> - High energy</li><li>Giant outdoor Jenga</li></ul>
      <h2>Cabin Weekend Tips</h2>
      <ul><li>Buy drinks before you arrive</li><li>Bring board games as backups</li><li>Stock up - stores may be far</li><li>Pace yourself - it&apos;s a marathon</li><li>Assign cleanup duties</li></ul>
    </GuideLayout>
  );
}
