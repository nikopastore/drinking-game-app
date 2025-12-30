"use client";

import { useMemo } from "react";
import { Plus } from "lucide-react";
import { ingredientCategories } from "@/config/cabinetIngredients";

interface CabinetVisualProps {
  items: string[];
  onAddClick: () => void;
}

// Map ingredient categories to bottle colors
const categoryColors: Record<string, string> = {
  "Spirits": "#a855f7",        // Purple
  "Liqueurs": "#ec4899",       // Pink
  "Mixers": "#22d3ee",         // Cyan
  "Fresh & Citrus": "#84cc16", // Lime
  "Syrups & Sweeteners": "#f59e0b", // Amber
  "Beer & Wine": "#ef4444",    // Red
  "Bitters & Extras": "#6366f1", // Indigo
};

// Get category for an ingredient
function getCategoryForItem(item: string): string | null {
  for (const category of ingredientCategories) {
    if (category.items.includes(item)) {
      return category.name;
    }
  }
  return null;
}

// Bottle component
function Bottle({
  color,
  label,
  x,
  y,
}: {
  color: string;
  label: string;
  x: number;
  y: number;
}) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Bottle body */}
      <rect
        x="4"
        y="20"
        width="32"
        height="50"
        rx="4"
        fill={color}
        opacity="0.9"
      />
      {/* Bottle neck */}
      <rect
        x="12"
        y="5"
        width="16"
        height="18"
        rx="2"
        fill={color}
        opacity="0.9"
      />
      {/* Bottle cap */}
      <rect
        x="14"
        y="0"
        width="12"
        height="6"
        rx="1"
        fill="#374151"
      />
      {/* Label area */}
      <rect
        x="8"
        y="35"
        width="24"
        height="20"
        rx="2"
        fill="white"
        opacity="0.9"
      />
      {/* Shine effect */}
      <rect
        x="8"
        y="25"
        width="4"
        height="30"
        rx="2"
        fill="white"
        opacity="0.2"
      />
      {/* Tooltip on hover - using title element for SVG */}
      <title>{label}</title>
    </g>
  );
}

// Empty slot
function EmptySlot({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        x="4"
        y="20"
        width="32"
        height="50"
        rx="4"
        fill="none"
        stroke="#374151"
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.5"
      />
    </g>
  );
}

export function CabinetVisual({ items, onAddClick }: CabinetVisualProps) {
  // Organize items by category and get colors
  const bottleData = useMemo(() => {
    return items.map((item) => {
      const category = getCategoryForItem(item);
      const color = category ? categoryColors[category] : "#6b7280";
      return { item, color };
    });
  }, [items]);

  // Arrange bottles on 4 shelves, 8 bottles per shelf
  const shelvesData = useMemo(() => {
    const shelves: Array<Array<{ item: string; color: string } | null>> = [
      [],
      [],
      [],
      [],
    ];

    bottleData.forEach((bottle, index) => {
      const shelfIndex = Math.floor(index / 8);
      if (shelfIndex < 4) {
        shelves[shelfIndex].push(bottle);
      }
    });

    // Fill remaining slots with nulls (empty slots)
    shelves.forEach((shelf) => {
      while (shelf.length < 8) {
        shelf.push(null);
      }
    });

    return shelves;
  }, [bottleData]);

  const cabinetWidth = 400;
  const cabinetHeight = 360;
  const shelfHeight = 80;
  const bottleWidth = 45;
  const shelfPadding = 10;

  return (
    <div
      className="relative cursor-pointer group"
      onClick={onAddClick}
    >
      <svg
        viewBox={`0 0 ${cabinetWidth} ${cabinetHeight}`}
        className="w-full max-w-md mx-auto"
        style={{ maxHeight: "400px" }}
      >
        {/* Cabinet background */}
        <defs>
          <linearGradient id="woodGrain" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#44403c" }} />
            <stop offset="50%" style={{ stopColor: "#292524" }} />
            <stop offset="100%" style={{ stopColor: "#1c1917" }} />
          </linearGradient>
          <linearGradient id="shelfGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#57534e" }} />
            <stop offset="100%" style={{ stopColor: "#44403c" }} />
          </linearGradient>
        </defs>

        {/* Cabinet outer frame */}
        <rect
          x="5"
          y="5"
          width={cabinetWidth - 10}
          height={cabinetHeight - 10}
          rx="12"
          fill="url(#woodGrain)"
          stroke="#78716c"
          strokeWidth="3"
        />

        {/* Cabinet inner area */}
        <rect
          x="15"
          y="15"
          width={cabinetWidth - 30}
          height={cabinetHeight - 30}
          rx="8"
          fill="#171717"
        />

        {/* Shelves and bottles */}
        {shelvesData.map((shelf, shelfIndex) => {
          const shelfY = 25 + shelfIndex * shelfHeight;

          return (
            <g key={shelfIndex}>
              {/* Shelf surface */}
              <rect
                x="20"
                y={shelfY + 70}
                width={cabinetWidth - 40}
                height="8"
                fill="url(#shelfGradient)"
                rx="2"
              />

              {/* Bottles on this shelf */}
              {shelf.map((bottle, bottleIndex) => {
                const bottleX = 25 + bottleIndex * bottleWidth;
                const bottleY = shelfY;

                if (bottle) {
                  return (
                    <Bottle
                      key={`${shelfIndex}-${bottleIndex}`}
                      color={bottle.color}
                      label={bottle.item}
                      x={bottleX}
                      y={bottleY}
                    />
                  );
                } else if (shelfIndex === 0 || bottleData.length > shelfIndex * 8) {
                  // Only show empty slots on first shelf or if shelf has some bottles
                  return null; // Don't show empty slots to keep it cleaner
                }
                return null;
              })}
            </g>
          );
        })}

        {/* Add button overlay when empty or hovering */}
        {items.length === 0 && (
          <g>
            <rect
              x={cabinetWidth / 2 - 60}
              y={cabinetHeight / 2 - 30}
              width="120"
              height="60"
              rx="12"
              fill="#a855f7"
              opacity="0.9"
            />
            <text
              x={cabinetWidth / 2}
              y={cabinetHeight / 2 + 5}
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontWeight="bold"
            >
              + Add Items
            </text>
          </g>
        )}
      </svg>

      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 rounded-xl">
        <div className="bg-neon-purple text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium">
          <Plus className="h-5 w-5" />
          {items.length === 0 ? "Stock Your Cabinet" : "Edit Cabinet"}
        </div>
      </div>

      {/* Item count */}
      {items.length > 0 && (
        <div className="text-center mt-2">
          <span className="text-gray-400 text-sm">
            {items.length} item{items.length !== 1 ? "s" : ""} in your cabinet
          </span>
        </div>
      )}
    </div>
  );
}
