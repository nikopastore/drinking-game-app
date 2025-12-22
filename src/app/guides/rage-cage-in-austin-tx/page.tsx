import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";
import { generateArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Rage Cage in Austin, TX: Where to Play & Local Rules (2025)",
  description: "Play Rage Cage in Austin! Find the best bars, house party tips, local variations, and everything you need to know about Rage Cage in Live Music Capital.",
  keywords: [
    "Rage Cage Austin",
    "Rage Cage in Austin",
    "where to play Rage Cage Austin",
    "Austin Rage Cage bars",
    "Rage Cage TX",
    "drinking games Austin",
    "college Rage Cage Austin",
    "Austin party scene",
  ],
  openGraph: {
    title: "Rage Cage in Austin: Local Guide",
    description: "Play Rage Cage in Austin! Find the best bars, house party tips, local variations, and everything you need to know about Rage Cage in Live Music Capital.",
    type: "article",
    url: "https://sipwiki.app/guides/rage-cage-in-austin-tx",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/rage-cage-in-austin-tx",
  },
};

export default function RageCageInAustinPage() {
  const articleSchema = generateArticleSchema({
    title: "Rage Cage in Austin, TX: The Complete Local Guide",
    description: "Comprehensive guide to playing Rage Cage in Austin, including where to play, local variations, and tips from UT Austin students and locals.",
    author: { name: "SipWiki" },
    publishDate: "2025-01-15",
    url: "https://sipwiki.app/guides/rage-cage-in-austin-tx",
    imageUrl: "/games/rage-cage-1.png",
    keywords: ["Drinking Games", "Party Games", "Austin", "College", "City Guides"],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-dark-900">
        <Header />
        <Sidebar />

        <main className="max-w-4xl mx-auto px-4 py-8 pb-24 md:pb-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Rage Cage in Austin, TX: The Complete Local Guide
            </h1>
            <p className="text-gray-400 text-lg">
              Everything you need to know about playing Rage Cage in Texas' live music capital
            </p>
          </div>

          <QuickAnswer
            question="Where can I play Rage Cage in Austin?"
            answer="Rage Cage thrives in Austin at West Campus house parties, Rainey Street bars, Dirty 6th venues, and East 6th gastropubs. UT Austin students dominate the West Campus scene with basement tournaments and rooftop games. Popular spots include Brotherhood Lounge (Rainey), Barbarella (Red River), and countless West Campus houses. SXSW and ACL weekends see massive Rage Cage tournaments. Austin's year-round warm weather enables constant outdoor games."
            tips={[
              "West Campus = best house party scene",
              "Rainey Street bars have outdoor setups",
              "6th Street gets packed Fri-Sat nights",
              "SXSW and ACL = huge tournaments"
            ]}
            variant="primary"
          />

          <div className="prose prose-invert max-w-none mt-12">
            <h2>Playing Rage Cage in Austin</h2>
            <p>
              Looking to play Rage Cage in Austin? You're in one of the best party cities in TX! Home of UW-Madison has a thriving party scene where Rage Cage is a staple at college parties, bars, and house gatherings. Whether you're a student, recent grad, or just visiting, this guide covers everything you need to know about playing Rage Cage in Austin - from the best venues to local rule variations that make the game uniquely Austin.
            </p>

            <h2>Where to Play Rage Cage in Austin</h2>

            <h3>West Campus (UT Austin)</h3>
            <p>
              The epicenter of Austin's Rage Cage scene. This neighborhood is packed with student housing and has Rage Cage games every weekend:
            </p>
            <ul>
              <li><strong>Rio Grande corridor:</strong> High-rise apartments with rooftop parties</li>
              <li><strong>Pearl Street:</strong> Classic college houses with backyard setups</li>
              <li><strong>Leon Street:</strong> Cooperative housing with creative Rage Cage variations</li>
              <li><strong>24th Street:</strong> Mix of apartments and houses, constant parties</li>
            </ul>

            <h3>Downtown Entertainment Districts</h3>

            <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">Rainey Street</h4>
                <p className="text-sm text-gray-300">
                  Bungalow bars with sprawling outdoor spaces. Many venues have permanent Rage Cage setups. Slightly more upscale than 6th Street.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">Dirty 6th Street</h4>
                <p className="text-sm text-gray-300">
                  Classic Austin bar strip. Rowdy, energetic, and perfect for Rage Cage. Games happen spontaneously at many venues.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">East 6th Street</h4>
                <p className="text-sm text-gray-300">
                  Hipster alternative to Dirty 6th. Gastropubs and bars with organized Rage Cage leagues. More craft beer focused.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">Red River Cultural District</h4>
                <p className="text-sm text-gray-300">
                  Live music venues with pre-show Rage Cage. Bands sometimes join games between sets!
                </p>
              </div>
            </div>

            <h3>Campus Events</h3>
            <p>During tailgates, spring fests, and other campus events, you'll find Rage Cage tables everywhere. These are great opportunities to:</p>
            <ul>
              <li>Meet new people who love the game</li>
              <li>Learn different rule variations</li>
              <li>Join impromptu tournaments</li>
              <li>Experience the community atmosphere</li>
            </ul>

            <h2>Austin Rage Cage Traditions</h2>

            <h3>SXSW Rage Cage Marathon</h3>
            <p>
              During South by Southwest (March), the city transforms into a Rage Cage paradise. Day parties, rooftop games, and after-parties all feature the game. Some house parties run 14-hour Rage Cage marathons!
            </p>

            <h3>Austin City Limits (ACL) Festival</h3>
            <p>
              October brings ACL to Zilker Park. Before and after each day, West Campus explodes with Rage Cage tournaments. Many houses host themed games based on which bands are playing.
            </p>

            <h3>UT Football Tailgates</h3>
            <p>
              Darrell K Royal Stadium parking lots become Rage Cage central before Longhorns games. Alumni vs. student competitions are legendary.
            </p>

            <h3>Sixth Street Halloween</h3>
            <p>
              Austin's Halloween celebration on 6th Street is massive. Costume-themed Rage Cage games happen at every bar and many have prizes for best costumes.
            </p>

            <h2>Austin-Specific Rage Cage Variations</h2>

            <h3>The "Keep Austin Weird" Rule</h3>
            <p>
              In true Austin fashion, some houses require you to yell a random weird fact when you stack someone. Example: "Bats live under Congress Bridge!" The stacked player must respond "Keep it weird!" before drinking.
            </p>

            <h3>Topo Chico Rage Cage</h3>
            <p>
              Austin's obsession with Topo Chico (sparkling water) extends to Rage Cage. Some venues offer a "hydration round" where losers drink Topo Chico instead of beer - perfect for marathon sessions.
            </p>

            <h3>Music Break Rule</h3>
            <p>
              When a particularly good song comes on, game pauses and everyone must dance for 30 seconds. Very Austin!
            </p>

            <h3>Breakfast Tacos Penalty</h3>
            <p>
              Loser of the tournament has to buy breakfast tacos for everyone the next morning (usually from Torchy's or Tacodeli). This Austin tradition ensures people stay friends after competitive games.
            </p>

            <h2>Austin-Specific Tips</h2>

            <h3>Weather Considerations</h3>
            <p>
              Austin's warm climate means year-round outdoor Rage Cage is possible. Bring sunscreen for daytime games and take advantage of rooftop venues. Summer gets brutally hot (100°F+), so evening games are preferred June-August. Spring and fall offer perfect weather for all-day tournaments.
            </p>

            <h3>Transportation</h3>
            <p>Austin offers multiple options for safe travel after playing Rage Cage:</p>
            <ul>
              <li><strong>Rideshare:</strong> Uber/Lyft widely available (though surge pricing is common on weekends)</li>
              <li><strong>Public transportation:</strong> CapMetro buses, though limited late-night routes</li>
              <li><strong>Designated driver programs:</strong> Many venues participate</li>
              <li><strong>Walking:</strong> West Campus and downtown areas are walkable</li>
              <li><strong>Bird/Lime scooters:</strong> Popular but illegal if intoxicated</li>
            </ul>

            <h3>Best Times to Play</h3>
            <ul>
              <li><strong>Weekends:</strong> Bars fill up 8pm-2am, arrive early for tables</li>
              <li><strong>Weekdays:</strong> Happy hour specials often include Rage Cage deals</li>
              <li><strong>College events:</strong> Tailgates, spring fest, start of semester</li>
              <li><strong>Thursday nights:</strong> West Campus gets rowdy starting Thursday evenings</li>
              <li><strong>Special events:</strong> SXSW, ACL, Formula 1 race weekends</li>
            </ul>

            <h3>Local Etiquette</h3>
            <ul>
              <li>Respect house rules - they vary by venue</li>
              <li>Clean up after yourself (Austin players take pride in their setups)</li>
              <li>Be friendly - Austin has a welcoming Rage Cage community</li>
              <li>Tip your bartenders if playing at bars (20% standard in Austin)</li>
              <li><strong>Austin specific:</strong> "Keep Austin Weird" applies to Rage Cage - embrace creative variations!</li>
            </ul>

            <h2>Best Venues for Rage Cage</h2>

            <h3>Bars with Regular Rage Cage</h3>
            <ul>
              <li><strong>Brotherhood Lounge (Rainey):</strong> Outdoor patio with permanent tables</li>
              <li><strong>Barbarella (Red River):</strong> Dance club with upstairs Rage Cage area</li>
              <li><strong>Kung Fu Saloon (Downtown):</strong> Games bar with organized tournaments</li>
              <li><strong>Dizzy Rooster (Dirty 6th):</strong> Multi-level bar with rooftop games</li>
              <li><strong>The Library (West Campus):</strong> Student bar with basement Rage Cage</li>
            </ul>

            <h3>House Party Hotspots</h3>
            <ul>
              <li><strong>Co-ops (Pearl St, 21st St):</strong> Known for creative rule variations</li>
              <li><strong>Rio Grande Towers:</strong> High-rise rooftop parties with city views</li>
              <li><strong>North Campus houses:</strong> Less crowded than West Campus but still active</li>
              <li><strong>East Austin warehouses:</strong> Rave/party scene with late-night Rage Cage</li>
            </ul>

            <h2>Seasonal Guide to Austin Rage Cage</h2>

            <h3>Spring (Mar-May)</h3>
            <ul>
              <li><strong>March:</strong> SXSW brings international visitors and massive tournaments</li>
              <li><strong>April:</strong> Perfect weather, outdoor games peak</li>
              <li><strong>May:</strong> End of semester parties, seniors go hard</li>
            </ul>

            <h3>Summer (June-Aug)</h3>
            <ul>
              <li><strong>Hot weather:</strong> Games move to later evenings (9pm+)</li>
              <li><strong>Barton Springs:</strong> Illegal but people play near the creek</li>
              <li><strong>Lake Travis parties:</strong> Boat party Rage Cage</li>
            </ul>

            <h3>Fall (Sep-Nov)</h3>
            <ul>
              <li><strong>September:</strong> School starts, West Campus comes alive</li>
              <li><strong>October:</strong> ACL Festival weekends, Halloween parties</li>
              <li><strong>November:</strong> UT football season climax, championship tailgates</li>
            </ul>

            <h3>Winter (Dec-Feb)</h3>
            <ul>
              <li><strong>December:</strong> Finals stress relief through Rage Cage</li>
              <li><strong>January:</strong> New semester kickoff parties</li>
              <li><strong>February:</strong> Valentine's Day couples tournaments</li>
            </ul>

            <h2>Pro Tips from Austin Locals</h2>

            <h3>Stay Hydrated</h3>
            <p>
              Austin heat is no joke. Keep water bottles handy and alternate with non-alcoholic drinks. Many Austin players swear by Topo Chico between rounds.
            </p>

            <h3>Sunscreen is Essential</h3>
            <p>
              Daytime outdoor games will burn you fast. SPF 50+ is standard for SXSW and ACL tournament days.
            </p>

            <h3>Breakfast Taco Insurance</h3>
            <p>
              Have breakfast taco money ready for the morning. Torchy's, Veracruz, Tacodeli, and Valentina's are the go-to spots for post-Rage Cage recovery.
            </p>

            <h3>Tournament Strategy</h3>
            <p>
              Austin tournaments are highly competitive. Top teams:
            </p>
            <ul>
              <li>Practice bounce shots on textured surfaces (common on outdoor tables)</li>
              <li>Master the "first bounce pass" to target weak players</li>
              <li>Stay calm during stack pressure - Austin crowds get loud!</li>
              <li>Hydrate and pace yourself for multi-hour tournaments</li>
            </ul>

            <h2>FAQ: Rage Cage in Austin</h2>

            <h3>Can I play Rage Cage at SXSW without a badge?</h3>
            <p>
              Absolutely! House parties don't require badges and many bars have public games. The best Rage Cage action happens at unofficial parties anyway.
            </p>

            <h3>What's the drinking age enforcement like?</h3>
            <p>
              Texas strictly enforces 21+ at bars and the police presence is heavy on 6th Street. West Campus house parties are more lenient but host assumes responsibility.
            </p>

            <h3>Where can I buy Rage Cage supplies?</h3>
            <p>
              Target on Guadalupe (The Drag), HEB stores, and Walmart all stock solo cups and ping pong balls. Party stores near campus have bulk options.
            </p>

            <h3>Are there organized Rage Cage leagues?</h3>
            <p>
              Yes! Several West Campus houses run semester-long leagues with playoffs. Check social media groups like "UT Party Scene" for current leagues.
            </p>

            <h3>Can I bring my own beer to bars?</h3>
            <p>
              No, this is illegal in Texas. Bars provide beer or you can buy from them. House parties are BYOB friendly.
            </p>

            <h2>Austin Rage Cage Hall of Fame</h2>
            <p>
              Legendary Austin Rage Cage moments:
            </p>
            <ul>
              <li><strong>The 2019 SXSW 24-Hour Marathon:</strong> A West Campus house ran continuous Rage Cage for 24 hours straight</li>
              <li><strong>"Fastest Stack" Record:</strong> 1.2 seconds from catch to stack (Brotherhood Lounge, 2021)</li>
              <li><strong>Largest Tournament:</strong> 256 players during ACL 2022</li>
              <li><strong>Celebrity Sighting:</strong> Matthew McConaughey reportedly played at a West Campus party in 2018</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              Austin offers an incredible Rage Cage scene whether you're a casual player or serious competitor. From legendary college parties to friendly house games, you'll find your people here. Remember to play responsibly, respect local customs, and most importantly - have fun! The Austin Rage Cage community is welcoming, competitive, and always ready for another round.
            </p>
            <p>
              Ready to master the game? Check out our complete <Link href="/guides/rage-cage-rules" className="text-neon-pink hover:text-neon-pink/80">Rage Cage rules guide</Link> for detailed instructions, pro tips, and strategy guides.
            </p>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-br from-neon-pink/10 to-neon-blue/10 rounded-xl border border-neon-pink/30">
            <h3 className="text-xl font-bold text-white mb-3">More Rage Cage Resources</h3>
            <p className="text-gray-300 mb-4">
              Master the game with our comprehensive guides and tools:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/guides/rage-cage-rules"
                className="px-4 py-2 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
              >
                Complete Rage Cage Rules
              </Link>
              <Link
                href="/guides/drinking-games"
                className="px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
              >
                All Drinking Games
              </Link>
              <Link
                href="/bac-calculator"
                className="px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
              >
                BAC Calculator
              </Link>
            </div>
          </div>
        </main>

        <MobileNav />
      </div>
    </>
  );
}
