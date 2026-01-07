import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ride the Bus Rules: Complete Guide to This Classic Card Game | SipWiki",
  description: "Complete Ride the Bus drinking game rules with all 3 rounds explained. Learn the guessing phase, pyramid phase, and brutal bus ride. Perfect for 4-8 players.",
  keywords: ["ride the bus rules", "ride the bus drinking game", "card drinking games", "pyramid drinking game", "how to play ride the bus", "bus driver drinking game", "ride the bus card game"],
  openGraph: { title: "Ride the Bus Rules: Complete Guide", description: "Master the Ride the Bus drinking game with our complete rules guide.", type: "article", url: "https://sipwiki.app/guides/ride-the-bus-rules" },
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
      <QuickAnswer
        question="How do you play Ride the Bus?"
        answer="Ride the Bus is a card drinking game with 3 rounds. Round 1: Each player answers 4 questions (Red/Black? Higher/Lower? Inside/Outside? Suit?) - wrong = drink. Round 2: Pyramid - dealer builds 5-4-3-2-1 card pyramid. Flip cards bottom to top, match your cards to give drinks (row # = drink count). Round 3: Player with most cards 'rides the bus' - flip 4 cards one by one. Face card or Ace? Start over! Make it through all 4 number cards to escape. Perfect for 4-8 players."
        tips={[
          "Higher/Lower: Cards 2-7 guess higher, 8-A guess lower",
          "Pyramid bluffing is risky but can save drinks",
          "The bus ride can take 10+ attempts - brutal!",
          "Some play escalating drinks (1,2,3,4 for each round)"
        ]}
        variant="primary"
      />

      <h2>What You Need to Play</h2>
      <ul>
        <li><strong>1-2 standard decks of cards</strong> (1 deck for 4-6 players, 2 for larger groups)</li>
        <li><strong>4-8 players</strong> (ideal group size)</li>
        <li><strong>Drinks for everyone</strong></li>
        <li><strong>A flat surface</strong> for the pyramid</li>
      </ul>

      <h2>Game Overview</h2>
      <p>Ride the Bus has three distinct phases:</p>
      <ol>
        <li><strong>The Guessing Round</strong> - Build your hand by guessing correctly</li>
        <li><strong>The Pyramid Round</strong> - Give and receive drinks based on matching cards</li>
        <li><strong>The Bus Ride</strong> - The loser faces a brutal final challenge</li>
      </ol>

      <h2>Round 1: The Four Questions</h2>
      <p>The dealer goes around the table asking each player four questions. For each question, a card is dealt. Wrong answers mean you drink!</p>

      <h3>Question 1: Red or Black?</h3>
      <p>Guess whether your first card will be red (hearts/diamonds) or black (spades/clubs).</p>
      <ul>
        <li><strong>Correct:</strong> No drinks, keep the card</li>
        <li><strong>Wrong:</strong> Take 1 drink</li>
      </ul>

      <h3>Question 2: Higher or Lower?</h3>
      <p>Will your second card be higher or lower than your first? (Aces are high)</p>
      <ul>
        <li><strong>Correct:</strong> No drinks, keep the card</li>
        <li><strong>Wrong:</strong> Take 2 drinks</li>
        <li><strong>Same value:</strong> Automatic wrong - take 2 drinks</li>
      </ul>
      <p><strong>Pro tip:</strong> If your first card is 7, you have the worst odds. Cards 2-6 guess higher. Cards 8-A guess lower.</p>

      <h3>Question 3: Inside or Outside?</h3>
      <p>Will your third card fall inside or outside the range of your first two cards?</p>
      <ul>
        <li><strong>Inside:</strong> Between your two card values</li>
        <li><strong>Outside:</strong> Lower than both or higher than both</li>
        <li><strong>Correct:</strong> No drinks</li>
        <li><strong>Wrong:</strong> Take 3 drinks</li>
        <li><strong>On the post (same as either):</strong> Take 3 drinks</li>
      </ul>
      <p><strong>Example:</strong> If you have a 4 and a Jack, inside would be 5-10, outside would be 2-3 or Queen-Ace.</p>

      <h3>Question 4: Guess the Suit</h3>
      <p>Guess the suit of your fourth card (hearts, diamonds, clubs, or spades).</p>
      <ul>
        <li><strong>Correct:</strong> No drinks</li>
        <li><strong>Wrong:</strong> Take 4 drinks</li>
      </ul>
      <p>This is pure luck - 25% chance of being right!</p>

      <h2>Round 2: The Pyramid</h2>
      <p>After everyone has 4 cards, the dealer builds a pyramid face-down:</p>
      <ul>
        <li><strong>Row 1 (bottom):</strong> 5 cards - worth 1 drink each</li>
        <li><strong>Row 2:</strong> 4 cards - worth 2 drinks each</li>
        <li><strong>Row 3:</strong> 3 cards - worth 3 drinks each</li>
        <li><strong>Row 4:</strong> 2 cards - worth 4 drinks each</li>
        <li><strong>Row 5 (top):</strong> 1 card - worth 5 drinks</li>
      </ul>

      <h3>How the Pyramid Works</h3>
      <ol>
        <li>Dealer flips pyramid cards one at a time, starting from the bottom row</li>
        <li>If you have a matching card (same value), you can give drinks equal to that row</li>
        <li>Place your matching card face-down on the pyramid to claim it</li>
        <li>You can split drinks between multiple people</li>
        <li>If you have multiple matching cards, you give drinks for each one!</li>
      </ol>

      <h3>Bluffing in the Pyramid</h3>
      <p>The spicy part: you can BLUFF! Place any card face-down and claim it matches.</p>
      <ul>
        <li><strong>No one calls your bluff:</strong> You give the drinks, card stays face-down</li>
        <li><strong>Someone calls your bluff and you&apos;re lying:</strong> You drink DOUBLE</li>
        <li><strong>Someone calls your bluff and you&apos;re honest:</strong> THEY drink double</li>
      </ul>
      <p><strong>Strategy:</strong> Bluffing on the top rows is high-risk, high-reward. 5 drinks vs. 10 drinks for getting caught!</p>

      <h2>Round 3: Riding the Bus</h2>
      <p>The player with the most cards remaining after the pyramid phase &quot;rides the bus.&quot; If there&apos;s a tie, the player with the highest card value rides (or you can have all tied players ride).</p>

      <h3>How to Ride the Bus</h3>
      <ol>
        <li>Dealer lays out 4 cards face-down in a row</li>
        <li>Bus rider flips cards one at a time, left to right</li>
        <li><strong>Number card (2-10):</strong> Move to the next card</li>
        <li><strong>Face card (J, Q, K) or Ace:</strong> Take a drink and START OVER from the beginning</li>
        <li>The dealer replenishes any flipped cards with new ones</li>
      </ol>

      <h3>Surviving the Bus</h3>
      <p>You must flip 4 number cards IN A ROW to escape the bus. Face cards and Aces reset you!</p>
      <p><strong>The math is brutal:</strong> There are 36 number cards and 16 face/Ace cards in a deck. That&apos;s about a 31% chance of hitting a face card each flip. The probability of making it through all 4 on your first try is only about 23%!</p>
      <p>Some games see bus riders going 10, 15, even 20+ rounds before escaping. Pace yourself!</p>

      <h2>Variations & House Rules</h2>

      <h3>Escalating Drinks (Round 1)</h3>
      <p>Instead of 1-2-3-4 drinks for wrong answers, some groups play:</p>
      <ul>
        <li>Question 1: Take 2 drinks</li>
        <li>Question 2: Take 4 drinks</li>
        <li>Question 3: Take 6 drinks</li>
        <li>Question 4: Take 8 drinks</li>
      </ul>

      <h3>Double Deck Bus</h3>
      <p>For larger groups or longer games, use two decks. This makes the bus ride easier (more number cards) but the pyramid more chaotic.</p>

      <h3>Rhino Variation</h3>
      <p>The bus rider must guess Red/Black before each flip. Wrong guess = extra drink AND restart.</p>

      <h3>Shot Bus</h3>
      <p>For the truly brave: the bus ride uses shots instead of sips. Not recommended!</p>

      <h2>Strategy Tips</h2>

      <h3>Round 1 Strategy</h3>
      <ul>
        <li>Red/Black is 50/50 - no strategy, just guess</li>
        <li>Higher/Lower: Use 7 as your midpoint. 2-6 goes higher, 8-K goes lower</li>
        <li>Inside/Outside: Calculate the spread. Large spread = inside, small spread = outside</li>
        <li>Suit: Pure luck - pick your favorite and commit</li>
      </ul>

      <h3>Pyramid Strategy</h3>
      <ul>
        <li><strong>Track cards:</strong> Watch what others play - it affects your bluffing</li>
        <li><strong>Save high cards:</strong> Don&apos;t waste matches on row 1</li>
        <li><strong>Bluff early:</strong> Bluffs are more believable on lower rows</li>
        <li><strong>Call wisely:</strong> Only call bluffs if you have evidence (you have cards of that value)</li>
      </ul>

      <h3>Bus Survival</h3>
      <ul>
        <li><strong>Pace yourself:</strong> The bus can take many rounds</li>
        <li><strong>Stay calm:</strong> Panic leads to more drinks</li>
        <li><strong>Count cards:</strong> If 3 Kings have been seen, your odds improve</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li><strong>Forgetting &quot;same = wrong&quot;</strong> - In Higher/Lower, same value counts as wrong</li>
        <li><strong>Bluffing too much</strong> - Getting caught is expensive</li>
        <li><strong>Not tracking pyramid cards</strong> - This gives you bluff-calling info</li>
        <li><strong>Chugging during the bus</strong> - It can take a while, sip don&apos;t chug</li>
      </ul>

      <h2>Frequently Asked Questions</h2>

      <h3>How many cards do you need?</h3>
      <p>One standard 52-card deck works for 4-6 players. For 7+ players, use two decks.</p>

      <h3>What if there&apos;s a tie for who rides the bus?</h3>
      <p>Most groups use highest card value as the tiebreaker. Or have all tied players ride together (brutal!).</p>

      <h3>Can you refuse to ride the bus?</h3>
      <p>House rules vary, but traditionally no - you ride until you survive!</p>

      <h3>How long does a game take?</h3>
      <p>Typically 20-40 minutes, but the bus ride can extend things unpredictably.</p>

      <h2>Similar Games You&apos;ll Love</h2>
      <ul>
        <li><Link href="/game/kings-cup" className="text-neon-pink hover:underline">Kings Cup</Link> - Another card-based classic</li>
        <li><Link href="/game/beeramid" className="text-neon-pink hover:underline">Beeramid</Link> - Just the pyramid phase, expanded</li>
        <li><Link href="/game/irish-poker" className="text-neon-pink hover:underline">Irish Poker</Link> - Similar guessing mechanics</li>
        <li><Link href="/guides/across-the-bridge-rules" className="text-neon-pink hover:underline">Across the Bridge</Link> - Another guessing game</li>
      </ul>

      <h2>Ready to Play?</h2>
      <p>Now that you know the rules, gather your friends and get ready to ride! Remember to drink responsibly and have a designated non-drinker if needed.</p>
      <p><Link href="/game/ride-the-bus" className="text-neon-pink hover:underline">Play Ride the Bus on SipWiki</Link></p>

      <h2>Related Guides</h2>
      <ul>
        <li><Link href="/guides/kings-cup-rules" className="text-neon-pink hover:underline">Kings Cup Rules</Link></li>
        <li><Link href="/guides/best-card-drinking-games" className="text-neon-pink hover:underline">Best Card Drinking Games</Link></li>
        <li><Link href="/guides/drinking-games-for-small-groups" className="text-neon-pink hover:underline">Drinking Games for Small Groups</Link></li>
        <li><Link href="/guides/college-drinking-games" className="text-neon-pink hover:underline">College Drinking Games</Link></li>
      </ul>
    </GuideLayout>
  );
}
