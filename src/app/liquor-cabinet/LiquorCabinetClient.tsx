"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Archive, Plus, Martini, AlertCircle, ChevronRight, Filter, LogIn } from "lucide-react";
import { Header } from "@/components/Header";
import { Sidebar, useSidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { Card, CardContent, Badge, Button } from "@/components/ui";
import { AddItemsModal } from "@/components/liquor-cabinet";
import { useLiquorCabinet, matchCocktails, filterMatchesBySpirit, CocktailMatch } from "@/lib/liquorCabinet";
import { useAuthContext } from "@/components/auth/AuthProvider";
import { CabinetVisual } from "./CabinetVisual";

const spiritFilters = [
  { label: "All", value: null },
  { label: "Vodka", value: "vodka" },
  { label: "Gin", value: "gin" },
  { label: "Rum", value: "rum" },
  { label: "Tequila", value: "tequila" },
  { label: "Whiskey", value: "whiskey" },
];

function CocktailMatchCard({ match }: { match: CocktailMatch }) {
  return (
    <Link href={`/cocktails/${match.cocktail.slug}`}>
      <Card className="h-full hover:border-neon-purple/50 transition-all duration-200 hover:shadow-lg hover:shadow-neon-purple/20 cursor-pointer group">
        {match.cocktail.image && (
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-dark-700 rounded-t-xl">
            <img
              src={match.cocktail.image}
              alt={match.cocktail.name}
              className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardContent className="p-3">
          <div className="flex items-start justify-between">
            <h3 className="font-bold text-white text-sm group-hover:text-neon-purple transition-colors line-clamp-1">
              {match.cocktail.name}
            </h3>
            <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-neon-purple transition-colors flex-shrink-0" />
          </div>
          <p className="text-gray-500 text-xs mt-1 line-clamp-1">
            {match.cocktail.ingredients.length} ingredients
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

function AlmostThereCard({ match }: { match: CocktailMatch }) {
  return (
    <Link href={`/cocktails/${match.cocktail.slug}`}>
      <div className="flex items-center justify-between p-3 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors group">
        <div className="flex items-center gap-3">
          {match.cocktail.image ? (
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-dark-600 flex-shrink-0">
              <img
                src={match.cocktail.image}
                alt={match.cocktail.name}
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-lg bg-dark-600 flex items-center justify-center flex-shrink-0">
              <Martini className="h-6 w-6 text-gray-500" />
            </div>
          )}
          <div>
            <h3 className="font-medium text-white text-sm group-hover:text-neon-purple transition-colors">
              {match.cocktail.name}
            </h3>
            <p className="text-xs text-amber-400">
              Missing: {match.missingIngredients.join(", ")}
            </p>
          </div>
        </div>
        <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-neon-purple transition-colors" />
      </div>
    </Link>
  );
}

export function LiquorCabinetClient() {
  const { isExpanded } = useSidebar();
  const { user, isAuthenticated, requireAuth } = useAuthContext();
  const {
    items,
    customItems,
    allItems,
    isLoaded,
    isSyncing,
    toggleItem,
    addCustomItem,
    removeCustomItem,
  } = useLiquorCabinet(user?.id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [spiritFilter, setSpiritFilter] = useState<string | null>(null);

  // Get matched cocktails
  const matches = useMemo(() => {
    if (!isLoaded || allItems.length === 0) {
      return { canMake: [], almostThere: [], needMore: [] };
    }
    return matchCocktails(allItems);
  }, [allItems, isLoaded]);

  // Apply spirit filter
  const filteredCanMake = useMemo(
    () => filterMatchesBySpirit(matches.canMake, spiritFilter),
    [matches.canMake, spiritFilter]
  );

  const filteredAlmostThere = useMemo(
    () => filterMatchesBySpirit(matches.almostThere, spiritFilter),
    [matches.almostThere, spiritFilter]
  );

  const isEmpty = allItems.length === 0;

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
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Archive className="h-8 w-8 text-neon-purple" />
            <h1 className="text-3xl font-bold text-white">Liquor Cabinet</h1>
          </div>
        </div>

        {/* Auth Warning or Sync Status */}
        {!isAuthenticated ? (
          <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-amber-200 text-sm">
                Sign in to save your liquor cabinet across devices. Your cabinet is currently stored locally.
              </p>
              <Button
                onClick={() => requireAuth()}
                variant="ghost"
                size="sm"
                className="mt-2 text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 p-0 h-auto"
              >
                <LogIn className="h-4 w-4 mr-1" />
                Sign in to save
              </Button>
            </div>
          </div>
        ) : isSyncing ? (
          <div className="mb-6 p-3 bg-neon-purple/10 border border-neon-purple/30 rounded-xl flex items-center gap-3">
            <div className="h-4 w-4 border-2 border-neon-purple border-t-transparent rounded-full animate-spin" />
            <p className="text-neon-purple text-sm">Syncing your cabinet...</p>
          </div>
        ) : null}

        {/* Cabinet Visual */}
        <div className="mb-8">
          <CabinetVisual
            items={allItems}
            onAddClick={() => setIsModalOpen(true)}
          />
        </div>

        {/* Add Items Button (for empty state) */}
        {isEmpty && (
          <div className="text-center py-8">
            <p className="text-gray-400 mb-4">
              Start by adding spirits and mixers you have at home
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-neon-purple hover:bg-neon-purple/90 text-white px-6"
            >
              <Plus className="h-5 w-5 mr-2" />
              Stock Your Cabinet
            </Button>
          </div>
        )}

        {/* Results Sections */}
        {!isEmpty && (
          <>
            {/* Filter */}
            <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
              <Filter className="h-4 w-4 text-gray-500 flex-shrink-0" />
              {spiritFilters.map((filter) => (
                <button
                  key={filter.label}
                  onClick={() => setSpiritFilter(filter.value)}
                  className={`
                    px-3 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap
                    ${spiritFilter === filter.value
                      ? "bg-neon-purple text-white"
                      : "bg-dark-700 text-gray-300 hover:bg-dark-600"
                    }
                  `}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* You Can Make */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-xl font-bold text-white">You Can Make</h2>
                <Badge variant="green">{filteredCanMake.length}</Badge>
              </div>

              {filteredCanMake.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {filteredCanMake.map((match) => (
                    <CocktailMatchCard key={match.cocktail.id} match={match} />
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Martini className="h-12 w-12 text-gray-500 mx-auto mb-3" />
                    <p className="text-gray-400">
                      {spiritFilter
                        ? `No ${spiritFilter} cocktails with your current ingredients`
                        : "Add more ingredients to unlock cocktails!"}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Almost There */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-xl font-bold text-white">Almost There</h2>
                <Badge variant="yellow">{filteredAlmostThere.length}</Badge>
                <span className="text-sm text-gray-500">Missing 1 ingredient</span>
              </div>

              {filteredAlmostThere.length > 0 ? (
                <div className="space-y-2">
                  {filteredAlmostThere.slice(0, 10).map((match) => (
                    <AlmostThereCard key={match.cocktail.id} match={match} />
                  ))}
                  {filteredAlmostThere.length > 10 && (
                    <p className="text-center text-gray-500 text-sm py-2">
                      +{filteredAlmostThere.length - 10} more cocktails
                    </p>
                  )}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-gray-500 text-sm">
                      No cocktails just 1 ingredient away
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </>
        )}
      </main>

      <MobileNav />

      {/* Add Items Modal */}
      <AddItemsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedItems={items}
        customItems={customItems}
        onToggleItem={toggleItem}
        onAddCustomItem={addCustomItem}
        onRemoveCustomItem={removeCustomItem}
      />
    </div>
  );
}
