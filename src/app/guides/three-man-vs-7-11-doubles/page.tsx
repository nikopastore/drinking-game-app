import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Three Man vs 7-11 Doubles: Dice Drinking Game Comparison (2025)",
  description: "Three Man vs 7-11 Doubles - two classic dice drinking games compared. Learn the differences, rules, and when to play each game.",
  keywords: [
    "three man vs 7-11 doubles",
    "7-11 doubles vs three man",
    "dice drinking games",
    "three man rules",
    "7-11 doubles rules",
    "best dice drinking game",
  ],
  openGraph: {
    title: "Three Man vs 7-11 Doubles: Dice Game Comparison",
    description: "Two legendary dice drinking games face off.",
    type: "article",
    url: "https://sipwiki.app/guides/three-man-vs-7-11-doubles",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/three-man-vs-7-11-doubles",
  },
};

export default function ThreeManVs711DoublesPage() {
  return (
    <GuideLayout
      title="Three Man vs 7-11 Doubles: Dice Drinking Game Showdown"
      description="Two dice games that have dominated drinking game nights for decades. Both use dice but play completely differently. Here's how to choose."
      breadcrumb="Three Man vs 7-11 Doubles"
      primaryGame={{ name: "Three Man", slug: "three-man" }}
      relatedGames={[
        { name: "7-11 Doubles", slug: "7-11-doubles", description: "Racing dice" },
        { name: "Kings Cup", slug: "kings-cup", description: "Card alternative" },
        { name: "Quarters", slug: "quarters", description: "Another skill game" },
      ]}
    >
      <QuickAnswer
        question="What's the difference between Three Man and 7-11 Doubles?"
        answer="Three Man: Turn-based dice rolling where specific combos trigger drinking rules (3s, 7s, 11s, doubles). One person is 'Three Man' and drinks on every 3. 7-11 Doubles: A RACE - one person drinks while another rolls. If they roll 7, 11, or doubles before you finish drinking, you keep going. Totally different energy."
        tips={[
          "Three Man: Turn-based, rule-heavy, one person is targeted",
          "7-11 Doubles: Racing format, intense, back-and-forth",
          "Three Man is more casual; 7-11 Doubles is chaotic",
          "Both only need 2 dice"
        ]}
        variant="primary"
      />

      <h2>Quick Comparison Table</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="py-3 px-4 text-white">Feature</th>
              <th className="py-3 px-4 text-white">Three Man</th>
              <th className="py-3 px-4 text-white">7-11 Doubles</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Core Mechanic</td>
              <td className="py-3 px-4">Roll triggers rules</td>
              <td className="py-3 px-4">Race: drink vs roll</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Turn Structure</td>
              <td className="py-3 px-4">Take turns rolling</td>
              <td className="py-3 px-4">Simultaneous race</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Targeting</td>
              <td className="py-3 px-4">Three Man gets targeted</td>
              <td className="py-3 px-4">Roller chooses victim</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Intensity</td>
              <td className="py-3 px-4">Moderate (with spikes)</td>
              <td className="py-3 px-4">High (constant pressure)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Speed</td>
              <td className="py-3 px-4">Casual pace</td>
              <td className="py-3 px-4">Frantic</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Players</td>
              <td className="py-3 px-4">3-8</td>
              <td className="py-3 px-4">4-10</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Equipment</td>
              <td className="py-3 px-4">2 dice</td>
              <td className="py-3 px-4">2 dice + center cup</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Learning Curve</td>
              <td className="py-3 px-4">Easy (remember rules)</td>
              <td className="py-3 px-4">Very easy (race concept)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>How Three Man Works</h2>
      <ul>
        <li>Roll to determine who starts as "Three Man"</li>
        <li>Take turns rolling two dice</li>
        <li><strong>Roll a 3 (any combo):</strong> Three Man drinks</li>
        <li><strong>Roll a 7:</strong> Person to your left drinks</li>
        <li><strong>Roll an 11:</strong> Person to your right drinks</li>
        <li><strong>Roll doubles:</strong> Give out that many drinks</li>
        <li><strong>Snake eyes (1-1):</strong> Everyone drinks</li>
        <li>Three Man escapes by rolling doubles or a 3, then picks new Three Man</li>
      </ul>

      <h2>How 7-11 Doubles Works</h2>
      <ul>
        <li>Roller fills a center cup and points at someone</li>
        <li>Once victim TOUCHES the cup, roller starts rolling</li>
        <li>Victim must finish the cup before roller gets 7, 11, or doubles</li>
        <li><strong>Roller wins:</strong> Refill cup, victim continues drinking</li>
        <li><strong>Victim wins:</strong> Dice pass left, new roller picks new victim</li>
        <li>Can trap someone for multiple rounds</li>
      </ul>

      <h2>When to Play Three Man</h2>
      <ul>
        <li><strong>Casual game night:</strong> Relaxed pace with moments of intensity</li>
        <li><strong>Want to target one person:</strong> Three Man gets punished</li>
        <li><strong>Like rule-based games:</strong> Multiple outcomes per roll</li>
        <li><strong>Smaller groups:</strong> Works with 3-6 people</li>
        <li><strong>Want to chat:</strong> Pace allows conversation</li>
        <li><strong>Learning dice games:</strong> Good introduction</li>
      </ul>

      <h2>When to Play 7-11 Doubles</h2>
      <ul>
        <li><strong>Want chaos:</strong> High-intensity racing</li>
        <li><strong>Bigger groups:</strong> 6-10 people ideal</li>
        <li><strong>Want revenge:</strong> Target specific people</li>
        <li><strong>High energy needed:</strong> Gets loud and competitive</li>
        <li><strong>Short attention spans:</strong> Non-stop action</li>
        <li><strong>Spectator fun:</strong> Watching races is entertaining</li>
      </ul>

      <h2>Drinking Comparison</h2>

      <h3>Three Man Drinking</h3>
      <p>
        Variable. If you're Three Man, you could drink 10+ times before escaping. If not, you drink
        when someone rolls 7/11 pointing at you, or on doubles/snake eyes. The Three Man role
        creates concentrated drinking for one unlucky person.
      </p>

      <h3>7-11 Doubles Drinking</h3>
      <p>
        Intense bursts. If someone targets you and keeps winning, you might drink 3-4 cups in a row.
        But you could also go long stretches without being picked. The roller controls the chaos.
      </p>

      <div className="bg-yellow-900/30 p-4 rounded-lg my-4 border border-yellow-600/50">
        <p className="text-yellow-300 text-sm">
          <strong>7-11 Doubles Warning:</strong> Getting trapped in 7-11 Doubles can lead to rapid
          consumption. Consider filling cups less full or setting a max number of consecutive rounds
          someone can be targeted.
        </p>
      </div>

      <h2>Strategy Tips</h2>

      <h3>Three Man Strategy</h3>
      <ul>
        <li>Hope for doubles to escape Three Man status</li>
        <li>When rolling doubles, give drinks to whoever put you in Three Man</li>
        <li>If you're good at dice, volunteer for Three Man - you'll escape fast</li>
      </ul>

      <h3>7-11 Doubles Strategy</h3>
      <ul>
        <li>Don't touch the cup until you're ready to CHUG</li>
        <li>Fill cups lighter if you're feeling nice</li>
        <li>Target people who targeted you (revenge is encouraged)</li>
        <li>Roll fast - no pausing to aim</li>
      </ul>

      <h2>The Verdict</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-dark-800 p-6 rounded-xl border border-dark-600">
          <h4 className="font-bold text-neon-pink mb-4 text-lg">Play Three Man If...</h4>
          <ul className="text-gray-300 space-y-2">
            <li>✓ You want casual dice rolling</li>
            <li>✓ You like targeting one person</li>
            <li>✓ You have a smaller group</li>
            <li>✓ You want time to talk between rolls</li>
            <li>✓ You like rule-based outcomes</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-6 rounded-xl border border-dark-600">
          <h4 className="font-bold text-neon-blue mb-4 text-lg">Play 7-11 Doubles If...</h4>
          <ul className="text-gray-300 space-y-2">
            <li>✓ You want high-intensity racing</li>
            <li>✓ You have 6+ people</li>
            <li>✓ You want to target specific people</li>
            <li>✓ You love competitive chaos</li>
            <li>✓ You want simple rules</li>
          </ul>
        </div>
      </div>

      <h2>Why Not Both?</h2>
      <p>
        Start with Three Man for warmup, then switch to 7-11 Doubles when energy is high. Three Man's
        relaxed pace is great early; 7-11 Doubles is perfect when everyone's loose and ready for chaos.
      </p>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Learn the Full Rules</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/games/three-man"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Three Man Rules →
          </Link>
          <Link
            href="/games/7-11-doubles"
            className="inline-block px-6 py-3 bg-neon-blue text-white rounded-lg hover:bg-neon-blue/80 transition-colors"
          >
            7-11 Doubles Rules →
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
