"use client";

import { useState, useRef } from "react";
import { Game } from "@/types";
import { cn } from "@/lib/utils";

interface WheelSpinnerProps {
  games: Game[];
  onResult: (game: Game) => void;
}

const WHEEL_COLORS = [
  "#ff2d92", // neon-pink
  "#00d4ff", // neon-blue
  "#b94dff", // neon-purple
  "#39ff14", // neon-green
  "#ffea00", // neon-yellow
  "#ff6b6b", // coral
  "#4ecdc4", // teal
  "#a855f7", // violet
];

export function WheelSpinner({ games, onResult }: WheelSpinnerProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef<SVGSVGElement>(null);

  // Ensure we have at least 8 segments (repeat games if needed)
  const segments: Game[] = [];
  const targetSegments = Math.max(8, games.length);
  for (let i = 0; i < targetSegments; i++) {
    segments.push(games[i % games.length]);
  }

  const segmentAngle = 360 / segments.length;

  const spin = () => {
    if (isSpinning || games.length === 0) return;

    setIsSpinning(true);

    // Random number of full rotations (3-5) plus random final position
    const fullRotations = (3 + Math.random() * 2) * 360;
    const randomAngle = Math.random() * 360;
    const totalRotation = rotation + fullRotations + randomAngle;

    setRotation(totalRotation);

    // Calculate which segment we land on after spin
    setTimeout(() => {
      const normalizedAngle = totalRotation % 360;
      // The pointer is at the top (0 degrees), so we need to find which segment is there
      const adjustedAngle = (360 - normalizedAngle + segmentAngle / 2) % 360;
      const selectedIndex = Math.floor(adjustedAngle / segmentAngle);
      const selectedGame = segments[selectedIndex % segments.length];

      setIsSpinning(false);
      onResult(selectedGame);
    }, 4000);
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Pointer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
        <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-white drop-shadow-lg" />
      </div>

      {/* Wheel Container */}
      <div className="relative w-72 h-72 md:w-96 md:h-96">
        <svg
          ref={wheelRef}
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-2xl"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning
              ? "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)"
              : "none",
          }}
        >
          {/* Segments */}
          {segments.map((game, index) => {
            const startAngle = index * segmentAngle - 90; // Start from top
            const endAngle = startAngle + segmentAngle;
            const startRad = (startAngle * Math.PI) / 180;
            const endRad = (endAngle * Math.PI) / 180;

            const x1 = 100 + 95 * Math.cos(startRad);
            const y1 = 100 + 95 * Math.sin(startRad);
            const x2 = 100 + 95 * Math.cos(endRad);
            const y2 = 100 + 95 * Math.sin(endRad);

            const largeArc = segmentAngle > 180 ? 1 : 0;

            const pathD = `M 100 100 L ${x1} ${y1} A 95 95 0 ${largeArc} 1 ${x2} ${y2} Z`;

            // Text position (middle of segment)
            const textAngle = startAngle + segmentAngle / 2;
            const textRad = (textAngle * Math.PI) / 180;
            const textX = 100 + 60 * Math.cos(textRad);
            const textY = 100 + 60 * Math.sin(textRad);

            return (
              <g key={`${game.slug}-${index}`}>
                <path
                  d={pathD}
                  fill={WHEEL_COLORS[index % WHEEL_COLORS.length]}
                  stroke="#0a0a0f"
                  strokeWidth="1"
                />
                <text
                  x={textX}
                  y={textY}
                  fill="white"
                  fontSize="6"
                  fontWeight="bold"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  transform={`rotate(${textAngle + 90}, ${textX}, ${textY})`}
                  className="pointer-events-none select-none"
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
                >
                  {game.name.length > 12
                    ? game.name.slice(0, 10) + "..."
                    : game.name}
                </text>
              </g>
            );
          })}

          {/* Center circle */}
          <circle
            cx="100"
            cy="100"
            r="20"
            fill="#12121a"
            stroke="#24242e"
            strokeWidth="2"
          />
          <circle cx="100" cy="100" r="8" fill="#ff2d92" />
        </svg>
      </div>

      {/* Spin Button */}
      <button
        onClick={spin}
        disabled={isSpinning || games.length === 0}
        className={cn(
          "mt-8 px-8 py-4 text-xl font-bold rounded-full transition-all",
          "gradient-pink-purple text-white glow-pink",
          "hover:scale-105 active:scale-95",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        )}
      >
        {isSpinning ? "Spinning..." : "🎲 SPIN!"}
      </button>
    </div>
  );
}
