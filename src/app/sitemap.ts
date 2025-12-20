import { MetadataRoute } from "next";
import { games } from "@/config/gameData";
import { getAllCategorySlugs } from "@/config/categoryData";

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
      url: `${baseUrl}/quiz/what-drinking-game-are-you`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    // SEO Guide Pages - High Priority
    {
      url: `${baseUrl}/guides`,
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

  // All guide slugs
  const guideSlugs = [
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

  return [...staticPages, ...guidePages, ...categoryPages, ...gamePages];
}
