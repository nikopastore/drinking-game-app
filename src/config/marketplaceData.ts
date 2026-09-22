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
    name: "Glow in the Dark Cups, 24 Pack",
    description: "Sixteen-ounce cups in five glow colors. They charge in the light and show up after dark.",
    price: "$16",
    image: "/marketplace/glow-cups.jpg",
    category: "drinkware",
    affiliateUrl: "https://www.amazon.com/dp/B08NW1W5NX?tag=sipwiki-20",
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
    name: "Plastic Shot Cups, 100 Pack",
    description: "Clear 2oz disposable cups. Enough for a round of shots or a tray of jello shots.",
    price: "$9",
    image: "/marketplace/shots.jpg",
    category: "drinkware",
    affiliateUrl: "https://www.amazon.com/dp/B0BJ12FNYW?tag=sipwiki-20",
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
    name: "Casino Dice, 36 Pack",
    description: "Nineteen-millimeter six-sided dice in classic colors. For 7-11, beer die, and any dice game.",
    price: "$13",
    image: "/marketplace/dice.jpg",
    category: "party-games",
    affiliateUrl: "https://www.amazon.com/dp/B0DL8PJJCF?tag=sipwiki-20",
    badge: "new",
  },
  {
    id: "8",
    name: "Giant Tumbling Tower",
    description: "Sixty wooden blocks that stack up to 5 feet. Write the rules on them for Drunk Jenga.",
    price: "$42",
    image: "/marketplace/jenga.jpg",
    category: "party-games",
    affiliateUrl: "https://www.amazon.com/dp/B0F5WCVZ1W?tag=sipwiki-20",
  },

  // Bar Tools
  {
    id: "9",
    name: "Cocktail Shaker Bar Set",
    description: "KITESSENSU shaker set with a stand and the bar tools that come in the box.",
    price: "$30",
    image: "/marketplace/bartender-kit.jpg",
    category: "bar-tools",
    affiliateUrl: "https://www.amazon.com/dp/B08BYJ8KSR?tag=sipwiki-20",
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
    name: "Electric Wine Opener Set",
    description: "Circle Joy rechargeable opener with a foil cutter, aerator, and vacuum pump.",
    price: "$29",
    image: "/marketplace/wine-opener.jpg",
    category: "bar-tools",
    affiliateUrl: "https://www.amazon.com/dp/B0D3KSJ75G?tag=sipwiki-20",
  },

  // Decor
  {
    id: "12",
    name: "Bar Open Neon Sign",
    description: "LED open-bar sign with a dimmer. Wall decor for a home bar or a party room.",
    price: "$37",
    image: "/marketplace/neon.jpg",
    category: "decor",
    affiliateUrl: "https://www.amazon.com/dp/B0DP2QD1R1?tag=sipwiki-20",
    badge: "trending",
  },
  {
    id: "13",
    name: "DAYBETTER LED Strip Lights",
    description: "130 feet of RGB strip with a remote. For a bedroom, a desk, or the party room.",
    price: "$11",
    image: "/marketplace/led-strip.jpg",
    category: "decor",
    affiliateUrl: "https://www.amazon.com/dp/B0D4DJ6BRR?tag=sipwiki-20",
  },
  {
    id: "14",
    name: "RGB Disco Ball Lights, 2 Pack",
    description: "Two small cupcake-size disco balls. Color-changing light for a side table or a bar.",
    price: "$25",
    image: "/marketplace/disco.jpg",
    category: "decor",
    affiliateUrl: "https://www.amazon.com/dp/B0GVJSF91V?tag=sipwiki-20",
  },

  // Accessories
  {
    id: "15",
    name: "JBL Flip 5 Bluetooth Speaker",
    description: "Waterproof portable speaker. Small enough for a kitchen counter, loud enough for the yard.",
    price: "$89",
    image: "/marketplace/speaker.jpg",
    category: "accessories",
    affiliateUrl: "https://www.amazon.com/dp/B07QK2SPP7?tag=sipwiki-20",
    badge: "bestseller",
  },
  {
    id: "16",
    name: "Beer Holster Belt",
    description: "A belt that holds drinks outside. For tailgates, lawn games, and walking around the party.",
    price: "$12",
    image: "/marketplace/beer-belt.jpg",
    category: "accessories",
    affiliateUrl: "https://www.amazon.com/dp/B0CC8WK46N?tag=sipwiki-20",
    badge: "new",
  },
  {
    id: "17",
    name: "Beer Chiller Sticks",
    description: "Two stainless sticks that go in the bottle. They cool the drink without watering it down.",
    price: "$9",
    image: "/marketplace/chiller.jpg",
    category: "accessories",
    affiliateUrl: "https://www.amazon.com/dp/B0B6WQLVPL?tag=sipwiki-20",
  },
];

export const getFeaturedProducts = () => products.filter(p => p.badge === "bestseller" || p.badge === "trending");
export const getNewProducts = () => products.filter(p => p.badge === "new");
export const getProductsByCategory = (category: Category) => products.filter(p => p.category === category);
