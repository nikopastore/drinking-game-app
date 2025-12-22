import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";
import { generateArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "King's Cup in New York, NY: Where to Play & Local Rules (2025)",
  description: "Play King's Cup in New York! Find the best bars, house party tips, local variations, and everything you need to know about King's Cup in The city that never sleeps.",
  keywords: [
    "King's Cup New York",
    "King's Cup in New York",
    "where to play King's Cup New York",
    "New York King's Cup bars",
    "King's Cup NY",
    "drinking games New York",
  ],
  openGraph: {
    title: "King's Cup in New York: Local Guide",
    description: "Play King's Cup in New York! Find the best bars, house party tips, local variations, and everything you need to know about King's Cup in The city that never sleeps.",
    type: "article",
    url: "https://sipwiki.app/guides/kings-cup-in-new-york-ny",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/kings-cup-in-new-york-ny",
  },
};

export default function KingsCupInNewYorkPage() {
  const articleSchema = generateArticleSchema({
    title: "King's Cup in New York, NY: The Complete Local Guide",
    description: "Comprehensive guide to playing King's Cup in New York, including where to play, local variations, and tips from NYC players.",
    author: { name: "SipWiki" },
    publishDate: "2025-01-15",
    url: "https://sipwiki.app/guides/kings-cup-in-new-york-ny",
    imageUrl: "/games/kings-cup-1.png",
    keywords: ["Drinking Games", "Party Games", "New York", "City Guides"],
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
              King's Cup in New York, NY: The Complete Local Guide
            </h1>
            <p className="text-gray-400 text-lg">
              Everything you need to know about playing King's Cup in the city that never sleeps
            </p>
          </div>

          <QuickAnswer
            question="Where can I play King's Cup in New York City?"
            answer="King's Cup is popular throughout NYC at downtown bars, rooftop gatherings, and house parties. Sports bars in the East Village, rooftop bars in Williamsburg, gastropubs in Chelsea, and dive bars in the Lower East Side all feature King's Cup. Many venues offer weekly leagues and tournaments. The game thrives in NYC's 24/7 party scene across all five boroughs."
            tips={[
              "Best bars: East Village, Williamsburg, Chelsea",
              "Rooftop venues popular in summer months",
              "Take subway/rideshare after playing",
              "Most venues peak 8pm-2am on weekends"
            ]}
            variant="primary"
          />

          <div className="prose prose-invert max-w-none mt-12">
            <h2>Playing King's Cup in New York City</h2>
            <p>
              New York, NY - The city that never sleeps - is home to an incredible party scene, and King's Cup is one of the most popular drinking games played here. Whether you're at a downtown bar, a house party, or a rooftop gathering, you'll find King's Cup tables and enthusiastic players throughout New York. This comprehensive guide covers where to play King's Cup in New York, local variations, and tips from seasoned New York players.
            </p>

            <h2>Where to Play King's Cup in New York</h2>

            <h3>Popular Bars & Venues</h3>
            <p>New York has numerous bars where King's Cup is a regular feature:</p>
            <ul>
              <li>Sports bars with multiple King's Cup tables</li>
              <li>Rooftop bars with outdoor King's Cup setups</li>
              <li>Gastropubs with weekly King's Cup leagues</li>
              <li>Dive bars with authentic, competitive atmospheres</li>
            </ul>

            <h3>Best Neighborhoods for King's Cup</h3>
            <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">East Village</h4>
                <p className="text-sm text-gray-300">
                  Classic dive bars and late-night spots where King's Cup has been played for decades. Authentic NYC vibe with competitive players.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">Williamsburg</h4>
                <p className="text-sm text-gray-300">
                  Brooklyn's hipster haven with rooftop bars and warehouse parties. Young crowd, creative rule variations.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">Murray Hill</h4>
                <p className="text-sm text-gray-300">
                  Post-grad party central with sports bars and young professional crowds. Organized King's Cup leagues.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">Lower East Side</h4>
                <p className="text-sm text-gray-300">
                  Mix of old-school dive bars and trendy new spots. Late-night King's Cup games until 4am.
                </p>
              </div>
            </div>

            <h3>Private Parties & Events</h3>
            <p>Many New York residents host King's Cup parties at:</p>
            <ul>
              <li>Apartment complexes with common areas</li>
              <li>Private homes with dedicated game rooms</li>
              <li>Rooftop terraces (especially popular in summer)</li>
              <li>Warehouse party spaces</li>
            </ul>

            <h3>Organized Leagues</h3>
            <p>Check out New York's competitive King's Cup scene:</p>
            <ul>
              <li>Bar leagues with season championships</li>
              <li>Corporate team-building events</li>
              <li>Charity tournament fundraisers</li>
              <li>Monthly meetups for enthusiasts</li>
            </ul>

            <h2>NYC King's Cup Variations</h2>
            <p>
              New York players have developed unique variations on the classic King's Cup rules:
            </p>

            <h3>The "NYC Speed Round"</h3>
            <p>
              In typical New York fashion, some bars play a faster version where turns happen simultaneously rather than one-by-one. This chaotic variation keeps pace with the city's energy!
            </p>

            <h3>The "Subway Rule"</h3>
            <p>
              A uniquely NYC rule: When a King is drawn, the player must name a subway line. All players who've ridden that line drink!
            </p>

            <h3>Borough Pride Rules</h3>
            <p>
              Some house parties add borough-specific rules where players represent their home borough and compete in mini-challenges throughout the game.
            </p>

            <h2>New York-Specific Tips</h2>

            <h3>Weather Considerations</h3>
            <p>
              New York has seasonal variations - outdoor King's Cup is popular in warm months, while bars and basements host games year-round. Summer rooftop games are legendary, while winter sends everyone to cozy basement bars.
            </p>

            <h3>Transportation</h3>
            <p>New York offers multiple options for safe travel after playing King's Cup:</p>
            <ul>
              <li><strong>Subway:</strong> Runs 24/7, though check for weekend service changes</li>
              <li><strong>Rideshare:</strong> Uber/Lyft widely available (expect surge pricing after 2am)</li>
              <li><strong>Taxi:</strong> Yellow cabs abundant in Manhattan</li>
              <li><strong>Walking:</strong> Many neighborhoods have high bar density</li>
            </ul>

            <h3>Best Times to Play</h3>
            <ul>
              <li><strong>Weekends:</strong> Bars fill up 8pm-2am, arrive early for tables</li>
              <li><strong>Weekdays:</strong> Happy hour specials often include King's Cup deals</li>
              <li><strong>Special events:</strong> Check local event calendars for tournaments</li>
            </ul>

            <h3>Local Etiquette</h3>
            <ul>
              <li>Respect house rules - they vary by venue</li>
              <li>Clean up after yourself (New York players take pride in their setups)</li>
              <li>Be friendly - New York has a welcoming King's Cup community</li>
              <li>Tip your bartenders if playing at bars (20%+ standard in NYC)</li>
            </ul>

            <h2>King's Cup Setup in NYC Apartments</h2>
            <p>
              Space is tight in New York apartments, but King's Cup adapts well:
            </p>
            <ul>
              <li><strong>Coffee table games:</strong> Most NYC apartments use coffee tables instead of full dining tables</li>
              <li><strong>Rooftop access:</strong> If your building has rooftop access, this is prime King's Cup territory</li>
              <li><strong>Kitchen counter:</strong> Small kitchens work perfectly for 4-6 player games</li>
              <li><strong>Pre-gaming spot:</strong> Many use King's Cup as a pre-game before hitting the bars</li>
            </ul>

            <h2>Seasonal Considerations</h2>

            <h3>Summer (June-August)</h3>
            <p>
              Peak season for NYC King's Cup! Rooftop bars, outdoor patios, and backyard BBQs all feature the game. Arrive early for prime spots.
            </p>

            <h3>Fall (September-November)</h3>
            <p>
              Perfect weather for outdoor games. College students return, ramping up competition.
            </p>

            <h3>Winter (December-February)</h3>
            <p>
              Indoor season. Basement bars, dive bars, and apartment parties dominate. Less crowded venues make it easier to get table time.
            </p>

            <h3>Spring (March-May)</h3>
            <p>
              Game picks back up outdoors. St. Patrick's Day sees massive King's Cup tournaments across the city.
            </p>

            <h2>FAQ: King's Cup in New York</h2>

            <h3>Do I need to bring my own cards?</h3>
            <p>
              Most bars provide decks, but house parties expect you to bring your own. Keep a waterproof deck in your bag for spontaneous games!
            </p>

            <h3>What's the drinking age enforcement like?</h3>
            <p>
              NYC strictly enforces 21+ at bars. Bring valid ID - many places card everyone regardless of age.
            </p>

            <h3>Can I play King's Cup in Central Park?</h3>
            <p>
              Drinking alcohol in NYC parks is illegal and enforced. Stick to bars, rooftops, and private spaces.
            </p>

            <h3>Are there tournament prizes?</h3>
            <p>
              Many NYC bar leagues offer prizes ranging from bar tabs to merchandise to cash prizes in larger tournaments.
            </p>

            <h2>Conclusion</h2>
            <p>
              New York offers an incredible King's Cup scene whether you're a casual player or serious competitor. From vibrant bar leagues to friendly house games, you'll find your people here. Remember to play responsibly, respect local customs, and most importantly - have fun! The New York King's Cup community is welcoming, competitive, and always ready for another round.
            </p>
            <p>
              Ready to master the game? Check out our complete <Link href="/guides/kings-cup-rules" className="text-neon-pink hover:text-neon-pink/80">King's Cup rules guide</Link> for detailed instructions, pro tips, and strategy guides.
            </p>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-br from-neon-pink/10 to-neon-blue/10 rounded-xl border border-neon-pink/30">
            <h3 className="text-xl font-bold text-white mb-3">More King's Cup Resources</h3>
            <p className="text-gray-300 mb-4">
              Master the game with our comprehensive guides and tools:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/guides/kings-cup-rules"
                className="px-4 py-2 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
              >
                Complete King's Cup Rules
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
