import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rage Cage vs Slap Cup: Which Drinking Game is Better? (2025)",
  description: "Rage Cage vs Slap Cup comparison guide. Learn the key differences, rules, and when to play each high-energy drinking game at your next party.",
  keywords: [
    "Rage Cage vs Slap Cup",
    "Slap Cup vs Rage Cage",
    "stack cup vs rage cage",
    "bounce cup drinking games",
    "high energy drinking games",
    "party cup games",
    "which drinking game",
    "drinking game comparison"
  ],
  openGraph: {
    title: "Rage Cage vs Slap Cup: The Ultimate Comparison",
    description: "Which high-energy cup game is right for your party?",
    type: "article",
    url: "https://sipwiki.app/guides/rage-cage-vs-slap-cup",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/rage-cage-vs-slap-cup",
  },
};

export default function RageCageVsSlapCupPage() {
  return (
    <GuideLayout
      title="Rage Cage vs Slap Cup: Which High-Energy Game Wins?"
      description="Both games feature bouncing balls into cups and stacking chaos, but they play very differently. Here's how to decide which one to break out at your next party."
      breadcrumb="Rage Cage vs Slap Cup"
    >
      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h2 className="text-xl font-bold text-white mb-4">Quick Comparison</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-bold text-neon-pink mb-2">Rage Cage</h3>
            <ul className="text-gray-300 space-y-1">
              <li>• 6-20+ players</li>
              <li>• Continuous action</li>
              <li>• Everyone plays at once</li>
              <li>• Stack on the person next to you</li>
              <li>• More chaotic</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-neon-blue mb-2">Slap Cup</h3>
            <ul className="text-gray-300 space-y-1">
              <li>• 4-15 players</li>
              <li>• Turn-based with racing</li>
              <li>• 2 active players at a time</li>
              <li>• Slap to eliminate</li>
              <li>• More competitive</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>How Rage Cage Works</h2>
      <p>
        In <Link href="/guides/rage-cage-rules" className="text-neon-pink hover:underline">Rage Cage</Link>,
        cups filled with beer are arranged in the center of the table. Two players start with
        empty cups on opposite sides of the table and race to bounce a ball into their cup.
      </p>
      <ul>
        <li>Make it on your first try? Pass to anyone at the table</li>
        <li>Make it on a later try? Pass to the person on your left</li>
        <li>If the person on your left is still bouncing, stack your cup on theirs</li>
        <li>They must grab a center cup, drink it, and try again</li>
        <li>Game ends when all center cups are gone</li>
      </ul>

      <h2>How Slap Cup Works</h2>
      <p>
        In <Link href="/guides/slap-cup-rules" className="text-neon-pink hover:underline">Slap Cup</Link>,
        the setup is similar but the key difference is the &quot;slap.&quot; Two players race to
        bounce balls into cups, but when you make it:
      </p>
      <ul>
        <li>If you make it before the person on your right, slap their cup away</li>
        <li>They must grab a center cup, drink it, and that cup becomes their new game cup</li>
        <li>Pass your cup to the left after making it</li>
        <li>Direct confrontation rather than stacking</li>
        <li>Game ends when all center cups are gone</li>
      </ul>

      <h2>Key Differences</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-left text-gray-300">
          <thead className="text-white bg-dark-700">
            <tr>
              <th className="p-3">Feature</th>
              <th className="p-3">Rage Cage</th>
              <th className="p-3">Slap Cup</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-600">
            <tr>
              <td className="p-3 font-medium">Elimination Method</td>
              <td className="p-3">Stacking</td>
              <td className="p-3">Slapping</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Pass Direction</td>
              <td className="p-3">Left (or anywhere on first bounce)</td>
              <td className="p-3">Always left</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Confrontation</td>
              <td className="p-3">Indirect (stacking)</td>
              <td className="p-3">Direct (slapping their cup)</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Strategy</td>
              <td className="p-3">Choose who to target (first bounce)</td>
              <td className="p-3">Pure speed</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Intensity</td>
              <td className="p-3">High (everyone active)</td>
              <td className="p-3">Very High (direct competition)</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Spill Risk</td>
              <td className="p-3">Medium</td>
              <td className="p-3">High (slapping causes spills)</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Skill Factor</td>
              <td className="p-3">Medium</td>
              <td className="p-3">Medium-High</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>When to Play Rage Cage</h2>
      <ul>
        <li><strong>Larger groups (10+):</strong> Handles more players smoothly</li>
        <li><strong>Want continuous action:</strong> No waiting for turns</li>
        <li><strong>Less competitive crowd:</strong> Stacking feels less confrontational</li>
        <li><strong>Limited table space:</strong> Slightly more contained</li>
        <li><strong>First time playing:</strong> Rules are a bit simpler</li>
      </ul>

      <h2>When to Play Slap Cup</h2>
      <ul>
        <li><strong>Competitive group:</strong> Direct head-to-head action</li>
        <li><strong>Smaller parties (4-10):</strong> Works better with fewer people</li>
        <li><strong>Want drama:</strong> Slapping cups is more satisfying</li>
        <li><strong>Athletic crowd:</strong> Requires quick reflexes</li>
        <li><strong>Don&apos;t mind mess:</strong> Slapping = more spills</li>
      </ul>

      <h2>Hybrid Rules (Best of Both)</h2>
      <p>Some groups play a hybrid version that combines elements of both:</p>
      <ul>
        <li>Use Rage Cage stacking rules</li>
        <li>But allow slapping if you want to be aggressive</li>
        <li>First bounce still lets you pass to anyone</li>
        <li>Creates a more dynamic game with options</li>
      </ul>

      <h2>Equipment Needed</h2>
      <p>Both games require the same basic setup:</p>
      <ul>
        <li>20-30 Solo cups</li>
        <li>2-4 ping pong balls</li>
        <li>Beer or drink of choice</li>
        <li>Large table (dining table or pong table)</li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <a href="https://www.amazon.com/s?k=ping+pong+balls+beer+pong&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Ping Pong Balls (50 pack)</h4>
          <p className="text-gray-400 text-sm">You&apos;ll lose some, buy extra</p>
          <span className="text-neon-pink font-bold">$8-12</span>
        </a>
        <a href="https://www.amazon.com/s?k=red+solo+cups+100+pack&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Solo Cups (100 pack)</h4>
          <p className="text-gray-400 text-sm">Classic red cups</p>
          <span className="text-neon-pink font-bold">$12-18</span>
        </a>
      </div>

      <h2>The Verdict</h2>
      <div className="bg-gradient-to-r from-pink-900/30 to-blue-900/30 p-6 rounded-xl border border-dark-600 my-6">
        <p className="text-gray-300">
          <strong className="text-white">Choose Rage Cage if:</strong> You have a bigger group,
          want everyone engaged at all times, and prefer the psychological torture of stacking.
        </p>
        <p className="text-gray-300 mt-4">
          <strong className="text-white">Choose Slap Cup if:</strong> You have a competitive,
          athletic group that loves direct confrontation and doesn&apos;t mind cleaning up spills.
        </p>
        <p className="text-gray-300 mt-4">
          <strong className="text-white">Honestly?</strong> Play both throughout the night.
          Start with Rage Cage to warm up, switch to Slap Cup when energy is high.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Learn the Full Rules</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/rage-cage-rules"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Rage Cage Rules →
          </Link>
          <Link
            href="/guides/slap-cup-rules"
            className="inline-block px-6 py-3 bg-neon-blue text-white rounded-lg hover:bg-neon-blue/80 transition-colors"
          >
            Slap Cup Rules →
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
