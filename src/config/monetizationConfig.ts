// src/config/monetizationConfig.ts
// REPLACE THESE URLs WITH YOUR AMAZON STOREFRONT LINKS BEFORE LAUNCH

export const affiliateLinks: Record<string, { url: string; label: string }> = {
  // --- Core Supplies ---
  cards: {
    url: "https://www.amazon.com/s?k=waterproof+playing+cards&tag=YOUR_TAG",
    label: "Waterproof Cards", // Upsell: Waterproof lasts longer for drinking games
  },
  "red solo cups": {
    url: "https://www.amazon.com/s?k=red+solo+cups+bulk&tag=YOUR_TAG",
    label: "Red Solo Cups (Bulk)",
  },
  cups: {
    url: "https://www.amazon.com/s?k=party+cups&tag=YOUR_TAG",
    label: "Party Cups",
  },
  "large cup": {
    url: "https://www.amazon.com/s?k=pimp+cup+party&tag=YOUR_TAG",
    label: "Giant Party Goblet", // Fun upsell for King's Cup
  },
  "ping pong balls": {
    url: "https://www.amazon.com/s?k=beer+pong+balls&tag=YOUR_TAG",
    label: "Pro Ping Pong Balls",
  },
  dice: {
    url: "https://www.amazon.com/s?k=drinking+dice&tag=YOUR_TAG",
    label: "Dice Set",
  },
  "shot glasses": {
    url: "https://www.amazon.com/s?k=plastic+shot+glasses&tag=YOUR_TAG",
    label: "Shot Glasses (Unbreakable)",
  },
  "shot glass": {
    url: "https://www.amazon.com/s?k=plastic+shot+glasses&tag=YOUR_TAG",
    label: "Shot Glasses (Unbreakable)",
  },

  // --- Game Specific Items ---
  "duct tape": {
    url: "https://www.amazon.com/s?k=duct+tape+silver&tag=YOUR_TAG",
    label: "Heavy Duty Duct Tape", // For Wizard Staff/Edward 40 Hands
  },
  "jenga blocks": {
    url: "https://www.amazon.com/s?k=giant+tumbling+tower&tag=YOUR_TAG",
    label: "Giant Wood Block Game", // High ticket item ($80+) vs normal Jenga ($15)
  },
  quarters: {
    url: "https://www.amazon.com/s?k=coin+holder+dispenser&tag=YOUR_TAG",
    label: "Coin Dispenser", // Niche, but might sell
  },
  marker: {
    url: "https://www.amazon.com/s?k=sharpie+markers&tag=YOUR_TAG",
    label: "Permanent Markers",
  },
  "music speaker": {
    url: "https://www.amazon.com/s?k=bluetooth+party+speaker&tag=YOUR_TAG",
    label: "Loud Party Speaker", // High ticket item
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
