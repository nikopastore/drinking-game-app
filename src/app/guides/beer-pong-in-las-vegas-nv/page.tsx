import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";
import { generateArticleSchema } from "@/lib/schema";
import { EmailCapture } from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Beer Pong in Las Vegas, NV: Where to Play & Local Rules (2025)",
  description: "Play Beer Pong in Las Vegas! Find the best casinos, pool parties, local variations, and everything you need to know about Beer Pong in Sin City.",
  keywords: [
    "Beer Pong Las Vegas",
    "Beer Pong in Las Vegas",
    "where to play Beer Pong Las Vegas",
    "Las Vegas Beer Pong bars",
    "Beer Pong NV",
    "drinking games Las Vegas",
  ],
  openGraph: {
    title: "Beer Pong in Las Vegas: Local Guide",
    description: "Play Beer Pong in Las Vegas! Find the best casinos, pool parties, local variations, and everything you need to know about Beer Pong in Sin City.",
    type: "article",
    url: "https://sipwiki.app/guides/beer-pong-in-las-vegas-nv",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/beer-pong-in-las-vegas-nv",
  },
};

export default function BeerPongInLasVegasPage() {
  const articleSchema = generateArticleSchema({
    title: "Beer Pong in Las Vegas, NV: The Complete Local Guide",
    description: "Comprehensive guide to playing Beer Pong in Las Vegas, including where to play, casino tournaments, and Vegas-specific variations.",
    author: { name: "SipWiki" },
    publishDate: "2025-01-15",
    url: "https://sipwiki.app/guides/beer-pong-in-las-vegas-nv",
    imageUrl: "/games/bp-1.png",
    keywords: ["Drinking Games", "Party Games", "Las Vegas", "City Guides"],
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
              Beer Pong in Las Vegas, NV: The Complete Local Guide
            </h1>
            <p className="text-gray-400 text-lg">
              Everything you need to know about playing Beer Pong in Sin City
            </p>
          </div>

          <QuickAnswer
            question="Where can I play Beer Pong in Las Vegas?"
            answer="Las Vegas offers Beer Pong at casino bars (O'Sheas, Ellis Island), pool parties (Encore Beach Club, Wet Republic), Fremont Street venues, and off-Strip locals bars. Many casinos host official Beer Pong tournaments with cash prizes. The Strip has tourist-friendly games at party bars like Yard House and PBR Rock Bar. Downtown offers cheaper drinks and more authentic games. Vegas runs 24/7 so you can play anytime. Best seasons: pool party season (Apr-Oct) and March Madness tournaments."
            tips={[
              "Casino tournaments often have $500+ prize pools",
              "Pool parties charge $20-60 entry but have tables",
              "Fremont Street = cheaper drinks, same fun",
              "24/7 city = play Beer Pong at 4am if you want"
            ]}
            variant="primary"
          />

          {/* AdSense In-Content Ad Placeholder */}
          <div className="my-8 rounded-xl border border-dashed border-dark-600 bg-dark-800/40 px-6 py-10 text-center text-sm text-gray-500">
            {/* AdSense: Guide In-Content Ad */}
            Ad Placeholder - Guide In-Content
          </div>

          <div className="prose prose-invert max-w-none mt-12">
            <h2>Playing Beer Pong in Las Vegas</h2>
            <p>
              Las Vegas, NV - Sin City - is home to an incredible party scene, and Beer Pong is one of the most popular drinking games played here. Whether you're at a casino bar, a pool party, or downtown venue, you'll find Beer Pong tables and enthusiastic players throughout Las Vegas. This comprehensive guide covers where to play Beer Pong in Las Vegas, tournament info, and tips from seasoned Vegas players.
            </p>

            <h2>Where to Play Beer Pong in Las Vegas</h2>

            <h3>The Strip - Casino Bars</h3>

            <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">O'Sheas Casino</h4>
                <p className="text-sm text-gray-300">
                  Connected to The LINQ. Known for Beer Pong tournaments and party atmosphere. Tables available all day.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">Ellis Island Casino</h4>
                <p className="text-sm text-gray-300">
                  Off-Strip locals casino. Cheap drinks ($3 beers), Beer Pong friendly, and authentic Vegas vibe without tourist prices.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">PBR Rock Bar</h4>
                <p className="text-sm text-gray-300">
                  Inside Planet Hollywood. Mechanical bull + Beer Pong tables. Great for bachelor/bachelorette parties.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">Yard House (Multiple Locations)</h4>
                <p className="text-sm text-gray-300">
                  The LINQ and more. Sports bar chain with Beer Pong tables. 130+ beers on tap for variety.
                </p>
              </div>
            </div>

            <h3>Pool Parties (Seasonal - April to October)</h3>
            <p>Vegas pool parties often have Beer Pong as a featured activity:</p>
            <ul>
              <li><strong>Encore Beach Club:</strong> High-end pool party, Beer Pong tables by the pools</li>
              <li><strong>Wet Republic (MGM Grand):</strong> Massive pool complex with multiple game areas</li>
              <li><strong>Rehab Beach Club:</strong> Hard Rock Hotel, party-focused with tournaments</li>
              <li><strong>Liquid Pool Lounge:</strong> Aria, more upscale but has tables</li>
            </ul>
            <p className="text-yellow-400 font-semibold">Note: Pool parties charge $20-60 entry for men, often free for women before certain times.</p>

            <h3>Downtown Las Vegas (Fremont Street)</h3>
            <p>Cheaper drinks, more authentic Vegas experience:</p>
            <ul>
              <li><strong>The D Casino:</strong> Multiple bars with Beer Pong setups</li>
              <li><strong>Four Queens:</strong> Older casino, locals-friendly atmosphere</li>
              <li><strong>Fremont Street bars:</strong> Various venues along the pedestrian mall</li>
              <li><strong>Commonwealth:</strong> Rooftop bar with games including Beer Pong</li>
            </ul>

            <h3>Off-Strip Locals Spots</h3>
            <ul>
              <li><strong>PT's Pub:</strong> Chain of locals bars throughout Vegas</li>
              <li><strong>Double Down Saloon:</strong> Dive bar with punk rock vibe</li>
              <li><strong>Atomic Liquors:</strong> Oldest freestanding bar in Vegas</li>
            </ul>

            <h2>Las Vegas Beer Pong Tournaments</h2>

            <h3>Official Casino Tournaments</h3>
            <p>
              Several Vegas casinos host regular Beer Pong tournaments with real prize money:
            </p>
            <ul>
              <li><strong>O'Sheas Weekly Tournaments:</strong> Every Friday, $500+ prize pool</li>
              <li><strong>March Madness Specials:</strong> Many casinos run Beer Pong alongside basketball</li>
              <li><strong>New Year's Eve Events:</strong> Huge tournaments with $1000+ prizes</li>
              <li><strong>Bachelor/ette Packages:</strong> Private tournament hosting available</li>
            </ul>

            <h3>World Series of Beer Pong</h3>
            <p>
              Yes, it's real! The WSOBP is held annually in Las Vegas with:
            </p>
            <ul>
              <li>$50,000+ in total prizes</li>
              <li>Players from around the world</li>
              <li>Usually in summer at Westgate Las Vegas</li>
              <li>Multiple days of competition</li>
            </ul>

            <h2>Vegas-Specific Beer Pong Variations</h2>

            <h3>The "High Roller" Rule</h3>
            <p>
              Popular at casinos: If both players make their shots, the team can bet on the next round. Double or nothing - if you make both again, opponents drink double. Miss and you drink double.
            </p>

            <h3>The "What Happens in Vegas" Variant</h3>
            <p>
              Loser must reveal one embarrassing Vegas story before leaving the table. Keeps things interesting!
            </p>

            <h3>Strip Stakes Beer Pong</h3>
            <p>
              Sometimes played at pool parties: Every 3 cups lost = remove one item (within reason - swimwear/coverups). Not official but it happens.
            </p>

            <h2>Las Vegas-Specific Tips</h2>

            <h3>Weather Considerations</h3>
            <p>
              Las Vegas's warm climate means year-round outdoor Beer Pong is possible. Bring sunscreen for daytime games and take advantage of rooftop venues. Summer gets dangerously hot (110°F+) - hydrate between rounds or play indoors. Spring and fall are perfect for outdoor games.
            </p>

            <h3>Transportation</h3>
            <p>Las Vegas offers multiple options for safe travel after playing Beer Pong:</p>
            <ul>
              <li><strong>Walk:</strong> The Strip is walkable but distances are deceptive (can take 30+ min)</li>
              <li><strong>Monorail:</strong> Connects several casinos on east side of Strip</li>
              <li><strong>Rideshare:</strong> Uber/Lyft essential, especially from off-Strip locations</li>
              <li><strong>Taxi:</strong> Still prevalent in Vegas, line up at casino taxi stands</li>
              <li><strong>Stay on property:</strong> Book hotel where you plan to party</li>
            </ul>

            <h3>Best Times to Play</h3>
            <ul>
              <li><strong>24/7 availability:</strong> Vegas never closes - play at any hour</li>
              <li><strong>Weekends:</strong> Friday-Sunday are peak, expect crowds and higher drink prices</li>
              <li><strong>Weekdays:</strong> Locals deals, cheaper drinks, less crowded</li>
              <li><strong>Special events:</strong> March Madness, NYE, Super Bowl weekend - massive tournaments</li>
              <li><strong>Pool season:</strong> April-October for outdoor pool party Beer Pong</li>
            </ul>

            <h3>Money-Saving Tips</h3>
            <ul>
              <li><strong>Downtown over Strip:</strong> Drinks are 50-70% cheaper on Fremont Street</li>
              <li><strong>Happy hours:</strong> Many bars have 2-for-1 deals 4-7pm</li>
              <li><strong>Locals casinos:</strong> Ellis Island, Orleans, Silverton have $2-3 beers</li>
              <li><strong>Free entry times:</strong> Pool parties often free for everyone before noon</li>
              <li><strong>Player's club cards:</strong> Get free drinks while gambling (even penny slots)</li>
            </ul>

            <h3>Local Etiquette</h3>
            <ul>
              <li>Tip bartenders $1-2 per drink minimum (they control your game time)</li>
              <li>Don't hog tables - 20-30 minutes max if others are waiting</li>
              <li>Clean up your area - Vegas staff appreciate it</li>
              <li>Respect tournament rules - prize money makes people serious</li>
              <li><strong>Vegas specific:</strong> What happens in Vegas Beer Pong stays in Vegas Beer Pong</li>
            </ul>

            <h2>Vegas Beer Pong by Neighborhood</h2>

            <h3>The Strip (Tourist Central)</h3>
            <ul>
              <li><strong>Pros:</strong> Most venues, easy to find, 24/7 availability</li>
              <li><strong>Cons:</strong> Expensive drinks ($12-18), crowded, touristy</li>
              <li><strong>Best for:</strong> First-timers, bachelor parties, special occasions</li>
            </ul>

            <h3>Downtown/Fremont Street</h3>
            <ul>
              <li><strong>Pros:</strong> Cheaper drinks ($5-8), more authentic, cover-free venues</li>
              <li><strong>Cons:</strong> Rougher area at night, older casinos</li>
              <li><strong>Best for:</strong> Budget travelers, locals, experienced Vegas visitors</li>
            </ul>

            <h3>Off-Strip Locals Areas</h3>
            <ul>
              <li><strong>Pros:</strong> Cheapest drinks ($3-5), real Vegas culture, friendly crowds</li>
              <li><strong>Cons:</strong> Need transportation, less "Vegas" atmosphere</li>
              <li><strong>Best for:</strong> Locals, long-term visitors, budget-conscious players</li>
            </ul>

            <h2>Seasonal Guide to Vegas Beer Pong</h2>

            <h3>Winter (Dec-Feb)</h3>
            <ul>
              <li><strong>Weather:</strong> 50-60°F, comfortable for outdoor games</li>
              <li><strong>Events:</strong> New Year's Eve huge tournaments, Super Bowl weekend</li>
              <li><strong>Indoor focus:</strong> Casino bars busiest</li>
            </ul>

            <h3>Spring (Mar-May)</h3>
            <ul>
              <li><strong>Weather:</strong> Perfect 70-85°F</li>
              <li><strong>Events:</strong> March Madness Beer Pong mania, pool season starts</li>
              <li><strong>Best season:</strong> Ideal temperatures for all-day outdoor play</li>
            </ul>

            <h3>Summer (June-Aug)</h3>
            <ul>
              <li><strong>Weather:</strong> Extreme heat 105-115°F</li>
              <li><strong>Events:</strong> World Series of Beer Pong, massive pool parties</li>
              <li><strong>Strategy:</strong> Indoor air-conditioned venues or pools only</li>
            </ul>

            <h3>Fall (Sep-Nov)</h3>
            <ul>
              <li><strong>Weather:</strong> Returns to pleasant 70-85°F</li>
              <li><strong>Events:</strong> Football season tournaments, Halloween parties</li>
              <li><strong>Good time:</strong> Pool season extends, fewer summer crowds</li>
            </ul>

            <h2>FAQ: Beer Pong in Las Vegas</h2>

            <h3>Can you gamble on Beer Pong in Vegas?</h3>
            <p>
              Officially no - casinos don't take bets on Beer Pong. However, organized tournaments with entry fees and prize pools are legal. Private side bets between players happen but aren't casino-sanctioned.
            </p>

            <h3>How much do drinks cost at Beer Pong venues?</h3>
            <p>
              Strip casinos: $12-18 per beer. Downtown: $5-8. Locals spots: $3-5. Pool parties: $15-20. Happy hours can halve these prices.
            </p>

            <h3>Do I need to be 21 to play Beer Pong in Vegas?</h3>
            <p>
              Yes! Nevada strictly enforces 21+ for drinking. All venues will card you. No exceptions, even in casinos.
            </p>

            <h3>Can I play Beer Pong in my hotel room?</h3>
            <p>
              Most hotels allow it, but be reasonable about noise. Some upscale properties prohibit it. Party-friendly hotels (Flamingo, Linq, Downtown casinos) are more lenient.
            </p>

            <h3>Are there professional Beer Pong players in Vegas?</h3>
            <p>
              Yes! The World Series of Beer Pong attracts pros. Some players make $10k-50k per year from tournaments. Vegas is the epicenter of competitive Beer Pong.
            </p>

            <h2>Conclusion</h2>
            <p>
              Las Vegas offers an incredible Beer Pong scene whether you're a casual player or tournament competitor. From vibrant casino bars to massive pool parties, you'll find your people here. Remember to play responsibly, pace yourself in the Vegas heat, and most importantly - have fun! The Las Vegas Beer Pong community welcomes everyone.
            </p>
            <p>
              Ready to master the game? Check out our complete <Link href="/guides/beer-pong-rules" className="text-neon-pink hover:text-neon-pink/80">Beer Pong rules guide</Link> for detailed instructions, pro tips, and strategy guides.
            </p>
          </div>

          <EmailCapture source="guide" />

          <div className="mt-12 p-6 bg-gradient-to-br from-neon-pink/10 to-neon-blue/10 rounded-xl border border-neon-pink/30">
            <h3 className="text-xl font-bold text-white mb-3">More Beer Pong Resources</h3>
            <p className="text-gray-300 mb-4">
              Master the game with our comprehensive guides and tools:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/guides/beer-pong-rules"
                className="px-4 py-2 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
              >
                Complete Beer Pong Rules
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
