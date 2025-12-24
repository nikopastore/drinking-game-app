// src/config/monetizationConfig.ts
// Amazon affiliate links for party supplies and game equipment

export const affiliateLinks: Record<string, { url: string; label: string; price?: string }> = {
  // --- Core Supplies ---
  cards: {
    url: "https://a.co/d/b2Y6Jm2",
    label: "Waterproof Cards",
    price: "$8",
  },
  "waterproof cards": {
    url: "https://a.co/d/b2Y6Jm2",
    label: "Waterproof Playing Cards",
    price: "$8",
  },
  "playing cards": {
    url: "https://a.co/d/b2Y6Jm2",
    label: "Waterproof Playing Cards",
    price: "$8",
  },
  "red solo cups": {
    url: "https://a.co/d/eUXpEON",
    label: "Red Solo Cups (Bulk 100ct)",
    price: "$15",
  },
  cups: {
    url: "https://a.co/d/eUXpEON",
    label: "Party Cups (100ct)",
    price: "$15",
  },
  "plastic cups": {
    url: "https://a.co/d/eUXpEON",
    label: "Red Solo Cups (100ct)",
    price: "$15",
  },
  "solo cups": {
    url: "https://a.co/d/eUXpEON",
    label: "Red Solo Cups (100ct)",
    price: "$15",
  },
  "large cup": {
    url: "https://amzn.to/4p5Fexz",
    label: "Giant Party Goblet",
    price: "$12",
  },
  "king cup": {
    url: "https://amzn.to/4p5Fexz",
    label: "Giant King's Cup Goblet",
    price: "$12",
  },
  "ping pong balls": {
    url: "https://a.co/d/5XLkYU5",
    label: "Pro Ping Pong Balls (50 Pack)",
    price: "$10",
  },
  "beer pong balls": {
    url: "https://a.co/d/5XLkYU5",
    label: "Beer Pong Balls (50 Pack)",
    price: "$10",
  },
  dice: {
    url: "https://a.co/d/76GnIfa",
    label: "Dice Set (10 Pack)",
    price: "$6",
  },
  "drinking dice": {
    url: "https://a.co/d/76GnIfa",
    label: "Party Dice Set",
    price: "$6",
  },
  "shot glasses": {
    url: "https://www.amazon.com/s?k=plastic+shot+glasses&tag=sipwiki-20",
    label: "Shot Glasses (Unbreakable 50ct)",
    price: "$12",
  },
  "shot glass": {
    url: "https://www.amazon.com/s?k=plastic+shot+glasses&tag=sipwiki-20",
    label: "Shot Glasses (Unbreakable)",
    price: "$12",
  },

  // --- Beer Pong Equipment (High Value) ---
  "beer pong table": {
    url: "https://www.amazon.com/s?k=beer+pong+table+folding&tag=sipwiki-20",
    label: "Folding Beer Pong Table (8ft)",
    price: "$70",
  },
  "pong table": {
    url: "https://www.amazon.com/s?k=beer+pong+table+folding&tag=sipwiki-20",
    label: "Folding Beer Pong Table",
    price: "$70",
  },
  "beer pong rack": {
    url: "https://www.amazon.com/s?k=beer+pong+cup+rack+reusable&tag=sipwiki-20",
    label: "Reusable Cup Rack Set",
    price: "$15",
  },
  "cup rack": {
    url: "https://www.amazon.com/s?k=beer+pong+cup+rack+reusable&tag=sipwiki-20",
    label: "Reusable Beer Pong Rack",
    price: "$15",
  },
  "led cups": {
    url: "https://www.amazon.com/s?k=led+party+cups+glow&tag=sipwiki-20",
    label: "LED Glow Party Cups",
    price: "$20",
  },
  "glow cups": {
    url: "https://www.amazon.com/s?k=led+party+cups+glow&tag=sipwiki-20",
    label: "LED Glow Party Cups",
    price: "$20",
  },

  // --- Game Specific Items ---
  "duct tape": {
    url: "https://amzn.to/4p5Fexz",
    label: "Heavy Duty Duct Tape",
    price: "$8",
  },
  "jenga blocks": {
    url: "https://www.amazon.com/s?k=giant+tumbling+tower&tag=sipwiki-20",
    label: "Giant Tumbling Tower Game",
    price: "$45",
  },
  "giant jenga": {
    url: "https://www.amazon.com/s?k=giant+tumbling+tower&tag=sipwiki-20",
    label: "Giant Tumbling Tower",
    price: "$45",
  },
  "drunk jenga": {
    url: "https://www.amazon.com/s?k=drinking+jenga+game&tag=sipwiki-20",
    label: "Drinking Jenga Game",
    price: "$25",
  },
  quarters: {
    url: "https://www.amazon.com/s?k=coin+holder+dispenser&tag=sipwiki-20",
    label: "Coin Dispenser",
    price: "$8",
  },
  marker: {
    url: "https://www.amazon.com/s?k=sharpie+markers&tag=sipwiki-20",
    label: "Permanent Markers",
    price: "$8",
  },
  "sharpie": {
    url: "https://www.amazon.com/s?k=sharpie+markers&tag=sipwiki-20",
    label: "Sharpie Markers",
    price: "$8",
  },
  "music speaker": {
    url: "https://www.amazon.com/s?k=bluetooth+party+speaker&tag=sipwiki-20",
    label: "Bluetooth Party Speaker",
    price: "$40",
  },
  "bluetooth speaker": {
    url: "https://www.amazon.com/s?k=bluetooth+party+speaker&tag=sipwiki-20",
    label: "Bluetooth Party Speaker",
    price: "$40",
  },
  "party speaker": {
    url: "https://www.amazon.com/s?k=bluetooth+party+speaker+loud&tag=sipwiki-20",
    label: "Loud Party Speaker",
    price: "$60",
  },

  // --- Party Decorations & Accessories ---
  "party lights": {
    url: "https://www.amazon.com/s?k=led+party+lights+color+changing&tag=sipwiki-20",
    label: "LED Party Lights",
    price: "$25",
  },
  "led lights": {
    url: "https://www.amazon.com/s?k=led+strip+lights+party&tag=sipwiki-20",
    label: "LED Strip Lights",
    price: "$20",
  },
  "disco ball": {
    url: "https://www.amazon.com/s?k=disco+ball+light+party&tag=sipwiki-20",
    label: "Disco Ball Party Light",
    price: "$15",
  },
  "party decorations": {
    url: "https://www.amazon.com/s?k=party+decorations+kit&tag=sipwiki-20",
    label: "Party Decoration Kit",
    price: "$25",
  },
  "drinking game set": {
    url: "https://www.amazon.com/s?k=drinking+game+set+party&tag=sipwiki-20",
    label: "Complete Drinking Game Set",
    price: "$30",
  },

  // --- Drinking Game Specific Products ---
  "flip cup set": {
    url: "https://www.amazon.com/s?k=flip+cup+set+party&tag=sipwiki-20",
    label: "Flip Cup Party Set",
    price: "$20",
  },
  "beer bong": {
    url: "https://www.amazon.com/s?k=beer+bong+funnel&tag=sipwiki-20",
    label: "Beer Bong Funnel",
    price: "$15",
  },
  "funnel": {
    url: "https://www.amazon.com/s?k=beer+bong+funnel&tag=sipwiki-20",
    label: "Party Beer Funnel",
    price: "$15",
  },

  // --- Outdoor/Lawn Games ---
  "lawn games": {
    url: "https://www.amazon.com/s?k=lawn+drinking+games+outdoor&tag=sipwiki-20",
    label: "Outdoor Lawn Games Set",
    price: "$40",
  },
  "cornhole": {
    url: "https://www.amazon.com/s?k=cornhole+set+regulation&tag=sipwiki-20",
    label: "Cornhole Set",
    price: "$80",
  },
  "yard games": {
    url: "https://www.amazon.com/s?k=yard+games+adults&tag=sipwiki-20",
    label: "Yard Games for Adults",
    price: "$50",
  },

  // --- Coolers & Drink Storage ---
  "cooler": {
    url: "https://www.amazon.com/s?k=party+cooler+wheels&tag=sipwiki-20",
    label: "Party Cooler with Wheels",
    price: "$60",
  },
  "drink cooler": {
    url: "https://www.amazon.com/s?k=drink+cooler+party&tag=sipwiki-20",
    label: "Drink Cooler",
    price: "$40",
  },
  "ice bucket": {
    url: "https://www.amazon.com/s?k=ice+bucket+party&tag=sipwiki-20",
    label: "Party Ice Bucket",
    price: "$20",
  },
  "drink dispenser": {
    url: "https://www.amazon.com/s?k=drink+dispenser+party&tag=sipwiki-20",
    label: "Drink Dispenser",
    price: "$25",
  },

  // --- Mixology & Cocktail Supplies ---
  "cocktail shaker": {
    url: "https://www.amazon.com/s?k=cocktail+shaker+set&tag=sipwiki-20",
    label: "Cocktail Shaker Set",
    price: "$25",
  },
  "bar set": {
    url: "https://www.amazon.com/s?k=bartender+kit+home+bar&tag=sipwiki-20",
    label: "Home Bar Kit",
    price: "$35",
  },
  "jigger": {
    url: "https://www.amazon.com/s?k=jigger+cocktail+measure&tag=sipwiki-20",
    label: "Cocktail Jigger",
    price: "$8",
  },
  "muddler": {
    url: "https://www.amazon.com/s?k=cocktail+muddler&tag=sipwiki-20",
    label: "Cocktail Muddler",
    price: "$10",
  },
  "strainer": {
    url: "https://www.amazon.com/s?k=cocktail+strainer&tag=sipwiki-20",
    label: "Cocktail Strainer",
    price: "$8",
  },
  "mixing glass": {
    url: "https://www.amazon.com/s?k=cocktail+mixing+glass&tag=sipwiki-20",
    label: "Cocktail Mixing Glass",
    price: "$15",
  },

  // --- Safety & Responsible Drinking ---
  "breathalyzer": {
    url: "https://www.amazon.com/s?k=breathalyzer+personal&tag=sipwiki-20",
    label: "Personal Breathalyzer",
    price: "$30",
  },
  "water bottles": {
    url: "https://www.amazon.com/s?k=water+bottles+bulk+party&tag=sipwiki-20",
    label: "Water Bottles (Bulk)",
    price: "$15",
  },
};

// Items that are common but not typically "affiliate linkable" in this context
// or items you don't want to monetize directly.
export const nonAffiliateItems = [
  "no prop",
  "beer",
  "alcohol",
  "liquor",
  "40oz alcohol",
  "table",
  "tv",
  "empty bottle",
];

// Helper function to check if a material has an affiliate link
export const hasAffiliateLink = (material: string): boolean => {
  const normalizedMaterial = material.toLowerCase();
  return (
    normalizedMaterial in affiliateLinks &&
    !nonAffiliateItems.includes(normalizedMaterial)
  );
};

// Helper function to get affiliate link for a material
export const getAffiliateLink = (
  material: string
): { url: string; label: string } | null => {
  const normalizedMaterial = material.toLowerCase();
  if (hasAffiliateLink(normalizedMaterial)) {
    return affiliateLinks[normalizedMaterial];
  }
  return null;
};
