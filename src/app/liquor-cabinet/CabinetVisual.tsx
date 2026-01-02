"use client";

import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import Image from "next/image";
import { ingredientCategories } from "@/config/cabinetIngredients";

interface CabinetVisualProps {
  items: string[];
  onAddClick: () => void;
}

// Map ingredients to bottle images
// Available bottles:
// - absolut-vodka.png: Absolut Vodka (tall, blue text, clear)
// - grey-goose.png: Grey Goose (frosted, elegant)
// - vodka.png: Belvedere Vodka (tall, frosted)
// - gin.png: Tanqueray (green, cocktail shaker shape)
// - tequila.png: Jose Cuervo (tall, gold)
// - whiskey.png: Jack Daniel's (square, black label)
// - cognac.png: Hennessy (curved, amber)
// - brandy.png: St-Rémy VSOP (rounded, golden)
// - cointreau.png: Cointreau (square, orange)
// - amaretto.png: Disaronno (square, amber)
// - dry-vermouth.png: Martini Bianco (white label)
// - sweet-vermouth.png: Martini Rosso (red label)
// - champagne.png: Moët (green, gold foil)
// - champagne-large.png: Large champagne
// - wine-red.png: Bordeaux red wine
// - beer.png: Brown longneck
// - beer-bottle.png: Generic beer
// - becks-beer.png: Beck's green bottle

const bottleImages: Record<string, string> = {
  // Spirits
  "Vodka": "/bottles/absolut-vodka.png",
  "Gin (London Dry)": "/bottles/gin.png",
  "Gin (Other)": "/bottles/gin.png",
  "White Rum": "/bottles/grey-goose.png",  // Clear/frosted bottle
  "Dark Rum": "/bottles/cognac.png",  // Amber bottle
  "Spiced Rum": "/bottles/brandy.png",  // Golden bottle
  "Tequila (Blanco)": "/bottles/tequila.png",
  "Tequila (Reposado)": "/bottles/tequila.png",
  "Bourbon": "/bottles/whiskey.png",
  "Rye Whiskey": "/bottles/whiskey.png",
  "Scotch": "/bottles/whiskey.png",
  "Irish Whiskey": "/bottles/whiskey.png",
  "Brandy/Cognac": "/bottles/cognac.png",

  // Liqueurs
  "Triple Sec/Cointreau": "/bottles/cointreau.png",
  "Amaretto": "/bottles/amaretto.png",
  "Kahlúa/Coffee Liqueur": "/bottles/brandy.png",  // Dark amber
  "Baileys/Irish Cream": "/bottles/brandy.png",
  "Campari": "/bottles/wine-red.png",  // Red bottle
  "Aperol": "/bottles/tequila.png",  // Orange bottle
  "Chambord": "/bottles/wine-red.png",  // Dark purple
  "Blue Curaçao": "/bottles/gin.png",  // Blue/green
  "Peach Schnapps": "/bottles/vodka.png",
  "Midori": "/bottles/gin.png",  // Green
  "Crème de Menthe": "/bottles/gin.png",  // Green
  "Crème de Cacao": "/bottles/brandy.png",  // Brown
  "Maraschino Liqueur": "/bottles/vodka.png",  // Clear
  "St-Germain/Elderflower": "/bottles/vodka.png",  // Clear
  "Grand Marnier": "/bottles/cognac.png",  // Cognac-style

  // Mixers
  "Ginger Beer": "/bottles/beer-bottle.png",
  "Tonic Water": "/bottles/vodka.png",
  "Soda Water/Club Soda": "/bottles/vodka.png",
  "Cola": "/bottles/beer.png",
  "Lemon-Lime Soda": "/bottles/vodka.png",
  "Cranberry Juice": "/bottles/wine-red.png",
  "Orange Juice": "/bottles/tequila.png",
  "Pineapple Juice": "/bottles/tequila.png",
  "Grapefruit Juice": "/bottles/tequila.png",
  "Tomato Juice": "/bottles/wine-red.png",
  "Apple Juice": "/bottles/tequila.png",
  "Coconut Cream": "/bottles/vodka.png",
  "Cream/Half & Half": "/bottles/vodka.png",
  "Milk": "/bottles/vodka.png",

  // Fresh & Citrus
  "Lime Juice (Fresh)": "/bottles/vodka.png",
  "Lemon Juice (Fresh)": "/bottles/vodka.png",
  "Orange (Fresh)": "/bottles/tequila.png",
  "Lime (Fresh)": "/bottles/gin.png",
  "Lemon (Fresh)": "/bottles/tequila.png",
  "Mint (Fresh)": "/bottles/gin.png",
  "Cucumber": "/bottles/gin.png",
  "Ginger (Fresh)": "/bottles/tequila.png",

  // Syrups & Sweeteners
  "Simple Syrup": "/bottles/vodka.png",
  "Grenadine": "/bottles/wine-red.png",
  "Honey Syrup": "/bottles/tequila.png",
  "Agave Nectar": "/bottles/tequila.png",
  "Maple Syrup": "/bottles/brandy.png",
  "Orgeat": "/bottles/vodka.png",
  "Falernum": "/bottles/vodka.png",

  // Beer & Wine
  "Lager Beer": "/bottles/becks-beer.png",
  "Stout/Porter": "/bottles/beer.png",
  "Champagne/Prosecco": "/bottles/champagne-large.png",
  "Red Wine": "/bottles/wine-red.png",
  "White Wine": "/bottles/champagne.png",
  "Rosé Wine": "/bottles/wine-red.png",

  // Bitters & Extras
  "Angostura Bitters": "/bottles/brandy.png",
  "Orange Bitters": "/bottles/brandy.png",
  "Peychaud's Bitters": "/bottles/wine-red.png",
  "Dry Vermouth": "/bottles/dry-vermouth.png",
  "Sweet Vermouth": "/bottles/sweet-vermouth.png",
  "Eggs": "/bottles/vodka.png",
  "Worcestershire Sauce": "/bottles/brandy.png",
  "Hot Sauce/Tabasco": "/bottles/wine-red.png",
  "Salt": "/bottles/vodka.png",
  "Sugar": "/bottles/vodka.png",

  // Default fallbacks by category
  "_Spirits": "/bottles/absolut-vodka.png",
  "_Liqueurs": "/bottles/cointreau.png",
  "_Beer & Wine": "/bottles/wine-red.png",
  "_Mixers": "/bottles/vodka.png",
  "_Fresh & Citrus": "/bottles/vodka.png",
  "_Syrups & Sweeteners": "/bottles/tequila.png",
  "_Bitters & Extras": "/bottles/brandy.png",
};

function getCategoryForItem(item: string): string {
  for (const category of ingredientCategories) {
    if (category.items.includes(item)) {
      return category.name;
    }
  }
  return "Spirits";
}

function getBottleImage(item: string): string {
  // Direct match
  if (bottleImages[item]) {
    return bottleImages[item];
  }

  // Category fallback
  const category = getCategoryForItem(item);
  const categoryKey = `_${category}`;
  if (bottleImages[categoryKey]) {
    return bottleImages[categoryKey];
  }

  // Ultimate fallback
  return "/bottles/vodka.png";
}

function getCategoryLabel(item: string): string {
  const category = getCategoryForItem(item);
  const labels: Record<string, string> = {
    "Spirits": "Spirit",
    "Liqueurs": "Liqueur",
    "Mixers": "Mixer",
    "Fresh & Citrus": "Fresh",
    "Syrups & Sweeteners": "Syrup",
    "Beer & Wine": "Beverage",
    "Bitters & Extras": "Bitters",
  };
  return labels[category] || "Item";
}

// Real bottle component using images
function BottleImage({
  item,
  isHovered,
  onHover,
  position,
  shelfIndex,
}: {
  item: string;
  isHovered: boolean;
  onHover: (item: string | null) => void;
  position: { x: number; z: number };
  shelfIndex: number;
}) {
  const imageSrc = getBottleImage(item);
  const label = getCategoryLabel(item);

  // Depth scaling - back shelves have smaller bottles
  const baseHeight = 120;
  const depthScale = 0.75 + (shelfIndex * 0.125);
  const height = baseHeight * depthScale;

  // Top shelf (index 2) - tooltip goes below, less lift on hover
  const isTopShelf = shelfIndex === 2;
  const hoverLift = isTopShelf ? 8 : 15;

  return (
    <div
      className="transition-all duration-300 ease-out cursor-pointer relative"
      style={{
        transform: `translateX(-50%) ${isHovered ? `translateY(-${hoverLift}px) scale(1.08)` : 'translateY(0) scale(1)'}`,
        filter: isHovered
          ? 'drop-shadow(0 25px 30px rgba(0,0,0,0.5)) drop-shadow(0 0 20px rgba(168,85,247,0.4))'
          : 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))',
      }}
      onMouseEnter={() => onHover(item)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Hover detail card - positioned ABOVE for bottom/middle shelves */}
      {isHovered && !isTopShelf && (
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 px-4 py-2.5 rounded-xl whitespace-nowrap"
          style={{
            zIndex: 1001,
            background: 'linear-gradient(135deg, rgba(20,10,30,0.98), rgba(30,15,45,0.98))',
            border: '1px solid rgba(168,85,247,0.4)',
            boxShadow: '0 15px 50px rgba(0,0,0,0.6), 0 0 30px rgba(168,85,247,0.3)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <p className="text-white font-semibold text-sm">{item}</p>
          <p className="text-purple-300 text-xs mt-0.5">{label}</p>
          {/* Arrow pointing down */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0"
            style={{
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderTop: '8px solid rgba(30,15,45,0.98)',
            }}
          />
        </div>
      )}

      {/* Bottle image */}
      <div
        className="relative"
        style={{ height: `${height}px`, width: `${height * 0.4}px` }}
      >
        <Image
          src={imageSrc}
          alt={item}
          fill
          className="object-contain"
          sizes={`${Math.round(height * 0.4)}px`}
        />
      </div>

      {/* Hover detail card - positioned BELOW for top shelf */}
      {isHovered && isTopShelf && (
        <div
          className="absolute left-1/2 -translate-x-1/2 top-full mt-3 px-4 py-2.5 rounded-xl whitespace-nowrap"
          style={{
            zIndex: 1001,
            background: 'linear-gradient(135deg, rgba(20,10,30,0.98), rgba(30,15,45,0.98))',
            border: '1px solid rgba(168,85,247,0.4)',
            boxShadow: '0 15px 50px rgba(0,0,0,0.6), 0 0 30px rgba(168,85,247,0.3)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <p className="text-white font-semibold text-sm">{item}</p>
          <p className="text-purple-300 text-xs mt-0.5">{label}</p>
          {/* Arrow pointing up */}
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-full w-0 h-0"
            style={{
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderBottom: '8px solid rgba(30,15,45,0.98)',
            }}
          />
        </div>
      )}

      {/* Glow effect under bottle */}
      {isHovered && (
        <div
          className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-16 h-8 rounded-full blur-xl"
          style={{
            background: 'radial-gradient(ellipse, rgba(168,85,247,0.6), transparent)',
          }}
        />
      )}
    </div>
  );
}

// Glass shelf component
function GlassShelf({ index }: { index: number }) {
  // Perspective: back shelves narrower
  const widthPercent = 70 + (index * 10);
  const leftOffset = (100 - widthPercent) / 2;

  return (
    <div
      className="absolute left-0 right-0 pointer-events-none"
      style={{
        bottom: `${8 + index * 30}%`,
        height: '6px',
        zIndex: index * 5,
      }}
    >
      {/* Main shelf surface */}
      <div
        className="absolute h-full"
        style={{
          left: `${leftOffset}%`,
          width: `${widthPercent}%`,
          background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)',
          boxShadow: `
            0 2px 15px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.15),
            inset 0 -1px 0 rgba(0,0,0,0.2)
          `,
          borderRadius: '2px',
        }}
      />

      {/* LED underglow */}
      <div
        className="absolute blur-lg"
        style={{
          left: `${leftOffset + 3}%`,
          width: `${widthPercent - 6}%`,
          top: '6px',
          height: '20px',
          background: 'linear-gradient(180deg, rgba(168,85,247,0.5) 0%, rgba(168,85,247,0.1) 50%, transparent 100%)',
        }}
      />

      {/* Edge highlight */}
      <div
        className="absolute h-px"
        style={{
          left: `${leftOffset}%`,
          width: `${widthPercent}%`,
          top: 0,
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 20%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.3) 80%, transparent 100%)',
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

    // Distribute items across shelves, balancing them
    items.forEach((item, idx) => {
      // Distribute evenly, starting from back shelf
      const shelfIdx = idx % 3;
      const itemsOnShelf = shelves[shelfIdx].length;

      // Calculate position with natural spacing
      const maxPerShelf = Math.ceil(items.length / 3) + 1;
      const spacing = 70 / maxPerShelf;
      const baseX = 15 + (itemsOnShelf * spacing);
      const randomOffset = (Math.random() - 0.5) * 8;
      const x = Math.max(12, Math.min(88, baseX + randomOffset));
      const z = Math.random() * 5;

      shelves[shelfIdx].push({ item, position: { x, z } });
    });

    return shelves;
  }, [items]);

  const isEmpty = items.length === 0;

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Cabinet container */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          height: '450px',
          background: `
            linear-gradient(180deg,
              rgba(25,15,10,1) 0%,
              rgba(12,8,15,1) 30%,
              rgba(8,5,12,1) 100%
            )
          `,
          boxShadow: `
            0 30px 80px -20px rgba(0, 0, 0, 0.8),
            inset 0 1px 0 rgba(255,255,255,0.03),
            inset 0 -100px 100px -80px rgba(168,85,247,0.08)
          `,
        }}
      >
        {/* Ambient warm light from top (bar lighting) */}
        <div
          className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 100% 80% at 50% -20%,
                rgba(255,200,120,0.12) 0%,
                rgba(255,160,80,0.06) 30%,
                transparent 60%
              )
            `,
          }}
        />

        {/* Side ambient lights */}
        <div
          className="absolute top-0 left-0 bottom-0 w-20 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(168,85,247,0.03) 0%, transparent 100%)',
          }}
        />
        <div
          className="absolute top-0 right-0 bottom-0 w-20 pointer-events-none"
          style={{
            background: 'linear-gradient(-90deg, rgba(168,85,247,0.03) 0%, transparent 100%)',
          }}
        />

        {/* Mirror/glass back panel */}
        <div
          className="absolute inset-x-6 top-6 bottom-6 rounded-lg pointer-events-none"
          style={{
            background: `
              linear-gradient(180deg,
                rgba(255,255,255,0.015) 0%,
                rgba(255,255,255,0.005) 50%,
                rgba(168,85,247,0.02) 100%
              )
            `,
            border: '1px solid rgba(255,255,255,0.02)',
          }}
        />

        {/* Glass shelves */}
        {[0, 1, 2].map((i) => (
          <GlassShelf key={i} index={i} />
        ))}

        {/* All bottles in single container for proper z-index stacking */}
        <div className="absolute inset-4 bottom-4" style={{ zIndex: 50 }}>
          {shelfItems.map((shelf, shelfIndex) =>
            shelf.map(({ item, position }) => (
              <div
                key={item}
                className="bottle-item absolute"
                style={{
                  left: `${position.x}%`,
                  bottom: `${8 + shelfIndex * 30}%`,
                  zIndex: hoveredItem === item ? 1000 : 10 + shelfIndex * 10 + Math.round(position.z),
                }}
              >
                <BottleImage
                  item={item}
                  isHovered={hoveredItem === item}
                  onHover={setHoveredItem}
                  position={position}
                  shelfIndex={shelfIndex}
                />
              </div>
            ))
          )}
        </div>

        {/* Empty state */}
        {isEmpty && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Ghost bottle silhouettes */}
            <div className="flex items-end gap-6 mb-8 opacity-15">
              {[90, 110, 80, 100, 70].map((h, i) => (
                <div
                  key={i}
                  className="rounded-t-lg"
                  style={{
                    width: h * 0.3,
                    height: h,
                    background: `linear-gradient(180deg, rgba(168,85,247,0.3) 0%, rgba(168,85,247,0.1) 100%)`,
                    border: '1px dashed rgba(168,85,247,0.4)',
                  }}
                />
              ))}
            </div>
            <p className="text-gray-500 text-sm mb-3">Your cabinet is empty</p>
            <button
              onClick={onAddClick}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold flex items-center gap-2 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow"
            >
              <Plus className="h-5 w-5" />
              Stock Your Cabinet
            </button>
          </div>
        )}
      </div>

      {/* Controls below cabinet (moved outside) */}
      {!isEmpty && (
        <div className="flex items-center justify-between mt-4 px-2">
          {/* Bottle count badge */}
          <div className="px-5 py-2.5 bg-dark-800 rounded-xl border border-dark-600">
            <span className="text-purple-400 font-bold text-lg">{items.length}</span>
            <span className="text-gray-400 text-sm ml-2">bottles in cabinet</span>
          </div>

          {/* Edit button */}
          <button
            onClick={onAddClick}
            className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold flex items-center gap-2 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all"
          >
            <Plus className="h-5 w-5" />
            Edit Cabinet
          </button>
        </div>
      )}
    </div>
  );
}
