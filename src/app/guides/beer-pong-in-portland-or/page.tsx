import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beer Pong in Portland, OR: Where to Play & Local Rules (2025)",
  description: "Play Beer Pong in Portland! Find the best bars in Alberta, Pearl District venues, brewery taprooms, and everything you need to know about Beer Pong in Beervana.",
  keywords: [
    "Beer Pong Portland",
    "Beer Pong in Portland",
    "where to play Beer Pong Portland",
    "Portland Beer Pong bars",
    "Beer Pong OR",
    "drinking games Portland",
    "Alberta Beer Pong",
    "Portland party scene"
  ],
  openGraph: {
    title: "Beer Pong in Portland: Local Guide",
    description: "Find the best bars, breweries, and Beer Pong scenes in Portland.",
    type: "article",
    url: "https://sipwiki.app/guides/beer-pong-in-portland-or",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/beer-pong-in-portland-or",
  },
};

export default function BeerPongInPortlandOrPage() {
  return (
    <GuideLayout
      title="Beer Pong in Portland, OR: The Complete Local Guide"
      description="Looking to play Beer Pong in Portland? Beervana lives up to its name with incredible craft beer and a quirky, welcoming drinking game scene. Here's your guide to Beer Pong in PDX."
      breadcrumb="Beer Pong in Portland"
      primaryGame={{ name: "Beer Pong", slug: "beer-pong" }}
      relatedGames={[
        { name: "Flip Cup", slug: "flip-cup", description: "Team competition classic" },
        { name: "Rage Cage", slug: "rage-cage", description: "Fast-paced action" },
        { name: "Kings Cup", slug: "kings-cup", description: "Card game favorite" },
      ]}
    >
      <QuickAnswer
        question="Where can I play Beer Pong in Portland?"
        answer="Portland has an awesome Beer Pong scene! Top spots include Alberta Street dive bars, Pearl District venues, Mississippi Avenue hangouts, and brewery taprooms everywhere. Keep Portland Weird extends to creative house rules."
        tips={[
          "Craft beer capital = amazing beer for games",
          "Rain doesn't stop Portland - indoor games thrive",
          "Alberta Street is the dive bar hotspot",
          "Brewery taprooms often have game areas"
        ]}
        variant="primary"
      />

      <h2>Where to Play Beer Pong in Portland</h2>

      <h3>Alberta Arts District</h3>
      <p>Eclectic neighborhood with the best dive bars:</p>
      <ul>
        <li>Classic dive bars with Beer Pong tables</li>
        <li>Last Thursday art walks turn into parties</li>
        <li>Quirky, welcoming atmosphere</li>
        <li>Local artists and musicians crowd</li>
      </ul>

      <h3>Mississippi Avenue</h3>
      <p>Hip neighborhood with great bars and venues:</p>
      <ul>
        <li>Mix of dive bars and trendy spots</li>
        <li>Food cart pods + Beer Pong</li>
        <li>Outdoor patios (covered for rain)</li>
        <li>Young professional vibe</li>
      </ul>

      <h3>Pearl District</h3>
      <p>Upscale downtown entertainment:</p>
      <ul>
        <li>Higher-end bars with game rooms</li>
        <li>Rooftop venues</li>
        <li>Corporate event spaces</li>
        <li>25-35 professional crowd</li>
      </ul>

      <h3>Brewery Taprooms</h3>
      <p>Portland has 70+ breweries, many with games:</p>
      <ul>
        <li>Huge taprooms with outdoor game areas</li>
        <li>Amazing craft beer for your games</li>
        <li>Family-friendly early, party later</li>
        <li>Von Ebert, Breakside, Great Notion popular spots</li>
      </ul>

      <h2>Portland-Specific Beer Pong Tips</h2>

      <h3>Weather Reality</h3>
      <p>Portland is rainy, but that doesn&apos;t stop the games:</p>
      <ul>
        <li><strong>Covered patios:</strong> Many venues have heated outdoor spaces</li>
        <li><strong>Indoor focus:</strong> Basements and garages are standard</li>
        <li><strong>Summer (Jul-Sep):</strong> Glorious outdoor Beer Pong weather</li>
        <li><strong>Rain gear:</strong> Portlanders drink in drizzle, but tables go inside</li>
      </ul>

      <h3>Craft Beer Culture</h3>
      <ul>
        <li><strong>No Bud Light:</strong> Many houses require craft beer</li>
        <li><strong>High ABV:</strong> Oregon IPAs are strong - pace yourself</li>
        <li><strong>Brewery loyalty:</strong> Heated debates about best local breweries</li>
        <li><strong>Cider option:</strong> Portland loves cider as an alternative</li>
      </ul>

      <h3>Best Times to Play</h3>
      <ul>
        <li><strong>Summer weekends:</strong> Everyone is outside, patio games</li>
        <li><strong>Blazers game nights:</strong> Sports bars pack out</li>
        <li><strong>Last Thursday (Alberta):</strong> Art walk becomes party</li>
        <li><strong>Any rainy day:</strong> Indoor games are always happening</li>
      </ul>

      <h2>Portland Beer Pong Variations</h2>

      <h3>Keep Portland Weird Rules</h3>
      <p>Creative local variations:</p>
      <ul>
        <li><strong>Vegan Rule:</strong> Some houses use vegan beer only</li>
        <li><strong>Bike Messenger:</strong> Drink with one hand like riding a bike</li>
        <li><strong>Donut Challenge:</strong> Voodoo Doughnut eaten as penalty</li>
        <li><strong>Bridge Shot:</strong> Arc over an obstacle like Portland&apos;s bridges</li>
      </ul>

      <h3>Sustainability Focus</h3>
      <p>Portland&apos;s eco-consciousness affects games:</p>
      <ul>
        <li>Reusable cup sets are common</li>
        <li>Water rinse cups refilled, not replaced</li>
        <li>Composting and recycling expected</li>
        <li>Some houses use washable cups only</li>
      </ul>

      <h2>Why Portland is Great for Beer Pong</h2>
      <p>
        Portland&apos;s &quot;Beervana&quot; reputation means you&apos;ll never play Beer Pong with bad beer.
        The city&apos;s quirky, welcoming culture creates unique house rules and creative variations
        you won&apos;t find anywhere else.
      </p>
      <p>
        The rain doesn&apos;t dampen Portland&apos;s spirits - it just moves the games inside.
        With strong neighborhood bar scenes in Alberta, Mississippi, and beyond, plus
        70+ breweries with taprooms, you&apos;ll find great Beer Pong throughout PDX.
      </p>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">New to Beer Pong?</h3>
        <p className="text-gray-400 mb-4">
          Learn the rules before hitting Portland&apos;s unique scene.
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
