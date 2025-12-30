import { Metadata } from "next";
import { BlogLayout } from "@/components/BlogLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "4th of July Drinking Games 2025: Patriotic Party Games",
  description: "Celebrate Independence Day with the best 4th of July drinking games! Red, white, and blue themed party games, BBQ drinking rules, and fireworks drinking games.",
  keywords: [
    "4th of July drinking games",
    "Independence Day drinking games",
    "patriotic drinking games",
    "July 4th party games",
    "American drinking games",
    "red white blue drinking games",
    "fireworks drinking game",
    "fourth of july party"
  ],
  openGraph: {
    title: "4th of July Drinking Games 2025: The Patriotic Party Guide",
    description: "Celebrate America with these red, white, and blue drinking games.",
    type: "article",
    url: "https://sipwiki.app/blog/seasonal/fourth-of-july-drinking-games",
  },
  alternates: {
    canonical: "https://sipwiki.app/blog/seasonal/fourth-of-july-drinking-games",
  },
};

export default function FourthOfJulyDrinkingGamesPage() {
  return (
    <BlogLayout
      title="4th of July Drinking Games 2025: The Patriotic Party Guide"
      description="Celebrate Independence Day in style with red, white, and blue drinking games. From patriotic Beer Pong to fireworks drinking rules, make this July 4th legendary."
      author="party-pro"
      publishDate="2025-06-15"
      category="Seasonal"
      categorySlug="seasonal"
      readTime="12 min"
      tableOfContents={[
        { id: "themed-games", title: "Patriotic Themed Games" },
        { id: "bbq-games", title: "BBQ & Backyard Games" },
        { id: "fireworks", title: "Fireworks Drinking Rules" },
        { id: "drinks", title: "Red, White & Blue Drinks" },
        { id: "supplies", title: "Party Supplies" },
      ]}
      relatedArticles={[
        { title: "Summer BBQ Drinking Games", slug: "summer-bbq-drinking-games", description: "Games for your cookout" },
        { title: "Outdoor Drinking Games", slug: "../../guides/outdoor-drinking-games", description: "Best outdoor games" },
        { title: "Backyard Drinking Games", slug: "../../guides/backyard-drinking-games", description: "Games for your yard" },
      ]}
    >
      <p className="lead">
        The 4th of July is all about celebrating America with friends, food, fireworks, and
        fun. These patriotic drinking games will make your Independence Day BBQ or party
        one for the history books.
      </p>

      <div className="bg-gradient-to-r from-red-900/30 via-white/10 to-blue-900/30 p-6 rounded-xl border border-dark-600 my-8">
        <h3 className="text-lg font-bold text-white mb-2">🇺🇸 July 4th, 2025</h3>
        <p className="text-gray-300">
          Independence Day falls on a <strong>Friday</strong> this year - perfect for a
          long weekend of celebration! Plan for a full day of festivities from afternoon
          BBQ to evening fireworks.
        </p>
      </div>

      <h2 id="themed-games">Patriotic Themed Drinking Games</h2>

      <h3>Red, White & Blue Pong</h3>
      <p>A patriotic twist on <Link href="/guides/beer-pong-rules" className="text-neon-pink hover:underline">Beer Pong</Link>:</p>
      <ul>
        <li>Set up 10 cups per side in pyramid formation</li>
        <li><strong>Front 4 cups (Blue):</strong> Fill with Bud Light</li>
        <li><strong>Middle 3 cups (White):</strong> Fill with White Claw/seltzer</li>
        <li><strong>Back 3 cups (Red):</strong> Fill with red jungle juice or cranberry cocktail</li>
        <li><strong>Bonus:</strong> Sink a red cup = opponent takes a shot</li>
      </ul>

      <h3>USA Flip Cup</h3>
      <ul>
        <li>Teams of 5 (like the Olympic team)</li>
        <li>Each person represents a branch of military or founding father</li>
        <li>Winning team gets to make a rule for next round</li>
        <li>Losing team has to recite the Pledge (take a drink for each mistake)</li>
      </ul>

      <h3>Founding Fathers</h3>
      <p>A card game tribute to American history:</p>
      <ul>
        <li><strong>Kings = George Washington:</strong> Make a rule for the nation</li>
        <li><strong>Queens = Betsy Ross:</strong> Give out drinks equal to stripes on the flag (13)</li>
        <li><strong>Jacks = Ben Franklin:</strong> Share a &quot;wisdom&quot; (everyone who laughs drinks)</li>
        <li><strong>Aces = Declaration:</strong> Everyone drinks to liberty</li>
        <li><strong>Number cards:</strong> Standard Kings Cup rules</li>
      </ul>

      <h3>50 States Challenge</h3>
      <ul>
        <li>Go around the circle naming US states</li>
        <li>Can&apos;t repeat a state</li>
        <li>Hesitate more than 5 seconds = drink</li>
        <li>Name a wrong state or non-state = finish drink</li>
        <li>Name all 50 = you&apos;re the Patriot, give out 50 drinks</li>
      </ul>

      <h3>Presidents Game</h3>
      <ul>
        <li>Name US presidents in order</li>
        <li>Miss one = drink and start over</li>
        <li>Get through 10 = give out 10 drinks</li>
        <li>Name them all (46) = legendary status, everyone takes a shot</li>
      </ul>

      <h2 id="bbq-games">BBQ & Backyard Games</h2>

      <h3>Cornhole Americana</h3>
      <p>Classic <Link href="/guides/outdoor-drinking-games" className="text-neon-pink hover:underline">cornhole</Link> with patriotic rules:</p>
      <ul>
        <li><strong>Red bag on board:</strong> Opponents drink 1</li>
        <li><strong>White bag on board:</strong> Opponents drink 2</li>
        <li><strong>Blue bag in hole:</strong> Opponents drink 3</li>
        <li><strong>All 4 bags score:</strong> &quot;Grand Slam&quot; - opponents finish drinks</li>
        <li>Play to 21 (1776 points for the ambitious)</li>
      </ul>

      <h3>Ladder Golf Liberty</h3>
      <ul>
        <li>Top rung = &quot;Stars&quot; (3 drinks for opponents)</li>
        <li>Middle rung = &quot;Stripes&quot; (2 drinks)</li>
        <li>Bottom rung = &quot;Foundation&quot; (1 drink)</li>
        <li>Bolas on same rung = &quot;United&quot; (double points, double drinks)</li>
      </ul>

      <h3>Patriotic Kan Jam</h3>
      <ul>
        <li>Red vs Blue team matchup</li>
        <li>Standard Kan Jam scoring applies</li>
        <li>Instant win through slot = &quot;Independence&quot; - losers take a shot</li>
        <li>Winners chant &quot;USA! USA!&quot; while losers drink</li>
      </ul>

      <h3>Grill Master Independence</h3>
      <p>Rules for the person manning the grill:</p>
      <ul>
        <li>Grill Master can assign drinks for any patriotic offense</li>
        <li>Complimenting the food = Cheers to America (both drink)</li>
        <li>Criticizing the food = &quot;Un-American&quot; (critic drinks double)</li>
        <li>Successful burger flip = Everyone salutes and drinks</li>
      </ul>

      <h2 id="fireworks">Fireworks Drinking Rules</h2>

      <h3>Fireworks Show Drinking Game</h3>
      <p>Turn the evening fireworks into a drinking game:</p>
      <ul>
        <li><strong>Red firework:</strong> Take 1 drink</li>
        <li><strong>White firework:</strong> Take 1 drink</li>
        <li><strong>Blue firework:</strong> Take 1 drink</li>
        <li><strong>All three colors at once:</strong> Take a shot of &quot;Freedom&quot;</li>
        <li><strong>Grand finale begins:</strong> Waterfall until it ends</li>
        <li><strong>Someone says &quot;ooh&quot; or &quot;aah&quot;:</strong> Everyone drinks</li>
        <li><strong>Heart-shaped firework:</strong> Hug someone and drink</li>
        <li><strong>Smiley face firework:</strong> Give out 2 drinks</li>
      </ul>

      <h3>Simplified Version</h3>
      <p>For a more manageable pace:</p>
      <ul>
        <li>Drink when the crowd cheers</li>
        <li>Drink at any pause longer than 10 seconds</li>
        <li>Finish drink at the grand finale</li>
      </ul>

      <h2 id="drinks">Red, White & Blue Drinks</h2>

      <h3>Patriotic Cocktail Recipes</h3>

      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h4 className="font-bold text-white mb-4">The Freedom Float</h4>
        <ul className="text-gray-300 space-y-1">
          <li>• Blue Curaçao (bottom layer)</li>
          <li>• White cream soda (middle)</li>
          <li>• Splash of grenadine (top, sinks to bottom)</li>
          <li>• Vodka to taste</li>
        </ul>
      </div>

      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h4 className="font-bold text-white mb-4">Patriot Punch (Batch)</h4>
        <ul className="text-gray-300 space-y-1">
          <li>• 1 bottle vodka</li>
          <li>• 2 liters lemon-lime soda</li>
          <li>• 1 container blue Hawaiian Punch</li>
          <li>• Frozen strawberries (float on top)</li>
          <li>• Whipped cream vodka (optional layer)</li>
        </ul>
      </div>

      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h4 className="font-bold text-white mb-4">The Star-Spangled Shot</h4>
        <ul className="text-gray-300 space-y-1">
          <li>• Layer 1: Grenadine</li>
          <li>• Layer 2: Peach schnapps (slowly pour)</li>
          <li>• Layer 3: Blue Curaçao (slowly pour)</li>
        </ul>
      </div>

      <h3>Easy Options</h3>
      <ul>
        <li><strong>Red:</strong> Cranberry vodka, Angry Orchard Rosé</li>
        <li><strong>White:</strong> White Claw, Vodka soda</li>
        <li><strong>Blue:</strong> Blue Moon beer, Blue Hawaiian</li>
      </ul>

      <h2 id="supplies">Party Supplies</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <a href="https://www.amazon.com/s?k=4th+of+july+party+cups&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Patriotic Party Cups</h4>
          <p className="text-gray-400 text-sm">Red, white, and blue cups</p>
          <span className="text-neon-pink font-bold">$12-20</span>
        </a>
        <a href="https://www.amazon.com/s?k=american+flag+cornhole&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">American Flag Cornhole</h4>
          <p className="text-gray-400 text-sm">Patriotic boards and bags</p>
          <span className="text-neon-pink font-bold">$80-150</span>
        </a>
        <a href="https://www.amazon.com/s?k=4th+of+july+decorations&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">4th of July Decorations</h4>
          <p className="text-gray-400 text-sm">Banners, balloons, tablecloths</p>
          <span className="text-neon-pink font-bold">$20-40</span>
        </a>
        <a href="https://www.amazon.com/s?k=led+glow+cups+party&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">LED Glow Cups</h4>
          <p className="text-gray-400 text-sm">Light up for fireworks viewing</p>
          <span className="text-neon-pink font-bold">$15-25</span>
        </a>
      </div>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">Safety Reminder</h3>
        <p className="text-gray-300">
          July 4th combines alcohol, heat, and often fireworks - be extra careful. Stay hydrated,
          use sunscreen, and never operate fireworks while drinking. Have a sober person handle
          any fireworks, and keep a bucket of water nearby.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Happy Independence Day! 🇺🇸</h3>
        <p className="text-gray-400 mb-4">
          Check out more outdoor and summer party games.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/outdoor-drinking-games"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Outdoor Games Guide →
          </Link>
          <Link
            href="/games"
            className="inline-block px-6 py-3 bg-dark-600 text-white rounded-lg hover:bg-dark-500 transition-colors"
          >
            Browse All Games
          </Link>
        </div>
      </div>
    </BlogLayout>
  );
}
