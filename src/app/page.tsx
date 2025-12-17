"use client";

import { useState, useMemo } from "react";
import { games } from "@/config/gameData";
import { FilterState, Game } from "@/types";
import { GameCard } from "@/components/GameCard";
import { Header } from "@/components/Header";
import { SearchFilterModal } from "@/components/SearchFilterModal";
import { HeroAnimation } from "@/components/HeroAnimation";
import { ChevronRight } from "lucide-react";

// Game row component for Netflix-style horizontal scroll
function GameRow({ title, games: rowGames }: { title: string; games: Game[] }) {
  if (rowGames.length === 0) return null;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3 px-4">
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-neon-pink transition-colors">
          See all
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-4 px-4 scrollbar-hide">
        {rowGames.map((game) => (
          <GameCard key={game.id} game={game} size="medium" />
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

    return {
      popular,
      cardGames,
      noPropGames,
      beerGames,
      largeGroupGames,
      quickGames,
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-900">
      <Header onSearchClick={() => setIsSearchOpen(true)} />

      <main className="py-3">
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
        <div className="space-y-2">
          <GameRow title="🔥 Popular Games" games={gameCategories.popular} />
          <GameRow title="🃏 Card Games" games={gameCategories.cardGames} />
          <GameRow title="✋ No Props Needed" games={gameCategories.noPropGames} />
          <GameRow title="🍺 Beer Games" games={gameCategories.beerGames} />
          <GameRow title="👥 Large Groups" games={gameCategories.largeGroupGames} />
          <GameRow title="⚡ Quick & Easy" games={gameCategories.quickGames} />
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
    </div>
  );
}
