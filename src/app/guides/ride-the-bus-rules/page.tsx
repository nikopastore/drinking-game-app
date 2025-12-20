import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ride the Bus Rules: How to Play This Classic Card Game (2024)",
  description: "Complete Ride the Bus drinking game rules! Learn the 4 rounds, pyramid phase, and how to survive the bus ride. Perfect for 4-8 players.",
  keywords: ["ride the bus rules", "ride the bus drinking game", "card drinking games", "pyramid drinking game", "how to play ride the bus", "bus driver drinking game"],
  openGraph: { title: "Ride the Bus Rules", description: "Master the Ride the Bus drinking game.", type: "article", url: "https://sipwiki.app/guides/ride-the-bus-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/ride-the-bus-rules" },
};

export default function RideTheBusRulesPage() {
  return (
    <GuideLayout
      title="Ride the Bus: Complete Rules & How to Play"
      description="Ride the Bus is a classic card drinking game with multiple rounds of guessing. Wrong guesses mean drinks. The loser 'rides the bus' at the end - and it can be brutal!"
      breadcrumb="Ride the Bus Rules"
      primaryGame={{ name: "Ride the Bus", slug: "ride-the-bus" }}
      relatedGames={[
        { name: "Kings Cup", slug: "kings-cup", description: "Card-based drinking" },
        { name: "Beeramid", slug: "beeramid", description: "Pyramid card game" },
        { name: "Irish Poker", slug: "irish-poker", description: "Guessing card game" },
      ]}
    >
      <h2>What You Need</h2>
      <ul>
        <li><strong>Standard deck of cards</strong></li>
        <li><strong>4-8 players</strong></li>
        <li><strong>Drinks for everyone</strong></li>
      </ul>

      <h2>Round 1: Four Questions</h2>
      <p>Each player answers 4 questions. Wrong = drink!</p>
      <ol>
        <li><strong>Red or Black?</strong> - Guess the card color</li>
        <li><strong>Higher or Lower?</strong> - Than your first card</li>
        <li><strong>Inside or Outside?</strong> - Will it fall between your first two cards?</li>
        <li><strong>Guess the Suit</strong> - Hearts, diamonds, clubs, or spades</li>
      </ol>
      <p>Each wrong answer = 1 drink (some play escalating drinks)</p>

      <h2>Round 2: The Pyramid</h2>
      <ol>
        <li>Build a pyramid: 5 cards on bottom, then 4, 3, 2, 1 on top</li>
        <li>Flip cards row by row from bottom to top</li>
        <li>If you have a matching card, give drinks (bottom row = 1, top = 5)</li>
        <li>You can bluff! But if called out, you drink double</li>
      </ol>

      <h2>Round 3: Ride the Bus</h2>
      <p>The player with the most cards remaining &quot;rides the bus&quot;:</p>
      <ol>
        <li>Lay out 4 cards face down</li>
        <li>Flip them one at a time</li>
        <li>Face card or Ace? Start over from the beginning!</li>
        <li>Make it through all 4 number cards to survive</li>
      </ol>

      <h2>Pro Tips</h2>
      <ul>
        <li>Higher/Lower: Use the middle (7) as your reference</li>
        <li>Bluffing in the pyramid is high risk, high reward</li>
        <li>The bus ride can take forever - pace yourself!</li>
      </ul>

      <p>Play <Link href="/game/ride-the-bus" className="text-neon-pink hover:underline">Ride the Bus</Link> on SipWiki!</p>
    </GuideLayout>
  );
}
