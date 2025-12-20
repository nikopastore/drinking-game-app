"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { useAuthContext } from "@/components/auth/AuthProvider";

export type FavoriteType = "game" | "cocktail";

export interface Favorite {
  item_slug: string;
  item_name: string;
  created_at: string;
}

interface FavoritesState {
  gameFavorites: Favorite[];
  cocktailFavorites: Favorite[];
  loading: boolean;
  isFavorited: (type: FavoriteType, slug: string) => boolean;
  toggleFavorite: (type: FavoriteType, slug: string, name: string) => Promise<boolean>;
  refreshFavorites: () => Promise<void>;
}

export function useFavorites(): FavoritesState {
  const [gameFavorites, setGameFavorites] = useState<Favorite[]>([]);
  const [cocktailFavorites, setCocktailFavorites] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState(true);
  const { user, isAuthenticated } = useAuthContext();

  const supabase = createClient();

  const fetchFavorites = useCallback(async () => {
    if (!user) {
      setGameFavorites([]);
      setCocktailFavorites([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      // Fetch game favorites
      const { data: gameData, error: gameError } = await supabase
        .from("favorites")
        .select("item_slug, item_name, created_at")
        .eq("user_id", user.id)
        .eq("item_type", "game")
        .order("created_at", { ascending: false });

      if (gameError) {
        console.error("Error fetching game favorites:", gameError);
      } else {
        setGameFavorites(gameData || []);
      }

      // Fetch cocktail favorites
      const { data: cocktailData, error: cocktailError } = await supabase
        .from("favorites")
        .select("item_slug, item_name, created_at")
        .eq("user_id", user.id)
        .eq("item_type", "cocktail")
        .order("created_at", { ascending: false });

      if (cocktailError) {
        console.error("Error fetching cocktail favorites:", cocktailError);
      } else {
        setCocktailFavorites(cocktailData || []);
      }
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  const refreshFavorites = useCallback(async () => {
    await fetchFavorites();
  }, [fetchFavorites]);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  const isFavorited = useCallback(
    (type: FavoriteType, slug: string): boolean => {
      const favorites = type === "game" ? gameFavorites : cocktailFavorites;
      return favorites.some((f) => f.item_slug === slug);
    },
    [gameFavorites, cocktailFavorites]
  );

  const toggleFavorite = useCallback(
    async (type: FavoriteType, slug: string, name: string): Promise<boolean> => {
      if (!user) {
        return false;
      }

      const isCurrentlyFavorited = isFavorited(type, slug);

      // Optimistic update
      const newFavorite: Favorite = {
        item_slug: slug,
        item_name: name,
        created_at: new Date().toISOString(),
      };

      if (type === "game") {
        if (isCurrentlyFavorited) {
          setGameFavorites((prev) => prev.filter((f) => f.item_slug !== slug));
        } else {
          setGameFavorites((prev) => [newFavorite, ...prev]);
        }
      } else {
        if (isCurrentlyFavorited) {
          setCocktailFavorites((prev) => prev.filter((f) => f.item_slug !== slug));
        } else {
          setCocktailFavorites((prev) => [newFavorite, ...prev]);
        }
      }

      try {
        if (isCurrentlyFavorited) {
          // Remove favorite
          const { error } = await supabase
            .from("favorites")
            .delete()
            .eq("user_id", user.id)
            .eq("item_type", type)
            .eq("item_slug", slug);

          if (error) {
            console.error("Error removing favorite:", error);
            // Revert optimistic update
            await fetchFavorites();
            return false;
          }
          return false; // Removed
        } else {
          // Add favorite
          const { error } = await supabase.from("favorites").insert({
            user_id: user.id,
            item_type: type,
            item_slug: slug,
            item_name: name,
          });

          if (error) {
            console.error("Error adding favorite:", error);
            // Revert optimistic update
            await fetchFavorites();
            return false;
          }
          return true; // Added
        }
      } catch (err) {
        console.error("Error toggling favorite:", err);
        await fetchFavorites();
        return isCurrentlyFavorited;
      }
    },
    [user, supabase, isFavorited, fetchFavorites]
  );

  return {
    gameFavorites,
    cocktailFavorites,
    loading,
    isFavorited,
    toggleFavorite,
    refreshFavorites,
  };
}
