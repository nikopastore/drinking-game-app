"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Game } from "@/types";
import { cn } from "@/lib/utils";

interface WheelSpinnerProps {
  games: Game[];
  onResult: (game: Game) => void;
}

// Professional casino color palette
const WHEEL_COLORS = [
  { main: "#DC2626", dark: "#991B1B" }, // Deep red
  { main: "#1E293B", dark: "#0F172A" }, // Rich black
  { main: "#DC2626", dark: "#991B1B" }, // Deep red
  { main: "#1E293B", dark: "#0F172A" }, // Rich black
  { main: "#DC2626", dark: "#991B1B" }, // Deep red
  { main: "#1E293B", dark: "#0F172A" }, // Rich black
  { main: "#DC2626", dark: "#991B1B" }, // Deep red
  { main: "#1E293B", dark: "#0F172A" }, // Rich black
];

export function WheelSpinner({ games, onResult }: WheelSpinnerProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [tickerFlick, setTickerFlick] = useState(false);
  const [ledPhase, setLedPhase] = useState(0);
  const [isSettling, setIsSettling] = useState(false);
  const tickIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastSegmentRef = useRef<number>(0);

  // Create segments - use game count or minimum 8
  const segments: Game[] = [];
  const minSegments = Math.max(8, games.length);
  for (let i = 0; i < minSegments; i++) {
    segments.push(games[i % games.length]);
  }

  const segmentAngle = 360 / segments.length;
  const numLeds = 32;

  // LED chasing animation
  useEffect(() => {
    const interval = setInterval(() => {
      setLedPhase((prev) => (prev + 1) % numLeds);
    }, isSpinning ? 50 : 150);
    return () => clearInterval(interval);
  }, [isSpinning, numLeds]);

  // Ticker flick effect during spin
  const startTickerEffect = useCallback(() => {
    if (tickIntervalRef.current) {
      clearInterval(tickIntervalRef.current);
    }

    let currentRotation = rotation;
    const targetRotation = rotation;

    tickIntervalRef.current = setInterval(() => {
      // Estimate current visual rotation based on easing
      const elapsed = Date.now() - spinStartRef.current;
      const duration = 7000;
      const progress = Math.min(elapsed / duration, 1);

      // Approximate the cubic-bezier easing
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const estimatedRotation = lastRotationRef.current +
        (targetRotationRef.current - lastRotationRef.current) * easedProgress;

      const currentSegment = Math.floor((estimatedRotation % 360) / segmentAngle);

      if (currentSegment !== lastSegmentRef.current) {
        lastSegmentRef.current = currentSegment;
        setTickerFlick(true);
        setTimeout(() => setTickerFlick(false), 50);
      }

      if (progress >= 1) {
        if (tickIntervalRef.current) {
          clearInterval(tickIntervalRef.current);
        }
      }
    }, 30);
  }, [rotation, segmentAngle]);

  const spinStartRef = useRef<number>(0);
  const lastRotationRef = useRef<number>(0);
  const targetRotationRef = useRef<number>(0);
  const targetSegmentRef = useRef<number>(0);

  const spin = () => {
    if (isSpinning || games.length === 0) return;

    setIsSpinning(true);
    setIsSettling(false);

    // STEP 1: Pick a truly random segment to land on
    const targetIndex = Math.floor(Math.random() * segments.length);
    targetSegmentRef.current = targetIndex;

    // STEP 2: Calculate the exact rotation to land on this segment
    // The pointer is at the top. Segment 0 starts at the top.
    // After rotating clockwise by R degrees, the segment at the pointer is:
    // index = floor((360 - (R % 360)) / segmentAngle) % segments.length
    //
    // To land on targetIndex, we need:
    // (360 - (R % 360)) / segmentAngle ≈ targetIndex
    // 360 - (R % 360) ≈ targetIndex * segmentAngle
    // R % 360 ≈ 360 - targetIndex * segmentAngle

    const targetAngle = (360 - (targetIndex * segmentAngle) - (segmentAngle / 2)) % 360;

    // STEP 3: Add random full rotations (5-8 full spins) for visual excitement
    const fullRotations = (5 + Math.floor(Math.random() * 4)) * 360;

    // STEP 4: Add small random variance within the segment (so it doesn't always hit dead center)
    const variance = (Math.random() - 0.5) * (segmentAngle * 0.7);

    // STEP 5: Calculate final rotation from a fresh base (not cumulative)
    // Normalize current rotation first to prevent huge numbers
    const normalizedCurrent = rotation % 360;
    const newRotation = normalizedCurrent + fullRotations + targetAngle + variance;

    lastRotationRef.current = rotation;
    targetRotationRef.current = newRotation;
    spinStartRef.current = Date.now();

    setRotation(newRotation);
    startTickerEffect();

    // Main spin ends at 7s
    setTimeout(() => {
      if (tickIntervalRef.current) {
        clearInterval(tickIntervalRef.current);
      }

      // Add settling bounce effect
      setIsSettling(true);

      // Calculate result after settle animation - use the pre-selected target
      setTimeout(() => {
        setIsSpinning(false);
        setIsSettling(false);
        // Use the pre-selected random segment for guaranteed accuracy
        onResult(segments[targetSegmentRef.current]);
      }, 500);
    }, 7000);
  };

  return (
    <div className="relative flex flex-col items-center select-none">
      {/* Casino backdrop glow */}
      <div className="absolute -inset-20 bg-gradient-radial from-amber-900/20 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* Main wheel assembly */}
      <div className="relative">

        {/* Outer gold frame - multiple layers for depth */}
        <div className="absolute -inset-6 rounded-full"
          style={{
            background: "linear-gradient(145deg, #B8860B, #DAA520, #FFD700, #DAA520, #B8860B)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.6), inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.3)",
          }}
        />

        {/* Chrome inner ring */}
        <div className="absolute -inset-4 rounded-full"
          style={{
            background: "linear-gradient(145deg, #E8E8E8, #FFFFFF, #C0C0C0, #FFFFFF, #A8A8A8)",
            boxShadow: "inset 0 4px 8px rgba(0,0,0,0.3), inset 0 -2px 4px rgba(255,255,255,0.5)",
          }}
        />

        {/* LED lights ring */}
        <div className="absolute -inset-5 rounded-full pointer-events-none">
          {Array.from({ length: numLeds }).map((_, i) => {
            const angle = (i * 360) / numLeds - 90;
            const rad = (angle * Math.PI) / 180;
            const radius = 50;
            const x = 50 + radius * Math.cos(rad);
            const y = 50 + radius * Math.sin(rad);

            // Chase pattern - 3 LEDs lit at a time
            const isLit = (i === ledPhase || i === (ledPhase + 1) % numLeds || i === (ledPhase + 2) % numLeds);

            return (
              <div
                key={i}
                className="absolute w-2.5 h-2.5 rounded-full transition-all duration-100"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                  background: isLit
                    ? "radial-gradient(circle, #FFFDE4, #FFD700)"
                    : "radial-gradient(circle, #8B7355, #5C4A32)",
                  boxShadow: isLit
                    ? "0 0 8px #FFD700, 0 0 16px #FFA500, 0 0 24px #FF8C00"
                    : "inset 0 1px 2px rgba(0,0,0,0.5)",
                }}
              />
            );
          })}
        </div>

        {/* Mahogany base ring */}
        <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] rounded-full p-1"
          style={{
            background: "radial-gradient(circle at 30% 30%, #8B4513, #5D3A1A, #3D2512)",
            boxShadow: "inset 0 0 30px rgba(0,0,0,0.7), 0 8px 32px rgba(0,0,0,0.5)",
          }}
        >

          {/* Inner recessed area */}
          <div className="w-full h-full rounded-full overflow-hidden"
            style={{
              boxShadow: "inset 0 0 40px rgba(0,0,0,0.8)",
            }}
          >

            {/* The spinning wheel */}
            <div
              className={cn(
                "w-full h-full rounded-full",
                isSettling && "animate-settle"
              )}
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: isSpinning && !isSettling
                  ? "transform 7s cubic-bezier(0.0, 0.4, 0.2, 1)"
                  : isSettling
                  ? "transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                  : "none",
              }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  {/* Wood grain pattern */}
                  <pattern id="woodGrain" patternUnits="userSpaceOnUse" width="4" height="4">
                    <rect width="4" height="4" fill="#2D1810"/>
                    <path d="M0 2 Q1 1, 2 2 T4 2" stroke="#3D2512" strokeWidth="0.5" fill="none" opacity="0.3"/>
                  </pattern>

                  {/* Glossy overlay */}
                  <radialGradient id="glossOverlay" cx="35%" cy="35%" r="60%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.25"/>
                    <stop offset="50%" stopColor="white" stopOpacity="0.05"/>
                    <stop offset="100%" stopColor="white" stopOpacity="0"/>
                  </radialGradient>

                  {/* Segment gradients */}
                  {WHEEL_COLORS.map((color, i) => (
                    <linearGradient key={`seg-grad-${i}`} id={`segGrad${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={color.main}/>
                      <stop offset="100%" stopColor={color.dark}/>
                    </linearGradient>
                  ))}

                  {/* Center hub gradient */}
                  <radialGradient id="hubGradient" cx="40%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#FFD700"/>
                    <stop offset="50%" stopColor="#DAA520"/>
                    <stop offset="100%" stopColor="#B8860B"/>
                  </radialGradient>

                  {/* Brass peg gradient */}
                  <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E6C87A"/>
                    <stop offset="50%" stopColor="#D4AF37"/>
                    <stop offset="100%" stopColor="#A67C00"/>
                  </linearGradient>
                </defs>

                {/* Segments */}
                {segments.map((game, index) => {
                  const startAngle = index * segmentAngle - 90;
                  const endAngle = startAngle + segmentAngle;
                  const startRad = (startAngle * Math.PI) / 180;
                  const endRad = (endAngle * Math.PI) / 180;

                  const outerRadius = 94;
                  const innerRadius = 28;

                  const x1 = 100 + outerRadius * Math.cos(startRad);
                  const y1 = 100 + outerRadius * Math.sin(startRad);
                  const x2 = 100 + outerRadius * Math.cos(endRad);
                  const y2 = 100 + outerRadius * Math.sin(endRad);
                  const x3 = 100 + innerRadius * Math.cos(endRad);
                  const y3 = 100 + innerRadius * Math.sin(endRad);
                  const x4 = 100 + innerRadius * Math.cos(startRad);
                  const y4 = 100 + innerRadius * Math.sin(startRad);

                  const largeArc = segmentAngle > 180 ? 1 : 0;
                  const pathD = `M ${x4} ${y4} L ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4} Z`;

                  // Text position
                  const textAngle = startAngle + segmentAngle / 2;
                  const textRad = (textAngle * Math.PI) / 180;
                  const textRadius = 62;
                  const textX = 100 + textRadius * Math.cos(textRad);
                  const textY = 100 + textRadius * Math.sin(textRad);

                  // Peg position (at segment boundary)
                  const pegRad = (startAngle * Math.PI) / 180;
                  const pegRadius = 90;
                  const pegX = 100 + pegRadius * Math.cos(pegRad);
                  const pegY = 100 + pegRadius * Math.sin(pegRad);

                  const colorIndex = index % WHEEL_COLORS.length;

                  return (
                    <g key={`${game.slug}-${index}`}>
                      {/* Segment */}
                      <path
                        d={pathD}
                        fill={`url(#segGrad${colorIndex})`}
                        stroke="#1a1a1a"
                        strokeWidth="0.5"
                      />

                      {/* Segment inner shadow */}
                      <path
                        d={pathD}
                        fill="none"
                        stroke="rgba(0,0,0,0.3)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        style={{ filter: "blur(2px)" }}
                      />

                      {/* Brass divider peg */}
                      <circle
                        cx={pegX}
                        cy={pegY}
                        r="3"
                        fill="url(#brassGrad)"
                        stroke="#8B7355"
                        strokeWidth="0.5"
                        style={{ filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.5))" }}
                      />

                      {/* Text */}
                      <text
                        x={textX}
                        y={textY}
                        fill="#F8F4E3"
                        fontSize={segments.length > 12 ? "4.5" : "5.5"}
                        fontWeight="bold"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        transform={`rotate(${textAngle + 90}, ${textX}, ${textY})`}
                        style={{
                          textShadow: "0 1px 2px rgba(0,0,0,0.8)",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {game.name.length > 12
                          ? game.name.slice(0, 11) + "…"
                          : game.name}
                      </text>
                    </g>
                  );
                })}

                {/* Glossy overlay */}
                <circle cx="100" cy="100" r="94" fill="url(#glossOverlay)" />

                {/* Center hub - golden */}
                <circle
                  cx="100"
                  cy="100"
                  r="26"
                  fill="url(#hubGradient)"
                  stroke="#8B7355"
                  strokeWidth="2"
                  style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" }}
                />

                {/* Hub decorative rings */}
                <circle cx="100" cy="100" r="20" fill="none" stroke="#FFE55C" strokeWidth="1" opacity="0.5"/>
                <circle cx="100" cy="100" r="14" fill="none" stroke="#8B7355" strokeWidth="1"/>

                {/* Hub center jewel */}
                <circle
                  cx="100"
                  cy="100"
                  r="8"
                  fill="radial-gradient(circle at 40% 40%, #FF6B6B, #DC2626, #991B1B)"
                  style={{
                    filter: "drop-shadow(0 0 4px rgba(220,38,38,0.8))",
                  }}
                />
                <circle cx="98" cy="98" r="3" fill="white" opacity="0.6"/>
              </svg>
            </div>
          </div>
        </div>

        {/* The Pointer/Ticker - Professional flapper style */}
        {/* Container is FIXED - never moves */}
        <div
          className="absolute top-0 left-1/2 z-20"
          style={{
            transform: "translateX(-50%)",
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))",
          }}
        >
          <svg width="50" height="70" viewBox="0 0 50 70" className="-mt-2">
            <defs>
              <linearGradient id="pointerBody" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#DC2626"/>
                <stop offset="50%" stopColor="#EF4444"/>
                <stop offset="100%" stopColor="#B91C1C"/>
              </linearGradient>
              <linearGradient id="pointerShine" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="mountGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#DAA520"/>
                <stop offset="50%" stopColor="#FFD700"/>
                <stop offset="100%" stopColor="#B8860B"/>
              </linearGradient>
            </defs>

            {/* Pointer body - this part flicks */}
            <g
              className={tickerFlick ? "pointer-flick" : ""}
              style={{
                transformOrigin: "25px 55px",
                transition: tickerFlick ? "none" : "transform 0.1s ease-out",
              }}
            >
              <path
                d="M25 5 L15 55 Q15 60, 20 60 L30 60 Q35 60, 35 55 L25 5"
                fill="url(#pointerBody)"
                stroke="#7F1D1D"
                strokeWidth="1"
              />
              {/* Pointer shine */}
              <path
                d="M25 8 L18 50 L25 50 L25 8"
                fill="url(#pointerShine)"
              />
            </g>

            {/* Gold mounting bracket - FIXED, never moves */}
            <ellipse
              cx="25"
              cy="62"
              rx="16"
              ry="8"
              fill="url(#mountGrad)"
              stroke="#8B7355"
              strokeWidth="1"
            />

            {/* Mounting screws */}
            <circle cx="15" cy="62" r="2" fill="#B8860B" stroke="#8B7355" strokeWidth="0.5"/>
            <circle cx="35" cy="62" r="2" fill="#B8860B" stroke="#8B7355" strokeWidth="0.5"/>

            {/* Center gem on mount */}
            <circle cx="25" cy="62" r="4" fill="url(#hubGradient)" stroke="#8B7355" strokeWidth="0.5"/>
          </svg>
        </div>
      </div>

      {/* Premium Spin Button */}
      <button
        onClick={spin}
        disabled={isSpinning || games.length === 0}
        className={cn(
          "mt-12 relative group",
          "disabled:cursor-not-allowed"
        )}
      >
        {/* Button outer glow */}
        <div className={cn(
          "absolute -inset-4 rounded-2xl blur-xl transition-all duration-500",
          isSpinning
            ? "bg-amber-500/30 animate-pulse"
            : "bg-amber-500/20 group-hover:bg-amber-500/40"
        )} />

        {/* Button 3D base layer */}
        <div className="absolute inset-0 rounded-xl translate-y-2"
          style={{
            background: "linear-gradient(to bottom, #5D3A1A, #3D2512)",
          }}
        />

        {/* Button main surface */}
        <div className={cn(
          "relative px-12 py-5 rounded-xl transition-all duration-150",
          !isSpinning && "group-hover:translate-y-0.5 group-active:translate-y-1.5",
          isSpinning && "translate-y-1"
        )}
          style={{
            background: "linear-gradient(145deg, #DAA520, #FFD700, #DAA520)",
            boxShadow: "inset 0 2px 4px rgba(255,255,255,0.5), inset 0 -2px 4px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          {/* Button text with emboss effect */}
          <span className={cn(
            "text-xl font-black uppercase tracking-wider",
            "bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 bg-clip-text text-transparent",
            "drop-shadow-[0_1px_0_rgba(255,255,255,0.5)]",
            isSpinning && "opacity-70"
          )}>
            {isSpinning ? (
              <span className="flex items-center gap-3">
                <span className="inline-block animate-spin">⭐</span>
                SPINNING
              </span>
            ) : (
              "🎰 SPIN TO WIN"
            )}
          </span>

          {/* Inner highlight */}
          <div className="absolute inset-x-4 top-1 h-2 rounded-full bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </button>

      {/* Game counter badge */}
      <div className="mt-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-900/50 via-amber-800/50 to-amber-900/50 border border-amber-700/30">
        <span className="text-amber-200/80 text-sm font-medium tracking-wide">
          {games.length} Games Available
        </span>
      </div>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes pointerFlick {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(-15deg); }
          100% { transform: rotate(0deg); }
        }

        .pointer-flick {
          animation: pointerFlick 0.06s ease-out;
        }
      `}</style>
    </div>
  );
}
