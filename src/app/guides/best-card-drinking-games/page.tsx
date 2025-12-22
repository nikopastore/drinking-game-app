import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Best Card Drinking Games (2024) | Games with a Deck of Cards",
  description: "The best drinking games you can play with just a deck of cards! From Kings Cup to Ride the Bus, complete rules and strategies for every card game classic.",
  keywords: ["card drinking games", "drinking games with cards", "deck of cards drinking games", "best card games for drinking", "poker drinking games", "kings cup", "ride the bus"],
  openGraph: { title: "15 Best Card Drinking Games", description: "All you need is a deck of cards.", type: "article", url: "https://sipwiki.app/guides/best-card-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/best-card-drinking-games" },
};

export default function BestCardDrinkingGamesPage() {
  return (
    <GuideLayout title="15 Best Card Drinking Games" description="A standard deck of cards is the ultimate drinking game toolkit - portable, cheap, and capable of endless game variations. Here's your complete guide to mastering card-based drinking games." breadcrumb="Card Drinking Games" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "The classic" }, { name: "Ride the Bus", slug: "ride-the-bus", description: "Guessing game" }, { name: "Beeramid", slug: "beeramid", description: "Bluffing pyramid" }]}>
      <QuickAnswer
        question="What are the best drinking games with cards?"
        answer="Top card drinking games: (1) Kings Cup - card circle game where each rank has a rule, 4th King drinks the center cup, (2) Ride the Bus - guess card properties through 4 rounds, loser 'rides the bus', (3) Beeramid - pyramid bluffing game, (4) Fuck the Dealer - guess the card value, (5) Irish Poker - red/black guessing game. All you need is a standard 52-card deck. Kings Cup is most popular for groups of 4-10. Ride the Bus works best for 4-8 players."
        tips={[
          "Waterproof plastic cards last longer for drinking games",
          "Kings Cup is the most popular card game",
          "Learn 3-4 games and you're set for any party",
          "Cards are portable - fits in any pocket"
        ]}
        variant="primary"
      />

      <h2>Why a Deck of Cards Is All You Need</h2>
      <p>Cards have been the backbone of drinking games for centuries, and for good reason:</p>
      <ul>
        <li><strong>Portability</strong> - Fits in any pocket, bag, or jacket</li>
        <li><strong>Cost</strong> - $3 for endless entertainment</li>
        <li><strong>Versatility</strong> - One deck, dozens of different games</li>
        <li><strong>Built-in randomness</strong> - Shuffling creates unpredictable gameplay</li>
        <li><strong>Universal</strong> - Everyone knows basic card mechanics</li>
      </ul>

      <h2>The Essential Card Games (Master These First)</h2>

      <h3>Kings Cup (Circle of Death)</h3>
      <p>The definitive card drinking game. Cards spread in a circle around a center cup. Each card rank triggers a specific rule or action. Draw a King = pour into the King&apos;s Cup. Draw the fourth King = drink the King&apos;s Cup.</p>
      <p><strong>Why it works:</strong> Combines memory, social interaction, and mini-games into one. Every card creates action. Never boring.</p>
      <p><strong>Best for:</strong> 4-10 players, medium energy, 30-60 minutes</p>
      <p><Link href="/game/kings-cup" className="text-neon-pink">Full Kings Cup rules →</Link></p>

      <h3>Ride the Bus</h3>
      <p>Four rounds of guessing card properties (red/black, higher/lower, inside/outside, suit). Build a pyramid. Whoever has the most cards at the end &quot;rides the bus&quot; - a brutal final round of consecutive correct guesses.</p>
      <p><strong>Why it works:</strong> The tension builds throughout. The bus ride ending creates dramatic moments. Skill matters but luck can save you.</p>
      <p><strong>Best for:</strong> 4-8 players, medium-high energy, 20-40 minutes</p>
      <p><Link href="/game/ride-the-bus" className="text-neon-pink">Full Ride the Bus rules →</Link></p>

      <h3>Beeramid</h3>
      <p>Build a pyramid of face-down cards. Players get dealt hands. Flip pyramid cards one by one - if you have a matching card (or claim to), assign drinks. But you can bluff, and if called out, YOU drink double.</p>
      <p><strong>Why it works:</strong> Bluffing adds psychology. Do they have it or not? The stakes increase as you climb the pyramid.</p>
      <p><strong>Best for:</strong> 4-8 players, high energy, 20-30 minutes</p>
      <p><Link href="/game/beeramid" className="text-neon-pink">Full Beeramid rules →</Link></p>

      <h2>Guessing Games</h2>
      <p>These games test your intuition (and luck):</p>

      <h3>Fuck the Dealer</h3>
      <p>Guess the card value. Wrong = drink the difference. Dealer must give away card if guessed within 3. Three wrong guesses in a row = next person becomes dealer. Being the dealer sucks (hence the name).</p>
      <p><strong>Pro tip:</strong> Count cards to narrow down possibilities. Later rounds become more predictable.</p>
      <p><Link href="/game/fuck-the-dealer" className="text-neon-pink">Full Fuck the Dealer rules →</Link></p>

      <h3>Irish Poker</h3>
      <p>Four face-down cards per player. Guess: red/black, higher/lower, inside/outside, suit. Wrong = drink. Then a give phase where you assign drinks to others. Simple but effective.</p>
      <p><strong>Best for:</strong> Quick rounds, 4-6 players</p>
      <p><Link href="/game/irish-poker" className="text-neon-pink">Full Irish Poker rules →</Link></p>

      <h3>Higher or Lower</h3>
      <p>The simplest card drinking game. Flip a card. Guess if the next is higher or lower. Wrong = drink. Chain correct guesses for bonus points or dare privileges.</p>
      <p><strong>Best for:</strong> Beginners, couples, casual settings</p>

      <h2>Betting & Racing Games</h2>

      <h3>Horse Race</h3>
      <p>Four Aces are &quot;horses&quot; lined up. Players bet drinks on a suit. Flip cards from the deck - that suit&apos;s horse moves forward. First to cross the finish line wins. Losers drink their bets, winner assigns drinks.</p>
      <p><strong>Why it works:</strong> Creates spectator excitement. Everyone watches the same race. Betting adds investment.</p>
      <p><Link href="/game/horse-race" className="text-neon-pink">Full Horse Race rules →</Link></p>

      <h3>Across the Bridge</h3>
      <p>Ten cards laid out as a bridge. Flip cards one by one. Number card = safe, move forward. Face card = drink and add replacement cards. Must cross the entire bridge to win.</p>
      <p><strong>Why it works:</strong> The bridge can extend indefinitely. Some unlucky players get trapped.</p>
      <p><Link href="/guides/across-the-bridge-rules" className="text-neon-pink">Full Across the Bridge rules →</Link></p>

      <h2>Social Card Games</h2>

      <h3>Around the World</h3>
      <p>Four cards face down. Guess properties sequentially. Get all four right = &quot;make it around the world&quot; and assign 4 drinks. Get any wrong = drink and start over.</p>

      <h3>President (Asshole)</h3>
      <p>Shedding game where card rank determines who drinks. President makes rules, Asshole does grunt work. Social hierarchy creates drama and trash talk. A party favorite that can go for hours.</p>

      <h2>Quick Reference: Games by Situation</h2>
      <ul>
        <li><strong>First time playing together:</strong> Kings Cup, Higher/Lower</li>
        <li><strong>Want bluffing/strategy:</strong> Beeramid, Fuck the Dealer</li>
        <li><strong>High intensity:</strong> Ride the Bus, Beeramid</li>
        <li><strong>Large group (8+):</strong> Kings Cup, Horse Race, President</li>
        <li><strong>Small group (3-4):</strong> Irish Poker, Ride the Bus</li>
        <li><strong>Low-key night:</strong> Higher/Lower, Around the World</li>
      </ul>

      <h2>Card Game Hosting Tips</h2>
      <ul>
        <li><strong>Use plastic-coated cards</strong> - They survive spills better</li>
        <li><strong>Have 2 decks</strong> - One for play, one as backup</li>
        <li><strong>Agree on rules first</strong> - House rules vary wildly</li>
        <li><strong>Rotate dealers/starters</strong> - Some games disadvantage specific positions</li>
        <li><strong>Keep drinks off the play surface</strong> - Soggy cards end games early</li>
      </ul>

      <h2>Card Care Tips</h2>
      <ul>
        <li>Wipe down cards between games</li>
        <li>Store in a dry place</li>
        <li>Replace marked or bent cards</li>
        <li>Consider a dedicated &quot;drinking game deck&quot; separate from your nice cards</li>
      </ul>

      <p>Browse all <Link href="/games/card-games" className="text-neon-pink hover:underline">card drinking games</Link> or find games by <Link href="/games" className="text-neon-pink hover:underline">category</Link>.</p>
    </GuideLayout>
  );
}
