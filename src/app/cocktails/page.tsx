"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { cocktails } from "@/config/cocktailData";
import { Cocktail, CocktailFilterState } from "@/types";
import { Header } from "@/components/Header";
import { Sidebar, useSidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { Card, CardContent, Badge } from "@/components/ui";
import {
  Search,
  Wine,
  Martini,
  Beer,
  GlassWater,
  Sparkles,
  Flame,
  ChevronRight,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Spirit options for filtering
const spiritOptions: { label: string; value: Cocktail["baseSpirit"] | null; icon: React.ReactNode }[] = [
  { label: "All", value: null, icon: <Wine className="h-4 w-4" /> },
  { label: "Vodka", value: "vodka", icon: <Martini className="h-4 w-4" /> },
  { label: "Gin", value: "gin", icon: <GlassWater className="h-4 w-4" /> },
  { label: "Rum", value: "rum", icon: <Wine className="h-4 w-4" /> },
  { label: "Tequila", value: "tequila", icon: <Wine className="h-4 w-4" /> },
  { label: "Whiskey", value: "whiskey", icon: <Wine className="h-4 w-4" /> },
  { label: "Non-Alcoholic", value: "none", icon: <GlassWater className="h-4 w-4" /> },
];

const categoryOptions: { label: string; value: Cocktail["category"] | null }[] = [
  { label: "All", value: null },
  { label: "Classics", value: "classic" },
  { label: "Tropical", value: "tropical" },
  { label: "Shooters", value: "shooter" },
  { label: "Party", value: "party" },
  { label: "Mocktails", value: "mocktail" },
  { label: "Beer Cocktails", value: "beer-cocktail" },
];

const difficultyOptions = [
  { label: "Any", value: null },
  { label: "Easy", value: 1 },
  { label: "Medium", value: 2 },
  { label: "Hard", value: 3 },
];

// Cocktail card component
function CocktailCard({ cocktail }: { cocktail: Cocktail }) {
  const strengthIcons = Array.from({ length: 5 }, (_, i) => (
    <Flame
      key={i}
      className={cn(
        "h-3 w-3",
        i < cocktail.strength
          ? "text-neon-pink drop-shadow-[0_0_4px_rgba(236,72,153,0.8)]"
          : "text-gray-600"
      )}
    />
  ));

  const difficultyLabel = ["Easy", "Medium", "Hard"][cocktail.difficulty - 1];

  return (
    <Link href={`/cocktails/${cocktail.slug}`}>
      <Card className="h-full hover:border-neon-pink/50 transition-all duration-200 hover:shadow-lg hover:shadow-neon-pink/20 cursor-pointer group">
        <CardContent className="p-4">
          {/* Header */}
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-bold text-white group-hover:text-neon-pink transition-colors line-clamp-1">
              {cocktail.name}
            </h3>
            <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-neon-pink transition-colors flex-shrink-0" />
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm line-clamp-2 mb-3">
            {cocktail.description}
          </p>

          {/* Meta info */}
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="purple" className="text-xs">
              {cocktail.baseSpirit === "none" ? "Non-Alcoholic" : cocktail.baseSpirit}
            </Badge>
            <Badge variant="default" className="text-xs">
              {cocktail.glass}
            </Badge>
            <Badge variant={cocktail.difficulty === 1 ? "green" : cocktail.difficulty === 2 ? "yellow" : "pink"} className="text-xs">
              {difficultyLabel}
            </Badge>
          </div>

          {/* Strength indicator */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Strength:</span>
            <div className="flex gap-0.5">{strengthIcons}</div>
          </div>

          {/* Ingredients preview */}
          <div className="mt-3 pt-3 border-t border-dark-600">
            <p className="text-xs text-gray-500">
              {cocktail.ingredients.slice(0, 3).map((i) => i.name).join(", ")}
              {cocktail.ingredients.length > 3 && ` +${cocktail.ingredients.length - 3} more`}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function CocktailsPage() {
  const [filters, setFilters] = useState<CocktailFilterState>({
    baseSpirit: null,
    category: null,
    difficulty: null,
    strength: null,
    search: "",
  });

  const filteredCocktails = useMemo(() => {
    return cocktails.filter((cocktail) => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch =
          cocktail.name.toLowerCase().includes(searchLower) ||
          cocktail.description.toLowerCase().includes(searchLower) ||
          cocktail.tags.some((t) => t.toLowerCase().includes(searchLower)) ||
          cocktail.ingredients.some((i) => i.name.toLowerCase().includes(searchLower));
        if (!matchesSearch) return false;
      }

      // Spirit filter
      if (filters.baseSpirit && cocktail.baseSpirit !== filters.baseSpirit) {
        return false;
      }

      // Category filter
      if (filters.category && cocktail.category !== filters.category) {
        return false;
      }

      // Difficulty filter
      if (filters.difficulty && cocktail.difficulty !== filters.difficulty) {
        return false;
      }

      // Strength filter
      if (filters.strength && cocktail.strength !== filters.strength) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const clearFilters = () => {
    setFilters({
      baseSpirit: null,
      category: null,
      difficulty: null,
      strength: null,
      search: "",
    });
  };

  const hasActiveFilters =
    filters.baseSpirit || filters.category || filters.difficulty || filters.strength || filters.search;

  const { isExpanded } = useSidebar();

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <Sidebar />

      <main
        className={`
          max-w-6xl mx-auto px-4 py-8 pb-24 md:pb-8
          transition-all duration-300 ease-in-out
          ${isExpanded ? "md:ml-56" : "md:ml-16"}
        `}
      >
        {/* Hero */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
              Cocktail Recipes
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            {cocktails.length} recipes from classic cocktails to party favorites
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search cocktails, ingredients, or tags..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full bg-dark-800 border border-dark-600 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-pink"
          />
          {filters.search && (
            <button
              onClick={() => setFilters({ ...filters, search: "" })}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-4 space-y-4">
            {/* Spirit Filter */}
            <div>
              <label className="text-sm font-medium text-gray-300 mb-2 block">
                Base Spirit
              </label>
              <div className="flex flex-wrap gap-2">
                {spiritOptions.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setFilters({ ...filters, baseSpirit: option.value })}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                      filters.baseSpirit === option.value
                        ? "bg-neon-pink text-white"
                        : "bg-dark-700 text-gray-300 hover:bg-dark-600"
                    )}
                  >
                    {option.icon}
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="text-sm font-medium text-gray-300 mb-2 block">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categoryOptions.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setFilters({ ...filters, category: option.value })}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                      filters.category === option.value
                        ? "bg-neon-purple text-white"
                        : "bg-dark-700 text-gray-300 hover:bg-dark-600"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="text-sm font-medium text-gray-300 mb-2 block">
                Difficulty
              </label>
              <div className="flex flex-wrap gap-2">
                {difficultyOptions.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setFilters({ ...filters, difficulty: option.value })}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                      filters.difficulty === option.value
                        ? "bg-neon-blue text-dark-900"
                        : "bg-dark-700 text-gray-300 hover:bg-dark-600"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count and clear */}
            <div className="flex items-center justify-between pt-2 border-t border-dark-600">
              <Badge variant={filteredCocktails.length > 0 ? "green" : "pink"}>
                {filteredCocktails.length} cocktails found
              </Badge>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-gray-400 hover:text-neon-pink transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Cocktail Grid */}
        {filteredCocktails.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCocktails.map((cocktail) => (
              <CocktailCard key={cocktail.id} cocktail={cocktail} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-dark-800 rounded-xl border border-dark-600">
            <Sparkles className="h-12 w-12 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-400 text-lg mb-2">No cocktails found</p>
            <p className="text-gray-500 text-sm">
              Try adjusting your filters or search term
            </p>
          </div>
        )}
      </main>

      <MobileNav />
    </div>
  );
}
