import { Metadata } from "next";
import { BlogLayout } from "@/components/BlogLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Apartment Party Hacks 2025: Drinking Games for Tiny Spaces",
  description: "Hosting a party in a small apartment? Get creative with these space-saving drinking games, setup hacks, and tips to throw an epic party in any size space.",
  keywords: [
    "small apartment party",
    "apartment drinking games",
    "small space party ideas",
    "studio apartment party",
    "dorm room party",
    "party hacks small space",
    "compact drinking games",
    "apartment party tips"
  ],
  openGraph: {
    title: "Small Apartment Party Hacks: Big Fun in Tiny Spaces",
    description: "Throw an amazing party in any size apartment with these space-saving tips and games.",
    type: "article",
    url: "https://sipwiki.app/blog/party-tips/small-apartment-party-hacks",
  },
  alternates: {
    canonical: "https://sipwiki.app/blog/party-tips/small-apartment-party-hacks",
  },
};

export default function SmallApartmentPartyPage() {
  return (
    <BlogLayout
      title="Small Apartment Party Hacks: Big Fun in Tiny Spaces"
      description="Don't let square footage limit your fun. These clever hacks and compact drinking games will help you throw an epic party in even the smallest apartment."
      author="party-pro"
      publishDate="2025-01-20"
      category="Party Tips"
      categorySlug="party-tips"
      readTime="10 min"
      tableOfContents={[
        { id: "prep", title: "Pre-Party Prep" },
        { id: "layout", title: "Space-Saving Layouts" },
        { id: "games", title: "Compact Drinking Games" },
        { id: "drinks", title: "Drink Station Ideas" },
        { id: "noise", title: "Noise & Neighbor Tips" },
        { id: "cleanup", title: "Quick Cleanup Hacks" },
      ]}
      relatedArticles={[
        { title: "Apartment Drinking Games", slug: "../../guides/apartment-drinking-games", description: "Games perfect for apartments" },
        { title: "Dorm Room Drinking Games", slug: "../../guides/dorm-drinking-games", description: "Games for tiny spaces" },
        { title: "Drinking Games for Small Groups", slug: "../../guides/drinking-games-for-small-groups", description: "Intimate group games" },
      ]}
    >
      <p className="lead">
        Living in a small apartment doesn&apos;t mean you can&apos;t host amazing parties. With some
        clever planning and the right games, you can create an epic gathering in even the
        tiniest studio. Here&apos;s how to maximize your space and minimize the stress.
      </p>

      <h2 id="prep">Pre-Party Preparation</h2>

      <h3>Maximize Your Space</h3>
      <ul>
        <li><strong>Clear surfaces:</strong> Put away clutter, knickknacks, and breakables</li>
        <li><strong>Move furniture:</strong> Push couches against walls, store coffee table elsewhere</li>
        <li><strong>Create flow:</strong> Ensure clear paths between rooms/areas</li>
        <li><strong>Use vertical space:</strong> Hang coats on doors, use wall-mounted shelves for drinks</li>
        <li><strong>Bedroom as storage:</strong> Move excess furniture and coats to bedroom (lock if needed)</li>
      </ul>

      <h3>Guest Count Guidelines</h3>
      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h4 className="font-bold text-white mb-4">Comfortable Capacity</h4>
        <ul className="space-y-2 text-gray-300">
          <li><strong>Studio (400-500 sq ft):</strong> 8-12 guests max</li>
          <li><strong>1 Bedroom (600-800 sq ft):</strong> 15-20 guests</li>
          <li><strong>2 Bedroom (900-1100 sq ft):</strong> 20-30 guests</li>
        </ul>
        <p className="text-gray-400 mt-4 text-sm">Pro tip: Invite 20% more than capacity - not everyone shows up.</p>
      </div>

      <h3>Pre-Party Checklist</h3>
      <ul>
        <li>☐ Warn neighbors (or invite them!)</li>
        <li>☐ Put away valuables and breakables</li>
        <li>☐ Stock bathroom with extra TP and hand soap</li>
        <li>☐ Prep ice - you always need more than you think</li>
        <li>☐ Set up phone charging station</li>
        <li>☐ Create a playlist (no one wants to DJ all night)</li>
      </ul>

      <h2 id="layout">Space-Saving Party Layouts</h2>

      <h3>The Zone System</h3>
      <p>Divide your space into functional zones to prevent crowding:</p>
      <ul>
        <li><strong>Drink Zone:</strong> Kitchen counter or bar cart against wall</li>
        <li><strong>Game Zone:</strong> Clear area for active games</li>
        <li><strong>Chill Zone:</strong> Couch/seating area for conversations</li>
        <li><strong>Dance Zone:</strong> Open area if you want dancing (optional)</li>
      </ul>

      <h3>Furniture Hacks</h3>
      <ul>
        <li><strong>Folding tables:</strong> Set up for games, store after</li>
        <li><strong>Ottoman seating:</strong> More seats in less space than chairs</li>
        <li><strong>Floor cushions:</strong> Cheap extra seating that stores easily</li>
        <li><strong>Kitchen island:</strong> If you have one, it becomes drink central</li>
        <li><strong>Windowsill:</strong> Extra drink/snack surface</li>
      </ul>

      <h3>The Balcony Advantage</h3>
      <p>If you have a balcony, use it!</p>
      <ul>
        <li>Smoker&apos;s lounge (if applicable)</li>
        <li>Overflow seating area</li>
        <li>Cooler storage (keeps drinks cold in cold weather)</li>
        <li>Fresh air break zone</li>
      </ul>

      <h2 id="games">Best Compact Drinking Games</h2>

      <h3>Card Games (Zero Space Needed)</h3>
      <p>These games need nothing but cards and drinks:</p>
      <ul>
        <li><Link href="/guides/kings-cup-rules" className="text-neon-pink hover:underline">Kings Cup</Link> - The classic circle game</li>
        <li><Link href="/guides/ride-the-bus-rules" className="text-neon-pink hover:underline">Ride the Bus</Link> - High stakes guessing</li>
        <li><Link href="/guides/across-the-bridge-rules" className="text-neon-pink hover:underline">Across the Bridge</Link> - Suspenseful card flipping</li>
        <li><Link href="/guides/waterfall-rules" className="text-neon-pink hover:underline">Waterfall</Link> - Group drinking chaos</li>
      </ul>

      <h3>Verbal Games (No Equipment)</h3>
      <ul>
        <li><Link href="/guides/never-have-i-ever-questions" className="text-neon-pink hover:underline">Never Have I Ever</Link> - Confession time</li>
        <li><Link href="/guides/most-likely-to-questions" className="text-neon-pink hover:underline">Most Likely To</Link> - Point and drink</li>
        <li><Link href="/guides/truth-or-dare-drinking-game" className="text-neon-pink hover:underline">Truth or Dare</Link> - Classic with drinking twists</li>
        <li><strong>Categories:</strong> Name things until someone fails</li>
        <li><strong>21:</strong> Count to 21 with rules adding up</li>
      </ul>

      <h3>Mini Beer Pong</h3>
      <p>Scaled-down version for small spaces:</p>
      <ul>
        <li>Use a coffee table or kitchen counter</li>
        <li>6 cups per side instead of 10</li>
        <li>Use smaller cups (5 oz instead of 16 oz)</li>
        <li>Faster games = more people can play</li>
      </ul>

      <h3>Standing Games</h3>
      <p>Games that work in crowded spaces:</p>
      <ul>
        <li><strong>Chandelier:</strong> One cup in center, personal cups around it</li>
        <li><strong>Stack Cup:</strong> Only needs corner of a table</li>
        <li><strong>Quarters:</strong> Minimal table space required</li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <a href="https://www.amazon.com/s?k=playing+cards+waterproof&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Waterproof Playing Cards</h4>
          <p className="text-gray-400 text-sm">Survive any spill</p>
          <span className="text-neon-pink font-bold">$8-15</span>
        </a>
        <a href="https://www.amazon.com/s?k=mini+beer+pong+set&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Mini Beer Pong Set</h4>
          <p className="text-gray-400 text-sm">Compact tabletop version</p>
          <span className="text-neon-pink font-bold">$15-25</span>
        </a>
        <a href="https://www.amazon.com/s?k=shot+glass+checkers&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Shot Glass Games</h4>
          <p className="text-gray-400 text-sm">Chess, checkers, tic-tac-toe</p>
          <span className="text-neon-pink font-bold">$15-30</span>
        </a>
        <a href="https://www.amazon.com/s?k=drinking+game+cards&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Drinking Game Card Decks</h4>
          <p className="text-gray-400 text-sm">Purpose-built party games</p>
          <span className="text-neon-pink font-bold">$10-20</span>
        </a>
      </div>

      <h2 id="drinks">Smart Drink Station Ideas</h2>

      <h3>The Bathtub Bar (Classic Hack)</h3>
      <ul>
        <li>Fill bathtub with ice</li>
        <li>Stock with canned/bottled drinks</li>
        <li>Self-serve, keeps everything cold</li>
        <li>Drains easily after party</li>
      </ul>

      <h3>Kitchen Counter Bar</h3>
      <ul>
        <li>Clear counter of all non-party items</li>
        <li>Set up bottles, mixers, and cups in a row</li>
        <li>Keep ice bucket accessible</li>
        <li>Stack cups to save space</li>
      </ul>

      <h3>BYOB Encouragement</h3>
      <ul>
        <li>Less you need to buy and store</li>
        <li>Guests bring what they like</li>
        <li>Provide mixers, ice, and cups</li>
        <li>Set up a &quot;drink donation station&quot;</li>
      </ul>

      <h3>Signature Cocktail Approach</h3>
      <p>Instead of a full bar, make one or two batched cocktails:</p>
      <ul>
        <li>Less space needed for bottles</li>
        <li>Make a big batch in a drink dispenser</li>
        <li>Guests self-serve</li>
        <li>Consistent quality</li>
      </ul>

      <h2 id="noise">Noise & Neighbor Management</h2>

      <h3>Pre-Party Communication</h3>
      <ul>
        <li><strong>Tell neighbors in advance:</strong> A heads up goes a long way</li>
        <li><strong>Invite them:</strong> Hard to complain if you&apos;re at the party</li>
        <li><strong>Give your number:</strong> &quot;Text me if it&apos;s too loud&quot; prevents calls to landlord</li>
        <li><strong>Set an end time:</strong> And stick to it</li>
      </ul>

      <h3>Noise Reduction Tips</h3>
      <ul>
        <li><strong>Rugs and soft furnishings:</strong> Absorb sound</li>
        <li><strong>Keep windows closed:</strong> Contains noise</li>
        <li><strong>Move speakers away from shared walls:</strong> Less transmission</li>
        <li><strong>Lower bass:</strong> Bass travels through walls more than treble</li>
        <li><strong>Avoid games with yelling:</strong> Save Rage Cage for houses</li>
      </ul>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">The Neighbor Gift</h3>
        <p className="text-gray-300">
          Bring your immediate neighbors a small gift (bottle of wine, cookies) the day before.
          Say: &quot;We&apos;re having a small get-together tomorrow night until [time]. Here&apos;s my number
          if anything bothers you.&quot; This simple gesture prevents most complaints.
        </p>
      </div>

      <h3>Quiet Game Alternatives</h3>
      <p>Games that don&apos;t require screaming:</p>
      <ul>
        <li>Card games (Kings Cup, Ride the Bus)</li>
        <li>Board game drinking games</li>
        <li>Movie drinking games</li>
        <li>Video game drinking games</li>
      </ul>

      <h2 id="cleanup">Quick Cleanup Hacks</h2>

      <h3>During Party Prevention</h3>
      <ul>
        <li><strong>Trash bags everywhere:</strong> Multiple small bins around the space</li>
        <li><strong>Recycling station:</strong> Keeps cans/bottles contained</li>
        <li><strong>Paper towels accessible:</strong> For quick spill cleanup</li>
        <li><strong>Coasters out:</strong> Protect surfaces</li>
      </ul>

      <h3>Post-Party Speed Clean</h3>
      <ol>
        <li><strong>Trash first:</strong> Grab a bag, make one loop, done</li>
        <li><strong>Recyclables:</strong> Bag up all cans and bottles</li>
        <li><strong>Dishes:</strong> Pile by sink or put in dishwasher</li>
        <li><strong>Surfaces:</strong> Quick wipe with all-purpose cleaner</li>
        <li><strong>Floor:</strong> Sweep or quick vacuum</li>
        <li><strong>Bathroom:</strong> Quick wipe, empty trash, check TP</li>
      </ol>

      <h3>The Morning After</h3>
      <ul>
        <li>Air out the apartment (open windows)</li>
        <li>Empty recycling before smell sets in</li>
        <li>Check for hidden cups or trash</li>
        <li>Wipe down surfaces again</li>
        <li>Return furniture to normal positions</li>
      </ul>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Ready to Host?</h3>
        <p className="text-gray-400 mb-4">
          Check out games perfect for apartments and small spaces.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/apartment-drinking-games"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Apartment Games Guide →
          </Link>
          <Link
            href="/guides/drinking-games-for-small-groups"
            className="inline-block px-6 py-3 bg-dark-600 text-white rounded-lg hover:bg-dark-500 transition-colors"
          >
            Small Group Games
          </Link>
        </div>
      </div>
    </BlogLayout>
  );
}
