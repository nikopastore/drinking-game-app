import { Metadata } from "next";
import { BlogLayout } from "@/components/BlogLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tailgate Party Guide 2025: Games, Food & Drink Setup",
  description: "The ultimate tailgate party guide! Best drinking games, food pairings, setup tips, and everything you need for an epic pregame before the big game.",
  keywords: [
    "tailgate party guide",
    "tailgate drinking games",
    "tailgate setup",
    "pregame party",
    "football tailgate",
    "tailgate food and drinks",
    "parking lot party",
    "game day party"
  ],
  openGraph: {
    title: "Tailgate Party Guide: The Complete Pregame Playbook",
    description: "Everything you need for the perfect tailgate party before the big game.",
    type: "article",
    url: "https://sipwiki.app/blog/party-tips/tailgate-party-guide",
  },
  alternates: {
    canonical: "https://sipwiki.app/blog/party-tips/tailgate-party-guide",
  },
};

export default function TailgatePartyGuidePage() {
  return (
    <BlogLayout
      title="Tailgate Party Guide: The Complete Pregame Playbook"
      description="From parking lot setup to kickoff, master the art of tailgating with our comprehensive guide. Best games, food pairings, and pro tips for game day."
      author="game-master"
      publishDate="2025-01-18"
      category="Party Tips"
      categorySlug="party-tips"
      readTime="14 min"
      tableOfContents={[
        { id: "setup", title: "Tailgate Setup Essentials" },
        { id: "games", title: "Best Tailgate Drinking Games" },
        { id: "food", title: "Food & Drink Pairings" },
        { id: "timing", title: "Timing Your Tailgate" },
        { id: "weather", title: "Weather Contingencies" },
        { id: "gear", title: "Must-Have Gear" },
      ]}
      relatedArticles={[
        { title: "Tailgate Drinking Games", slug: "../../guides/tailgate-drinking-games", description: "Complete tailgate game rules" },
        { title: "Outdoor Drinking Games", slug: "../../guides/outdoor-drinking-games", description: "Games for outdoor parties" },
        { title: "Super Bowl Drinking Games", slug: "../seasonal/super-bowl-2025-drinking-games", description: "Big game party guide" },
      ]}
    >
      <p className="lead">
        A great tailgate is an art form. It&apos;s not just about drinking before the game - it&apos;s about
        creating the perfect pregame atmosphere with friends, food, and fun. Whether you&apos;re a
        seasoned tailgater or setting up your first tent, this guide has you covered.
      </p>

      <h2 id="setup">Tailgate Setup Essentials</h2>

      <h3>The Perfect Tailgate Layout</h3>
      <p>Set up your space for maximum fun and flow:</p>
      <ul>
        <li><strong>Canopy/Tent:</strong> Center of your setup, provides shade</li>
        <li><strong>Grill Station:</strong> Downwind from seating area</li>
        <li><strong>Drink Station:</strong> Central location, easy access</li>
        <li><strong>Game Area:</strong> Open space for cornhole, beer pong, etc.</li>
        <li><strong>Seating:</strong> Mix of chairs and standing room</li>
        <li><strong>Trash/Recycling:</strong> Multiple stations to keep area clean</li>
      </ul>

      <h3>Setup Timeline</h3>
      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <ul className="space-y-2 text-gray-300">
          <li><strong>3-4 hours before kickoff:</strong> Arrive and claim your spot</li>
          <li><strong>First 30 min:</strong> Set up tent, tables, and chairs</li>
          <li><strong>Next 30 min:</strong> Set up grill, coolers, and drink station</li>
          <li><strong>Next 30 min:</strong> Arrange games, put up team decorations</li>
          <li><strong>Remaining time:</strong> Cook, play games, enjoy!</li>
          <li><strong>30 min before kickoff:</strong> Start packing up</li>
        </ul>
      </div>

      <h2 id="games">Best Tailgate Drinking Games</h2>

      <h3>Cornhole (with Drinking Rules)</h3>
      <p>The king of tailgate games. See our <Link href="/guides/outdoor-drinking-games" className="text-neon-pink hover:underline">outdoor drinking games guide</Link> for full rules:</p>
      <ul>
        <li><strong>Bag on board:</strong> Opponents drink 1</li>
        <li><strong>Bag in hole:</strong> Opponents drink 3</li>
        <li><strong>Shutout:</strong> Losing team finishes drinks</li>
        <li><strong>Frame with no points:</strong> Both players drink</li>
      </ul>

      <h3>Tailgate Pong</h3>
      <p>Modified <Link href="/guides/beer-pong-rules" className="text-neon-pink hover:underline">Beer Pong</Link> for outdoor play:</p>
      <ul>
        <li>Use weighted cups or cup holders to prevent wind issues</li>
        <li>Fill cups with water, drink from separate cups (sanitary)</li>
        <li>Shorter table = faster games = more participation</li>
        <li>Tournament bracket for larger groups</li>
      </ul>

      <h3>Kan Jam</h3>
      <ul>
        <li><strong>Dinger (deflect, hits can):</strong> 1 drink for opponents</li>
        <li><strong>Deuce (direct hit):</strong> 2 drinks for opponents</li>
        <li><strong>Bucket (in the top):</strong> 3 drinks for opponents</li>
        <li><strong>Instant Win (through slot):</strong> Opponents finish drinks</li>
      </ul>

      <h3>Beersbee (Polish Horseshoes)</h3>
      <ul>
        <li>Two poles with bottles/cans on top</li>
        <li>Throw frisbee to knock off opponent&apos;s bottle</li>
        <li>Knocked off = defending team drinks</li>
        <li>Catch before it hits ground = thrower drinks</li>
      </ul>

      <h3>Flip Cup Relay</h3>
      <p>Perfect for large tailgate groups:</p>
      <ul>
        <li>Teams line up on opposite sides of table</li>
        <li>Race to drink and flip cups</li>
        <li>Losing team does a penalty (push-ups, shotgun, etc.)</li>
        <li>Winners get to pick the next game</li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <a href="https://www.amazon.com/s?k=cornhole+boards+regulation&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Regulation Cornhole Set</h4>
          <p className="text-gray-400 text-sm">Official size boards and bags</p>
          <span className="text-neon-pink font-bold">$100-200</span>
        </a>
        <a href="https://www.amazon.com/s?k=kan+jam+game+set&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Kan Jam Set</h4>
          <p className="text-gray-400 text-sm">Portable and easy to set up</p>
          <span className="text-neon-pink font-bold">$40-50</span>
        </a>
        <a href="https://www.amazon.com/s?k=portable+beer+pong+table&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Portable Pong Table</h4>
          <p className="text-gray-400 text-sm">Folds up for easy transport</p>
          <span className="text-neon-pink font-bold">$60-120</span>
        </a>
        <a href="https://www.amazon.com/s?k=polish+horseshoes+beersbee&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Beersbee/Polish Horseshoes</h4>
          <p className="text-gray-400 text-sm">Poles, frisbee, and bottle holders</p>
          <span className="text-neon-pink font-bold">$30-50</span>
        </a>
      </div>

      <h2 id="food">Food & Drink Pairings</h2>

      <h3>Grill Menu Classics</h3>
      <ul>
        <li><strong>Burgers & Brats:</strong> Pair with light lagers or pilsners</li>
        <li><strong>Wings:</strong> Pair with IPAs or wheat beers</li>
        <li><strong>Pulled Pork:</strong> Pair with amber ales or ciders</li>
        <li><strong>Hot Dogs:</strong> Pair with literally anything</li>
      </ul>

      <h3>Easy Tailgate Sides</h3>
      <ul>
        <li>Chips and dips (make ahead)</li>
        <li>Pasta salad (travels well)</li>
        <li>Sliders (easy to eat while standing)</li>
        <li>Loaded nachos (cook on grill in foil pan)</li>
      </ul>

      <h3>Drink Station Setup</h3>
      <ul>
        <li><strong>Beer:</strong> Mix of light (for day drinking) and full-flavor options</li>
        <li><strong>Seltzers:</strong> Popular lighter option</li>
        <li><strong>Premixed cocktails:</strong> Margaritas, Bloody Marys</li>
        <li><strong>Non-alcoholic:</strong> Sodas, water, sports drinks</li>
        <li><strong>Shots:</strong> Fireball or Jäger for celebrations</li>
      </ul>

      <h3>Pro Food Tips</h3>
      <ul>
        <li>Pre-form burger patties at home, separate with wax paper</li>
        <li>Marinate meats the night before</li>
        <li>Bring extra charcoal or propane</li>
        <li>Pack aluminum foil for easy cleanup</li>
        <li>Bring a meat thermometer - no one wants food poisoning</li>
      </ul>

      <h2 id="timing">Timing Your Tailgate</h2>

      <h3>By Game Start Time</h3>
      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h4 className="font-bold text-white mb-4">Arrival Guidelines</h4>
        <ul className="space-y-2 text-gray-300">
          <li><strong>Noon kickoff:</strong> Arrive 8-9 AM</li>
          <li><strong>3-4 PM kickoff:</strong> Arrive 11 AM - Noon</li>
          <li><strong>7-8 PM kickoff:</strong> Arrive 3-4 PM</li>
          <li><strong>Night game (prime time):</strong> Arrive 4-5 PM</li>
        </ul>
      </div>

      <h3>Pacing Your Drinking</h3>
      <ul>
        <li><strong>First hour:</strong> Light drinks while setting up</li>
        <li><strong>Hours 2-3:</strong> Games and social drinking</li>
        <li><strong>Hour before kickoff:</strong> Slow down, eat food</li>
        <li><strong>Last 30 min:</strong> Water and cleanup</li>
      </ul>

      <h2 id="weather">Weather Contingencies</h2>

      <h3>Hot Weather Tailgating</h3>
      <ul>
        <li>Extra coolers with ice for drinks AND ice for guests</li>
        <li>Canopy/tent is essential for shade</li>
        <li>Misting fans or spray bottles</li>
        <li>Lighter beers and seltzers</li>
        <li>More water than you think you need</li>
        <li>Sunscreen station</li>
      </ul>

      <h3>Cold Weather Tailgating</h3>
      <ul>
        <li>Propane heaters (check stadium rules)</li>
        <li>Hot drinks: spiked cider, hot chocolate with Baileys</li>
        <li>Warm food: chili, soup in thermoses</li>
        <li>Hand warmers</li>
        <li>Enclosed tent with walls</li>
      </ul>

      <h3>Rain Contingencies</h3>
      <ul>
        <li>Waterproof canopy is non-negotiable</li>
        <li>Tarps for under-table storage</li>
        <li>Games that work in rain (drinking card games under tent)</li>
        <li>Extra towels</li>
        <li>Backup plan: nearby bar or restaurant</li>
      </ul>

      <h2 id="gear">Must-Have Tailgate Gear</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <a href="https://www.amazon.com/s?k=pop+up+canopy+10x10&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">10x10 Pop-Up Canopy</h4>
          <p className="text-gray-400 text-sm">Shade and rain protection</p>
          <span className="text-neon-pink font-bold">$80-150</span>
        </a>
        <a href="https://www.amazon.com/s?k=large+cooler+wheels&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Rolling Cooler (50+ qt)</h4>
          <p className="text-gray-400 text-sm">Keeps drinks cold all day</p>
          <span className="text-neon-pink font-bold">$50-150</span>
        </a>
        <a href="https://www.amazon.com/s?k=portable+propane+grill&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Portable Propane Grill</h4>
          <p className="text-gray-400 text-sm">Quick start, easy cleanup</p>
          <span className="text-neon-pink font-bold">$100-250</span>
        </a>
        <a href="https://www.amazon.com/s?k=folding+table+6+foot&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Folding Tables</h4>
          <p className="text-gray-400 text-sm">6-foot tables for games and food</p>
          <span className="text-neon-pink font-bold">$40-60</span>
        </a>
        <a href="https://www.amazon.com/s?k=bluetooth+speaker+portable+loud&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Bluetooth Speaker</h4>
          <p className="text-gray-400 text-sm">Loud enough for outdoor parties</p>
          <span className="text-neon-pink font-bold">$50-150</span>
        </a>
        <a href="https://www.amazon.com/s?k=camping+chairs+with+cooler&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Camping Chairs w/ Cooler</h4>
          <p className="text-gray-400 text-sm">Built-in drink storage</p>
          <span className="text-neon-pink font-bold">$30-50</span>
        </a>
      </div>

      <h3>The Complete Checklist</h3>
      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <div className="grid grid-cols-2 gap-4 text-gray-300 text-sm">
          <div>
            <p className="font-bold text-white mb-2">Shelter & Seating</p>
            <ul>
              <li>☐ Canopy/tent</li>
              <li>☐ Folding chairs</li>
              <li>☐ Folding tables</li>
              <li>☐ Tent weights/stakes</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white mb-2">Cooking</p>
            <ul>
              <li>☐ Grill + fuel</li>
              <li>☐ Grilling utensils</li>
              <li>☐ Meat thermometer</li>
              <li>☐ Aluminum foil</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white mb-2">Drinks</p>
            <ul>
              <li>☐ Coolers with ice</li>
              <li>☐ Beer/seltzers</li>
              <li>☐ Water bottles</li>
              <li>☐ Koozies</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white mb-2">Games</p>
            <ul>
              <li>☐ Cornhole</li>
              <li>☐ Pong table + balls</li>
              <li>☐ Cards</li>
              <li>☐ Cups</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">Stadium Rules Reminder</h3>
        <p className="text-gray-300">
          Check your stadium&apos;s tailgating policies before you go. Many venues have rules about:
          tent sizes, grills, alcohol containers, arrival times, and where you can set up.
          Some stadiums don&apos;t allow tailgating at all. Know before you go!
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Game Day Ready?</h3>
        <p className="text-gray-400 mb-4">
          Check out more outdoor and sports drinking games.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/tailgate-drinking-games"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Tailgate Games Guide →
          </Link>
          <Link
            href="/guides/sports-drinking-games"
            className="inline-block px-6 py-3 bg-dark-600 text-white rounded-lg hover:bg-dark-500 transition-colors"
          >
            Sports Drinking Games
          </Link>
        </div>
      </div>
    </BlogLayout>
  );
}
