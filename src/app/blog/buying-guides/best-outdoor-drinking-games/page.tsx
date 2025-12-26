import { Metadata } from "next";
import { BlogLayout } from "@/components/BlogLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Outdoor Drinking Games & Equipment 2025: Backyard Party Guide",
  description: "Find the best outdoor drinking games for your backyard! Reviews of cornhole, giant Jenga, lawn games, and more with buying guide and drinking rules.",
  keywords: [
    "outdoor drinking games",
    "backyard drinking games",
    "lawn drinking games",
    "cornhole drinking game",
    "giant Jenga drinking",
    "outdoor party games",
    "yard drinking games",
    "BBQ party games"
  ],
  openGraph: {
    title: "Best Outdoor Drinking Games & Equipment 2025",
    description: "Complete buying guide for outdoor drinking game equipment.",
    type: "article",
    url: "https://sipwiki.app/blog/buying-guides/best-outdoor-drinking-games",
  },
  alternates: {
    canonical: "https://sipwiki.app/blog/buying-guides/best-outdoor-drinking-games",
  },
};

export default function BestOutdoorDrinkingGamesPage() {
  return (
    <BlogLayout
      title="Best Outdoor Drinking Games & Equipment 2025"
      description="Take your party outside with these top-rated outdoor drinking games. From cornhole to giant Jenga, we review the best equipment for backyard parties."
      author="party-pro"
      publishDate="2025-04-15"
      category="Buying Guides"
      categorySlug="buying-guides"
      readTime="12 min"
      tableOfContents={[
        { id: "cornhole", title: "Cornhole Sets" },
        { id: "jenga", title: "Giant Jenga" },
        { id: "ladder", title: "Ladder Toss" },
        { id: "kan-jam", title: "Kan Jam" },
        { id: "other", title: "Other Lawn Games" },
        { id: "accessories", title: "Must-Have Accessories" },
      ]}
      relatedArticles={[
        { title: "Outdoor Drinking Games Guide", slug: "../guides/outdoor-drinking-games", description: "Complete rules for outdoor games" },
        { title: "Summer BBQ Drinking Games", slug: "../seasonal/summer-bbq-drinking-games", description: "Games for your cookout" },
        { title: "Backyard Drinking Games", slug: "../guides/backyard-drinking-games", description: "Best games for your yard" },
      ]}
    >
      <p className="lead">
        Outdoor parties deserve outdoor games. We&apos;ve tested and reviewed the best lawn games
        that double as drinking games, from tailgate classics to backyard favorites.
      </p>

      <h2 id="cornhole">Best Cornhole Sets</h2>
      <p>
        The undisputed king of outdoor drinking games. These are our top picks.
      </p>

      <h3>Best Overall: GoSports Regulation Cornhole</h3>
      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="font-bold text-white text-lg">GoSports 4&apos;x2&apos; Regulation Set</h4>
            <p className="text-gray-400">Tournament-quality boards with carrying case</p>
          </div>
          <span className="text-neon-pink font-bold text-xl">$130-180</span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
          <div>
            <p className="text-green-400">✓ Regulation size</p>
            <p className="text-green-400">✓ All-weather surface</p>
            <p className="text-green-400">✓ 8 bean bags included</p>
          </div>
          <div>
            <p className="text-green-400">✓ Foldable legs</p>
            <p className="text-green-400">✓ Carrying case</p>
            <p className="text-green-400">✓ Multiple designs</p>
          </div>
        </div>
        <a
          href="https://www.amazon.com/s?k=GoSports+cornhole+regulation&tag=sipwiki-20"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80"
        >
          Check Price on Amazon →
        </a>
      </div>

      <h3>Best Budget: Tailgate Size Cornhole</h3>
      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="font-bold text-white text-lg">Compact Tailgate Cornhole Set</h4>
            <p className="text-gray-400">Smaller size perfect for portability</p>
          </div>
          <span className="text-neon-pink font-bold text-xl">$50-80</span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
          <div>
            <p className="text-green-400">✓ Lightweight</p>
            <p className="text-green-400">✓ Easy transport</p>
            <p className="text-yellow-400">~ Smaller size</p>
          </div>
          <div>
            <p className="text-green-400">✓ Great for tailgates</p>
            <p className="text-green-400">✓ Budget friendly</p>
            <p className="text-green-400">✓ Bags included</p>
          </div>
        </div>
        <a
          href="https://www.amazon.com/s?k=tailgate+cornhole+set&tag=sipwiki-20"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80"
        >
          Check Price on Amazon →
        </a>
      </div>

      <div className="bg-dark-700 p-4 rounded-lg my-4">
        <h4 className="font-bold text-white mb-2">Cornhole Drinking Rules</h4>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Bag on board (1 pt): Opponents drink 1</li>
          <li>• Bag in hole (3 pts): Opponents drink 3</li>
          <li>• Miss the board: Thrower drinks 2</li>
          <li>• Shutout: Losers finish drinks</li>
        </ul>
      </div>

      <h2 id="jenga">Giant Jenga Sets</h2>
      <p>
        Giant Jenga is perfect for <Link href="/guides/drunk-jenga-rules" className="text-neon-pink hover:underline">Drunk Jenga</Link> outdoor edition.
      </p>

      <h3>Best Giant Jenga: GoSports Giant Toppling Tower</h3>
      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="font-bold text-white text-lg">Giant Wooden Toppling Tower</h4>
            <p className="text-gray-400">Builds to 5+ feet tall</p>
          </div>
          <span className="text-neon-pink font-bold text-xl">$60-100</span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
          <div>
            <p className="text-green-400">✓ Pine wood blocks</p>
            <p className="text-green-400">✓ Stacks to 5ft+</p>
            <p className="text-green-400">✓ 54 blocks</p>
          </div>
          <div>
            <p className="text-green-400">✓ Carrying case</p>
            <p className="text-green-400">✓ Write on blocks</p>
            <p className="text-green-400">✓ Indoor/outdoor</p>
          </div>
        </div>
        <a
          href="https://www.amazon.com/s?k=giant+Jenga+tower+outdoor&tag=sipwiki-20"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80"
        >
          Check Price on Amazon →
        </a>
      </div>

      <div className="bg-dark-700 p-4 rounded-lg my-4">
        <h4 className="font-bold text-white mb-2">Giant Drunk Jenga Rules</h4>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Write drinking rules on blocks with marker</li>
          <li>• Pull a block = do what it says</li>
          <li>• Knock tower down = finish your drink</li>
          <li>• Ideas: &quot;Take 2 drinks&quot;, &quot;Give 3 drinks&quot;, &quot;Truth or Dare&quot;</li>
        </ul>
      </div>

      <h2 id="ladder">Ladder Toss Sets</h2>

      <h3>Best Ladder Toss: Premium Ladder Ball</h3>
      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="font-bold text-white text-lg">Premium Ladder Golf Set</h4>
            <p className="text-gray-400">Heavy-duty PVC construction</p>
          </div>
          <span className="text-neon-pink font-bold text-xl">$40-70</span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
          <div>
            <p className="text-green-400">✓ 6 bolas (2 colors)</p>
            <p className="text-green-400">✓ Sturdy frame</p>
            <p className="text-green-400">✓ Easy assembly</p>
          </div>
          <div>
            <p className="text-green-400">✓ Carrying bag</p>
            <p className="text-green-400">✓ Score tracker</p>
            <p className="text-green-400">✓ Weather resistant</p>
          </div>
        </div>
        <a
          href="https://www.amazon.com/s?k=ladder+ball+toss+game&tag=sipwiki-20"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80"
        >
          Check Price on Amazon →
        </a>
      </div>

      <h2 id="kan-jam">Kan Jam</h2>

      <h3>Official Kan Jam Set</h3>
      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="font-bold text-white text-lg">Kan Jam Original Game</h4>
            <p className="text-gray-400">Frisbee meets basketball</p>
          </div>
          <span className="text-neon-pink font-bold text-xl">$40-50</span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
          <div>
            <p className="text-green-400">✓ 2 cans</p>
            <p className="text-green-400">✓ Flying disc</p>
            <p className="text-green-400">✓ Team-based</p>
          </div>
          <div>
            <p className="text-green-400">✓ Instant win slot</p>
            <p className="text-green-400">✓ Portable</p>
            <p className="text-green-400">✓ All skill levels</p>
          </div>
        </div>
        <a
          href="https://www.amazon.com/s?k=Kan+Jam+game&tag=sipwiki-20"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80"
        >
          Check Price on Amazon →
        </a>
      </div>

      <div className="bg-dark-700 p-4 rounded-lg my-4">
        <h4 className="font-bold text-white mb-2">Kan Jam Drinking Rules</h4>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Dinger (1 pt): Opponents drink 1</li>
          <li>• Deuce (2 pts): Opponents drink 2</li>
          <li>• Bucket (3 pts): Opponents drink 3</li>
          <li>• Instant Win (slot): Opponents finish drinks + shot</li>
        </ul>
      </div>

      <h2 id="other">Other Great Lawn Games</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <a href="https://www.amazon.com/s?k=Spikeball+set&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Spikeball</h4>
          <p className="text-gray-400 text-sm">High-energy 2v2 game</p>
          <span className="text-neon-pink font-bold">$60-80</span>
        </a>
        <a href="https://www.amazon.com/s?k=horseshoe+game+set&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Horseshoe Set</h4>
          <p className="text-gray-400 text-sm">Classic American backyard game</p>
          <span className="text-neon-pink font-bold">$50-80</span>
        </a>
        <a href="https://www.amazon.com/s?k=bocce+ball+set&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Bocce Ball</h4>
          <p className="text-gray-400 text-sm">Relaxed lawn game</p>
          <span className="text-neon-pink font-bold">$30-60</span>
        </a>
        <a href="https://www.amazon.com/s?k=kubb+game+set&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Kubb</h4>
          <p className="text-gray-400 text-sm">Viking chess outdoor game</p>
          <span className="text-neon-pink font-bold">$40-70</span>
        </a>
      </div>

      <h2 id="accessories">Must-Have Accessories</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <a href="https://www.amazon.com/s?k=koozie+cooler+sleeve&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Outdoor Koozies</h4>
          <p className="text-gray-400 text-sm">Keep drinks cold in the sun</p>
          <span className="text-neon-pink font-bold">$10-20</span>
        </a>
        <a href="https://www.amazon.com/s?k=portable+cooler+wheels&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Portable Cooler</h4>
          <p className="text-gray-400 text-sm">Rolling cooler for easy transport</p>
          <span className="text-neon-pink font-bold">$30-80</span>
        </a>
        <a href="https://www.amazon.com/s?k=pop+up+canopy+tent&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Pop-Up Canopy</h4>
          <p className="text-gray-400 text-sm">Shade for hot days</p>
          <span className="text-neon-pink font-bold">$80-150</span>
        </a>
        <a href="https://www.amazon.com/s?k=outdoor+bluetooth+speaker+waterproof&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Outdoor Speaker</h4>
          <p className="text-gray-400 text-sm">Waterproof party speaker</p>
          <span className="text-neon-pink font-bold">$30-100</span>
        </a>
      </div>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">Weather-Proofing Tips</h3>
        <ul className="text-gray-300 space-y-2">
          <li><strong>Storage:</strong> Store wooden games indoors or in waterproof containers</li>
          <li><strong>Maintenance:</strong> Sand and seal wooden blocks annually</li>
          <li><strong>Bean bags:</strong> Let wet bags dry completely before storing</li>
          <li><strong>Setup:</strong> Choose level ground for accurate gameplay</li>
        </ul>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Ready for Outdoor Fun?</h3>
        <p className="text-gray-400 mb-4">
          Check out our outdoor drinking game rules and party guides.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/outdoor-drinking-games"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Outdoor Games Rules →
          </Link>
          <Link
            href="/blog/seasonal/summer-bbq-drinking-games"
            className="inline-block px-6 py-3 bg-dark-600 text-white rounded-lg hover:bg-dark-500 transition-colors"
          >
            Summer BBQ Guide
          </Link>
        </div>
      </div>
    </BlogLayout>
  );
}
