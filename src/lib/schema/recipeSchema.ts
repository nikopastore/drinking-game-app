import { Cocktail } from "@/types";
import { WithContext, Recipe } from "schema-dts";

export interface RecipeSchemaOptions {
  cocktail: Cocktail;
  url: string;
  imageUrl?: string;
  videoUrl?: string;
  aggregateRating?: {
    ratingValue: number;
    ratingCount: number;
  };
  prepTime?: string; // ISO 8601 duration format (e.g., "PT5M" for 5 minutes)
  author?: {
    name: string;
    url?: string;
  };
}

/**
 * Generate Recipe schema for cocktail pages
 * Optimized for rich snippets and AI citations
 */
export function generateRecipeSchema(
  options: RecipeSchemaOptions
): WithContext<Recipe> {
  const { cocktail, url, imageUrl, videoUrl, aggregateRating, prepTime, author } = options;

  // Convert difficulty (1-3) to prep time if not provided
  const estimatedPrepTime = prepTime || getDifficultyPrepTime(cocktail.difficulty);

  const resolvedImage = imageUrl || cocktail.image;

  // Build ingredient list with amounts
  const recipeIngredients = cocktail.ingredients.map(
    (ing) => `${ing.amount} ${ing.unit} ${ing.name}`
  );

  // Build step-by-step instructions
  const recipeInstructions = cocktail.instructions.map((step, index) => ({
    "@type": "HowToStep" as const,
    position: index + 1,
    text: step,
  }));

  const schema: WithContext<Recipe> = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: cocktail.name,
    description: cocktail.description,
    ...(resolvedImage ? { image: resolvedImage } : {}),
    recipeIngredient: recipeIngredients,
    recipeInstructions: recipeInstructions,
    prepTime: estimatedPrepTime,
    totalTime: estimatedPrepTime,
    recipeYield: "1 cocktail",
    recipeCategory: getCategoryName(cocktail.category),
    recipeCuisine: "Cocktail",
    keywords: [
      cocktail.name,
      ...cocktail.tags,
      cocktail.baseSpirit,
      cocktail.category,
      "cocktail recipe",
      "drink recipe",
    ].join(", "),
    author: {
      "@type": "Organization",
      name: author?.name || "SipWiki",
      url: author?.url || "https://sipwiki.app",
    },
    datePublished: cocktail.created_at,
  };

  // Add aggregate rating if available
  if (aggregateRating && aggregateRating.ratingCount >= 5) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      ratingCount: aggregateRating.ratingCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  // Add video if available
  if (videoUrl) {
    schema.video = {
      "@type": "VideoObject",
      name: `How to Make ${cocktail.name}`,
      description: `Step-by-step video tutorial for making ${cocktail.name}`,
      thumbnailUrl: imageUrl || `/cocktails/${cocktail.slug}.jpg`,
      contentUrl: videoUrl,
      uploadDate: cocktail.created_at,
    };
  }

  // Add nutrition (estimate based on strength)
  schema.nutrition = {
    "@type": "NutritionInformation",
    calories: `${estimateCalories(cocktail)} calories`,
  };

  return schema;
}

/**
 * Convert difficulty level to ISO 8601 duration
 */
function getDifficultyPrepTime(difficulty: number): string {
  switch (difficulty) {
    case 1:
      return "PT5M"; // 5 minutes
    case 2:
      return "PT10M"; // 10 minutes
    case 3:
      return "PT15M"; // 15 minutes
    default:
      return "PT5M";
  }
}

/**
 * Get human-readable category name
 */
function getCategoryName(category: string): string {
  const categoryMap: Record<string, string> = {
    classic: "Classic Cocktails",
    tropical: "Tropical Cocktails",
    shooter: "Shooters",
    party: "Party Drinks",
    mocktail: "Mocktails",
  };
  return categoryMap[category] || "Cocktail";
}

/**
 * Estimate calories based on strength and ingredients
 */
function estimateCalories(cocktail: Cocktail): number {
  // Very rough estimate: strength * 30 + base calories
  const baseCalories = 100;
  const strengthMultiplier = 30;
  return baseCalories + (cocktail.strength * strengthMultiplier);
}
