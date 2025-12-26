import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beer Pong in Minneapolis, MN: Where to Play & Local Rules (2025)",
  description: "Play Beer Pong in Minneapolis! Find the best bars in Uptown, Northeast breweries, U of M tailgates, and everything you need to know about Beer Pong in the Twin Cities.",
  keywords: [
    "Beer Pong Minneapolis",
    "Beer Pong in Minneapolis",
    "where to play Beer Pong Minneapolis",
    "Minneapolis Beer Pong bars",
    "Beer Pong MN",
    "drinking games Minneapolis",
    "Uptown Beer Pong",
    "Twin Cities party scene"
  ],
  openGraph: {
    title: "Beer Pong in Minneapolis: Local Guide",
    description: "Find the best bars, breweries, and Beer Pong scenes in Minneapolis.",
    type: "article",
    url: "https://sipwiki.app/guides/beer-pong-in-minneapolis-mn",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/beer-pong-in-minneapolis-mn",
  },
};

export default function BeerPongInMinneapolisMnPage() {
  return (
    <GuideLayout
      title="Beer Pong in Minneapolis, MN: The Complete Local Guide"
      description="Looking to play Beer Pong in Minneapolis? The Twin Cities bring Midwest friendliness, legendary winters, and serious drinking game culture. Here's your complete guide to Beer Pong in MSP."
      breadcrumb="Beer Pong in Minneapolis"
      primaryGame={{ name: "Beer Pong", slug: "beer-pong" }}
      relatedGames={[
        { name: "Flip Cup", slug: "flip-cup", description: "Midwest favorite" },
        { name: "Rage Cage", slug: "rage-cage", description: "Fast-paced action" },
        { name: "Kings Cup", slug: "kings-cup", description: "Card game classic" },
      ]}
    >
      <QuickAnswer
        question="Where can I play Beer Pong in Minneapolis?"
        answer="Minneapolis has a passionate Beer Pong scene! Top spots include Uptown bars, Northeast Minneapolis breweries, Dinkytown near U of M, and basement parties throughout the city. Winter drives the best indoor party culture in America."
        tips={[
          "Basement Beer Pong is an art form here",
          "Uptown has the best bar scene",
          "U of M tailgates are legendary",
          "Winter = indoor party season"
        ]}
        variant="primary"
      />

      <h2>Where to Play Beer Pong in Minneapolis</h2>

      <h3>Uptown</h3>
      <p>Minneapolis&apos;s premier nightlife district:</p>
      <ul>
        <li>Bars with dedicated Beer Pong tables</li>
        <li>Weekend tournament nights</li>
        <li>Young professional crowd</li>
        <li>Walkable between venues</li>
      </ul>

      <h3>Northeast Minneapolis</h3>
      <p>Brewery district with game-friendly taprooms:</p>
      <ul>
        <li>Craft brewery patios (summer)</li>
        <li>Industrial-chic spaces with games</li>
        <li>Arts district vibes</li>
        <li>Bauhaus, Indeed, Dangerous Man area</li>
      </ul>

      <h3>Dinkytown (U of M)</h3>
      <p>Gophers bring the college energy:</p>
      <ul>
        <li>Campus bars with tournaments</li>
        <li>House parties in student housing</li>
        <li>Tailgates at Huntington Bank Stadium</li>
        <li>Affordable student specials</li>
      </ul>

      <h3>St. Paul</h3>
      <p>The other Twin City has its own scene:</p>
      <ul>
        <li>Grand Avenue bars</li>
        <li>More laid-back than Minneapolis</li>
        <li>Neighborhood house parties</li>
        <li>Summit Brewing area</li>
      </ul>

      <h2>Minneapolis-Specific Beer Pong Tips</h2>

      <h3>Embracing the Winter</h3>
      <p>Minneapolis winters create the best indoor party culture:</p>
      <ul>
        <li><strong>Basement season (Nov-Mar):</strong> This is when Beer Pong peaks</li>
        <li><strong>Heated garages:</strong> A Minnesota specialty</li>
        <li><strong>Bar hopping:</strong> Via skyway system downtown</li>
        <li><strong>Cabin weekends:</strong> Lake house Beer Pong tournaments</li>
      </ul>

      <h3>Summer Opportunities</h3>
      <ul>
        <li><strong>Lake parties:</strong> Lake Minnetonka, Lake Calhoun gatherings</li>
        <li><strong>Patio season:</strong> Everyone outside from May-September</li>
        <li><strong>Backyard BBQs:</strong> Suburban Beer Pong setups</li>
        <li><strong>State Fair:</strong> Unofficial games everywhere</li>
      </ul>

      <h3>Best Times to Play</h3>
      <ul>
        <li><strong>Vikings game days:</strong> Tailgates and bar parties</li>
        <li><strong>Gophers football:</strong> Dinkytown goes crazy</li>
        <li><strong>Winter weekends:</strong> Cabin fever = party time</li>
        <li><strong>First warm day:</strong> Entire city celebrates outside</li>
      </ul>

      <h2>Minneapolis Beer Pong Variations</h2>

      <h3>Minnesota Nice Rules</h3>
      <p>Local variations you might encounter:</p>
      <ul>
        <li><strong>Hot Dish Rule:</strong> Loser brings hot dish to next party</li>
        <li><strong>Ope! Rule:</strong> Say &quot;ope&quot; if you bump someone&apos;s cup</li>
        <li><strong>Purple Pride:</strong> Vikings purple cups on game days</li>
        <li><strong>Lake Rule:</strong> Outdoor games at the cabin have relaxed rules</li>
      </ul>

      <h3>Big Ten Traditions</h3>
      <p>U of M Gophers represent:</p>
      <ul>
        <li>Maroon and gold cup colors</li>
        <li>Ski-U-Mah chants after winning</li>
        <li>Wisconsin rivalry games are intense</li>
        <li>Tailgate tournaments at the U</li>
      </ul>

      <h2>Why Minneapolis is Great for Beer Pong</h2>
      <p>
        Minneapolis might have the best basement party culture in America, born from
        necessity during brutal winters. This creates a deeply social, indoor-focused
        drinking game scene that&apos;s welcoming and competitive.
      </p>
      <p>
        The &quot;Minnesota Nice&quot; culture means newcomers are always welcome at games, while
        the passionate sports culture keeps competition fierce. Add in the lake cabin
        tradition for summer Beer Pong, and you have year-round opportunities.
      </p>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">New to Beer Pong?</h3>
        <p className="text-gray-400 mb-4">
          Learn the rules before hitting the Twin Cities scene.
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
