import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Badge, Card, CardContent } from "@/components/ui";
import { DrinkRecipe, drinks, getDrinkBySlug } from "@/config/drinkData";
import { generateRecipeSchema } from "@/lib/schema/recipeSchema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return drinks.map((drink) => ({ slug: drink.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const drink = getDrinkBySlug(slug);

  if (!drink) {
    return { title: "Drink Not Found - SipWiki" };
  }

  const difficultyLabel = ["Easy", "Medium", "Hard"][drink.difficulty - 1];
  const ingredientList = drink.ingredients.slice(0, 3).map((i) => i.name).join(", ");
  const title = `${drink.name} Recipe - How to Make ${drink.name} | SipWiki`;
  const description = `Learn how to make ${drink.name}. ${difficultyLabel} recipe with ${ingredientList}. Step-by-step instructions, serving size, and pro tips.`;

  return {
    title,
    description,
    openGraph: {
      title: `${drink.name} Recipe - Complete Guide`,
      description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${drink.name} Recipe`,
      description,
    },
  };
}

function getCategoryLabel(drink: DrinkRecipe) {
  switch (drink.categorySlug) {
    case "cocktails":
      return "Cocktail";
    case "shots":
      return "Shot";
    case "punches":
      return "Punch";
    case "mocktails":
      return "Mocktail";
    default:
      return "Drink";
  }
}

export default async function DrinkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const drink = getDrinkBySlug(slug);

  if (!drink) {
    notFound();
  }

  const recipeSchema = generateRecipeSchema({
    cocktail: drink,
    url: `https://sipwiki.app/drinks/${drink.slug}`,
    imageUrl: drink.image ? `https://sipwiki.app${drink.image}` : undefined,
  });

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeSchema) }}
        />

        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/drinks" className="hover:text-white">Drinks</Link>
          <span className="mx-2">/</span>
          <Link href={`/drinks/${drink.categorySlug}`} className="hover:text-white">
            {drink.categorySlug}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-neon-pink">{drink.name}</span>
        </nav>

        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{drink.name}</h1>
          <p className="text-gray-400 text-lg">{drink.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="pink">{getCategoryLabel(drink)}</Badge>
            <Badge variant="purple">{drink.glass}</Badge>
            <Badge
              variant={drink.difficulty === 1 ? "green" : drink.difficulty === 2 ? "yellow" : "pink"}
            >
              {drink.difficulty === 1 ? "Easy" : drink.difficulty === 2 ? "Medium" : "Hard"}
            </Badge>
            <Badge variant="muted">{drink.servingSize}</Badge>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Card className="border-dark-600">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-white mb-3">Ingredients</h2>
              <ul className="space-y-2 text-gray-300">
                {drink.ingredients.map((ingredient) => (
                  <li key={ingredient.name}>
                    {ingredient.amount} {ingredient.unit ? `${ingredient.unit} ` : ""}{ingredient.name}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-dark-600">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-white mb-3">Pro Tips</h2>
              <ul className="space-y-2 text-gray-300">
                {drink.proTips.map((tip) => (
                  <li key={tip}>• {tip}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border-dark-600 mt-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-white mb-3">Instructions</h2>
            <ol className="space-y-3 text-gray-300 list-decimal list-inside">
              {drink.instructions.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
