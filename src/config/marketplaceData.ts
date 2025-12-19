// Marketplace product data for affiliate links

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: Category;
  affiliateUrl: string;
  badge?: "bestseller" | "new" | "trending";
}

export type Category =
  | "drinkware"
  | "party-games"
  | "bar-tools"
  | "decor"
  | "apparel"
  | "accessories";

export const categories: { id: Category; name: string; description: string }[] = [
  { id: "drinkware", name: "Drinkware", description: "Cups, glasses, and vessels" },
  { id: "party-games", name: "Party Games", description: "Games and game accessories" },
  { id: "bar-tools", name: "Bar Tools", description: "Essential bartending gear" },
  { id: "decor", name: "Party Decor", description: "Lights, signs, and atmosphere" },
  { id: "apparel", name: "Apparel", description: "Party-ready clothing" },
  { id: "accessories", name: "Accessories", description: "Fun extras and gadgets" },
];

// Placeholder images - replace with actual product images or use Amazon image URLs
export const products: Product[] = [
  // Drinkware
  {
    id: "1",
    name: "Red Solo Cups 100-Pack",
    description: "The classic party essential. Heavy-duty, 16oz cups perfect for any drinking game.",
    price: "$12.99",
    image: "/marketplace/cups.jpg",
    category: "drinkware",
    affiliateUrl: "https://a.co/d/eUXpEON",
    badge: "bestseller",
  },
  {
    id: "2",
    name: "LED Glow Cups Set",
    description: "Light-up party cups that change colors. Perfect for night parties.",
    price: "$24.99",
    image: "/marketplace/glow-cups.jpg",
    category: "drinkware",
    affiliateUrl: "https://www.amazon.com/s?k=led+party+cups&tag=sipwiki-20",
    badge: "trending",
  },
  {
    id: "3",
    name: "Giant Beer Goblet",
    description: "32oz oversized goblet for the King's Cup champion.",
    price: "$19.99",
    image: "/marketplace/goblet.jpg",
    category: "drinkware",
    affiliateUrl: "https://www.amazon.com/s?k=giant+beer+goblet&tag=sipwiki-20",
  },
  {
    id: "4",
    name: "Shot Glass Set (12pc)",
    description: "Unbreakable plastic shot glasses. Party-proof design.",
    price: "$14.99",
    image: "/marketplace/shots.jpg",
    category: "drinkware",
    affiliateUrl: "https://www.amazon.com/s?k=plastic+shot+glasses&tag=sipwiki-20",
  },

  // Party Games
  {
    id: "5",
    name: "Waterproof Playing Cards",
    description: "Spill-proof cards that survive any party. Premium plastic construction.",
    price: "$9.99",
    image: "/marketplace/cards.jpg",
    category: "party-games",
    affiliateUrl: "https://a.co/d/b2Y6Jm2",
    badge: "bestseller",
  },
  {
    id: "6",
    name: "Beer Pong Ball Set",
    description: "Pro-grade ping pong balls. Orange for visibility, perfect bounce.",
    price: "$8.99",
    image: "/marketplace/balls.jpg",
    category: "party-games",
    affiliateUrl: "https://a.co/d/5XLkYU5",
  },
  {
    id: "7",
    name: "Drinking Dice Set",
    description: "Custom dice with drinking commands. Instant party starter.",
    price: "$11.99",
    image: "/marketplace/dice.jpg",
    category: "party-games",
    affiliateUrl: "https://a.co/d/76GnIfa",
    badge: "new",
  },
  {
    id: "8",
    name: "Giant Tumbling Tower",
    description: "Oversized wood block game. Write rules on blocks for Drunk Jenga.",
    price: "$44.99",
    image: "/marketplace/jenga.jpg",
    category: "party-games",
    affiliateUrl: "https://www.amazon.com/s?k=giant+tumbling+tower&tag=sipwiki-20",
  },

  // Bar Tools
  {
    id: "9",
    name: "Bartender Kit 24-Piece",
    description: "Complete cocktail shaker set with stand. Professional quality.",
    price: "$39.99",
    image: "/marketplace/bartender-kit.jpg",
    category: "bar-tools",
    affiliateUrl: "https://www.amazon.com/s?k=bartender+kit&tag=sipwiki-20",
    badge: "trending",
  },
  {
    id: "10",
    name: "Ice Ball Maker",
    description: "Silicone mold for perfect spherical ice. Slow-melting for better drinks.",
    price: "$12.99",
    image: "/marketplace/ice-mold.jpg",
    category: "bar-tools",
    affiliateUrl: "https://www.amazon.com/s?k=ice+ball+mold&tag=sipwiki-20",
  },
  {
    id: "11",
    name: "Electric Wine Opener",
    description: "One-touch automatic corkscrew. Opens bottles in seconds.",
    price: "$24.99",
    image: "/marketplace/wine-opener.jpg",
    category: "bar-tools",
    affiliateUrl: "https://www.amazon.com/s?k=electric+wine+opener&tag=sipwiki-20",
  },

  // Decor
  {
    id: "12",
    name: "LED Neon Bar Sign",
    description: "\"Bar\" neon sign with USB power. Perfect party atmosphere.",
    price: "$29.99",
    image: "/marketplace/neon-sign.jpg",
    category: "decor",
    affiliateUrl: "https://www.amazon.com/s?k=neon+bar+sign&tag=sipwiki-20",
    badge: "trending",
  },
  {
    id: "13",
    name: "RGB LED Strip Lights",
    description: "50ft color-changing lights with remote. Set the party mood.",
    price: "$19.99",
    image: "/marketplace/led-strip.jpg",
    category: "decor",
    affiliateUrl: "https://www.amazon.com/s?k=led+strip+lights+party&tag=sipwiki-20",
  },
  {
    id: "14",
    name: "Disco Ball Light",
    description: "Rotating disco ball with LED lights. Instant dance floor vibes.",
    price: "$16.99",
    image: "/marketplace/disco-ball.jpg",
    category: "decor",
    affiliateUrl: "https://www.amazon.com/s?k=disco+ball+light&tag=sipwiki-20",
  },

  // Accessories
  {
    id: "15",
    name: "Bluetooth Party Speaker",
    description: "Loud, portable speaker with LED lights. 24-hour battery life.",
    price: "$49.99",
    image: "/marketplace/speaker.jpg",
    category: "accessories",
    affiliateUrl: "https://www.amazon.com/s?k=bluetooth+party+speaker&tag=sipwiki-20",
    badge: "bestseller",
  },
  {
    id: "16",
    name: "Beer Belt Holster",
    description: "Holds 6 cans hands-free. Essential for tailgates and parties.",
    price: "$14.99",
    image: "/marketplace/beer-belt.jpg",
    category: "accessories",
    affiliateUrl: "https://www.amazon.com/s?k=beer+belt+holster&tag=sipwiki-20",
    badge: "new",
  },
  {
    id: "17",
    name: "Drink Chiller Sticks",
    description: "Stainless steel cooling sticks. Keep drinks cold without diluting.",
    price: "$18.99",
    image: "/marketplace/chiller.jpg",
    category: "accessories",
    affiliateUrl: "https://www.amazon.com/s?k=drink+chiller+sticks&tag=sipwiki-20",
  },
];

export const getFeaturedProducts = () => products.filter(p => p.badge === "bestseller" || p.badge === "trending");
export const getNewProducts = () => products.filter(p => p.badge === "new");
export const getProductsByCategory = (category: Category) => products.filter(p => p.category === category);
