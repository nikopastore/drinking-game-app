"use client";

import { Game } from "@/types";
import { Card, CardContent, Badge } from "@/components/ui";
import { Users, Wine, Flame } from "lucide-react";
import { formatPlayerCount, getDrunkennessLabel } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/components/auth";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const router = useRouter();
  const { requireAuth } = useAuthContext();

  const drunkennessColors: Record<number, "green" | "yellow" | "pink" | "purple"> = {
    1: "green",
    2: "green",
    3: "yellow",
    4: "pink",
    5: "purple",
  };

  const alcoholTypeLabel: Record<string, string> = {
    beer: "Beer/Seltzer",
    liquor: "Hard Liquor",
    any: "Any Drink",
  };

  const handleClick = () => {
    // Require auth before navigating to game
    if (requireAuth()) {
      router.push(`/game/${game.slug}`);
    }
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <Card hoverable className="h-full flex flex-col">
        <CardContent className="flex flex-col h-full">
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
            {game.name}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
            {game.description}
          </p>

          {/* Metadata badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {/* Player count */}
            <Badge variant="blue" className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              {formatPlayerCount(game.min_players, game.max_players)}
            </Badge>

            {/* Alcohol type */}
            <Badge variant="muted" className="flex items-center gap-1">
              <Wine className="h-3 w-3" />
              {alcoholTypeLabel[game.alcohol_type]}
            </Badge>
          </div>

          {/* Drunkenness level */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Flame
                  key={i}
                  className={`h-4 w-4 ${
                    i < game.drunkenness_level
                      ? "text-neon-pink"
                      : "text-dark-600"
                  }`}
                />
              ))}
            </div>
            <Badge variant={drunkennessColors[game.drunkenness_level]}>
              {getDrunkennessLabel(game.drunkenness_level)}
            </Badge>
          </div>

          {/* Materials preview */}
          {game.materials.length > 0 && game.materials[0] !== "no prop" && (
            <div className="mt-3 pt-3 border-t border-dark-600">
              <p className="text-xs text-muted">
                Needs:{" "}
                <span className="text-gray-300">
                  {game.materials.slice(0, 3).join(", ")}
                  {game.materials.length > 3 && ` +${game.materials.length - 3} more`}
                </span>
              </p>
            </div>
          )}

          {game.materials[0] === "no prop" && (
            <div className="mt-3 pt-3 border-t border-dark-600">
              <Badge variant="green">No Props Needed</Badge>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
