import { Metadata } from "next";
import { BlogLayout } from "@/components/BlogLayout";
import { QuickAnswer } from "@/components/seo";
import { ProductCard, ProductGrid, EssentialSupplies } from "@/components/ProductCard";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Complete Party Supplies Checklist 2025: Everything You Need",
  description: "The ultimate checklist for hosting a drinking game party. From cups and balls to decorations and safety supplies, don't forget anything for your next event.",
  keywords: [
    "party supplies checklist",
    "drinking game supplies",
    "beer pong supplies",
    "party planning checklist",
    "what to buy for a party",
    "party essentials list",
    "house party supplies",
    "drinking game equipment",
  ],
  openGraph: {
    title: "Complete Party Supplies Checklist 2025",
    description: "The ultimate checklist for hosting a drinking game party.",
    type: "article",
    url: "https://sipwiki.app/blog/buying-guides/party-supplies-checklist",
  },
  alternates: {
    canonical: "https://sipwiki.app/blog/buying-guides/party-supplies-checklist",
  },
};

function ChecklistItem({ children, priority = "normal" }: { children: React.ReactNode; priority?: "high" | "normal" | "optional" }) {
  const colors = {
    high: "text-red-400",
    normal: "text-green-400",
    optional: "text-gray-400",
  };

  return (
    <li className="flex items-start gap-3 py-2">
      <Check className={`h-5 w-5 ${colors[priority]} flex-shrink-0 mt-0.5`} />
      <span className="text-gray-300">{children}</span>
    </li>
  );
}

export default function PartySuppliesChecklistPage() {
  return (
    <BlogLayout
      title="Complete Party Supplies Checklist: Everything You Need"
      description="Never forget an essential again. This comprehensive checklist covers everything from game equipment to safety supplies, organized by priority so you know what to buy first."
      category="Buying Guides"
      categorySlug="buying-guides"
      author="sipwiki-team"
      publishDate="2025-01-15"
      updatedDate="2025-01-15"
      readTime="10 min"
      supplies={["red solo cups", "ping pong balls", "cards", "dice", "party lights", "bluetooth speaker"]}
      tableOfContents={[
        { id: "essentials", title: "The Essentials" },
        { id: "game-specific", title: "Game-Specific Supplies" },
        { id: "drinks-food", title: "Drinks & Food" },
        { id: "ambiance", title: "Ambiance & Decor" },
        { id: "safety", title: "Safety Supplies" },
        { id: "cleanup", title: "Cleanup Supplies" },
        { id: "printable", title: "Printable Checklist" },
      ]}
      relatedArticles={[
        {
          title: "Best Beer Pong Tables 2025",
          slug: "/blog/buying-guides/best-beer-pong-tables",
          description: "The centerpiece of any party",
        },
        {
          title: "Best Party Cups",
          slug: "/blog/buying-guides/best-party-cups",
          description: "Not all cups are equal",
        },
        {
          title: "How to Host a Safe Party",
          slug: "/blog/safety/how-to-host-safe-drinking-party",
          description: "Keep everyone safe",
        },
      ]}
    >
      <QuickAnswer
        question="What supplies do I need for a drinking game party?"
        answer="At minimum: cups (16oz, 3-5 per guest), ping pong balls (12+), playing cards, ice, drinks, and food. Add a beer pong table if you have space, and don't forget safety essentials like water bottles and a plan for transportation."
        tips={[
          "Buy 20% more cups than you think you need",
          "Have both alcoholic and non-alcoholic options",
          "Stock water bottles for hydration",
          "Plan transportation before guests arrive",
        ]}
        variant="primary"
      />

      <h2 id="essentials">The Absolute Essentials</h2>
      <p>These are non-negotiable. Don&apos;t throw a party without them.</p>

      <div className="not-prose my-6 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span className="h-6 w-6 rounded-full bg-red-500 flex items-center justify-center text-white text-sm">!</span>
          Must-Have Items
        </h3>
        <ul className="space-y-1">
          <ChecklistItem priority="high">16oz plastic cups (100+ count for 20 guests)</ChecklistItem>
          <ChecklistItem priority="high">Ping pong balls (12+ balls minimum)</ChecklistItem>
          <ChecklistItem priority="high">Ice (2-3 bags minimum)</ChecklistItem>
          <ChecklistItem priority="high">Drinks (beer, liquor, mixers)</ChecklistItem>
          <ChecklistItem priority="high">Water bottles (1-2 per guest)</ChecklistItem>
          <ChecklistItem priority="high">Food (substantial, not just chips)</ChecklistItem>
        </ul>
      </div>

      <div className="not-prose my-8">
        <ProductGrid
          products={[
            { key: "red solo cups", description: "Classic 16oz, buy the 100 pack" },
            { key: "ping pong balls", description: "50-pack so you never run out" },
            { key: "water bottles", description: "Keep everyone hydrated" },
          ]}
          columns={1}
        />
      </div>

      <h2 id="game-specific">Game-Specific Supplies</h2>

      <h3>For Beer Pong</h3>
      <div className="not-prose my-4 p-4 bg-dark-800 rounded-xl border border-dark-600">
        <ul className="space-y-1">
          <ChecklistItem>Beer pong table (8ft regulation or any long table)</ChecklistItem>
          <ChecklistItem>22 cups per game (10 each side + 2 water cups)</ChecklistItem>
          <ChecklistItem>4+ ping pong balls per table</ChecklistItem>
          <ChecklistItem>Cup racks for perfect triangle formation</ChecklistItem>
          <ChecklistItem>Towels for spills</ChecklistItem>
        </ul>
      </div>

      <div className="not-prose my-4">
        <ProductCard productKey="beer pong table" variant="compact" />
      </div>

      <h3>For Card Games (Kings Cup, Ride the Bus, etc.)</h3>
      <div className="not-prose my-4 p-4 bg-dark-800 rounded-xl border border-dark-600">
        <ul className="space-y-1">
          <ChecklistItem>2-3 decks of playing cards (waterproof preferred)</ChecklistItem>
          <ChecklistItem>Large center cup (32oz or bigger)</ChecklistItem>
          <ChecklistItem>Stable table or flat surface</ChecklistItem>
        </ul>
      </div>

      <div className="not-prose my-4">
        <ProductCard productKey="waterproof cards" variant="compact" />
      </div>

      <h3>For Dice Games (Mexicali, Ship Captain Crew, etc.)</h3>
      <div className="not-prose my-4 p-4 bg-dark-800 rounded-xl border border-dark-600">
        <ul className="space-y-1">
          <ChecklistItem>Multiple sets of dice (at least 6 dice)</ChecklistItem>
          <ChecklistItem>Dice cup or tray (optional but helpful)</ChecklistItem>
        </ul>
      </div>

      <div className="not-prose my-4">
        <ProductCard productKey="dice" variant="compact" />
      </div>

      <h3>For Flip Cup / Rage Cage</h3>
      <div className="not-prose my-4 p-4 bg-dark-800 rounded-xl border border-dark-600">
        <ul className="space-y-1">
          <ChecklistItem>Long table (6-8 feet)</ChecklistItem>
          <ChecklistItem>Plenty of cups (1 per player per round)</ChecklistItem>
          <ChecklistItem>Towels for inevitable spills</ChecklistItem>
          <ChecklistItem>Extra ping pong balls for Rage Cage</ChecklistItem>
        </ul>
      </div>

      <h3>For Drunk Jenga</h3>
      <div className="not-prose my-4 p-4 bg-dark-800 rounded-xl border border-dark-600">
        <ul className="space-y-1">
          <ChecklistItem>Jenga set (giant version is more fun)</ChecklistItem>
          <ChecklistItem>Permanent markers (to write rules on blocks)</ChecklistItem>
          <ChecklistItem>Flat, stable surface</ChecklistItem>
        </ul>
      </div>

      <div className="not-prose my-4">
        <ProductCard productKey="giant jenga" variant="compact" />
      </div>

      <h2 id="drinks-food">Drinks & Food</h2>

      <h3>Alcoholic Drinks</h3>
      <p>Use our <Link href="/party-planner" className="text-neon-pink hover:underline">Party Planner Calculator</Link> for exact amounts. General guidelines:</p>
      <div className="not-prose my-4 p-4 bg-dark-800 rounded-xl border border-dark-600">
        <ul className="space-y-1">
          <ChecklistItem>Beer: 2-3 per person for 4 hours</ChecklistItem>
          <ChecklistItem>Wine: 1 bottle per 3-4 wine drinkers</ChecklistItem>
          <ChecklistItem>Liquor: 1 bottle per 8-10 guests</ChecklistItem>
          <ChecklistItem>Mixers: More than you think (2L per bottle of liquor)</ChecklistItem>
          <ChecklistItem>Variety: Light beer, regular beer, craft options</ChecklistItem>
        </ul>
      </div>

      <h3>Non-Alcoholic Drinks</h3>
      <div className="not-prose my-4 p-4 bg-dark-800 rounded-xl border border-dark-600">
        <ul className="space-y-1">
          <ChecklistItem priority="high">Water bottles (1-2 per guest minimum)</ChecklistItem>
          <ChecklistItem>Soda variety (cola, lemon-lime, ginger ale)</ChecklistItem>
          <ChecklistItem>Juice (orange, cranberry for mixing)</ChecklistItem>
          <ChecklistItem priority="optional">NA beer for designated drivers</ChecklistItem>
          <ChecklistItem priority="optional">Sparkling water options</ChecklistItem>
        </ul>
      </div>

      <h3>Food (Don&apos;t Skip This!)</h3>
      <p>Food slows alcohol absorption and keeps guests happy:</p>
      <div className="not-prose my-4 p-4 bg-dark-800 rounded-xl border border-dark-600">
        <ul className="space-y-1">
          <ChecklistItem priority="high">Substantial snacks (pizza, sliders, wings)</ChecklistItem>
          <ChecklistItem>Protein options (meatballs, cheese cubes)</ChecklistItem>
          <ChecklistItem>Carbs (bread, crackers, chips)</ChecklistItem>
          <ChecklistItem>Veggie tray with dip</ChecklistItem>
          <ChecklistItem>Late-night food (have delivery apps ready)</ChecklistItem>
        </ul>
      </div>

      <h2 id="ambiance">Ambiance & Decor</h2>

      <h3>Lighting</h3>
      <div className="not-prose my-4 p-4 bg-dark-800 rounded-xl border border-dark-600">
        <ul className="space-y-1">
          <ChecklistItem>LED strip lights or string lights</ChecklistItem>
          <ChecklistItem priority="optional">Disco ball or party light</ChecklistItem>
          <ChecklistItem priority="optional">LED cups for nighttime vibe</ChecklistItem>
          <ChecklistItem priority="optional">Blacklights for glow party theme</ChecklistItem>
        </ul>
      </div>

      <div className="not-prose my-4">
        <ProductGrid
          products={[
            { key: "party lights", description: "Color-changing LED lights" },
            { key: "disco ball", description: "Classic party atmosphere" },
            { key: "led cups", description: "Glow-in-the-dark party cups" },
          ]}
          columns={2}
        />
      </div>

      <h3>Music</h3>
      <div className="not-prose my-4 p-4 bg-dark-800 rounded-xl border border-dark-600">
        <ul className="space-y-1">
          <ChecklistItem priority="high">Bluetooth speaker (loud enough for the space)</ChecklistItem>
          <ChecklistItem>Pre-made playlists (party, throwbacks, dancing)</ChecklistItem>
          <ChecklistItem priority="optional">Backup speaker or aux cord</ChecklistItem>
        </ul>
      </div>

      <div className="not-prose my-4">
        <ProductCard productKey="party speaker" variant="compact" />
      </div>

      <h3>Decorations (Optional but Fun)</h3>
      <div className="not-prose my-4 p-4 bg-dark-800 rounded-xl border border-dark-600">
        <ul className="space-y-1">
          <ChecklistItem priority="optional">Themed decorations if applicable</ChecklistItem>
          <ChecklistItem priority="optional">Balloons</ChecklistItem>
          <ChecklistItem priority="optional">Banner or signs</ChecklistItem>
          <ChecklistItem priority="optional">Photo backdrop for pictures</ChecklistItem>
        </ul>
      </div>

      <h2 id="safety">Safety Supplies</h2>

      <p className="font-medium text-white">Don&apos;t skip these. Read our <Link href="/blog/safety/how-to-host-safe-drinking-party" className="text-neon-pink hover:underline">safe party hosting guide</Link> for more details.</p>

      <div className="not-prose my-6 p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
        <h3 className="text-lg font-bold text-blue-400 mb-4">Safety Essentials</h3>
        <ul className="space-y-1">
          <ChecklistItem priority="high">Water bottles throughout the space</ChecklistItem>
          <ChecklistItem priority="high">Rideshare apps ready on your phone</ChecklistItem>
          <ChecklistItem priority="high">Designated driver list or system</ChecklistItem>
          <ChecklistItem priority="high">Crash space (blankets, pillows)</ChecklistItem>
          <ChecklistItem>First aid kit (bandages, aspirin)</ChecklistItem>
          <ChecklistItem priority="optional">Personal breathalyzer</ChecklistItem>
          <ChecklistItem>Phone chargers available</ChecklistItem>
          <ChecklistItem>Local taxi numbers</ChecklistItem>
        </ul>
      </div>

      <div className="not-prose my-4">
        <ProductCard productKey="breathalyzer" variant="compact" />
      </div>

      <h2 id="cleanup">Cleanup Supplies</h2>

      <p>Future you will thank present you for having these ready:</p>

      <div className="not-prose my-4 p-4 bg-dark-800 rounded-xl border border-dark-600">
        <ul className="space-y-1">
          <ChecklistItem priority="high">Trash bags (heavy duty, multiple)</ChecklistItem>
          <ChecklistItem priority="high">Paper towels</ChecklistItem>
          <ChecklistItem>Extra trash cans placed around party area</ChecklistItem>
          <ChecklistItem>Recycling bin for cans/bottles</ChecklistItem>
          <ChecklistItem>Cleaning spray for surfaces</ChecklistItem>
          <ChecklistItem>Mop or Swiffer for floor spills</ChecklistItem>
          <ChecklistItem priority="optional">Stain remover (for carpets/couches)</ChecklistItem>
        </ul>
      </div>

      <h2 id="printable">Quick Reference Checklist</h2>

      <div className="not-prose my-8 p-6 bg-gradient-to-br from-dark-800 to-dark-700 rounded-xl border border-dark-600">
        <h3 className="text-xl font-bold text-white mb-4">Party Supplies At-a-Glance</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-neon-pink mb-2">Game Supplies</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>[ ] 100+ plastic cups</li>
              <li>[ ] 12+ ping pong balls</li>
              <li>[ ] 2-3 decks of cards</li>
              <li>[ ] Dice set</li>
              <li>[ ] Beer pong table</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neon-blue mb-2">Drinks</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>[ ] Beer (2-3 per person)</li>
              <li>[ ] Liquor</li>
              <li>[ ] Mixers (2L+ per bottle)</li>
              <li>[ ] Water bottles (1-2 per person)</li>
              <li>[ ] Ice (2-3 bags)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-green-400 mb-2">Food</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>[ ] Main food (pizza, wings)</li>
              <li>[ ] Snacks throughout</li>
              <li>[ ] Late-night backup plan</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-yellow-400 mb-2">Safety</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>[ ] Rideshare apps ready</li>
              <li>[ ] Crash space prepared</li>
              <li>[ ] DD list confirmed</li>
              <li>[ ] First aid kit</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Ready to Party?</h2>
      <p>
        Got everything on the list? Now pick your games! Browse our{" "}
        <Link href="/games" className="text-neon-pink hover:underline">complete collection of drinking games</Link>
        {" "}or use the <Link href="/spin" className="text-neon-pink hover:underline">Random Game Picker</Link>
        {" "}to let fate decide what you play first.
      </p>

      <p>
        Not sure how much to buy? Our{" "}
        <Link href="/party-planner" className="text-neon-pink hover:underline">Party Planner Calculator</Link>
        {" "}will tell you exactly how much alcohol and supplies you need based on your guest count.
      </p>
    </BlogLayout>
  );
}
