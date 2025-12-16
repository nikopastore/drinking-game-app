"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Scene = "beer-pong" | "cards" | "dice";

const SCENE_DURATION = 5000; // 5 seconds per scene

const colors = {
  pink: "#ec4899",
  purple: "#a855f7",
  green: "#10b981",
  dark: "#0a0a0f",
};

export function HeroAnimation() {
  const [currentScene, setCurrentScene] = useState<Scene>("beer-pong");
  const scenes: Scene[] = ["beer-pong", "cards", "dice"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScene((prev) => {
        const currentIndex = scenes.indexOf(prev);
        return scenes[(currentIndex + 1) % scenes.length];
      });
    }, SCENE_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto h-72 md:h-80">
      {/* Ambient glow background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse at center, ${colors.purple}20 0%, transparent 70%)`,
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {currentScene === "beer-pong" && <BeerPongScene />}
          {currentScene === "cards" && <CardsScene />}
          {currentScene === "dice" && <DiceScene />}
        </motion.div>
      </AnimatePresence>

      {/* Scene indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {scenes.map((scene) => (
          <button
            key={scene}
            onClick={() => setCurrentScene(scene)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentScene === scene
                ? "w-8 bg-gradient-to-r from-pink-500 to-purple-500"
                : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ============================================
// BEER PONG SCENE
// ============================================
function BeerPongScene() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Table surface hint */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-16 w-3/4 h-1 rounded-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${colors.purple}40, transparent)`,
        }}
      />

      {/* Left cup formation */}
      <div className="absolute left-1/4 -translate-x-1/2 bottom-20">
        <CupFormation delay={0} side="left" />
      </div>

      {/* Right cup formation */}
      <div className="absolute right-1/4 translate-x-1/2 bottom-20">
        <CupFormation delay={0.2} side="right" />
      </div>

      {/* Animated ball with trail */}
      <BallWithTrail />
    </div>
  );
}

function CupFormation({ delay, side }: { delay: number; side: "left" | "right" }) {
  const cupPositions = [
    // Row 1 (back) - 4 cups
    { x: 0, y: 0 }, { x: 24, y: 0 }, { x: 48, y: 0 }, { x: 72, y: 0 },
    // Row 2 - 3 cups
    { x: 12, y: -20 }, { x: 36, y: -20 }, { x: 60, y: -20 },
    // Row 3 - 2 cups
    { x: 24, y: -40 }, { x: 48, y: -40 },
    // Row 4 (front) - 1 cup
    { x: 36, y: -60 },
  ];

  return (
    <div className="relative" style={{ width: 90, height: 80 }}>
      {cupPositions.map((pos, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: delay + i * 0.05,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          className="absolute"
          style={{ left: pos.x, top: pos.y + 60 }}
        >
          <Cup glowColor={side === "left" ? colors.pink : colors.purple} />
        </motion.div>
      ))}
    </div>
  );
}

function Cup({ glowColor }: { glowColor: string }) {
  return (
    <div className="relative w-5 h-7">
      {/* Cup glow */}
      <div
        className="absolute inset-0 rounded-sm blur-sm"
        style={{ background: `${glowColor}30` }}
      />
      {/* Cup body */}
      <div
        className="absolute inset-0 rounded-t-sm"
        style={{
          background: `linear-gradient(180deg, ${glowColor}60 0%, ${glowColor}30 100%)`,
          clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
          backdropFilter: "blur(4px)",
        }}
      />
      {/* Cup rim highlight */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-full"
        style={{ background: `${glowColor}` }}
      />
    </div>
  );
}

function BallWithTrail() {
  return (
    <>
      {/* Trail path */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 200"
        style={{ overflow: "visible" }}
      >
        <motion.path
          d="M 80 140 Q 200 20 320 140"
          fill="none"
          stroke="url(#trailGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="8 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.6, 0.6, 0] }}
          transition={{
            duration: 2,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        <defs>
          <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.pink} stopOpacity="0.3" />
            <stop offset="50%" stopColor="white" stopOpacity="0.6" />
            <stop offset="100%" stopColor={colors.purple} stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Ball */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-white"
        initial={{ x: -120, y: 60, opacity: 0, scale: 0.5 }}
        animate={{
          x: [-120, 0, 120],
          y: [60, -60, 60],
          opacity: [0, 1, 1, 0],
          scale: [0.5, 1, 1, 0.8],
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 1,
          times: [0, 0.5, 1, 1],
        }}
        style={{
          boxShadow: `0 0 10px white, 0 0 20px ${colors.pink}, 0 0 30px ${colors.pink}50`,
        }}
      />
    </>
  );
}

// ============================================
// CARDS SCENE
// ============================================
function CardsScene() {
  const cardCount = 6;

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: "1000px" }}
    >
      {/* Card stack */}
      <div className="relative" style={{ transformStyle: "preserve-3d" }}>
        {[...Array(cardCount)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 50,
              rotateX: 45,
              z: -i * 4,
            }}
            animate={{
              opacity: 1,
              y: -i * 3,
              rotateX: 55,
              z: -i * 4,
            }}
            transition={{
              delay: i * 0.1,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="absolute w-28 h-40 rounded-xl"
            style={{
              transformStyle: "preserve-3d",
              transform: `translateY(${-i * 3}px) translateZ(${-i * 4}px) rotateX(55deg)`,
            }}
          >
            <Card index={i} isTop={i === cardCount - 1} />
          </motion.div>
        ))}

        {/* Drawing card animation */}
        <motion.div
          initial={{ y: -15, rotateX: 55, rotateY: 0, x: 0, opacity: 1 }}
          animate={{
            y: [-15, -80, -80],
            rotateX: [55, 20, 0],
            rotateY: [0, -15, -20],
            x: [0, 60, 80],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1.5,
            times: [0, 0.6, 1],
          }}
          className="absolute w-28 h-40 rounded-xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Card index={-1} isTop={true} isDrawing={true} />
        </motion.div>
      </div>

      {/* Ambient particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{ background: colors.green }}
          initial={{ opacity: 0, x: 40, y: 20 }}
          animate={{
            opacity: [0, 0.8, 0],
            x: [40, 60 + i * 20, 80 + i * 20],
            y: [20, -20 - i * 10, -40 - i * 15],
          }}
          transition={{
            duration: 1.5,
            delay: 1.8 + i * 0.1,
            repeat: Infinity,
            repeatDelay: 2.5,
          }}
        />
      ))}
    </div>
  );
}

function Card({ index, isTop, isDrawing = false }: { index: number; isTop: boolean; isDrawing?: boolean }) {
  const suits = ["♠", "♥", "♦", "♣"];
  const values = ["A", "K", "Q", "J", "10"];
  const suit = suits[Math.abs(index) % 4];
  const value = values[Math.abs(index) % 5];
  const isRed = suit === "♥" || suit === "♦";

  return (
    <div
      className="w-full h-full rounded-xl border overflow-hidden"
      style={{
        background: isTop || isDrawing
          ? "linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)"
          : "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
        borderColor: isDrawing ? colors.green : isTop ? `${colors.purple}60` : "rgba(255,255,255,0.1)",
        backdropFilter: "blur(8px)",
        boxShadow: isTop || isDrawing
          ? `0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 20px ${isDrawing ? colors.green : colors.purple}30`
          : "0 4px 16px rgba(0,0,0,0.3)",
      }}
    >
      {(isTop || isDrawing) && (
        <>
          <div
            className="absolute top-2 left-2 text-lg font-bold"
            style={{ color: isRed ? colors.pink : "white" }}
          >
            {value}
          </div>
          <div
            className="absolute top-6 left-2 text-base"
            style={{ color: isRed ? colors.pink : "white" }}
          >
            {suit}
          </div>
          <div
            className="absolute bottom-2 right-2 text-lg font-bold rotate-180"
            style={{ color: isRed ? colors.pink : "white" }}
          >
            {value}
          </div>
        </>
      )}
    </div>
  );
}

// ============================================
// DICE SCENE
// ============================================
function DiceScene() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center gap-8"
      style={{ perspective: "800px" }}
    >
      {/* First die */}
      <motion.div
        initial={{ x: -100, y: -80, rotateX: 720, rotateY: 720, opacity: 0 }}
        animate={{ x: 0, y: 0, rotateX: 0, rotateY: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 12,
          delay: 0.2,
        }}
      >
        <Die value={5} glowColor={colors.pink} />
      </motion.div>

      {/* Second die */}
      <motion.div
        initial={{ x: 100, y: -80, rotateX: -720, rotateY: -720, opacity: 0 }}
        animate={{ x: 0, y: 0, rotateX: 0, rotateY: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 12,
          delay: 0.4,
        }}
      >
        <Die value={3} glowColor={colors.purple} />
      </motion.div>

      {/* Score reveal */}
      <motion.div
        className="absolute top-8 text-3xl font-bold"
        initial={{ opacity: 0, y: 20, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        style={{
          background: `linear-gradient(135deg, ${colors.green}, ${colors.purple})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: `0 0 30px ${colors.green}50`,
        }}
      >
        8!
      </motion.div>

      {/* Celebration particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: i % 2 === 0 ? colors.green : colors.pink,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0.5],
            x: Math.cos((i * Math.PI) / 4) * 80,
            y: [0, Math.sin((i * Math.PI) / 4) * 60 - 40],
          }}
          transition={{
            duration: 1,
            delay: 1.3 + i * 0.05,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        />
      ))}
    </div>
  );
}

function Die({ value, glowColor }: { value: number; glowColor: string }) {
  const dotPositions: Record<number, { x: number; y: number }[]> = {
    1: [{ x: 50, y: 50 }],
    2: [{ x: 25, y: 25 }, { x: 75, y: 75 }],
    3: [{ x: 25, y: 25 }, { x: 50, y: 50 }, { x: 75, y: 75 }],
    4: [{ x: 25, y: 25 }, { x: 75, y: 25 }, { x: 25, y: 75 }, { x: 75, y: 75 }],
    5: [{ x: 25, y: 25 }, { x: 75, y: 25 }, { x: 50, y: 50 }, { x: 25, y: 75 }, { x: 75, y: 75 }],
    6: [{ x: 25, y: 25 }, { x: 25, y: 50 }, { x: 25, y: 75 }, { x: 75, y: 25 }, { x: 75, y: 50 }, { x: 75, y: 75 }],
  };

  const dots = dotPositions[value] || [];

  return (
    <motion.div
      className="relative w-20 h-20"
      whileHover={{ scale: 1.05 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-2xl blur-xl opacity-50"
        style={{ background: glowColor }}
      />

      {/* Die face */}
      <div
        className="absolute inset-0 rounded-2xl border"
        style={{
          background: "linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
          borderColor: `${glowColor}60`,
          backdropFilter: "blur(10px)",
          boxShadow: `0 10px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2), 0 0 20px ${glowColor}40`,
        }}
      >
        {/* Dots */}
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              transform: "translate(-50%, -50%)",
              background: glowColor,
              boxShadow: `0 0 8px ${glowColor}`,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.05, type: "spring" }}
          />
        ))}
      </div>
    </motion.div>
  );
}
