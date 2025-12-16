"use client";

import { useState, useMemo } from "react";
import { games } from "@/config/gameData";
import { Game } from "@/types";
import { Header } from "@/components/Header";
import { WheelSpinner } from "@/components/WheelSpinner";
import { Button, Card, CardContent, Badge, Modal } from "@/components/ui";
import { Users, Package, Wine, PartyPopper, Play, RotateCcw } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
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

export default function SpinPage() {
  const [playerCount, setPlayerCount] = useState<number>(4);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [alcoholType, setAlcoholType] = useState<"beer" | "liquor" | "any">("any");
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

      return true;
    });
  }, [playerCount, selectedMaterials, alcoholType]);

  const handleResult = (game: Game) => {
    setSelectedGame(game);
    setShowResult(true);
  };

  const handleSpinAgain = () => {
    setShowResult(false);
    setSelectedGame(null);
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
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
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center mx-auto mb-4 animate-bounce">
                <PartyPopper className="h-10 w-10 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-white mb-2">
                🎉 You&apos;re playing...
              </h2>

              <h3 className="text-3xl font-bold bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent mb-4">
                {selectedGame.name}
              </h3>

              <p className="text-gray-400 mb-6">{selectedGame.description}</p>

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
    </div>
  );
}
