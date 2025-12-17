"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const COLORS = {
  dark: "#0a0a0f",
  pink: "#ec4899",
  purple: "#a855f7",
  green: "#10b981",
  white: "#ffffff",
};

// Animation phases
type Phase =
  | "beer-pong-setup"
  | "ball-throw-forward"
  | "ball-throw-back"
  | "ball-to-deck"
  | "deal-cards"
  | "cards-to-center"
  | "dice-roll"
  | "pause"
  | "fade-out";

export function HeroAnimation() {
  const [phase, setPhase] = useState<Phase>("beer-pong-setup");
  const [isVisible, setIsVisible] = useState(true);

  const runSequence = useCallback(async () => {
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    while (true) {
      setIsVisible(true);
      setPhase("beer-pong-setup");
      await delay(800);

      setPhase("ball-throw-forward");
      await delay(1200);

      setPhase("ball-throw-back");
      await delay(1500);

      setPhase("ball-to-deck");
      await delay(1000);

      setPhase("deal-cards");
      await delay(2500);

      setPhase("cards-to-center");
      await delay(800);

      setPhase("dice-roll");
      await delay(2000);

      setPhase("pause");
      await delay(1000);

      setPhase("fade-out");
      await delay(600);
      setIsVisible(false);
      await delay(400);
    }
  }, []);

  useEffect(() => {
    runSequence();
  }, [runSequence]);

  return (
    <div className="relative w-full max-w-2xl mx-auto h-72 md:h-80 overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse at center, ${COLORS.purple}15 0%, transparent 70%)`,
        }}
      />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <svg
              viewBox="0 0 400 250"
              className="w-full h-full"
              style={{ overflow: "visible" }}
            >
              <defs>
                {/* Gradients */}
                <linearGradient id="tableGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={COLORS.purple} stopOpacity="0.1" />
                  <stop offset="50%" stopColor={COLORS.purple} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={COLORS.purple} stopOpacity="0.1" />
                </linearGradient>
                <radialGradient id="ballGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={COLORS.white} />
                  <stop offset="70%" stopColor={COLORS.pink} />
                  <stop offset="100%" stopColor={COLORS.pink} stopOpacity="0" />
                </radialGradient>
                <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.purple} stopOpacity="0.4" />
                  <stop offset="100%" stopColor={COLORS.pink} stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Beer Pong Scene */}
              <BeerPongScene phase={phase} />

              {/* Flying Ball */}
              <FlyingBall phase={phase} />

              {/* Card Deck & Dealt Cards */}
              <CardScene phase={phase} />

              {/* Dice */}
              <DiceScene phase={phase} />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Phase indicator dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {["beer-pong", "cards", "dice"].map((scene, i) => {
          const isActive =
            (scene === "beer-pong" && ["beer-pong-setup", "ball-throw-forward", "ball-throw-back"].includes(phase)) ||
            (scene === "cards" && ["ball-to-deck", "deal-cards", "cards-to-center"].includes(phase)) ||
            (scene === "dice" && ["dice-roll", "pause"].includes(phase));
          return (
            <div
              key={scene}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                isActive
                  ? "w-6 bg-gradient-to-r from-pink-500 to-purple-500"
                  : "w-1.5 bg-white/20"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

// ============================================
// BEER PONG SCENE
// ============================================
function BeerPongScene({ phase }: { phase: Phase }) {
  const showScene = ["beer-pong-setup", "ball-throw-forward", "ball-throw-back"].includes(phase);

  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: showScene ? 1 : 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Table in perspective */}
      <motion.path
        d="M 50 220 L 350 220 L 300 120 L 100 120 Z"
        fill="url(#tableGrad)"
        stroke={COLORS.purple}
        strokeWidth="1"
        strokeOpacity="0.5"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{
          opacity: showScene ? 1 : 0,
          pathLength: showScene ? 1 : 0
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Player (over-shoulder view) - just shoulder/arm visible */}
      <motion.g
        initial={{ opacity: 0, x: -30 }}
        animate={{
          opacity: showScene ? 0.8 : 0,
          x: showScene ? 0 : -30
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Shoulder/body silhouette on left */}
        <path
          d="M -20 280 Q 30 200 60 160 L 80 170 Q 50 210 40 280 Z"
          fill={COLORS.purple}
          opacity="0.3"
        />
        {/* Arm throwing */}
        <motion.line
          x1="60"
          y1="165"
          x2="100"
          y2="140"
          stroke={COLORS.purple}
          strokeWidth="4"
          strokeLinecap="round"
          animate={phase === "ball-throw-forward" ? {
            x2: [100, 130, 100],
            y2: [140, 120, 140],
          } : {}}
          transition={{ duration: 0.3 }}
        />
      </motion.g>

      {/* Cups at far end (opponent's side) */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: showScene ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* 6 cups in triangle - rendered small due to perspective */}
        {[
          { cx: 180, cy: 130 }, { cx: 200, cy: 130 }, { cx: 220, cy: 130 },
          { cx: 190, cy: 125 }, { cx: 210, cy: 125 },
          { cx: 200, cy: 120 },
        ].map((cup, i) => (
          <g key={i}>
            <ellipse
              cx={cup.cx}
              cy={cup.cy}
              rx="8"
              ry="4"
              fill={COLORS.pink}
              opacity="0.6"
            />
            <ellipse
              cx={cup.cx}
              cy={cup.cy}
              rx="8"
              ry="4"
              fill="none"
              stroke={COLORS.pink}
              strokeWidth="1"
            />
          </g>
        ))}
      </motion.g>

      {/* Opponent stick figure at far end */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: showScene ? 0.7 : 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {/* Head */}
        <circle cx="200" cy="85" r="8" fill="none" stroke={COLORS.green} strokeWidth="1.5" />
        {/* Body */}
        <line x1="200" y1="93" x2="200" y2="115" stroke={COLORS.green} strokeWidth="1.5" />
        {/* Arms - animated when throwing back */}
        <motion.line
          x1="200"
          y1="100"
          x2="215"
          y2="95"
          stroke={COLORS.green}
          strokeWidth="1.5"
          animate={phase === "ball-throw-back" ? {
            x2: [215, 185, 215],
            y2: [95, 85, 95],
          } : {}}
          transition={{ duration: 0.4 }}
        />
        <line x1="200" y1="100" x2="185" y2="105" stroke={COLORS.green} strokeWidth="1.5" />
      </motion.g>
    </motion.g>
  );
}

// ============================================
// FLYING BALL (transitions to card deck)
// ============================================
function FlyingBall({ phase }: { phase: Phase }) {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      if (phase === "ball-throw-forward") {
        // Ball goes forward toward cups
        await controls.start({
          cx: [100, 150, 200],
          cy: [150, 100, 125],
          r: [6, 5, 4],
          opacity: 1,
          transition: { duration: 1.2, ease: "easeOut" }
        });
      } else if (phase === "ball-throw-back") {
        // Ball comes back AT camera - gets bigger
        await controls.start({
          cx: [200, 200, 200],
          cy: [125, 140, 160],
          r: [4, 20, 80],
          opacity: 1,
          transition: { duration: 1.5, ease: "easeIn" }
        });
      } else if (phase === "ball-to-deck") {
        // Morphing handled by card scene
        controls.start({ opacity: 0, transition: { duration: 0.3 } });
      } else if (!["ball-throw-forward", "ball-throw-back"].includes(phase)) {
        controls.set({ opacity: 0, r: 6, cx: 100, cy: 150 });
      }
    };
    animate();
  }, [phase, controls]);

  return (
    <motion.circle
      animate={controls}
      fill="url(#ballGlow)"
      style={{
        filter: `drop-shadow(0 0 10px ${COLORS.pink})`,
      }}
    />
  );
}

// ============================================
// CARD SCENE (deck + dealt cards)
// ============================================
function CardScene({ phase }: { phase: Phase }) {
  const showDeck = ["ball-to-deck", "deal-cards", "cards-to-center"].includes(phase);
  const showCards = phase === "deal-cards";
  const convergeCards = phase === "cards-to-center";

  // 8 card positions in a circle
  const cardPositions = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * 45 - 90) * (Math.PI / 180); // Start from top, go clockwise
    const radius = 70;
    return {
      x: 200 + Math.cos(angle) * radius,
      y: 140 + Math.sin(angle) * radius,
      rotation: i * 45,
    };
  });

  return (
    <motion.g>
      {/* Central deck - morphs from ball */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showDeck ? 1 : 0,
          scale: showDeck ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "backOut" }}
      >
        {/* Deck shadow/glow */}
        <motion.rect
          x="175"
          y="120"
          width="50"
          height="70"
          rx="4"
          fill={COLORS.purple}
          opacity="0.2"
          style={{ filter: "blur(10px)" }}
        />
        {/* Deck stack effect */}
        {[0, 1, 2].map((i) => (
          <motion.rect
            key={i}
            x={178 + i}
            y={123 - i * 2}
            width="44"
            height="62"
            rx="3"
            fill={COLORS.dark}
            stroke={COLORS.purple}
            strokeWidth="1"
            opacity={0.5 + i * 0.2}
          />
        ))}
        {/* Top card */}
        <motion.rect
          x="180"
          y="117"
          width="40"
          height="56"
          rx="3"
          fill="url(#cardGrad)"
          stroke={COLORS.pink}
          strokeWidth="1.5"
        />
        {/* Card back design */}
        <motion.rect
          x="186"
          y="125"
          width="28"
          height="40"
          rx="2"
          fill="none"
          stroke={COLORS.pink}
          strokeWidth="0.5"
          opacity="0.5"
        />
      </motion.g>

      {/* Dealt cards */}
      {cardPositions.map((pos, i) => (
        <motion.g
          key={i}
          initial={{
            x: 200,
            y: 145,
            opacity: 0,
            scale: 0,
            rotate: 0,
          }}
          animate={{
            x: convergeCards ? 200 : showCards ? pos.x : 200,
            y: convergeCards ? 145 : showCards ? pos.y : 145,
            opacity: (showCards || convergeCards) ? 1 : 0,
            scale: convergeCards ? 0 : showCards ? 0.8 : 0,
            rotate: convergeCards ? 0 : showCards ? pos.rotation : 0,
          }}
          transition={{
            duration: convergeCards ? 0.5 : 0.4,
            delay: showCards ? i * 0.15 : 0,
            ease: convergeCards ? "easeIn" : "backOut",
          }}
        >
          {/* Card */}
          <rect
            x="-18"
            y="-25"
            width="36"
            height="50"
            rx="3"
            fill={COLORS.dark}
            stroke={i % 2 === 0 ? COLORS.pink : COLORS.purple}
            strokeWidth="1.5"
            style={{
              filter: `drop-shadow(0 0 5px ${i % 2 === 0 ? COLORS.pink : COLORS.purple}40)`,
            }}
          />
          {/* Card inner design */}
          <rect
            x="-12"
            y="-18"
            width="24"
            height="36"
            rx="2"
            fill="none"
            stroke={i % 2 === 0 ? COLORS.pink : COLORS.purple}
            strokeWidth="0.5"
            opacity="0.4"
          />
        </motion.g>
      ))}
    </motion.g>
  );
}

// ============================================
// DICE SCENE
// ============================================
function DiceScene({ phase }: { phase: Phase }) {
  const showDice = phase === "dice-roll" || phase === "pause";

  const dotPositions: Record<number, { x: number; y: number }[]> = {
    5: [
      { x: -8, y: -8 }, { x: 8, y: -8 },
      { x: 0, y: 0 },
      { x: -8, y: 8 }, { x: 8, y: 8 },
    ],
    3: [
      { x: -8, y: -8 },
      { x: 0, y: 0 },
      { x: 8, y: 8 },
    ],
  };

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: showDice ? 1 : 0,
        scale: showDice ? 1 : 0,
      }}
      transition={{
        duration: 0.6,
        ease: "backOut",
      }}
    >
      {/* Die 1 */}
      <motion.g
        initial={{ x: 160, y: 140, rotate: -720 }}
        animate={{
          x: showDice ? 160 : 200,
          y: showDice ? 140 : 145,
          rotate: showDice ? -15 : -720,
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Glow */}
        <rect
          x="-22"
          y="-22"
          width="44"
          height="44"
          rx="8"
          fill={COLORS.pink}
          opacity="0.3"
          style={{ filter: "blur(8px)" }}
        />
        {/* Die face */}
        <rect
          x="-20"
          y="-20"
          width="40"
          height="40"
          rx="6"
          fill={COLORS.dark}
          stroke={COLORS.pink}
          strokeWidth="2"
        />
        {/* Dots */}
        {dotPositions[5].map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r="4"
            fill={COLORS.pink}
            initial={{ scale: 0 }}
            animate={{ scale: showDice ? 1 : 0 }}
            transition={{ delay: 0.5 + i * 0.05, duration: 0.2, ease: "backOut" }}
          />
        ))}
      </motion.g>

      {/* Die 2 */}
      <motion.g
        initial={{ x: 240, y: 140, rotate: 720 }}
        animate={{
          x: showDice ? 240 : 200,
          y: showDice ? 140 : 145,
          rotate: showDice ? 10 : 720,
        }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
      >
        {/* Glow */}
        <rect
          x="-22"
          y="-22"
          width="44"
          height="44"
          rx="8"
          fill={COLORS.green}
          opacity="0.3"
          style={{ filter: "blur(8px)" }}
        />
        {/* Die face */}
        <rect
          x="-20"
          y="-20"
          width="40"
          height="40"
          rx="6"
          fill={COLORS.dark}
          stroke={COLORS.green}
          strokeWidth="2"
        />
        {/* Dots */}
        {dotPositions[3].map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r="4"
            fill={COLORS.green}
            initial={{ scale: 0 }}
            animate={{ scale: showDice ? 1 : 0 }}
            transition={{ delay: 0.6 + i * 0.05, duration: 0.2, ease: "backOut" }}
          />
        ))}
      </motion.g>

      {/* Score display */}
      <motion.text
        x="200"
        y="200"
        textAnchor="middle"
        fontSize="24"
        fontWeight="bold"
        fill="url(#scoreGrad)"
        initial={{ opacity: 0, y: 210 }}
        animate={{
          opacity: showDice ? 1 : 0,
          y: showDice ? 200 : 210,
        }}
        transition={{ delay: 1, duration: 0.4 }}
        style={{
          filter: `drop-shadow(0 0 10px ${COLORS.green}80)`,
        }}
      >
        8!
      </motion.text>

      {/* Score gradient */}
      <defs>
        <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={COLORS.green} />
          <stop offset="100%" stopColor={COLORS.purple} />
        </linearGradient>
      </defs>
    </motion.g>
  );
}
