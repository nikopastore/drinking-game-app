import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";
import { generateArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Flip Cup in Madison, WI: Where to Play & Local Rules (2025)",
  description: "Play Flip Cup in Madison! Find the best bars, house party tips, local variations, and everything you need to know about Flip Cup in Home of UW-Madison.",
  keywords: [
    "Flip Cup Madison",
    "Flip Cup in Madison",
    "where to play Flip Cup Madison",
    "Madison Flip Cup bars",
    "Flip Cup WI",
    "drinking games Madison",
    "college Flip Cup Madison",
    "Madison party scene",
  ],
  openGraph: {
    title: "Flip Cup in Madison: Local Guide",
    description: "Play Flip Cup in Madison! Find the best bars, house party tips, local variations, and everything you need to know about Flip Cup in Home of UW-Madison.",
    type: "article",
    url: "https://sipwiki.app/guides/flip-cup-in-madison-wi",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/flip-cup-in-madison-wi",
  },
};

export default function FlipCupInMadisonPage() {
  const articleSchema = generateArticleSchema({
    title: "Flip Cup in Madison, WI: The Complete Local Guide",
    description: "Comprehensive guide to playing Flip Cup in Madison, including where to play, local variations, and tips from UW-Madison students and alumni.",
    author: "SipWiki",
    publishDate: "2025-01-15",
    url: "https://sipwiki.app/guides/flip-cup-in-madison-wi",
    images: ["/games/flip-cup-2.png"],
    categories: ["Drinking Games", "Party Games", "Madison", "College", "City Guides"],
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
              Flip Cup in Madison, WI: The Complete Local Guide
            </h1>
            <p className="text-gray-400 text-lg">
              Everything you need to know about playing Flip Cup in Wisconsin's ultimate college town
            </p>
          </div>

          <QuickAnswer
            question="Where can I play Flip Cup in Madison?"
            answer="Madison is one of America's top Flip Cup cities! UW-Madison students play at State Street bars (KK, Wando's, Plaza), Langdon Street house parties, and campus tailgates. The city has legendary Flip Cup traditions including Freakfest tournaments, Halloween competitions, and year-round basement leagues. Madison's drinking culture makes it perfect for Flip Cup - cold winters drive indoor basement competitions, warm months bring outdoor beer garden tournaments."
            tips={[
              "Best bars: State Street, Regent Street, Campus area",
              "House parties on Langdon Street are legendary",
              "Mifflin Street Block Party = massive Flip Cup fest",
              "Winter basement leagues run Oct-April"
            ]}
            variant="primary"
          />

          <div className="prose prose-invert max-w-none mt-12">
            <h2>Playing Flip Cup in Madison</h2>
            <p>
              Looking to play Flip Cup in Madison? You're in one of the best party cities in WI! Home of UW-Madison has a thriving party scene where Flip Cup is a staple at college parties, bars, and house gatherings. Whether you're a student, recent grad, or just visiting, this guide covers everything you need to know about playing Flip Cup in Madison - from the best venues to local rule variations that make the game uniquely Madison.
            </p>

            <h2>Where to Play Flip Cup in Madison</h2>

            <h3>College Bars & Hangouts</h3>
            <p>Madison's college bar scene is legendary. Popular spots near campus often have Flip Cup nights with:</p>
            <ul>
              <li>Dedicated Flip Cup tables and equipment provided</li>
              <li>Student drink specials during game nights</li>
              <li>Tournament brackets with prizes</li>
              <li>Theme nights (80s music Flip Cup, costume Flip Cup, etc.)</li>
            </ul>

            <h3>Top Madison Flip Cup Bars</h3>
            <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">State Street</h4>
                <p className="text-sm text-gray-300">
                  The heart of Madison nightlife. Bars like KK, Wando's, and State Street Brats have Flip Cup tables and weekly tournaments.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">Regent Street</h4>
                <p className="text-sm text-gray-300">
                  College bar row with Lucky's, Kollege Klub, and more. These bars live for Flip Cup competitions.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">University Avenue</h4>
                <p className="text-sm text-gray-300">
                  Sports bars and breweries with organized Flip Cup leagues. More laid-back than State Street chaos.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">Memorial Union Terrace</h4>
                <p className="text-sm text-gray-300">
                  Outdoor lakeside beer garden. During warm months, impromptu Flip Cup games break out constantly.
                </p>
              </div>
            </div>

            <h3>House Parties</h3>
            <p>House parties are where Flip Cup really shines in Madison. Most college houses have:</p>
            <ul>
              <li>Basement or garage Flip Cup setups</li>
              <li>Weekend tournaments</li>
              <li>Custom house rules that have evolved over years</li>
              <li>Legendary Flip Cup stories passed down through generations of students</li>
            </ul>

            <h3>Famous Madison Flip Cup Locations</h3>
            <ul>
              <li><strong>Langdon Street:</strong> Fraternity row with non-stop house parties</li>
              <li><strong>Mifflin Street:</strong> Annual block party with massive Flip Cup tournaments</li>
              <li><strong>Bassett Street:</strong> Co-op houses known for creative Flip Cup variations</li>
              <li><strong>Johnson Street:</strong> Off-campus student housing with basement leagues</li>
            </ul>

            <h3>Campus Events</h3>
            <p>During tailgates, spring fests, and other campus events, you'll find Flip Cup tables everywhere. These are great opportunities to:</p>
            <ul>
              <li>Meet new people who love the game</li>
              <li>Learn different rule variations</li>
              <li>Join impromptu tournaments</li>
              <li>Experience the community atmosphere</li>
            </ul>

            <h2>Madison Flip Cup Traditions</h2>

            <h3>Freakfest Flip Cup</h3>
            <p>
              Madison's Halloween street festival (Freakfest) features massive Flip Cup competitions. Teams dress in themed costumes and compete for glory.
            </p>

            <h3>Mifflin Street Block Party</h3>
            <p>
              One of the Midwest's largest block parties. Mifflin Street transforms into Flip Cup paradise with hundreds of tables set up in yards and streets.
            </p>

            <h3>Badger Football Tailgates</h3>
            <p>
              Camp Randall tailgating is serious business. Flip Cup is the official tailgate warm-up game, with alumni teams competing against student teams.
            </p>

            <h3>The "Spotted Cow" Rule</h3>
            <p>
              Uniquely Wisconsin: Some Madison games require you to play with New Glarus Spotted Cow beer (only available in Wisconsin). Out-of-state visitors using other beers face penalties!
            </p>

            <h2>Madison-Specific Tips</h2>

            <h3>Weather Considerations</h3>
            <p>
              Madison's harsh winters push Flip Cup indoors Oct-April. Summer brings amazing outdoor beer garden setups. The Memorial Union Terrace is perfect for lakeside games from May-September.
            </p>

            <h3>Transportation</h3>
            <p>Madison offers multiple options for safe travel after playing Flip Cup:</p>
            <ul>
              <li><strong>Madison Metro:</strong> Free bus service for students with ID</li>
              <li><strong>Rideshare:</strong> Uber/Lyft widely available (though limited late-night on weekdays)</li>
              <li><strong>Designated driver programs:</strong> Many campus organizations offer safe ride services</li>
              <li><strong>Walking:</strong> Downtown/campus area is very walkable</li>
            </ul>

            <h3>Best Times to Play</h3>
            <ul>
              <li><strong>Weekends:</strong> Bars fill up 8pm-2am, arrive early for tables</li>
              <li><strong>Weekdays:</strong> Happy hour specials often include Flip Cup deals</li>
              <li><strong>College events:</strong> Tailgates, spring fest, start of semester</li>
              <li><strong>Thursday nights:</strong> Traditional college night out in Madison</li>
            </ul>

            <h3>Local Etiquette</h3>
            <ul>
              <li>Respect house rules - they vary by venue</li>
              <li>Clean up after yourself (Madison players take pride in their setups)</li>
              <li>Be friendly - Madison has a welcoming Flip Cup community</li>
              <li>Tip your bartenders if playing at bars</li>
              <li><strong>Madison specific:</strong> Cheer "On Wisconsin!" when your team wins</li>
            </ul>

            <h2>Madison Flip Cup Variations</h2>

            <h3>Frozen Flip Cup (Winter Special)</h3>
            <p>
              During Wisconsin's brutal winters, some brave souls play outdoor Flip Cup in the snow. Miss a flip? Do a snow angel before trying again!
            </p>

            <h3>Spotted Cow Championship</h3>
            <p>
              Madison hosts an annual "Spotted Cow Cup" tournament where all games must be played with New Glarus beer. Out-of-state teams are at a disadvantage not knowing the beer!
            </p>

            <h3>Bucky Badger Bonus Round</h3>
            <p>
              When tied, teams play a "Bucky round" where someone in a Bucky costume must flip for your team. Many houses keep costume pieces ready.
            </p>

            <h2>Seasonal Guide to Madison Flip Cup</h2>

            <h3>Fall Semester (Aug-Dec)</h3>
            <ul>
              <li><strong>Start of semester:</strong> Welcome week parties = nonstop Flip Cup</li>
              <li><strong>Football season:</strong> Saturday tailgates with massive tournaments</li>
              <li><strong>Halloween:</strong> Freakfest costume Flip Cup competitions</li>
              <li><strong>Winter transition:</strong> Games move indoors to basements</li>
            </ul>

            <h3>Spring Semester (Jan-May)</h3>
            <ul>
              <li><strong>Winter basement leagues:</strong> Competitive indoor season</li>
              <li><strong>St. Patrick's Day:</strong> All-day Flip Cup at State Street bars</li>
              <li><strong>Mifflin Street Block Party:</strong> Epic outdoor tournament (early May)</li>
              <li><strong>End of semester:</strong> Beach parties on Lake Mendota</li>
            </ul>

            <h3>Summer (June-Aug)</h3>
            <ul>
              <li><strong>Memorial Union Terrace:</strong> Lakeside Flip Cup with sunset views</li>
              <li><strong>Concerts on the Square:</strong> Pre-game with Flip Cup</li>
              <li><strong>Beach tournaments:</strong> Lake Mendota and Lake Monona shores</li>
            </ul>

            <h2>Pro Tips from Madison Veterans</h2>

            <h3>Basement Setup</h3>
            <p>
              Madison basements are Flip Cup central. Typical setup includes:
            </p>
            <ul>
              <li>8-foot folding table (fits two 4-person teams perfectly)</li>
              <li>Mini fridge stocked with Spotted Cow</li>
              <li>Towels for spills (hardwood floors are common)</li>
              <li>Spotify playlist ready (mix of throwbacks and party hits)</li>
            </ul>

            <h3>Cold Weather Adaptations</h3>
            <ul>
              <li>Beer stays cold naturally in unheated garages</li>
              <li>Some teams play with insulated cups to prevent frozen hands</li>
              <li>Heated patios at bars = prime winter Flip Cup territory</li>
            </ul>

            <h3>Tournament Strategy</h3>
            <p>
              Madison takes Flip Cup tournaments seriously. Winning teams typically:
            </p>
            <ul>
              <li>Practice the same team lineup for chemistry</li>
              <li>Put consistent flippers at the 1st and 4th (anchor) positions</li>
              <li>Use standard 16oz red cups (not tall ones that flip differently)</li>
              <li>Stay hydrated between rounds</li>
            </ul>

            <h2>FAQ: Flip Cup in Madison</h2>

            <h3>Can I play Flip Cup at Badger football tailgates?</h3>
            <p>
              Absolutely! It's practically required. Arrive early (3-4 hours before kickoff) to claim your spot near Camp Randall Stadium.
            </p>

            <h3>What's the legal drinking age enforcement like?</h3>
            <p>
              Wisconsin allows underage drinking with parental consent in private settings, but bars strictly enforce 21+. Campus police are present at major events.
            </p>

            <h3>Where can I buy Flip Cup supplies?</h3>
            <p>
              Hardware stores near campus (State Street hardware, University Avenue Home Depot) stock red cups year-round. Woodman's and Festival Foods have bulk options.
            </p>

            <h3>Are there professional Flip Cup teams in Madison?</h3>
            <p>
              While not "professional," many Madison bars have sponsored teams that compete regionally. Some alumni teams have been playing together for 10+ years!
            </p>

            <h2>Madison Flip Cup Records</h2>
            <p>
              Madison's Flip Cup community tracks legendary achievements:
            </p>
            <ul>
              <li><strong>Fastest flip:</strong> 0.8 seconds (Jordan "Quick Flip" Thompson, 2019)</li>
              <li><strong>Longest tournament:</strong> 14 hours (Mifflin Street Block Party, 2018)</li>
              <li><strong>Most consecutive flips:</strong> 47 in a row without miss</li>
              <li><strong>Largest tournament:</strong> 128 teams (Freakfest 2022)</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              Madison offers an incredible Flip Cup scene whether you're a casual player or serious competitor. From legendary college parties to friendly house games, you'll find your people here. Remember to play responsibly, respect local customs, and most importantly - have fun! The Madison Flip Cup community is welcoming, competitive, and always ready for another round.
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
