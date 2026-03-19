import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Beer Drinking Games (2024) | Games for Beer Lovers",
  description: "The best drinking games for beer! Classic games designed for beer, from Beer Pong to Flip Cup. Perfect pacing for a long night.",
  keywords: ["beer drinking games", "beer games", "beer pong", "games for beer", "drinking games with beer", "beer party games"],
  openGraph: { title: "Best Beer Drinking Games", description: "Games made for beer.", type: "article", url: "https://sipwiki.app/guides/beer-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/beer-drinking-games" },
};

export default function BeerGamesPage() {
  return (
    <GuideLayout title="Best Beer Drinking Games" description="Beer is the classic drinking game fuel. These games are perfectly paced for beer - you can play all night without going overboard." breadcrumb="Beer Games" relatedGames={[{ name: "Beer Pong", slug: "beer-pong", description: "The king" }, { name: "Flip Cup", slug: "flip-cup", description: "Team racing" }]}>
      <QuickAnswer
        question="What are the best drinking games for beer?"
        answer="Best beer drinking games: (1) Beer Pong - 2v2 classic with 10 cups each, (2) Flip Cup - team relay race, (3) Rage Cage - elimination with bouncing, (4) Power Hour - 60 shots of beer in 60 minutes, (5) Quarters - bounce coin into shot glass. Beer works best because lower ABV = longer games, easier pacing, and carbonation naturally slows drinking. Use light lagers or cheap domestics. Avoid heavy stouts/IPAs for games. Cold beer is essential."
        tips={[
          "Light lagers = best for all-night gaming",
          "Lower ABV means you can play longer",
          "Cheap domestics work fine for Beer Pong",
          "Always keep beer cold in coolers"
        ]}
        variant="primary"
      />

      <h2>Essential Beer Games</h2>
      <ul><li><Link href="/games/beer-pong" className="text-neon-pink">Beer Pong</Link> - The undisputed champion</li><li><Link href="/games/flip-cup" className="text-neon-pink">Flip Cup</Link> - Perfect for teams</li><li><Link href="/games/rage-cage" className="text-neon-pink">Rage Cage</Link> - Intense cup action</li><li><Link href="/games/power-hour" className="text-neon-pink">Power Hour</Link> - 60 shots of beer</li></ul>
      <h2>Why Beer Works Best</h2>
      <ul><li>Lower ABV = longer games</li><li>Easier to pace yourself</li><li>Carbonation slows drinking</li><li>Classic game fuel</li></ul>
      <h2>Best Beers for Games</h2>
      <ul><li>Light lagers (easy drinking)</li><li>Cheap domestics (it&apos;s going in cups anyway)</li><li>Avoid heavy stouts or IPAs</li><li>Cold is essential</li></ul>
      <p>Browse all <Link href="/games/beer-games" className="text-neon-pink hover:underline">beer games</Link>!</p>
    </GuideLayout>
  );
}
