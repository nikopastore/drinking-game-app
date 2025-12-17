// src/config/monetizationConfig.ts
// REPLACE THESE URLs WITH YOUR AMAZON STOREFRONT LINKS BEFORE LAUNCH

export const affiliateLinks: Record<string, { url: string; label: string }> = {
  // --- Core Supplies ---
  cards: {
    url: "https://a.co/d/b2Y6Jm2",
    label: "Waterproof Cards",
  },
  "red solo cups": {
    url: "https://a.co/d/eUXpEON",
    label: "Red Solo Cups (Bulk)",
  },
  cups: {
    url: "https://a.co/d/eUXpEON",
    label: "Party Cups",
  },
  "large cup": {
    url: "https://www.amazon.com/s?k=pimp+cup+party&tag=khanthebot-20",
    label: "Giant Party Goblet", // Fun upsell for King's Cup
  },
  "ping pong balls": {
    url: "https://a.co/d/5XLkYU5",
    label: "Pro Ping Pong Balls",
  },
  dice: {
    url: "https://a.co/d/76GnIfa",
    label: "Dice Set",
  },
  "shot glasses": {
    url: "https://www.amazon.com/s?k=plastic+shot+glasses&tag=khanthebot-20",
    label: "Shot Glasses (Unbreakable)",
  },
  "shot glass": {
    url: "https://www.amazon.com/s?k=plastic+shot+glasses&tag=khanthebot-20",
    label: "Shot Glasses (Unbreakable)",
  },

  // --- Game Specific Items ---
  "duct tape": {
    url: "https://www.amazon.com/s?k=duct+tape+silver&tag=khanthebot-20",
    label: "Heavy Duty Duct Tape", // For Wizard Staff/Edward 40 Hands
  },
  "jenga blocks": {
    url: "https://www.amazon.com/s?k=giant+tumbling+tower&tag=khanthebot-20",
    label: "Giant Wood Block Game", // High ticket item ($80+) vs normal Jenga ($15)
  },
  quarters: {
    url: "https://www.amazon.com/s?k=coin+holder+dispenser&tag=khanthebot-20",
    label: "Coin Dispenser", // Niche, but might sell
  },
  marker: {
    url: "https://www.amazon.com/s?k=sharpie+markers&tag=khanthebot-20",
    label: "Permanent Markers",
  },
  "music speaker": {
    url: "https://www.amazon.com/s?k=bluetooth+party+speaker&tag=khanthebot-20",
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
