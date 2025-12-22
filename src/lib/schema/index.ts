/**
 * Schema.org markup generators for SEO optimization
 *
 * This module provides comprehensive schema generators for:
 * - Recipe schema (cocktails)
 * - Game + HowTo schema (drinking games)
 * - Article + FAQ schema (guides/blogs)
 * - VideoObject schema (embedded videos)
 *
 * All schemas are optimized for:
 * - Rich snippets in Google search
 * - AI Overview citations
 * - Voice search compatibility
 * - E-E-A-T signals
 */

export {
  generateRecipeSchema,
  type RecipeSchemaOptions,
} from "./recipeSchema";

export {
  generateGameSchema,
  generateGameHowToSchema,
  generateCombinedGameSchemas,
  type GameSchemaOptions,
} from "./gameSchema";

export {
  generateArticleSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  type ArticleSchemaOptions,
  type FAQSchemaOptions,
} from "./articleSchema";

export { generateVideoSchema, type VideoSchemaOptions } from "./videoSchema";

/**
 * Utility function to inject schema into Next.js page head
 *
 * Usage in a page component:
 * ```tsx
 * export function generateMetadata() {
 *   return {
 *     other: {
 *       'script:ld+json': injectSchema(generateRecipeSchema(...))
 *     }
 *   }
 * }
 * ```
 */
export function injectSchema(schema: any): string {
  return JSON.stringify(schema);
}

/**
 * Combine multiple schemas into a single graph
 * Useful when a page has multiple schema types
 *
 * Example: Game page with both Game and HowTo schemas
 */
export function combineSchemas(schemas: any[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}
