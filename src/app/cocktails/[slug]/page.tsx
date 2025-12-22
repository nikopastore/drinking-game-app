import { notFound } from "next/navigation";
import { getCocktailBySlug, cocktails } from "@/config/cocktailData";
import { CocktailDetailClient } from "./CocktailDetailClient";
import type { Metadata } from "next";
import type { Cocktail } from "@/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cocktails.map((cocktail) => ({
    slug: cocktail.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cocktail = getCocktailBySlug(slug);

  if (!cocktail) {
    return {
      title: "Cocktail Not Found - SipWiki",
    };
  }

  const difficultyLabel = ["Easy", "Medium", "Hard"][cocktail.difficulty - 1];
  const spiritName = cocktail.baseSpirit === "none"
    ? "Non-Alcoholic"
    : cocktail.baseSpirit.charAt(0).toUpperCase() + cocktail.baseSpirit.slice(1);

  // SEO optimized title
  const seoTitle = `${cocktail.name} Recipe - How to Make a ${cocktail.name} | SipWiki`;

  // SEO optimized description
  const ingredientList = cocktail.ingredients.slice(0, 3).map(i => i.name).join(", ");
  const seoDescription = `Learn how to make a perfect ${cocktail.name}. ${difficultyLabel} ${spiritName.toLowerCase()} cocktail with ${ingredientList}. Step-by-step instructions and pro tips.`;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: [
      `${cocktail.name.toLowerCase()} recipe`,
      `how to make ${cocktail.name.toLowerCase()}`,
      `${cocktail.name.toLowerCase()} cocktail`,
      `${cocktail.baseSpirit} cocktails`,
      `${cocktail.category} cocktails`,
      "cocktail recipes",
      "drink recipes",
      "mixed drinks",
    ],
    openGraph: {
      title: `${cocktail.name} Recipe - Complete Cocktail Guide`,
      description: seoDescription,
      type: "article",
      images: cocktail.image ? [{ url: cocktail.image, alt: `${cocktail.name} cocktail` }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${cocktail.name} Recipe`,
      description: `Learn how to make a ${cocktail.name}. ${difficultyLabel} difficulty.`,
    },
  };
}

// Generate Recipe JSON-LD structured data
function generateRecipeJsonLd(cocktail: Cocktail) {
  const difficultyLabel = ["Easy", "Medium", "Hard"][cocktail.difficulty - 1];

  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: cocktail.name,
    description: cocktail.description,
    author: {
      "@type": "Organization",
      name: "SipWiki",
      url: "https://sipwiki.app",
    },
    datePublished: cocktail.created_at,
    prepTime: "PT5M",
    totalTime: cocktail.difficulty === 1 ? "PT5M" : cocktail.difficulty === 2 ? "PT10M" : "PT15M",
    recipeCategory: "Cocktail",
    recipeCuisine: "International",
    recipeYield: "1 serving",
    keywords: [
      cocktail.name,
      `${cocktail.baseSpirit} cocktail`,
      cocktail.category,
      ...cocktail.tags,
    ].join(", "),
    recipeIngredient: cocktail.ingredients.map(
      (i) => `${i.amount}${i.unit ? ` ${i.unit}` : ""} ${i.name}`
    ),
    recipeInstructions: cocktail.instructions.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text: step,
    })),
    nutrition: {
      "@type": "NutritionInformation",
      servingSize: "1 cocktail",
    },
    suitableForDiet: cocktail.baseSpirit === "none" ? "https://schema.org/VeganDiet" : undefined,
    tool: [
      { "@type": "HowToTool", name: cocktail.glass },
      { "@type": "HowToTool", name: "Shaker" },
      { "@type": "HowToTool", name: "Jigger" },
    ],
    url: `https://sipwiki.app/cocktails/${cocktail.slug}`,
    ...(cocktail.image && { image: `https://sipwiki.app${cocktail.image}` }),
  };
}

// Generate HowTo JSON-LD for additional SEO
function generateHowToJsonLd(cocktail: Cocktail) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Make a ${cocktail.name}`,
    description: cocktail.description,
    totalTime: cocktail.difficulty === 1 ? "PT5M" : cocktail.difficulty === 2 ? "PT10M" : "PT15M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: cocktail.difficulty === 1 ? "5" : cocktail.difficulty === 2 ? "10" : "15",
    },
    supply: cocktail.ingredients.map((i) => ({
      "@type": "HowToSupply",
      name: i.name,
    })),
    tool: [
      { "@type": "HowToTool", name: cocktail.glass },
      { "@type": "HowToTool", name: "Cocktail shaker" },
      { "@type": "HowToTool", name: "Jigger or measuring cup" },
    ],
    step: cocktail.instructions.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text: step,
    })),
  };
}

export default async function CocktailPage({ params }: PageProps) {
  const { slug } = await params;
  const cocktail = getCocktailBySlug(slug);

  if (!cocktail) {
    notFound();
  }

  const recipeJsonLd = generateRecipeJsonLd(cocktail);
  const howToJsonLd = generateHowToJsonLd(cocktail);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <CocktailDetailClient cocktail={cocktail} />
    </>
  );
}
