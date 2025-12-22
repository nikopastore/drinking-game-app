import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "25 Best Drinking Games for Parties (2024) | House Party Games",
  description: "The ultimate party drinking games list! From classics like Beer Pong to hidden gems. Complete guide with games for any group size, energy level, and party vibe.",
  keywords: ["drinking games for parties", "party drinking games", "house party games", "best party games", "drinking games for groups", "party game ideas", "large group drinking games"],
  openGraph: { title: "25 Best Party Drinking Games", description: "Games that make every party legendary.", type: "article", url: "https://sipwiki.app/guides/drinking-games-for-parties" },
  alternates: { canonical: "https://sipwiki.app/guides/drinking-games-for-parties" },
};

export default function DrinkingGamesForPartiesPage() {
  return (
    <GuideLayout title="25 Best Drinking Games for Parties" description="A great party needs great games. Not just any games - ones that scale to your crowd, match your energy, and keep everyone involved. This is the complete party host's guide to drinking games." breadcrumb="Party Drinking Games" relatedGames={[{ name: "Flip Cup", slug: "flip-cup", description: "Team relay" }, { name: "Kings Cup", slug: "kings-cup", description: "Card classic" }, { name: "Beer Pong", slug: "beer-pong", description: "The GOAT" }]}>
      <QuickAnswer
        question="What are the best drinking games for parties?"
        answer="Best party drinking games: (1) Beer Pong - 2v2 classic, everyone knows it, (2) Flip Cup - team relay for 8-20+, (3) Rage Cage - high energy elimination, (4) Kings Cup - card game for 5-15, (5) Never Have I Ever - no props needed. Choose based on party size: small (2-6) = Beer Pong/Kings Cup, medium (6-12) = Rage Cage/Chandelier, large (10+) = Flip Cup/Civil War. High energy parties need Rage Cage or Flip Cup. Chill vibes use Kings Cup or Never Have I Ever."
        tips={[
          "Have 2-3 games ready for different energy levels",
          "Team games work better than turn-based for big groups",
          "Start with Kings Cup as people arrive",
          "Beer Pong is eternal - always set up a table"
        ]}
        variant="primary"
      />

      <h2>Party Game Philosophy</h2>
      <p>The best party games share these traits:</p>
      <ul>
        <li><strong>Easy to explain</strong> - 30 seconds or less to teach</li>
        <li><strong>Scalable</strong> - Work for 6 or 16 people</li>
        <li><strong>Engaging for spectators</strong> - Non-players should want to watch</li>
        <li><strong>Quick rounds</strong> - People can jump in and out</li>
        <li><strong>Visible progress</strong> - Everyone can see who&apos;s winning</li>
      </ul>

      <h2>High Energy Games (Peak Party Mode)</h2>
      <p>These games get loud. They&apos;re for when the party is in full swing:</p>

      <h3>Rage Cage</h3>
      <p>The ultimate party chaos. Cups in the center, two balls bouncing. Make your cup, pass the ball. Get caught still bouncing when someone passes to you = stack and drink. It escalates until someone&apos;s bouncing into a tower of cups.</p>
      <p><strong>Minimum:</strong> 6 players. <strong>Sweet spot:</strong> 10-15 players.</p>
      <p><Link href="/game/rage-cage" className="text-neon-pink">Full Rage Cage rules →</Link></p>

      <h3>Slap Cup</h3>
      <p>Similar to Rage Cage but with slapping. Bounce the ball in, slap the next person&apos;s cup away before they make it. More aggressive, more competitive, more trash talk.</p>
      <p><strong>Energy level:</strong> Maximum</p>
      <p><Link href="/game/slap-cup" className="text-neon-pink">Full Slap Cup rules →</Link></p>

      <h3>Flip Cup</h3>
      <p>Team relay racing. Drink, flip your cup, next person goes. First team to finish wins. Simple, fast, generates cheering. Perfect for team competitions (floor vs. floor, friend groups vs. friend groups).</p>
      <p><strong>Why it works:</strong> Creates instant team loyalty. Even strangers bond over a flip cup win.</p>
      <p><Link href="/game/flip-cup" className="text-neon-pink">Full Flip Cup rules →</Link></p>

      <h3>Civil War</h3>
      <p>3v3 beer pong with no turns. All six players shoot simultaneously. It&apos;s chaos. Cups everywhere. Pure speed and accuracy competition.</p>
      <p><strong>Space needed:</strong> Full beer pong table</p>
      <p><Link href="/game/civil-war" className="text-neon-pink">Full Civil War rules →</Link></p>

      <h2>Classic Games (Never Fail)</h2>
      <p>These games have survived decades because they work:</p>

      <h3>Beer Pong</h3>
      <p>The undisputed champion. 2v2, 10 cups each side, throw balls, make cups, opponent drinks. Tournament brackets at big parties. Everyone knows it, everyone has opinions on house rules.</p>
      <p><strong>Why it&apos;s eternal:</strong> Perfect skill/luck balance. Dramatic comebacks possible. Spectator friendly.</p>
      <p><Link href="/game/beer-pong" className="text-neon-pink">Full Beer Pong rules →</Link></p>

      <h3>Kings Cup</h3>
      <p>Card game that scales to any size. Each card triggers a rule - mini-games, drinking, rule-making. The King&apos;s Cup ending is always memorable.</p>
      <p><strong>Best use:</strong> Early party when people are arriving, or as a warm-up game</p>
      <p><Link href="/game/kings-cup" className="text-neon-pink">Full Kings Cup rules →</Link></p>

      <h3>Quarters</h3>
      <p>Skill-based bouncing. One quarter, one cup, pure technique. Making three in a row = create a rule. Surprisingly addictive once you find your bounce spot.</p>
      <p><Link href="/guides/quarters-rules" className="text-neon-pink">Full Quarters rules →</Link></p>

      <h2>No Props Needed</h2>
      <p>Forgot the cards? No table space? These games need nothing but drinks:</p>

      <h3>Most Likely To</h3>
      <p>Someone asks &quot;Who&apos;s most likely to...&quot; Everyone points. Person with most fingers pointing drinks that many sips. Scales infinitely. Gets personal. Gets funny.</p>
      <p><Link href="/game/most-likely-to" className="text-neon-pink">Play Most Likely To →</Link></p>

      <h3>Never Have I Ever</h3>
      <p>Confession game. &quot;Never have I ever...&quot; - if you have, you drink. Reveals secrets. Creates stories. Works for 3 or 30 people.</p>
      <p><Link href="/game/never-have-i-ever" className="text-neon-pink">Play Never Have I Ever →</Link></p>

      <h3>Medusa</h3>
      <p>Everyone looks down. On &quot;3-2-1-Medusa!&quot; everyone looks at someone. If you&apos;re looking at someone who&apos;s looking at you = eye contact = both drink. Fast rounds, creates laughter.</p>
      <p><Link href="/game/medusa" className="text-neon-pink">Full Medusa rules →</Link></p>

      <h3>Cheers to the Governor</h3>
      <p>Count to 21 around the circle. But 7 and 14 are swapped. Mess up = drink and restart. Each successful round adds a new rule. By round 5, the counting is insane.</p>
      <p><Link href="/game/cheers-to-the-governor" className="text-neon-pink">Full Cheers to the Governor rules →</Link></p>

      <h2>Games by Party Size</h2>

      <h3>Small Party (6-10 people)</h3>
      <ul>
        <li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> - Everyone gets plenty of turns</li>
        <li><Link href="/game/ride-the-bus" className="text-neon-pink">Ride the Bus</Link> - Intimate enough for the tension to build</li>
        <li><Link href="/game/beer-pong" className="text-neon-pink">Beer Pong</Link> - 2v2 with spectators</li>
        <li><Link href="/game/beeramid" className="text-neon-pink">Beeramid</Link> - Bluffing works best with fewer people</li>
      </ul>

      <h3>Medium Party (10-20 people)</h3>
      <ul>
        <li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> - Perfect team sizes</li>
        <li><Link href="/game/rage-cage" className="text-neon-pink">Rage Cage</Link> - Hits its stride here</li>
        <li><Link href="/game/beer-pong" className="text-neon-pink">Beer Pong Tournament</Link> - Run a bracket</li>
        <li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - More opinions = funnier results</li>
      </ul>

      <h3>Large Party (20+ people)</h3>
      <ul>
        <li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> - Multiple games simultaneously</li>
        <li><Link href="/game/beer-pong" className="text-neon-pink">Beer Pong</Link> - Always has players waiting</li>
        <li><strong>Thunderstruck</strong> - Everyone drinks during guitar solos</li>
        <li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Works for any size</li>
      </ul>

      <h2>Games by Energy Level</h2>
      <ul>
        <li><strong>Warm-up:</strong> Kings Cup, Most Likely To, Higher/Lower</li>
        <li><strong>Peak energy:</strong> Rage Cage, Slap Cup, Civil War, Flip Cup</li>
        <li><strong>Winding down:</strong> Never Have I Ever, Truth or Drink</li>
      </ul>

      <h2>Party Flow Strategy</h2>
      <p>Structure your games like a DJ structures music:</p>
      <ol>
        <li><strong>Arrival (first hour)</strong> - Low-key games as people arrive. Kings Cup, Never Have I Ever. Easy to join mid-game.</li>
        <li><strong>Peak (hours 2-3)</strong> - High energy games. Flip Cup tournaments, Rage Cage, Beer Pong brackets.</li>
        <li><strong>Late night</strong> - Transition to conversation games. Truth or Drink, Most Likely To.</li>
      </ol>

      <h2>Common Party Game Mistakes</h2>
      <ul>
        <li><strong>Starting with high-energy games</strong> - Build up to them</li>
        <li><strong>One game all night</strong> - Rotate every 30-45 minutes</li>
        <li><strong>No backup plan</strong> - Have 2-3 games ready to suggest</li>
        <li><strong>Ignoring non-drinkers</strong> - Offer mocktail versions</li>
        <li><strong>Mandatory participation</strong> - Let people watch if they want</li>
      </ul>

      <h2>Party Setup Essentials</h2>
      <ul>
        <li><strong>Table space</strong> - Beer pong table + card game table if possible</li>
        <li><strong>Extra cups</strong> - You&apos;ll go through more than expected</li>
        <li><strong>Ping pong balls</strong> - Have at least 6 (they disappear)</li>
        <li><strong>2 decks of cards</strong> - One active, one backup</li>
        <li><strong>Water cups</strong> - For ball rinsing and hydration</li>
        <li><strong>Paper towels</strong> - Spills happen</li>
      </ul>

      <p>Find the perfect game: <Link href="/games" className="text-neon-pink hover:underline">Browse all drinking games</Link> | <Link href="/guides/drinking-games-for-large-groups" className="text-neon-pink hover:underline">Large group games</Link></p>
    </GuideLayout>
  );
}
