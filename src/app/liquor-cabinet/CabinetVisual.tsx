"use client";

import { useState } from "react";
import { Plus, Wine } from "lucide-react";
import Image from "next/image";
import { ingredientCategories } from "@/config/cabinetIngredients";

interface CabinetVisualProps {
  items: string[];
  onAddClick: () => void;
}

// Map ingredients to bottle images
const bottleImages: Record<string, string> = {
  // Spirits
  "Vodka": "/bottles/absolut-vodka.png",
  "Gin (London Dry)": "/bottles/gin.png",
  "Gin (Other)": "/bottles/gin.png",
  "White Rum": "/bottles/grey-goose.png",
  "Dark Rum": "/bottles/cognac.png",
  "Spiced Rum": "/bottles/brandy.png",
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
  "Kahlúa/Coffee Liqueur": "/bottles/brandy.png",
  "Baileys/Irish Cream": "/bottles/brandy.png",
  "Campari": "/bottles/wine-red.png",
  "Aperol": "/bottles/tequila.png",
  "Chambord": "/bottles/wine-red.png",
  "Blue Curaçao": "/bottles/gin.png",
  "Peach Schnapps": "/bottles/vodka.png",
  "Midori": "/bottles/gin.png",
  "Crème de Menthe": "/bottles/gin.png",
  "Crème de Cacao": "/bottles/brandy.png",
  "Maraschino Liqueur": "/bottles/vodka.png",
  "St-Germain/Elderflower": "/bottles/vodka.png",
  "Grand Marnier": "/bottles/cognac.png",
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
  // Fallbacks
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
  if (bottleImages[item]) return bottleImages[item];
  const category = getCategoryForItem(item);
  const categoryKey = `_${category}`;
  if (bottleImages[categoryKey]) return bottleImages[categoryKey];
  return "/bottles/vodka.png";
}

// Single bottle card component
function BottleCard({ item }: { item: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const imageSrc = getBottleImage(item);
  const category = getCategoryForItem(item);

  return (
    <div
      className="group relative flex flex-col items-center p-3 rounded-xl bg-dark-800/50 border border-dark-700 hover:border-purple-500/50 hover:bg-dark-800 transition-all duration-200 cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Bottle image */}
      <div
        className="relative w-12 h-20 mb-2 transition-transform duration-200 group-hover:scale-110"
        style={{
          filter: isHovered
            ? 'drop-shadow(0 8px 16px rgba(0,0,0,0.4)) drop-shadow(0 0 12px rgba(168,85,247,0.3))'
            : 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
        }}
      >
        <Image
          src={imageSrc}
          alt={item}
          fill
          className="object-contain"
          sizes="48px"
        />
      </div>

      {/* Item name */}
      <p className="text-xs text-center text-gray-300 group-hover:text-white transition-colors line-clamp-2 leading-tight font-medium">
        {item}
      </p>

      {/* Category tag */}
      <span className="mt-1 text-[10px] text-purple-400/70 uppercase tracking-wide">
        {category}
      </span>
    </div>
  );
}

export function CabinetVisual({ items, onAddClick }: CabinetVisualProps) {
  const isEmpty = items.length === 0;

  // Group items by category for organized display
  const groupedItems = items.reduce((acc, item) => {
    const category = getCategoryForItem(item);
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {} as Record<string, string[]>);

  const categoryOrder = ["Spirits", "Liqueurs", "Beer & Wine", "Mixers", "Fresh & Citrus", "Syrups & Sweeteners", "Bitters & Extras"];
  const sortedCategories = categoryOrder.filter(cat => groupedItems[cat]);

  return (
    <div className="w-full">
      {/* Empty state */}
      {isEmpty ? (
        <div className="flex flex-col items-center justify-center py-16 px-8 rounded-2xl bg-dark-800/50 border border-dark-700 border-dashed">
          <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
            <Wine className="h-8 w-8 text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Your cabinet is empty</h3>
          <p className="text-gray-400 text-sm text-center mb-6 max-w-sm">
            Add the spirits, mixers, and ingredients you have at home to discover what cocktails you can make.
          </p>
          <button
            onClick={onAddClick}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold flex items-center gap-2 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all"
          >
            <Plus className="h-5 w-5" />
            Stock Your Cabinet
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Header with count and edit button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <Wine className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <p className="text-white font-semibold">{items.length} items</p>
                <p className="text-gray-500 text-sm">{sortedCategories.length} categories</p>
              </div>
            </div>
            <button
              onClick={onAddClick}
              className="px-4 py-2 bg-dark-700 hover:bg-dark-600 border border-dark-600 hover:border-purple-500/50 rounded-xl text-white text-sm font-medium flex items-center gap-2 transition-all"
            >
              <Plus className="h-4 w-4" />
              Edit Cabinet
            </button>
          </div>

          {/* Categorized grid */}
          {sortedCategories.map(category => (
            <div key={category}>
              <h3 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">
                {category}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {groupedItems[category].map(item => (
                  <BottleCard key={item} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
