"use client";

import { useState, useMemo } from "react";
import { games } from "@/config/gameData";
import { Game } from "@/types";
import { Header } from "@/components/Header";
import { WheelSpinner } from "@/components/WheelSpinner";
import { Sidebar, useSidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { Button, Card, CardContent, Badge, Modal } from "@/components/ui";
import { Users, Package, Wine, PartyPopper, Play, RotateCcw, Flame } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
import { nonAffiliateItems } from "@/config/monetizationConfig";

const playerOptions = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3-5", value: 4 },
  { label: "6-10", value: 8 },
  { label: "10+", value: 12 },
];

const materialOptions = [
  { label: "Cards", value: "cards" },
  { label: "Dice", value: "dice" },
  { label: "Cups", value: "cups" },
  { label: "Ping Pong Balls", value: "ping pong balls" },
  { label: "Nothing!", value: "no prop" },
];

const alcoholOptions = [
  { label: "Beer/Seltzer", value: "beer" as const },
  { label: "Liquor", value: "liquor" as const },
  { label: "Both", value: "any" as const },
];

const sipFactorOptions = [
  { label: "Any", value: null },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
];

export default function SpinPage() {
  const [playerCount, setPlayerCount] = useState<number>(4);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [alcoholType, setAlcoholType] = useState<"beer" | "liquor" | "any">("any");
  const [sipFactor, setSipFactor] = useState<number | null>(null);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [showResult, setShowResult] = useState(false);

  const toggleMaterial = (material: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material]
    );
  };

  const matchingGames = useMemo(() => {
    return games.filter((game) => {
      // Player count check
      const meetsPlayerCount =
        game.min_players <= playerCount &&
        (game.max_players === null || game.max_players >= playerCount);
      if (!meetsPlayerCount) return false;

      // Materials check
      if (selectedMaterials.length > 0) {
        // If "no prop" is selected, include games that need no props
        // Otherwise, check if game needs only materials the user has
        if (selectedMaterials.includes("no prop") && game.materials.includes("no prop")) {
          // Good - no prop game matches
        } else {
          // Check if game's materials are available
          const gameMaterials = game.materials.filter(
            (m) => !nonAffiliateItems.includes(m.toLowerCase()) && m !== "no prop"
          );
          if (gameMaterials.length > 0) {
            const hasAllMaterials = gameMaterials.every(
              (m) => selectedMaterials.includes(m) || nonAffiliateItems.includes(m)
            );
            if (!hasAllMaterials && !selectedMaterials.includes("no prop")) {
              return false;
            }
          }
        }
      }

      // Alcohol type check
      if (alcoholType !== "any") {
        if (game.alcohol_type !== "any" && game.alcohol_type !== alcoholType) {
          return false;
        }
      }

      // Sip Factor check
      if (sipFactor !== null) {
        if (game.drunkenness_level !== sipFactor) {
          return false;
        }
      }

      return true;
    });
  }, [playerCount, selectedMaterials, alcoholType, sipFactor]);

  const handleResult = (game: Game) => {
    setSelectedGame(game);
    setShowResult(true);
  };

  const handleSpinAgain = () => {
    setShowResult(false);
    setSelectedGame(null);
  };

  const { isExpanded } = useSidebar();

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <Sidebar />

      <main
        className={`
          max-w-4xl mx-auto px-4 py-8 pb-24 md:pb-8
          transition-all duration-300 ease-in-out
          ${isExpanded ? "md:ml-56" : "md:ml-16"}
        `}
      >
        {/* Hero */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
              Spin the Wheel
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Can&apos;t decide? Let fate choose your next drinking game!
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6 space-y-6">
            {/* Player Count */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                <Users className="h-4 w-4 text-neon-blue" />
                How many players?
              </label>
              <div className="flex flex-wrap gap-2">
                {playerOptions.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setPlayerCount(option.value)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all",
                      playerCount === option.value
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
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                <Package className="h-4 w-4 text-neon-pink" />
                What do you have? (optional)
              </label>
              <div className="flex flex-wrap gap-2">
                {materialOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => toggleMaterial(option.value)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all",
                      selectedMaterials.includes(option.value)
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
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                <Wine className="h-4 w-4 text-neon-purple" />
                What are you drinking?
              </label>
              <div className="flex flex-wrap gap-2">
                {alcoholOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setAlcoholType(option.value)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all",
                      alcoholType === option.value
                        ? "bg-neon-purple text-white"
                        : "bg-dark-700 text-gray-300 hover:bg-dark-600"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sip Factor */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3 group/sip relative cursor-help w-fit">
                <Wine className="h-4 w-4 text-neon-pink" />
                Sip Factor
                <span className="text-gray-500 text-xs">(hover for info)</span>
                {/* Tooltip */}
                <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-dark-700 text-white text-xs rounded-lg opacity-0 invisible group-hover/sip:opacity-100 group-hover/sip:visible transition-all duration-200 whitespace-nowrap z-50 pointer-events-none border border-dark-600">
                  <span className="font-semibold text-neon-pink">Sip Factor</span> indicates how much you&apos;ll drink. More glasses = more sips!
                  <div className="absolute top-full left-4 border-4 border-transparent border-t-dark-700" />
                </div>
              </label>
              <div className="flex flex-wrap gap-2">
                {sipFactorOptions.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setSipFactor(option.value)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1",
                      sipFactor === option.value
                        ? "bg-neon-pink text-white"
                        : "bg-dark-700 text-gray-300 hover:bg-dark-600"
                    )}
                  >
                    {option.value !== null ? (
                      <span className="flex">
                        {Array.from({ length: option.value }).map((_, i) => (
                          <Wine key={i} className="h-3 w-3" />
                        ))}
                      </span>
                    ) : (
                      option.label
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Matching count */}
            <div className="pt-4 border-t border-dark-600 text-center">
              <Badge variant={matchingGames.length > 0 ? "green" : "pink"}>
                {matchingGames.length} games match your criteria
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Wheel */}
        {matchingGames.length > 0 ? (
          <div className="flex justify-center py-8">
            <WheelSpinner games={matchingGames} onResult={handleResult} />
          </div>
        ) : (
          <div className="text-center py-16 bg-dark-800 rounded-xl border border-dark-600">
            <p className="text-gray-400 text-lg mb-2">
              No games match your filters
            </p>
            <p className="text-gray-500 text-sm">
              Try selecting fewer materials or a different drink type
            </p>
          </div>
        )}

        {/* Result Modal */}
        <Modal
          isOpen={showResult}
          onClose={() => setShowResult(false)}
          size="md"
        >
          {selectedGame && (
            <div className="text-center py-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <PartyPopper className="h-6 w-6 text-neon-pink animate-bounce" />
                <h2 className="text-xl font-bold text-white">
                  You&apos;re playing...
                </h2>
                <PartyPopper className="h-6 w-6 text-neon-purple animate-bounce" />
              </div>

              {/* Game Card Display */}
              <div className="w-48 h-64 mx-auto mb-4 relative rounded-xl overflow-hidden shadow-2xl shadow-neon-pink/30 border-2 border-neon-pink/50">
                {/* Background - Image or Gradient Placeholder */}
                {selectedGame.image ? (
                  <Image
                    src={selectedGame.image}
                    alt={selectedGame.name}
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${getPlaceholderGradient(selectedGame.slug)}`}>
                    {/* Placeholder emoji */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                      <span className="text-6xl">{getGameEmoji(selectedGame)}</span>
                    </div>
                  </div>
                )}

                {/* Gradient overlay and content - only for games without cover images */}
                {!selectedGame.image && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      {/* Drunkenness indicator */}
                      <div className="flex gap-0.5 mb-1.5 justify-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Flame
                            key={i}
                            className={`h-4 w-4 ${
                              i < selectedGame.drunkenness_level
                                ? "text-neon-pink drop-shadow-[0_0_4px_rgba(236,72,153,0.8)]"
                                : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      {/* Title */}
                      <h3 className="text-lg font-bold text-white leading-tight drop-shadow-lg">
                        {selectedGame.name}
                      </h3>
                    </div>
                  </>
                )}
              </div>

              <p className="text-gray-400 mb-6 text-sm px-2">{selectedGame.description}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={`/game/${selectedGame.slug}`} className="flex-1">
                  <Button className="w-full">
                    <Play className="h-4 w-4 mr-2" />
                    View Rules
                  </Button>
                </Link>
                <Button
                  variant="secondary"
                  onClick={handleSpinAgain}
                  className="flex-1"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Spin Again
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </main>

      <MobileNav />
    </div>
  );
}
