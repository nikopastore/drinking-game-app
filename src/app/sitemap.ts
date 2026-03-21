// Force static generation for mobile builds
export const dynamic = "force-static";

import { MetadataRoute } from "next";
import { games } from "@/config/gameData";
import { getAllCategorySlugs } from "@/config/categoryData";
import { cocktails } from "@/config/cocktailData";
import { blogCategories, blogPosts } from "@/config/blogData";
import { drinks } from "@/config/drinkData";
import { tvGames } from "@/config/tvGameData";

export default function sitemap(): MetadataRoute.Sitemap {
  const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sipwiki.app";
  const baseUrl = rawBaseUrl.endsWith("/") ? rawBaseUrl.slice(0, -1) : rawBaseUrl;

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
      url: `${baseUrl}/drinks`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/drinks/cocktails`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/drinks/shots`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/drinks/punches`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/drinks/mocktails`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tv-games`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/games/for-2-people`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/games/for-3-people`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/games/for-4-people`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/games/for-5-plus`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/games/for-large-groups`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
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

  // Batch 3 - Gemini-researched high-quality guides (10) + comparison guides
  const guideSlugsB3 = [
    "uno-drinking-game-rules", "wizard-staff-drinking-game", "beerio-kart-rules",
    "drunk-mario-kart-rules", "office-drinking-game", "friends-tv-show-drinking-game",
    "the-bachelor-drinking-game", "game-of-thrones-drinking-game",
    "marvel-movie-drinking-game", "disney-drinking-game",
    // Comparison guides (SEO for "vs" queries)
    "beer-pong-vs-flip-cup", "kings-cup-vs-ride-the-bus-comparison",
    "rage-cage-vs-slap-cup", "quarters-vs-power-hour", "never-have-i-ever-vs-truth-or-dare",
    "flip-cup-vs-rage-cage", "drunk-jenga-vs-kings-cup"
  ];

  // Batch 5 - Trending TV/Movie drinking games
  const guideSlugsB5 = [
    "squid-game-drinking-game", "the-bear-drinking-game", "wednesday-drinking-game",
    "barbie-movie-drinking-game", "love-is-blind-drinking-game", "stranger-things-drinking-game"
  ];

  // Batch 6 - Video game drinking games
  const guideSlugsB6 = [
    "smash-bros-drinking-game", "mario-party-drinking-game", "call-of-duty-drinking-game",
    "fortnite-drinking-game", "rocket-league-drinking-game"
  ];

  // Batch 7 - Player count guides (drinking games for X people)
  const guideSlugsB7 = [
    "drinking-games-for-1", "drinking-games-for-6", "drinking-games-for-7",
    "drinking-games-for-8", "drinking-games-for-9", "drinking-games-for-10",
    "drinking-games-for-11-12", "drinking-games-for-13-15", "drinking-games-for-16-20"
  ];

  // Batch 8 - New comparison guides, game rules, sports, and seasonal content
  const guideSlugsB8 = [
    // Game comparison guides (9)
    "beer-pong-vs-civil-war", "chandelier-vs-slap-cup", "irish-poker-vs-ride-the-bus",
    "three-man-vs-7-11-doubles", "wizard-staff-vs-power-hour", "edward-40-hands-vs-wizard-staff",
    "most-likely-to-vs-never-have-i-ever", "medusa-vs-buffalo", "truth-or-drink-vs-drink-or-dare",
    // Game rule guides (12)
    "buffalo-rules", "cheers-to-the-governor-rules", "7-11-doubles-rules", "landmines-rules",
    "around-the-world-rules", "chems-rules", "horse-race-rules", "medusa-rules",
    "never-have-i-ever-rules", "most-likely-to-rules", "truth-or-drink-rules",
    // Sports drinking game guides (5)
    "world-series-drinking-games", "nba-finals-drinking-games", "college-football-drinking-games",
    "stanley-cup-drinking-games", "olympics-drinking-games",
    // Seasonal content (5)
    "cinco-de-mayo-drinking-games", "easter-drinking-games", "spring-break-drinking-games",
    "labor-day-drinking-games", "memorial-day-drinking-games"
  ];

  // Batch 4 - Regional city guides (19 cities)
  const guideSlugsB4 = [
    // Original 8
    "beer-pong-in-chicago-il", "beer-pong-in-denver-co", "beer-pong-in-seattle-wa",
    "beer-pong-in-atlanta-ga", "beer-pong-in-nashville-tn", "beer-pong-in-san-diego-ca",
    "beer-pong-in-phoenix-az", "beer-pong-in-portland-or",
    // Added 11 more major cities
    "beer-pong-in-austin-tx", "beer-pong-in-san-francisco-ca", "beer-pong-in-minneapolis-mn",
    "beer-pong-in-philadelphia-pa", "beer-pong-in-dallas-tx", "beer-pong-in-houston-tx",
    "beer-pong-in-miami-fl", "beer-pong-in-washington-dc", "beer-pong-in-boston-ma",
    "beer-pong-in-las-vegas-nv", "beer-pong-in-new-york-city-ny", "beer-pong-in-los-angeles-ca"
  ];

  const guideSlugs = [...guideSlugsB1, ...guideSlugsB2, ...guideSlugsB3, ...guideSlugsB4, ...guideSlugsB5, ...guideSlugsB6, ...guideSlugsB7, ...guideSlugsB8];

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
    url: `${baseUrl}/games/${game.slug}`,
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

  const drinkPages: MetadataRoute.Sitemap = drinks.map((drink) => ({
    url: `${baseUrl}/drinks/${drink.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const tvGamePages: MetadataRoute.Sitemap = tvGames.map((game) => ({
    url: `${baseUrl}/tv-games/${game.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogIndexPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  const blogCategoryPages: MetadataRoute.Sitemap = blogCategories.map((category) => ({
    url: `${baseUrl}/blog/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...guidePages,
    ...categoryPages,
    ...gamePages,
    ...cocktailPages,
    ...drinkPages,
    ...tvGamePages,
    ...blogIndexPages,
    ...blogCategoryPages,
    ...blogPostPages,
  ];
}
