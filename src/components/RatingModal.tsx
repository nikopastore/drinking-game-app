"use client";

import { useState } from "react";
import { Modal, Button } from "@/components/ui";
import { Star, PartyPopper } from "lucide-react";
import { cn, getDeviceId } from "@/lib/utils";

interface RatingModalProps {
  isOpen: boolean;
  gameName: string;
  gameSlug: string;
  onComplete: () => void;
  onSkip: () => void;
}

export function RatingModal({
  isOpen,
  gameName,
  gameSlug,
  onComplete,
  onSkip,
}: RatingModalProps) {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [hasRated, setHasRated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRate = async (score: number) => {
    setRating(score);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/ratings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gameSlug, score, deviceId: getDeviceId() }),
      });

      if (!response.ok) {
        throw new Error("Rating unavailable");
      }
    } catch {
      // The static mobile build has no API route. Keep the feedback local there.
      localStorage.setItem(`sipwiki-rating:${gameSlug}`, String(score));
    }

    setIsSubmitting(false);
    setHasRated(true);
  };

  const getRatingLabel = (score: number): string => {
    const labels: Record<number, string> = {
      1: "Not great",
      2: "It was okay",
      3: "Pretty fun!",
      4: "Great game!",
      5: "Amazing! 🔥",
    };
    return labels[score] || "";
  };

  return (
    <Modal isOpen={isOpen} onClose={onSkip} title="" size="sm">
      <div className="text-center py-4">
        {!hasRated ? (
          <>
            <div className="w-16 h-16 rounded-full bg-neon-pink/20 flex items-center justify-center mx-auto mb-4">
              <PartyPopper className="h-8 w-8 text-neon-pink" />
            </div>

            <h2 className="text-xl font-bold text-white mb-2">
              How was {gameName}?
            </h2>
            <p className="text-gray-400 mb-6">
              Rate your experience to help others find great games
            </p>

            {/* Star Rating */}
            <div className="flex justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((score) => (
                <button
                  key={score}
                  onClick={() => handleRate(score)}
                  onMouseEnter={() => setHoveredRating(score)}
                  onMouseLeave={() => setHoveredRating(0)}
                  disabled={isSubmitting}
                  className="p-1 transition-transform hover:scale-110 disabled:opacity-50"
                >
                  <Star
                    className={cn(
                      "h-10 w-10 transition-colors",
                      (hoveredRating || rating) >= score
                        ? "fill-neon-yellow text-neon-yellow"
                        : "text-dark-600"
                    )}
                  />
                </button>
              ))}
            </div>

            {/* Rating Label */}
            <p className="text-gray-300 h-6 mb-6">
              {getRatingLabel(hoveredRating || rating)}
            </p>

            <Button variant="ghost" onClick={onSkip} className="w-full">
              Skip for now
            </Button>
          </>
        ) : (
          <>
            <div className="w-16 h-16 rounded-full bg-neon-green/20 flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 fill-neon-yellow text-neon-yellow" />
            </div>

            <h2 className="text-xl font-bold text-white mb-2">Thanks!</h2>
            <p className="text-gray-400 mb-6">
              Your rating helps SipWiki improve its game recommendations
            </p>

            <Button onClick={onComplete} className="w-full">
              Continue
            </Button>
          </>
        )}
      </div>
    </Modal>
  );
}
