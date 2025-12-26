import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beer Pong in Washington DC: Where to Play & Local Rules (2025)",
  description: "Play Beer Pong in Washington DC! Find the best bars in Adams Morgan, Georgetown house parties, Commanders tailgates, and everything you need to know about Beer Pong in the nation's capital.",
  keywords: [
    "Beer Pong Washington DC",
    "Beer Pong in DC",
    "where to play Beer Pong DC",
    "Washington DC Beer Pong bars",
    "Beer Pong DMV",
    "drinking games DC",
    "Adams Morgan Beer Pong",
    "Georgetown parties"
  ],
  openGraph: {
    title: "Beer Pong in Washington DC: Local Guide",
    description: "Find the best bars, rooftops, and Beer Pong scenes in Washington DC.",
    type: "article",
    url: "https://sipwiki.app/guides/beer-pong-in-washington-dc",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/beer-pong-in-washington-dc",
  },
};

export default function BeerPongInWashingtonDcPage() {
  return (
    <GuideLayout
      title="Beer Pong in Washington DC: The Complete Local Guide"
      description="Looking to play Beer Pong in Washington DC? The nation's capital brings political energy, young professionals, and a surprisingly competitive drinking game scene. Here's your complete guide to Beer Pong in the DMV."
      breadcrumb="Beer Pong in Washington DC"
      primaryGame={{ name: "Beer Pong", slug: "beer-pong" }}
      relatedGames={[
        { name: "Flip Cup", slug: "flip-cup", description: "Hill staffer favorite" },
        { name: "Rage Cage", slug: "rage-cage", description: "Fast-paced action" },
        { name: "Kings Cup", slug: "kings-cup", description: "Card game classic" },
      ]}
    >
      <QuickAnswer
        question="Where can I play Beer Pong in Washington DC?"
        answer="DC has a vibrant Beer Pong scene! Top spots include Adams Morgan dive bars, Dupont Circle rooftops, Georgetown house parties, and Navy Yard sports bars. The young professional crowd means intense competition after hours."
        tips={[
          "Adams Morgan is the party strip",
          "Georgetown has college energy",
          "Navy Yard for sports and games",
          "Rooftop season is May-October"
        ]}
        variant="primary"
      />

      <h2>Where to Play Beer Pong in Washington DC</h2>

      <h3>Adams Morgan</h3>
      <p>DC&apos;s legendary party neighborhood:</p>
      <ul>
        <li>18th Street dive bars with games</li>
        <li>Late-night Beer Pong after 2am</li>
        <li>Diverse, eclectic crowd</li>
        <li>Walkable bar crawl scene</li>
      </ul>

      <h3>Georgetown</h3>
      <p>Historic neighborhood with student energy:</p>
      <ul>
        <li>Georgetown University crowd</li>
        <li>Townhouse parties</li>
        <li>M Street bars</li>
        <li>Upscale but fun</li>
      </ul>

      <h3>Dupont Circle</h3>
      <p>Young professional hangout:</p>
      <ul>
        <li>Rooftop bars with games</li>
        <li>After-work happy hours</li>
        <li>Embassy row adjacent parties</li>
        <li>Diverse, international crowd</li>
      </ul>

      <h3>Navy Yard</h3>
      <p>Sports destination for Nationals and Commanders:</p>
      <ul>
        <li>Pre-game tailgates</li>
        <li>Sports bar tournaments</li>
        <li>New development nightlife</li>
        <li>Waterfront venues</li>
      </ul>

      <h2>Washington DC-Specific Beer Pong Tips</h2>

      <h3>Political Culture</h3>
      <p>DC drinking culture has unique aspects:</p>
      <ul>
        <li><strong>Hill staffers:</strong> Young and competitive after work</li>
        <li><strong>Intern season:</strong> Summer brings fresh competition</li>
        <li><strong>Networking games:</strong> Business cards may be exchanged</li>
        <li><strong>Political debates:</strong> Keep it light at the table</li>
      </ul>

      <h3>Weather Considerations</h3>
      <ul>
        <li><strong>Summer:</strong> Hot and humid, rooftop season</li>
        <li><strong>Cherry Blossom:</strong> April parties are popular</li>
        <li><strong>Fall:</strong> Perfect outdoor weather</li>
        <li><strong>Winter:</strong> Basement and bar games</li>
      </ul>

      <h3>Best Times to Play</h3>
      <ul>
        <li><strong>Thursday nights:</strong> DC&apos;s unofficial party night</li>
        <li><strong>Happy hour (5-7pm):</strong> Post-work games</li>
        <li><strong>Inauguration week:</strong> Every 4 years is massive</li>
        <li><strong>Cherry Blossom Festival:</strong> April party season</li>
      </ul>

      <h2>Washington DC Beer Pong Variations</h2>

      <h3>DMV Rules</h3>
      <p>Local variations you might encounter:</p>
      <ul>
        <li><strong>Filibuster:</strong> Loser must give a speech</li>
        <li><strong>Bipartisan Cup:</strong> Teams are red vs blue</li>
        <li><strong>Hill Shot:</strong> Bank shot off Capitol coaster</li>
        <li><strong>Embassy Rule:</strong> International house rules apply</li>
      </ul>

      <h3>DC Party Culture</h3>
      <p>What makes DC unique:</p>
      <ul>
        <li>Parties end earlier (2am bars close)</li>
        <li>Work talk may creep into games</li>
        <li>Metro-accessible venues preferred</li>
        <li>Brunch Beer Pong is a thing</li>
      </ul>

      <h2>Why Washington DC is Great for Beer Pong</h2>
      <p>
        DC&apos;s massive population of young professionals creates an intensely competitive
        Beer Pong scene. The work-hard, play-hard culture means serious games after hours,
        while the transient nature of the city brings players from all over the country.
      </p>
      <p>
        From Georgetown mansion parties to Adams Morgan dive bars, DC offers Beer Pong at
        every level. The four distinct seasons mean different vibes year-round.
      </p>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">New to Beer Pong?</h3>
        <p className="text-gray-400 mb-4">
          Learn the rules before taking on DC&apos;s competitive scene.
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
