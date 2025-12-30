// Liquor Cabinet ingredient categories and mappings

export interface IngredientCategory {
  name: string;
  items: string[];
}

export const ingredientCategories: IngredientCategory[] = [
  {
    name: "Spirits",
    items: [
      "Vodka",
      "Gin (London Dry)",
      "Gin (Other)",
      "White Rum",
      "Dark Rum",
      "Spiced Rum",
      "Tequila (Blanco)",
      "Tequila (Reposado)",
      "Bourbon",
      "Rye Whiskey",
      "Scotch",
      "Irish Whiskey",
      "Brandy/Cognac",
    ],
  },
  {
    name: "Liqueurs",
    items: [
      "Triple Sec/Cointreau",
      "Amaretto",
      "Kahlúa/Coffee Liqueur",
      "Baileys/Irish Cream",
      "Campari",
      "Aperol",
      "Chambord",
      "Blue Curaçao",
      "Peach Schnapps",
      "Midori",
      "Crème de Menthe",
      "Crème de Cacao",
      "Maraschino Liqueur",
      "St-Germain/Elderflower",
      "Grand Marnier",
    ],
  },
  {
    name: "Mixers",
    items: [
      "Ginger Beer",
      "Tonic Water",
      "Soda Water/Club Soda",
      "Cola",
      "Lemon-Lime Soda",
      "Cranberry Juice",
      "Orange Juice",
      "Pineapple Juice",
      "Grapefruit Juice",
      "Tomato Juice",
      "Apple Juice",
      "Coconut Cream",
      "Cream/Half & Half",
      "Milk",
    ],
  },
  {
    name: "Fresh & Citrus",
    items: [
      "Lime Juice (Fresh)",
      "Lemon Juice (Fresh)",
      "Orange (Fresh)",
      "Lime (Fresh)",
      "Lemon (Fresh)",
      "Mint (Fresh)",
      "Cucumber",
      "Ginger (Fresh)",
    ],
  },
  {
    name: "Syrups & Sweeteners",
    items: [
      "Simple Syrup",
      "Grenadine",
      "Honey Syrup",
      "Agave Nectar",
      "Maple Syrup",
      "Orgeat",
      "Falernum",
    ],
  },
  {
    name: "Beer & Wine",
    items: [
      "Lager Beer",
      "Stout/Porter",
      "Champagne/Prosecco",
      "Red Wine",
      "White Wine",
      "Rosé Wine",
    ],
  },
  {
    name: "Bitters & Extras",
    items: [
      "Angostura Bitters",
      "Orange Bitters",
      "Peychaud's Bitters",
      "Dry Vermouth",
      "Sweet Vermouth",
      "Eggs",
      "Worcestershire Sauce",
      "Hot Sauce/Tabasco",
      "Salt",
      "Sugar",
    ],
  },
];

// Map recipe ingredient names to cabinet ingredient names
// This allows fuzzy matching between what's in recipes and what users select
export const ingredientToCabinet: Record<string, string> = {
  // Spirits
  "Vodka": "Vodka",
  "Gin": "Gin (London Dry)",
  "London Dry Gin": "Gin (London Dry)",
  "White Rum": "White Rum",
  "Light Rum": "White Rum",
  "Rum": "White Rum",
  "Dark Rum": "Dark Rum",
  "Aged Rum": "Dark Rum",
  "Spiced Rum": "Spiced Rum",
  "Tequila": "Tequila (Blanco)",
  "Blanco Tequila": "Tequila (Blanco)",
  "Silver Tequila": "Tequila (Blanco)",
  "Reposado Tequila": "Tequila (Reposado)",
  "Bourbon": "Bourbon",
  "Bourbon Whiskey": "Bourbon",
  "Rye Whiskey": "Rye Whiskey",
  "Rye": "Rye Whiskey",
  "Whiskey": "Bourbon",
  "Scotch": "Scotch",
  "Scotch Whisky": "Scotch",
  "Irish Whiskey": "Irish Whiskey",
  "Brandy": "Brandy/Cognac",
  "Cognac": "Brandy/Cognac",

  // Liqueurs
  "Triple Sec": "Triple Sec/Cointreau",
  "Cointreau": "Triple Sec/Cointreau",
  "Orange Liqueur": "Triple Sec/Cointreau",
  "Curaçao": "Triple Sec/Cointreau",
  "Amaretto": "Amaretto",
  "Kahlúa": "Kahlúa/Coffee Liqueur",
  "Coffee Liqueur": "Kahlúa/Coffee Liqueur",
  "Baileys": "Baileys/Irish Cream",
  "Irish Cream": "Baileys/Irish Cream",
  "Campari": "Campari",
  "Aperol": "Aperol",
  "Chambord": "Chambord",
  "Blue Curaçao": "Blue Curaçao",
  "Peach Schnapps": "Peach Schnapps",
  "Midori": "Midori",
  "Melon Liqueur": "Midori",
  "Crème de Menthe": "Crème de Menthe",
  "Crème de Cacao": "Crème de Cacao",
  "Maraschino": "Maraschino Liqueur",
  "Maraschino Liqueur": "Maraschino Liqueur",
  "St-Germain": "St-Germain/Elderflower",
  "Elderflower Liqueur": "St-Germain/Elderflower",
  "Grand Marnier": "Grand Marnier",

  // Mixers
  "Ginger Beer": "Ginger Beer",
  "Tonic Water": "Tonic Water",
  "Tonic": "Tonic Water",
  "Soda Water": "Soda Water/Club Soda",
  "Club Soda": "Soda Water/Club Soda",
  "Sparkling Water": "Soda Water/Club Soda",
  "Cola": "Cola",
  "Coca-Cola": "Cola",
  "Sprite": "Lemon-Lime Soda",
  "7-Up": "Lemon-Lime Soda",
  "Lemon-Lime Soda": "Lemon-Lime Soda",
  "Cranberry Juice": "Cranberry Juice",
  "Orange Juice": "Orange Juice",
  "OJ": "Orange Juice",
  "Pineapple Juice": "Pineapple Juice",
  "Grapefruit Juice": "Grapefruit Juice",
  "Tomato Juice": "Tomato Juice",
  "Apple Juice": "Apple Juice",
  "Apple Cider": "Apple Juice",
  "Coconut Cream": "Coconut Cream",
  "Cream of Coconut": "Coconut Cream",
  "Cream": "Cream/Half & Half",
  "Half & Half": "Cream/Half & Half",
  "Heavy Cream": "Cream/Half & Half",
  "Milk": "Milk",

  // Fresh & Citrus
  "Lime Juice": "Lime Juice (Fresh)",
  "Fresh Lime Juice": "Lime Juice (Fresh)",
  "Lemon Juice": "Lemon Juice (Fresh)",
  "Fresh Lemon Juice": "Lemon Juice (Fresh)",
  "Orange": "Orange (Fresh)",
  "Lime": "Lime (Fresh)",
  "Lime Wedge": "Lime (Fresh)",
  "Lime Wheel": "Lime (Fresh)",
  "Lemon": "Lemon (Fresh)",
  "Lemon Wedge": "Lemon (Fresh)",
  "Lemon Twist": "Lemon (Fresh)",
  "Mint": "Mint (Fresh)",
  "Fresh Mint": "Mint (Fresh)",
  "Mint Leaves": "Mint (Fresh)",
  "Cucumber": "Cucumber",
  "Ginger": "Ginger (Fresh)",
  "Fresh Ginger": "Ginger (Fresh)",

  // Syrups
  "Simple Syrup": "Simple Syrup",
  "Sugar Syrup": "Simple Syrup",
  "Grenadine": "Grenadine",
  "Honey Syrup": "Honey Syrup",
  "Honey": "Honey Syrup",
  "Agave Nectar": "Agave Nectar",
  "Agave": "Agave Nectar",
  "Agave Syrup": "Agave Nectar",
  "Maple Syrup": "Maple Syrup",
  "Orgeat": "Orgeat",
  "Falernum": "Falernum",

  // Beer & Wine
  "Beer": "Lager Beer",
  "Lager": "Lager Beer",
  "Stout": "Stout/Porter",
  "Guinness": "Stout/Porter",
  "Champagne": "Champagne/Prosecco",
  "Prosecco": "Champagne/Prosecco",
  "Sparkling Wine": "Champagne/Prosecco",
  "Red Wine": "Red Wine",
  "White Wine": "White Wine",
  "Rosé": "Rosé Wine",

  // Bitters & Extras
  "Angostura Bitters": "Angostura Bitters",
  "Bitters": "Angostura Bitters",
  "Orange Bitters": "Orange Bitters",
  "Peychaud's Bitters": "Peychaud's Bitters",
  "Dry Vermouth": "Dry Vermouth",
  "Sweet Vermouth": "Sweet Vermouth",
  "Vermouth": "Sweet Vermouth",
  "Egg": "Eggs",
  "Egg White": "Eggs",
  "Egg Yolk": "Eggs",
  "Worcestershire Sauce": "Worcestershire Sauce",
  "Worcestershire": "Worcestershire Sauce",
  "Hot Sauce": "Hot Sauce/Tabasco",
  "Tabasco": "Hot Sauce/Tabasco",
  "Salt": "Salt",
  "Salt & Pepper": "Salt",
  "Sugar": "Sugar",
};

// Get all unique cabinet items as a flat array
export function getAllCabinetItems(): string[] {
  return ingredientCategories.flatMap((cat) => cat.items);
}

// Normalize a recipe ingredient to a cabinet item
export function normalizeIngredient(ingredientName: string): string | null {
  // Direct match
  if (ingredientToCabinet[ingredientName]) {
    return ingredientToCabinet[ingredientName];
  }

  // Try lowercase match
  const lowerName = ingredientName.toLowerCase();
  for (const [key, value] of Object.entries(ingredientToCabinet)) {
    if (key.toLowerCase() === lowerName) {
      return value;
    }
  }

  // Try partial match (ingredient name contains a known ingredient)
  for (const [key, value] of Object.entries(ingredientToCabinet)) {
    if (lowerName.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerName)) {
      return value;
    }
  }

  return null;
}
