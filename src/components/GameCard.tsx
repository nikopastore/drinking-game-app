"use client";

import { Game } from "@/types";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/components/auth";
import { Flame } from "lucide-react";
import Image from "next/image";

interface GameCardProps {
  game: Game;
  size?: "small" | "medium" | "large";
}

// Generate a consistent color based on slug for placeholder
const getPlaceholderGradient = (slug: string): string => {
  const colors = [
    "from-pink-600 to-purple-800",
    "from-blue-600 to-cyan-800",
    "from-orange-600 to-red-800",
    "from-green-600 to-teal-800",
    "from-yellow-600 to-orange-800",
    "from-indigo-600 to-blue-800",
    "from-rose-600 to-pink-800",
    "from-violet-600 to-purple-800",
  ];

  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  }

  return colors[Math.abs(hash) % colors.length];
};

// Get emoji for game type based on materials/name
const getGameEmoji = (game: Game): string => {
  if (game.materials.includes("cards")) return "🃏";
  if (game.materials.includes("ping pong balls")) return "🏓";
  if (game.materials.includes("dice")) return "🎲";
  if (game.materials.includes("cups")) return "🥤";
  if (game.name.toLowerCase().includes("movie")) return "🎬";
  if (game.name.toLowerCase().includes("music") || game.name.toLowerCase().includes("thunder")) return "🎵";
  if (game.materials.includes("no prop")) return "🗣️";
  return "🍻";
};

export function GameCard({ game, size = "medium" }: GameCardProps) {
  const router = useRouter();
  const { requireAuth } = useAuthContext();

  const handleClick = () => {
    if (requireAuth()) {
      router.push(`/game/${game.slug}`);
    }
  };

  const sizeClasses = {
    small: "w-28 h-40 sm:w-32 sm:h-44",
    medium: "w-36 h-52 sm:w-40 sm:h-56",
    large: "w-44 h-60 sm:w-48 sm:h-64",
  };

  const titleSizes = {
    small: "text-xs",
    medium: "text-sm",
    large: "text-base",
  };

  const emojiSizes = {
    small: "text-4xl",
    medium: "text-5xl",
    large: "text-6xl",
  };

  return (
    <div
      onClick={handleClick}
      className={`${sizeClasses[size]} flex-shrink-0 cursor-pointer group relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:z-10 hover:shadow-2xl hover:shadow-neon-pink/20`}
    >
      {/* Background - Image or Gradient Placeholder */}
      {game.image ? (
        <Image
          src={game.image}
          alt={game.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 144px, 192px"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${getPlaceholderGradient(game.slug)}`}>
          {/* Placeholder emoji */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <span className={emojiSizes[size]}>{getGameEmoji(game)}</span>
          </div>
        </div>
      )}

      {/* Gradient overlay for text readability - only for games without cover images */}
      {!game.image && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      )}

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-neon-pink/30 to-transparent" />

      {/* Content - only show for games without cover images */}
      {!game.image && (
        <div className="absolute bottom-0 left-0 right-0 p-3">
          {/* Drunkenness indicator */}
          <div className="flex gap-0.5 mb-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Flame
                key={i}
                className={`h-3 w-3 ${
                  i < game.drunkenness_level
                    ? "text-neon-pink drop-shadow-[0_0_4px_rgba(236,72,153,0.8)]"
                    : "text-gray-600"
                }`}
              />
            ))}
          </div>

          {/* Title */}
          <h3 className={`${titleSizes[size]} font-bold text-white leading-tight line-clamp-2 drop-shadow-lg`}>
            {game.name}
          </h3>
        </div>
      )}

      {/* Border on hover */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-neon-pink/50 transition-colors duration-300" />
    </div>
  );
}
