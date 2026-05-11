"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { games } from "@/config/gameData";
import { FilterState, Game } from "@/types";
import { GameCard } from "@/components/GameCard";
import { Header } from "@/components/Header";
import { SearchFilterModal } from "@/components/SearchFilterModal";
import { HeroAnimation } from "@/components/HeroAnimation";
import { Sidebar, useSidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { ChevronRight, Wine, BookOpen, GlassWater, Calculator, Newspaper } from "lucide-react";

// Game row component for Netflix-style horizontal scroll
function GameRow({
  title,
  games: rowGames,
  categorySlug,
}: {
  title: string;
  games: Game[];
  categorySlug?: string;
}) {
  if (rowGames.length === 0) return null;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3 px-4">
        <h2 className="text-lg font-bold text-white">{title}</h2>
        {categorySlug ? (
          <Link
            href={`/games/${categorySlug}`}
            className="flex items-center gap-1 text-sm text-gray-400 hover:text-neon-pink transition-colors"
          >
            See all
            <ChevronRight className="h-4 w-4" />
          </Link>
        ) : (
          <Link
            href="/games"
            className="flex items-center gap-1 text-sm text-gray-400 hover:text-neon-pink transition-colors"
          >
            See all
            <ChevronRight className="h-4 w-4" />
          </Link>
        )}
      </div>
      <div className="overflow-x-auto scrollbar-hide px-4">
        <div className="flex gap-4">
          {rowGames.map((game) => (
            <GameCard key={game.id} game={game} size="medium" showSipFactor />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    playerCount: null,
    materials: [],
    alcoholType: null,
    sipFactor: null,
    search: "",
  });

  // Categorized games for different rows
  const gameCategories = useMemo(() => {
    // Popular/Featured - high drunkenness level games
    const popular = games.filter((g) => g.drunkenness_level >= 4).slice(0, 10);

    // Card games
    const cardGames = games.filter((g) => g.materials.includes("cards")).slice(0, 10);

    // No props needed - easy to start
    const noPropGames = games.filter((g) => g.materials.includes("no prop")).slice(0, 10);

    // Beer games
    const beerGames = games.filter((g) => g.alcohol_type === "beer").slice(0, 10);

    // Large group games (6+)
    const largeGroupGames = games
      .filter((g) => g.max_players === null || g.max_players >= 6)
      .slice(0, 10);

    // Quick games (low drunkenness - good for starting)
    const quickGames = games.filter((g) => g.drunkenness_level <= 2).slice(0, 10);

    // Games Around the World - internationally themed games
    const worldGames = games.filter((g) =>
      g.name.toLowerCase().includes("around the world") ||
      g.name.toLowerCase().includes("irish") ||
      g.name.toLowerCase().includes("mexican") ||
      g.name.toLowerCase().includes("russian") ||
      g.name.toLowerCase().includes("german") ||
      g.name.toLowerCase().includes("japanese") ||
      g.name.toLowerCase().includes("british")
    ).slice(0, 10);

    return {
      popular,
      cardGames,
      noPropGames,
      beerGames,
      largeGroupGames,
      quickGames,
      worldGames,
    };
  }, []);

  const { isExpanded } = useSidebar();

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Server-rendered H1 for SEO - rendered before client components */}
      <h1 className="sr-only">SipWiki – Drinking Game Rules & Party App</h1>
      <Header onSearchClick={() => setIsSearchOpen(true)} />
      <Sidebar />

      <main
        className={`
          py-3 pb-20 md:pb-3
          transition-all duration-300 ease-in-out
          ${isExpanded ? "md:ml-56" : "md:ml-16"}
        `}
      >
        {/* Hero Section with Animation */}
        <div className="mb-4">
          {/* Animated Diagram */}
          <HeroAnimation />

          {/* Title below animation */}
          <div className="text-center mt-2 px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              SipWiki – Drinking Game Rules, Ideas, and How to Play
            </h1>
            <h2 className="text-lg md:text-xl font-semibold text-white/90">
              Find Your Perfect{" "}
              <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
                Party Game
              </span>
            </h2>
            <p className="text-gray-400 text-sm">
              {games.length} games with complete rules
            </p>
          </div>
        </div>

        {/* Game Rows */}
        <div className="space-y-0">
          <GameRow title="🔥 Popular Games" games={gameCategories.popular} categorySlug="extreme" />
          <GameRow title="🃏 Card Games" games={gameCategories.cardGames} categorySlug="card-games" />
          <GameRow title="✋ No Props Needed" games={gameCategories.noPropGames} categorySlug="no-props" />
          <GameRow title="🍺 Beer Games" games={gameCategories.beerGames} categorySlug="beer-games" />
          <GameRow title="🌍 Games Around the World" games={gameCategories.worldGames} />
          <GameRow title="👥 Large Groups" games={gameCategories.largeGroupGames} categorySlug="large-groups" />
          <GameRow title="⚡ Quick & Easy" games={gameCategories.quickGames} categorySlug="quick-easy" />
        </div>

        {/* Featured Sections - Internal Links for SEO */}
        <div className="mt-8 px-4">
          {/* Popular Guides */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-5 w-5 text-neon-pink" />
              <h2 className="text-lg font-bold text-white">Popular Game Guides</h2>
              <Link href="/guides" className="ml-auto flex items-center gap-1 text-sm text-gray-400 hover:text-neon-pink transition-colors">
                All guides <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Link href="/guides/beer-pong-rules" className="p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors border border-dark-600">
                <span className="text-white text-sm font-medium">Beer Pong Rules</span>
                <p className="text-gray-500 text-xs mt-1">Official rules & tips</p>
              </Link>
              <Link href="/guides/kings-cup-rules" className="p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors border border-dark-600">
                <span className="text-white text-sm font-medium">Kings Cup Rules</span>
                <p className="text-gray-500 text-xs mt-1">Card meanings guide</p>
              </Link>
              <Link href="/guides/flip-cup-rules" className="p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors border border-dark-600">
                <span className="text-white text-sm font-medium">Flip Cup Rules</span>
                <p className="text-gray-500 text-xs mt-1">Team relay game</p>
              </Link>
              <Link href="/guides/rage-cage-rules" className="p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors border border-dark-600">
                <span className="text-white text-sm font-medium">Rage Cage Rules</span>
                <p className="text-gray-500 text-xs mt-1">Fast-paced chaos</p>
              </Link>
              <Link href="/guides/ride-the-bus-rules" className="p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors border border-dark-600">
                <span className="text-white text-sm font-medium">Ride the Bus</span>
                <p className="text-gray-500 text-xs mt-1">Card guessing game</p>
              </Link>
              <Link href="/guides/never-have-i-ever-questions" className="p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors border border-dark-600">
                <span className="text-white text-sm font-medium">Never Have I Ever</span>
                <p className="text-gray-500 text-xs mt-1">200+ questions</p>
              </Link>
              <Link href="/guides/drinking-games-for-2" className="p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors border border-dark-600">
                <span className="text-white text-sm font-medium">Games for 2</span>
                <p className="text-gray-500 text-xs mt-1">Date night ideas</p>
              </Link>
              <Link href="/guides/drinking-games-for-couples" className="p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors border border-dark-600">
                <span className="text-white text-sm font-medium">Couples Games</span>
                <p className="text-gray-500 text-xs mt-1">Romantic fun</p>
              </Link>
            </div>
          </div>

          {/* Cocktail Recipes */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <GlassWater className="h-5 w-5 text-neon-blue" />
              <h2 className="text-lg font-bold text-white">Popular Cocktails</h2>
              <Link href="/cocktails" className="ml-auto flex items-center gap-1 text-sm text-gray-400 hover:text-neon-pink transition-colors">
                All cocktails <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Link href="/cocktails/margarita" className="p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors border border-dark-600">
                <span className="text-white text-sm font-medium">Margarita</span>
                <p className="text-gray-500 text-xs mt-1">Classic tequila</p>
              </Link>
              <Link href="/cocktails/mojito" className="p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors border border-dark-600">
                <span className="text-white text-sm font-medium">Mojito</span>
                <p className="text-gray-500 text-xs mt-1">Refreshing mint</p>
              </Link>
              <Link href="/cocktails/moscow-mule" className="p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors border border-dark-600">
                <span className="text-white text-sm font-medium">Moscow Mule</span>
                <p className="text-gray-500 text-xs mt-1">Ginger & vodka</p>
              </Link>
              <Link href="/cocktails/old-fashioned" className="p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors border border-dark-600">
                <span className="text-white text-sm font-medium">Old Fashioned</span>
                <p className="text-gray-500 text-xs mt-1">Whiskey classic</p>
              </Link>
              <Link href="/cocktails/long-island-iced-tea" className="p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors border border-dark-600">
                <span className="text-white text-sm font-medium">Long Island</span>
                <p className="text-gray-500 text-xs mt-1">Party favorite</p>
              </Link>
              <Link href="/cocktails/pina-colada" className="p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors border border-dark-600">
                <span className="text-white text-sm font-medium">Pina Colada</span>
                <p className="text-gray-500 text-xs mt-1">Tropical vibes</p>
              </Link>
              <Link href="/cocktails/espresso-martini" className="p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors border border-dark-600">
                <span className="text-white text-sm font-medium">Espresso Martini</span>
                <p className="text-gray-500 text-xs mt-1">Coffee kick</p>
              </Link>
              <Link href="/cocktails/jungle-juice" className="p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors border border-dark-600">
                <span className="text-white text-sm font-medium">Jungle Juice</span>
                <p className="text-gray-500 text-xs mt-1">Party punch</p>
              </Link>
            </div>
          </div>

          {/* Party Tools */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Calculator className="h-5 w-5 text-neon-purple" />
              <h2 className="text-lg font-bold text-white">Party Planning Tools</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Link href="/party-planner" className="p-3 bg-gradient-to-br from-neon-pink/10 to-neon-purple/10 rounded-lg hover:from-neon-pink/20 hover:to-neon-purple/20 transition-colors border border-neon-pink/30">
                <span className="text-white text-sm font-medium">Party Planner</span>
                <p className="text-gray-400 text-xs mt-1">Plan your perfect party</p>
              </Link>
              <Link href="/alcohol-calculator" className="p-3 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-lg hover:from-neon-blue/20 hover:to-neon-purple/20 transition-colors border border-neon-blue/30">
                <span className="text-white text-sm font-medium">Alcohol Calculator</span>
                <p className="text-gray-400 text-xs mt-1">Estimate party supplies</p>
              </Link>
              <Link href="/bac-calculator" className="p-3 bg-gradient-to-br from-neon-pink/10 to-neon-blue/10 rounded-lg hover:from-neon-pink/20 hover:to-neon-blue/20 transition-colors border border-neon-pink/30">
                <span className="text-white text-sm font-medium">BAC Calculator</span>
                <p className="text-gray-400 text-xs mt-1">Know your limits</p>
              </Link>
              <Link href="/spin" className="p-3 bg-gradient-to-br from-neon-purple/10 to-neon-pink/10 rounded-lg hover:from-neon-purple/20 hover:to-neon-pink/20 transition-colors border border-neon-purple/30">
                <span className="text-white text-sm font-medium">Spin the Wheel</span>
                <p className="text-gray-400 text-xs mt-1">Random game picker</p>
              </Link>
            </div>
          </div>

          {/* Blog / Buying Guides */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Newspaper className="h-5 w-5 text-green-400" />
              <h2 className="text-lg font-bold text-white">Buying Guides & Tips</h2>
              <Link href="/blog" className="ml-auto flex items-center gap-1 text-sm text-gray-400 hover:text-neon-pink transition-colors">
                All articles <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/blog/buying-guides/best-beer-pong-tables" className="p-4 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors border border-dark-600">
                <span className="text-white text-sm font-medium">Best Beer Pong Tables 2025</span>
                <p className="text-gray-500 text-xs mt-1">Expert reviews & buying guide for every budget</p>
              </Link>
              <Link href="/blog/buying-guides/party-supplies-checklist" className="p-4 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors border border-dark-600">
                <span className="text-white text-sm font-medium">Party Supplies Checklist</span>
                <p className="text-gray-500 text-xs mt-1">Everything you need for game night</p>
              </Link>
              <Link href="/blog/safety/how-to-host-safe-drinking-party" className="p-4 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors border border-dark-600">
                <span className="text-white text-sm font-medium">How to Host a Safe Party</span>
                <p className="text-gray-500 text-xs mt-1">Responsible hosting tips</p>
              </Link>
              <Link href="/blog/tutorials/beer-pong-tournament-setup" className="p-4 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors border border-dark-600">
                <span className="text-white text-sm font-medium">Beer Pong Tournament Setup</span>
                <p className="text-gray-500 text-xs mt-1">Run a pro tournament at home</p>
              </Link>
            </div>
          </div>

          {/* Quiz Section */}
          <div className="mb-6">
            <Link href="/quiz/what-drinking-game-are-you" className="block p-4 bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 rounded-xl hover:from-neon-pink/30 hover:to-neon-purple/30 transition-colors border border-neon-pink/30">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-white font-bold">What Drinking Game Are You?</span>
                  <p className="text-gray-400 text-sm mt-1">Take our personality quiz to find your perfect game!</p>
                </div>
                <ChevronRight className="h-6 w-6 text-neon-pink" />
              </div>
            </Link>
          </div>
        </div>

        {/* Sip Factor Explanation */}
        <div className="mt-8 mb-6 px-4">
          <div className="max-w-md mx-auto text-center bg-dark-800/50 rounded-xl p-4 border border-gray-800">
            <div className="flex justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Wine key={i} className="h-4 w-4 text-neon-pink" />
              ))}
            </div>
            <p className="text-xs text-gray-400">
              <span className="text-white font-medium">Sip Factor</span> indicates how much you'll drink.
              More glasses = more sips!
            </p>
          </div>
        </div>
      </main>

      {/* Search/Filter Modal */}
      <SearchFilterModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        games={games}
        filters={filters}
        onFilterChange={setFilters}
      />

      {/* Mobile Bottom Navigation */}
      <MobileNav />
    </div>
  );
}
