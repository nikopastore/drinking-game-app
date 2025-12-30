import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beer Pong in Dallas, TX: Where to Play & Local Rules (2025)",
  description: "Play Beer Pong in Dallas! Find the best bars in Deep Ellum, Uptown house parties, Cowboys tailgates, and everything you need to know about Beer Pong in Big D.",
  keywords: [
    "Beer Pong Dallas",
    "Beer Pong in Dallas",
    "where to play Beer Pong Dallas",
    "Dallas Beer Pong bars",
    "Beer Pong TX",
    "drinking games Dallas",
    "Deep Ellum Beer Pong",
    "Uptown Dallas parties"
  ],
  openGraph: {
    title: "Beer Pong in Dallas: Local Guide",
    description: "Find the best bars, tailgates, and Beer Pong scenes in Dallas.",
    type: "article",
    url: "https://sipwiki.app/guides/beer-pong-in-dallas-tx",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/beer-pong-in-dallas-tx",
  },
};

export default function BeerPongInDallasTxPage() {
  return (
    <GuideLayout
      title="Beer Pong in Dallas, TX: The Complete Local Guide"
      description="Looking to play Beer Pong in Dallas? Big D brings Texas-sized parties, legendary tailgates, and a vibrant bar scene. Here's your complete guide to Beer Pong in the Metroplex."
      breadcrumb="Beer Pong in Dallas"
      primaryGame={{ name: "Beer Pong", slug: "beer-pong" }}
      relatedGames={[
        { name: "Flip Cup", slug: "flip-cup", description: "Texas favorite" },
        { name: "Rage Cage", slug: "rage-cage", description: "Fast-paced action" },
        { name: "Kings Cup", slug: "kings-cup", description: "Card game classic" },
      ]}
    >
      <QuickAnswer
        question="Where can I play Beer Pong in Dallas?"
        answer="Dallas has an epic Beer Pong scene! Top spots include Deep Ellum bars, Uptown nightlife district, SMU area house parties, and Cowboys tailgates at AT&T Stadium. Everything's bigger in Texas, including the Beer Pong competitions."
        tips={[
          "Deep Ellum has the best dive bars",
          "Uptown is young professional central",
          "Cowboys tailgates are legendary",
          "SMU area for college energy"
        ]}
        variant="primary"
      />

      <h2>Where to Play Beer Pong in Dallas</h2>

      <h3>Deep Ellum</h3>
      <p>Dallas&apos;s iconic entertainment district:</p>
      <ul>
        <li>Live music venues with Beer Pong</li>
        <li>Dive bars with dedicated tables</li>
        <li>Warehouse parties on weekends</li>
        <li>Creative, eclectic crowd</li>
      </ul>

      <h3>Uptown</h3>
      <p>Where young Dallas goes to party:</p>
      <ul>
        <li>Upscale bars with game nights</li>
        <li>Rooftop Beer Pong in season</li>
        <li>Post-work happy hour games</li>
        <li>25-35 professional crowd</li>
      </ul>

      <h3>SMU/Highland Park Area</h3>
      <p>Mustangs bring the college energy:</p>
      <ul>
        <li>Campus area bars and clubs</li>
        <li>Mansion parties with epic setups</li>
        <li>Game day celebrations</li>
        <li>Upscale student scene</li>
      </ul>

      <h3>AT&T Stadium Area (Arlington)</h3>
      <p>Cowboys tailgate central:</p>
      <ul>
        <li>Massive parking lot tournaments</li>
        <li>Pre-game Beer Pong traditions</li>
        <li>Sports bar watch parties</li>
        <li>Rangers games too</li>
      </ul>

      <h2>Dallas-Specific Beer Pong Tips</h2>

      <h3>Texas Heat Considerations</h3>
      <p>Summer Beer Pong requires planning:</p>
      <ul>
        <li><strong>Heat advisory:</strong> 100°F+ summers mean indoor games</li>
        <li><strong>AC is king:</strong> Bars and indoor venues are essential</li>
        <li><strong>Morning tailgates:</strong> Start early before the heat</li>
        <li><strong>Pool parties:</strong> Beer Pong by the pool is a Dallas tradition</li>
      </ul>

      <h3>Cowboys Culture</h3>
      <ul>
        <li><strong>Game day:</strong> Tailgates start 4+ hours before kickoff</li>
        <li><strong>AT&T Stadium:</strong> Biggest tailgate scene in Texas</li>
        <li><strong>Star cups:</strong> Cowboys star on cups is standard</li>
        <li><strong>Rivalry games:</strong> Eagles week is intense</li>
      </ul>

      <h3>Best Times to Play</h3>
      <ul>
        <li><strong>Cowboys Sundays:</strong> Non-negotiable Beer Pong time</li>
        <li><strong>Fall/Spring:</strong> Perfect patio weather</li>
        <li><strong>State Fair (October):</strong> Fair Park parties</li>
        <li><strong>Friday nights:</strong> Deep Ellum comes alive</li>
      </ul>

      <h2>Dallas Beer Pong Variations</h2>

      <h3>Big D Rules</h3>
      <p>Local variations you might encounter:</p>
      <ul>
        <li><strong>Texas Size:</strong> 12-cup rack instead of 10</li>
        <li><strong>Cowboy Rule:</strong> Winners wear a cowboy hat</li>
        <li><strong>Star Shot:</strong> Bounce that hits center cup is 2 cups</li>
        <li><strong>BBQ Penalty:</strong> Loser buys brisket</li>
      </ul>

      <h3>Dallas Party Culture</h3>
      <p>What makes Dallas unique:</p>
      <ul>
        <li>Everything&apos;s bigger - expect large tournaments</li>
        <li>Dress code matters at Uptown bars</li>
        <li>Football is religion here</li>
        <li>Southern hospitality extends to games</li>
      </ul>

      <h2>Why Dallas is Great for Beer Pong</h2>
      <p>
        Dallas combines Texas-sized parties with a vibrant urban scene. From the gritty
        authenticity of Deep Ellum to the polished Uptown nightlife, there&apos;s a Beer Pong
        scene for every style. The Cowboys culture ensures tailgate season is legendary.
      </p>
      <p>
        The city&apos;s sprawl means driving between neighborhoods, but the Metroplex&apos;s
        diversity offers everything from mansion parties to dive bar tournaments.
      </p>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">New to Beer Pong?</h3>
        <p className="text-gray-400 mb-4">
          Learn the rules before taking on Dallas&apos;s competitive scene.
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
