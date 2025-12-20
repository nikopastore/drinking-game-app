"use client";

import { createContext, useContext, ReactNode } from "react";
import { useFavorites, FavoriteType, Favorite } from "@/lib/favorites";

interface FavoritesContextValue {
  gameFavorites: Favorite[];
  cocktailFavorites: Favorite[];
  loading: boolean;
  isFavorited: (type: FavoriteType, slug: string) => boolean;
  toggleFavorite: (type: FavoriteType, slug: string, name: string) => Promise<boolean>;
  refreshFavorites: () => Promise<void>;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function useFavoritesContext() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    throw new Error("useFavoritesContext must be used within a FavoritesProvider");
  }
  return ctx;
}

interface FavoritesProviderProps {
  children: ReactNode;
}

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const favorites = useFavorites();

  return (
    <FavoritesContext.Provider value={favorites}>
      {children}
    </FavoritesContext.Provider>
  );
}
