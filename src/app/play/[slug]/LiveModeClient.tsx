"use client";

import { useEffect, useState } from "react";
import { Game } from "@/types";
import { Button, Card, CardContent } from "@/components/ui";
import { useAppStore } from "@/lib/store";
import { formatElapsedTime } from "@/lib/utils";
import { Timer, X, Wine, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AIChatFAB } from "@/components/AIChatFAB";
import { RatingModal } from "@/components/RatingModal";

interface LiveModeClientProps {
  game: Game;
}

export function LiveModeClient({ game }: LiveModeClientProps) {
  const router = useRouter();
  const { session, startSession, endSession, pendingRating, setPendingRating } =
    useAppStore();
  const [elapsedTime, setElapsedTime] = useState("0s");
  const [showRatingModal, setShowRatingModal] = useState(false);

  // Start session on mount if not already active
  useEffect(() => {
    if (!session || session.gameSlug !== game.slug) {
      startSession(game.slug, game.name);
    }
  }, [game.slug, game.name, session, startSession]);

  // Update elapsed time every second
  useEffect(() => {
    if (!session) return;

    const interval = setInterval(() => {
      setElapsedTime(formatElapsedTime(session.startedAt));
    }, 1000);

    return () => clearInterval(interval);
  }, [session]);

  // Show rating modal when pending
  useEffect(() => {
    if (pendingRating && pendingRating.slug === game.slug) {
      setShowRatingModal(true);
    }
  }, [pendingRating, game.slug]);

  const handleEndGame = () => {
    endSession();
    setShowRatingModal(true);
  };

  const handleRatingComplete = () => {
    setPendingRating(null);
    setShowRatingModal(false);
    router.push(`/game/${game.slug}`);
  };

  const handleRatingSkip = () => {
    setPendingRating(null);
    setShowRatingModal(false);
    router.push(`/game/${game.slug}`);
  };

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-dark-900/95 backdrop-blur border-b border-dark-600">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              href={`/game/${game.slug}`}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="hidden sm:inline">Exit Game</span>
            </Link>

            <div className="flex items-center gap-2">
              <Wine className="h-5 w-5 text-neon-pink" />
              <h1 className="text-lg font-bold text-white truncate max-w-[200px]">
                {game.name}
              </h1>
            </div>

            <div className="flex items-center gap-2 text-neon-green">
              <Timer className="h-5 w-5" />
              <span className="font-mono text-lg">{elapsedTime}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Rules Card */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-3xl">📜</span>
              Rules
            </h2>
            <div className="space-y-4">
              {game.rules_text.split("\n").map((line, index) => {
                // Handle bold markdown
                const formattedLine = line.replace(
                  /\*\*(.*?)\*\*/g,
                  '<strong class="text-neon-pink">$1</strong>'
                );

                return (
                  <p
                    key={index}
                    className="text-gray-300 text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formattedLine }}
                  />
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Quick Tips */}
        <Card className="mb-24 bg-gradient-to-br from-dark-800 to-dark-700">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-white mb-3">💡 Pro Tips</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Tap the chat button for AI referee help</li>
              <li>• The timer tracks your game session</li>
              <li>• Stay hydrated - drink water between rounds!</li>
            </ul>
          </CardContent>
        </Card>

        {/* End Game Button */}
        <div className="fixed bottom-20 left-0 right-0 p-4">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="danger"
              size="lg"
              className="w-full"
              onClick={handleEndGame}
            >
              <X className="h-5 w-5 mr-2" />
              End Game
            </Button>
          </div>
        </div>
      </main>

      {/* AI Chat FAB */}
      <AIChatFAB game={game} />

      {/* Rating Modal */}
      <RatingModal
        isOpen={showRatingModal}
        gameName={game.name}
        gameSlug={game.slug}
        onComplete={handleRatingComplete}
        onSkip={handleRatingSkip}
      />
    </div>
  );
}
