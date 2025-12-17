"use client";

import { useState, useRef, useEffect } from "react";
import { Game } from "@/types";
import { cn } from "@/lib/utils";
import { Volume2, VolumeX } from "lucide-react";

interface WheelSpinnerProps {
  games: Game[];
  onResult: (game: Game) => void;
}

const WHEEL_COLORS = [
  "#ff2d92", // neon-pink
  "#00d4ff", // neon-blue
  "#b94dff", // neon-purple
  "#39ff14", // neon-green
  "#ff6b6b", // coral
  "#ffd93d", // gold
  "#4ecdc4", // teal
  "#ff9f43", // orange
];

export function WheelSpinner({ games, onResult }: WheelSpinnerProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showLights, setShowLights] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const wheelRef = useRef<HTMLDivElement>(null);
  const tickAudioRef = useRef<HTMLAudioElement | null>(null);
  const winAudioRef = useRef<HTMLAudioElement | null>(null);

  // Create segments - ensure at least 8 for visual appeal
  const segments: Game[] = [];
  const minSegments = Math.max(8, games.length);
  for (let i = 0; i < minSegments; i++) {
    segments.push(games[i % games.length]);
  }

  const segmentAngle = 360 / segments.length;

  // Blinking lights effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowLights((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const spin = () => {
    if (isSpinning || games.length === 0) return;

    setIsSpinning(true);
    setSelectedIndex(null);

    // Random full rotations (5-8) plus random final position
    const fullRotations = (5 + Math.random() * 3) * 360;
    const randomOffset = Math.random() * 360;
    const newRotation = rotation + fullRotations + randomOffset;

    setRotation(newRotation);

    // Calculate result after animation completes (add 100ms buffer)
    setTimeout(() => {
      // Normalize the final rotation to 0-360
      const finalAngle = newRotation % 360;

      // The pointer is at the top (0 degrees)
      // The wheel rotates clockwise, so we need to find which segment is at the pointer
      // Segment 0 starts at the top and goes clockwise
      // After rotating by finalAngle degrees clockwise, segment 0 is now at finalAngle degrees from top
      // The segment at the top is (360 - finalAngle) / segmentAngle segments back from segment 0

      const effectiveAngle = (360 - finalAngle + 360) % 360;
      const index = Math.floor(effectiveAngle / segmentAngle) % segments.length;

      setSelectedIndex(index);
      setIsSpinning(false);
      onResult(segments[index]);
    }, 5100); // Animation is 5s, add buffer
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Arcade Cabinet Frame */}
      <div className="relative">
        {/* Outer glow */}
        <div className="absolute -inset-8 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue rounded-full opacity-30 blur-2xl animate-pulse" />

        {/* Arcade lights ring */}
        <div className="absolute -inset-4 rounded-full">
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 360) / 24;
            const rad = (angle * Math.PI) / 180;
            const x = 50 + 48 * Math.cos(rad);
            const y = 50 + 48 * Math.sin(rad);
            return (
              <div
                key={i}
                className={cn(
                  "absolute w-3 h-3 rounded-full transition-all duration-200",
                  showLights && i % 2 === 0
                    ? "bg-yellow-400 shadow-[0_0_10px_#ffd93d,0_0_20px_#ffd93d]"
                    : showLights && i % 2 === 1
                    ? "bg-yellow-600"
                    : !showLights && i % 2 === 1
                    ? "bg-yellow-400 shadow-[0_0_10px_#ffd93d,0_0_20px_#ffd93d]"
                    : "bg-yellow-600"
                )}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            );
          })}
        </div>

        {/* Metal frame */}
        <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-3 shadow-[0_0_60px_rgba(0,0,0,0.8),inset_0_2px_10px_rgba(255,255,255,0.1)]">
          {/* Inner metal ring */}
          <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 p-2 shadow-[inset_0_4px_20px_rgba(0,0,0,0.5)]">

            {/* Wheel container with 3D effect */}
            <div
              className="relative w-full h-full rounded-full overflow-hidden"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* The spinning wheel */}
              <div
                ref={wheelRef}
                className="w-full h-full rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: isSpinning
                    ? "transform 5s cubic-bezier(0.2, 0.8, 0.2, 1)"
                    : "none",
                  transformStyle: "preserve-3d",
                }}
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Segments */}
                  {segments.map((game, index) => {
                    const startAngle = index * segmentAngle - 90;
                    const endAngle = startAngle + segmentAngle;
                    const startRad = (startAngle * Math.PI) / 180;
                    const endRad = (endAngle * Math.PI) / 180;

                    const x1 = 100 + 92 * Math.cos(startRad);
                    const y1 = 100 + 92 * Math.sin(startRad);
                    const x2 = 100 + 92 * Math.cos(endRad);
                    const y2 = 100 + 92 * Math.sin(endRad);

                    const largeArc = segmentAngle > 180 ? 1 : 0;
                    const pathD = `M 100 100 L ${x1} ${y1} A 92 92 0 ${largeArc} 1 ${x2} ${y2} Z`;

                    // Text position
                    const textAngle = startAngle + segmentAngle / 2;
                    const textRad = (textAngle * Math.PI) / 180;
                    const textX = 100 + 58 * Math.cos(textRad);
                    const textY = 100 + 58 * Math.sin(textRad);

                    const color = WHEEL_COLORS[index % WHEEL_COLORS.length];

                    return (
                      <g key={`${game.slug}-${index}`}>
                        {/* Segment with gradient */}
                        <defs>
                          <linearGradient
                            id={`grad-${index}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor={color} stopOpacity="1" />
                            <stop offset="100%" stopColor={color} stopOpacity="0.7" />
                          </linearGradient>
                        </defs>
                        <path
                          d={pathD}
                          fill={`url(#grad-${index})`}
                          stroke="#1a1a2e"
                          strokeWidth="1.5"
                          className="drop-shadow-lg"
                        />
                        {/* Segment shine */}
                        <path
                          d={pathD}
                          fill="url(#shine)"
                          opacity="0.3"
                        />
                        {/* Text */}
                        <text
                          x={textX}
                          y={textY}
                          fill="white"
                          fontSize={segments.length > 12 ? "5" : "6"}
                          fontWeight="bold"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          transform={`rotate(${textAngle + 90}, ${textX}, ${textY})`}
                          className="pointer-events-none select-none uppercase tracking-wide"
                          style={{
                            textShadow: "0 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)",
                            paintOrder: "stroke fill",
                            stroke: "#000",
                            strokeWidth: "0.5px",
                          }}
                        >
                          {game.name.length > 10
                            ? game.name.slice(0, 9) + "…"
                            : game.name}
                        </text>
                      </g>
                    );
                  })}

                  {/* Global shine gradient */}
                  <defs>
                    <linearGradient id="shine" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ff2d92" stopOpacity="1" />
                      <stop offset="70%" stopColor="#ff2d92" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#b94dff" stopOpacity="0.3" />
                    </radialGradient>
                  </defs>

                  {/* Center hub - 3D effect */}
                  <circle
                    cx="100"
                    cy="100"
                    r="22"
                    fill="#1a1a2e"
                    stroke="#2a2a3e"
                    strokeWidth="2"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="18"
                    fill="url(#centerGlow)"
                    className={cn(isSpinning && "animate-pulse")}
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="8"
                    fill="#fff"
                    opacity="0.9"
                  />
                  <circle
                    cx="98"
                    cy="98"
                    r="3"
                    fill="#fff"
                    opacity="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Pointer - Arrow style */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 z-20">
          <div className="relative">
            {/* Pointer glow */}
            <div className="absolute inset-0 blur-md bg-white opacity-50"
              style={{
                clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)",
                width: "40px",
                height: "50px",
              }}
            />
            {/* Main pointer */}
            <svg width="40" height="50" viewBox="0 0 40 50" className="drop-shadow-2xl">
              <defs>
                <linearGradient id="pointerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="50%" stopColor="#e0e0e0" />
                  <stop offset="100%" stopColor="#b0b0b0" />
                </linearGradient>
                <filter id="pointerShadow">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.5" />
                </filter>
              </defs>
              <path
                d="M20 50 L5 10 L20 18 L35 10 Z"
                fill="url(#pointerGrad)"
                stroke="#333"
                strokeWidth="2"
                filter="url(#pointerShadow)"
              />
              {/* Pointer highlight */}
              <path
                d="M20 45 L10 15 L20 20 L30 15 Z"
                fill="white"
                opacity="0.3"
              />
            </svg>
          </div>
        </div>

        {/* Sound toggle */}
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="absolute -right-2 top-1/2 -translate-y-1/2 p-2 bg-dark-700 rounded-full border border-dark-600 hover:bg-dark-600 transition-colors z-30"
        >
          {soundEnabled ? (
            <Volume2 className="w-4 h-4 text-neon-blue" />
          ) : (
            <VolumeX className="w-4 h-4 text-gray-500" />
          )}
        </button>
      </div>

      {/* Spin Button - Arcade style */}
      <button
        onClick={spin}
        disabled={isSpinning || games.length === 0}
        className={cn(
          "mt-10 relative group",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
      >
        {/* Button glow */}
        <div className={cn(
          "absolute -inset-2 rounded-full blur-lg transition-all duration-300",
          isSpinning
            ? "bg-neon-purple/50 animate-pulse"
            : "bg-neon-pink/50 group-hover:bg-neon-pink/70"
        )} />

        {/* Button base (3D effect) */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-800 to-pink-950 rounded-full translate-y-2" />
          <div className={cn(
            "relative px-10 py-5 text-xl font-black uppercase tracking-wider rounded-full transition-all duration-150",
            "bg-gradient-to-b from-neon-pink via-pink-500 to-pink-600",
            "text-white shadow-[0_0_20px_rgba(255,45,146,0.5),inset_0_2px_10px_rgba(255,255,255,0.3)]",
            "border-2 border-pink-400/50",
            !isSpinning && "group-hover:translate-y-0.5 group-hover:shadow-[0_0_30px_rgba(255,45,146,0.7)]",
            isSpinning && "translate-y-1"
          )}>
            {isSpinning ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin">🎰</span>
                Spinning...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                🎲 SPIN TO WIN!
              </span>
            )}
          </div>
        </div>
      </button>

      {/* Decorative text */}
      <p className="mt-4 text-gray-500 text-sm uppercase tracking-widest">
        {games.length} games in the wheel
      </p>
    </div>
  );
}
