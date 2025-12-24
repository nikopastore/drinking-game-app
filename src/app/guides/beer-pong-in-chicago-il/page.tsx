import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beer Pong in Chicago, IL: Where to Play & Local Rules (2025)",
  description: "Play Beer Pong in Chicago! Find the best bars in Wrigleyville, Lincoln Park house parties, and everything you need to know about Beer Pong in the Windy City.",
  keywords: [
    "Beer Pong Chicago",
    "Beer Pong in Chicago",
    "where to play Beer Pong Chicago",
    "Chicago Beer Pong bars",
    "Beer Pong IL",
    "drinking games Chicago",
    "Wrigleyville Beer Pong",
    "Chicago party scene"
  ],
  openGraph: {
    title: "Beer Pong in Chicago: Local Guide",
    description: "Find the best bars, house parties, and Beer Pong scenes in Chicago.",
    type: "article",
    url: "https://sipwiki.app/guides/beer-pong-in-chicago-il",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/beer-pong-in-chicago-il",
  },
};

export default function BeerPongInChicagoIlPage() {
  return (
    <GuideLayout
      title="Beer Pong in Chicago, IL: The Complete Local Guide"
      description="Looking to play Beer Pong in Chicago? The Windy City has one of the best bar and house party scenes in the Midwest. From Wrigleyville dive bars to Lincoln Park house parties, here's your complete guide."
      breadcrumb="Beer Pong in Chicago"
      primaryGame={{ name: "Beer Pong", slug: "beer-pong" }}
      relatedGames={[
        { name: "Flip Cup", slug: "flip-cup", description: "Chicago's other favorite" },
        { name: "Rage Cage", slug: "rage-cage", description: "Fast-paced competition" },
        { name: "Kings Cup", slug: "kings-cup", description: "Card game classic" },
      ]}
    >
      <QuickAnswer
        question="Where can I play Beer Pong in Chicago?"
        answer="Chicago has an incredible Beer Pong scene! Best spots include Wrigleyville bars (especially on Cubs game days), Lincoln Park house parties, DePaul/Loyola campus area bars, and rooftop parties in the summer. Popular venues have dedicated Beer Pong nights with tournaments and prizes."
        tips={[
          "Wrigleyville bars go crazy on Cubs game days",
          "Lincoln Park has the best house party scene",
          "Summer rooftops are prime Beer Pong territory",
          "Use CTA or rideshare - parking is brutal"
        ]}
        variant="primary"
      />

      <h2>Where to Play Beer Pong in Chicago</h2>

      <h3>Wrigleyville</h3>
      <p>The legendary bar district around Wrigley Field is Beer Pong heaven, especially during Cubs season:</p>
      <ul>
        <li>Pre-game tailgates with massive Beer Pong setups</li>
        <li>Sports bars with tournament nights</li>
        <li>Rooftop Beer Pong with stadium views</li>
        <li>Late-night competitions after Cubs games</li>
      </ul>

      <h3>Lincoln Park</h3>
      <p>Chicago&apos;s premier young professional neighborhood delivers on house parties:</p>
      <ul>
        <li>Brownstone basement Beer Pong setups</li>
        <li>Backyard and patio games in summer</li>
        <li>DePaul student parties nearby</li>
        <li>Upscale bar leagues with serious competition</li>
      </ul>

      <h3>Lakeview & Boystown</h3>
      <p>Diverse, welcoming neighborhood with great bar scene:</p>
      <ul>
        <li>Inclusive Beer Pong nights at various bars</li>
        <li>Pride events with themed tournaments</li>
        <li>Late-night spots open until 4am</li>
        <li>Great mix of casual and competitive</li>
      </ul>

      <h3>River North</h3>
      <p>Upscale area with higher-end Beer Pong experiences:</p>
      <ul>
        <li>Premium bars with private Beer Pong rooms</li>
        <li>Corporate event spaces with games</li>
        <li>Bottle service Beer Pong</li>
        <li>25-35 professional crowd</li>
      </ul>

      <h2>Chicago-Specific Beer Pong Tips</h2>

      <h3>Weather Considerations</h3>
      <p>Chicago&apos;s extreme weather shapes the Beer Pong scene:</p>
      <ul>
        <li><strong>Summer (June-Aug):</strong> Rooftop season! Every bar with outdoor space has Beer Pong</li>
        <li><strong>Fall:</strong> Cubs playoffs bring intense Beer Pong energy</li>
        <li><strong>Winter (Dec-Mar):</strong> Basement and indoor parties dominate. Bundle up between venues</li>
        <li><strong>Spring:</strong> St. Patrick&apos;s Day is HUGE - green Beer Pong everywhere</li>
      </ul>

      <h3>Transportation</h3>
      <p>Getting around Chicago for Beer Pong:</p>
      <ul>
        <li>CTA &quot;L&quot; trains run until ~1am (later on weekends)</li>
        <li>Uber/Lyft widely available</li>
        <li>Night owl buses on major routes</li>
        <li>Never drive - parking is expensive and DUI enforcement is serious</li>
      </ul>

      <h3>Best Times to Play</h3>
      <ul>
        <li><strong>Cubs game days:</strong> Wrigleyville is peak Beer Pong</li>
        <li><strong>St. Patrick&apos;s Day weekend:</strong> Entire city celebrates with Beer Pong</li>
        <li><strong>Summer Fridays:</strong> Rooftop Beer Pong after work</li>
        <li><strong>Big Ten football Saturdays:</strong> Alumni bars host tournaments</li>
      </ul>

      <h2>Chicago Beer Pong Variations</h2>

      <h3>The &quot;Chicago Style&quot; Rules</h3>
      <p>Local variations you might encounter:</p>
      <ul>
        <li><strong>Deep Dish Rule:</strong> Stack penalty cups like deep dish layers</li>
        <li><strong>Wind Factor:</strong> Outdoor games allow for &quot;wind&quot; excuses on missed shots</li>
        <li><strong>Cubs vs. Sox:</strong> Team allegiance determines cup colors</li>
        <li><strong>Lake Effect:</strong> Special rule for games on the lakefront</li>
      </ul>

      <h3>Big Ten Traditions</h3>
      <p>Chicago hosts tons of Big Ten alumni, bringing college rules:</p>
      <ul>
        <li>Northwestern, Illinois, Wisconsin rules clash regularly</li>
        <li>Heated debates over redemption and re-racks</li>
        <li>Saturday game watch parties with Beer Pong tournaments</li>
      </ul>

      <h2>Why Chicago is Great for Beer Pong</h2>
      <p>
        Chicago combines Midwestern friendliness with big-city bar culture, creating one of America&apos;s
        best Beer Pong scenes. The passionate sports culture, legendary house party tradition, and
        year-round social scene (yes, even in winter) make it a Beer Pong paradise.
      </p>
      <p>
        From Wrigleyville rooftops in summer to cozy Lincoln Park basements in winter, Chicago
        offers Beer Pong experiences for every season and style. The city&apos;s strong Big Ten presence
        means you&apos;ll always find people who take the game seriously.
      </p>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">New to Beer Pong?</h3>
        <p className="text-gray-400 mb-4">
          Learn the official rules before hitting Chicago&apos;s competitive scene.
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
