import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chandelier vs Slap Cup: Which Fast-Paced Game is Better? (2025)",
  description: "Chandelier vs Slap Cup comparison - two fast-paced drinking games with cups and balls. Learn the differences and when to play each game.",
  keywords: [
    "chandelier vs slap cup",
    "slap cup vs chandelier",
    "chandelier drinking game",
    "slap cup drinking game",
    "fast drinking games",
    "cup drinking games",
  ],
  openGraph: {
    title: "Chandelier vs Slap Cup: Fast-Paced Drinking Game Comparison",
    description: "Two chaotic cup games face off. Which should you play?",
    type: "article",
    url: "https://sipwiki.app/guides/chandelier-vs-slap-cup",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/chandelier-vs-slap-cup",
  },
};

export default function ChandelierVsSlapCupPage() {
  return (
    <GuideLayout
      title="Chandelier vs Slap Cup: Fast-Paced Drinking Game Showdown"
      description="Both games involve cups, balls, and chaos - but they play very differently. Here's how to choose between these high-energy drinking games."
      breadcrumb="Chandelier vs Slap Cup"
      primaryGame={{ name: "Chandelier", slug: "chandelier" }}
      relatedGames={[
        { name: "Slap Cup", slug: "slap-cup", description: "Stacking chaos" },
        { name: "Rage Cage", slug: "rage-cage", description: "Similar to Slap Cup" },
        { name: "Beer Pong", slug: "beer-pong", description: "Classic alternative" },
      ]}
    >
      <QuickAnswer
        question="What's the difference between Chandelier and Slap Cup?"
        answer="Chandelier: Players bounce balls trying to hit others' cups (defense game). Slap Cup: Two balls race around the table, make your cup and slap the next person's away (elimination race). Chandelier is more targeted; Slap Cup is faster chaos."
        tips={[
          "Chandelier: Bounce to hit opponent cups, defend yours",
          "Slap Cup: Race to make cups, stack on slower players",
          "Both need 5+ players for best experience",
          "Slap Cup is faster; Chandelier has more strategy"
        ]}
        variant="primary"
      />

      <h2>Quick Comparison Table</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="py-3 px-4 text-white">Feature</th>
              <th className="py-3 px-4 text-white">Chandelier</th>
              <th className="py-3 px-4 text-white">Slap Cup</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Core Mechanic</td>
              <td className="py-3 px-4">Bounce to hit cups</td>
              <td className="py-3 px-4">Make cup, slap next</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Players</td>
              <td className="py-3 px-4">4-10</td>
              <td className="py-3 px-4">5-12</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Cup Setup</td>
              <td className="py-3 px-4">Circle + center "chandelier"</td>
              <td className="py-3 px-4">Center filled cups, 2 empty to start</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Balls</td>
              <td className="py-3 px-4">1 ball rotating</td>
              <td className="py-3 px-4">2 balls racing</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Turns</td>
              <td className="py-3 px-4">Take turns bouncing</td>
              <td className="py-3 px-4">Simultaneous racing</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Goal</td>
              <td className="py-3 px-4">Hit others' cups, avoid yours</td>
              <td className="py-3 px-4">Don't get stacked on</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Speed</td>
              <td className="py-3 px-4">Moderate (turns)</td>
              <td className="py-3 px-4">Very fast (racing)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Strategy</td>
              <td className="py-3 px-4">Target selection, timing</td>
              <td className="py-3 px-4">Speed, positioning</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>How Chandelier Works</h2>
      <ul>
        <li>Each player has a cup in front of them (personal cup)</li>
        <li>One large cup in the center = the "chandelier"</li>
        <li>Take turns bouncing the ball</li>
        <li>Hit someone's cup = they drink it</li>
        <li>Hit the chandelier = everyone drinks, last to finish drinks the chandelier</li>
        <li>Your cup gets hit 3 times = you're eliminated</li>
      </ul>

      <h2>How Slap Cup Works</h2>
      <ul>
        <li>Filled cups in the center, 2 empty cups start with players</li>
        <li>Two players start bouncing simultaneously</li>
        <li>Make your cup = pass to the left</li>
        <li>Make it on first try = pass anywhere</li>
        <li>If someone catches up to you, they SLAP your cup away</li>
        <li>You grab a center cup, drink it, then try to make that cup</li>
        <li>Game ends when center cups are gone</li>
      </ul>

      <h2>When to Play Chandelier</h2>
      <ul>
        <li><strong>You want targeting:</strong> Choose who drinks</li>
        <li><strong>Medium pace:</strong> Turn-based, less frantic</li>
        <li><strong>Elimination style:</strong> Watch players get knocked out</li>
        <li><strong>More strategic:</strong> Aim for specific people</li>
        <li><strong>Grudge matches:</strong> Target your rivals</li>
        <li><strong>4-8 players:</strong> Sweet spot for this game</li>
      </ul>

      <h2>When to Play Slap Cup</h2>
      <ul>
        <li><strong>You want pure chaos:</strong> Non-stop action</li>
        <li><strong>Maximum speed:</strong> Racing, stacking, slapping</li>
        <li><strong>Large groups:</strong> Works great with 8-12</li>
        <li><strong>High energy:</strong> Gets loud and competitive</li>
        <li><strong>Quick games:</strong> 5-10 minutes per round</li>
        <li><strong>Less aiming:</strong> Speed matters more than accuracy</li>
      </ul>

      <h2>Skill Comparison</h2>

      <h3>Chandelier Skills</h3>
      <ul>
        <li><strong>Bounce accuracy:</strong> Hitting specific cups</li>
        <li><strong>Target selection:</strong> Who to go after</li>
        <li><strong>Defense mindset:</strong> Drinking fast when hit</li>
        <li><strong>Reading the table:</strong> Who's vulnerable</li>
      </ul>

      <h3>Slap Cup Skills</h3>
      <ul>
        <li><strong>Speed bouncing:</strong> Quick makes</li>
        <li><strong>First-try accuracy:</strong> Pass anywhere bonus</li>
        <li><strong>Awareness:</strong> Knowing who's catching up</li>
        <li><strong>Slapping timing:</strong> The satisfying slap</li>
        <li><strong>Recovery:</strong> Fast drinking, fast shooting</li>
      </ul>

      <h2>The Verdict</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-dark-800 p-6 rounded-xl border border-dark-600">
          <h4 className="font-bold text-neon-pink mb-4 text-lg">Play Chandelier If...</h4>
          <ul className="text-gray-300 space-y-2">
            <li>✓ You want to target specific people</li>
            <li>✓ You prefer turn-based play</li>
            <li>✓ You have 4-8 players</li>
            <li>✓ You want elimination drama</li>
            <li>✓ You like strategic targeting</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-6 rounded-xl border border-dark-600">
          <h4 className="font-bold text-neon-blue mb-4 text-lg">Play Slap Cup If...</h4>
          <ul className="text-gray-300 space-y-2">
            <li>✓ You want maximum chaos</li>
            <li>✓ You have 6+ players</li>
            <li>✓ You want racing competition</li>
            <li>✓ You love the slap mechanic</li>
            <li>✓ You want fast games</li>
          </ul>
        </div>
      </div>

      <h2>Similar Games to Try</h2>
      <p>
        If you like these games, check out <Link href="/game/rage-cage" className="text-neon-pink hover:underline">Rage Cage</Link> (similar to Slap Cup but with stacking) or <Link href="/game/beer-pong" className="text-neon-pink hover:underline">Beer Pong</Link> for a more strategic experience.
      </p>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Learn the Full Rules</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/game/chandelier"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Chandelier Rules →
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
