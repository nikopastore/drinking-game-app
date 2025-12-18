import { Game } from "@/types";
import { games } from "./gameData";

export interface GameCategory {
  slug: string;
  name: string;
  title: string; // SEO title
  description: string; // SEO meta description
  heading: string; // H1 on page
  subheading: string;
  filter: (game: Game) => boolean;
  icon: string; // emoji for display
}

export const gameCategories: GameCategory[] = [
  {
    slug: "card-games",
    name: "Card Games",
    title: "Card Drinking Games - Rules & How to Play | SipWiki",
    description:
      "Complete rules for the best card drinking games including King's Cup, Ride the Bus, Pyramid, and more. Easy to learn with just a deck of cards.",
    heading: "Card Drinking Games",
    subheading:
      "All you need is a deck of cards and drinks. These classic drinking games are perfect for any party.",
    filter: (game) => game.materials.includes("cards"),
    icon: "🃏",
  },
  {
    slug: "cup-games",
    name: "Cup Games",
    title: "Cup Drinking Games - Beer Pong, Flip Cup & More | SipWiki",
    description:
      "Rules for popular cup drinking games like Beer Pong, Flip Cup, Rage Cage, and Slap Cup. Perfect for competitive party games.",
    heading: "Cup Drinking Games",
    subheading:
      "Competitive games using cups and balls. Great for team play and tournaments.",
    filter: (game) =>
      game.materials.includes("red solo cups") ||
      game.materials.includes("cups") ||
      game.materials.includes("ping pong balls"),
    icon: "🥤",
  },
  {
    slug: "dice-games",
    name: "Dice Games",
    title: "Dice Drinking Games - Rules for Three Man, 7-11 & More | SipWiki",
    description:
      "Complete rules for dice drinking games including Three Man, 7-11-Doubles, Mexico, and more. Simple games with just dice and drinks.",
    heading: "Dice Drinking Games",
    subheading:
      "Roll the dice and let fate decide who drinks. Quick setup, endless fun.",
    filter: (game) => game.materials.includes("dice"),
    icon: "🎲",
  },
  {
    slug: "no-props",
    name: "No Props Needed",
    title: "Drinking Games Without Cards or Props - No Equipment Needed | SipWiki",
    description:
      "The best drinking games that require no cards, cups, or equipment. Perfect for spontaneous parties - just bring drinks and friends!",
    heading: "No Props Drinking Games",
    subheading:
      "No cards? No cups? No problem. These games only need drinks and friends.",
    filter: (game) => game.materials.includes("no prop"),
    icon: "✋",
  },
  {
    slug: "two-player",
    name: "Two Player",
    title: "Drinking Games for 2 People - Couples & Date Night Games | SipWiki",
    description:
      "Fun drinking games for just 2 people. Perfect for couples, date nights, or when it's just you and a friend.",
    heading: "Drinking Games for 2 People",
    subheading:
      "Perfect for couples, roommates, or when the party is small but mighty.",
    filter: (game) => game.min_players <= 2,
    icon: "👫",
  },
  {
    slug: "large-groups",
    name: "Large Groups",
    title: "Drinking Games for Large Groups (6+ People) | SipWiki",
    description:
      "The best drinking games for big parties and large groups. These games work great with 6, 10, or even 20+ people.",
    heading: "Drinking Games for Large Groups",
    subheading:
      "Games that scale perfectly for big parties. The more the merrier!",
    filter: (game) => game.max_players === null || game.max_players >= 6,
    icon: "👥",
  },
  {
    slug: "beer-games",
    name: "Beer Games",
    title: "Beer Drinking Games - Classic Party Games | SipWiki",
    description:
      "Classic beer drinking games including Beer Pong, Flip Cup, and more. Best played with beer or light drinks.",
    heading: "Beer Drinking Games",
    subheading:
      "Classic games designed for beer. Grab a case and get playing.",
    filter: (game) => game.alcohol_type === "beer",
    icon: "🍺",
  },
  {
    slug: "quick-easy",
    name: "Quick & Easy",
    title: "Easy Drinking Games - Simple Rules for Beginners | SipWiki",
    description:
      "Simple drinking games with easy rules. Perfect for beginners or when you want a more relaxed drinking experience.",
    heading: "Quick & Easy Drinking Games",
    subheading:
      "Low commitment, easy to learn. Perfect for warming up or winding down.",
    filter: (game) => game.drunkenness_level <= 2,
    icon: "⚡",
  },
  {
    slug: "extreme",
    name: "Extreme",
    title: "Extreme Drinking Games - High Intensity Party Games | SipWiki",
    description:
      "Warning: These drinking games are not for lightweights. High-intensity games for experienced players only.",
    heading: "Extreme Drinking Games",
    subheading:
      "For experienced players only. These games will test your limits. Drink responsibly!",
    filter: (game) => game.drunkenness_level >= 5,
    icon: "🔥",
  },
];

// Helper to get category by slug
export const getCategoryBySlug = (slug: string): GameCategory | undefined => {
  return gameCategories.find((cat) => cat.slug === slug);
};

// Helper to get games for a category
export const getGamesForCategory = (slug: string): Game[] => {
  const category = getCategoryBySlug(slug);
  if (!category) return [];
  return games.filter(category.filter);
};

// Helper to get categories for a game
export const getCategoriesForGame = (game: Game): GameCategory[] => {
  return gameCategories.filter((cat) => cat.filter(game));
};

// Get all category slugs for static generation
export const getAllCategorySlugs = (): string[] => {
  return gameCategories.map((cat) => cat.slug);
};
