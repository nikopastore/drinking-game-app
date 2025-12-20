import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Bachelor Party Drinking Games (2024) | Stag Do Games",
  description: "Epic drinking games for bachelor parties! Games to embarrass the groom, bond with the boys, and create unforgettable memories.",
  keywords: ["bachelor party drinking games", "stag do games", "bachelor party games", "groom drinking games", "guys night drinking games"],
  openGraph: { title: "Bachelor Party Drinking Games", description: "Send him off in style.", type: "article", url: "https://sipwiki.app/guides/bachelor-party-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/bachelor-party-drinking-games" },
};

export default function BachelorPartyPage() {
  return (
    <GuideLayout title="Best Bachelor Party Drinking Games" description="The last night of freedom deserves legendary games. These will embarrass the groom, bond the group, and create stories you'll tell forever (or never speak of again)." breadcrumb="Bachelor Party Games" relatedGames={[{ name: "Never Have I Ever", slug: "never-have-i-ever", description: "Expose the groom" }, { name: "Most Likely To", slug: "most-likely-to", description: "Roast everyone" }]}>
      <h2>Groom-Focused Games</h2>
      <ul><li><strong>Groom Trivia</strong> - How well does he know his bride?</li><li><strong>Dare List</strong> - Complete challenges throughout the night</li><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Expose his past</li><li><strong>Rate the Groom</strong> - Vote on predictions about married life</li></ul>
      <h2>Group Competition</h2>
      <ul><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link></li><li><Link href="/game/beer-pong" className="text-neon-pink">Beer Pong</Link> tournament</li><li><Link href="/game/rage-cage" className="text-neon-pink">Rage Cage</Link></li><li><Link href="/game/civil-war" className="text-neon-pink">Civil War</Link></li></ul>
      <h2>Tips</h2>
      <ul><li>Pace the groom - he needs to survive</li><li>Document everything (or nothing)</li><li>Have a best man manage the chaos</li><li>End the night, don&apos;t end the groom</li></ul>
    </GuideLayout>
  );
}
