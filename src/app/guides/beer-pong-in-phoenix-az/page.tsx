import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beer Pong in Phoenix, AZ: Where to Play & Local Rules (2025)",
  description: "Play Beer Pong in Phoenix! Find the best bars in Old Town Scottsdale, ASU parties, downtown venues, and everything you need to know about Beer Pong in the Valley of the Sun.",
  keywords: [
    "Beer Pong Phoenix",
    "Beer Pong in Phoenix",
    "where to play Beer Pong Phoenix",
    "Phoenix Beer Pong bars",
    "Beer Pong AZ",
    "drinking games Phoenix",
    "Scottsdale Beer Pong",
    "ASU parties"
  ],
  openGraph: {
    title: "Beer Pong in Phoenix: Local Guide",
    description: "Find the best bars, ASU parties, and Beer Pong scenes in Phoenix.",
    type: "article",
    url: "https://sipwiki.app/guides/beer-pong-in-phoenix-az",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/beer-pong-in-phoenix-az",
  },
};

export default function BeerPongInPhoenixAzPage() {
  return (
    <GuideLayout
      title="Beer Pong in Phoenix, AZ: The Complete Local Guide"
      description="Looking to play Beer Pong in Phoenix? The Valley of the Sun combines ASU's legendary party school reputation with Scottsdale's nightlife scene. Here's your guide to Beer Pong in the desert."
      breadcrumb="Beer Pong in Phoenix"
      primaryGame={{ name: "Beer Pong", slug: "beer-pong" }}
      relatedGames={[
        { name: "Flip Cup", slug: "flip-cup", description: "Team competition classic" },
        { name: "Rage Cage", slug: "rage-cage", description: "Fast-paced action" },
        { name: "Kings Cup", slug: "kings-cup", description: "Card game favorite" },
      ]}
    >
      <QuickAnswer
        question="Where can I play Beer Pong in Phoenix?"
        answer="Phoenix has an amazing Beer Pong scene! Top spots include Old Town Scottsdale nightclubs, ASU campus area (Mill Avenue in Tempe), downtown Phoenix bars, and pool party venues. The party never stops in the Valley."
        tips={[
          "Old Town Scottsdale is the upscale party district",
          "ASU in Tempe has legendary college parties",
          "Pool parties are essential in summer",
          "Start early - it gets HOT"
        ]}
        variant="primary"
      />

      <h2>Where to Play Beer Pong in Phoenix</h2>

      <h3>Old Town Scottsdale</h3>
      <p>Arizona&apos;s premier nightlife district:</p>
      <ul>
        <li>Upscale clubs with Beer Pong VIP areas</li>
        <li>Bachelor/bachelorette party destination</li>
        <li>Young professional crowd (25-35)</li>
        <li>Dress codes at many venues</li>
      </ul>

      <h3>Tempe/Mill Avenue (ASU)</h3>
      <p>Sun Devils bring legendary college party energy:</p>
      <ul>
        <li>College bars lining Mill Avenue</li>
        <li>House parties near campus</li>
        <li>Tailgates at Sun Devil Stadium</li>
        <li>Affordable specials and tournaments</li>
      </ul>

      <h3>Downtown Phoenix</h3>
      <p>Growing entertainment district:</p>
      <ul>
        <li>Dive bars with tournament nights</li>
        <li>Rooftop venues</li>
        <li>Sports bars near the stadiums</li>
        <li>More local, less touristy</li>
      </ul>

      <h3>Pool Party Venues</h3>
      <p>Phoenix specialty - poolside Beer Pong:</p>
      <ul>
        <li>Resort pool parties (W, Talking Stick)</li>
        <li>Backyard pool parties (ubiquitous)</li>
        <li>Float + Beer Pong combos</li>
        <li>Essential from April-October</li>
      </ul>

      <h2>Phoenix-Specific Beer Pong Tips</h2>

      <h3>Desert Heat Strategy</h3>
      <p>Phoenix summers are brutal - adapt your Beer Pong:</p>
      <ul>
        <li><strong>Play at night:</strong> 9pm onwards in summer</li>
        <li><strong>Hydrate aggressively:</strong> Water between every drink</li>
        <li><strong>Pool parties:</strong> Combine swimming and Beer Pong</li>
        <li><strong>Indoor venues:</strong> AC is your friend June-September</li>
        <li><strong>Keep beer cold:</strong> It gets warm FAST outside</li>
      </ul>

      <h3>Best Seasons to Play</h3>
      <ul>
        <li><strong>Fall (Oct-Nov):</strong> Perfect weather, ASU football tailgates</li>
        <li><strong>Winter (Dec-Feb):</strong> Snowbirds arrive, outdoor games ideal</li>
        <li><strong>Spring (Mar-Apr):</strong> Spring training, pool season starts</li>
        <li><strong>Summer (May-Sep):</strong> Night games only, pool parties essential</li>
      </ul>

      <h3>Best Times to Play</h3>
      <ul>
        <li><strong>ASU game days:</strong> Tempe goes crazy</li>
        <li><strong>Spring Training:</strong> Baseball fans flood Scottsdale</li>
        <li><strong>Pool party Sundays:</strong> Resort dayclubs</li>
        <li><strong>Any weekend:</strong> Scottsdale never stops</li>
      </ul>

      <h2>Phoenix Beer Pong Variations</h2>

      <h3>Desert Rules</h3>
      <p>Local variations you might encounter:</p>
      <ul>
        <li><strong>Pool Shot:</strong> Make a shot while in the pool</li>
        <li><strong>Cactus Cup:</strong> Tequila in the center cup</li>
        <li><strong>Sun Devil Rule:</strong> Fork Up hand sign after making a shot</li>
        <li><strong>Heat Timeout:</strong> Mandatory water breaks in summer</li>
      </ul>

      <h3>ASU Traditions</h3>
      <p>Sun Devils have their own Beer Pong culture:</p>
      <ul>
        <li>#1 party school reputation to uphold</li>
        <li>Greek life dominates the scene</li>
        <li>Mill Ave bar crawl tournaments</li>
        <li>Curtain of Distraction-inspired distractions</li>
      </ul>

      <h2>Why Phoenix is Great for Beer Pong</h2>
      <p>
        Phoenix combines year-round warm weather (okay, hot weather) with one of America&apos;s
        top party schools and Scottsdale&apos;s legendary nightlife. The pool party culture
        adds a unique dimension to Beer Pong that few cities can match.
      </p>
      <p>
        Whether you&apos;re at an ASU house party, a Scottsdale rooftop club, or a backyard
        pool party, you&apos;ll find competitive Beer Pong throughout the Valley. Just remember
        to hydrate - the desert is unforgiving!
      </p>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">New to Beer Pong?</h3>
        <p className="text-gray-400 mb-4">
          Learn the rules before taking on Phoenix&apos;s competitive scene.
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
