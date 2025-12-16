"use client";

import { useState, useEffect } from "react";

type Scene = "beer-pong" | "cards" | "dice";

export function HeroAnimation() {
  const [currentScene, setCurrentScene] = useState<Scene>("beer-pong");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scenes: Scene[] = ["beer-pong", "cards", "dice"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentScene((prev) => {
          const currentIndex = scenes.indexOf(prev);
          return scenes[(currentIndex + 1) % scenes.length];
        });
        setIsTransitioning(false);
      }, 300);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto h-64 md:h-80">
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {currentScene === "beer-pong" && <BeerPongScene />}
        {currentScene === "cards" && <CardsScene />}
        {currentScene === "dice" && <DiceScene />}
      </div>

      {/* Scene indicators */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
        {scenes.map((scene) => (
          <button
            key={scene}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentScene(scene);
                setIsTransitioning(false);
              }, 300);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              currentScene === scene
                ? "bg-neon-pink w-6"
                : "bg-dark-600 hover:bg-dark-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function BeerPongScene() {
  return (
    <svg
      viewBox="0 0 400 200"
      className="w-full h-full"
      style={{ overflow: "visible" }}
    >
      {/* Table */}
      <rect
        x="80"
        y="130"
        width="240"
        height="8"
        rx="2"
        fill="#1a1a2e"
        stroke="#2d2d44"
        strokeWidth="1"
      />
      <rect
        x="90"
        y="138"
        width="4"
        height="40"
        fill="#1a1a2e"
      />
      <rect
        x="306"
        y="138"
        width="4"
        height="40"
        fill="#1a1a2e"
      />

      {/* Left cups (pyramid) */}
      <g className="cups-left">
        {/* Back row */}
        <Cup x={95} y={110} />
        <Cup x={115} y={110} />
        <Cup x={135} y={110} />
        <Cup x={155} y={110} />
        {/* Middle row */}
        <Cup x={105} y={95} />
        <Cup x={125} y={95} />
        <Cup x={145} y={95} />
        {/* Front row */}
        <Cup x={115} y={80} />
        <Cup x={135} y={80} />
        {/* Top */}
        <Cup x={125} y={65} />
      </g>

      {/* Right cups (pyramid) */}
      <g className="cups-right">
        {/* Back row */}
        <Cup x={245} y={110} />
        <Cup x={265} y={110} />
        <Cup x={285} y={110} />
        <Cup x={305} y={110} />
        {/* Middle row */}
        <Cup x={255} y={95} />
        <Cup x={275} y={95} />
        <Cup x={295} y={95} />
        {/* Front row */}
        <Cup x={265} y={80} />
        <Cup x={285} y={80} />
        {/* Top */}
        <Cup x={275} y={65} />
      </g>

      {/* Left player */}
      <g className="player-left">
        <StickFigure x={40} y={60} facing="right" />
      </g>

      {/* Right player */}
      <g className="player-right">
        <StickFigure x={360} y={60} facing="left" />
      </g>

      {/* Animated ball with trail */}
      <g className="ball-animation">
        {/* Trail (dotted line) */}
        <path
          d="M 55 75 Q 150 -20 275 70"
          fill="none"
          stroke="#6b7280"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="animate-trail"
          style={{
            strokeDashoffset: 100,
            animation: "drawTrail 2s ease-out infinite",
          }}
        />
        {/* Ball */}
        <circle
          r="6"
          fill="white"
          className="animate-ball"
          style={{
            offsetPath: "path('M 55 75 Q 150 -20 275 70')",
            animation: "moveBall 2s ease-out infinite",
          }}
        >
          <animateMotion
            dur="2s"
            repeatCount="indefinite"
            path="M 55 75 Q 150 -20 275 70"
            keyTimes="0;1"
            keySplines="0.25 0.1 0.25 1"
            calcMode="spline"
          />
        </circle>
      </g>

      {/* Decorative glow */}
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <style>{`
        @keyframes drawTrail {
          0% {
            stroke-dashoffset: 200;
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          80% {
            opacity: 0.6;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }
      `}</style>
    </svg>
  );
}

function Cup({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Cup body */}
      <path
        d="M -8 0 L -6 20 L 6 20 L 8 0 Z"
        fill="#ef4444"
        stroke="#dc2626"
        strokeWidth="0.5"
      />
      {/* Liquid shine */}
      <ellipse cx="0" cy="2" rx="6" ry="2" fill="#fca5a5" opacity="0.3" />
      {/* Top rim */}
      <ellipse cx="0" cy="0" rx="8" ry="3" fill="none" stroke="#f87171" strokeWidth="1" />
    </g>
  );
}

function StickFigure({
  x,
  y,
  facing,
}: {
  x: number;
  y: number;
  facing: "left" | "right";
}) {
  const flip = facing === "left" ? -1 : 1;
  return (
    <g transform={`translate(${x}, ${y}) scale(${flip}, 1)`}>
      {/* Head */}
      <circle cx="0" cy="0" r="10" fill="none" stroke="#a855f7" strokeWidth="2" />
      {/* Body */}
      <line x1="0" y1="10" x2="0" y2="40" stroke="#a855f7" strokeWidth="2" />
      {/* Legs */}
      <line x1="0" y1="40" x2="-10" y2="65" stroke="#a855f7" strokeWidth="2" />
      <line x1="0" y1="40" x2="10" y2="65" stroke="#a855f7" strokeWidth="2" />
      {/* Throwing arm */}
      <line
        x1="0"
        y1="18"
        x2="15"
        y2="8"
        stroke="#a855f7"
        strokeWidth="2"
        className="arm-throw"
        style={{
          transformOrigin: "0px 18px",
          animation: "throwArm 2s ease-out infinite",
        }}
      />
      {/* Other arm */}
      <line x1="0" y1="18" x2="-12" y2="30" stroke="#a855f7" strokeWidth="2" />

      <style>{`
        @keyframes throwArm {
          0%, 100% {
            transform: rotate(-30deg);
          }
          30% {
            transform: rotate(45deg);
          }
          50%, 100% {
            transform: rotate(-30deg);
          }
        }
      `}</style>
    </g>
  );
}

function CardsScene() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full">
      {/* Central deck */}
      <g transform="translate(200, 100)">
        {/* Stack of cards */}
        {[...Array(5)].map((_, i) => (
          <rect
            key={i}
            x={-30 + i * 2}
            y={-40 + i * 2}
            width="60"
            height="80"
            rx="4"
            fill="#1a1a2e"
            stroke="#2d2d44"
            strokeWidth="1"
          />
        ))}
        {/* Top card face */}
        <rect x={-22} y={-32} width="60" height="80" rx="4" fill="#1e1e32" stroke="#ec4899" strokeWidth="1" />
        <text x="8" y="8" fill="#ec4899" fontSize="24" fontWeight="bold" textAnchor="middle">K</text>
        <text x="8" y="28" fill="#ec4899" fontSize="16" textAnchor="middle">♥</text>
      </g>

      {/* Animated card being drawn */}
      <g className="drawing-card">
        <rect
          x="170"
          y="60"
          width="60"
          height="80"
          rx="4"
          fill="#1e1e32"
          stroke="#a855f7"
          strokeWidth="1"
          style={{
            transformOrigin: "200px 100px",
            animation: "drawCard 3s ease-in-out infinite",
          }}
        />
      </g>

      {/* Players around (circles representing seats) */}
      <circle cx="80" cy="100" r="20" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2" />
      <circle cx="320" cy="100" r="20" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2" />
      <circle cx="200" cy="30" r="20" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2" />
      <circle cx="200" cy="170" r="20" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2" />

      {/* Connection lines */}
      <line x1="100" y1="100" x2="170" y2="100" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
      <line x1="230" y1="100" x2="300" y2="100" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
      <line x1="200" y1="50" x2="200" y2="68" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
      <line x1="200" y1="132" x2="200" y2="150" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />

      <style>{`
        @keyframes drawCard {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
          }
          40% {
            transform: translate(80px, -60px) rotate(15deg);
            opacity: 1;
          }
          50% {
            transform: translate(80px, -60px) rotate(15deg);
            opacity: 0;
          }
          51% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          60% {
            opacity: 1;
          }
        }
      `}</style>
    </svg>
  );
}

function DiceScene() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full">
      {/* Table surface hint */}
      <ellipse cx="200" cy="150" rx="150" ry="30" fill="#1a1a2e" opacity="0.5" />

      {/* Dice 1 */}
      <g
        transform="translate(150, 90)"
        style={{
          animation: "rollDice1 2.5s ease-out infinite",
        }}
      >
        <rect x="-25" y="-25" width="50" height="50" rx="8" fill="#1e1e32" stroke="#ec4899" strokeWidth="2" />
        {/* Dots for 5 */}
        <circle cx="-10" cy="-10" r="4" fill="#ec4899" />
        <circle cx="10" cy="-10" r="4" fill="#ec4899" />
        <circle cx="0" cy="0" r="4" fill="#ec4899" />
        <circle cx="-10" cy="10" r="4" fill="#ec4899" />
        <circle cx="10" cy="10" r="4" fill="#ec4899" />
      </g>

      {/* Dice 2 */}
      <g
        transform="translate(250, 95)"
        style={{
          animation: "rollDice2 2.5s ease-out infinite",
        }}
      >
        <rect x="-25" y="-25" width="50" height="50" rx="8" fill="#1e1e32" stroke="#a855f7" strokeWidth="2" />
        {/* Dots for 3 */}
        <circle cx="-10" cy="-10" r="4" fill="#a855f7" />
        <circle cx="0" cy="0" r="4" fill="#a855f7" />
        <circle cx="10" cy="10" r="4" fill="#a855f7" />
      </g>

      {/* Hand throwing */}
      <g
        className="throwing-hand"
        style={{
          transformOrigin: "80px 50px",
          animation: "throwHand 2.5s ease-out infinite",
        }}
      >
        <path
          d="M 60 80 Q 70 60 80 50 L 90 55 Q 85 65 75 85 Z"
          fill="none"
          stroke="#6b7280"
          strokeWidth="2"
        />
      </g>

      {/* Score display */}
      <g transform="translate(200, 30)">
        <text
          x="0"
          y="0"
          fill="#10b981"
          fontSize="20"
          fontWeight="bold"
          textAnchor="middle"
          style={{
            animation: "showScore 2.5s ease-out infinite",
          }}
        >
          8!
        </text>
      </g>

      {/* Decorative particles */}
      {[...Array(6)].map((_, i) => (
        <circle
          key={i}
          cx={180 + i * 10}
          cy={120}
          r="2"
          fill="#fbbf24"
          style={{
            animation: `particle ${2.5}s ease-out infinite`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}

      <style>{`
        @keyframes rollDice1 {
          0% {
            transform: translate(150px, 90px) rotate(0deg) scale(0.5);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          40% {
            transform: translate(150px, 90px) rotate(360deg) scale(1);
          }
          100% {
            transform: translate(150px, 90px) rotate(360deg) scale(1);
          }
        }
        @keyframes rollDice2 {
          0% {
            transform: translate(250px, 95px) rotate(0deg) scale(0.5);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          45% {
            transform: translate(250px, 95px) rotate(-360deg) scale(1);
          }
          100% {
            transform: translate(250px, 95px) rotate(-360deg) scale(1);
          }
        }
        @keyframes throwHand {
          0%, 30% {
            opacity: 1;
            transform: rotate(0deg);
          }
          40% {
            opacity: 0;
            transform: rotate(20deg);
          }
          100% {
            opacity: 0;
          }
        }
        @keyframes showScore {
          0%, 50% {
            opacity: 0;
            transform: translateY(10px);
          }
          60% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes particle {
          0%, 40% {
            opacity: 0;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-30px);
          }
        }
      `}</style>
    </svg>
  );
}
