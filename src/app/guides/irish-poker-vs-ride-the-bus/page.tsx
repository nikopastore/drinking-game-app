import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Irish Poker vs Ride the Bus: Card Drinking Game Comparison (2025)",
  description: "Irish Poker vs Ride the Bus - two popular card guessing drinking games. Compare rules, intensity, and learn which game is right for your party.",
  keywords: [
    "irish poker vs ride the bus",
    "ride the bus vs irish poker",
    "card drinking games",
    "guessing drinking games",
    "irish poker rules",
    "ride the bus rules",
  ],
  openGraph: {
    title: "Irish Poker vs Ride the Bus: Card Game Comparison",
    description: "Two card guessing games - which should you play?",
    type: "article",
    url: "https://sipwiki.app/guides/irish-poker-vs-ride-the-bus",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/irish-poker-vs-ride-the-bus",
  },
};

export default function IrishPokerVsRideTheBusPage() {
  return (
    <GuideLayout
      title="Irish Poker vs Ride the Bus: Card Guessing Game Showdown"
      description="Both games involve guessing card properties and drinking on wrong guesses. But they play very differently. Here's how to choose between these card drinking games."
      breadcrumb="Irish Poker vs Ride the Bus"
      primaryGame={{ name: "Irish Poker", slug: "irish-poker" }}
      relatedGames={[
        { name: "Ride the Bus", slug: "ride-the-bus", description: "Brutal finale" },
        { name: "Kings Cup", slug: "kings-cup", description: "Classic card game" },
        { name: "Beeramid", slug: "beeramid", description: "Bluffing alternative" },
      ]}
    >
      <QuickAnswer
        question="What's the difference between Irish Poker and Ride the Bus?"
        answer="Irish Poker: Everyone guesses their 4 cards through 4 rounds (red/black, higher/lower, in-between, suit). Simple and equal. Ride the Bus: Same guessing but adds a pyramid phase, and the LOSER has to 'ride the bus' - a brutal gauntlet of card guessing until they get 4 right in a row."
        tips={[
          "Irish Poker: Equal treatment, simpler format",
          "Ride the Bus: Has a brutal loser punishment",
          "Ride the Bus is more dramatic with the bus ride finale",
          "Irish Poker is quicker and more casual"
        ]}
        variant="primary"
      />

      <h2>Quick Comparison Table</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="py-3 px-4 text-white">Feature</th>
              <th className="py-3 px-4 text-white">Irish Poker</th>
              <th className="py-3 px-4 text-white">Ride the Bus</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Guessing Rounds</td>
              <td className="py-3 px-4">4 rounds per player</td>
              <td className="py-3 px-4">4 rounds + pyramid</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Punishment</td>
              <td className="py-3 px-4">Drink on wrong guess</td>
              <td className="py-3 px-4">Wrong guess + bus ride for loser</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Loser Mechanic</td>
              <td className="py-3 px-4">None - everyone equal</td>
              <td className="py-3 px-4">Brutal bus ride gauntlet</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Game Length</td>
              <td className="py-3 px-4">10-15 minutes</td>
              <td className="py-3 px-4">15-30 minutes</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Complexity</td>
              <td className="py-3 px-4">Simple</td>
              <td className="py-3 px-4">Moderate (pyramid phase)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Drama Level</td>
              <td className="py-3 px-4">Low-medium</td>
              <td className="py-3 px-4">High (bus ride tension)</td>
            </tr>
            <tr className="border-b border-dark-700">
              <td className="py-3 px-4 font-medium">Best For</td>
              <td className="py-3 px-4">Quick casual rounds</td>
              <td className="py-3 px-4">Dramatic conclusions</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The Guessing Rounds (Same for Both)</h2>
      <p>Both games use the same 4-round guessing format:</p>
      <ol>
        <li><strong>Round 1:</strong> Red or Black?</li>
        <li><strong>Round 2:</strong> Higher or Lower (than your first card)?</li>
        <li><strong>Round 3:</strong> In-Between or Outside (your first two cards)?</li>
        <li><strong>Round 4:</strong> Guess the Suit</li>
      </ol>
      <p>Wrong guesses = drinks. The number of drinks usually increases each round (1, 2, 3, 4 drinks).</p>

      <h2>What Makes Ride the Bus Different</h2>

      <h3>The Pyramid Phase</h3>
      <p>After guessing, Ride the Bus adds a pyramid of face-down cards. Cards are flipped one by one, and if you have a matching card in your hand, you can give drinks. Higher rows = more drinks. This phase determines who "rides the bus."</p>

      <h3>The Bus Ride (Brutal Finale)</h3>
      <p>The player with the most cards left after the pyramid must "ride the bus":</p>
      <ul>
        <li>Dealer lays out 4+ cards face-down</li>
        <li>Bus rider guesses each: red/black or higher/lower</li>
        <li>Get one wrong = restart from the beginning</li>
        <li>Must get ALL correct in a row to escape</li>
        <li>This can take... a while</li>
      </ul>

      <h2>When to Play Irish Poker</h2>
      <ul>
        <li><strong>Quick game needed:</strong> 10-15 minutes max</li>
        <li><strong>Equal treatment:</strong> No one person gets destroyed</li>
        <li><strong>Warmup game:</strong> Get the night started</li>
        <li><strong>New players:</strong> Simple rules to learn</li>
        <li><strong>Casual vibes:</strong> Low-pressure drinking</li>
      </ul>

      <h2>When to Play Ride the Bus</h2>
      <ul>
        <li><strong>Drama wanted:</strong> The bus ride is legendary</li>
        <li><strong>Loser punishment:</strong> Someone will get destroyed</li>
        <li><strong>Longer game:</strong> 20-30 minute centerpiece</li>
        <li><strong>Experienced players:</strong> They know what they're signing up for</li>
        <li><strong>Spectator entertainment:</strong> Watching the bus ride is hilarious</li>
      </ul>

      <h2>Drinking Intensity</h2>

      <h3>Irish Poker</h3>
      <p>Evenly distributed drinking. Everyone faces the same odds, drinks roughly the same amount. No one person gets targeted. A "fair" game.</p>

      <h3>Ride the Bus</h3>
      <p>Uneven by design. Most players drink moderately, but the bus rider can consume 10+ drinks during a bad bus ride. It's designed to create one big loser.</p>

      <div className="bg-yellow-900/30 p-4 rounded-lg my-4 border border-yellow-600/50">
        <p className="text-yellow-300 text-sm">
          <strong>The Bus Ride Warning:</strong> The bus ride can be brutal. Consider capping the number of attempts or using smaller sips. No one should feel forced to continue if they're uncomfortable.
        </p>
      </div>

      <h2>The Verdict</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-dark-800 p-6 rounded-xl border border-dark-600">
          <h4 className="font-bold text-neon-pink mb-4 text-lg">Play Irish Poker If...</h4>
          <ul className="text-gray-300 space-y-2">
            <li>✓ You want a quick, simple game</li>
            <li>✓ You prefer equal treatment</li>
            <li>✓ You're warming up for the night</li>
            <li>✓ You have new players</li>
            <li>✓ You want casual, low-stakes fun</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-6 rounded-xl border border-dark-600">
          <h4 className="font-bold text-neon-blue mb-4 text-lg">Play Ride the Bus If...</h4>
          <ul className="text-gray-300 space-y-2">
            <li>✓ You want high-stakes drama</li>
            <li>✓ You enjoy loser punishments</li>
            <li>✓ You want a memorable moment</li>
            <li>✓ You have experienced drinkers</li>
            <li>✓ You want spectator entertainment</li>
          </ul>
        </div>
      </div>

      <h2>Hybrid Option</h2>
      <p>
        Some groups play "Irish Poker into Ride the Bus" - use Irish Poker's simple format, but whoever has the worst guesses (most wrong) still rides the bus. Best of both worlds.
      </p>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Learn the Full Rules</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/games/irish-poker"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Irish Poker Rules →
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
