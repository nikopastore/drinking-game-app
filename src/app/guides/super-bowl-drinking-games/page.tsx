import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Super Bowl Drinking Games (2024) | Football Watching Games",
  description: "Make the Super Bowl even more exciting with these drinking games! Drink for touchdowns, commercials, and halftime show moments.",
  keywords: ["super bowl drinking games", "football drinking games", "super bowl party games", "nfl drinking games", "watching football drinking game"],
  openGraph: { title: "Super Bowl Drinking Games", description: "Game day, drink day!", type: "article", url: "https://sipwiki.app/guides/super-bowl-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/super-bowl-drinking-games" },
};

export default function SuperBowlPage() {
  return (
    <GuideLayout title="Super Bowl Drinking Games" description="The biggest game deserves the biggest party. These drinking games sync with the action on screen and keep everyone engaged - even non-football fans." breadcrumb="Super Bowl Games" relatedGames={[{ name: "Most Likely To", slug: "most-likely-to", description: "Halftime fun" }, { name: "Flip Cup", slug: "flip-cup", description: "Commercial break" }]}>
      <h2>Game Action Drinks</h2>
      <ul><li><strong>Touchdown</strong> - Your team scores, opponents drink</li><li><strong>Field Goal</strong> - Everyone takes a sip</li><li><strong>Interception</strong> - Offense fans finish their drink</li><li><strong>Flag</strong> - Everyone drinks</li><li><strong>Challenge</strong> - Drink during review</li></ul>
      <h2>Commercial Drinks</h2>
      <ul><li>Drink for every celebrity cameo</li><li>Drink for car commercials</li><li>Drink for beer commercials (obviously)</li><li>Drink for movie trailers</li></ul>
      <h2>Halftime Games</h2>
      <ul><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> tournament</li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link></li><li>Prediction drinks - who called the score?</li></ul>
    </GuideLayout>
  );
}
