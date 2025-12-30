import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beer Pong in Los Angeles, CA: Where to Play & Local Rules (2025)",
  description: "Play Beer Pong in Los Angeles! Find the best bars in Hollywood, house parties in the Hills, UCLA tailgates, and everything you need to know about Beer Pong in LA.",
  keywords: [
    "Beer Pong Los Angeles",
    "Beer Pong in LA",
    "where to play Beer Pong LA",
    "Los Angeles Beer Pong bars",
    "Beer Pong CA",
    "drinking games LA",
    "Hollywood Beer Pong",
    "LA house parties"
  ],
  openGraph: {
    title: "Beer Pong in Los Angeles: Local Guide",
    description: "Find the best bars, house parties, and Beer Pong scenes in Los Angeles.",
    type: "article",
    url: "https://sipwiki.app/guides/beer-pong-in-los-angeles-ca",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/beer-pong-in-los-angeles-ca",
  },
};

export default function BeerPongInLosAngelesCaPage() {
  return (
    <GuideLayout
      title="Beer Pong in Los Angeles, CA: The Complete Local Guide"
      description="Looking to play Beer Pong in Los Angeles? The entertainment capital has pool parties, house parties, and a laid-back vibe that extends to the Beer Pong table. Here's your complete guide to Beer Pong in LA."
      breadcrumb="Beer Pong in Los Angeles"
      primaryGame={{ name: "Beer Pong", slug: "beer-pong" }}
      relatedGames={[
        { name: "Flip Cup", slug: "flip-cup", description: "Pool party staple" },
        { name: "Rage Cage", slug: "rage-cage", description: "Fast-paced action" },
        { name: "Kings Cup", slug: "kings-cup", description: "Card game classic" },
      ]}
    >
      <QuickAnswer
        question="Where can I play Beer Pong in Los Angeles?"
        answer="LA has an amazing Beer Pong scene! Top spots include Hollywood bars, Westwood near UCLA, Venice Beach house parties, and hills mansion events. The weather means outdoor games year-round, and pool parties are a way of life."
        tips={[
          "Hollywood for bar scene",
          "Westwood has UCLA energy",
          "Venice for beach vibes",
          "Pool parties are everywhere"
        ]}
        variant="primary"
      />

      <h2>Where to Play Beer Pong in Los Angeles</h2>

      <h3>Hollywood</h3>
      <p>LA&apos;s nightlife epicenter:</p>
      <ul>
        <li>Dive bars with Beer Pong</li>
        <li>Club afterparties</li>
        <li>Industry crowd mingles</li>
        <li>Late night energy</li>
      </ul>

      <h3>Westwood (UCLA)</h3>
      <p>Bruins bring the college scene:</p>
      <ul>
        <li>Campus area bars</li>
        <li>Frat and sorority parties</li>
        <li>Game day tailgates</li>
        <li>Student apartment parties</li>
      </ul>

      <h3>Venice Beach</h3>
      <p>Beach culture meets Beer Pong:</p>
      <ul>
        <li>Boardwalk adjacent bars</li>
        <li>Rooftop parties</li>
        <li>Creative crowd</li>
        <li>Chill vibes</li>
      </ul>

      <h3>Silver Lake/Echo Park</h3>
      <p>Hip eastside scene:</p>
      <ul>
        <li>Dive bars with character</li>
        <li>House parties in the hills</li>
        <li>Artist and musician crowd</li>
        <li>Less touristy</li>
      </ul>

      <h2>LA-Specific Beer Pong Tips</h2>

      <h3>Pool Party Culture</h3>
      <p>LA does pool Beer Pong differently:</p>
      <ul>
        <li><strong>Floating tables:</strong> Inflatable Beer Pong is popular</li>
        <li><strong>Hills parties:</strong> Mansion pools with games</li>
        <li><strong>Day parties:</strong> Afternoon Beer Pong is normal</li>
        <li><strong>Year-round:</strong> Weather allows outdoor games always</li>
      </ul>

      <h3>LA Driving Reality</h3>
      <ul>
        <li><strong>Uber/Lyft:</strong> Essential for bar hopping</li>
        <li><strong>Neighborhoods spread out:</strong> Pick an area and stay</li>
        <li><strong>Traffic:</strong> Plan around rush hour</li>
        <li><strong>Parking:</strong> Nightmare at popular spots</li>
      </ul>

      <h3>Best Times to Play</h3>
      <ul>
        <li><strong>UCLA game days:</strong> Westwood parties hard</li>
        <li><strong>Summer:</strong> Pool party peak season</li>
        <li><strong>Awards season:</strong> Industry parties everywhere</li>
        <li><strong>Any weekend:</strong> LA parties year-round</li>
      </ul>

      <h2>LA Beer Pong Variations</h2>

      <h3>LA Rules</h3>
      <p>Local variations you might encounter:</p>
      <ul>
        <li><strong>Industry Rule:</strong> Name-drop your projects between shots</li>
        <li><strong>Traffic Timeout:</strong> Blame the 405 for bad shots</li>
        <li><strong>Juice Cleanse:</strong> Healthy beer alternatives accepted</li>
        <li><strong>Sunset Sip:</strong> Pause to watch the sunset</li>
      </ul>

      <h3>LA Party Culture</h3>
      <p>What makes LA unique:</p>
      <ul>
        <li>Bars close at 2am (last call 1:30)</li>
        <li>Day parties are as big as night</li>
        <li>Everyone&apos;s &quot;in the industry&quot;</li>
        <li>Laid-back competitive style</li>
      </ul>

      <h2>Why Los Angeles is Great for Beer Pong</h2>
      <p>
        LA&apos;s perfect weather means Beer Pong happens outdoors year-round. The sprawling
        city offers everything from UCLA frat parties to Hollywood dive bars to Venice
        beach house gatherings.
      </p>
      <p>
        The entertainment industry influence means parties can get elaborate, and the
        laid-back California attitude makes games welcoming even when competitive.
      </p>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">New to Beer Pong?</h3>
        <p className="text-gray-400 mb-4">
          Learn the rules before hitting LA&apos;s scene.
        </p>
        <Link
          href="/guides/beer-pong-rules"
          className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
        >
          Read Beer Pong Rules →
        </Link>
      </div>
    </GuideLayout>
  );
}
