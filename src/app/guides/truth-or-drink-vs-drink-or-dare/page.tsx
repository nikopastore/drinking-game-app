import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Truth or Drink vs Drink or Dare: Question Game Comparison (2025)",
  description: "Truth or Drink vs Drink or Dare - compare these confession drinking games. Learn the differences and which is better for your party.",
  keywords: [
    "truth or drink vs drink or dare",
    "drink or dare vs truth or drink",
    "truth or drink game",
    "drink or dare game",
    "question drinking games",
    "truth or dare drinking",
  ],
  openGraph: {
    title: "Truth or Drink vs Drink or Dare: Which Should You Play?",
    description: "Two confession-style drinking games compared.",
    type: "article",
    url: "https://sipwiki.app/guides/truth-or-drink-vs-drink-or-dare",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/truth-or-drink-vs-drink-or-dare",
  },
};

export default function TruthOrDrinkVsDrinkOrDarePage() {
  return (
    <GuideLayout
      title="Truth or Drink vs Drink or Dare: Question Game Showdown"
      description="Both games put you on the spot with a choice: reveal something or take a drink. But they offer different escapes. Here's how to choose."
      breadcrumb="Truth or Drink vs Drink or Dare"
      primaryGame={{ name: "Truth or Drink", slug: "truth-or-drink" }}
      relatedGames={[
        { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Confession game" },
        { name: "Most Likely To", slug: "most-likely-to", description: "Voting game" },
        { name: "Kings Cup", slug: "kings-cup", description: "Card-based alternative" },
      ]}
    >
      <QuickAnswer
        question="What's the difference between Truth or Drink and Drink or Dare?"
        answer="Truth or Drink: Answer an embarrassing question OR drink to skip it. It's Truth-focused - no dares. Drink or Dare: Do a dare OR drink to skip it. It's Dare-focused - no questions. One tests honesty; the other tests courage. Both let you escape with alcohol."
        tips={[
          "Truth or Drink: Questions + drinking option",
          "Drink or Dare: Dares + drinking option",
          "Truth or Drink reveals secrets",
          "Drink or Dare creates physical comedy"
        ]}
        variant="primary"
      />

      <h2>Quick Comparison Table</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="py-3 px-4 text-white">Feature</th>
              <th className="py-3 px-4 text-white">Truth or Drink</th>
              <th className="py-3 px-4 text-white">Drink or Dare</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Core Choice</td>
              <td className="py-3 px-4">Answer OR drink</td>
              <td className="py-3 px-4">Do dare OR drink</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Focuses On</td>
              <td className="py-3 px-4">Honesty/confession</td>
              <td className="py-3 px-4">Courage/action</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">What's Revealed</td>
              <td className="py-3 px-4">Secrets, stories</td>
              <td className="py-3 px-4">Willingness, bravery</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Physical Activity</td>
              <td className="py-3 px-4">Low (just talking)</td>
              <td className="py-3 px-4">High (doing dares)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Embarrassment Type</td>
              <td className="py-3 px-4">Verbal/confessional</td>
              <td className="py-3 px-4">Physical/performative</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Space Needed</td>
              <td className="py-3 px-4">Minimal (sitting)</td>
              <td className="py-3 px-4">More (moving around)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Best For</td>
              <td className="py-3 px-4">Learning secrets</td>
              <td className="py-3 px-4">Laughing at friends</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Equipment</td>
              <td className="py-3 px-4">Question cards (optional)</td>
              <td className="py-3 px-4">Dare cards (optional)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>How Truth or Drink Works</h2>
      <ul>
        <li>Someone asks you an embarrassing/revealing question</li>
        <li>You have two options: answer honestly OR take a drink</li>
        <li>If you answer, you don't drink</li>
        <li>If you drink, you don't have to answer</li>
        <li>Go around the circle asking questions</li>
        <li>Use pre-made cards or make up questions</li>
      </ul>

      <h3>Example Questions</h3>
      <ul>
        <li>"What's your most embarrassing hookup story?"</li>
        <li>"Who in this room have you thought about romantically?"</li>
        <li>"What's the worst thing you've done at work?"</li>
        <li>"What secret are you keeping from your parents?"</li>
      </ul>

      <h2>How Drink or Dare Works</h2>
      <ul>
        <li>Someone gives you a dare</li>
        <li>You have two options: do the dare OR take a drink</li>
        <li>If you do the dare, you don't drink</li>
        <li>If you drink, you skip the dare</li>
        <li>Go around the circle giving dares</li>
        <li>Use pre-made cards or make up dares</li>
      </ul>

      <h3>Example Dares</h3>
      <ul>
        <li>"Text your ex saying 'I miss you'"</li>
        <li>"Do your best celebrity impression"</li>
        <li>"Let someone post anything on your Instagram"</li>
        <li>"Call your mom and tell her you got a tattoo"</li>
      </ul>

      <h2>When to Play Truth or Drink</h2>
      <ul>
        <li><strong>Want to learn secrets:</strong> Confessions are the focus</li>
        <li><strong>Sitting around:</strong> No space needed</li>
        <li><strong>Deep conversations:</strong> Questions can get personal</li>
        <li><strong>Couples/dates:</strong> Builds intimacy through sharing</li>
        <li><strong>Getting to know people:</strong> Reveals real info</li>
        <li><strong>Prefer verbal games:</strong> No physical tasks</li>
      </ul>

      <h2>When to Play Drink or Dare</h2>
      <ul>
        <li><strong>Want laughs:</strong> Watching friends do dares is hilarious</li>
        <li><strong>Active party:</strong> People are up and moving</li>
        <li><strong>Physical comedy:</strong> Dares create memorable moments</li>
        <li><strong>Photo opportunities:</strong> Dares make great content</li>
        <li><strong>Competitive groups:</strong> "I bet you won't" energy</li>
        <li><strong>Less personal:</strong> Actions over confessions</li>
      </ul>

      <h2>The Drinking Escape</h2>
      <p>Both games let you escape with alcohol, but it signals different things:</p>

      <h3>Drinking in Truth or Drink</h3>
      <p>
        When you drink instead of answering, you're saying "this is too personal/embarrassing to share."
        It makes people MORE curious. What are you hiding? The mystery can be more interesting than
        the truth.
      </p>

      <h3>Drinking in Drink or Dare</h3>
      <p>
        When you drink instead of doing the dare, you're saying "I'm not brave enough" or "that's
        too much." It's a more clear-cut rejection. You just don't want to do the thing.
      </p>

      <h2>Intensity Levels</h2>

      <h3>Truth or Drink Intensity</h3>
      <p>
        Starts light ("what's your celebrity crush?") and can get VERY personal ("what's your biggest
        regret?"). The game gets more intense as people get drunk and guards come down. Be careful
        with deep questions early.
      </p>

      <h3>Drink or Dare Intensity</h3>
      <p>
        Starts silly ("do a dance") and can get wild ("call your boss right now"). Physical dares
        can be embarrassing but temporary. The intensity depends entirely on the dare-giver's creativity.
      </p>

      <h2>The Verdict</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-dark-800 p-6 rounded-xl border border-dark-600">
          <h4 className="font-bold text-neon-pink mb-4 text-lg">Play Truth or Drink If...</h4>
          <ul className="text-gray-300 space-y-2">
            <li>✓ You want to learn secrets</li>
            <li>✓ You prefer sitting/talking games</li>
            <li>✓ You like confessional intimacy</li>
            <li>✓ You're on a date or with couples</li>
            <li>✓ You want verbal embarrassment</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-6 rounded-xl border border-dark-600">
          <h4 className="font-bold text-neon-blue mb-4 text-lg">Play Drink or Dare If...</h4>
          <ul className="text-gray-300 space-y-2">
            <li>✓ You want physical comedy</li>
            <li>✓ Your party is active/moving</li>
            <li>✓ You want hilarious moments</li>
            <li>✓ You prefer action over talk</li>
            <li>✓ You want photo/video content</li>
          </ul>
        </div>
      </div>

      <h2>Hybrid: Truth, Dare, or Drink</h2>
      <p>
        Combine them! On your turn, you can choose Truth (answer a question), Dare (do a challenge),
        or Drink (skip both). This gives maximum flexibility and covers all bases. Many parties play
        this combined version.
      </p>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Learn the Full Rules</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/games/truth-or-drink"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Truth or Drink Rules →
          </Link>
          <Link
            href="/guides/drink-or-dare-rules"
            className="inline-block px-6 py-3 bg-neon-blue text-white rounded-lg hover:bg-neon-blue/80 transition-colors"
          >
            Drink or Dare Rules →
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
