import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beer Pong in San Francisco, CA: Where to Play & Local Rules (2025)",
  description: "Play Beer Pong in San Francisco! Find the best bars in the Mission, Marina house parties, and everything you need to know about Beer Pong in the Bay Area.",
  keywords: [
    "Beer Pong San Francisco",
    "Beer Pong in SF",
    "where to play Beer Pong San Francisco",
    "San Francisco Beer Pong bars",
    "Beer Pong CA",
    "drinking games San Francisco",
    "Marina Beer Pong",
    "Mission District parties"
  ],
  openGraph: {
    title: "Beer Pong in San Francisco: Local Guide",
    description: "Find the best bars, house parties, and Beer Pong scenes in San Francisco.",
    type: "article",
    url: "https://sipwiki.app/guides/beer-pong-in-san-francisco-ca",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/beer-pong-in-san-francisco-ca",
  },
};

export default function BeerPongInSanFranciscoCaPage() {
  return (
    <GuideLayout
      title="Beer Pong in San Francisco, CA: The Complete Local Guide"
      description="Looking to play Beer Pong in San Francisco? The City by the Bay has a unique drinking game culture shaped by tech, diverse neighborhoods, and limited space. Here's your complete guide."
      breadcrumb="Beer Pong in San Francisco"
      primaryGame={{ name: "Beer Pong", slug: "beer-pong" }}
      relatedGames={[
        { name: "Flip Cup", slug: "flip-cup", description: "Team competition classic" },
        { name: "Rage Cage", slug: "rage-cage", description: "Fast-paced action" },
        { name: "Kings Cup", slug: "kings-cup", description: "Card game favorite" },
      ]}
    >
      <QuickAnswer
        question="Where can I play Beer Pong in San Francisco?"
        answer="SF has a solid Beer Pong scene despite small apartments! Best spots include Marina bars (young professional crowd), Mission District house parties, SoMa tech company events, and North Beach dive bars. Space is limited so outdoor and bar games dominate."
        tips={[
          "Marina has the most traditional bar scene",
          "Mission house parties are legendary",
          "Tech company events often feature Beer Pong",
          "Fog and cold = mostly indoor games"
        ]}
        variant="primary"
      />

      <h2>Where to Play Beer Pong in San Francisco</h2>

      <h3>The Marina</h3>
      <p>SF&apos;s most &quot;traditional&quot; party neighborhood for young professionals:</p>
      <ul>
        <li>Sports bars with Beer Pong tournaments</li>
        <li>Post-work happy hour games</li>
        <li>Weekend night competitions</li>
        <li>25-35 professional crowd</li>
      </ul>

      <h3>Mission District</h3>
      <p>Diverse neighborhood with legendary house party scene:</p>
      <ul>
        <li>Warehouse parties with Beer Pong</li>
        <li>Dive bars with game nights</li>
        <li>Rooftop games (rare but epic)</li>
        <li>Creative, artsy crowd</li>
      </ul>

      <h3>SoMa (South of Market)</h3>
      <p>Tech hub with company-sponsored fun:</p>
      <ul>
        <li>Startup office Beer Pong tournaments</li>
        <li>Tech company happy hours</li>
        <li>Event spaces with games</li>
        <li>Networking meets competition</li>
      </ul>

      <h3>North Beach</h3>
      <p>Historic neighborhood with dive bar culture:</p>
      <ul>
        <li>Old-school dive bars</li>
        <li>Casual, no-frills games</li>
        <li>Mix of locals and tourists</li>
        <li>Italian heritage meets Beer Pong</li>
      </ul>

      <h2>San Francisco-Specific Beer Pong Tips</h2>

      <h3>The Space Challenge</h3>
      <p>SF apartments are tiny. Most Beer Pong happens at:</p>
      <ul>
        <li><strong>Bars:</strong> Most reliable option for tables</li>
        <li><strong>Rooftops:</strong> Rare but sought after</li>
        <li><strong>Parks:</strong> Dolores Park day drinking (bring your own)</li>
        <li><strong>Office spaces:</strong> Tech company game rooms</li>
      </ul>

      <h3>Weather Considerations</h3>
      <ul>
        <li><strong>Fog:</strong> &quot;June Gloom&quot; and summer fog are real - plan indoor</li>
        <li><strong>Microclimates:</strong> Mission is warmer than Marina</li>
        <li><strong>Year-round mild:</strong> Never too hot, never too cold</li>
        <li><strong>Layers:</strong> Temperature changes fast</li>
      </ul>

      <h3>Transportation</h3>
      <p>Getting around SF for Beer Pong:</p>
      <ul>
        <li>BART and Muni run late on weekends</li>
        <li>Uber/Lyft widely available</li>
        <li>Many neighborhoods are walkable</li>
        <li>Hills make biking home rough</li>
      </ul>

      <h2>San Francisco Beer Pong Variations</h2>

      <h3>Bay Area Rules</h3>
      <p>Local variations you might encounter:</p>
      <ul>
        <li><strong>Tech Bro Rule:</strong> Must explain your startup between shots</li>
        <li><strong>Fog Delay:</strong> Outdoor games pause for fog rolling in</li>
        <li><strong>Craft Only:</strong> Many houses require local craft beer</li>
        <li><strong>Giants/A&apos;s Split:</strong> Team allegiance determines cup colors</li>
      </ul>

      <h3>Tech Industry Influence</h3>
      <p>SF&apos;s tech culture shapes the scene:</p>
      <ul>
        <li>Office Beer Pong tournaments with prizes</li>
        <li>Analytics-driven shot optimization (seriously)</li>
        <li>Slack channels for finding games</li>
        <li>IPO parties with premium setups</li>
      </ul>

      <h2>Why San Francisco is Unique for Beer Pong</h2>
      <p>
        San Francisco&apos;s Beer Pong scene is shaped by high rent, small spaces, and tech culture.
        This means more bar games than house parties, more organized events than spontaneous
        gatherings, and a surprisingly competitive scene for a city known for other things.
      </p>
      <p>
        The diverse neighborhoods each bring their own flavor - Marina&apos;s preppy energy,
        Mission&apos;s creative chaos, SoMa&apos;s corporate fun, and North Beach&apos;s dive bar authenticity.
      </p>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">New to Beer Pong?</h3>
        <p className="text-gray-400 mb-4">
          Learn the rules before hitting SF&apos;s competitive scene.
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
