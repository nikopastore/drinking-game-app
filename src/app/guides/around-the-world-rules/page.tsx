import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Around the World Drinking Game Rules: Card Guessing (2025 Guide)",
  description: "Around the World drinking game rules! Four card guesses in a row: color, higher/lower, inside/outside, suit. Get all 4 right to give drinks. Complete guide.",
  keywords: [
    "around the world rules",
    "around the world drinking game",
    "card guessing drinking game",
    "four guesses game",
    "easy card drinking games",
    "simple drinking games",
  ],
  openGraph: {
    title: "Around the World Drinking Game Rules",
    description: "The classic four-guess card drinking game.",
    type: "article",
    url: "https://sipwiki.app/guides/around-the-world-rules",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/around-the-world-rules",
  },
};

export default function AroundTheWorldRulesPage() {
  return (
    <GuideLayout
      title="Around the World: The Four Guesses Card Game"
      description="Make four correct guesses in a row about your cards: color, higher/lower, inside/outside, and suit. Wrong guesses mean more drinks. Get all four right and you made it Around the World!"
      breadcrumb="Around the World Rules"
      primaryGame={{ name: "Around the World", slug: "around-the-world" }}
      relatedGames={[
        { name: "Ride the Bus", slug: "ride-the-bus", description: "Similar card guessing" },
        { name: "Irish Poker", slug: "irish-poker", description: "Multi-round card game" },
        { name: "Kings Cup", slug: "kings-cup", description: "Classic card game" },
      ]}
    >
      <QuickAnswer
        question="How do you play Around the World?"
        answer="Make 4 guesses about cards dealt to you: (1) Red or Black, (2) Higher or Lower than the first card, (3) Inside or Outside the first two, (4) Guess the suit. Wrong guesses = drink that round's penalty (1, 2, 3, or 4 drinks). Get all 4 right = give out 10 drinks!"
        tips={[
          "Round 1: Red or Black (1 drink if wrong)",
          "Round 2: Higher or Lower (2 drinks)",
          "Round 3: Inside or Outside (3 drinks)",
          "Round 4: Suit guess (4 drinks)"
        ]}
        variant="primary"
      />

      <h2>What You Need</h2>
      <ul>
        <li>Standard deck of cards</li>
        <li>2+ players</li>
        <li>Drinks for everyone</li>
        <li>A dealer</li>
      </ul>

      <h2>The Four Guesses</h2>

      <h3>Round 1: Red or Black (1 drink)</h3>
      <ul>
        <li>Guess if your first card will be red or black</li>
        <li>Dealer flips your card</li>
        <li><strong>Wrong:</strong> Take 1 drink</li>
        <li><strong>Right:</strong> Move to Round 2</li>
      </ul>

      <h3>Round 2: Higher or Lower (2 drinks)</h3>
      <ul>
        <li>Will your second card be higher or lower than your first?</li>
        <li>Aces are high, 2s are low</li>
        <li>Dealer flips your second card</li>
        <li><strong>Wrong:</strong> Take 2 drinks</li>
        <li><strong>Same value:</strong> Usually counts as wrong (house rule varies)</li>
      </ul>

      <h3>Round 3: Inside or Outside (3 drinks)</h3>
      <ul>
        <li>Will your third card fall BETWEEN your first two or OUTSIDE them?</li>
        <li>Example: If you have 4 and 9, inside = 5-8, outside = 2-3 or 10-A</li>
        <li><strong>Wrong:</strong> Take 3 drinks</li>
        <li><strong>Same as boundary:</strong> Usually counts as wrong</li>
      </ul>

      <h3>Round 4: Suit (4 drinks)</h3>
      <ul>
        <li>Guess the exact suit of your fourth card</li>
        <li>Hearts, Diamonds, Clubs, or Spades</li>
        <li>Only 25% chance of guessing right!</li>
        <li><strong>Wrong:</strong> Take 4 drinks</li>
      </ul>

      <h2>Winning: Made It Around the World!</h2>
      <p>If you correctly guess all four cards:</p>
      <ul>
        <li>You made it "Around the World!"</li>
        <li>Give out 10 drinks to anyone you choose</li>
        <li>Can be split up: 5 to one person, 5 to another, etc.</li>
        <li>Celebrate - this is rare!</li>
      </ul>

      <h2>Probability Check</h2>
      <div className="bg-dark-700 p-4 rounded-lg my-4">
        <ul>
          <li>Round 1 (Color): 50% chance</li>
          <li>Round 2 (Higher/Lower): ~46% average</li>
          <li>Round 3 (In/Out): Varies by spread</li>
          <li>Round 4 (Suit): 25% chance</li>
          <li><strong>All 4 correct:</strong> Roughly 5-8% overall</li>
        </ul>
      </div>

      <h2>Complete Example Round</h2>
      <div className="bg-dark-700 p-4 rounded-lg my-4">
        <p><strong>Player guesses:</strong> "Red"</p>
        <p><strong>Card 1:</strong> 7 of Hearts ✓ (Correct! Continue)</p>
        <p><strong>Player guesses:</strong> "Higher"</p>
        <p><strong>Card 2:</strong> Jack of Spades ✓ (Jack {"> "}7, correct!)</p>
        <p><strong>Player guesses:</strong> "Inside" (between 7 and Jack)</p>
        <p><strong>Card 3:</strong> 9 of Diamonds ✓ (9 is between 7-J!)</p>
        <p><strong>Player guesses:</strong> "Hearts"</p>
        <p><strong>Card 4:</strong> 3 of Clubs ✗ (Wrong - drink 4)</p>
        <p className="text-gray-400 mt-2">So close! Player drinks 4 for the suit miss.</p>
      </div>

      <h2>Turn Progression</h2>
      <ol>
        <li>One player completes all 4 guesses</li>
        <li>Win or lose, turn ends</li>
        <li>Next player clockwise takes their 4 guesses</li>
        <li>Continue around the table</li>
      </ol>

      <h2>Strategy Tips</h2>
      <ul>
        <li><strong>Higher/Lower:</strong> Middle cards (6-8) are safest to call "could go either way"</li>
        <li><strong>Inside/Outside:</strong> Wider spreads = more likely "inside"</li>
        <li><strong>Suit:</strong> Pure luck - just guess confidently!</li>
        <li>Pay attention to cards already played if using same deck</li>
      </ul>

      <h2>Common Variations</h2>
      <ul>
        <li><strong>Double penalties:</strong> Wrong = 2, 4, 6, 8 drinks instead</li>
        <li><strong>Give instead:</strong> Correct guess = give drinks instead of avoiding them</li>
        <li><strong>Waterfall:</strong> Get all 4 right = start a waterfall</li>
        <li><strong>Cumulative:</strong> Don't reset between rounds - drinks stack</li>
      </ul>

      <h2>Common House Rules</h2>
      <ul>
        <li><strong>Same card value:</strong> Some count as wrong, some as a social (everyone drinks)</li>
        <li><strong>Boundary on inside/outside:</strong> Landing exactly on the boundary = drink double</li>
        <li><strong>Aces:</strong> Can be high or low (player calls before)</li>
      </ul>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Play Around the World on SipWiki</h3>
        <Link
          href="/games/around-the-world"
          className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
        >
          Around the World Game Page →
        </Link>
      </div>
    </GuideLayout>
  );
}
