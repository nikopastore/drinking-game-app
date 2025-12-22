import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer, ComparisonTable } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beer Pong vs Chandelier: Which Game Should You Play? (2024)",
  description: "Beer Pong vs Chandelier comparison! Rules, difficulty, party size, and which game is better for your party. Both are classic ball-and-cup games with different vibes.",
  keywords: ["beer pong vs chandelier", "chandelier vs beer pong", "difference between beer pong and chandelier"],
  openGraph: { title: "Beer Pong vs Chandelier Comparison", type: "article", url: "https://sipwiki.app/guides/beer-pong-vs-chandelier" },
  alternates: { canonical: "https://sipwiki.app/guides/beer-pong-vs-chandelier" },
};

export default function BeerPongVsChandelierPage() {
  return (
    <GuideLayout
      title="Beer Pong vs Chandelier: Complete Comparison"
      description="Both are legendary ball-and-cup drinking games involving precision throws and drinking penalties. But they create completely different party experiences."
      breadcrumb="Beer Pong vs Chandelier"
      relatedGames={[
        { name: "Beer Pong", slug: "beer-pong", description: "2v2 throwing classic" },
        { name: "Chandelier", slug: "chandelier", description: "Circle bouncing game" },
      ]}
    >
      <QuickAnswer
        question="What's the difference between Beer Pong and Chandelier?"
        answer="Beer Pong is 2v2 teams throwing balls into 10 cups each, eliminating opponent's cups until one team wins (15-30 min). Chandelier is circle game where players bounce a ball at center cup surrounded by individual cups - hit center and everyone races to flip (5-10 min rounds). Beer Pong = team competition, strategy, longer games. Chandelier = fast elimination, 6-12 players, sudden death flips. Choose Beer Pong for competitive 2v2 tournaments. Choose Chandelier for larger groups."
        tips={[
          "Beer Pong = competitive 2v2, 15-30 min",
          "Chandelier = 6-12 players, 5-10 min rounds",
          "Beer Pong needs 8ft table",
          "Chandelier better for quick player rotation"
        ]}
        variant="primary"
      />

      <ComparisonTable
        title="Beer Pong vs Chandelier: Quick Comparison"
        columns={[
          { header: "Feature" },
          { header: "Beer Pong" },
          { header: "Chandelier" },
        ]}
        rows={[
          { label: "Players", values: ["", "4 (2v2 teams)", "6-12 (circle)"] },
          { label: "Game Length", values: ["", "15-30 minutes", "5-10 minutes"] },
          { label: "Space Needed", values: ["", "8-foot table", "Large table/floor space"] },
          { label: "Skill Type", values: ["", "Throwing accuracy", "Bouncing + flipping speed"] },
          { label: "Strategy", values: ["", "High - targeting, defense", "Medium - cup selection"] },
          { label: "Tournament Friendly", values: ["", "Excellent - brackets", "Good - quick rounds"] },
          { label: "Party Size", values: ["", "Better for 4-8 (2v2 + spectators)", "Better for 8-15 (all playing)"] },
        ]}
      />

      <h2>The Core Differences</h2>
      <p><strong>Beer Pong:</strong> Two teams of 2. 10 cups per side in triangle formation. Throw balls to eliminate opponent cups. First team to clear wins. Comeback mechanics with re-racks and redemption shots.</p>
      <p><strong>Chandelier:</strong> 6-12 players in circle around table. Each player has a cup. Center "chandelier" cup sits in middle. Bounce ball into your cup or the chandelier. Hit chandelier = everyone flips their cup. Last to flip = eliminated or drinks penalty.</p>

      <h2>When to Choose Beer Pong</h2>
      <ul>
        <li>Competitive 2v2 team play</li>
        <li>Running organized tournaments with brackets</li>
        <li>Smaller party (4-8 people)</li>
        <li>You have 8-foot table</li>
        <li>Longer strategic games preferred (15-30 min)</li>
        <li>Classic party game everyone knows</li>
      </ul>

      <h2>When to Choose Chandelier</h2>
      <ul>
        <li>Larger group (8-15 people all playing)</li>
        <li>Want quick rounds (5-10 min)</li>
        <li>High energy party atmosphere</li>
        <li>Flip races create dramatic moments</li>
        <li>Less space available (works on kitchen table)</li>
        <li>New players who find Beer Pong intimidating</li>
      </ul>

      <h2>Skill Comparison</h2>
      <p><strong>Beer Pong Skills:</strong> Throwing accuracy from 6-8 feet, arc calculation, strategic cup targeting, bounce shots, pressure management, teamwork.</p>
      <p><strong>Chandelier Skills:</strong> Bouncing accuracy, quick decision making (own cup vs chandelier), cup flipping speed, reading bounces, risk assessment.</p>

      <h2>Party Atmosphere</h2>
      <p><strong>Beer Pong creates:</strong> Competitive team energy, trash talk, spectator loyalties, long tension builds, dramatic comebacks, tournament vibes.</p>
      <p><strong>Chandelier creates:</strong> Chaos energy, everyone yelling during flip races, quick eliminations, constant player rotation, the "chandelier moment" when center cup is hit and table explodes.</p>

      <h2>The Verdict</h2>
      <p><strong>Play Beer Pong for:</strong> Competitive 2v2, strategic depth, tournament brackets, longer games, moderate drinking pace, classic recognition.</p>
      <p><strong>Play Chandelier for:</strong> More players involved, quick high-energy rounds, dramatic flip moments, easy for beginners, player rotation.</p>

      <p className="mt-8">
        Learn the rules: <Link href="/game/beer-pong" className="text-neon-pink">Beer Pong</Link> | <Link href="/game/chandelier" className="text-neon-pink">Chandelier</Link>
      </p>
    </GuideLayout>
  );
}
