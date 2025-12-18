"use client";

import { useState, useMemo } from "react";
import { games } from "@/config/gameData";
import { FilterState } from "@/types";
import { GameCard } from "@/components/GameCard";
import { Header } from "@/components/Header";
import { Sidebar, useSidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { Search, X } from "lucide-react";

export default function SearchPage() {
  const { isExpanded } = useSidebar();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    playerCount: null,
    materials: [],
    alcoholType: null,
    sipFactor: null,
    search: "",
  });

  const filteredGames = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return games.filter(
      (game) =>
        game.name.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query) ||
        game.materials.some((m) => m.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <Sidebar />

      <main
        className={`
          py-6 pb-24 md:pb-6 px-4
          transition-all duration-300 ease-in-out
          ${isExpanded ? "md:ml-56" : "md:ml-16"}
        `}
      >
        <div className="max-w-4xl mx-auto">
          {/* Search Input */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search games by name, description, or materials..."
              className="w-full pl-12 pr-12 py-4 bg-dark-800 border border-dark-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink transition-colors"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Results */}
          {searchQuery.trim() ? (
            <>
              <p className="text-gray-400 mb-4">
                {filteredGames.length} {filteredGames.length === 1 ? "game" : "games"} found
              </p>

              {filteredGames.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {filteredGames.map((game) => (
                    <GameCard key={game.id} game={game} size="medium" showSipFactor />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No games found matching "{searchQuery}"</p>
                  <p className="text-gray-600 mt-2">Try a different search term</p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-dark-600 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Start typing to search games</p>
              <p className="text-gray-600 mt-2">Search by name, description, or required materials</p>
            </div>
          )}
        </div>
      </main>

      <MobileNav />
    </div>
  );
}
