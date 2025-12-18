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
import { ChevronRight, Wine } from "lucide-react";

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
    <div className="group/row relative pt-2 pb-6 hover:z-20">
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
      <div className="flex gap-4 px-4 overflow-x-auto scrollbar-hide">
        {rowGames.map((game) => (
          <GameCard key={game.id} game={game} size="medium" showSipFactor />
        ))}
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
              Find Your Perfect{" "}
              <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
                Party Game
              </span>
            </h1>
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
