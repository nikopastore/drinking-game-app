"use client";

import { useState, useMemo } from "react";
import { games } from "@/config/gameData";
import { FilterState } from "@/types";
import { GameCard } from "@/components/GameCard";
import { FilterBar } from "@/components/FilterBar";
import { Header } from "@/components/Header";
import { Sparkles } from "lucide-react";

export default function HomePage() {
  const [filters, setFilters] = useState<FilterState>({
    playerCount: null,
    materials: [],
    alcoholType: null,
    search: "",
  });

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        if (
          !game.name.toLowerCase().includes(searchLower) &&
          !game.description.toLowerCase().includes(searchLower)
        ) {
          return false;
        }
      }

      // Player count filter
      if (filters.playerCount !== null) {
        const meetsPlayerCount =
          game.min_players <= filters.playerCount &&
          (game.max_players === null || game.max_players >= filters.playerCount);
        if (!meetsPlayerCount) return false;
      }

      // Materials filter (game must have at least one of the selected materials)
      if (filters.materials.length > 0) {
        // Special case: "no prop" filter
        if (filters.materials.includes("no prop")) {
          if (
            game.materials.includes("no prop") ||
            filters.materials.some(
              (m) => m !== "no prop" && game.materials.includes(m)
            )
          ) {
            // passes
          } else {
            return false;
          }
        } else {
          const hasMatchingMaterial = filters.materials.some((m) =>
            game.materials.includes(m)
          );
          if (!hasMatchingMaterial) return false;
        }
      }

      // Alcohol type filter
      if (filters.alcoholType !== null) {
        if (
          game.alcohol_type !== "any" &&
          game.alcohol_type !== filters.alcoholType
        ) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Perfect{" "}
            <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
              Drinking Game
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Browse {games.length} party games with complete rules, AI referee support,
            and everything you need to keep the party going.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <FilterBar filters={filters} onFilterChange={setFilters} />
          </aside>

          {/* Game Grid */}
          <div className="lg:col-span-3">
            {/* Results count */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400">
                <span className="text-white font-semibold">
                  {filteredGames.length}
                </span>{" "}
                games found
              </p>
              {filteredGames.length > 0 && (
                <div className="flex items-center gap-2 text-sm text-neon-green">
                  <Sparkles className="h-4 w-4" />
                  <span>Click any game to view rules</span>
                </div>
              )}
            </div>

            {/* Grid */}
            {filteredGames.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredGames.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-dark-800 rounded-xl border border-dark-600">
                <p className="text-gray-400 text-lg mb-2">
                  No games match your filters
                </p>
                <p className="text-gray-500 text-sm">
                  Try adjusting your filters or search terms
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
