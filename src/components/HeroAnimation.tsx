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
                {/* Table gradient - 3D effect */}
                <linearGradient id="tableGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.purple} stopOpacity="0.4" />
                  <stop offset="50%" stopColor={COLORS.purple} stopOpacity="0.2" />
                  <stop offset="100%" stopColor={COLORS.purple} stopOpacity="0.1" />
                </linearGradient>
                {/* Table side gradient */}
                <linearGradient id="tableSideGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.purple} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={COLORS.purple} stopOpacity="0.6" />
                </linearGradient>
                {/* Ball glow */}
                <radialGradient id="ballGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={COLORS.white} />
                  <stop offset="70%" stopColor={COLORS.pink} />
                  <stop offset="100%" stopColor={COLORS.pink} stopOpacity="0" />
                </radialGradient>
                {/* Cup gradients for 3D effect */}
                <linearGradient id="cupGradPink" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.pink} stopOpacity="0.8" />
                  <stop offset="50%" stopColor={COLORS.pink} stopOpacity="0.5" />
                  <stop offset="100%" stopColor={COLORS.pink} stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="cupGradPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={COLORS.purple} stopOpacity="0.8" />
                  <stop offset="50%" stopColor={COLORS.purple} stopOpacity="0.5" />
                  <stop offset="100%" stopColor={COLORS.purple} stopOpacity="0.3" />
                </linearGradient>
                {/* Card gradient */}
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
  const isThrowing = phase === "ball-throw-forward";
  const isOpponentThrowing = phase === "ball-throw-back";

  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: showScene ? 1 : 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* 3D Table - viewed from behind close player */}
      {/* Table top surface */}
      <motion.path
        d="M 80 220 L 320 220 L 280 95 L 120 95 Z"
        fill="url(#tableGrad)"
        stroke={COLORS.purple}
        strokeWidth="1"
        strokeOpacity="0.8"
        initial={{ opacity: 0 }}
        animate={{ opacity: showScene ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
      {/* Table front edge (3D depth) */}
      <motion.path
        d="M 80 220 L 320 220 L 320 228 L 80 228 Z"
        fill="url(#tableSideGrad)"
        stroke={COLORS.purple}
        strokeWidth="0.5"
        strokeOpacity="0.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: showScene ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
      {/* Table left leg hint */}
      <motion.line
        x1="90" y1="228" x2="90" y2="250"
        stroke={COLORS.purple}
        strokeWidth="3"
        strokeOpacity="0.4"
        strokeLinecap="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: showScene ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
      {/* Table right leg hint */}
      <motion.line
        x1="310" y1="228" x2="310" y2="250"
        stroke={COLORS.purple}
        strokeWidth="3"
        strokeOpacity="0.4"
        strokeLinecap="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: showScene ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Table center line */}
      <motion.line
        x1="200" y1="220" x2="200" y2="95"
        stroke={COLORS.purple}
        strokeWidth="1"
        strokeOpacity="0.3"
        strokeDasharray="4 4"
        initial={{ opacity: 0 }}
        animate={{ opacity: showScene ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* 3D Cups at far end (opponent's side) */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: showScene ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* 6 cups in triangle formation - 3D style */}
        {[
          { cx: 175, cy: 112, size: 0.8 },
          { cx: 200, cy: 112, size: 0.8 },
          { cx: 225, cy: 112, size: 0.8 },
          { cx: 187, cy: 104, size: 0.75 },
          { cx: 213, cy: 104, size: 0.75 },
          { cx: 200, cy: 96, size: 0.7 },
        ].map((cup, i) => (
          <g key={i}>
            {/* Shadow/glow under cup */}
            <ellipse
              cx={cup.cx}
              cy={cup.cy + 8 * cup.size}
              rx={12 * cup.size}
              ry={4 * cup.size}
              fill={COLORS.pink}
              opacity="0.15"
              style={{ filter: "blur(3px)" }}
            />
            {/* Cup body (trapezoid shape for 3D) */}
            <path
              d={`M ${cup.cx - 8 * cup.size} ${cup.cy}
                  L ${cup.cx - 10 * cup.size} ${cup.cy + 18 * cup.size}
                  L ${cup.cx + 10 * cup.size} ${cup.cy + 18 * cup.size}
                  L ${cup.cx + 8 * cup.size} ${cup.cy} Z`}
              fill="url(#cupGradPink)"
              stroke={COLORS.pink}
              strokeWidth="1"
            />
            {/* Cup rim (ellipse at top) */}
            <ellipse
              cx={cup.cx}
              cy={cup.cy}
              rx={8 * cup.size}
              ry={3 * cup.size}
              fill={COLORS.pink}
              opacity="0.3"
            />
            <ellipse
              cx={cup.cx}
              cy={cup.cy}
              rx={8 * cup.size}
              ry={3 * cup.size}
              fill="none"
              stroke={COLORS.pink}
              strokeWidth="1.5"
            />
            {/* Liquid inside hint */}
            <ellipse
              cx={cup.cx}
              cy={cup.cy + 2 * cup.size}
              rx={6 * cup.size}
              ry={2 * cup.size}
              fill={COLORS.pink}
              opacity="0.5"
            />
          </g>
        ))}
      </motion.g>

      {/* Opponent stick figure at far end (smaller due to perspective) */}
      <motion.g
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: showScene ? 1 : 0, y: showScene ? 0 : -10 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Head */}
        <circle cx="200" cy="68" r="7" fill="none" stroke={COLORS.white} strokeWidth="1.5" />
        {/* Body */}
        <line x1="200" y1="75" x2="200" y2="95" stroke={COLORS.white} strokeWidth="1.5" />
        {/* Left arm (static) */}
        <line x1="200" y1="80" x2="186" y2="88" stroke={COLORS.white} strokeWidth="1.5" strokeLinecap="round" />
        {/* Right arm (throwing arm) */}
        <motion.path
          d="M 200 80 Q 210 78 214 85"
          fill="none"
          stroke={COLORS.white}
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ d: "M 200 80 Q 210 78 214 85" }}
          animate={isOpponentThrowing ? {
            d: [
              "M 200 80 Q 210 78 214 85",
              "M 200 80 Q 206 70 200 62",
              "M 200 80 Q 194 72 186 75",
              "M 200 80 Q 210 78 214 85",
            ]
          } : { d: "M 200 80 Q 210 78 214 85" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        {/* Legs */}
        <line x1="200" y1="95" x2="192" y2="105" stroke={COLORS.white} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="200" y1="95" x2="208" y2="105" stroke={COLORS.white} strokeWidth="1.5" strokeLinecap="round" />
      </motion.g>

      {/* Close player (full body, seen from behind/above) - larger, bottom center */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showScene ? 1 : 0, y: showScene ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* Head (seen from behind - just circle) */}
        <circle cx="200" cy="185" r="12" fill="none" stroke={COLORS.white} strokeWidth="2" />

        {/* Neck */}
        <line x1="200" y1="197" x2="200" y2="203" stroke={COLORS.white} strokeWidth="2" />

        {/* Shoulders/upper body */}
        <line x1="175" y1="210" x2="225" y2="210" stroke={COLORS.white} strokeWidth="2" strokeLinecap="round" />

        {/* Torso */}
        <line x1="200" y1="203" x2="200" y2="235" stroke={COLORS.white} strokeWidth="2" />

        {/* Left arm (resting) */}
        <motion.path
          d="M 175 210 Q 165 225 170 240"
          fill="none"
          stroke={COLORS.white}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Right arm (throwing arm - animated) */}
        <motion.path
          d="M 225 210 Q 235 200 245 195"
          fill="none"
          stroke={COLORS.white}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ d: "M 225 210 Q 235 220 240 230" }}
          animate={isThrowing ? {
            d: [
              "M 225 210 Q 240 200 250 185",  // Wind up
              "M 225 210 Q 250 190 260 170",  // Peak of throw
              "M 225 210 Q 245 205 255 200",  // Follow through
              "M 225 210 Q 235 220 240 230",  // Rest
            ]
          } : { d: "M 225 210 Q 235 220 240 230" }}
          transition={{
            duration: 1.0,
            ease: [0.4, 0, 0.2, 1],
            times: [0, 0.3, 0.6, 1]
          }}
        />

        {/* Legs (slight perspective, spread stance) */}
        <line x1="195" y1="235" x2="180" y2="270" stroke={COLORS.white} strokeWidth="2" strokeLinecap="round" />
        <line x1="205" y1="235" x2="220" y2="270" stroke={COLORS.white} strokeWidth="2" strokeLinecap="round" />
      </motion.g>

      {/* Player's 3D cups (close to camera, bottom of table) */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: showScene ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {/* 6 cups in triangle - larger due to being closer */}
        {[
          { cx: 155, cy: 185, size: 1.1 },
          { cx: 200, cy: 185, size: 1.1 },
          { cx: 245, cy: 185, size: 1.1 },
          { cx: 177, cy: 198, size: 1.15 },
          { cx: 223, cy: 198, size: 1.15 },
          { cx: 200, cy: 210, size: 1.2 },
        ].map((cup, i) => (
          <g key={`near-${i}`}>
            {/* Shadow/glow under cup */}
            <ellipse
              cx={cup.cx}
              cy={cup.cy + 12 * cup.size}
              rx={14 * cup.size}
              ry={5 * cup.size}
              fill={COLORS.purple}
              opacity="0.15"
              style={{ filter: "blur(4px)" }}
            />
            {/* Cup body (trapezoid shape for 3D) */}
            <path
              d={`M ${cup.cx - 10 * cup.size} ${cup.cy}
                  L ${cup.cx - 12 * cup.size} ${cup.cy + 22 * cup.size}
                  L ${cup.cx + 12 * cup.size} ${cup.cy + 22 * cup.size}
                  L ${cup.cx + 10 * cup.size} ${cup.cy} Z`}
              fill="url(#cupGradPurple)"
              stroke={COLORS.purple}
              strokeWidth="1"
            />
            {/* Cup rim (ellipse at top) */}
            <ellipse
              cx={cup.cx}
              cy={cup.cy}
              rx={10 * cup.size}
              ry={4 * cup.size}
              fill={COLORS.purple}
              opacity="0.3"
            />
            <ellipse
              cx={cup.cx}
              cy={cup.cy}
              rx={10 * cup.size}
              ry={4 * cup.size}
              fill="none"
              stroke={COLORS.purple}
              strokeWidth="1.5"
            />
            {/* Liquid inside hint */}
            <ellipse
              cx={cup.cx}
              cy={cup.cy + 3 * cup.size}
              rx={7 * cup.size}
              ry={2.5 * cup.size}
              fill={COLORS.purple}
              opacity="0.5"
            />
          </g>
        ))}
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
        // Ball starts from close player's hand (right side) and arcs to far cups
        await controls.start({
          cx: [260, 230, 200],
          cy: [170, 80, 110],
          r: [8, 6, 5],
          opacity: 1,
          transition: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }
        });
      } else if (phase === "ball-throw-back") {
        // Opponent throws - ball comes toward camera, growing larger
        await controls.start({
          cx: [200, 200, 200],
          cy: [85, 120, 150],
          r: [5, 25, 100],
          opacity: 1,
          transition: { duration: 1.3, ease: "easeIn" }
        });
      } else if (phase === "ball-to-deck") {
        // Morphing handled by card scene
        controls.start({ opacity: 0, transition: { duration: 0.3 } });
      } else if (!["ball-throw-forward", "ball-throw-back"].includes(phase)) {
        controls.set({ opacity: 0, r: 8, cx: 260, cy: 170 });
      }
    };
    animate();
  }, [phase, controls]);

  return (
    <motion.circle
      animate={controls}
      fill="url(#ballGlow)"
      style={{
        filter: `drop-shadow(0 0 15px ${COLORS.pink})`,
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
