import { MetadataRoute } from "next";
import { games } from "@/config/gameData";
import { getAllCategorySlugs } from "@/config/categoryData";
import { cocktails } from "@/config/cocktailData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sipwiki.app";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/games`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/spin`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/submit`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // SEO Tool Pages - High Priority
    {
      url: `${baseUrl}/party-planner`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/drink-calculator`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/alcohol-calculator`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quiz`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quiz/what-drinking-game-are-you`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/quiz/what-cocktail-are-you`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/drinking-quiz`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    // SEO Guide Pages - High Priority
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Cocktails Section - High Priority
    {
      url: `${baseUrl}/cocktails`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/kings-cup-rules`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/guides/beer-pong-rules`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/guides/drinking-games-for-2`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/drinking-games-without-cards`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/drinking-games-for-large-groups`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // All guide slugs (Batch 1 - 49 guides)
  const guideSlugsB1 = [
    "flip-cup-rules", "rage-cage-rules", "quarters-rules", "never-have-i-ever-questions",
    "most-likely-to-questions", "drunk-jenga-rules", "ride-the-bus-rules", "power-hour-rules",
    "civil-war-rules", "slap-cup-rules", "drinking-games-for-couples", "drinking-games-for-parties",
    "college-drinking-games", "drinking-games-for-beginners", "best-card-drinking-games",
    "best-dice-drinking-games", "drinking-games-for-small-groups", "outdoor-drinking-games",
    "camping-drinking-games", "tailgate-drinking-games", "bachelor-party-drinking-games",
    "bachelorette-party-drinking-games", "birthday-drinking-games", "new-years-eve-drinking-games",
    "super-bowl-drinking-games", "halloween-drinking-games", "christmas-drinking-games",
    "st-patricks-day-drinking-games", "drinking-games-with-shots", "beer-drinking-games",
    "wine-drinking-games", "easy-drinking-games", "quick-drinking-games", "team-drinking-games",
    "competitive-drinking-games", "classic-drinking-games", "unique-drinking-games",
    "house-party-drinking-games", "pregaming-drinking-games", "truth-or-dare-drinking-game",
    "movie-drinking-games", "tv-show-drinking-games", "sports-drinking-games",
    "video-game-drinking-games", "drinking-game-ideas", "fun-drinking-games",
    "drinking-games-for-3", "drinking-games-for-4", "drinking-games-for-5"
  ];

  // Batch 2 - 50 more guides
  const guideSlugsB2 = [
    // Game rules (10)
    "waterfall-rules", "across-the-bridge-rules", "baseball-drinking-game-rules",
    "buzz-drinking-game-rules", "century-club-rules", "thunderstruck-rules",
    "roxanne-drinking-game-rules", "titanic-drinking-game-rules", "avalanche-drinking-game-rules",
    "drink-or-dare-rules",
    // Location/setting (10)
    "apartment-drinking-games", "dorm-drinking-games", "backyard-drinking-games",
    "pool-party-drinking-games", "beach-drinking-games", "boat-drinking-games",
    "bar-drinking-games", "hotel-drinking-games", "road-trip-drinking-games",
    "cabin-drinking-games",
    // Occasions (10)
    "21st-birthday-drinking-games", "fourth-of-july-drinking-games", "thanksgiving-drinking-games",
    "valentines-day-drinking-games", "graduation-drinking-games", "game-night-drinking-games",
    "girls-night-drinking-games", "guys-night-drinking-games", "date-night-drinking-games",
    "reunion-drinking-games",
    // Social dynamics (10)
    "icebreaker-drinking-games", "drinking-games-for-strangers", "drinking-games-for-best-friends",
    "drinking-games-for-coworkers", "drinking-games-for-introverts", "drinking-games-to-get-to-know-people",
    "flirty-drinking-games", "drinking-games-for-new-couples", "drinking-games-for-roommates",
    "virtual-drinking-games",
    // Time/intensity (10)
    "5-minute-drinking-games", "drinking-games-under-30-minutes", "all-night-drinking-games",
    "low-key-drinking-games", "intense-drinking-games", "chill-drinking-games",
    "high-energy-drinking-games", "drinking-games-for-lightweights", "drinking-games-that-get-you-drunk-fast",
    "slow-paced-drinking-games"
  ];

  // Batch 3 - Gemini-researched high-quality guides (10)
  const guideSlugsB3 = [
    "uno-drinking-game-rules", "wizard-staff-drinking-game", "beerio-kart-rules",
    "drunk-mario-kart-rules", "office-drinking-game", "friends-tv-show-drinking-game",
    "the-bachelor-drinking-game", "game-of-thrones-drinking-game",
    "marvel-movie-drinking-game", "disney-drinking-game"
  ];

  const guideSlugs = [...guideSlugsB1, ...guideSlugsB2, ...guideSlugsB3];

  const guidePages: MetadataRoute.Sitemap = guideSlugs.map((slug) => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = getAllCategorySlugs().map(
    (slug) => ({
      url: `${baseUrl}/games/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })
  );

  // Game detail pages
  const gamePages: MetadataRoute.Sitemap = games.map((game) => ({
    url: `${baseUrl}/game/${game.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Cocktail recipe pages
  const cocktailPages: MetadataRoute.Sitemap = cocktails.map((cocktail) => ({
    url: `${baseUrl}/cocktails/${cocktail.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...guidePages, ...categoryPages, ...gamePages, ...cocktailPages];
}
