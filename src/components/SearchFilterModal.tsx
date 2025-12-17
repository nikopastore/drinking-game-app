"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Users, Package, Wine } from "lucide-react";
import { FilterState, Game } from "@/types";
import { cn } from "@/lib/utils";
import { GameCard } from "./GameCard";

interface SearchFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  games: Game[];
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const playerOptions = [
  { label: "Any", value: null },
  { label: "2", value: 2 },
  { label: "3-5", value: 4 },
  { label: "6-10", value: 8 },
  { label: "10+", value: 12 },
];

const materialOptions = [
  { label: "Cards", value: "cards" },
  { label: "Dice", value: "dice" },
  { label: "Cups", value: "cups" },
  { label: "Ping Pong", value: "ping pong balls" },
  { label: "No Props", value: "no prop" },
];

const alcoholOptions = [
  { label: "Any", value: null },
  { label: "Beer", value: "beer" as const },
  { label: "Liquor", value: "liquor" as const },
];

export function SearchFilterModal({
  isOpen,
  onClose,
  games,
  filters,
  onFilterChange,
}: SearchFilterModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [localSearch, setLocalSearch] = useState(filters.search);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Sync local search with filters
  useEffect(() => {
    setLocalSearch(filters.search);
  }, [filters.search]);

  // Debounced search update
  useEffect(() => {
    const timer = setTimeout(() => {
      if (localSearch !== filters.search) {
        onFilterChange({ ...filters, search: localSearch });
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [localSearch, filters, onFilterChange]);

  const updateFilter = <K extends keyof FilterState>(
    key: K,
    value: FilterState[K]
  ) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const toggleMaterial = (material: string) => {
    const newMaterials = filters.materials.includes(material)
      ? filters.materials.filter((m) => m !== material)
      : [...filters.materials, material];
    updateFilter("materials", newMaterials);
  };

  const clearFilters = () => {
    setLocalSearch("");
    onFilterChange({
      playerCount: null,
      materials: [],
      alcoholType: null,
      search: "",
    });
  };

  const hasActiveFilters =
    filters.playerCount !== null ||
    filters.materials.length > 0 ||
    filters.alcoholType !== null ||
    localSearch !== "";

  // Filter games based on current filters
  const filteredGames = games.filter((game) => {
    if (localSearch) {
      const searchLower = localSearch.toLowerCase();
      if (
        !game.name.toLowerCase().includes(searchLower) &&
        !game.description.toLowerCase().includes(searchLower)
      ) {
        return false;
      }
    }

    if (filters.playerCount !== null) {
      const meetsPlayerCount =
        game.min_players <= filters.playerCount &&
        (game.max_players === null || game.max_players >= filters.playerCount);
      if (!meetsPlayerCount) return false;
    }

    if (filters.materials.length > 0) {
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

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-dark-900/98 backdrop-blur-sm"
      >
        <div className="h-full flex flex-col max-w-4xl mx-auto">
          {/* Header with Search */}
          <div className="p-4 border-b border-dark-600">
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search games..."
                  value={localSearch}
                  onChange={(e) => setLocalSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink text-lg"
                />
              </div>
              <button
                onClick={onClose}
                className="p-3 text-gray-400 hover:text-white hover:bg-dark-700 rounded-xl transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="p-4 border-b border-dark-600 space-y-4">
            {/* Player Count */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-2">
                <Users className="h-4 w-4 text-neon-blue" />
                Group Size
              </label>
              <div className="flex flex-wrap gap-2">
                {playerOptions.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => updateFilter("playerCount", option.value)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all",
                      filters.playerCount === option.value
                        ? "bg-neon-blue text-dark-900"
                        : "bg-dark-700 text-gray-300 hover:bg-dark-600"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Materials */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-2">
                <Package className="h-4 w-4 text-neon-pink" />
                Materials
              </label>
              <div className="flex flex-wrap gap-2">
                {materialOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => toggleMaterial(option.value)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all",
                      filters.materials.includes(option.value)
                        ? "bg-neon-pink text-white"
                        : "bg-dark-700 text-gray-300 hover:bg-dark-600"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Alcohol Type */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-2">
                <Wine className="h-4 w-4 text-neon-purple" />
                Drink Type
              </label>
              <div className="flex flex-wrap gap-2">
                {alcoholOptions.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => updateFilter("alcoholType", option.value)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all",
                      filters.alcoholType === option.value
                        ? "bg-neon-purple text-white"
                        : "bg-dark-700 text-gray-300 hover:bg-dark-600"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-gray-400 hover:text-white flex items-center gap-2"
              >
                <X className="h-4 w-4" />
                Clear all filters
              </button>
            )}
          </div>

          {/* Results */}
          <div className="flex-1 overflow-y-auto p-4">
            <p className="text-gray-400 text-sm mb-4">
              {filteredGames.length} game{filteredGames.length !== 1 ? "s" : ""} found
            </p>

            {filteredGames.length > 0 ? (
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {filteredGames.map((game) => (
                  <div key={game.id} onClick={onClose}>
                    <GameCard game={game} size="medium" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg mb-2">No games found</p>
                <p className="text-gray-500 text-sm">
                  Try adjusting your filters or search terms
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
