import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Horse Race Drinking Game Rules: Card Betting Game (2025 Guide)",
  description: "Horse Race drinking game rules! Bet on which suit will win the race. Watch the Aces race down the track. Losers drink their bet! Complete setup and rules.",
  keywords: [
    "horse race rules",
    "horse race drinking game",
    "card betting drinking game",
    "ace race drinking game",
    "group drinking games",
    "party card games",
  ],
  openGraph: {
    title: "Horse Race Drinking Game Rules",
    description: "The betting card race drinking game.",
    type: "article",
    url: "https://sipwiki.app/guides/horse-race-rules",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/horse-race-rules",
  },
};

export default function HorseRaceRulesPage() {
  return (
    <GuideLayout
      title="Horse Race: The Card Betting Drinking Game"
      description="Four Aces race down a track of cards. Players bet drinks on which suit will win. Losers drink their bet; winners assign drinks. It's Derby Day for drinkers!"
      breadcrumb="Horse Race Rules"
      primaryGame={{ name: "Horse Race", slug: "horse-race" }}
      relatedGames={[
        { name: "Kings Cup", slug: "kings-cup", description: "Classic card game" },
        { name: "Beeramid", slug: "beeramid", description: "Card pyramid game" },
        { name: "Ride the Bus", slug: "ride-the-bus", description: "Card guessing" },
      ]}
    >
      <QuickAnswer
        question="How do you play Horse Race?"
        answer="Remove the 4 Aces (horses) and lay them at the starting line. Create a track of 6-10 face-down cards. Players bet drinks on a suit. Flip deck cards one by one - each suit's Ace moves forward when that suit appears. First Ace to finish the track wins! Winners give out their bet; losers drink theirs."
        tips={[
          "4 Aces race as 'horses'",
          "Bet 1-5 drinks on a suit",
          "Flip cards to move horses forward",
          "Winner gives drinks, losers take drinks"
        ]}
        variant="primary"
      />

      <h2>What You Need</h2>
      <ul>
        <li>Standard deck of cards</li>
        <li>3-10 players</li>
        <li>A dealer/announcer</li>
        <li>Drinks for everyone</li>
        <li>Table space for the track</li>
      </ul>

      <h2>Setup</h2>
      <ol>
        <li>Remove all four Aces from the deck</li>
        <li>Lay the Aces in a horizontal row (the starting line)</li>
        <li>Create a vertical track of 6-10 face-down cards next to the Aces</li>
        <li>The remaining deck goes to the dealer</li>
      </ol>

      <div className="bg-dark-700 p-4 rounded-lg my-4 font-mono text-sm">
        <p className="text-neon-pink mb-2">Track Layout:</p>
        <p>A♠  A♥  A♦  A♣  ← Starting Line (horses)</p>
        <p>[ ][ ][ ][ ][ ] ← Track cards (face-down)</p>
        <p>[ ][ ][ ][ ][ ]</p>
        <p>FINISH LINE</p>
      </div>

      <h2>Place Your Bets</h2>
      <ul>
        <li>Before the race, everyone bets 1-5 drinks on a suit</li>
        <li>Example: "I bet 3 drinks on Hearts"</li>
        <li>Multiple people can bet on the same suit</li>
        <li>Higher bets = higher risk/reward</li>
      </ul>

      <h2>Running the Race</h2>
      <ol>
        <li>Dealer flips cards from the remaining deck one at a time</li>
        <li>When a card is flipped, that suit's Ace moves forward one space</li>
        <li>Example: Flip a 7 of Spades → Ace of Spades moves up one</li>
        <li>Dealer can announce like a race: "And Spades takes the lead!"</li>
        <li>First Ace to pass the final track card WINS!</li>
      </ol>

      <h2>Payouts</h2>

      <h3>If Your Horse Wins</h3>
      <ul>
        <li>Assign your bet amount to other players</li>
        <li>Can split drinks: "2 to Mike, 1 to Sarah"</li>
        <li>Celebrate your victory!</li>
      </ul>

      <h3>If Your Horse Loses</h3>
      <ul>
        <li>Drink your bet amount</li>
        <li>Last place horse = extra penalty (3 drinks) in some versions</li>
      </ul>

      <h2>Optional: Stumble Cards</h2>
      <p>Make it more exciting with stumble cards:</p>
      <ul>
        <li>When an Ace reaches a new track card row, flip that track card</li>
        <li>Whatever suit is revealed moves BACK one space</li>
        <li>Creates comebacks and upsets!</li>
      </ul>

      <h2>Announcer Tips</h2>
      <ul>
        <li>Build excitement: "Hearts is coming around the bend!"</li>
        <li>Call out lead changes: "DIAMONDS TAKES THE LEAD!"</li>
        <li>Photo finish moments: "It's neck and neck!"</li>
        <li>The announcer makes the game 10x more fun</li>
      </ul>

      <h2>Strategy Tips</h2>
      <ul>
        <li>Each suit has 13 cards total, so odds are theoretically equal</li>
        <li>Early leads can evaporate fast</li>
        <li>Betting low (1-2) is safer for longer games</li>
        <li>Betting high (4-5) is fun for one-offs</li>
      </ul>

      <h2>Common Variations</h2>
      <ul>
        <li><strong>Longer track:</strong> 10+ cards for longer races</li>
        <li><strong>Shot stakes:</strong> Bet shots instead of sips</li>
        <li><strong>Double down:</strong> Increase bet mid-race for double penalty</li>
        <li><strong>Elimination:</strong> Last place each race is out until final</li>
        <li><strong>Kentucky Derby:</strong> Run 3 races, best overall record wins</li>
      </ul>

      <h2>Multiple Races</h2>
      <p>For a full "race night":</p>
      <ul>
        <li>Run 5-10 races</li>
        <li>Track total drinks given vs received</li>
        <li>Player with best ratio wins overall</li>
        <li>Loser overall takes a penalty shot</li>
      </ul>

      <h2>Why Horse Race Is Great</h2>
      <ul>
        <li>Everyone plays simultaneously</li>
        <li>Great for large groups</li>
        <li>Creates natural excitement and cheering</li>
        <li>Fast rounds - race takes 2-3 minutes</li>
        <li>Easy to explain to new players</li>
      </ul>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Play Horse Race on SipWiki</h3>
        <Link
          href="/games/horse-race"
          className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
        >
          Horse Race Game Page →
        </Link>
      </div>
    </GuideLayout>
  );
}
