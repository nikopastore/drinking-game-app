import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drunk Jenga vs Kings Cup: Which Drinking Game is Better? (2025)",
  description: "Drunk Jenga vs Kings Cup comparison guide. Compare these two classic drinking games and learn which one is right for your party.",
  keywords: [
    "Drunk Jenga vs Kings Cup",
    "Kings Cup vs Drunk Jenga",
    "card drinking games",
    "block drinking games",
    "best drinking games",
    "drinking game comparison",
    "party drinking games",
    "which drinking game"
  ],
  openGraph: {
    title: "Drunk Jenga vs Kings Cup: The Ultimate Showdown",
    description: "Blocks vs Cards - which classic drinking game wins?",
    type: "article",
    url: "https://sipwiki.app/guides/drunk-jenga-vs-kings-cup",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/drunk-jenga-vs-kings-cup",
  },
};

export default function DrunkJengaVsKingsCupPage() {
  return (
    <GuideLayout
      title="Drunk Jenga vs Kings Cup: Blocks vs Cards"
      description="Two legendary drinking games with very different vibes. Drunk Jenga adds physical tension and customization, while Kings Cup is a classic card game with endless rules. Here's how to choose."
      breadcrumb="Drunk Jenga vs Kings Cup"
    >
      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h2 className="text-xl font-bold text-white mb-4">Quick Comparison</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-bold text-neon-pink mb-2">Drunk Jenga</h3>
            <ul className="text-gray-300 space-y-1">
              <li>• 2-8 players ideal</li>
              <li>• Physical + mental</li>
              <li>• Customizable rules</li>
              <li>• Clear game end</li>
              <li>• Requires purchase</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-neon-blue mb-2">Kings Cup</h3>
            <ul className="text-gray-300 space-y-1">
              <li>• 4-15 players</li>
              <li>• Pure mental game</li>
              <li>• Standard rules (with variations)</li>
              <li>• Ends when kings drawn</li>
              <li>• Just need cards</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>How Drunk Jenga Works</h2>
      <p>
        <Link href="/guides/drunk-jenga-rules" className="text-neon-pink hover:underline">Drunk Jenga</Link> is
        regular Jenga with rules written on each block:
      </p>
      <ul>
        <li>Each block has a rule or challenge</li>
        <li>Pull a block, do what it says</li>
        <li>Stack the block on top</li>
        <li>Tower falls? You drink (and game ends)</li>
        <li>Rules can be customized to your group</li>
      </ul>

      <h2>How Kings Cup Works</h2>
      <p>
        <Link href="/guides/kings-cup-rules" className="text-neon-pink hover:underline">Kings Cup</Link> uses
        a deck of cards where each card has a rule:
      </p>
      <ul>
        <li>Cards spread around a center &quot;King&apos;s Cup&quot;</li>
        <li>Draw a card, follow the rule</li>
        <li>Ace = Waterfall, 2 = You, 3 = Me, etc.</li>
        <li>Kings poured into center cup</li>
        <li>Fourth King drawn = drinks the King&apos;s Cup</li>
      </ul>

      <h2>Key Differences</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-left text-gray-300">
          <thead className="text-white bg-dark-700">
            <tr>
              <th className="p-3">Feature</th>
              <th className="p-3">Drunk Jenga</th>
              <th className="p-3">Kings Cup</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-600">
            <tr>
              <td className="p-3 font-medium">Physical Skill</td>
              <td className="p-3">High (steady hands needed)</td>
              <td className="p-3">None</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Customization</td>
              <td className="p-3">Fully customizable blocks</td>
              <td className="p-3">Some rule variations</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Replayability</td>
              <td className="p-3">High (new rules each time)</td>
              <td className="p-3">Medium (same 13 cards)</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Setup</td>
              <td className="p-3">Build tower (2 min)</td>
              <td className="p-3">Spread cards (30 sec)</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Game End</td>
              <td className="p-3">Tower falls</td>
              <td className="p-3">Fourth King drawn</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Equipment Cost</td>
              <td className="p-3">$15-25 for set</td>
              <td className="p-3">Free (any cards work)</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Drunk Difficulty</td>
              <td className="p-3">Gets much harder</td>
              <td className="p-3">Stays about the same</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>When to Play Drunk Jenga</h2>
      <ul>
        <li><strong>Smaller groups:</strong> 4-6 people is perfect</li>
        <li><strong>Want physical challenge:</strong> Steady hands matter</li>
        <li><strong>Have time to customize:</strong> Writing rules is fun</li>
        <li><strong>Want escalating tension:</strong> Tower gets shakier</li>
        <li><strong>Clear endpoint needed:</strong> Tower falls, game ends</li>
        <li><strong>Repeat playability:</strong> Change rules for new experience</li>
      </ul>

      <h2>When to Play Kings Cup</h2>
      <ul>
        <li><strong>Larger groups:</strong> Works with 10+ people</li>
        <li><strong>No prep time:</strong> Just grab cards and go</li>
        <li><strong>Want classic experience:</strong> Everyone knows it</li>
        <li><strong>Minimal equipment:</strong> Just need a deck of cards</li>
        <li><strong>Want the King&apos;s Cup drama:</strong> The final drink is legendary</li>
        <li><strong>Mixed experience levels:</strong> Rules are well-known</li>
      </ul>

      <h2>Drunk Jenga Block Ideas</h2>
      <div className="bg-dark-800 p-4 rounded-lg my-4">
        <p className="text-gray-300">
          <strong>Basic:</strong> &quot;Take 2 drinks&quot;, &quot;Give 3 drinks&quot;<br/>
          <strong>Social:</strong> &quot;Everyone drinks&quot;, &quot;Opposite gender drinks&quot;<br/>
          <strong>Rules:</strong> &quot;No first names&quot;, &quot;No pointing&quot;<br/>
          <strong>Dares:</strong> &quot;Text your ex&quot;, &quot;Do an impression&quot;<br/>
          <strong>Wild:</strong> &quot;Switch drinks with someone&quot;, &quot;Waterfall&quot;
        </p>
      </div>

      <h2>Kings Cup Card Rules</h2>
      <div className="bg-dark-800 p-4 rounded-lg my-4">
        <p className="text-gray-300">
          <strong>Ace:</strong> Waterfall<br/>
          <strong>2:</strong> You (give drinks)<br/>
          <strong>3:</strong> Me (take drinks)<br/>
          <strong>4:</strong> Floor (touch floor, last drinks)<br/>
          <strong>5:</strong> Guys drink<br/>
          <strong>6:</strong> Chicks drink<br/>
          <strong>7:</strong> Heaven (last to point up drinks)<br/>
          <strong>8:</strong> Mate (choose drinking partner)<br/>
          <strong>9:</strong> Rhyme<br/>
          <strong>10:</strong> Categories<br/>
          <strong>Jack:</strong> Make a rule<br/>
          <strong>Queen:</strong> Questions<br/>
          <strong>King:</strong> Pour into center cup
        </p>
      </div>

      <h2>Social Dynamics</h2>

      <h3>Drunk Jenga</h3>
      <ul>
        <li>Individual turns, group watches</li>
        <li>Tension builds as tower wobbles</li>
        <li>Cheering when someone struggles</li>
        <li>Clear loser when tower falls</li>
        <li>Custom rules can target individuals</li>
      </ul>

      <h3>Kings Cup</h3>
      <ul>
        <li>Quick turns, constant engagement</li>
        <li>Rules apply to multiple people</li>
        <li>Mate and rule cards create dynamics</li>
        <li>Fourth King is dramatic finale</li>
        <li>More group participation per turn</li>
      </ul>

      <h2>Equipment</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <a href="https://www.amazon.com/s?k=drunk+jenga+drinking+game&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Drunk Jenga Set</h4>
          <p className="text-gray-400 text-sm">Pre-written blocks or DIY</p>
          <span className="text-neon-pink font-bold">$15-25</span>
        </a>
        <a href="https://www.amazon.com/s?k=giant+jenga+outdoor&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Giant Jenga</h4>
          <p className="text-gray-400 text-sm">Outdoor parties, bigger blocks</p>
          <span className="text-neon-pink font-bold">$40-80</span>
        </a>
        <a href="https://www.amazon.com/s?k=waterproof+playing+cards&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Waterproof Cards</h4>
          <p className="text-gray-400 text-sm">Survive drink spills</p>
          <span className="text-neon-pink font-bold">$8-15</span>
        </a>
        <a href="https://www.amazon.com/s?k=kings+cup+drinking+game&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Kings Cup Set</h4>
          <p className="text-gray-400 text-sm">Cards with rules printed</p>
          <span className="text-neon-pink font-bold">$12-18</span>
        </a>
      </div>

      <h2>Difficulty as You Drink</h2>

      <h3>Drunk Jenga</h3>
      <p>Gets MUCH harder as you drink. Shaky hands + wobbly tower = disaster. This is part of the fun - watching drunk friends try to carefully extract blocks is hilarious.</p>

      <h3>Kings Cup</h3>
      <p>Stays relatively easy. The main challenge is remembering rules (especially Jack-made rules) and not messing up rhymes/categories when drunk.</p>

      <h2>The Verdict</h2>
      <div className="bg-gradient-to-r from-pink-900/30 to-blue-900/30 p-6 rounded-xl border border-dark-600 my-6">
        <p className="text-gray-300">
          <strong className="text-white">Choose Drunk Jenga if:</strong> You want
          physical challenge, dramatic tension, customizable rules, and a clear end point.
          Perfect for smaller groups who want a unique experience.
        </p>
        <p className="text-gray-300 mt-4">
          <strong className="text-white">Choose Kings Cup if:</strong> You have a
          larger group, want minimal setup, love the classic rules, and want everyone
          constantly involved. The King&apos;s Cup finale is always dramatic.
        </p>
        <p className="text-gray-300 mt-4">
          <strong className="text-white">Pro tip:</strong> Play Kings Cup as a warm-up
          (while sober enough to remember rules), then switch to Drunk Jenga when the
          shaky hands make it entertaining.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Learn the Full Rules</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/drunk-jenga-rules"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Drunk Jenga Rules →
          </Link>
          <Link
            href="/guides/kings-cup-rules"
            className="inline-block px-6 py-3 bg-neon-blue text-white rounded-lg hover:bg-neon-blue/80 transition-colors"
          >
            Kings Cup Rules →
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
