import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Never Have I Ever vs Truth or Dare: Which Game to Play?",
  description: "Never Have I Ever vs Truth or Dare drinking game comparison. Learn the differences, when to play each, and which confession game is right for your group.",
  keywords: [
    "Never Have I Ever vs Truth or Dare",
    "Truth or Dare vs Never Have I Ever",
    "confession drinking games",
    "party icebreaker games",
    "embarrassing drinking games",
    "social drinking games",
    "drinking game comparison",
    "which party game"
  ],
  openGraph: {
    title: "Never Have I Ever vs Truth or Dare: The Comparison",
    description: "Which confession game will reveal more at your party?",
    type: "article",
    url: "https://sipwiki.app/guides/never-have-i-ever-vs-truth-or-dare",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/never-have-i-ever-vs-truth-or-dare",
  },
};

export default function NeverHaveIEverVsTruthOrDarePage() {
  return (
    <GuideLayout
      title="Never Have I Ever vs Truth or Dare: Which Confession Game Wins?"
      description="Both games reveal secrets and create memorable moments. But they work very differently. Here's how to pick the right one for your group."
      breadcrumb="Never Have I Ever vs Truth or Dare"
    >
      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h2 className="text-xl font-bold text-white mb-4">Quick Comparison</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-bold text-neon-pink mb-2">Never Have I Ever</h3>
            <ul className="text-gray-300 space-y-1">
              <li>• Anonymous confessions</li>
              <li>• Group-based</li>
              <li>• No one put on the spot</li>
              <li>• Reveals past experiences</li>
              <li>• Low pressure</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-neon-blue mb-2">Truth or Dare</h3>
            <ul className="text-gray-300 space-y-1">
              <li>• Direct questioning</li>
              <li>• One person at a time</li>
              <li>• Individual spotlight</li>
              <li>• Truths AND actions</li>
              <li>• Higher pressure</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>How Never Have I Ever Works</h2>
      <p>
        <Link href="/guides/never-have-i-ever-questions" className="text-neon-pink hover:underline">Never Have I Ever</Link> is
        a confession game where players admit to past experiences:
      </p>
      <ul>
        <li>Someone says &quot;Never have I ever [done something]&quot;</li>
        <li>Anyone who HAS done that thing drinks</li>
        <li>No follow-up questions required (but encouraged)</li>
        <li>Confessions are somewhat anonymous (in a group)</li>
        <li>Goal: Find out who&apos;s done what</li>
      </ul>

      <h2>How Truth or Dare Works</h2>
      <p>
        <Link href="/guides/truth-or-dare-drinking-game" className="text-neon-pink hover:underline">Truth or Dare</Link> puts
        one person in the spotlight with a choice:
      </p>
      <ul>
        <li>One person is asked &quot;Truth or Dare?&quot;</li>
        <li><strong>Truth:</strong> Answer a question honestly</li>
        <li><strong>Dare:</strong> Complete a challenge</li>
        <li>Refuse either? Take a penalty drink (or multiple)</li>
        <li>Then they choose the next person</li>
      </ul>

      <h2>Key Differences</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-left text-gray-300">
          <thead className="text-white bg-dark-700">
            <tr>
              <th className="p-3">Feature</th>
              <th className="p-3">Never Have I Ever</th>
              <th className="p-3">Truth or Dare</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-600">
            <tr>
              <td className="p-3 font-medium">Spotlight</td>
              <td className="p-3">Distributed (group drinks together)</td>
              <td className="p-3">Individual (one person at a time)</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Control</td>
              <td className="p-3">Person asking sets topic</td>
              <td className="p-3">Person answering chooses T or D</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Confession Type</td>
              <td className="p-3">Past experiences only</td>
              <td className="p-3">Truths + live actions</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Embarrassment</td>
              <td className="p-3">Medium (shared with others)</td>
              <td className="p-3">High (solo spotlight)</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Privacy</td>
              <td className="p-3">Can blend in if common</td>
              <td className="p-3">No hiding</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Physical Activity</td>
              <td className="p-3">None (just drinking)</td>
              <td className="p-3">Yes (dares)</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Best Group Size</td>
              <td className="p-3">5-15 people</td>
              <td className="p-3">4-10 people</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>When to Play Never Have I Ever</h2>
      <ul>
        <li><strong>Getting to know people:</strong> Great icebreaker for new groups</li>
        <li><strong>Large groups:</strong> Everyone participates simultaneously</li>
        <li><strong>Shy players:</strong> Less individual pressure</li>
        <li><strong>Want confessions:</strong> Focused on past experiences</li>
        <li><strong>Mixed comfort levels:</strong> People can blend in</li>
        <li><strong>Any location:</strong> Works anywhere, no space needed</li>
      </ul>

      <h2>When to Play Truth or Dare</h2>
      <ul>
        <li><strong>Close friends:</strong> Comfortable being put on the spot</li>
        <li><strong>Smaller groups:</strong> More turns per person</li>
        <li><strong>Want action:</strong> Dares add physical entertainment</li>
        <li><strong>Competitive group:</strong> People willing to be dared</li>
        <li><strong>Private setting:</strong> Some dares need space/privacy</li>
        <li><strong>Drama seekers:</strong> More confrontational and direct</li>
      </ul>

      <h2>Spice Level Comparison</h2>

      <h3>Never Have I Ever</h3>
      <div className="bg-dark-800 p-4 rounded-lg my-4">
        <p className="text-gray-300">
          <strong>Mild:</strong> &quot;Never have I ever been to Europe&quot;<br/>
          <strong>Medium:</strong> &quot;Never have I ever lied to get out of plans&quot;<br/>
          <strong>Spicy:</strong> &quot;Never have I ever hooked up with someone in this room&quot;<br/>
          <strong>Nuclear:</strong> &quot;Never have I ever had a crush on a friend&apos;s partner&quot;
        </p>
      </div>

      <h3>Truth or Dare</h3>
      <div className="bg-dark-800 p-4 rounded-lg my-4">
        <p className="text-gray-300">
          <strong>Mild Truth:</strong> &quot;What&apos;s your most embarrassing moment?&quot;<br/>
          <strong>Spicy Truth:</strong> &quot;Who in this room would you hook up with?&quot;<br/>
          <strong>Mild Dare:</strong> &quot;Do your best impression of someone here&quot;<br/>
          <strong>Spicy Dare:</strong> &quot;Kiss the person to your left&quot;
        </p>
      </div>

      <h2>Drinking Rules Comparison</h2>

      <h3>Never Have I Ever Drinking</h3>
      <ul>
        <li>Drink if you&apos;ve done the thing</li>
        <li>Multiple people often drink together</li>
        <li>Amount varies by how wild your past is</li>
        <li>Can target specific people with strategic statements</li>
      </ul>

      <h3>Truth or Dare Drinking</h3>
      <ul>
        <li>Drink if you refuse truth or dare</li>
        <li>Amount is penalty (usually 2-3 drinks or a shot)</li>
        <li>Can drink to skip uncomfortable situations</li>
        <li>One person drinks at a time (usually)</li>
      </ul>

      <h2>Combining Both Games</h2>
      <p>You can absolutely play both in one night:</p>
      <ul>
        <li><strong>Start with NHIE:</strong> Warm up, learn about each other</li>
        <li><strong>Switch to T or D:</strong> Once comfortable, get spicier</li>
        <li><strong>Hybrid rules:</strong> NHIE statement, then most interesting story gets asked Truth or Dare</li>
      </ul>

      <h2>Who Usually Wins?</h2>

      <h3>Never Have I Ever</h3>
      <p>&quot;Winner&quot; = person who drinks least (most innocent) OR person who made others drink most (most scandalous questions)</p>

      <h3>Truth or Dare</h3>
      <p>&quot;Winner&quot; = person who completed hardest dare or told most shocking truth</p>

      <h2>The Verdict</h2>
      <div className="bg-gradient-to-r from-pink-900/30 to-blue-900/30 p-6 rounded-xl border border-dark-600 my-6">
        <p className="text-gray-300">
          <strong className="text-white">Choose Never Have I Ever if:</strong> You want to
          learn about everyone&apos;s past, have a larger group, or have people who are shy
          or just meeting. Lower pressure, still scandalous.
        </p>
        <p className="text-gray-300 mt-4">
          <strong className="text-white">Choose Truth or Dare if:</strong> You have a tight
          group of friends comfortable being put on the spot, want physical entertainment
          (dares), and don&apos;t mind individual confrontation.
        </p>
        <p className="text-gray-300 mt-4">
          <strong className="text-white">Best approach:</strong> Start with Never Have I Ever
          as a warm-up, then transition to Truth or Dare once everyone&apos;s loosened up.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Get Questions & Prompts</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/never-have-i-ever-questions"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            200+ NHIE Questions →
          </Link>
          <Link
            href="/guides/truth-or-dare-drinking-game"
            className="inline-block px-6 py-3 bg-neon-blue text-white rounded-lg hover:bg-neon-blue/80 transition-colors"
          >
            Truth or Dare Guide →
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
