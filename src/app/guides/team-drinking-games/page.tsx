import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Team Drinking Games (2024) | Group Competition Games",
  description: "Team-based drinking games for group competition! Divide and conquer with these games that pit teams against each other.",
  keywords: ["team drinking games", "group drinking games", "team competition drinking", "drinking games teams", "relay drinking games"],
  openGraph: { title: "Team Drinking Games", description: "Compete as a team!", type: "article", url: "https://sipwiki.app/guides/team-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/team-drinking-games" },
};

export default function TeamGamesPage() {
  return (
    <GuideLayout title="Best Team Drinking Games" description="Nothing builds camaraderie like competing together! These team games create instant rivalries and unforgettable moments." breadcrumb="Team Games" relatedGames={[{ name: "Flip Cup", slug: "flip-cup", description: "Classic relay" }, { name: "Civil War", slug: "civil-war", description: "Team beer pong" }]}>
      <h2>Best Team Games</h2>
      <ul><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> - The ultimate team relay</li><li><Link href="/game/civil-war" className="text-neon-pink">Civil War</Link> - 3v3 beer pong chaos</li><li><Link href="/game/beer-pong" className="text-neon-pink">Beer Pong</Link> - 2v2 classic</li><li><Link href="/game/vietnam-war" className="text-neon-pink">Vietnam War</Link> - Asymmetric teams</li><li><Link href="/game/baseball" className="text-neon-pink">Baseball</Link> - Full innings</li></ul>
      <h2>Team Building Tips</h2>
      <ul><li>Mix skill levels on each team</li><li>Rotate teammates between games</li><li>Create team names and chants</li><li>Keep score for tournament style</li></ul>
    </GuideLayout>
  );
}
