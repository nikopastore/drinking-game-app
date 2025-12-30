import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flip Cup vs Rage Cage: Team vs Free-For-All Comparison (2025)",
  description: "Flip Cup vs Rage Cage drinking game comparison. Learn the differences between these classic party games and when to play each one.",
  keywords: [
    "Flip Cup vs Rage Cage",
    "Rage Cage vs Flip Cup",
    "team drinking games",
    "cup drinking games",
    "party drinking games",
    "drinking game comparison",
    "flip cup or rage cage",
    "best party games"
  ],
  openGraph: {
    title: "Flip Cup vs Rage Cage: Which Cup Game Reigns Supreme?",
    description: "Team relay vs chaotic free-for-all - which cup game wins?",
    type: "article",
    url: "https://sipwiki.app/guides/flip-cup-vs-rage-cage",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/flip-cup-vs-rage-cage",
  },
};

export default function FlipCupVsRageCagePage() {
  return (
    <GuideLayout
      title="Flip Cup vs Rage Cage: Team Spirit vs Pure Chaos"
      description="Both games use cups and create high-energy moments, but Flip Cup is a team relay while Rage Cage is a free-for-all frenzy. Here's how to choose."
      breadcrumb="Flip Cup vs Rage Cage"
    >
      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h2 className="text-xl font-bold text-white mb-4">Quick Comparison</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-bold text-neon-pink mb-2">Flip Cup</h3>
            <ul className="text-gray-300 space-y-1">
              <li>• Team-based relay</li>
              <li>• 6-20 players</li>
              <li>• Organized, structured</li>
              <li>• One person active at a time</li>
              <li>• Clear winner/loser</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-neon-blue mb-2">Rage Cage</h3>
            <ul className="text-gray-300 space-y-1">
              <li>• Free-for-all chaos</li>
              <li>• 6-20+ players</li>
              <li>• Chaotic, unpredictable</li>
              <li>• Multiple people active</li>
              <li>• No clear teams</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>How Flip Cup Works</h2>
      <p>
        <Link href="/guides/flip-cup-rules" className="text-neon-pink hover:underline">Flip Cup</Link> is
        a team relay race:
      </p>
      <ul>
        <li>Two teams line up on opposite sides of a table</li>
        <li>First players drink and flip their cup (rim to base)</li>
        <li>Once flipped, next teammate goes</li>
        <li>First team to flip all cups wins</li>
        <li>Losers usually drink as punishment</li>
      </ul>

      <h2>How Rage Cage Works</h2>
      <p>
        <Link href="/guides/rage-cage-rules" className="text-neon-pink hover:underline">Rage Cage</Link> is
        organized chaos:
      </p>
      <ul>
        <li>Cups filled with beer in the center of the table</li>
        <li>Two players start bouncing balls into cups</li>
        <li>Make it? Pass cup to the left (or anywhere on first bounce)</li>
        <li>Stack on the person next to you if you catch up</li>
        <li>They drink a center cup and continue</li>
        <li>Game ends when center cups are empty</li>
      </ul>

      <h2>Key Differences</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-left text-gray-300">
          <thead className="text-white bg-dark-700">
            <tr>
              <th className="p-3">Feature</th>
              <th className="p-3">Flip Cup</th>
              <th className="p-3">Rage Cage</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-600">
            <tr>
              <td className="p-3 font-medium">Structure</td>
              <td className="p-3">Teams, relay format</td>
              <td className="p-3">Free-for-all</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Active Players</td>
              <td className="p-3">2 at a time (1 per team)</td>
              <td className="p-3">Multiple constantly</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Skill Type</td>
              <td className="p-3">Flipping accuracy</td>
              <td className="p-3">Bouncing accuracy + speed</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Pressure</td>
              <td className="p-3">High (team counting on you)</td>
              <td className="p-3">Constant (can be stacked anytime)</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Game Length</td>
              <td className="p-3">2-5 minutes per round</td>
              <td className="p-3">10-20 minutes</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Downtime</td>
              <td className="p-3">Some (waiting for turn)</td>
              <td className="p-3">None (always watching)</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Cheering</td>
              <td className="p-3">LOTS (team spirit)</td>
              <td className="p-3">Some (individual moments)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>When to Play Flip Cup</h2>
      <ul>
        <li><strong>Want team energy:</strong> Us vs them rivalry</li>
        <li><strong>Group divisions exist:</strong> Perfect for girls vs guys, friends vs coworkers</li>
        <li><strong>Spectator-friendly:</strong> Easy for others to watch and cheer</li>
        <li><strong>Multiple rounds:</strong> Best 2 of 3, tournament brackets</li>
        <li><strong>Quick games:</strong> Each round is fast</li>
        <li><strong>Loud crowds:</strong> The cheering is half the fun</li>
      </ul>

      <h2>When to Play Rage Cage</h2>
      <ul>
        <li><strong>Continuous action:</strong> No waiting, always something happening</li>
        <li><strong>Larger groups:</strong> Everyone&apos;s in the same game</li>
        <li><strong>Want chaos:</strong> Unpredictable, exciting moments</li>
        <li><strong>Individual glory:</strong> Personal vendettas and targeting</li>
        <li><strong>Longer sessions:</strong> One game lasts a while</li>
        <li><strong>Smaller space:</strong> Just need a table, not table length</li>
      </ul>

      <h2>Skill Comparison</h2>

      <h3>Flip Cup Skills</h3>
      <ul>
        <li><strong>Drinking speed:</strong> Matters for team pace</li>
        <li><strong>Flip technique:</strong> Wrist flip from edge</li>
        <li><strong>Pressure handling:</strong> Team counting on you</li>
        <li><strong>Consistency:</strong> Can&apos;t choke when it counts</li>
      </ul>

      <h3>Rage Cage Skills</h3>
      <ul>
        <li><strong>Bounce aim:</strong> Ping pong ball into cup</li>
        <li><strong>Speed:</strong> Rapid retries</li>
        <li><strong>Awareness:</strong> Know who&apos;s about to stack you</li>
        <li><strong>First bounce mastery:</strong> Aim to pass anywhere</li>
      </ul>

      <h2>Drinking Amount</h2>

      <h3>Flip Cup</h3>
      <ul>
        <li>Each player: 1 drink per round minimum</li>
        <li>Losers often drink extra as penalty</li>
        <li>Multiple rounds = multiple drinks</li>
        <li>Fairly predictable amount</li>
      </ul>

      <h3>Rage Cage</h3>
      <ul>
        <li>Varies wildly by skill and luck</li>
        <li>Get stacked a lot = drink a lot</li>
        <li>Avoid stacks = drink minimal</li>
        <li>Unlucky position can mean 5+ drinks in one game</li>
      </ul>

      <h2>Party Vibe</h2>

      <div className="grid grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg border border-neon-pink/30">
          <h4 className="font-bold text-neon-pink mb-2">Flip Cup Energy</h4>
          <p className="text-gray-300 text-sm">
            &quot;GO GO GO!&quot; Team chanting. High fives. Celebration or consolation.
            Very social, very loud. Bonds teams together.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg border border-neon-blue/30">
          <h4 className="font-bold text-neon-blue mb-2">Rage Cage Energy</h4>
          <p className="text-gray-300 text-sm">
            Tense anticipation. Sudden stacking chaos. &quot;OHHH!&quot; reactions.
            Personal vendettas. Constant engagement. Slightly chaotic.
          </p>
        </div>
      </div>

      <h2>Equipment Needed</h2>

      <h3>Flip Cup</h3>
      <ul>
        <li>Solo cups (2 per person)</li>
        <li>Long table (or multiple tables pushed together)</li>
        <li>Beer or drink of choice</li>
        <li>Even number of players</li>
      </ul>

      <h3>Rage Cage</h3>
      <ul>
        <li>20-30 Solo cups</li>
        <li>2-4 ping pong balls</li>
        <li>Round or square table</li>
        <li>Beer for center cups</li>
      </ul>

      <h2>Can You Play Both?</h2>
      <p>Absolutely! Here&apos;s a suggested order:</p>
      <ol>
        <li><strong>Start with Flip Cup:</strong> Gets teams hyped, creates rivalries</li>
        <li><strong>Switch to Rage Cage:</strong> Teams dissolve into chaos</li>
        <li><strong>End with Flip Cup revenge match:</strong> Settle the score</li>
      </ol>

      <h2>The Verdict</h2>
      <div className="bg-gradient-to-r from-pink-900/30 to-blue-900/30 p-6 rounded-xl border border-dark-600 my-6">
        <p className="text-gray-300">
          <strong className="text-white">Choose Flip Cup if:</strong> You want team
          competition, natural rivalries (guys vs girls, etc.), lots of cheering,
          and quick rounds you can run multiple times.
        </p>
        <p className="text-gray-300 mt-4">
          <strong className="text-white">Choose Rage Cage if:</strong> You want
          non-stop action, everyone in the same game, unpredictable chaos, and the
          ability to personally target that one friend who&apos;s been talking trash.
        </p>
        <p className="text-gray-300 mt-4">
          <strong className="text-white">The move:</strong> Play Flip Cup early
          to build energy and teams, then transition to Rage Cage when everyone&apos;s
          warmed up and ready for chaos.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Learn the Full Rules</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/flip-cup-rules"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Flip Cup Rules →
          </Link>
          <Link
            href="/guides/rage-cage-rules"
            className="inline-block px-6 py-3 bg-neon-blue text-white rounded-lg hover:bg-neon-blue/80 transition-colors"
          >
            Rage Cage Rules →
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
