import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kings Cup vs Ride the Bus: Which Card Game is Better? (2025)",
  description: "Kings Cup vs Ride the Bus - which card drinking game should you play? Complete comparison of rules, group size, intensity, and when to play each game.",
  keywords: [
    "kings cup vs ride the bus",
    "ride the bus vs kings cup",
    "best card drinking game",
    "kings cup or ride the bus",
    "card drinking game comparison",
    "circle of death vs ride the bus"
  ],
  openGraph: {
    title: "Kings Cup vs Ride the Bus: Card Game Comparison",
    description: "Which card drinking game should you play? Complete comparison guide.",
    type: "article",
    url: "https://sipwiki.app/guides/kings-cup-vs-ride-the-bus-comparison",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/kings-cup-vs-ride-the-bus-comparison",
  },
};

export default function KingsCupVsRideTheBusPage() {
  return (
    <GuideLayout
      title="Kings Cup vs Ride the Bus: The Card Drinking Game Showdown"
      description="Both are legendary card drinking games, but they play very differently. Here's how to choose between Kings Cup and Ride the Bus for your next party."
      breadcrumb="Kings Cup vs Ride the Bus"
      primaryGame={{ name: "Kings Cup", slug: "kings-cup" }}
      relatedGames={[
        { name: "Ride the Bus", slug: "ride-the-bus", description: "The competitor" },
        { name: "Across the Bridge", slug: "across-the-bridge", description: "Similar vibes" },
        { name: "Waterfall", slug: "waterfall", description: "Another classic" },
      ]}
    >
      <QuickAnswer
        question="Which is better: Kings Cup or Ride the Bus?"
        answer="Kings Cup is better for casual, social play with larger groups where everyone participates equally. Ride the Bus is better when you want high-stakes intensity with one person in the hot seat at the end. Both are card game classics!"
        tips={[
          "Kings Cup: Social, everyone plays, moderate drinking",
          "Ride the Bus: Intense ending, one loser drinks heavy",
          "Pregaming: Kings Cup (even drinking)",
          "Drama seekers: Ride the Bus (someone gets destroyed)"
        ]}
        variant="primary"
      />

      <h2>Quick Comparison Table</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="py-3 px-4 text-white">Feature</th>
              <th className="py-3 px-4 text-white">Kings Cup</th>
              <th className="py-3 px-4 text-white">Ride the Bus</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Players</td>
              <td className="py-3 px-4">4-15+</td>
              <td className="py-3 px-4">4-10</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Game Length</td>
              <td className="py-3 px-4">20-45 minutes</td>
              <td className="py-3 px-4">15-30 minutes</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Structure</td>
              <td className="py-3 px-4">Continuous rounds</td>
              <td className="py-3 px-4">Phases → Final round</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Drinking Style</td>
              <td className="py-3 px-4">Spread out, everyone drinks</td>
              <td className="py-3 px-4">Loser drinks heavy at end</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Drama Level</td>
              <td className="py-3 px-4">Medium (rule cards)</td>
              <td className="py-3 px-4">High (bus rider)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Skill vs Luck</td>
              <td className="py-3 px-4">95% luck, some social skill</td>
              <td className="py-3 px-4">80% luck, 20% probability</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Equipment</td>
              <td className="py-3 px-4">Cards + King&apos;s Cup</td>
              <td className="py-3 px-4">Just cards</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>How Each Game Works</h2>

      <h3>Kings Cup Overview</h3>
      <p>
        Cards are spread in a circle around a central &quot;King&apos;s Cup.&quot; Players take turns drawing
        cards, each with a specific action or rule. The game continues until all cards are drawn
        or someone breaks the circle.
      </p>
      <ul>
        <li>Each card has a rule (2 = You, 3 = Me, etc.)</li>
        <li>Drinking is spread throughout the game</li>
        <li>Rule cards (like &quot;Make a Rule&quot;) add ongoing effects</li>
        <li>The person who draws the 4th King drinks the King&apos;s Cup</li>
      </ul>

      <h3>Ride the Bus Overview</h3>
      <p>
        A multi-phase game where players build a hand, then one unlucky person &quot;rides the bus.&quot;
        The bus rider faces a pyramid of cards and can end up drinking a LOT if luck isn&apos;t on their side.
      </p>
      <ul>
        <li><strong>Phase 1:</strong> Build a 4-card hand (red/black, higher/lower, etc.)</li>
        <li><strong>Phase 2:</strong> Pyramid round - give or take drinks based on matching cards</li>
        <li><strong>Phase 3:</strong> Whoever has the most cards &quot;rides the bus&quot;</li>
        <li><strong>The Bus:</strong> Guess through a line of cards - wrong = start over</li>
      </ul>

      <h2>When to Play Kings Cup</h2>
      <p>Choose Kings Cup when you want:</p>
      <ul>
        <li><strong>Everyone drinking equally:</strong> No one person gets destroyed</li>
        <li><strong>Social interaction:</strong> Rule cards create conversations</li>
        <li><strong>Flexibility:</strong> Works with any group size</li>
        <li><strong>Longer play:</strong> Ongoing game while hanging out</li>
        <li><strong>Pregaming:</strong> Even drinking before going out</li>
        <li><strong>Mixed skill levels:</strong> No strategy required</li>
      </ul>

      <h3>Best Kings Cup Situations</h3>
      <ul>
        <li>Pregaming before bars/clubs</li>
        <li>House parties with new people</li>
        <li>When you want background game energy</li>
        <li>Groups with different drinking preferences</li>
        <li>When you need icebreakers (rule cards help)</li>
      </ul>

      <h2>When to Play Ride the Bus</h2>
      <p>Choose Ride the Bus when you want:</p>
      <ul>
        <li><strong>High stakes:</strong> Dramatic ending with one loser</li>
        <li><strong>Spectator energy:</strong> Everyone watching the bus rider</li>
        <li><strong>Defined ending:</strong> Clear start and finish</li>
        <li><strong>Strategy elements:</strong> Probability-based decisions</li>
        <li><strong>Group chaos:</strong> Cheering when someone fails</li>
      </ul>

      <h3>Best Ride the Bus Situations</h3>
      <ul>
        <li>Smaller, close friend groups</li>
        <li>When someone &quot;deserves&quot; to drink more</li>
        <li>Competitive group dynamics</li>
        <li>After dinner drinking games</li>
        <li>When you want dramatic moments</li>
      </ul>

      <h2>Drinking Intensity Comparison</h2>

      <h3>Kings Cup Drinking Pattern</h3>
      <p>
        Drinking is distributed throughout the game. You might drink 1-3 sips multiple times,
        with occasional bigger drinks (waterfall, categories). The only heavy drinking moment
        is drinking the King&apos;s Cup at the end.
      </p>
      <div className="bg-dark-800 p-4 rounded-lg my-4">
        <p className="text-gray-300 text-sm">
          <strong>Typical game:</strong> 8-15 small drinks per person over 30 minutes
        </p>
      </div>

      <h3>Ride the Bus Drinking Pattern</h3>
      <p>
        Early phases have moderate drinking during the pyramid. But the bus rider at the end
        can drink 10-20+ drinks in rapid succession if unlucky. It&apos;s front-loaded normal,
        back-loaded intense.
      </p>
      <div className="bg-dark-800 p-4 rounded-lg my-4">
        <p className="text-gray-300 text-sm">
          <strong>Typical game:</strong> Most people drink 5-10, bus rider drinks 15-30
        </p>
      </div>

      <div className="bg-yellow-900/30 p-4 rounded-lg my-4 border border-yellow-600/50">
        <p className="text-yellow-300 text-sm">
          <strong>Warning:</strong> Ride the Bus can be intense for the loser. Make sure everyone
          is okay with potentially drinking a lot, or use sips instead of full drinks.
        </p>
      </div>

      <h2>The Verdict: Which Should You Play?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-dark-800 p-6 rounded-xl border border-dark-600">
          <h4 className="font-bold text-neon-pink mb-4 text-lg">Play Kings Cup If...</h4>
          <ul className="text-gray-300 space-y-2">
            <li>✓ You have a larger group (6+)</li>
            <li>✓ You want even drinking distribution</li>
            <li>✓ You&apos;re pregaming</li>
            <li>✓ You want ongoing background game</li>
            <li>✓ You have new people joining</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-6 rounded-xl border border-dark-600">
          <h4 className="font-bold text-neon-blue mb-4 text-lg">Play Ride the Bus If...</h4>
          <ul className="text-gray-300 space-y-2">
            <li>✓ You have a smaller group (4-8)</li>
            <li>✓ You want dramatic moments</li>
            <li>✓ Everyone can handle intense drinking</li>
            <li>✓ You want defined start/end</li>
            <li>✓ You like high-stakes finishes</li>
          </ul>
        </div>
      </div>

      <h2>Combo Option: Play Both!</h2>
      <p>
        Start with Kings Cup as a warmup to get everyone drinking and socializing. Once
        the energy is up and people are comfortable, transition to Ride the Bus for a
        dramatic finale. The bus rider becomes the legend (or victim) of the night!
      </p>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Ready to Play?</h3>
        <p className="text-gray-400 mb-4">
          Learn the complete rules for both games.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/kings-cup-rules"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Kings Cup Rules →
          </Link>
          <Link
            href="/guides/ride-the-bus-rules"
            className="inline-block px-6 py-3 bg-neon-blue text-white rounded-lg hover:bg-neon-blue/80 transition-colors"
          >
            Ride the Bus Rules →
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
