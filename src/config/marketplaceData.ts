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

export const products: Product[] = [
  // Drinkware
  {
    id: "1",
    name: "Red Party Cups, 100 Pack",
    description: "Heavy-duty 16oz red cups. A hundred of them, for beer pong, flip cup, and the rest of the night.",
    price: "$14",
    image: "/marketplace/cups.jpg",
    category: "drinkware",
    affiliateUrl: "https://www.amazon.com/dp/B0FR3N4683?tag=sipwiki-20",
    badge: "bestseller",
  },
  {
    id: "2",
    name: "LED Glow Cups Set",
    description: "Light-up party cups that change colors. Perfect for night parties.",
    price: "$24.99",
    image: "/marketplace/glow-cups.svg",
    category: "drinkware",
    affiliateUrl: "https://www.amazon.com/s?k=led+party+cups&tag=sipwiki-20",
    badge: "trending",
  },
  {
    id: "3",
    name: "32oz Plastic Beer Mug",
    description: "One big reusable mug for the King's Cup in the middle of the table.",
    price: "$12",
    image: "/marketplace/goblet.jpg",
    category: "drinkware",
    affiliateUrl: "https://www.amazon.com/dp/B0BH95YN45?tag=sipwiki-20",
  },
  {
    id: "4",
    name: "Shot Glass Set (12pc)",
    description: "Unbreakable plastic shot glasses. Party-proof design.",
    price: "$14.99",
    image: "/marketplace/shots.svg",
    category: "drinkware",
    affiliateUrl: "https://www.amazon.com/s?k=plastic+shot+glasses&tag=sipwiki-20",
  },

  // Party Games
  {
    id: "5",
    name: "Hoyle Waterproof Playing Cards",
    description: "One clear plastic deck. It still shuffles when a drink lands on it.",
    price: "$5",
    image: "/marketplace/cards.jpg",
    category: "party-games",
    affiliateUrl: "https://www.amazon.com/dp/B00ULW61SM?tag=sipwiki-20",
    badge: "bestseller",
  },
  {
    id: "6",
    name: "BPONG Orange Beer Pong Balls",
    description: "Twelve orange 40mm balls. The set used for World Series of Beer Pong.",
    price: "$16",
    image: "/marketplace/balls.jpg",
    category: "party-games",
    affiliateUrl: "https://www.amazon.com/dp/B08PF41G4B?tag=sipwiki-20",
  },
  {
    id: "7",
    name: "Drinking Dice Set",
    description: "Custom dice with drinking commands. Instant party starter.",
    price: "$11.99",
    image: "/marketplace/dice.svg",
    category: "party-games",
    affiliateUrl: "https://www.amazon.com/s?k=drinking+dice+set&tag=sipwiki-20",
    badge: "new",
  },
  {
    id: "8",
    name: "Giant Tumbling Tower",
    description: "Oversized wood block game. Write rules on blocks for Drunk Jenga.",
    price: "$44.99",
    image: "/marketplace/jenga.svg",
    category: "party-games",
    affiliateUrl: "https://www.amazon.com/s?k=giant+tumbling+tower&tag=sipwiki-20",
  },

  // Bar Tools
  {
    id: "9",
    name: "Bartender Kit 24-Piece",
    description: "Complete cocktail shaker set with stand. Professional quality.",
    price: "$39.99",
    image: "/marketplace/bartender-kit.svg",
    category: "bar-tools",
    affiliateUrl: "https://www.amazon.com/s?k=bartender+kit&tag=sipwiki-20",
    badge: "trending",
  },
  {
    id: "10",
    name: "Large Ice Cube Trays",
    description: "Two Amazon Basics silicone trays. Big cubes melt slower than the bagged stuff.",
    price: "$8",
    image: "/marketplace/ice-mold.jpg",
    category: "bar-tools",
    affiliateUrl: "https://www.amazon.com/dp/B08DJ6GPFK?tag=sipwiki-20",
  },
  {
    id: "11",
    name: "Electric Wine Opener",
    description: "One-touch automatic corkscrew. Opens bottles in seconds.",
    price: "$24.99",
    image: "/marketplace/wine-opener.svg",
    category: "bar-tools",
    affiliateUrl: "https://www.amazon.com/s?k=electric+wine+opener&tag=sipwiki-20",
  },

  // Decor
  {
    id: "12",
    name: "LED Neon Bar Sign",
    description: "\"Bar\" neon sign with USB power. Perfect party atmosphere.",
    price: "$29.99",
    image: "/marketplace/neon-sign.svg",
    category: "decor",
    affiliateUrl: "https://www.amazon.com/s?k=neon+bar+sign&tag=sipwiki-20",
    badge: "trending",
  },
  {
    id: "13",
    name: "RGB LED Strip Lights",
    description: "50ft color-changing lights with remote. Set the party mood.",
    price: "$19.99",
    image: "/marketplace/led-strip.svg",
    category: "decor",
    affiliateUrl: "https://www.amazon.com/s?k=led+strip+lights+party&tag=sipwiki-20",
  },
  {
    id: "14",
    name: "Disco Ball Light",
    description: "Rotating disco ball with LED lights. Instant dance floor vibes.",
    price: "$16.99",
    image: "/marketplace/disco-ball.svg",
    category: "decor",
    affiliateUrl: "https://www.amazon.com/s?k=disco+ball+light&tag=sipwiki-20",
  },

  // Accessories
  {
    id: "15",
    name: "Bluetooth Party Speaker",
    description: "Loud, portable speaker with LED lights. 24-hour battery life.",
    price: "$49.99",
    image: "/marketplace/speaker.svg",
    category: "accessories",
    affiliateUrl: "https://www.amazon.com/s?k=bluetooth+party+speaker&tag=sipwiki-20",
    badge: "bestseller",
  },
  {
    id: "16",
    name: "Beer Belt Holster",
    description: "Holds 6 cans hands-free. Essential for tailgates and parties.",
    price: "$14.99",
    image: "/marketplace/beer-belt.svg",
    category: "accessories",
    affiliateUrl: "https://www.amazon.com/s?k=beer+belt+holster&tag=sipwiki-20",
    badge: "new",
  },
  {
    id: "17",
    name: "Drink Chiller Sticks",
    description: "Stainless steel cooling sticks. Keep drinks cold without diluting.",
    price: "$18.99",
    image: "/marketplace/chiller.svg",
    category: "accessories",
    affiliateUrl: "https://www.amazon.com/s?k=drink+chiller+sticks&tag=sipwiki-20",
  },
];

export const getFeaturedProducts = () => products.filter(p => p.badge === "bestseller" || p.badge === "trending");
export const getNewProducts = () => products.filter(p => p.badge === "new");
export const getProductsByCategory = (category: Category) => products.filter(p => p.category === category);
