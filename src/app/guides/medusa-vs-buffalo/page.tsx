import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medusa vs Buffalo: Ongoing Rule Drinking Games Compared (2025)",
  description: "Medusa vs Buffalo - compare these unique drinking games with persistent rules. Learn the differences and when to play each game.",
  keywords: [
    "medusa vs buffalo",
    "buffalo drinking game",
    "medusa drinking game",
    "ongoing drinking games",
    "persistent rule games",
    "simple drinking games",
  ],
  openGraph: {
    title: "Medusa vs Buffalo: Drinking Game Comparison",
    description: "Two unique drinking games with different mechanics.",
    type: "article",
    url: "https://sipwiki.app/guides/medusa-vs-buffalo",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/medusa-vs-buffalo",
  },
};

export default function MedusaVsBuffaloPage() {
  return (
    <GuideLayout
      title="Medusa vs Buffalo: Drinking Game Showdown"
      description="Medusa is a quick eye-contact game played in rounds. Buffalo is an ongoing rule that lasts all night. Different games for different situations."
      breadcrumb="Medusa vs Buffalo"
      primaryGame={{ name: "Medusa", slug: "medusa" }}
      relatedGames={[
        { name: "Buffalo", slug: "buffalo", description: "All-night rule" },
        { name: "Most Likely To", slug: "most-likely-to", description: "No-props alternative" },
        { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Social game" },
      ]}
    >
      <QuickAnswer
        question="What's the difference between Medusa and Buffalo?"
        answer="Medusa: Everyone looks down, then up on count - if you make eye contact with someone, you both drink. Quick party game played in rounds. Buffalo: An ongoing rule - you must always drink with your non-dominant hand. Get caught drinking wrong = finish your drink. Lasts all night."
        tips={[
          "Medusa: Played in rounds, quick 5-10 min game",
          "Buffalo: Ongoing rule, lasts entire party",
          "Medusa is a structured game; Buffalo is a lifestyle",
          "Both need no equipment"
        ]}
        variant="primary"
      />

      <h2>Quick Comparison Table</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="py-3 px-4 text-white">Feature</th>
              <th className="py-3 px-4 text-white">Medusa</th>
              <th className="py-3 px-4 text-white">Buffalo</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Type</td>
              <td className="py-3 px-4">Structured round game</td>
              <td className="py-3 px-4">Ongoing rule</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Duration</td>
              <td className="py-3 px-4">5-15 minutes</td>
              <td className="py-3 px-4">All night (forever)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Core Mechanic</td>
              <td className="py-3 px-4">Eye contact = drink</td>
              <td className="py-3 px-4">Wrong hand = finish drink</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Enforcement</td>
              <td className="py-3 px-4">Self-evident (everyone sees)</td>
              <td className="py-3 px-4">Someone must call you out</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">When Played</td>
              <td className="py-3 px-4">As a dedicated game</td>
              <td className="py-3 px-4">Background to all activities</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Players</td>
              <td className="py-3 px-4">4-15</td>
              <td className="py-3 px-4">Any size group</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Skill</td>
              <td className="py-3 px-4">Random (luck)</td>
              <td className="py-3 px-4">Awareness & vigilance</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Punishment</td>
              <td className="py-3 px-4">Sip per match</td>
              <td className="py-3 px-4">FINISH your drink</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>How Medusa Works</h2>
      <ul>
        <li>Everyone stands in a circle with drinks</li>
        <li>All look DOWN at the floor/table</li>
        <li>Someone counts "1, 2, 3, MEDUSA!"</li>
        <li>Everyone looks UP at someone in the circle</li>
        <li>If two people lock eyes = both drink</li>
        <li>If you're looking at someone who's not looking at you = safe</li>
        <li>Play 5-10 rounds</li>
      </ul>

      <h2>How Buffalo Works</h2>
      <ul>
        <li>Everyone agrees to the Buffalo rule at the start</li>
        <li><strong>The Rule:</strong> You must always drink with your non-dominant hand</li>
        <li>If someone sees you drinking wrong, they call "BUFFALO!"</li>
        <li>You must finish your entire drink immediately</li>
        <li>Rule lasts the entire party (some say forever)</li>
        <li>Vigilance is key - watch your friends constantly</li>
      </ul>

      <h2>When to Play Medusa</h2>
      <ul>
        <li><strong>Quick game:</strong> Need a 5-10 minute activity</li>
        <li><strong>Icebreaker:</strong> Gets strangers laughing</li>
        <li><strong>Between games:</strong> Transition activity</li>
        <li><strong>Luck-based:</strong> No skill required</li>
        <li><strong>Everyone participates:</strong> Whole group plays each round</li>
        <li><strong>Light drinking:</strong> Sips, not full drinks</li>
      </ul>

      <h2>When to Play Buffalo</h2>
      <ul>
        <li><strong>All-night rule:</strong> Ongoing throughout party</li>
        <li><strong>Add stakes:</strong> Layer on top of other games</li>
        <li><strong>Friend groups:</strong> Works best when everyone knows the rule</li>
        <li><strong>Vigilance test:</strong> Rewards paying attention</li>
        <li><strong>High stakes:</strong> Finish your whole drink</li>
        <li><strong>Tradition:</strong> Many friend groups play permanently</li>
      </ul>

      <h2>Key Differences Explained</h2>

      <h3>Game vs Rule</h3>
      <p>
        <strong>Medusa</strong> is a discrete game - you play it, it ends, you move on. You gather,
        play rounds, finish, and can do other things.
      </p>
      <p>
        <strong>Buffalo</strong> isn't a game you "play" - it's a rule that's always active. You could
        be playing Beer Pong, doing shots, or just chatting - Buffalo is always lurking in the
        background waiting for someone to slip up.
      </p>

      <h3>Punishment Severity</h3>
      <p>
        <strong>Medusa:</strong> You take a sip when you match eyes. It's light - maybe 10-15 sips
        across a whole game. Friendly and social.
      </p>
      <p>
        <strong>Buffalo:</strong> You finish your ENTIRE drink. If you're holding a full beer, that's
        a lot. If it's a cocktail, even worse. The punishment is severe by design.
      </p>

      <h2>Strategy</h2>

      <h3>Medusa Strategy</h3>
      <ul>
        <li>There is none - it's pure luck</li>
        <li>Some try to "predict" where others will look</li>
        <li>You could avoid looking at certain people</li>
        <li>But honestly? Just have fun with it</li>
      </ul>

      <h3>Buffalo Strategy</h3>
      <ul>
        <li>Switch drinks to your non-dominant hand immediately</li>
        <li>Set your drink down when not actively sipping</li>
        <li>Watch others constantly - calling Buffalo is fun</li>
        <li>Don't get a full drink right after getting Buffalo'd</li>
        <li>Be extra careful late night when reactions are slower</li>
      </ul>

      <h2>The Verdict</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-dark-800 p-6 rounded-xl border border-dark-600">
          <h4 className="font-bold text-neon-pink mb-4 text-lg">Play Medusa If...</h4>
          <ul className="text-gray-300 space-y-2">
            <li>✓ You want a quick party game</li>
            <li>✓ You're breaking the ice</li>
            <li>✓ You want light drinking</li>
            <li>✓ You like luck-based games</li>
            <li>✓ You need a transition activity</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-6 rounded-xl border border-dark-600">
          <h4 className="font-bold text-neon-blue mb-4 text-lg">Play Buffalo If...</h4>
          <ul className="text-gray-300 space-y-2">
            <li>✓ You want an all-night rule</li>
            <li>✓ You like high-stakes punishments</li>
            <li>✓ You want ongoing vigilance</li>
            <li>✓ Your group plays Buffalo traditionally</li>
            <li>✓ You want to layer on other games</li>
          </ul>
        </div>
      </div>

      <h2>Play Both!</h2>
      <p>
        These aren't competing games - they're completely different. Play Medusa as a structured
        activity, while Buffalo runs in the background all night. They complement each other
        perfectly.
      </p>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Learn the Full Rules</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/games/medusa"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Medusa Rules →
          </Link>
          <Link
            href="/games/buffalo"
            className="inline-block px-6 py-3 bg-neon-blue text-white rounded-lg hover:bg-neon-blue/80 transition-colors"
          >
            Buffalo Rules →
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
