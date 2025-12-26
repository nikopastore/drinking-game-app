import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quarters vs Power Hour: Which Drinking Game Should You Play?",
  description: "Quarters vs Power Hour comparison guide. One tests your skill, the other tests your endurance. Learn when to play each drinking game.",
  keywords: [
    "Quarters vs Power Hour",
    "Power Hour vs Quarters",
    "coin drinking games",
    "timed drinking games",
    "skill drinking games",
    "endurance drinking games",
    "drinking game comparison",
    "which drinking game"
  ],
  openGraph: {
    title: "Quarters vs Power Hour: Skill vs Endurance",
    description: "Compare these two classic drinking games and find your match.",
    type: "article",
    url: "https://sipwiki.app/guides/quarters-vs-power-hour",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/quarters-vs-power-hour",
  },
};

export default function QuartersVsPowerHourPage() {
  return (
    <GuideLayout
      title="Quarters vs Power Hour: Skill or Endurance?"
      description="These games couldn't be more different. Quarters tests your aim and coordination. Power Hour tests your capacity and pacing. Here's the breakdown."
      breadcrumb="Quarters vs Power Hour"
    >
      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h2 className="text-xl font-bold text-white mb-4">Quick Comparison</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-bold text-neon-pink mb-2">Quarters</h3>
            <ul className="text-gray-300 space-y-1">
              <li>• 2-10 players</li>
              <li>• Skill-based</li>
              <li>• Variable length</li>
              <li>• Drink when you lose</li>
              <li>• Social and competitive</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-neon-blue mb-2">Power Hour</h3>
            <ul className="text-gray-300 space-y-1">
              <li>• Any number of players</li>
              <li>• Endurance-based</li>
              <li>• Exactly 60 minutes</li>
              <li>• Drink every minute</li>
              <li>• Communal experience</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>How Quarters Works</h2>
      <p>
        <Link href="/guides/quarters-rules" className="text-neon-pink hover:underline">Quarters</Link> is
        a skill-based drinking game where players try to bounce a quarter off the table and
        into a cup or shot glass:
      </p>
      <ul>
        <li>Players take turns bouncing a quarter</li>
        <li>Make it in? Choose someone to drink</li>
        <li>Miss? Next player&apos;s turn</li>
        <li>Make 3 in a row? Make a rule</li>
        <li>Games can be short or go all night</li>
      </ul>

      <h2>How Power Hour Works</h2>
      <p>
        <Link href="/guides/power-hour-rules" className="text-neon-pink hover:underline">Power Hour</Link> is
        an endurance challenge: take a shot of beer every minute for 60 minutes:
      </p>
      <ul>
        <li>Set a timer or play a Power Hour playlist</li>
        <li>Every 60 seconds, take a shot (1-1.5 oz) of beer</li>
        <li>That&apos;s 60 shots = roughly 6-7.5 beers in one hour</li>
        <li>Century Club variant: 100 shots in 100 minutes</li>
        <li>No skill required, just commitment</li>
      </ul>

      <h2>Key Differences</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-left text-gray-300">
          <thead className="text-white bg-dark-700">
            <tr>
              <th className="p-3">Feature</th>
              <th className="p-3">Quarters</th>
              <th className="p-3">Power Hour</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-600">
            <tr>
              <td className="p-3 font-medium">Game Type</td>
              <td className="p-3">Skill/Aim</td>
              <td className="p-3">Endurance/Pacing</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Duration</td>
              <td className="p-3">Variable (15-60+ min)</td>
              <td className="p-3">Exactly 60 minutes</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Drinking Amount</td>
              <td className="p-3">Depends on skill</td>
              <td className="p-3">~6-7 beers guaranteed</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Required Items</td>
              <td className="p-3">Quarter, cup</td>
              <td className="p-3">Timer, shot glasses, lots of beer</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Skill Impact</td>
              <td className="p-3">High (good = drink less)</td>
              <td className="p-3">None (everyone drinks same)</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Social Aspect</td>
              <td className="p-3">Competitive, head-to-head</td>
              <td className="p-3">Communal, everyone together</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Best For</td>
              <td className="p-3">Casual hangouts</td>
              <td className="p-3">Pre-gaming, celebrations</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>When to Play Quarters</h2>
      <ul>
        <li><strong>Small group:</strong> Works best with 2-6 people</li>
        <li><strong>Casual night:</strong> Can play for 20 min or 2 hours</li>
        <li><strong>Want to control intake:</strong> Skill means less drinking if you&apos;re good</li>
        <li><strong>Competitive friends:</strong> Bragging rights for the skilled</li>
        <li><strong>Minimal supplies:</strong> Just need a quarter and a cup</li>
        <li><strong>Bar setting:</strong> Easy to play anywhere</li>
      </ul>

      <h2>When to Play Power Hour</h2>
      <ul>
        <li><strong>Pre-gaming:</strong> Perfect to get everyone on the same level</li>
        <li><strong>Celebrations:</strong> Birthdays, milestones (21st birthday tradition)</li>
        <li><strong>Group bonding:</strong> Everyone suffers/celebrates together</li>
        <li><strong>Music lovers:</strong> Power Hour playlists are part of the fun</li>
        <li><strong>Structure wanted:</strong> Fixed time, clear end point</li>
        <li><strong>Want to get drunk:</strong> Mission accomplished every time</li>
      </ul>

      <h2>Difficulty Comparison</h2>

      <h3>Quarters Difficulty</h3>
      <ul>
        <li><strong>Learning curve:</strong> Takes practice to get consistent</li>
        <li><strong>Getting worse:</strong> Harder as you drink (coordination drops)</li>
        <li><strong>Skill ceiling:</strong> Some people become scary good</li>
        <li><strong>House rules:</strong> Can add complexity with rules variations</li>
      </ul>

      <h3>Power Hour Difficulty</h3>
      <ul>
        <li><strong>Physical:</strong> 60 sips in 60 minutes is a lot of liquid</li>
        <li><strong>Mental:</strong> Staying focused as you get drunker</li>
        <li><strong>The wall:</strong> Minutes 30-45 are the hardest</li>
        <li><strong>Century Club:</strong> 100 minutes is elite difficulty</li>
      </ul>

      <h2>Supplies Needed</h2>

      <h3>Quarters Setup</h3>
      <ul>
        <li>1 quarter (or any coin)</li>
        <li>1 cup or shot glass</li>
        <li>Drinks of choice</li>
        <li>Hard, smooth table surface</li>
      </ul>

      <h3>Power Hour Setup</h3>
      <ul>
        <li>Shot glasses (1 per person)</li>
        <li>6-8 beers per person</li>
        <li>Timer or Power Hour playlist</li>
        <li>Pitcher or easy pouring system</li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <a href="https://www.amazon.com/s?k=shot+glasses+set+12&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Shot Glass Set</h4>
          <p className="text-gray-400 text-sm">Perfect for Power Hour</p>
          <span className="text-neon-pink font-bold">$12-20</span>
        </a>
        <a href="https://www.amazon.com/s?k=beer+pitcher+plastic&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Beer Pitcher</h4>
          <p className="text-gray-400 text-sm">Easy pouring for group</p>
          <span className="text-neon-pink font-bold">$10-15</span>
        </a>
      </div>

      <h2>Can You Combine Them?</h2>
      <p>Yes! Some creative variations:</p>
      <ul>
        <li><strong>Quarters Power Hour:</strong> Play Quarters, but everyone also takes a shot every 5 minutes</li>
        <li><strong>Power Quarters:</strong> During Power Hour, whoever made the least shots that minute drinks double</li>
        <li><strong>Half and Half:</strong> 30 min of Power Hour, then switch to Quarters</li>
      </ul>

      <h2>The Verdict</h2>
      <div className="bg-gradient-to-r from-pink-900/30 to-blue-900/30 p-6 rounded-xl border border-dark-600 my-6">
        <p className="text-gray-300">
          <strong className="text-white">Choose Quarters if:</strong> You want a chill, skill-based
          game where your aim determines how much you drink. Great for extended hangouts.
        </p>
        <p className="text-gray-300 mt-4">
          <strong className="text-white">Choose Power Hour if:</strong> You want a structured
          drinking experience that guarantees everyone gets to the same level together.
        </p>
        <p className="text-gray-300 mt-4">
          <strong className="text-white">Pro tip:</strong> Power Hour is best as the first
          game of the night (pre-game), while Quarters works better as a middle-of-the-party game.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Learn the Full Rules</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/quarters-rules"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Quarters Rules →
          </Link>
          <Link
            href="/guides/power-hour-rules"
            className="inline-block px-6 py-3 bg-neon-blue text-white rounded-lg hover:bg-neon-blue/80 transition-colors"
          >
            Power Hour Rules →
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
