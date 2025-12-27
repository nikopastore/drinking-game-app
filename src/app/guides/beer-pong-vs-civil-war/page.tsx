import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beer Pong vs Civil War: Which Game Should You Play? (2025)",
  description: "Beer Pong vs Civil War - complete comparison of these team drinking games. Learn the key differences, when to play each, and which is better for your party.",
  keywords: [
    "beer pong vs civil war",
    "civil war vs beer pong",
    "civil war drinking game",
    "team beer pong",
    "beer pong variations",
    "which drinking game is better",
  ],
  openGraph: {
    title: "Beer Pong vs Civil War: The Ultimate Comparison",
    description: "Which team drinking game should you play?",
    type: "article",
    url: "https://sipwiki.app/guides/beer-pong-vs-civil-war",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/beer-pong-vs-civil-war",
  },
};

export default function BeerPongVsCivilWarPage() {
  return (
    <GuideLayout
      title="Beer Pong vs Civil War: Team Drinking Game Showdown"
      description="Two variations of the classic cup-shooting game. Beer Pong is strategic and turn-based; Civil War is chaotic and simultaneous. Here's how to choose."
      breadcrumb="Beer Pong vs Civil War"
      primaryGame={{ name: "Beer Pong", slug: "beer-pong" }}
      relatedGames={[
        { name: "Civil War", slug: "civil-war", description: "Chaos mode" },
        { name: "Flip Cup", slug: "flip-cup", description: "Team relay" },
        { name: "Rage Cage", slug: "rage-cage", description: "Another chaotic option" },
      ]}
    >
      <QuickAnswer
        question="What's the difference between Beer Pong and Civil War?"
        answer="Beer Pong is turn-based with 10 cups per team and alternating shots. Civil War gives each player 3-6 personal cups, and everyone shoots simultaneously with no turns - pure chaos. Beer Pong is strategic; Civil War is fast and frantic. Both are 3v3 or 2v2 team games."
        tips={[
          "Beer Pong: Turn-based, strategic, 15-30 min games",
          "Civil War: Simultaneous, chaotic, 5-10 min games",
          "Civil War = faster, more intense drinking",
          "Beer Pong = more skill expression"
        ]}
        variant="primary"
      />

      <h2>Quick Comparison Table</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="py-3 px-4 text-white">Feature</th>
              <th className="py-3 px-4 text-white">Beer Pong</th>
              <th className="py-3 px-4 text-white">Civil War</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Players</td>
              <td className="py-3 px-4">2v2 (standard)</td>
              <td className="py-3 px-4">3v3 (ideal), 2v2 works</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Cup Setup</td>
              <td className="py-3 px-4">10 cups per team (shared)</td>
              <td className="py-3 px-4">3-6 cups per player (personal)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Turns</td>
              <td className="py-3 px-4">Alternating shots</td>
              <td className="py-3 px-4">None - simultaneous chaos</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Game Length</td>
              <td className="py-3 px-4">15-30 minutes</td>
              <td className="py-3 px-4">5-10 minutes</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Intensity</td>
              <td className="py-3 px-4">Strategic, focused</td>
              <td className="py-3 px-4">Chaotic, frantic</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Skill Factor</td>
              <td className="py-3 px-4">High (aim + strategy)</td>
              <td className="py-3 px-4">Medium (speed + aim)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Balls Needed</td>
              <td className="py-3 px-4">2 (alternating)</td>
              <td className="py-3 px-4">3+ (one per player)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Elimination</td>
              <td className="py-3 px-4">Team loses when cups gone</td>
              <td className="py-3 px-4">Individual out when their cups gone</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>How Civil War Works</h2>
      <p>If you know Beer Pong but not Civil War, here's the key difference:</p>
      <ul>
        <li><strong>Personal cups:</strong> Each player has their own 3-6 cups in front of them</li>
        <li><strong>No turns:</strong> Everyone shoots simultaneously - grab a ball, shoot, repeat</li>
        <li><strong>Individual elimination:</strong> When YOUR cups are gone, you're out</li>
        <li><strong>Last person standing:</strong> Game ends when one team is fully eliminated</li>
        <li><strong>Ball retrieval:</strong> Grab any ball you can reach and keep shooting</li>
      </ul>

      <h2>When to Play Beer Pong</h2>
      <ul>
        <li><strong>You want strategy:</strong> Re-racks, shot selection, partner coordination</li>
        <li><strong>Smaller groups:</strong> 4 people is perfect</li>
        <li><strong>Longer games:</strong> A centerpiece activity</li>
        <li><strong>Skill showcase:</strong> Let the best shooters shine</li>
        <li><strong>Tournament format:</strong> Clean bracket progression</li>
        <li><strong>Classic experience:</strong> The traditional party game</li>
      </ul>

      <h2>When to Play Civil War</h2>
      <ul>
        <li><strong>You want chaos:</strong> Fast-paced, no waiting for turns</li>
        <li><strong>6 players ready:</strong> 3v3 is the sweet spot</li>
        <li><strong>Quick games:</strong> Play many rounds in the same time</li>
        <li><strong>High energy:</strong> Everyone is constantly engaged</li>
        <li><strong>Team bonding:</strong> Sink or swim together</li>
        <li><strong>Tired of waiting:</strong> No downtime between shots</li>
      </ul>

      <h2>Skill Comparison</h2>

      <h3>Beer Pong Skills</h3>
      <ul>
        <li><strong>Aim:</strong> Precision matters - no rush</li>
        <li><strong>Strategy:</strong> When to call re-racks, which cups to target</li>
        <li><strong>Partner coordination:</strong> Same cup bonuses, communication</li>
        <li><strong>Pressure performance:</strong> Clutch redemption shots</li>
        <li><strong>Bounce shots:</strong> Risk/reward decisions</li>
      </ul>

      <h3>Civil War Skills</h3>
      <ul>
        <li><strong>Speed shooting:</strong> Volume over precision</li>
        <li><strong>Ball retrieval:</strong> Grab and fire quickly</li>
        <li><strong>Target prioritization:</strong> Eliminate weak players first</li>
        <li><strong>Peripheral awareness:</strong> Track multiple balls</li>
        <li><strong>Drinking speed:</strong> Chug fast to get back in the game</li>
      </ul>

      <h2>Drinking Comparison</h2>

      <h3>Beer Pong Drinking</h3>
      <p>Moderate pace. You drink when opponents make cups, spread over 15-30 minutes. Typically 3-5 beers per game depending on accuracy.</p>

      <h3>Civil War Drinking</h3>
      <p>Intense bursts. Multiple cups can be hit in seconds. You might drink 3 cups in 30 seconds if targeted. Games are shorter but drinking is concentrated.</p>

      <div className="bg-yellow-900/30 p-4 rounded-lg my-4 border border-yellow-600/50">
        <p className="text-yellow-300 text-sm">
          <strong>Warning:</strong> Civil War can lead to rapid consumption. The fast pace means you might not realize how much you're drinking. Pace yourself between games.
        </p>
      </div>

      <h2>Setup Comparison</h2>

      <h3>Beer Pong Setup</h3>
      <ul>
        <li>10 cups per side in triangle formation</li>
        <li>2 balls for alternating shots</li>
        <li>Standard 8-foot table</li>
        <li>Water cups for rinsing</li>
      </ul>

      <h3>Civil War Setup</h3>
      <ul>
        <li>3-6 cups per player in a line or triangle</li>
        <li>1 ball per player (3 balls for 3v3)</li>
        <li>Same table works</li>
        <li>More balls = more chaos</li>
      </ul>

      <h2>The Verdict</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-dark-800 p-6 rounded-xl border border-dark-600">
          <h4 className="font-bold text-neon-pink mb-4 text-lg">Play Beer Pong If...</h4>
          <ul className="text-gray-300 space-y-2">
            <li>✓ You want strategic gameplay</li>
            <li>✓ You have exactly 4 players</li>
            <li>✓ You want longer, focused games</li>
            <li>✓ You enjoy skill-based competition</li>
            <li>✓ You're running a tournament</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-6 rounded-xl border border-dark-600">
          <h4 className="font-bold text-neon-blue mb-4 text-lg">Play Civil War If...</h4>
          <ul className="text-gray-300 space-y-2">
            <li>✓ You want fast, chaotic action</li>
            <li>✓ You have 6 players ready</li>
            <li>✓ You want quick games</li>
            <li>✓ You're bored of waiting for turns</li>
            <li>✓ You want maximum intensity</li>
          </ul>
        </div>
      </div>

      <h2>Pro Tip: Combine Them</h2>
      <p>
        Start with Beer Pong for structured competition, then switch to Civil War when energy is high and people want faster action. Many parties alternate between the two throughout the night.
      </p>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Learn the Rules</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/beer-pong-rules"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Beer Pong Rules →
          </Link>
          <Link
            href="/guides/civil-war-rules"
            className="inline-block px-6 py-3 bg-neon-blue text-white rounded-lg hover:bg-neon-blue/80 transition-colors"
          >
            Civil War Rules →
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
