
"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Users, Wine } from "lucide-react";
import { Game } from "@/types";
import { cn, formatPlayerCount } from "@/lib/utils";

interface GameCardProps {
  game: Game;
  size?: "small" | "medium" | "large";
  showSipFactor?: boolean;
  className?: string;
  priority?: boolean;
}

const gradients = [
  "from-pink-600 to-purple-800",
  "from-blue-600 to-cyan-800",
  "from-orange-600 to-red-800",
  "from-green-600 to-teal-800",
  "from-yellow-600 to-orange-800",
  "from-indigo-600 to-blue-800",
];

function getPlaceholderGradient(slug: string): string {
  const hash = Array.from(slug).reduce(
    (value, character) => character.charCodeAt(0) + ((value << 5) - value),
    0
  );
  return gradients[Math.abs(hash) % gradients.length];
}

function getGameEmoji(game: Game): string {
  if (game.materials.includes("cards")) return "??";
  if (game.materials.includes("ping pong balls")) return "??";
  if (game.materials.includes("dice")) return "??";
  if (game.materials.includes("cups")) return "??";
  if (game.name.toLowerCase().includes("movie")) return "??";
  if (/music|thunder/i.test(game.name)) return "??";
  if (game.materials.includes("no prop")) return "???";
  return "??";
}

const imageSizes = {
  small: "aspect-[4/3]",
  medium: "aspect-[4/3]",
  large: "aspect-[16/10]",
};

export function GameCard({
  game,
  size = "medium",
  showSipFactor = false,
  className,
  priority = false,
}: GameCardProps) {
  return (
    <article className={cn("group min-w-0", className)}>
      <Link
        href={"/games/" + game.slug}
        className="block overflow-hidden rounded-[1.35rem] border border-white/10 bg-dark-800 shadow-[0_18px_50px_rgba(0,0,0,.22)] transition duration-300 hover:-translate-y-1 hover:border-neon-pink/50 hover:shadow-[0_22px_60px_rgba(255,61,129,.16)] active:translate-y-0"
        aria-label={"View " + game.name + " rules"}
      >
        <div className={cn("relative overflow-hidden bg-dark-700", imageSizes[size])}>
          {game.image ? (
            <Image
              src={game.image}
              alt={game.name}
              fill
              priority={priority}
              className="object-cover transition duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
            />
          ) : (
            <div className={cn("absolute inset-0 flex items-center justify-center bg-gradient-to-br", getPlaceholderGradient(game.slug))}>
              <span className="text-5xl opacity-70" aria-hidden="true">{getGameEmoji(game)}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/55 via-transparent to-transparent" />
          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full border border-white/15 bg-dark-900/75 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md">
            <Flame className="h-3 w-3 text-neon-pink" />
            Sip {game.drunkenness_level}/5
          </div>
        </div>

        <div className="p-4">
          <h3 className={cn("font-extrabold tracking-[-0.025em] text-white", size === "large" ? "text-xl" : "text-base")}>
            {game.name}
          </h3>
          <p className="mt-1 line-clamp-2 min-h-10 text-sm leading-5 text-muted">
            {game.description}
          </p>
          <div className="mt-4 flex items-center gap-3 border-t border-white/8 pt-3 text-xs font-medium text-gray-300">
            <span className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5 text-neon-blue" />
              {formatPlayerCount(game.min_players, game.max_players)}
            </span>
            {game.estimated_time_minutes && (
              <span className="flex items-center gap-1.5">
                <Clock3 className="h-3.5 w-3.5 text-neon-yellow" />
                {game.estimated_time_minutes.min}{game.estimated_time_minutes.max ? "?" + game.estimated_time_minutes.max : ""}m
              </span>
            )}
          </div>
        </div>
      </Link>

      {showSipFactor && (
        <div className="group/sip relative mt-2 flex justify-center" aria-label={"Sip factor " + game.drunkenness_level + " out of 5"}>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Wine
                key={index}
                className={cn("h-3.5 w-3.5", index < game.drunkenness_level ? "text-neon-pink" : "text-dark-600")}
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="pointer-events-none invisible absolute bottom-full z-20 mb-2 rounded-lg border border-white/10 bg-dark-700 px-3 py-2 text-xs text-white opacity-0 shadow-xl transition group-hover/sip:visible group-hover/sip:opacity-100">
            <strong className="text-neon-pink">Sip Factor:</strong> more glasses means more sips.
          </span>
        </div>
      )}
    </article>
  );
}
