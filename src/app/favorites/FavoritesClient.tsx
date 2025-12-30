"use client";

import { useEffect, useMemo } from "react";
import Link from "next/link";
import { Star, Heart, Dice5, Martini, LogIn } from "lucide-react";
import { useFavoritesContext } from "@/components/favorites";
import { useAuthContext } from "@/components/auth/AuthProvider";
import { useMode } from "@/contexts/ModeContext";
import { GameCard } from "@/components/GameCard";
import { Button } from "@/components/ui";
import { initialGames } from "@/config/gameData";
import { Game } from "@/types";

export function FavoritesClient() {
  const { gameFavorites, cocktailFavorites, loading } = useFavoritesContext();
  const { isAuthenticated, requireAuth } = useAuthContext();
  const { mode } = useMode();

  // Get full game objects for favorited games
  const favoritedGames = useMemo(() => {
    return gameFavorites
      .map((fav) => {
        const game = initialGames.find((g) => g.slug === fav.item_slug);
        if (game) {
          return {
            ...game,
            created_at: new Date().toISOString(),
            is_user_submitted: false,
          } as Game;
        }
        return null;
      })
      .filter((g): g is Game => g !== null);
  }, [gameFavorites]);

  // For cocktails, we'll show placeholder cards until cocktail data is available
  const favoritedCocktails = cocktailFavorites;

  const currentFavorites = mode === "games" ? favoritedGames : favoritedCocktails;
  const isEmpty = mode === "games" ? favoritedGames.length === 0 : favoritedCocktails.length === 0;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-dark-800 mb-6">
              <Heart className="h-10 w-10 text-gray-500" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Sign in to save favorites</h1>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Create an account to save your favorite drinking games and cocktails.
              Access them anytime, anywhere!
            </p>
            <Button
              onClick={() => requireAuth()}
              className="bg-neon-pink hover:bg-neon-pink/90 text-white px-6 py-3"
            >
              <LogIn className="h-5 w-5 mr-2" />
              Sign In to Get Started
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-8">
            <Star className="h-8 w-8 text-neon-pink" />
            <h1 className="text-3xl font-bold text-white">Favorites</h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="w-full aspect-[3/4] rounded-xl bg-dark-800 animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Star className={`h-8 w-8 ${mode === "games" ? "text-neon-pink" : "text-neon-purple"}`} />
            <h1 className="text-3xl font-bold text-white">Favorites</h1>
          </div>

          {/* Mode indicator */}
          <div className={`
            flex items-center gap-2 px-4 py-2 rounded-full
            ${mode === "games" ? "bg-neon-pink/20 text-neon-pink" : "bg-neon-purple/20 text-neon-purple"}
          `}>
            {mode === "games" ? (
              <>
                <Dice5 className="h-4 w-4" />
                <span className="text-sm font-medium">Games</span>
              </>
            ) : (
              <>
                <Martini className="h-4 w-4" />
                <span className="text-sm font-medium">Cocktails</span>
              </>
            )}
          </div>
        </div>

        {/* Empty state */}
        {isEmpty && (
          <div className="text-center py-16">
            <div className={`
              inline-flex items-center justify-center w-20 h-20 rounded-full mb-6
              ${mode === "games" ? "bg-neon-pink/10" : "bg-neon-purple/10"}
            `}>
              <Heart className={`h-10 w-10 ${mode === "games" ? "text-neon-pink" : "text-neon-purple"}`} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">
              No {mode === "games" ? "games" : "cocktails"} saved yet
            </h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Tap the heart icon on any {mode === "games" ? "game" : "cocktail"} to add it to your favorites for quick access.
            </p>
            <Link href={mode === "games" ? "/games" : "/cocktails"}>
              <Button className={`
                ${mode === "games" ? "bg-neon-pink hover:bg-neon-pink/90" : "bg-neon-purple hover:bg-neon-purple/90"}
                text-white px-6 py-3
              `}>
                Browse {mode === "games" ? "Games" : "Cocktails"}
              </Button>
            </Link>
          </div>
        )}

        {/* Games grid */}
        {mode === "games" && favoritedGames.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {favoritedGames.map((game) => (
              <GameCard key={game.slug} game={game} size="medium" />
            ))}
          </div>
        )}

        {/* Cocktails grid */}
        {mode === "cocktails" && favoritedCocktails.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {favoritedCocktails.map((cocktail) => (
              <Link
                key={cocktail.item_slug}
                href={`/cocktails/${cocktail.item_slug}`}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-br from-purple-600 to-pink-800 hover:scale-[1.03] transition-all duration-150"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <Martini className="h-16 w-16" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-sm font-bold text-white leading-tight line-clamp-2">
                    {cocktail.item_name}
                  </h3>
                </div>
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-neon-purple/50 transition-colors duration-300" />
              </Link>
            ))}
          </div>
        )}

        {/* Cross-platform favorites notice */}
        {!isEmpty && (
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              {mode === "games"
                ? `You also have ${cocktailFavorites.length} cocktail${cocktailFavorites.length !== 1 ? "s" : ""} saved`
                : `You also have ${gameFavorites.length} game${gameFavorites.length !== 1 ? "s" : ""} saved`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
