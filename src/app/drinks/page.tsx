import Link from "next/link";
import { drinks, drinkCategories } from "@/config/drinkData";
import { Header } from "@/components/Header";
import { Card, CardContent, Badge } from "@/components/ui";
import { DrinkCard } from "@/components/DrinkCard";

export default function DrinksPage() {
  const counts = drinkCategories.reduce<Record<string, number>>((acc, category) => {
    acc[category.slug] = drinks.filter((drink) => drink.categorySlug === category.slug).length;
    return acc;
  }, {});

  const featured = drinks.slice(0, 8);

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Drinks & Recipes
          </h1>
          <p className="text-gray-400 text-lg">
            {drinks.length} recipes across cocktails, shots, punches, and mocktails.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 mb-12">
          {drinkCategories.map((category) => (
            <Link key={category.slug} href={`/drinks/${category.slug}`}>
              <Card className="border-dark-600 hover:border-neon-pink/50 transition-all duration-200">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-white">{category.name}</h2>
                      <p className="text-gray-400 text-sm mt-1">{category.description}</p>
                    </div>
                    <Badge variant="pink" className="text-sm">
                      {counts[category.slug]} recipes
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Featured Recipes</h2>
            <Link href="/drinks/cocktails" className="text-neon-pink hover:underline text-sm">
              Browse cocktails
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((drink) => (
              <DrinkCard key={drink.slug} drink={drink} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
