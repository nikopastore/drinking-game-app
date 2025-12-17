"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COLORS = {
  bg: "#0a0a0f",
  pink: "#ec4899",
  purple: "#a855f7",
  cyan: "#22d3ee",
  green: "#10b981",
  red: "#ef4444",
  white: "#ffffff",
};

type Scene = "cards" | "dice" | "cups";

export function HeroAnimation() {
  const [currentScene, setCurrentScene] = useState<Scene>("cards");
  const scenes: Scene[] = ["cards", "dice", "cups"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScene((prev) => {
        const idx = scenes.indexOf(prev);
        return scenes[(idx + 1) % scenes.length];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto h-44 md:h-52 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse at center, ${COLORS.purple}25 0%, transparent 70%)`,
        }}
      />

      {/* Scene container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {currentScene === "cards" && <CardsScene />}
          {currentScene === "dice" && <DiceScene />}
          {currentScene === "cups" && <CupsScene />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ============================================
// CARDS SCENE - Fanning cards with one flipping
// ============================================
function CardsScene() {
  const cardCount = 5;
  const fanAngle = 8; // degrees between cards
  const centerIndex = Math.floor(cardCount / 2); // Center card index (2)

  return (
    <div className="relative" style={{ perspective: "1000px" }}>
      {/* Card fan */}
      {[...Array(cardCount)].map((_, i) => {
        const rotation = (i - centerIndex) * fanAngle;
        const isCenterCard = i === centerIndex;
        // Center card gets highest z-index so it appears on top
        const zIndex = isCenterCard ? cardCount : i;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: 80,
              height: 112,
              left: "50%",
              marginLeft: -40,
              transformOrigin: "center bottom",
              zIndex,
            }}
            initial={{ rotate: 0, y: 50, opacity: 0 }}
            animate={{
              rotate: rotation,
              y: isCenterCard ? -10 : 0, // Center card raised slightly
              opacity: 1,
            }}
            transition={{
              delay: i * 0.1,
              duration: 0.5,
              ease: "backOut",
            }}
          >
            <PlayingCard
              suit={["♠", "♥", "♦", "♣", "♥"][i]}
              value={["10", "J", "Q", "K", "A"][i]}
              isHighlighted={isCenterCard}
              flipDelay={isCenterCard ? 1.0 : undefined}
            />
          </motion.div>
        );
      })}

      {/* Floating sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 2 === 0 ? COLORS.pink : COLORS.purple,
            left: `${30 + i * 10}%`,
            top: "20%",
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function PlayingCard({
  suit,
  value,
  isHighlighted,
  flipDelay,
}: {
  suit: string;
  value: string;
  isHighlighted?: boolean;
  flipDelay?: number;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (flipDelay !== undefined) {
      const timer = setTimeout(() => setIsFlipped(true), flipDelay * 1000);
      return () => clearTimeout(timer);
    }
  }, [flipDelay]);

  return (
    <motion.div
      className="w-full h-full relative"
      style={{ transformStyle: "preserve-3d" }}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Card Back */}
      <div
        className="absolute inset-0 rounded-lg border-2 flex items-center justify-center overflow-hidden"
        style={{
          backfaceVisibility: "hidden",
          background: `linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%)`,
          borderColor: isHighlighted ? COLORS.pink : `${COLORS.purple}60`,
          boxShadow: isHighlighted
            ? `0 0 20px ${COLORS.pink}50, 0 10px 40px rgba(0,0,0,0.4)`
            : "0 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        {/* SipWiki Logo on card back */}
        <div className="flex flex-col items-center justify-center">
          {/* Wine glass icon */}
          <svg viewBox="0 0 40 50" className="w-8 h-10 mb-1">
            <defs>
              <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={COLORS.pink} />
                <stop offset="100%" stopColor={COLORS.purple} />
              </linearGradient>
            </defs>
            {/* Glass bowl */}
            <path
              d="M10 2 L30 2 L27 22 Q25 30 20 34 Q15 30 13 22 Z"
              fill="url(#cardGradient)"
              opacity="0.9"
            />
            {/* Stem */}
            <rect x="18" y="34" width="4" height="10" fill="url(#cardGradient)" />
            {/* Base */}
            <ellipse cx="20" cy="46" rx="10" ry="3" fill="url(#cardGradient)" />
          </svg>
          {/* SipWiki text */}
          <span
            className="text-[8px] font-bold tracking-tight"
            style={{
              background: `linear-gradient(135deg, ${COLORS.pink}, ${COLORS.purple})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SipWiki
          </span>
        </div>
      </div>

      {/* Card Front */}
      <div
        className="absolute inset-0 rounded-lg border-2"
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          background: "#1e1e2e",
          borderColor: COLORS.purple,
          boxShadow: `0 0 20px ${COLORS.purple}30, 0 10px 40px rgba(0,0,0,0.4)`,
        }}
      >
        <div
          className="absolute top-2 left-2 text-lg font-bold"
          style={{ color: COLORS.white }}
        >
          {value}
        </div>
        <div
          className="absolute top-6 left-2 text-sm"
          style={{ color: COLORS.white }}
        >
          {suit}
        </div>
        <div
          className="absolute bottom-2 right-2 text-lg font-bold rotate-180"
          style={{ color: COLORS.white }}
        >
          {value}
        </div>
        <div
          className="absolute text-3xl"
          style={{
            color: COLORS.white,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {suit}
        </div>
      </div>
    </motion.div>
  );
}

// ============================================
// DICE SCENE - Two dice tumbling and landing
// ============================================
function DiceScene() {
  return (
    <div className="relative flex items-center justify-center gap-6">
      {/* Die 1 */}
      <motion.div
        initial={{ y: -100, rotate: -360, opacity: 0 }}
        animate={{ y: 0, rotate: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.2,
        }}
      >
        <Die value={5} color={COLORS.pink} />
      </motion.div>

      {/* Die 2 */}
      <motion.div
        initial={{ y: -100, rotate: 360, opacity: 0 }}
        animate={{ y: 0, rotate: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }}
      >
        <Die value={3} color={COLORS.cyan} />
      </motion.div>

      {/* Bounce particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: i % 2 === 0 ? COLORS.pink : COLORS.cyan,
            bottom: 0,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: Math.cos((i * Math.PI) / 4) * 60,
            y: Math.sin((i * Math.PI) / 4) * -40 - 20,
          }}
          transition={{
            duration: 0.8,
            delay: 0.8 + i * 0.05,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

function Die({ value, color }: { value: number; color: string }) {
  return (
    <div
      className="relative w-20 h-20 rounded-xl border-2 flex items-center justify-center"
      style={{
        background: `linear-gradient(145deg, ${color}15 0%, ${color}05 100%)`,
        borderColor: color,
        boxShadow: `0 0 30px ${color}40, inset 0 0 20px ${color}10`,
      }}
    >
      {/* Grid container for dots - 3x3 grid */}
      <div className="grid grid-cols-3 grid-rows-3 gap-1 w-14 h-14">
        {getDotPattern(value).map((show, i) => (
          <div key={i} className="flex items-center justify-center">
            {show && (
              <motion.div
                className="w-3 h-3 rounded-full"
                style={{
                  background: color,
                  boxShadow: `0 0 10px ${color}`,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + i * 0.05, type: "spring" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Returns 9-element array for 3x3 grid: true = show dot, false = empty
function getDotPattern(value: number): boolean[] {
  const patterns: Record<number, boolean[]> = {
    1: [
      false, false, false,
      false, true,  false,
      false, false, false,
    ],
    2: [
      true,  false, false,
      false, false, false,
      false, false, true,
    ],
    3: [
      true,  false, false,
      false, true,  false,
      false, false, true,
    ],
    4: [
      true,  false, true,
      false, false, false,
      true,  false, true,
    ],
    5: [
      true,  false, true,
      false, true,  false,
      true,  false, true,
    ],
    6: [
      true,  false, true,
      true,  false, true,
      true,  false, true,
    ],
  };
  return patterns[value] || patterns[1];
}

// ============================================
// CUPS SCENE - Beer pong formation with ball
// ============================================
function CupsScene() {
  // 6 cup triangle formation
  const cupPositions = [
    { x: 0, y: 0 },
    { x: -30, y: 35 }, { x: 30, y: 35 },
    { x: -60, y: 70 }, { x: 0, y: 70 }, { x: 60, y: 70 },
  ];

  return (
    <div className="relative">
      {/* Cups */}
      <div className="relative" style={{ width: 180, height: 120 }}>
        {cupPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: 90 + pos.x - 20, top: pos.y }}
            initial={{ y: 30, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              delay: i * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
          >
            <Cup />
          </motion.div>
        ))}
      </div>

      {/* Bouncing ball */}
      <motion.div
        className="absolute w-5 h-5 rounded-full bg-white"
        style={{
          left: "50%",
          marginLeft: -10,
          top: -60,
          boxShadow: `0 0 15px ${COLORS.white}, 0 0 30px ${COLORS.pink}50`,
        }}
        animate={{
          y: [0, 80, 40, 70, 55],
          x: [0, 30, 15, 5, 0],
          scale: [1, 0.9, 1, 0.95, 1],
        }}
        transition={{
          duration: 1.5,
          delay: 0.8,
          ease: "easeOut",
          times: [0, 0.4, 0.6, 0.8, 1],
        }}
      />

      {/* Splash effect */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: COLORS.red,
            left: "50%",
            top: 0,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            x: Math.cos((i * Math.PI) / 3) * 25,
            y: Math.sin((i * Math.PI) / 3) * 15 + 10,
          }}
          transition={{
            duration: 0.5,
            delay: 2.2 + i * 0.03,
            ease: "easeOut",
          }}
        />
      ))}

      {/* "Nice shot!" text */}
      <motion.div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-bold whitespace-nowrap"
        style={{
          color: COLORS.green,
          textShadow: `0 0 20px ${COLORS.green}80`,
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.3 }}
      >
        Nice shot!
      </motion.div>
    </div>
  );
}

function Cup() {
  return (
    <div className="relative w-10 h-12">
      {/* Cup glow */}
      <div
        className="absolute inset-0 rounded-b-lg blur-md opacity-40"
        style={{ background: COLORS.red }}
      />

      {/* Cup body - trapezoid shape */}
      <svg viewBox="0 0 40 48" className="w-full h-full">
        {/* Cup body */}
        <path
          d="M 5 0 L 35 0 L 38 48 L 2 48 Z"
          fill={`${COLORS.red}90`}
          stroke={COLORS.red}
          strokeWidth="1"
        />
        {/* Liquid top ellipse */}
        <ellipse
          cx="20"
          cy="6"
          rx="15"
          ry="5"
          fill={COLORS.red}
          opacity="0.7"
        />
        {/* Rim highlight */}
        <ellipse
          cx="20"
          cy="2"
          rx="14"
          ry="4"
          fill="none"
          stroke={`${COLORS.red}`}
          strokeWidth="2"
        />
        {/* Shine */}
        <path
          d="M 10 8 L 12 40"
          stroke={`${COLORS.white}30`}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default HeroAnimation;
