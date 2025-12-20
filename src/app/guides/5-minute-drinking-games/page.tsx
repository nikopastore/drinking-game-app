import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "5 Minute Drinking Games (2024) | Super Quick Party Games",
  description: "Lightning-fast drinking games that take 5 minutes or less! Perfect for quick rounds, pre-gaming, or when you're short on time. Complete rules for speed games.",
  keywords: ["5 minute drinking games", "quick drinking games", "fast drinking games", "short drinking games", "quick party games", "speed drinking games"],
  openGraph: { title: "5 Minute Drinking Games", description: "Fast and fun!", type: "article", url: "https://sipwiki.app/guides/5-minute-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/5-minute-drinking-games" },
};

export default function FiveMinuteDrinkingGamesPage() {
  return (
    <GuideLayout title="5 Minute Drinking Games" description="No time? No problem! These lightning-fast games are perfect for quick rounds between activities, rapid-fire pre-gaming, or when attention spans are short." breadcrumb="5 Minute Games" relatedGames={[{ name: "Medusa", slug: "medusa", description: "30-second rounds" }, { name: "Quarters", slug: "quarters", description: "Quick bouncing" }, { name: "Shot Roulette", slug: "shot-roulette", description: "Spin and drink" }]}>
      <h2>The Art of Speed Drinking Games</h2>
      <p>The best 5-minute games share these qualities:</p>
      <ul>
        <li><strong>Zero setup</strong> - No cards, boards, or complex rules</li>
        <li><strong>Instant understanding</strong> - Explain in one sentence</li>
        <li><strong>Immediate action</strong> - First round starts in seconds</li>
        <li><strong>Natural ending</strong> - Doesn&apos;t drag on</li>
      </ul>

      <h2>Instant Games (Under 2 Minutes)</h2>

      <h3>Medusa</h3>
      <p>The fastest group drinking game that exists.</p>
      <ul>
        <li>Everyone looks down at the table</li>
        <li>On &quot;3, 2, 1, look up!&quot; everyone looks at someone else</li>
        <li>If two people make eye contact, both yell &quot;MEDUSA!&quot; and drink</li>
        <li>First to yell assigns their drink to the other</li>
        <li>Reset and repeat</li>
      </ul>
      <p>One round: 10 seconds. Play 5-6 rounds in 2 minutes.</p>
      <p><Link href="/game/medusa" className="text-neon-pink">Play Medusa →</Link></p>

      <h3>Fingers (Shot in the Dark)</h3>
      <p>Requires only a cup and people&apos;s fingers.</p>
      <ul>
        <li>Everyone puts one finger on the rim of a cup</li>
        <li>One person counts &quot;3, 2, 1&quot; then guesses how many fingers will stay on</li>
        <li>Everyone either keeps finger on or removes it</li>
        <li>If the guesser is right, they&apos;re out</li>
        <li>If wrong, they drink and guess again (or pass to next person)</li>
        <li>Last person drinks the cup</li>
      </ul>

      <h3>Cheers to the Governor</h3>
      <p>Count to 21, but rules change as you play.</p>
      <ul>
        <li>Go around counting 1 to 21</li>
        <li>Reach 21? Everyone yells &quot;Cheers to the Governor!&quot; and drinks</li>
        <li>Person who said 21 makes a new rule (e.g., &quot;7 is now &apos;banana&apos;&quot;)</li>
        <li>Mess up? Drink and restart from 1</li>
      </ul>
      <p>Round 1 takes 30 seconds. Gets chaotic after a few rule changes.</p>

      <h2>Speed Games (3-5 Minutes)</h2>

      <h3>Speed Categories</h3>
      <p>Name things in a category as fast as possible.</p>
      <ul>
        <li>One person picks a category (types of beer, NFL teams, things that are green)</li>
        <li>Go around the circle, each person names one thing</li>
        <li>3-second time limit per person</li>
        <li>Repeat or hesitate? Drink and new category</li>
      </ul>

      <h3>Most Likely To (Speed Round)</h3>
      <p>Quick-fire version of the classic.</p>
      <ul>
        <li>Someone asks &quot;Most likely to...&quot; question</li>
        <li>On &quot;3, 2, 1&quot; everyone points at someone</li>
        <li>Most votes drinks (one drink per vote received)</li>
        <li>Ties both drink</li>
        <li>Next person immediately asks</li>
      </ul>
      <p>No discussion, no deliberation. Gut reactions only.</p>
      <p><Link href="/game/most-likely-to" className="text-neon-pink">Play Most Likely To →</Link></p>

      <h3>Flip, Sip, or Strip</h3>
      <p>High stakes, fast decisions.</p>
      <ul>
        <li>Flip a coin, call it in the air</li>
        <li>Wrong? Choose: take a drink or remove clothing</li>
        <li>Right? You&apos;re safe</li>
        <li>Next person immediately</li>
      </ul>
      <p>Games ends when someone decides it&apos;s gone far enough.</p>

      <h3>Speed Quarters</h3>
      <p>Bounce a quarter into a shot glass.</p>
      <ul>
        <li>Place shot glass in center</li>
        <li>Each person gets one bounce attempt</li>
        <li>Make it? Pick someone to drink</li>
        <li>Miss? You drink</li>
        <li>Make 3 in a row? Make a rule</li>
      </ul>
      <p>5 rounds = 5 minutes with 6 people.</p>
      <p><Link href="/game/quarters" className="text-neon-pink">Play Quarters →</Link></p>

      <h2>Lightning Round Games</h2>

      <h3>Truthie or Drinkie</h3>
      <p>Rapid-fire truth questions.</p>
      <ul>
        <li>Ask the person to your left a yes/no question</li>
        <li>They answer truthfully or drink</li>
        <li>No hesitation - 3 seconds to decide</li>
        <li>Questions should be fast and pointed</li>
      </ul>
      <p>Examples: &quot;Have you texted an ex this month?&quot; &quot;Did you actually like their cooking?&quot;</p>

      <h3>Snap</h3>
      <p>The ultimate reaction game.</p>
      <ul>
        <li>Cards dealt face-up rapidly to a center pile</li>
        <li>Two cards in a row match? First to slap the pile wins</li>
        <li>Loser drinks</li>
        <li>Slap on non-match? You drink</li>
      </ul>
      <p>Goes through a deck in under 5 minutes.</p>

      <h3>Horse Race</h3>
      <p>Betting game that resolves quickly.</p>
      <ul>
        <li>Line up 4 Aces as &quot;horses&quot;</li>
        <li>Everyone bets drinks on which suit will win</li>
        <li>Flip cards from deck - each suit moves its Ace forward</li>
        <li>First Ace across wins</li>
        <li>Losers drink their bet</li>
      </ul>
      <p>One race takes 2-3 minutes.</p>

      <h2>When to Use 5-Minute Games</h2>

      <h3>Perfect For:</h3>
      <ul>
        <li><strong>Pre-gaming</strong> - Quick rounds before heading out</li>
        <li><strong>Between activities</strong> - Waiting for food, Uber, people</li>
        <li><strong>Late arrivals</strong> - Get newcomers caught up fast</li>
        <li><strong>Testing the vibe</strong> - See if people want to keep playing</li>
        <li><strong>Party warm-up</strong> - Break the ice quickly</li>
        <li><strong>Attention span issues</strong> - Some groups need fast turnover</li>
      </ul>

      <h3>Not Ideal For:</h3>
      <ul>
        <li>The main event - these are openers, not headliners</li>
        <li>Small groups (2-3 people) - need more people for speed games</li>
        <li>Pacing a long night - too fast, too furious</li>
      </ul>

      <h2>Speed Game Strategy</h2>
      <ul>
        <li><strong>Stack them</strong> - Play 3-4 quick games back-to-back</li>
        <li><strong>No debates</strong> - Speed games die when people argue rules</li>
        <li><strong>Keep drinks filled</strong> - Nothing kills momentum like empty glasses</li>
        <li><strong>Rotate leaders</strong> - Different person picks each game</li>
        <li><strong>Know when to stop</strong> - Before it becomes boring repetition</li>
      </ul>

      <h2>Building a Quick Games Playlist</h2>
      <p>Mix it up:</p>
      <ol>
        <li><strong>Start with Medusa</strong> - Zero explanation needed</li>
        <li><strong>Move to Fingers</strong> - Adds strategy element</li>
        <li><strong>Speed Categories</strong> - Gets people talking</li>
        <li><strong>Most Likely To</strong> - Personal but quick</li>
        <li><strong>End with something physical</strong> - Snap or Quarters</li>
      </ol>
      <p>15 minutes, 5 games, everyone&apos;s warmed up.</p>

      <p>Want longer games after warming up? Check out <Link href="/guides/easy-drinking-games" className="text-neon-pink hover:underline">easy drinking games</Link> or <Link href="/guides/drinking-games-under-30-minutes" className="text-neon-pink hover:underline">30-minute games</Link></p>
    </GuideLayout>
  );
}
