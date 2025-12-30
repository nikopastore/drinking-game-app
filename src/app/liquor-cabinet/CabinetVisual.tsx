"use client";

import { useMemo, useState } from "react";
import { Plus, Sparkles } from "lucide-react";
import { ingredientCategories } from "@/config/cabinetIngredients";

interface CabinetVisualProps {
  items: string[];
  onAddClick: () => void;
}

// Bottle shape types
type BottleShape = "tall" | "square" | "wine" | "champagne" | "round" | "ornate" | "slim";

// Category to bottle shape and color mapping
const categoryStyles: Record<string, { shape: BottleShape; gradient: [string, string]; accent: string }> = {
  "Spirits": { shape: "tall", gradient: ["#c4b5fd", "#7c3aed"], accent: "#a78bfa" },
  "Liqueurs": { shape: "ornate", gradient: ["#f9a8d4", "#db2777"], accent: "#f472b6" },
  "Mixers": { shape: "round", gradient: ["#67e8f9", "#0891b2"], accent: "#22d3ee" },
  "Fresh & Citrus": { shape: "round", gradient: ["#bef264", "#65a30d"], accent: "#84cc16" },
  "Syrups & Sweeteners": { shape: "slim", gradient: ["#fcd34d", "#b45309"], accent: "#fbbf24" },
  "Beer & Wine": { shape: "wine", gradient: ["#fca5a5", "#991b1b"], accent: "#f87171" },
  "Bitters & Extras": { shape: "slim", gradient: ["#a5b4fc", "#4f46e5"], accent: "#818cf8" },
};

// Specific spirit shapes
const spiritShapes: Record<string, BottleShape> = {
  "Vodka": "tall",
  "Gin (London Dry)": "tall",
  "Gin (Other)": "tall",
  "Bourbon": "square",
  "Rye Whiskey": "square",
  "Scotch": "square",
  "Irish Whiskey": "square",
  "Champagne/Prosecco": "champagne",
  "Red Wine": "wine",
  "White Wine": "wine",
  "Rosé Wine": "wine",
};

function getCategoryForItem(item: string): string | null {
  for (const category of ingredientCategories) {
    if (category.items.includes(item)) {
      return category.name;
    }
  }
  return null;
}

function getBottleStyle(item: string) {
  const category = getCategoryForItem(item);
  const baseStyle = category ? categoryStyles[category] : categoryStyles["Spirits"];
  const specificShape = spiritShapes[item];

  return {
    ...baseStyle,
    shape: specificShape || baseStyle.shape,
  };
}

// Individual bottle SVG components
function TallBottle({ gradient, accent, id }: { gradient: [string, string]; accent: string; id: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gradient[0]} />
          <stop offset="100%" stopColor={gradient[1]} />
        </linearGradient>
        <filter id={`glow-${id}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Bottle body */}
      <path
        d="M12 70 L12 30 Q12 25 15 22 L15 12 Q15 8 20 8 L30 8 Q35 8 35 12 L35 22 Q38 25 38 30 L38 70 Q38 75 33 75 L17 75 Q12 75 12 70Z"
        fill={`url(#grad-${id})`}
      />
      {/* Glass highlight */}
      <path
        d="M15 70 L15 32 Q15 28 17 26 L17 70 Q15 72 15 70Z"
        fill="white"
        opacity="0.3"
      />
      {/* Label */}
      <rect x="14" y="42" width="22" height="18" rx="2" fill="white" opacity="0.9" />
      <rect x="16" y="45" width="18" height="3" rx="1" fill={gradient[1]} opacity="0.6" />
      <rect x="16" y="51" width="12" height="2" rx="1" fill={gradient[1]} opacity="0.4" />
      {/* Cap */}
      <rect x="18" y="4" width="14" height="5" rx="1" fill="#374151" />
      <rect x="19" y="5" width="4" height="3" rx="0.5" fill="#4b5563" />
    </g>
  );
}

function SquareBottle({ gradient, accent, id }: { gradient: [string, string]; accent: string; id: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gradient[0]} />
          <stop offset="100%" stopColor={gradient[1]} />
        </linearGradient>
      </defs>
      {/* Square bottle body */}
      <path
        d="M10 72 L10 28 L10 24 L18 18 L18 10 Q18 6 22 6 L28 6 Q32 6 32 10 L32 18 L40 24 L40 28 L40 72 Q40 76 36 76 L14 76 Q10 76 10 72Z"
        fill={`url(#grad-${id})`}
      />
      {/* Glass highlight */}
      <path
        d="M13 70 L13 30 L13 26 L18 22 L18 70Z"
        fill="white"
        opacity="0.25"
      />
      {/* Whiskey level */}
      <path
        d="M12 72 L12 45 L38 45 L38 72 Q38 74 36 74 L14 74 Q12 74 12 72Z"
        fill={gradient[1]}
        opacity="0.5"
      />
      {/* Label */}
      <rect x="13" y="50" width="24" height="16" rx="1" fill="white" opacity="0.9" />
      <rect x="15" y="53" width="20" height="3" rx="1" fill={gradient[1]} opacity="0.7" />
      <rect x="15" y="58" width="14" height="2" rx="1" fill={gradient[1]} opacity="0.4" />
      {/* Cork */}
      <ellipse cx="25" cy="5" rx="5" ry="3" fill="#92400e" />
      <rect x="20" y="5" width="10" height="4" fill="#a16207" />
    </g>
  );
}

function WineBottle({ gradient, accent, id }: { gradient: [string, string]; accent: string; id: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gradient[0]} />
          <stop offset="100%" stopColor={gradient[1]} />
        </linearGradient>
      </defs>
      {/* Wine bottle body */}
      <path
        d="M18 75 Q12 75 12 68 L12 45 Q12 35 20 30 L20 12 Q20 6 25 6 Q30 6 30 12 L30 30 Q38 35 38 45 L38 68 Q38 75 32 75Z"
        fill={`url(#grad-${id})`}
      />
      {/* Glass highlight */}
      <path
        d="M15 68 L15 46 Q15 38 21 34 L21 68 Q18 70 15 68Z"
        fill="white"
        opacity="0.2"
      />
      {/* Wine level */}
      <path
        d="M14 68 L14 50 Q14 48 16 48 L34 48 Q36 48 36 50 L36 68 Q36 72 32 72 L18 72 Q14 72 14 68Z"
        fill={gradient[1]}
        opacity="0.6"
      />
      {/* Label */}
      <ellipse cx="25" cy="58" rx="10" ry="8" fill="white" opacity="0.9" />
      <ellipse cx="25" cy="58" rx="6" ry="4" fill={gradient[1]} opacity="0.3" />
      {/* Cork/cap */}
      <rect x="22" y="2" width="6" height="6" rx="1" fill="#1f2937" />
    </g>
  );
}

function ChampagneBottle({ gradient, accent, id }: { gradient: [string, string]; accent: string; id: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>
      {/* Champagne bottle */}
      <path
        d="M18 76 Q12 76 12 68 L14 40 Q14 32 20 28 L22 10 Q22 4 25 4 Q28 4 28 10 L30 28 Q36 32 36 40 L38 68 Q38 76 32 76Z"
        fill={`url(#grad-${id})`}
      />
      {/* Glass highlight */}
      <path
        d="M16 68 L17 42 Q17 36 21 32 L23 68Z"
        fill="white"
        opacity="0.3"
      />
      {/* Foil top */}
      <path
        d="M20 14 L20 8 Q20 4 25 4 Q30 4 30 8 L30 14 Q28 16 25 16 Q22 16 20 14Z"
        fill="#fcd34d"
      />
      {/* Label */}
      <rect x="15" y="48" width="20" height="14" rx="2" fill="white" opacity="0.95" />
      <rect x="17" y="51" width="16" height="3" rx="1" fill="#b45309" opacity="0.6" />
      <text x="25" y="60" textAnchor="middle" fontSize="4" fill="#92400e" fontWeight="bold">✦</text>
    </g>
  );
}

function RoundBottle({ gradient, accent, id }: { gradient: [string, string]; accent: string; id: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gradient[0]} />
          <stop offset="100%" stopColor={gradient[1]} />
        </linearGradient>
      </defs>
      {/* Round mixer bottle */}
      <ellipse cx="25" cy="55" rx="16" ry="20" fill={`url(#grad-${id})`} />
      {/* Neck */}
      <path
        d="M20 36 L20 20 Q20 16 22 16 L28 16 Q30 16 30 20 L30 36"
        fill={`url(#grad-${id})`}
      />
      {/* Glass highlight */}
      <ellipse cx="18" cy="52" rx="4" ry="12" fill="white" opacity="0.25" />
      {/* Cap */}
      <rect x="20" y="12" width="10" height="5" rx="2" fill="#374151" />
      {/* Label */}
      <ellipse cx="25" cy="55" rx="10" ry="10" fill="white" opacity="0.9" />
      <ellipse cx="25" cy="55" rx="6" ry="6" fill={gradient[1]} opacity="0.3" />
    </g>
  );
}

function OrnateBottle({ gradient, accent, id }: { gradient: [string, string]; accent: string; id: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gradient[0]} />
          <stop offset="100%" stopColor={gradient[1]} />
        </linearGradient>
      </defs>
      {/* Ornate liqueur bottle */}
      <path
        d="M15 74 Q10 74 10 66 L10 40 Q10 32 18 30 L18 18 Q18 14 20 12 L20 8 Q20 4 25 4 Q30 4 30 8 L30 12 Q32 14 32 18 L32 30 Q40 32 40 40 L40 66 Q40 74 35 74Z"
        fill={`url(#grad-${id})`}
      />
      {/* Decorative facets */}
      <path d="M12 65 L12 42 L16 40 L16 67Z" fill="white" opacity="0.15" />
      <path d="M38 65 L38 42 L34 40 L34 67Z" fill="white" opacity="0.1" />
      {/* Glass highlight */}
      <path d="M14 64 L14 44 L17 42 L17 66Z" fill="white" opacity="0.3" />
      {/* Ornate label */}
      <rect x="14" y="46" width="22" height="18" rx="3" fill="white" opacity="0.95" />
      <rect x="16" y="49" width="18" height="4" rx="1" fill={gradient[1]} opacity="0.5" />
      <circle cx="25" cy="58" r="3" fill={gradient[1]} opacity="0.4" />
      {/* Fancy cap */}
      <rect x="21" y="2" width="8" height="4" rx="1" fill="#fcd34d" />
      <rect x="22" y="0" width="6" height="2" rx="1" fill="#f59e0b" />
    </g>
  );
}

function SlimBottle({ gradient, accent, id }: { gradient: [string, string]; accent: string; id: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gradient[0]} />
          <stop offset="100%" stopColor={gradient[1]} />
        </linearGradient>
      </defs>
      {/* Slim bottle */}
      <path
        d="M18 75 L18 25 Q18 20 22 18 L22 10 Q22 6 25 6 Q28 6 28 10 L28 18 Q32 20 32 25 L32 75 Q32 78 28 78 L22 78 Q18 78 18 75Z"
        fill={`url(#grad-${id})`}
      />
      {/* Glass highlight */}
      <rect x="19" y="28" width="3" height="44" rx="1" fill="white" opacity="0.3" />
      {/* Liquid level */}
      <path
        d="M19 75 L19 40 L31 40 L31 75 Q31 77 28 77 L22 77 Q19 77 19 75Z"
        fill={gradient[1]}
        opacity="0.4"
      />
      {/* Label */}
      <rect x="19" y="50" width="12" height="16" rx="1" fill="white" opacity="0.9" />
      <rect x="20" y="53" width="10" height="2" rx="0.5" fill={gradient[1]} opacity="0.6" />
      <rect x="20" y="57" width="6" height="2" rx="0.5" fill={gradient[1]} opacity="0.4" />
      {/* Cap */}
      <circle cx="25" cy="5" r="4" fill="#374151" />
    </g>
  );
}

// Bottle component that renders the appropriate shape
function Bottle({
  item,
  index,
  isHovered,
  onHover,
}: {
  item: string;
  index: number;
  isHovered: boolean;
  onHover: (index: number | null) => void;
}) {
  const style = getBottleStyle(item);
  const id = `bottle-${index}`;

  const BottleComponent = {
    tall: TallBottle,
    square: SquareBottle,
    wine: WineBottle,
    champagne: ChampagneBottle,
    round: RoundBottle,
    ornate: OrnateBottle,
    slim: SlimBottle,
  }[style.shape];

  return (
    <g
      className="cursor-pointer transition-all duration-300"
      style={{
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        filter: isHovered ? `drop-shadow(0 0 12px ${style.accent})` : "none",
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <BottleComponent gradient={style.gradient} accent={style.accent} id={id} />
      {/* Tooltip */}
      {isHovered && (
        <g>
          <rect x="-5" y="-20" width="60" height="16" rx="4" fill="#1f2937" opacity="0.95" />
          <text x="25" y="-8" textAnchor="middle" fontSize="6" fill="white" fontWeight="500">
            {item.length > 12 ? item.substring(0, 12) + "..." : item}
          </text>
        </g>
      )}
    </g>
  );
}

// Ghost bottle for empty slots
function GhostBottle() {
  return (
    <g opacity="0.15">
      <path
        d="M12 70 L12 30 Q12 25 15 22 L15 12 Q15 8 20 8 L30 8 Q35 8 35 12 L35 22 Q38 25 38 30 L38 70 Q38 75 33 75 L17 75 Q12 75 12 70Z"
        fill="none"
        stroke="#a855f7"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <text x="25" y="45" textAnchor="middle" fontSize="16" fill="#a855f7">+</text>
    </g>
  );
}

export function CabinetVisual({ items, onAddClick }: CabinetVisualProps) {
  const [hoveredBottle, setHoveredBottle] = useState<number | null>(null);

  // Organize items into shelves (6 bottles per shelf, 3 shelves)
  const shelves = useMemo(() => {
    const result: (string | null)[][] = [[], [], []];
    items.forEach((item, idx) => {
      const shelfIdx = Math.floor(idx / 6);
      if (shelfIdx < 3) {
        result[shelfIdx].push(item);
      }
    });
    // Fill remaining with nulls
    result.forEach(shelf => {
      while (shelf.length < 6) {
        shelf.push(null);
      }
    });
    return result;
  }, [items]);

  const isEmpty = items.length === 0;
  const cabinetWidth = 360;
  const cabinetHeight = 340;
  const bottleWidth = 50;
  const shelfHeight = 95;

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Ambient glow backdrop */}
      <div
        className="absolute inset-0 -m-8 rounded-3xl opacity-60 blur-3xl"
        style={{
          background: "radial-gradient(ellipse at center, #7c3aed 0%, #1e1b4b 50%, transparent 70%)",
        }}
      />

      {/* Main cabinet container */}
      <div
        className="relative rounded-2xl p-6 cursor-pointer group"
        onClick={onAddClick}
        style={{
          background: "linear-gradient(180deg, #1e1b4b 0%, #0f0a1a 100%)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 rounded-2xl opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Cabinet title */}
        <div className="text-center mb-4">
          <h2 className="text-lg font-semibold text-white/90 tracking-wide flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-purple-400" />
            YOUR LIQUOR CABINET
            <Sparkles className="h-4 w-4 text-purple-400" />
          </h2>
        </div>

        {/* SVG Cabinet */}
        <svg
          viewBox={`0 0 ${cabinetWidth} ${cabinetHeight}`}
          className="w-full"
          style={{ maxHeight: "400px" }}
        >
          <defs>
            {/* Shelf glass gradient */}
            <linearGradient id="shelfGlass" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.1" />
              <stop offset="100%" stopColor="white" stopOpacity="0.05" />
            </linearGradient>
            {/* Underglow gradient */}
            <linearGradient id="underglow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
            {/* Top ambient light */}
            <linearGradient id="topLight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.08" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Ambient top light */}
          <rect x="0" y="0" width={cabinetWidth} height="60" fill="url(#topLight)" />

          {/* Shelves */}
          {shelves.map((shelf, shelfIndex) => {
            const shelfY = 20 + shelfIndex * shelfHeight;

            return (
              <g key={shelfIndex}>
                {/* Shelf underglow */}
                <rect
                  x="20"
                  y={shelfY + 78}
                  width={cabinetWidth - 40}
                  height="15"
                  fill="url(#underglow)"
                  rx="2"
                />

                {/* Glass shelf */}
                <rect
                  x="15"
                  y={shelfY + 76}
                  width={cabinetWidth - 30}
                  height="4"
                  fill="url(#shelfGlass)"
                  rx="2"
                />

                {/* Shelf reflection line */}
                <line
                  x1="20"
                  y1={shelfY + 77}
                  x2={cabinetWidth - 20}
                  y2={shelfY + 77}
                  stroke="white"
                  strokeOpacity="0.2"
                  strokeWidth="1"
                />

                {/* Bottles on shelf */}
                {shelf.map((item, bottleIndex) => {
                  const globalIndex = shelfIndex * 6 + bottleIndex;
                  const bottleX = 30 + bottleIndex * bottleWidth;

                  return (
                    <g key={bottleIndex} transform={`translate(${bottleX}, ${shelfY})`}>
                      {item ? (
                        <Bottle
                          item={item}
                          index={globalIndex}
                          isHovered={hoveredBottle === globalIndex}
                          onHover={setHoveredBottle}
                        />
                      ) : (
                        isEmpty && shelfIndex === 1 && bottleIndex >= 2 && bottleIndex <= 3 ? (
                          <GhostBottle />
                        ) : null
                      )}
                    </g>
                  );
                })}
              </g>
            );
          })}

          {/* Empty state overlay */}
          {isEmpty && (
            <g>
              <rect
                x={cabinetWidth / 2 - 70}
                y={cabinetHeight / 2 - 25}
                width="140"
                height="50"
                rx="12"
                fill="#a855f7"
                className="animate-pulse"
              />
              <text
                x={cabinetWidth / 2}
                y={cabinetHeight / 2 + 5}
                textAnchor="middle"
                fill="white"
                fontSize="14"
                fontWeight="600"
              >
                Stock Your Cabinet
              </text>
            </g>
          )}
        </svg>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20 rounded-2xl backdrop-blur-sm">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-semibold shadow-lg shadow-purple-500/30 transform group-hover:scale-105 transition-transform">
            <Plus className="h-5 w-5" />
            {isEmpty ? "Stock Your Cabinet" : "Edit Cabinet"}
          </div>
        </div>

        {/* Item count badge */}
        {!isEmpty && (
          <div className="text-center mt-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <span className="text-purple-300 font-medium">{items.length}</span>
              <span className="text-gray-400 text-sm">bottles in your collection</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
