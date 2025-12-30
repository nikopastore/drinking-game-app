import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beer Pong in Nashville, TN: Where to Play & Local Rules (2025)",
  description: "Play Beer Pong in Nashville! Find the best spots on Broadway, East Nashville parties, Vanderbilt tailgates, and everything you need to know about Beer Pong in Music City.",
  keywords: [
    "Beer Pong Nashville",
    "Beer Pong in Nashville",
    "where to play Beer Pong Nashville",
    "Nashville Beer Pong bars",
    "Beer Pong TN",
    "drinking games Nashville",
    "Broadway Beer Pong",
    "Nashville party scene"
  ],
  openGraph: {
    title: "Beer Pong in Nashville: Local Guide",
    description: "Find the best bars, honky tonks, and Beer Pong scenes in Nashville.",
    type: "article",
    url: "https://sipwiki.app/guides/beer-pong-in-nashville-tn",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/beer-pong-in-nashville-tn",
  },
};

export default function BeerPongInNashvilleTnPage() {
  return (
    <GuideLayout
      title="Beer Pong in Nashville, TN: The Complete Local Guide"
      description="Looking to play Beer Pong in Nashville? Music City brings country vibes to drinking games. From Broadway honky tonks to East Nashville house parties, here's your guide to Beer Pong in Nash-Vegas."
      breadcrumb="Beer Pong in Nashville"
      primaryGame={{ name: "Beer Pong", slug: "beer-pong" }}
      relatedGames={[
        { name: "Flip Cup", slug: "flip-cup", description: "Team competition classic" },
        { name: "Rage Cage", slug: "rage-cage", description: "Fast-paced action" },
        { name: "Kings Cup", slug: "kings-cup", description: "Card game favorite" },
      ]}
    >
      <QuickAnswer
        question="Where can I play Beer Pong in Nashville?"
        answer="Nashville's Beer Pong scene is legendary! Top spots include Broadway rooftop bars, East Nashville house parties, Midtown college bars near Vanderbilt, and The Gulch upscale venues. Bachelorette parties bring competitive energy year-round."
        tips={[
          "Broadway rooftops have the best views and games",
          "East Nashville is the local house party scene",
          "Bachelorette parties dominate weekends",
          "Pedal taverns are NOT for Beer Pong (too bumpy!)"
        ]}
        variant="primary"
      />

      <h2>Where to Play Beer Pong in Nashville</h2>

      <h3>Broadway (Lower Broadway/Honky Tonk Highway)</h3>
      <p>Nashville&apos;s iconic strip has more than just country music:</p>
      <ul>
        <li>Multi-level bars with rooftop Beer Pong</li>
        <li>Bachelor/bachelorette party central</li>
        <li>Live music + drinking games combo</li>
        <li>Touristy but genuinely fun</li>
      </ul>

      <h3>East Nashville</h3>
      <p>Hipster neighborhood with authentic local scene:</p>
      <ul>
        <li>Dive bars with tournament nights</li>
        <li>House parties in historic bungalows</li>
        <li>Craft beer focus</li>
        <li>Musicians and creatives crowd</li>
      </ul>

      <h3>Midtown/Vanderbilt</h3>
      <p>College energy from Commodores and Belmont:</p>
      <ul>
        <li>Classic college bars with Beer Pong tables</li>
        <li>Greek life party scene</li>
        <li>Affordable drink specials</li>
        <li>Tailgates at Vanderbilt Stadium</li>
      </ul>

      <h3>The Gulch</h3>
      <p>Upscale entertainment district:</p>
      <ul>
        <li>Premium bars with game areas</li>
        <li>Corporate event spaces</li>
        <li>Young professional crowd</li>
        <li>Rooftop views of downtown</li>
      </ul>

      <h2>Nashville-Specific Beer Pong Tips</h2>

      <h3>Navigating the Tourist Scene</h3>
      <p>Nashville has different vibes for different folks:</p>
      <ul>
        <li><strong>Broadway:</strong> Tourist-heavy but high energy, great for groups</li>
        <li><strong>East Nashville:</strong> Where locals actually hang out</li>
        <li><strong>Midtown:</strong> College crowd, more casual</li>
        <li><strong>Weekends:</strong> Expect bachelorette parties everywhere</li>
      </ul>

      <h3>Weather Considerations</h3>
      <ul>
        <li><strong>Summer:</strong> Hot and humid, rooftop games in evening</li>
        <li><strong>Fall:</strong> Football season brings tailgate Beer Pong</li>
        <li><strong>Spring:</strong> Perfect patio weather</li>
        <li><strong>Winter:</strong> Mild, indoor games dominate</li>
      </ul>

      <h3>Best Times to Play</h3>
      <ul>
        <li><strong>NFL Draft week:</strong> City is packed with football fans</li>
        <li><strong>CMA Fest:</strong> Country music + Beer Pong</li>
        <li><strong>Titans game days:</strong> Tailgates on the river</li>
        <li><strong>Any weekend:</strong> Bachelorette parties guarantee competition</li>
      </ul>

      <h2>Nashville Beer Pong Variations</h2>

      <h3>Music City Rules</h3>
      <p>Local variations you might encounter:</p>
      <ul>
        <li><strong>Jukebox Rule:</strong> Winner picks the next song</li>
        <li><strong>Hot Chicken Penalty:</strong> Loser eats hot chicken (spice level varies)</li>
        <li><strong>Honky Tonk:</strong> Must two-step after making a shot</li>
        <li><strong>Country Cover:</strong> Sing a country song to avoid penalty</li>
      </ul>

      <h3>Bachelorette Traditions</h3>
      <p>Nashville is the bachelorette capital:</p>
      <ul>
        <li>Bride vs. Everyone games</li>
        <li>Sash and tiara wearing while playing</li>
        <li>Creative team names required</li>
        <li>Instagram photo requirements between rounds</li>
      </ul>

      <h2>Why Nashville is Great for Beer Pong</h2>
      <p>
        Nashville&apos;s &quot;Nash-Vegas&quot; party reputation is well-earned. The city combines
        Southern hospitality, live music energy, and a constant stream of visitors
        looking for a good time. Beer Pong fits perfectly into this culture.
      </p>
      <p>
        Whether you&apos;re on a Broadway rooftop with live music below, at a dive bar in
        East Nashville, or at a Vanderbilt tailgate, you&apos;ll find competitive and
        welcoming Beer Pong scenes throughout Music City.
      </p>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">New to Beer Pong?</h3>
        <p className="text-gray-400 mb-4">
          Learn the rules before taking on Nashville&apos;s party scene.
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
