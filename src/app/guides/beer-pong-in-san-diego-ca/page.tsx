import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beer Pong in San Diego, CA: Where to Play & Local Rules (2025)",
  description: "Play Beer Pong in San Diego! Find the best beach bars, Pacific Beach parties, SDSU tailgates, and everything you need to know about Beer Pong in America's Finest City.",
  keywords: [
    "Beer Pong San Diego",
    "Beer Pong in San Diego",
    "where to play Beer Pong San Diego",
    "San Diego Beer Pong bars",
    "Beer Pong CA",
    "drinking games San Diego",
    "Pacific Beach Beer Pong",
    "San Diego party scene"
  ],
  openGraph: {
    title: "Beer Pong in San Diego: Local Guide",
    description: "Find the best beach bars, house parties, and Beer Pong scenes in San Diego.",
    type: "article",
    url: "https://sipwiki.app/guides/beer-pong-in-san-diego-ca",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/beer-pong-in-san-diego-ca",
  },
};

export default function BeerPongInSanDiegoCaPage() {
  return (
    <GuideLayout
      title="Beer Pong in San Diego, CA: The Complete Local Guide"
      description="Looking to play Beer Pong in San Diego? America's Finest City has perfect weather year-round for outdoor Beer Pong. From Pacific Beach house parties to Gaslamp bars, here's your guide."
      breadcrumb="Beer Pong in San Diego"
      primaryGame={{ name: "Beer Pong", slug: "beer-pong" }}
      relatedGames={[
        { name: "Flip Cup", slug: "flip-cup", description: "Beach party favorite" },
        { name: "Rage Cage", slug: "rage-cage", description: "High-energy action" },
        { name: "Slap Cup", slug: "slap-cup", description: "Fast-paced competition" },
      ]}
    >
      <QuickAnswer
        question="Where can I play Beer Pong in San Diego?"
        answer="San Diego's Beer Pong scene is legendary! Top spots include Pacific Beach house parties, Gaslamp Quarter bars, SDSU campus area, and Ocean Beach dive bars. Perfect weather means outdoor Beer Pong year-round."
        tips={[
          "Pacific Beach is THE house party neighborhood",
          "Beach bonfires often include Beer Pong (where legal)",
          "Craft beer capital = great beer for your games",
          "Perfect weather means outdoor games year-round"
        ]}
        variant="primary"
      />

      <h2>Where to Play Beer Pong in San Diego</h2>

      <h3>Pacific Beach (PB)</h3>
      <p>The ultimate San Diego party neighborhood:</p>
      <ul>
        <li>House parties are legendary and frequent</li>
        <li>Beach bars with outdoor game areas</li>
        <li>Young, active crowd (20s-30s)</li>
        <li>Walking distance between venues</li>
      </ul>

      <h3>Gaslamp Quarter</h3>
      <p>Downtown entertainment district:</p>
      <ul>
        <li>Rooftop bars with skyline views</li>
        <li>Bachelor/bachelorette party destination</li>
        <li>Higher-end venues with game rooms</li>
        <li>Walking distance from Petco Park</li>
      </ul>

      <h3>Ocean Beach (OB)</h3>
      <p>Hippie beach town with laid-back vibes:</p>
      <ul>
        <li>Classic dive bars with Beer Pong</li>
        <li>Sunset Cliffs after-parties</li>
        <li>More relaxed, casual atmosphere</li>
        <li>Dog-friendly beach nearby</li>
      </ul>

      <h3>SDSU Area (College Area)</h3>
      <p>Aztecs bring the college party energy:</p>
      <ul>
        <li>Campus bars with tournament nights</li>
        <li>Greek life party scene</li>
        <li>Tailgates at Snapdragon Stadium</li>
        <li>Affordable drink specials</li>
      </ul>

      <h2>San Diego-Specific Beer Pong Tips</h2>

      <h3>Beach Culture Integration</h3>
      <p>San Diego&apos;s beach lifestyle affects Beer Pong:</p>
      <ul>
        <li><strong>Backyard patios:</strong> Year-round outdoor games</li>
        <li><strong>Post-beach parties:</strong> Beer Pong after surfing is tradition</li>
        <li><strong>Bonfire nights:</strong> Mission Beach has designated fire pits</li>
        <li><strong>Day drinking:</strong> Start early, games all day</li>
      </ul>

      <h3>Perfect Weather Perks</h3>
      <ul>
        <li><strong>Year-round outdoor play:</strong> 70°F average, always</li>
        <li><strong>Never rained out:</strong> San Diego gets 10&quot; of rain per year</li>
        <li><strong>Evening ocean breeze:</strong> Perfect for sunset games</li>
        <li><strong>Rooftop season:</strong> Every season is rooftop season</li>
      </ul>

      <h3>Best Times to Play</h3>
      <ul>
        <li><strong>Any Saturday:</strong> PB house parties are constant</li>
        <li><strong>Padres game days:</strong> Gaslamp pre-game parties</li>
        <li><strong>Comic-Con week:</strong> Downtown transforms</li>
        <li><strong>Memorial Day-Labor Day:</strong> Peak beach party season</li>
      </ul>

      <h2>San Diego Beer Pong Variations</h2>

      <h3>Beach Rules</h3>
      <p>Local variations you might encounter:</p>
      <ul>
        <li><strong>Craft Only:</strong> San Diego craft beer required</li>
        <li><strong>Sunscreen Rule:</strong> Losers must apply sunscreen to winners</li>
        <li><strong>Surf Check:</strong> Game pauses if waves look good</li>
        <li><strong>Taco Shop Penalty:</strong> Loser buys California burritos</li>
      </ul>

      <h3>Craft Beer Capital Influence</h3>
      <p>San Diego has 150+ craft breweries:</p>
      <ul>
        <li>Many houses require local craft beer</li>
        <li>Stone, Ballast Point, Modern Times represented</li>
        <li>IPAs dominate (high ABV = pace yourself)</li>
        <li>Brewery taprooms often have game areas</li>
      </ul>

      <h2>Why San Diego is Great for Beer Pong</h2>
      <p>
        San Diego might have the best Beer Pong weather in America. Perfect temperatures
        year-round mean outdoor games never stop. Add in the beach culture, massive craft
        beer scene, and legendary Pacific Beach house parties, and you have a Beer Pong paradise.
      </p>
      <p>
        The laid-back SoCal attitude creates welcoming game environments, while SDSU
        students and young professionals keep the competition fierce. Whether you&apos;re
        playing on a PB patio, an OB dive bar, or a Gaslamp rooftop, you&apos;ll find
        great Beer Pong in America&apos;s Finest City.
      </p>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">New to Beer Pong?</h3>
        <p className="text-gray-400 mb-4">
          Learn the rules before hitting San Diego&apos;s competitive scene.
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
