import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";
import { generateArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "King's Cup in Miami, FL: Where to Play & Local Rules (2025)",
  description: "Play King's Cup in Miami! Find the best beaches, clubs, local variations, and everything you need to know about King's Cup in Magic City.",
  keywords: [
    "King's Cup Miami",
    "King's Cup in Miami",
    "where to play King's Cup Miami",
    "Miami King's Cup bars",
    "King's Cup FL",
    "drinking games Miami",
  ],
  openGraph: {
    title: "King's Cup in Miami: Local Guide",
    description: "Play King's Cup in Miami! Find the best beaches, clubs, local variations, and everything you need to know about King's Cup in Magic City.",
    type: "article",
    url: "https://sipwiki.app/guides/kings-cup-in-miami-fl",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/kings-cup-in-miami-fl",
  },
};

export default function KingsCupInMiamiPage() {
  const articleSchema = generateArticleSchema({
    title: "King's Cup in Miami, FL: The Complete Local Guide",
    description: "Comprehensive guide to playing King's Cup in Miami, including South Beach parties, Wynwood venues, and Miami-specific variations.",
    author: "SipWiki",
    publishDate: "2025-01-15",
    url: "https://sipwiki.app/guides/kings-cup-in-miami-fl",
    images: ["/games/kings-cup-1.png"],
    categories: ["Drinking Games", "Party Games", "Miami", "City Guides"],
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
              King's Cup in Miami, FL: The Complete Local Guide
            </h1>
            <p className="text-gray-400 text-lg">
              Everything you need to know about playing King's Cup in Magic City
            </p>
          </div>

          <QuickAnswer
            question="Where can I play King's Cup in Miami?"
            answer="Miami's King's Cup scene thrives at South Beach bars (Wet Willies, Mango's), Wynwood Art District venues, Brickell rooftop lounges, and beach parties. Popular spots: LIV nightclub pre-games, Clevelander South Beach, Ball & Chain in Little Havana, and Gramps in Wynwood. Miami's year-round warm weather enables constant beach King's Cup. The game adapts to Miami's Latin culture with bilingual rules and reggaeton music breaks. Best times: Art Basel week, Ultra Music Festival, and any weekend on Ocean Drive."
            tips={[
              "South Beach = touristy but iconic venues",
              "Wynwood = hipster bars, creative variations",
              "Beach King's Cup = bring waterproof cards",
              "Learn Spanish drinking phrases - enhances the experience"
            ]}
            variant="primary"
          />

          <div className="prose prose-invert max-w-none mt-12">
            <h2>Playing King's Cup in Miami</h2>
            <p>
              Miami, FL - Magic City - is home to an incredible party scene, and King's Cup is one of the most popular drinking games played here. Whether you're at a South Beach bar, a Wynwood art venue, or a beach party, you'll find King's Cup enthusiasts throughout Miami. This comprehensive guide covers where to play King's Cup in Miami, local variations, and tips from seasoned Miami players.
            </p>

            <h2>Where to Play King's Cup in Miami</h2>

            <h3>South Beach - The Iconic Party Zone</h3>

            <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">Ocean Drive Bars</h4>
                <p className="text-sm text-gray-300">
                  The famous strip with outdoor seating. Wet Willies, Mango's Tropical Cafe, and The Clevelander all have King's Cup friendly vibes.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">Mac's Club Deuce</h4>
                <p className="text-sm text-gray-300">
                  Oldest bar in Miami Beach. Dive bar atmosphere, locals and tourists mix, King's Cup games happen spontaneously.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">Lost Weekend</h4>
                <p className="text-sm text-gray-300">
                  Punk rock dive bar on Española Way. More authentic than Ocean Drive tourist traps. Regular King's Cup nights.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">The Basement</h4>
                <p className="text-sm text-gray-300">
                  Miami Beach karaoke bar. King's Cup between song performances. Great for bachelor/bachelorette parties.
                </p>
              </div>
            </div>

            <h3>Wynwood - Arts District Vibes</h3>
            <ul>
              <li><strong>Gramps:</strong> Bar with backyard, live music, and drinking games including King's Cup</li>
              <li><strong>Coyo Taco:</strong> Mexican spot with outdoor bar area, very game-friendly</li>
              <li><strong>Wynwood Brewing Company:</strong> Brewery with outdoor space, bring your own cards</li>
              <li><strong>Wood Tavern:</strong> Sports bar with relaxed atmosphere</li>
            </ul>

            <h3>Brickell - Young Professional Scene</h3>
            <ul>
              <li><strong>Blackbird Ordinary:</strong> Outdoor bar with communal tables perfect for King's Cup</li>
              <li><strong>Batch Gastropub:</strong> Rooftop with games</li>
              <li><strong>The Wharf Miami:</strong> Outdoor venue on the Miami River</li>
              <li><strong>Brickell area rooftops:</strong> Many buildings have party-friendly rooftop lounges</li>
            </ul>

            <h3>Little Havana - Cuban Influence</h3>
            <ul>
              <li><strong>Ball & Chain:</strong> Live Latin music, outdoor patio, King's Cup with salsa breaks</li>
              <li><strong>Café La Trova:</strong> Cocktail bar, more upscale but game-friendly</li>
              <li><strong>Azucar Ice Cream Company:</strong> Nearby for post-game dessert runs</li>
            </ul>

            <h3>Beach Locations</h3>
            <p>Miami's beaches are perfect for King's Cup:</p>
            <ul>
              <li><strong>South Pointe Park:</strong> Less crowded than main South Beach</li>
              <li><strong>Haulover Beach:</strong> North Miami Beach, more local crowd</li>
              <li><strong>Crandon Park (Key Biscayne):</strong> Beautiful beach, party-friendly</li>
              <li><strong>Virginia Key Beach:</strong> Historic beach with BBQ areas</li>
            </ul>
            <p className="text-yellow-400 font-semibold">Note: Alcohol is technically illegal on Miami beaches, but enforcement is selective. Use discrete cups and don't be obvious.</p>

            <h2>Miami King's Cup Variations</h2>

            <h3>The "Calle Ocho" Rule</h3>
            <p>
              When a King is drawn, pour your drink into the center cup AND do a shot of Cuban rum. Very Miami. Very intense.
            </p>

            <h3>Bilingual King's Cup</h3>
            <p>
              Popular in Miami's diverse scene: Every other card must be explained in Spanish. Don't speak Spanish? Drink and learn!
            </p>

            <h3>The "Traffic Jam" Penalty</h3>
            <p>
              Uniquely Miami: When someone draws a Jack, everyone must name a Miami highway or street. Last person to name one drinks. (I-95, Dolphin Expressway, Biscayne Blvd, etc.)
            </p>

            <h3>Beach Edition Rules</h3>
            <ul>
              <li>If a card blows away in ocean wind, everyone drinks</li>
              <li>Sand in the King's Cup? Whoever drew the 4th King must drink it anyway</li>
              <li>Waterproof cards are mandatory (sold at local shops)</li>
            </ul>

            <h2>Miami-Specific Tips</h2>

            <h3>Weather Considerations</h3>
            <p>
              Miami's warm climate means year-round outdoor King's Cup. Humidity is intense - pace yourself and hydrate! Hurricane season (June-Nov) can interrupt beach games. Summer afternoon thunderstorms are brief but intense - have an indoor backup plan. Winter (Dec-Mar) is perfect 75-80°F weather.
            </p>

            <h3>Transportation</h3>
            <p>Miami transportation after King's Cup:</p>
            <ul>
              <li><strong>Rideshare:</strong> Uber/Lyft essential - DUI enforcement is STRICT in Miami</li>
              <li><strong>Metrorail/Metromover:</strong> Limited coverage, mostly downtown/Brickell</li>
              <li><strong>Trolley:</strong> Free trolleys in various neighborhoods, but limited hours</li>
              <li><strong>Water taxi:</strong> Fun option along the Miami River</li>
              <li><strong>Stay local:</strong> Party in the neighborhood where you're staying</li>
            </ul>

            <h3>Best Times to Play</h3>
            <ul>
              <li><strong>Year-round availability:</strong> Perfect weather almost every day</li>
              <li><strong>Art Basel (December):</strong> Massive art festival, parties everywhere, King's Cup central</li>
              <li><strong>Ultra Music Festival (March):</strong> EDM festival week = nonstop parties</li>
              <li><strong>Winter Music Conference:</strong> Another massive DJ/electronic music event</li>
              <li><strong>Spring Break (Mar-Apr):</strong> Crowds increase, especially South Beach</li>
              <li><strong>Weekends:</strong> Thursday-Sunday prime time, many locals have beach houses</li>
            </ul>

            <h3>Miami Beach vs Miami Proper</h3>
            <p><strong>Miami Beach (includes South Beach):</strong></p>
            <ul>
              <li>Tourist central, higher prices ($15-20 drinks)</li>
              <li>Beautiful people, party atmosphere 24/7</li>
              <li>Ocean Drive = see and be seen</li>
              <li>Best for: First-time visitors, special occasions</li>
            </ul>

            <p><strong>Miami Proper (Wynwood, Brickell, Little Havana):</strong></p>
            <ul>
              <li>More authentic, better prices ($8-12 drinks)</li>
              <li>Diverse crowds, local culture</li>
              <li>Better food options nearby</li>
              <li>Best for: Locals, budget-conscious, culture seekers</li>
            </ul>

            <h3>Local Etiquette</h3>
            <ul>
              <li>Dress code matters - Miami is fashion-forward (no flip-flops at nice venues)</li>
              <li>Tipping: 20%+ is standard, bartenders remember good tippers</li>
              <li>Spanish phrases help: "Salud!" (cheers), "Una más" (one more)</li>
              <li>Beach respect: Clean up after King's Cup games, leave no trace</li>
              <li><strong>Miami specific:</strong> Valet parking is everywhere, budget $10-20</li>
            </ul>

            <h2>Seasonal Guide to Miami King's Cup</h2>

            <h3>Winter "Season" (Nov-April)</h3>
            <ul>
              <li><strong>Weather:</strong> Perfect 70-80°F, low humidity</li>
              <li><strong>Crowds:</strong> Snowbirds and tourists peak season</li>
              <li><strong>Events:</strong> Art Basel, boat shows, Ultra Music Festival</li>
              <li><strong>Best time:</strong> Optimal for outdoor King's Cup</li>
            </ul>

            <h3>Summer (May-October)</h3>
            <ul>
              <li><strong>Weather:</strong> Hot (85-95°F) and humid, afternoon rain</li>
              <li><strong>Crowds:</strong> Fewer tourists, more locals</li>
              <li><strong>Prices:</strong> Better deals on everything</li>
              <li><strong>Strategy:</strong> Late night beach games when it cools down</li>
            </ul>

            <h2>Pro Tips from Miami Locals</h2>

            <h3>Avoid Tourist Traps</h3>
            <ul>
              <li>Ocean Drive is fun but overpriced - explore side streets</li>
              <li>Go where locals go: Gramps, Ball & Chain, Wood Tavern</li>
              <li>Happy hours exist but are shorter than other cities (usually 5-7pm)</li>
            </ul>

            <h3>Beach King's Cup Setup</h3>
            <ul>
              <li>Waterproof plastic cards (sold at CVS, Walgreens)</li>
              <li>Weighted center cup (put sand in bottom so it doesn't blow)</li>
              <li>Cooler with ice - drinks get hot FAST in Miami sun</li>
              <li>Umbrella or tent for shade between rounds</li>
            </ul>

            <h3>Safety & Smart Play</h3>
            <ul>
              <li>Hydrate constantly - Miami heat + alcohol = dangerous combo</li>
              <li>Sunscreen even at night beach parties (moon burns are real)</li>
              <li>Don't leave drinks unattended in clubs/bars</li>
              <li>Know your limits - Miami DUI laws are strict, jail time is real</li>
            </ul>

            <h2>FAQ: King's Cup in Miami</h2>

            <h3>Can I play King's Cup on Miami Beach?</h3>
            <p>
              Alcohol is technically illegal, but enforcement varies. Use discrete cups, don't be rowdy, and clean up. South Beach police are stricter than other beaches. Virginia Key and Crandon Park are more relaxed.
            </p>

            <h3>What's the legal drinking age in Miami?</h3>
            <p>
              21+ strictly enforced. Bring valid ID everywhere - even if you're clearly over 21, you'll get carded. Fake IDs are confiscated and can result in arrest.
            </p>

            <h3>How expensive is drinking in Miami?</h3>
            <p>
              South Beach/Brickell: $15-25 per cocktail, $8-12 beer. Wynwood/Little Havana: $10-15 cocktails, $5-8 beer. Local dives: $5-8 drinks. Happy hours offer 2-for-1 but are rare.
            </p>

            <h3>Do I need to speak Spanish?</h3>
            <p>
              No, but it helps! Miami is bilingual. Learning basic phrases ("Salud," "Una cerveza," "La cuenta") earns respect and better service.
            </p>

            <h3>When is hurricane season?</h3>
            <p>
              June 1 - November 30 officially. September/October are peak. Hurricanes rarely hit directly, but tropical storms can ruin beach plans. Check weather before beach King's Cup.
            </p>

            <h2>Conclusion</h2>
            <p>
              Miami offers an incredible King's Cup scene whether you're a beach party lover or urban explorer. From iconic South Beach to artistic Wynwood, you'll find your people here. Remember to stay hydrated in the Miami heat, respect local customs, and most importantly - have fun! The Miami King's Cup community is diverse, welcoming, and always ready for another round.
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
