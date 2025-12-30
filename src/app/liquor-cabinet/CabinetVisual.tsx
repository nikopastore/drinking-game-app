"use client";

import { useMemo, useState } from "react";
import { Plus, X } from "lucide-react";
import { ingredientCategories } from "@/config/cabinetIngredients";

interface CabinetVisualProps {
  items: string[];
  onAddClick: () => void;
}

// Bottle style configurations
type BottleType = "tall" | "whiskey" | "wine" | "champagne" | "round" | "liqueur" | "bitters";

interface BottleStyle {
  type: BottleType;
  liquidColor: string;
  glassColor: string;
  label: string;
}

const categoryBottleStyles: Record<string, BottleStyle> = {
  "Spirits": { type: "tall", liquidColor: "rgba(255,255,255,0.15)", glassColor: "rgba(255,255,255,0.1)", label: "Spirit" },
  "Liqueurs": { type: "liqueur", liquidColor: "rgba(219,39,119,0.4)", glassColor: "rgba(255,255,255,0.12)", label: "Liqueur" },
  "Mixers": { type: "round", liquidColor: "rgba(34,211,238,0.3)", glassColor: "rgba(255,255,255,0.15)", label: "Mixer" },
  "Fresh & Citrus": { type: "round", liquidColor: "rgba(250,204,21,0.4)", glassColor: "rgba(255,255,255,0.12)", label: "Fresh" },
  "Syrups & Sweeteners": { type: "bitters", liquidColor: "rgba(245,158,11,0.5)", glassColor: "rgba(255,255,255,0.1)", label: "Syrup" },
  "Beer & Wine": { type: "wine", liquidColor: "rgba(127,29,29,0.6)", glassColor: "rgba(255,255,255,0.08)", label: "Wine" },
  "Bitters & Extras": { type: "bitters", liquidColor: "rgba(180,83,9,0.6)", glassColor: "rgba(255,255,255,0.1)", label: "Bitters" },
};

// Spirit-specific overrides
const spiritStyles: Record<string, Partial<BottleStyle>> = {
  "Vodka": { type: "tall", liquidColor: "rgba(255,255,255,0.08)" },
  "Gin (London Dry)": { type: "tall", liquidColor: "rgba(200,255,220,0.12)" },
  "Bourbon": { type: "whiskey", liquidColor: "rgba(180,100,20,0.5)" },
  "Rye Whiskey": { type: "whiskey", liquidColor: "rgba(160,90,20,0.5)" },
  "Scotch": { type: "whiskey", liquidColor: "rgba(200,120,30,0.45)" },
  "Irish Whiskey": { type: "whiskey", liquidColor: "rgba(190,110,25,0.45)" },
  "Tequila (Blanco)": { type: "tall", liquidColor: "rgba(255,255,255,0.1)" },
  "Tequila (Reposado)": { type: "tall", liquidColor: "rgba(230,200,150,0.25)" },
  "Rum (White)": { type: "tall", liquidColor: "rgba(255,255,255,0.08)" },
  "Rum (Dark)": { type: "tall", liquidColor: "rgba(100,50,20,0.5)" },
  "Rum (Spiced)": { type: "tall", liquidColor: "rgba(139,69,19,0.45)" },
  "Champagne/Prosecco": { type: "champagne", liquidColor: "rgba(255,223,128,0.3)" },
  "Red Wine": { type: "wine", liquidColor: "rgba(100,20,30,0.7)" },
  "White Wine": { type: "wine", liquidColor: "rgba(255,240,200,0.25)" },
  "Rosé Wine": { type: "wine", liquidColor: "rgba(255,150,150,0.35)" },
  "Beer (Lager)": { type: "round", liquidColor: "rgba(255,200,50,0.5)" },
  "Beer (IPA)": { type: "round", liquidColor: "rgba(200,140,30,0.55)" },
};

function getCategoryForItem(item: string): string {
  for (const category of ingredientCategories) {
    if (category.items.includes(item)) {
      return category.name;
    }
  }
  return "Spirits";
}

function getBottleStyle(item: string): BottleStyle {
  const category = getCategoryForItem(item);
  const baseStyle = categoryBottleStyles[category] || categoryBottleStyles["Spirits"];
  const override = spiritStyles[item];

  return {
    ...baseStyle,
    ...override,
  };
}

// 3D Bottle Component with CSS
function Bottle3D({
  item,
  style,
  isHovered,
  onHover,
  position,
  shelfIndex,
}: {
  item: string;
  style: BottleStyle;
  isHovered: boolean;
  onHover: (item: string | null) => void;
  position: { x: number; z: number };
  shelfIndex: number;
}) {
  const heights: Record<BottleType, number> = {
    tall: 140,
    whiskey: 110,
    wine: 130,
    champagne: 135,
    round: 80,
    liqueur: 100,
    bitters: 70,
  };

  const widths: Record<BottleType, number> = {
    tall: 36,
    whiskey: 44,
    wine: 34,
    champagne: 32,
    round: 50,
    liqueur: 38,
    bitters: 28,
  };

  const height = heights[style.type];
  const width = widths[style.type];

  // Depth factor based on shelf (back = smaller, front = larger)
  const depthScale = 0.85 + (shelfIndex * 0.075);
  const scaledHeight = height * depthScale;
  const scaledWidth = width * depthScale;

  return (
    <div
      className="absolute transition-all duration-300 ease-out cursor-pointer"
      style={{
        left: `${position.x}%`,
        bottom: `${8 + shelfIndex * 2}px`,
        transform: `translateX(-50%) ${isHovered ? 'translateY(-24px) scale(1.08)' : 'translateY(0) scale(1)'}`,
        zIndex: isHovered ? 100 : 10 + shelfIndex * 10 + Math.round(position.z),
        filter: isHovered ? `drop-shadow(0 20px 40px ${style.liquidColor.replace('0.', '0.6')})` : 'none',
      }}
      onMouseEnter={() => onHover(item)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Bottle */}
      <div
        className="relative"
        style={{ width: scaledWidth, height: scaledHeight }}
      >
        {/* Glass bottle body */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-b-lg overflow-hidden"
          style={{
            width: scaledWidth,
            height: scaledHeight * 0.7,
            background: `
              linear-gradient(135deg,
                ${style.glassColor} 0%,
                rgba(255,255,255,0.03) 30%,
                ${style.glassColor} 70%,
                rgba(255,255,255,0.15) 100%
              )
            `,
            boxShadow: `
              inset -2px 0 8px rgba(255,255,255,0.1),
              inset 2px 0 8px rgba(0,0,0,0.2),
              0 4px 20px rgba(0,0,0,0.4)
            `,
            borderRadius: style.type === 'round' ? '30%' : style.type === 'whiskey' ? '4px' : '6px',
          }}
        >
          {/* Liquid inside */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: '75%',
              background: `linear-gradient(to top, ${style.liquidColor}, ${style.liquidColor.replace(')', ', 0.1)')})`,
              borderRadius: 'inherit',
            }}
          />
          {/* Glass reflection */}
          <div
            className="absolute top-2 left-1 bottom-4 w-1 rounded-full"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.05))',
            }}
          />
          {/* Label */}
          <div
            className="absolute left-1/2 -translate-x-1/2 bg-white/90 rounded-sm flex items-center justify-center"
            style={{
              width: scaledWidth * 0.7,
              height: scaledHeight * 0.15,
              top: '35%',
              boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
            }}
          >
            <span className="text-[6px] font-medium text-gray-700 uppercase tracking-wider truncate px-1">
              {item.length > 10 ? item.substring(0, 8) + '..' : item}
            </span>
          </div>
        </div>

        {/* Bottle neck */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            width: scaledWidth * 0.35,
            height: scaledHeight * 0.25,
            bottom: scaledHeight * 0.65,
            background: `
              linear-gradient(135deg,
                ${style.glassColor} 0%,
                rgba(255,255,255,0.05) 50%,
                ${style.glassColor} 100%
              )
            `,
            borderRadius: '3px 3px 0 0',
            boxShadow: 'inset -1px 0 4px rgba(255,255,255,0.1)',
          }}
        />

        {/* Cap/Cork */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            width: scaledWidth * 0.3,
            height: scaledHeight * 0.08,
            bottom: scaledHeight * 0.88,
            background: style.type === 'wine' || style.type === 'whiskey'
              ? 'linear-gradient(to right, #8B4513, #A0522D, #8B4513)'
              : 'linear-gradient(to right, #374151, #4B5563, #374151)',
            borderRadius: '2px',
            boxShadow: '0 -1px 2px rgba(0,0,0,0.3)',
          }}
        />
      </div>

      {/* Hover detail card */}
      {isHovered && (
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 px-3 py-2 rounded-lg whitespace-nowrap z-50 animate-in fade-in slide-in-from-bottom-2 duration-200"
          style={{
            background: 'linear-gradient(135deg, rgba(30,27,75,0.98), rgba(15,10,26,0.98))',
            border: '1px solid rgba(168,85,247,0.3)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.5), 0 0 20px rgba(168,85,247,0.2)',
          }}
        >
          <p className="text-white font-semibold text-sm">{item}</p>
          <p className="text-purple-300 text-xs">{style.label}</p>
          <div
            className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0"
            style={{
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: '6px solid rgba(30,27,75,0.98)',
            }}
          />
        </div>
      )}

      {/* Glow under bottle on hover */}
      {isHovered && (
        <div
          className="absolute left-1/2 -translate-x-1/2 -bottom-2 rounded-full blur-xl animate-pulse"
          style={{
            width: scaledWidth * 1.5,
            height: 16,
            background: style.liquidColor.replace('0.', '0.8'),
          }}
        />
      )}
    </div>
  );
}

// Glass shelf component
function GlassShelf({ index, totalShelves }: { index: number; totalShelves: number }) {
  // Back shelves are narrower (perspective)
  const widthPercent = 75 + (index * 8);
  const leftOffset = (100 - widthPercent) / 2;

  return (
    <div
      className="absolute left-0 right-0"
      style={{
        bottom: `${10 + index * 33}%`,
        height: '4px',
        zIndex: index * 10,
      }}
    >
      {/* Shelf surface */}
      <div
        className="absolute h-full"
        style={{
          left: `${leftOffset}%`,
          width: `${widthPercent}%`,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
          boxShadow: `
            0 2px 10px rgba(0,0,0,0.3),
            inset 0 1px 0 rgba(255,255,255,0.2)
          `,
          borderRadius: '1px',
        }}
      />
      {/* LED underglow */}
      <div
        className="absolute h-6 blur-md"
        style={{
          left: `${leftOffset + 2}%`,
          width: `${widthPercent - 4}%`,
          top: '4px',
          background: 'linear-gradient(to bottom, rgba(168,85,247,0.4), transparent)',
        }}
      />
      {/* Shelf edge highlight */}
      <div
        className="absolute h-px"
        style={{
          left: `${leftOffset}%`,
          width: `${widthPercent}%`,
          top: 0,
          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)',
        }}
      />
    </div>
  );
}

export function CabinetVisual({ items, onAddClick }: CabinetVisualProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Distribute bottles across 3 shelves with natural positioning
  const shelfItems = useMemo(() => {
    const shelves: { item: string; position: { x: number; z: number } }[][] = [[], [], []];

    if (items.length === 0) return shelves;

    // Sort items by bottle height (tall bottles to back)
    const sortedItems = [...items].sort((a, b) => {
      const styleA = getBottleStyle(a);
      const styleB = getBottleStyle(b);
      const heightOrder: Record<BottleType, number> = {
        tall: 5, champagne: 4, wine: 3, whiskey: 2, liqueur: 1, round: 0, bitters: 0
      };
      return heightOrder[styleB.type] - heightOrder[styleA.type];
    });

    // Distribute to shelves (tall to back, short to front)
    sortedItems.forEach((item, idx) => {
      const style = getBottleStyle(item);
      const heightOrder: Record<BottleType, number> = {
        tall: 2, champagne: 2, wine: 1, whiskey: 1, liqueur: 0, round: 0, bitters: 0
      };
      let shelfIdx = heightOrder[style.type];

      // Balance shelves
      const minShelf = shelves.reduce((min, shelf, i) =>
        shelf.length < shelves[min].length ? i : min, shelfIdx);
      shelfIdx = minShelf;

      // Natural positioning with slight randomness
      const baseSpacing = 100 / (Math.max(shelves[shelfIdx].length + 2, 4));
      const x = 15 + (shelves[shelfIdx].length * baseSpacing) + (Math.random() * 5 - 2.5);
      const z = Math.random() * 5;

      shelves[shelfIdx].push({ item, position: { x: Math.min(85, Math.max(15, x)), z } });
    });

    return shelves;
  }, [items]);

  const isEmpty = items.length === 0;

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Cabinet container */}
      <div
        className="relative rounded-2xl overflow-hidden cursor-pointer group"
        style={{
          height: '400px',
          background: `
            linear-gradient(180deg,
              rgba(30,20,10,0.95) 0%,
              rgba(10,10,15,1) 40%,
              rgba(5,5,8,1) 100%
            )
          `,
          boxShadow: `
            0 25px 60px -12px rgba(0, 0, 0, 0.7),
            inset 0 1px 0 rgba(255,255,255,0.05),
            inset 0 -50px 80px -40px rgba(168,85,247,0.1)
          `,
        }}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest('.bottle-item')) return;
          onAddClick();
        }}
      >
        {/* Ambient top light (bar lighting) */}
        <div
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 0%,
                rgba(255,180,100,0.15) 0%,
                rgba(255,150,50,0.05) 40%,
                transparent 70%
              )
            `,
          }}
        />

        {/* Mirror/glass back panel effect */}
        <div
          className="absolute inset-x-8 top-8 bottom-16 rounded-lg pointer-events-none"
          style={{
            background: `
              linear-gradient(180deg,
                rgba(255,255,255,0.02) 0%,
                rgba(255,255,255,0.01) 50%,
                rgba(168,85,247,0.03) 100%
              )
            `,
            border: '1px solid rgba(255,255,255,0.03)',
          }}
        />

        {/* Glass shelves */}
        {[0, 1, 2].map((i) => (
          <GlassShelf key={i} index={i} totalShelves={3} />
        ))}

        {/* Bottles on shelves */}
        {shelfItems.map((shelf, shelfIndex) => (
          <div
            key={shelfIndex}
            className="absolute left-0 right-0"
            style={{
              bottom: `${12 + shelfIndex * 33}%`,
              height: '30%',
            }}
          >
            {shelf.map(({ item, position }) => (
              <div key={item} className="bottle-item">
                <Bottle3D
                  item={item}
                  style={getBottleStyle(item)}
                  isHovered={hoveredItem === item}
                  onHover={setHoveredItem}
                  position={position}
                  shelfIndex={shelfIndex}
                />
              </div>
            ))}
          </div>
        ))}

        {/* Empty state */}
        {isEmpty && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Ghost bottles silhouette */}
            <div className="flex gap-4 mb-6 opacity-20">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-lg"
                  style={{
                    width: 30 + i * 5,
                    height: 80 + i * 15,
                    background: 'linear-gradient(to top, rgba(168,85,247,0.3), transparent)',
                    border: '1px dashed rgba(168,85,247,0.3)',
                  }}
                />
              ))}
            </div>
            <p className="text-gray-500 text-sm mb-2">Your cabinet is empty</p>
            <div className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-medium flex items-center gap-2 shadow-lg shadow-purple-500/25">
              <Plus className="h-4 w-4" />
              Stock Your Cabinet
            </div>
          </div>
        )}

        {/* Hover overlay for editing */}
        {!isEmpty && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/30 backdrop-blur-[2px] pointer-events-none">
            <div className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-medium flex items-center gap-2 shadow-lg shadow-purple-500/30 transform scale-95 group-hover:scale-100 transition-transform">
              <Plus className="h-4 w-4" />
              Edit Cabinet
            </div>
          </div>
        )}

        {/* Bottle count */}
        {!isEmpty && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black/40 backdrop-blur-sm rounded-full border border-white/10">
            <span className="text-purple-300 font-medium text-sm">{items.length}</span>
            <span className="text-gray-400 text-sm ml-1.5">bottles</span>
          </div>
        )}
      </div>
    </div>
  );
}
