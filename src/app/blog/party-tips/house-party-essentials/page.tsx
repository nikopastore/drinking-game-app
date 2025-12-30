import { Metadata } from "next";
import { BlogLayout } from "@/components/BlogLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "House Party Essentials 2025: Complete Hosting Guide",
  description: "The ultimate house party hosting guide! From setup to cleanup, learn how to throw epic parties with the best drinking games, music, and supplies.",
  keywords: [
    "house party essentials",
    "how to throw a house party",
    "house party tips",
    "party hosting guide",
    "house party drinking games",
    "party planning checklist",
    "house party setup",
    "throw a party"
  ],
  openGraph: {
    title: "House Party Essentials: The Complete Hosting Guide",
    description: "Everything you need to throw an unforgettable house party.",
    type: "article",
    url: "https://sipwiki.app/blog/party-tips/house-party-essentials",
  },
  alternates: {
    canonical: "https://sipwiki.app/blog/party-tips/house-party-essentials",
  },
};

export default function HousePartyEssentialsPage() {
  return (
    <BlogLayout
      title="House Party Essentials: The Complete Hosting Guide"
      description="From planning to cleanup, master the art of throwing house parties. This comprehensive guide covers everything you need for an epic gathering."
      author="party-pro"
      publishDate="2025-01-22"
      category="Party Tips"
      categorySlug="party-tips"
      readTime="15 min"
      tableOfContents={[
        { id: "planning", title: "Party Planning Basics" },
        { id: "supplies", title: "Essential Supplies" },
        { id: "drinks", title: "Drink Setup & Stocking" },
        { id: "games", title: "Entertainment & Games" },
        { id: "music", title: "Music & Atmosphere" },
        { id: "hosting", title: "Hosting During the Party" },
        { id: "safety", title: "Safety & Liability" },
      ]}
      relatedArticles={[
        { title: "House Party Drinking Games", slug: "../../guides/house-party-drinking-games", description: "Best games for house parties" },
        { title: "Party Supplies Checklist", slug: "../buying-guides/party-supplies-checklist", description: "Everything you need to buy" },
        { title: "How to Host a Safe Drinking Party", slug: "../safety/how-to-host-safe-drinking-party", description: "Safety tips for hosts" },
      ]}
    >
      <p className="lead">
        Throwing a great house party is part science, part art. It&apos;s about creating the right
        atmosphere, having enough supplies, and making sure everyone has a great time (safely).
        This guide covers everything from planning to the morning after.
      </p>

      <h2 id="planning">Party Planning Basics</h2>

      <h3>2 Weeks Before</h3>
      <ul>
        <li><strong>Set the date:</strong> Check for conflicts (holidays, sporting events, other parties)</li>
        <li><strong>Create guest list:</strong> Consider capacity, mix of people, plus-ones policy</li>
        <li><strong>Send invites:</strong> Digital is fine - Facebook event, group text, Evite</li>
        <li><strong>Set a theme (optional):</strong> Gives people something to dress for</li>
        <li><strong>Plan budget:</strong> Alcohol, food, supplies, decorations</li>
      </ul>

      <h3>1 Week Before</h3>
      <ul>
        <li><strong>Confirm headcount:</strong> Follow up with maybes</li>
        <li><strong>Plan drink menu:</strong> Beer, wine, spirits, mixers</li>
        <li><strong>Plan food:</strong> Apps, snacks, late-night food</li>
        <li><strong>Check supplies:</strong> Cups, ice, napkins, trash bags</li>
        <li><strong>Create playlist:</strong> Or assign someone to DJ</li>
      </ul>

      <h3>Day Before</h3>
      <ul>
        <li><strong>Deep clean:</strong> Bathroom especially important</li>
        <li><strong>Buy alcohol:</strong> Most stores allow returns on unopened bottles</li>
        <li><strong>Prep food:</strong> Anything that can be made ahead</li>
        <li><strong>Set up game areas:</strong> Beer pong table, card game area</li>
        <li><strong>Hide valuables:</strong> Jewelry, expensive electronics, personal items</li>
      </ul>

      <h3>Day Of</h3>
      <ul>
        <li><strong>Buy ice:</strong> 1-2 lbs per person</li>
        <li><strong>Chill drinks:</strong> Start early</li>
        <li><strong>Final setup:</strong> Drinks station, snacks out, music queued</li>
        <li><strong>Lock off-limits rooms:</strong> Bedrooms, offices</li>
        <li><strong>Brief any co-hosts:</strong> Everyone knows the plan</li>
      </ul>

      <h2 id="supplies">Essential Party Supplies</h2>

      <h3>The Basics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg border border-dark-600">
          <h4 className="font-bold text-white mb-2">Drinkware</h4>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>• Solo cups (red for beer pong)</li>
            <li>• Clear plastic cups for cocktails</li>
            <li>• Shot glasses (disposable or real)</li>
            <li>• Wine glasses (plastic is fine)</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg border border-dark-600">
          <h4 className="font-bold text-white mb-2">Bar Supplies</h4>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>• Bottle opener / corkscrew</li>
            <li>• Ice buckets or coolers</li>
            <li>• Cocktail shaker</li>
            <li>• Jigger / measuring cup</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg border border-dark-600">
          <h4 className="font-bold text-white mb-2">Cleaning</h4>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>• Paper towels</li>
            <li>• Trash bags (many)</li>
            <li>• Recycling bags/bins</li>
            <li>• All-purpose cleaner</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg border border-dark-600">
          <h4 className="font-bold text-white mb-2">Bathroom</h4>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>• Extra toilet paper</li>
            <li>• Hand soap refill</li>
            <li>• Air freshener</li>
            <li>• Small trash can</li>
          </ul>
        </div>
      </div>

      <h3>Game Supplies</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <a href="https://www.amazon.com/s?k=beer+pong+table&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Beer Pong Table</h4>
          <p className="text-gray-400 text-sm">8-foot regulation table</p>
          <span className="text-neon-pink font-bold">$60-150</span>
        </a>
        <a href="https://www.amazon.com/s?k=ping+pong+balls+beer+pong&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Ping Pong Balls</h4>
          <p className="text-gray-400 text-sm">Get more than you think - they disappear</p>
          <span className="text-neon-pink font-bold">$8-15</span>
        </a>
        <a href="https://www.amazon.com/s?k=playing+cards+plastic&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Playing Cards</h4>
          <p className="text-gray-400 text-sm">Multiple decks for different games</p>
          <span className="text-neon-pink font-bold">$5-12</span>
        </a>
        <a href="https://www.amazon.com/s?k=solo+cups+red+18oz&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Solo Cups (Bulk)</h4>
          <p className="text-gray-400 text-sm">100+ count pack</p>
          <span className="text-neon-pink font-bold">$15-25</span>
        </a>
      </div>

      <h2 id="drinks">Drink Setup & Stocking</h2>

      <h3>How Much to Buy</h3>
      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h4 className="font-bold text-white mb-4">Drink Calculator (4-hour party)</h4>
        <ul className="space-y-2 text-gray-300">
          <li><strong>Beer:</strong> 2-3 beers per person</li>
          <li><strong>Wine:</strong> 1/2 bottle per wine drinker</li>
          <li><strong>Liquor:</strong> 1 bottle per 6-8 cocktail drinkers</li>
          <li><strong>Mixers:</strong> 2-3 liters per bottle of liquor</li>
          <li><strong>Ice:</strong> 1-2 lbs per person</li>
          <li><strong>Water:</strong> 1 bottle per 2 people</li>
        </ul>
        <p className="text-gray-400 mt-4 text-sm">
          Use our <Link href="/drink-calculator" className="text-neon-pink hover:underline">Drink Calculator</Link> for exact amounts.
        </p>
      </div>

      <h3>Standard Bar Setup</h3>
      <ul>
        <li><strong>Vodka:</strong> Most versatile, crowd pleaser</li>
        <li><strong>Whiskey/Bourbon:</strong> For sipping and cocktails</li>
        <li><strong>Rum:</strong> White for cocktails, dark for sipping</li>
        <li><strong>Tequila:</strong> For shots and margaritas</li>
        <li><strong>Beer:</strong> Light and craft options</li>
        <li><strong>Wine:</strong> Red and white</li>
        <li><strong>Seltzers:</strong> Popular lighter option</li>
      </ul>

      <h3>Essential Mixers</h3>
      <ul>
        <li>Coca-Cola and Diet Coke</li>
        <li>Sprite/7-Up</li>
        <li>Tonic water</li>
        <li>Orange juice</li>
        <li>Cranberry juice</li>
        <li>Ginger beer (Moscow Mules)</li>
        <li>Limes and lemons</li>
      </ul>

      <h3>Drink Station Layout</h3>
      <ul>
        <li><strong>Location:</strong> Kitchen counter or dedicated table</li>
        <li><strong>Ice:</strong> Multiple coolers or a large ice bucket</li>
        <li><strong>Flow:</strong> Cups → Ice → Alcohol → Mixers → Garnishes</li>
        <li><strong>Signage:</strong> Labels for specialty cocktails</li>
        <li><strong>Trash nearby:</strong> For empty cans and bottles</li>
      </ul>

      <h2 id="games">Entertainment & Games</h2>

      <h3>Active Games (Early Party)</h3>
      <p>These games get energy up and people mixing:</p>
      <ul>
        <li><Link href="/guides/beer-pong-rules" className="text-neon-pink hover:underline">Beer Pong</Link> - The classic</li>
        <li><Link href="/guides/flip-cup-rules" className="text-neon-pink hover:underline">Flip Cup</Link> - Great team game</li>
        <li><Link href="/guides/rage-cage-rules" className="text-neon-pink hover:underline">Rage Cage</Link> - High energy</li>
        <li><Link href="/guides/slap-cup-rules" className="text-neon-pink hover:underline">Slap Cup</Link> - Fast and chaotic</li>
      </ul>

      <h3>Social Games (Mid Party)</h3>
      <p>Conversation starters and icebreakers:</p>
      <ul>
        <li><Link href="/guides/kings-cup-rules" className="text-neon-pink hover:underline">Kings Cup</Link> - Group card game</li>
        <li><Link href="/guides/never-have-i-ever-questions" className="text-neon-pink hover:underline">Never Have I Ever</Link> - Confessions</li>
        <li><Link href="/guides/most-likely-to-questions" className="text-neon-pink hover:underline">Most Likely To</Link> - Point and drink</li>
        <li><Link href="/guides/truth-or-dare-drinking-game" className="text-neon-pink hover:underline">Truth or Dare</Link> - Classic with drinks</li>
      </ul>

      <h3>Chill Games (Late Party)</h3>
      <p>Lower energy for later in the night:</p>
      <ul>
        <li><Link href="/guides/ride-the-bus-rules" className="text-neon-pink hover:underline">Ride the Bus</Link> - Card guessing</li>
        <li><Link href="/guides/quarters-rules" className="text-neon-pink hover:underline">Quarters</Link> - Skill game</li>
        <li>Movie drinking games - Background entertainment</li>
        <li>Music trivia - Name that tune</li>
      </ul>

      <h2 id="music">Music & Atmosphere</h2>

      <h3>Playlist Strategy</h3>
      <ul>
        <li><strong>Start mellow:</strong> Background music as people arrive</li>
        <li><strong>Build energy:</strong> Increase tempo as party grows</li>
        <li><strong>Peak hours:</strong> Bangers and crowd pleasers</li>
        <li><strong>Wind down:</strong> Slower tracks to signal party end</li>
      </ul>

      <h3>Playlist Must-Haves</h3>
      <ul>
        <li>Current hits (Spotify Top 50 type)</li>
        <li>Throwback hits (2000s, 2010s nostalgia)</li>
        <li>Party classics (Mr. Brightside, Don&apos;t Stop Believin&apos;)</li>
        <li>Genre variety (hip-hop, pop, rock, EDM)</li>
      </ul>

      <h3>Sound Setup</h3>
      <ul>
        <li><strong>Speaker placement:</strong> Central location, not against walls</li>
        <li><strong>Volume:</strong> Loud enough to feel, quiet enough to talk</li>
        <li><strong>Phone away:</strong> Lock the playlist phone to prevent DJ takeovers</li>
        <li><strong>Backup plan:</strong> Have a second device ready</li>
      </ul>

      <h2 id="hosting">Hosting During the Party</h2>

      <h3>Host Responsibilities</h3>
      <ul>
        <li><strong>Greet arrivals:</strong> Make people feel welcome</li>
        <li><strong>Introduce people:</strong> Help guests meet each other</li>
        <li><strong>Monitor drinks:</strong> Refill ice, open new bottles</li>
        <li><strong>Watch food:</strong> Replenish snacks</li>
        <li><strong>Manage games:</strong> Help set up, explain rules</li>
        <li><strong>Handle issues:</strong> Too drunk guests, noise complaints</li>
      </ul>

      <h3>The Art of Mingling</h3>
      <ul>
        <li>Don&apos;t get stuck in one conversation too long</li>
        <li>Check in with quieter guests</li>
        <li>Introduce people with common interests</li>
        <li>Start games to get groups mixing</li>
      </ul>

      <h3>When to Cut Someone Off</h3>
      <ul>
        <li>Slurring words significantly</li>
        <li>Stumbling or unable to stand</li>
        <li>Being aggressive or confrontational</li>
        <li>Vomiting</li>
        <li>Passing out</li>
      </ul>
      <p>Offer water, food, and a place to sit. Arrange a safe ride home.</p>

      <h2 id="safety">Safety & Liability</h2>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">Host Liability Warning</h3>
        <p className="text-gray-300">
          As a host, you may be legally liable for guests who drink at your party. Many states
          have social host liability laws. Never serve minors, always have food and water available,
          and ensure guests have safe transportation home.
        </p>
      </div>

      <h3>Safety Essentials</h3>
      <ul>
        <li><strong>Food available all night:</strong> Slows alcohol absorption</li>
        <li><strong>Water stations:</strong> Multiple locations throughout venue</li>
        <li><strong>Designated drivers:</strong> Encourage or coordinate</li>
        <li><strong>Uber/Lyft codes:</strong> Consider subsidizing rides</li>
        <li><strong>Crash space:</strong> Have pillows and blankets for those who shouldn&apos;t drive</li>
      </ul>

      <h3>Emergency Preparedness</h3>
      <ul>
        <li><strong>Know the address:</strong> In case you need to call 911</li>
        <li><strong>First aid kit:</strong> Basic supplies accessible</li>
        <li><strong>Signs of alcohol poisoning:</strong> Know them (confusion, vomiting, seizures, slow breathing)</li>
        <li><strong>Don&apos;t hesitate:</strong> If someone seems in danger, call for help</li>
      </ul>

      <h3>Ending the Party</h3>
      <ul>
        <li><strong>Set a hard end time:</strong> And communicate it upfront</li>
        <li><strong>Slow down music:</strong> Signal wind-down</li>
        <li><strong>Turn up lights:</strong> Party mood breaker</li>
        <li><strong>Stop serving alcohol:</strong> 30-60 min before end</li>
        <li><strong>Offer water and food:</strong> Help people sober up</li>
        <li><strong>Arrange rides:</strong> Help call Ubers, coordinate designated drivers</li>
      </ul>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Ready to Plan?</h3>
        <p className="text-gray-400 mb-4">
          Use our party planning tools and game guides.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/party-planner"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Party Planner Tool →
          </Link>
          <Link
            href="/drink-calculator"
            className="inline-block px-6 py-3 bg-dark-600 text-white rounded-lg hover:bg-dark-500 transition-colors"
          >
            Drink Calculator
          </Link>
        </div>
      </div>
    </BlogLayout>
  );
}
