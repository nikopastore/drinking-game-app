import Link from "next/link";
import { Header } from "@/components/Header";
import { DrinkCard } from "@/components/DrinkCard";
import { drinkCategories, DrinkCategorySlug, getDrinksByCategory } from "@/config/drinkData";

const categoryMeta: Record<DrinkCategorySlug, { title: string; subtitle: string }> = {
  cocktails: {
    title: "Cocktail Recipes",
    subtitle: "Classic and modern cocktails with step-by-step instructions.",
  },
  shots: {
    title: "Shot Recipes",
    subtitle: "Quick shooters and bomb shots for party nights.",
  },
  punches: {
    title: "Punch Recipes",
    subtitle: "Batch-friendly punches for groups and celebrations.",
  },
  mocktails: {
    title: "Mocktail Recipes",
    subtitle: "Zero-proof drinks with full flavor.",
  },
};

export function DrinksCategoryPage({ category }: { category: DrinkCategorySlug }) {
  const drinks = getDrinksByCategory(category);
  const meta = categoryMeta[category];
  const categoryLabel = drinkCategories.find((item) => item.slug === category)?.name || "Drinks";

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/drinks" className="hover:text-white">Drinks</Link>
          <span className="mx-2">/</span>
          <span className="text-neon-pink">{categoryLabel}</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{meta.title}</h1>
          <p className="text-gray-400 text-lg">{meta.subtitle}</p>
          <p className="text-gray-500 text-sm mt-2">{drinks.length} recipes</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {drinks.map((drink) => (
            <DrinkCard key={drink.slug} drink={drink} />
          ))}
        </div>
      </main>
    </div>
  );
}
