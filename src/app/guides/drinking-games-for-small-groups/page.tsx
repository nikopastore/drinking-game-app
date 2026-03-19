import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Drinking Games for Small Groups (3-5 People) | 2024 Guide",
  description: "Perfect drinking games for 3-5 players! Small groups mean more turns, better conversations, and games that actually work. Complete guide with recommendations by exact player count.",
  keywords: ["drinking games for small groups", "drinking games 3 people", "drinking games 4 people", "drinking games 5 people", "small group party games", "intimate drinking games"],
  openGraph: { title: "Drinking Games for Small Groups", description: "Perfect for 3-5 players.", type: "article", url: "https://sipwiki.app/guides/drinking-games-for-small-groups" },
  alternates: { canonical: "https://sipwiki.app/guides/drinking-games-for-small-groups" },
};

export default function SmallGroupsPage() {
  return (
    <GuideLayout title="Best Drinking Games for Small Groups (3-5 People)" description="Small groups are underrated. You get more turns, better conversations, and games actually work as intended. Here's how to make the most of your intimate gathering." breadcrumb="Small Group Games" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Works with 3+" }, { name: "Ride the Bus", slug: "ride-the-bus", description: "Perfect for 4-6" }]}>
      <h2>Why Small Groups Are Actually Better</h2>
      <p>Forget the rager fantasy. Small groups (3-5 people) are often more fun because:</p>
      <ul>
        <li><strong>More turns per person</strong> - Less waiting, more playing</li>
        <li><strong>Conversation actually happens</strong> - You can hear each other</li>
        <li><strong>Games work as designed</strong> - Most games are balanced for 4-6 players</li>
        <li><strong>Pacing is controllable</strong> - Not too fast, not too slow</li>
        <li><strong>Everyone stays engaged</strong> - No one zones out in the corner</li>
      </ul>

      <h2>Games by Player Count</h2>

      <h3>Best for 3 People (Trio)</h3>
      <p>Three is tricky - too small for team games, but these work great:</p>

      <h4>Top Picks:</h4>
      <ul>
        <li><strong><Link href="/games/kings-cup" className="text-neon-pink">Kings Cup</Link></strong> - Still plenty of action with 3. Cards cycle faster, so rules stack quickly.</li>
        <li><strong><Link href="/games/ride-the-bus" className="text-neon-pink">Ride the Bus</Link></strong> - Works perfectly. The loser REALLY loses since there&apos;s nowhere to hide.</li>
        <li><strong><Link href="/games/truth-or-drink" className="text-neon-pink">Truth or Drink</Link></strong> - More intimate conversations. Gets deep fast.</li>
        <li><strong>Three Man (Dice)</strong> - Literally named for 3+ players. Someone is always the &quot;Three Man.&quot;</li>
      </ul>

      <h4>Why 3 Works:</h4>
      <ul>
        <li>Quick turn rotation</li>
        <li>More personal/revealing games shine</li>
        <li>Card games deal evenly</li>
        <li>Avoids the &quot;odd one out&quot; of 2v2</li>
      </ul>

      <h3>Best for 4 People (The Sweet Spot)</h3>
      <p>Four players is arguably the perfect drinking game group size.</p>

      <h4>Top Picks:</h4>
      <ul>
        <li><strong><Link href="/games/kings-cup" className="text-neon-pink">Kings Cup</Link></strong> - Ideal. Each player gets 13 cards exactly.</li>
        <li><strong><Link href="/games/beer-pong" className="text-neon-pink">Beer Pong</Link></strong> - 2v2 is classic team beer pong.</li>
        <li><strong><Link href="/games/beeramid" className="text-neon-pink">Beeramid</Link></strong> - Perfect hand sizes, good bluffing potential.</li>
        <li><strong><Link href="/games/horse-race" className="text-neon-pink">Horse Race</Link></strong> - Each person bets on a suit. Perfect fit.</li>
        <li><strong><Link href="/games/irish-poker" className="text-neon-pink">Irish Poker</Link></strong> - Designed for this exact group size.</li>
      </ul>

      <h4>Why 4 Is Magic:</h4>
      <ul>
        <li>Perfect for 2v2 team games</li>
        <li>Cards divide evenly</li>
        <li>Good turn frequency</li>
        <li>Everyone knows everyone&apos;s score/status</li>
      </ul>

      <h3>Best for 5 People</h3>
      <p>Five is the upper edge of &quot;small group&quot; but still intimate.</p>

      <h4>Top Picks:</h4>
      <ul>
        <li><strong><Link href="/games/kings-cup" className="text-neon-pink">Kings Cup</Link></strong> - Still works great</li>
        <li><strong><Link href="/games/rage-cage" className="text-neon-pink">Rage Cage</Link></strong> - 5 is the minimum for real intensity</li>
        <li><strong><Link href="/games/beeramid" className="text-neon-pink">Beeramid</Link></strong> - More cards in play, more bluffing chaos</li>
        <li><strong><Link href="/games/most-likely-to" className="text-neon-pink">Most Likely To</Link></strong> - More variety in answers</li>
        <li><strong><Link href="/games/chandelier" className="text-neon-pink">Chandelier</Link></strong> - Each person has their own cup</li>
      </ul>

      <h4>Why 5 Works:</h4>
      <ul>
        <li>Enough for elimination games</li>
        <li>Still conversational</li>
        <li>Good for bluffing games (harder to track)</li>
        <li>Team games can be 2v3 with rotating</li>
      </ul>

      <h2>Games That NEED Small Groups</h2>
      <p>These games don&apos;t work well with large groups:</p>
      <ul>
        <li><strong><Link href="/games/ride-the-bus" className="text-neon-pink">Ride the Bus</Link></strong> - With 10 people, the loser waits forever for their turn</li>
        <li><strong><Link href="/games/irish-poker" className="text-neon-pink">Irish Poker</Link></strong> - More than 6 and the game drags</li>
        <li><strong><Link href="/games/truth-or-drink" className="text-neon-pink">Truth or Drink</Link></strong> - Big groups = less personal questions</li>
        <li><strong>Dice games (Three Man, Ship Captain Crew)</strong> - Turn-based doesn&apos;t scale</li>
      </ul>

      <h2>Games to AVOID with Small Groups</h2>
      <ul>
        <li><strong>Flip Cup</strong> - Needs at least 6 for good team relay energy</li>
        <li><strong>Civil War</strong> - Designed for 6+</li>
        <li><strong>Slap Cup</strong> - Needs chaos of 8+ players</li>
      </ul>

      <h2>Optimizing Your Small Group Night</h2>

      <h3>Rotation Strategy</h3>
      <p>With 3-5 people, you can play multiple games in a night:</p>
      <ol>
        <li><strong>Start with a card game</strong> - Kings Cup or Ride the Bus to warm up</li>
        <li><strong>Move to a social game</strong> - Most Likely To or Never Have I Ever</li>
        <li><strong>End with competition</strong> - Quarters or 2v2 games</li>
      </ol>

      <h3>Pacing</h3>
      <ul>
        <li>Small groups get drunk faster (more turns per person)</li>
        <li>Use sips, not full drinks, for early games</li>
        <li>Have food and water accessible</li>
        <li>Set an end time so you don&apos;t overdo it</li>
      </ul>

      <h2>Small Group Advantages</h2>
      <ul>
        <li>✅ Can play in an apartment (no noise complaints)</li>
        <li>✅ Less cleanup</li>
        <li>✅ Everyone can Uber/cab home easily</li>
        <li>✅ Better conversations and memories</li>
        <li>✅ Can try more experimental/weird games</li>
      </ul>

      <p>Find your game: <Link href="/games" className="text-neon-pink hover:underline">Browse all drinking games</Link> or check out <Link href="/guides/drinking-games-for-3" className="text-neon-pink hover:underline">games specifically for 3 people</Link>.</p>
    </GuideLayout>
  );
}
