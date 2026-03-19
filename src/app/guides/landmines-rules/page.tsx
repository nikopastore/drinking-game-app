import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landmines Drinking Game Rules: Coin Spin Challenge (2025 Guide)",
  description: "Landmines drinking game rules! Spin a coin, drink, and catch it before it stops. Empty cans become obstacles that make the game harder. Full rules and tips.",
  keywords: [
    "landmines rules",
    "landmines drinking game",
    "coin drinking game",
    "spin the coin game",
    "college drinking games",
    "skill drinking games",
  ],
  openGraph: {
    title: "Landmines Drinking Game Rules",
    description: "The coin-spinning drinking challenge.",
    type: "article",
    url: "https://sipwiki.app/guides/landmines-rules",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/landmines-rules",
  },
};

export default function LandminesRulesPage() {
  return (
    <GuideLayout
      title="Landmines: The Coin-Spinning Drinking Challenge"
      description="Spin a coin, drink your beer, and catch the spinning coin before it stops - all with the same hand. Empty cans become 'landmines' that clutter the table and sabotage future spins."
      breadcrumb="Landmines Rules"
      primaryGame={{ name: "Landmines", slug: "landmines" }}
      relatedGames={[
        { name: "Quarters", slug: "quarters", description: "Another coin game" },
        { name: "Rage Cage", slug: "rage-cage", description: "Speed game" },
        { name: "7-11-Doubles", slug: "7-11-doubles", description: "Dice racing" },
      ]}
    >
      <QuickAnswer
        question="How do you play Landmines?"
        answer="Spin a quarter on the table. While it spins, drink from your beer. Before the coin stops spinning, catch it with the SAME HAND. Fail = restart your turn. When you finish a can, it becomes a 'landmine' - other players can slam it onto your spinning coin to sabotage you."
        tips={[
          "Spin coin, drink, catch coin - all one-handed",
          "Fail to catch = restart turn",
          "Empty cans become 'landmines' on the table",
          "Landmines can be slammed onto spinning coins"
        ]}
        variant="primary"
      />

      <h2>What You Need</h2>
      <ul>
        <li>Beer cans (one per player to start)</li>
        <li>A quarter or coin for spinning</li>
        <li>A clear table with some space</li>
        <li>2-8 players</li>
      </ul>

      <h2>Setup</h2>
      <ol>
        <li>Clear the table completely</li>
        <li>Each player gets a beer can</li>
        <li>One quarter for the whole group</li>
        <li>Pick who goes first (youngest, roll off, etc.)</li>
      </ol>

      <h2>How to Play Your Turn</h2>
      <ol>
        <li>Spin the quarter on the table (like a top)</li>
        <li>While it's spinning, drink from your beer</li>
        <li>Before the coin stops, catch it with the SAME HAND you used to spin</li>
        <li>Successfully catch it = turn ends, pass left</li>
        <li>Fail = must try again</li>
      </ol>

      <h2>What Counts as a Fail?</h2>
      <ul>
        <li>Coin stops spinning before you catch it</li>
        <li>Coin falls off the table</li>
        <li>You knock something over</li>
        <li>You use your other hand</li>
        <li>Coin hits a landmine and stops</li>
      </ul>

      <h2>Creating Landmines</h2>
      <p>When you finish a beer can, it becomes a landmine:</p>
      <ul>
        <li>Place the empty can anywhere on the table</li>
        <li>It stays there permanently</li>
        <li>As the game continues, the table fills with landmines</li>
        <li>Your spinning coin can hit these and stop</li>
      </ul>

      <h2>Using Landmines Offensively</h2>
      <p>During OTHER players' turns, you can use your landmines:</p>
      <ul>
        <li>Watch for their spinning coin</li>
        <li>SLAM your empty can down onto their coin to stop it</li>
        <li>The can stays wherever you slammed it</li>
        <li>That player must restart their turn</li>
      </ul>

      <div className="bg-dark-700 p-4 rounded-lg my-4">
        <p className="font-bold text-neon-pink mb-2">Important:</p>
        <ul>
          <li>You can only slam landmines YOU created</li>
          <li>Once a landmine is placed, it can't be moved</li>
          <li>Multiple landmines can be used on one turn</li>
        </ul>
      </div>

      <h2>Strategy Tips</h2>

      <h3>Spinning</h3>
      <ul>
        <li>A strong, centered spin gives you more time</li>
        <li>Practice your spin before playing</li>
        <li>Spin in an area with fewer landmines</li>
      </ul>

      <h3>Drinking</h3>
      <ul>
        <li>Take quick sips, not big gulps</li>
        <li>You don't have to finish the can in one turn</li>
        <li>Balance drinking speed with catching speed</li>
      </ul>

      <h3>Landmines</h3>
      <ul>
        <li>Finish beers strategically to create mines</li>
        <li>Place mines in the center for maximum disruption</li>
        <li>Save your slam for clutch moments</li>
        <li>Watch players who struggle - slam their spins</li>
      </ul>

      <h2>Repeat Turn Rules</h2>
      <ul>
        <li>Each failed attempt = more drinking required</li>
        <li>Some groups add: 3 fails in a row = finish your beer</li>
        <li>You can "buy out" by chugging your current beer to end your turn</li>
      </ul>

      <h2>Common Variations</h2>
      <ul>
        <li><strong>Shot landmines:</strong> Take a shot each time you fail</li>
        <li><strong>Team mode:</strong> Partners share landmines</li>
        <li><strong>Speed round:</strong> 2-second time limit per spin</li>
        <li><strong>Clear the board:</strong> First to use all their landmines wins</li>
      </ul>

      <h2>Why Landmines Is Great</h2>
      <ul>
        <li>Combines skill and sabotage</li>
        <li>Table gets progressively harder</li>
        <li>Creates memorable "slam" moments</li>
        <li>Good balance of drinking and gameplay</li>
        <li>Anyone can win with good timing</li>
      </ul>

      <div className="bg-yellow-900/30 p-4 rounded-lg my-4 border border-yellow-600/50">
        <p className="text-yellow-300 text-sm">
          <strong>Pro Tip:</strong> This game can trap someone on repeat fails. If a player
          fails 5+ times in a row, consider letting them pass and try again later.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Play Landmines on SipWiki</h3>
        <Link
          href="/games/landmines"
          className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
        >
          Landmines Game Page →
        </Link>
      </div>
    </GuideLayout>
  );
}
