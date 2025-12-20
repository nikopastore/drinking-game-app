"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui";
import { useFavoritesContext } from "./FavoritesProvider";
import { useAuthContext } from "@/components/auth/AuthProvider";
import { FavoriteType } from "@/lib/favorites";

interface FavoriteButtonProps {
  type: FavoriteType;
  slug: string;
  name: string;
  size?: "sm" | "md" | "lg";
  variant?: "icon" | "button";
  className?: string;
}

export function FavoriteButton({
  type,
  slug,
  name,
  size = "md",
  variant = "icon",
  className = "",
}: FavoriteButtonProps) {
  const { isFavorited, toggleFavorite } = useFavoritesContext();
  const { isAuthenticated, requireAuth } = useAuthContext();
  const [isAnimating, setIsAnimating] = useState(false);

  const favorited = isFavorited(type, slug);

  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const buttonSizeClasses = {
    sm: "p-1.5",
    md: "p-2",
    lg: "p-2.5",
  };

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) {
      requireAuth();
      return;
    }

    setIsAnimating(true);
    await toggleFavorite(type, slug, name);

    // Reset animation after a short delay
    setTimeout(() => setIsAnimating(false), 300);
  };

  if (variant === "button") {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={handleClick}
        className={`
          flex items-center gap-2 transition-all duration-200
          ${favorited
            ? "text-red-500 hover:text-red-400"
            : "text-gray-400 hover:text-white"
          }
          ${className}
        `}
      >
        <Heart
          className={`
            ${sizeClasses[size]}
            ${favorited ? "fill-current" : ""}
            ${isAnimating ? "scale-125" : "scale-100"}
            transition-transform duration-200
          `}
        />
        <span>{favorited ? "Favorited" : "Add to Favorites"}</span>
      </Button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`
        ${buttonSizeClasses[size]}
        rounded-full transition-all duration-200
        ${favorited
          ? "text-red-500 hover:text-red-400 bg-red-500/10"
          : "text-gray-400 hover:text-white hover:bg-dark-700"
        }
        ${className}
      `}
      aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart
        className={`
          ${sizeClasses[size]}
          ${favorited ? "fill-current" : ""}
          ${isAnimating ? "scale-125" : "scale-100"}
          transition-transform duration-200
        `}
      />
    </button>
  );
}
