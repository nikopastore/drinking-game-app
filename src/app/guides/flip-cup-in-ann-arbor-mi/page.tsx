import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";
import { generateArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Flip Cup in Ann Arbor, MI: Where to Play & Local Rules (2025)",
  description: "Play Flip Cup in Ann Arbor! Find the best bars, house party tips, local variations, and everything you need to know about Flip Cup in Home of University of Michigan.",
  keywords: [
    "Flip Cup Ann Arbor",
    "Flip Cup in Ann Arbor",
    "where to play Flip Cup Ann Arbor",
    "Ann Arbor Flip Cup bars",
    "Flip Cup MI",
    "drinking games Ann Arbor",
    "college Flip Cup Ann Arbor",
    "Ann Arbor party scene",
  ],
  openGraph: {
    title: "Flip Cup in Ann Arbor: Local Guide",
    description: "Play Flip Cup in Ann Arbor! Find the best bars, house party tips, local variations, and everything you need to know about Flip Cup in Home of University of Michigan.",
    type: "article",
    url: "https://sipwiki.app/guides/flip-cup-in-ann-arbor-mi",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/flip-cup-in-ann-arbor-mi",
  },
};

export default function FlipCupInAnnArborPage() {
  const articleSchema = generateArticleSchema({
    title: "Flip Cup in Ann Arbor, MI: The Complete Local Guide",
    description: "Comprehensive guide to playing Flip Cup in Ann Arbor, including where to play, local variations, and tips from U-M students.",
    author: { name: "SipWiki" },
    publishDate: "2025-01-15",
    url: "https://sipwiki.app/guides/flip-cup-in-ann-arbor-mi",
    imageUrl: "/games/flip-cup-2.png",
    keywords: ["Drinking Games", "Party Games", "Ann Arbor", "College", "City Guides"],
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
              Flip Cup in Ann Arbor, MI: The Complete Local Guide
            </h1>
            <p className="text-gray-400 text-lg">
              Everything you need to know about playing Flip Cup in Michigan's ultimate college town
            </p>
          </div>

          <QuickAnswer
            question="Where can I play Flip Cup in Ann Arbor?"
            answer="Ann Arbor's Flip Cup scene is legendary! U-M students play at South University bars (Rick's American Cafe, Good Time Charley's, Blue Lep), Main Street venues, and countless house parties near campus. The city hosts massive Flip Cup tournaments during Michigan football weekends, Hash Bash (April), and Art Fair week (July). U-M's intense school spirit means Flip Cup games often involve 'Go Blue!' cheers. Best neighborhoods: South U, Packard/Hill, and North Campus. Flip Cup is serious business here - championship games draw 100+ spectators."
            tips={[
              "South U bars = prime Flip Cup territory",
              "Football Saturdays = massive tournaments",
              "Winter indoor leagues run Nov-Mar",
              "Learn 'The Victors' fight song for victory celebrations"
            ]}
            variant="primary"
          />

          <div className="prose prose-invert max-w-none mt-12">
            <h2>Playing Flip Cup in Ann Arbor</h2>
            <p>
              Looking to play Flip Cup in Ann Arbor? You're in one of the best party cities in MI! Home of University of Michigan has a thriving party scene where Flip Cup is a staple at college parties, bars, and house gatherings. Whether you're a student, recent grad, or just visiting, this guide covers everything you need to know about playing Flip Cup in Ann Arbor - from the best venues to local rule variations that make the game uniquely Ann Arbor.
            </p>

            <h2>Where to Play Flip Cup in Ann Arbor</h2>

            <h3>South University - The Heart of U-M Nightlife</h3>

            <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">Rick's American Cafe</h4>
                <p className="text-sm text-gray-300">
                  The most famous college bar in Michigan. Multiple floors, dedicated Flip Cup tables, and legendary Thursday night crowds.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">Good Time Charley's</h4>
                <p className="text-sm text-gray-300">
                  Classic dive bar with cheap drinks and regular Flip Cup tournaments. Cash only, bring small bills.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">The Blue Leprechaun</h4>
                <p className="text-sm text-gray-300">
                  Irish pub atmosphere, rooftop patio perfect for Flip Cup in warm weather. Great pizza for post-game fuel.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">Scorekeepers</h4>
                <p className="text-sm text-gray-300">
                  Sports bar with big screens and Flip Cup-friendly setup. Popular for watching Michigan games with Flip Cup breaks.
                </p>
              </div>
            </div>

            <h3>Main Street Venues</h3>
            <ul>
              <li><strong>Ashley's:</strong> Beer bar with 50+ taps, outdoor beer garden</li>
              <li><strong>Skeeps:</strong> Burger joint/bar, casual atmosphere</li>
              <li><strong>The Brown Jug:</strong> Historic bar, more relaxed than South U</li>
              <li><strong>Haymaker Public House:</strong> Upscale pub with outdoor space</li>
            </ul>

            <h3>House Parties - Where Flip Cup Thrives</h3>
            <p>Ann Arbor house parties are legendary:</p>
            <ul>
              <li><strong>South U Houses:</strong> Walking distance to bars, massive Thursday-Saturday parties</li>
              <li><strong>Packard/Hill Area:</strong> Quieter residential, house parties with yard space</li>
              <li><strong>North Campus:</strong> Engineering students, more low-key but still active</li>
              <li><strong>Burns Park:</strong> Older students/grad students, sophisticated parties</li>
            </ul>

            <h3>Campus Events</h3>
            <p>During tailgates, spring fests, and other campus events, you'll find Flip Cup tables everywhere:</p>
            <ul>
              <li><strong>Michigan Stadium Tailgates:</strong> 100,000+ football fans = massive Flip Cup scene</li>
              <li><strong>Hash Bash (April):</strong> Ann Arbor's famous cannabis celebration, Flip Cup included</li>
              <li><strong>Art Fair (July):</strong> City transforms, house parties with art-inspired Flip Cup variations</li>
              <li><strong>Festifall/Winterfest:</strong> Student org fairs that turn into Flip Cup fests</li>
            </ul>

            <h2>Ann Arbor Flip Cup Traditions</h2>

            <h3>The "Go Blue" Victory Chant</h3>
            <p>
              Winning team MUST chant "Go Blue!" three times. Losing team responds "Ohio!" and everyone boos. It's tradition.
            </p>

            <h3>Michigan vs Ohio State Weekend</h3>
            <p>
              The last weekend in November is insane. Flip Cup tournaments run non-stop. Wearing Ohio State colors gets you automatically stacked with penalty cups.
            </p>

            <h3>The "Victors" Challenge</h3>
            <p>
              If your team wins 3 straight rounds, you can challenge opponents to sing Michigan's fight song. They refuse? Drink penalty. They sing it wrong? Drink penalty.
            </p>

            <h3>Hash Bash Flip Cup</h3>
            <p>
              During Hash Bash, some parties play "Green Flip Cup" - everything must be green (green beer, lime drinks, etc.). Very Ann Arbor.
            </p>

            <h2>Ann Arbor-Specific Tips</h2>

            <h3>Weather Considerations</h3>
            <p>
              Ann Arbor's harsh winters push Flip Cup indoors Oct-April. Summer brings amazing outdoor beer garden setups. Spring (Apr-May) and fall (Sep-Oct) are perfect for tailgate Flip Cup with gorgeous Michigan foliage.
            </p>

            <h3>Transportation</h3>
            <p>Ann Arbor offers multiple options for safe travel after playing Flip Cup:</p>
            <ul>
              <li><strong>TheRide:</strong> Free bus service for students with MCard</li>
              <li><strong>Blue Buses:</strong> U-M campus buses run until 2am on weekends</li>
              <li><strong>Rideshare:</strong> Uber/Lyft widely available</li>
              <li><strong>Walking:</strong> Most student housing is walkable from South U bars (10-20 min)</li>
              <li><strong>SafeRide:</strong> Free student shuttle service late nights</li>
            </ul>

            <h3>Best Times to Play</h3>
            <ul>
              <li><strong>Thursday nights:</strong> Official college night out in Ann Arbor</li>
              <li><strong>Football Saturdays:</strong> Sept-Nov, city population doubles</li>
              <li><strong>Hash Bash (April 1st weekend):</strong> 10,000+ people flood the Diag</li>
              <li><strong>Art Fair week (July):</strong> Massive city-wide party</li>
              <li><strong>Winter semester start:</strong> January parties to celebrate return</li>
            </ul>

            <h3>Local Etiquette</h3>
            <ul>
              <li>Respect house rules - they vary by venue</li>
              <li>Clean up after yourself (Ann Arbor players take pride in their setups)</li>
              <li>Be friendly - Ann Arbor has a welcoming Flip Cup community</li>
              <li>Tip your bartenders if playing at bars</li>
              <li><strong>Michigan specific:</strong> Never mention Ohio State in a positive light</li>
              <li><strong>School pride:</strong> Wear maize and blue to fit in</li>
            </ul>

            <h2>Seasonal Guide to Ann Arbor Flip Cup</h2>

            <h3>Fall Semester (Aug-Dec)</h3>
            <ul>
              <li><strong>August:</strong> Welcome week = nonstop Flip Cup intro sessions</li>
              <li><strong>September-November:</strong> Football season dominance, every Saturday</li>
              <li><strong>Thanksgiving weekend:</strong> Michigan vs OSU = peak Flip Cup intensity</li>
              <li><strong>December:</strong> Finals stress relief through Flip Cup</li>
            </ul>

            <h3>Winter Semester (Jan-April)</h3>
            <ul>
              <li><strong>January:</strong> Indoor basement leagues form</li>
              <li><strong>February:</strong> Cabin fever Flip Cup - everyone needs release from winter</li>
              <li><strong>March:</strong> Spring Break = quiet, but returning students go hard</li>
              <li><strong>April:</strong> Hash Bash + warming weather = outdoor Flip Cup returns</li>
            </ul>

            <h3>Summer (May-Aug)</h3>
            <ul>
              <li><strong>May:</strong> End of semester celebrations</li>
              <li><strong>June-July:</strong> Summer students + Art Fair = underrated Flip Cup time</li>
              <li><strong>August:</strong> Students return early, ramp up begins</li>
            </ul>

            <h2>Pro Tips from Ann Arbor Legends</h2>

            <h3>Cold Weather Mastery</h3>
            <ul>
              <li>Gloves between rounds if playing outdoor winter Flip Cup</li>
              <li>Heated garages are Flip Cup sanctuaries Dec-Mar</li>
              <li>Beer stays naturally cold on unheated porches</li>
              <li>Layer up - you'll get warm flipping</li>
            </ul>

            <h3>Football Saturday Strategy</h3>
            <ul>
              <li>Arrive at tailgate spots by 7am for prime location</li>
              <li>Bring folding table and extra cups - you'll need them</li>
              <li>Pace yourself - games start at noon, Flip Cup can go til midnight</li>
              <li>Park in residential neighborhoods (free) vs paying $40+ in official lots</li>
            </ul>

            <h3>Bar Crawl Flip Cup</h3>
            <p>
              Ann Arbor tradition: Play one round of Flip Cup at each South U bar in a single night. Usually hits: Rick's → Blue Lep → Good Time → Scorekeepers. Survivors earn legendary status.
            </p>

            <h2>FAQ: Flip Cup in Ann Arbor</h2>

            <h3>Can I play Flip Cup at Michigan Stadium tailgates?</h3>
            <p>
              Absolutely! Tailgating starts 5 hours before kickoff. Flip Cup is everywhere. Just don't bring glass - stadium police confiscate glass containers.
            </p>

            <h3>What's the drinking age enforcement like?</h3>
            <p>
              Michigan enforces 21+ strictly. Bars card EVERYONE. House parties are more lenient but hosts face liability. Bring valid ID always.
            </p>

            <h3>Do I need to be a U-M student to play?</h3>
            <p>
              No! Ann Arbor welcomes everyone. Some house parties are student-only, but bars and public events are open to all. Michigan State students even visit (and get friendly trash talk).
            </p>

            <h3>What beer is most popular for Flip Cup here?</h3>
            <p>
              Busch Light dominates Michigan college scene. Also: Miller Lite, Natty Light. Local craft: Bell's Two Hearted (too expensive for Flip Cup but people do it). Oberon in summer.
            </p>

            <h3>Is there a Flip Cup championship?</h3>
            <p>
              Yes! Multiple bars host season-long leagues. Rick's American Cafe runs a fall semester championship with prizes. Hash Bash weekend has massive outdoor tournament.
            </p>

            <h2>Conclusion</h2>
            <p>
              Ann Arbor offers an incredible Flip Cup scene whether you're a casual player or serious competitor. From legendary college parties to friendly house games, you'll find your people here. Remember to layer up in winter, respect local customs, and most importantly - Go Blue! The Ann Arbor Flip Cup community is passionate, competitive, and always ready for another round.
            </p>
            <p>
              Ready to master the game? Check out our complete <Link href="/guides/flip-cup-rules" className="text-neon-pink hover:text-neon-pink/80">Flip Cup rules guide</Link> for detailed instructions, pro tips, and strategy guides.
            </p>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-br from-neon-pink/10 to-neon-blue/10 rounded-xl border border-neon-pink/30">
            <h3 className="text-xl font-bold text-white mb-3">More Flip Cup Resources</h3>
            <p className="text-gray-300 mb-4">
              Master the game with our comprehensive guides and tools:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/guides/flip-cup-rules"
                className="px-4 py-2 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
              >
                Complete Flip Cup Rules
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
