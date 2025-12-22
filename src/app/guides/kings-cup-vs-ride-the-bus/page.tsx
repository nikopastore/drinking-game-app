import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer, ComparisonTable } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kings Cup vs Ride the Bus: Which Card Game to Play? (2024)",
  description: "Kings Cup vs Ride the Bus comparison! Both are classic card drinking games but completely different experiences. Rules, difficulty, drinking pace compared.",
  keywords: ["kings cup vs ride the bus", "ride the bus vs kings cup", "difference between kings cup and ride the bus"],
  openGraph: { title: "Kings Cup vs Ride the Bus Comparison", type: "article", url: "https://sipwiki.app/guides/kings-cup-vs-ride-the-bus" },
  alternates: { canonical: "https://sipwiki.app/guides/kings-cup-vs-ride-the-bus" },
};

export default function KingsCupVsRideTheBusPage() {
  return (
    <GuideLayout
      title="Kings Cup vs Ride the Bus: Complete Comparison"
      description="Both are legendary card drinking games using a standard deck. But they create completely different experiences."
      breadcrumb="Kings Cup vs Ride the Bus"
      relatedGames={[
        { name: "Kings Cup", slug: "kings-cup", description: "Circle of Death" },
        { name: "Ride the Bus", slug: "ride-the-bus", description: "Guessing pyramid game" },
      ]}
    >
      <QuickAnswer
        question="What's the difference between Kings Cup and Ride the Bus?"
        answer="Kings Cup is circle game where each card rank (A-K) has specific rule creating mini-games. Draw 4th King = drink King's Cup (30-60 min, 4-10 players). Ride the Bus is guessing game with 4 rounds (red/black, higher/lower, inside/outside, suit), followed by pyramid. Most cards at end 'rides the bus' in brutal final round (20-40 min, 4-8 players). Kings Cup = social variety, customizable rules. Ride the Bus = tension-building, climactic ending, more skill."
        tips={[
          "Kings Cup = social variety, customizable",
          "Ride the Bus = dramatic guessing game ending",
          "Kings Cup better for 6-10 people",
          "Ride the Bus has more skill/strategy"
        ]}
        variant="primary"
      />

      <ComparisonTable
        title="Kings Cup vs Ride the Bus: Quick Comparison"
        columns={[
          { header: "Feature" },
          { header: "Kings Cup" },
          { header: "Ride the Bus" },
        ]}
        rows={[
          { label: "Players", values: ["", "4-10 (best 6-8)", "4-8 (best 5-7)"] },
          { label: "Game Type", values: ["", "Rule-based circle", "Guessing with pyramid"] },
          { label: "Game Length", values: ["", "30-60 minutes", "20-40 minutes"] },
          { label: "Drinking Pace", values: ["", "Moderate - spread throughout", "Escalating - brutal at end"] },
          { label: "Skill Required", values: ["", "Low - luck + creativity", "Medium - probability helps"] },
          { label: "Social Interaction", values: ["", "Very High - mini-games", "Medium - individual guessing"] },
          { label: "Customization", values: ["", "Highly customizable", "Fixed structure"] },
        ]}
      />

      <h2>The Core Differences</h2>
      <p><strong>Kings Cup:</strong> Cards spread in circle around center King's Cup. Each card rank triggers specific rule/action. Draw King = pour into King's Cup. 4th King = drink it (game ends). Mini-games happen based on card rules (rhymes, categories, waterfall, etc.).</p>
      <p><strong>Ride the Bus:</strong> Four guessing rounds: (1) Red or black, (2) Higher/lower, (3) Inside/outside, (4) Suit. Wrong = take cards. Pyramid phase assigns drinks. Most cards = "ride the bus" - consecutive correct guesses to escape.</p>

      <h2>When to Choose Kings Cup</h2>
      <ul>
        <li>You want variety - every card is different mini-game</li>
        <li>Social interaction matters - group participation</li>
        <li>Customizable house rules</li>
        <li>Larger group (6-10 people)</li>
        <li>Moderate even drinking pace</li>
        <li>Classic everyone knows</li>
      </ul>

      <h2>When to Choose Ride the Bus</h2>
      <ul>
        <li>You want tension building - dramatic pyramid phase</li>
        <li>Memorable brutal ending - riding the bus is legendary</li>
        <li>Strategy appeals - probability knowledge helps</li>
        <li>Smaller focused group (4-6 people)</li>
        <li>Shorter faster-paced game</li>
        <li>Clear winner/loser competitive edge</li>
      </ul>

      <h2>Card Mechanics</h2>
      <p><strong>Kings Cup Rules (Standard):</strong> Ace=Waterfall, 2=You, 3=Me, 4=Floor, 5=Guys, 6=Chicks, 7=Heaven, 8=Mate, 9=Rhyme, 10=Categories, Jack=Rule, Queen=Questions, King=Pour (4th drinks).</p>
      <p><strong>Ride the Bus Rounds:</strong> Round 1 (red/black 50/50), Round 2 (higher/lower), Round 3 (inside/outside), Round 4 (suit 25%), Pyramid (match cards assign drinks), Bus Ride (consecutive guesses clear 8 cards).</p>

      <h2>Drinking Pace</h2>
      <p><strong>Kings Cup:</strong> Moderate steady pace. Everyone drinks fairly evenly via card draws, mini-game penalties, rule violations. One person drinks King's Cup at end. Balanced over 30-60 min.</p>
      <p><strong>Ride the Bus:</strong> Escalating pace. Rounds 1-4 light for wrong guesses. Pyramid moderate. Bus ride = HEAVY drinking for loser. Person riding bus can drink 4-5 drinks in short time. Unbalanced.</p>

      <h2>The Verdict</h2>
      <p><strong>Play Kings Cup for:</strong> Social variety, group mini-games, customizable fun, moderate drinking, larger groups, creative rule-making.</p>
      <p><strong>Play Ride the Bus for:</strong> Dramatic endings, strategic guessing, clear winner/loser, faster games, tension building, spectator moments.</p>

      <p className="mt-8">
        Learn the rules: <Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> | <Link href="/game/ride-the-bus" className="text-neon-pink">Ride the Bus</Link>
      </p>
    </GuideLayout>
  );
}
