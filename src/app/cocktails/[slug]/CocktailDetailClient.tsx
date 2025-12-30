"use client";

import { useRouter } from "next/navigation";
import { cocktails } from "@/config/cocktailData";
import { Cocktail } from "@/types";
import { Header } from "@/components/Header";
import { Sidebar, useSidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { Card, CardContent, Badge, Button } from "@/components/ui";
import {
  ArrowLeft,
  Flame,
  Wine,
  ListOrdered,
  Sparkles,
  Share2,
  ChefHat,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FavoriteButton } from "@/components/favorites";

interface CocktailDetailClientProps {
  cocktail: Cocktail;
}

export function CocktailDetailClient({ cocktail }: CocktailDetailClientProps) {
  const router = useRouter();
  const { isExpanded } = useSidebar();

  const strengthIcons = Array.from({ length: 5 }, (_, i) => (
    <Flame
      key={i}
      className={cn(
        "h-4 w-4",
        i < cocktail.strength
          ? "text-neon-pink drop-shadow-[0_0_4px_rgba(236,72,153,0.8)]"
          : "text-gray-600"
      )}
    />
  ));

  const difficultyLabel = ["Easy", "Medium", "Hard"][cocktail.difficulty - 1];
  const difficultyColor = cocktail.difficulty === 1 ? "green" : cocktail.difficulty === 2 ? "yellow" : "pink";

  // Get related cocktails (same spirit or category)
  const relatedCocktails = cocktails
    .filter(
      (c) =>
        c.id !== cocktail.id &&
        (c.baseSpirit === cocktail.baseSpirit || c.category === cocktail.category)
    )
    .slice(0, 4);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${cocktail.name} Recipe - SipWiki`,
          text: cocktail.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <Sidebar />

      <main
        className={`
          max-w-4xl mx-auto px-4 py-8 pb-24 md:pb-8
          transition-all duration-300 ease-in-out
          ${isExpanded ? "md:ml-56" : "md:ml-16"}
        `}
      >
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        {/* Hero Image */}
        {cocktail.image && (
          <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden mb-8">
            <img
              src={cocktail.image}
              alt={cocktail.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
          </div>
        )}

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {cocktail.name}
              </h1>
              <p className="text-gray-400 text-lg">{cocktail.description}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleShare}
                className="p-2 rounded-lg bg-dark-700 text-gray-400 hover:text-white hover:bg-dark-600 transition-colors"
              >
                <Share2 className="h-5 w-5" />
              </button>
              <FavoriteButton
                type="cocktail"
                slug={cocktail.slug}
                name={cocktail.name}
                size="md"
              />
            </div>
          </div>

          {/* Meta badges */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="purple">
              {cocktail.baseSpirit === "none" ? "Non-Alcoholic" : cocktail.baseSpirit.charAt(0).toUpperCase() + cocktail.baseSpirit.slice(1)}
            </Badge>
            <Badge variant="default">{cocktail.glass}</Badge>
            <Badge variant={difficultyColor as "green" | "yellow" | "pink"}>{difficultyLabel}</Badge>
            <Badge variant="default">{cocktail.category}</Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="md:col-span-2 space-y-6">
            {/* Ingredients */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Wine className="h-5 w-5 text-neon-pink" />
                  Ingredients
                </h2>
                <ul className="space-y-3">
                  {cocktail.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-dark-600 last:border-0"
                    >
                      <span className="text-white">{ingredient.name}</span>
                      <span className="text-gray-400">
                        {ingredient.amount}
                        {ingredient.unit && ` ${ingredient.unit}`}
                      </span>
                    </li>
                  ))}
                </ul>
                {cocktail.garnish && (
                  <div className="mt-4 pt-4 border-t border-dark-600">
                    <span className="text-gray-400">Garnish: </span>
                    <span className="text-white">{cocktail.garnish}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <ListOrdered className="h-5 w-5 text-neon-blue" />
                  Instructions
                </h2>
                <ol className="space-y-4">
                  {cocktail.instructions.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-neon-pink/20 text-neon-pink flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      <p className="text-gray-300 pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Tags */}
            {cocktail.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {cocktail.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-dark-700 text-gray-400 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar info */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-bold text-white flex items-center gap-2">
                  <ChefHat className="h-5 w-5 text-neon-purple" />
                  Quick Info
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Difficulty</span>
                    <Badge variant={difficultyColor as "green" | "yellow" | "pink"}>
                      {difficultyLabel}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Strength</span>
                    <div className="flex gap-0.5">{strengthIcons}</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Glass</span>
                    <span className="text-white text-sm">{cocktail.glass}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Category</span>
                    <span className="text-white text-sm capitalize">{cocktail.category.replace("-", " ")}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pro Tips */}
            <Card className="border-neon-pink/30">
              <CardContent className="p-6">
                <h3 className="font-bold text-white flex items-center gap-2 mb-3">
                  <Sparkles className="h-5 w-5 text-neon-pink" />
                  Pro Tips
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Use fresh ingredients when possible</li>
                  <li>• Chill your glass for a better experience</li>
                  <li>• Measure your ingredients precisely</li>
                  {cocktail.baseSpirit !== "none" && (
                    <li>• Quality spirits make a difference</li>
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Cocktails */}
        {relatedCocktails.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedCocktails.map((related) => (
                <Link key={related.id} href={`/cocktails/${related.slug}`}>
                  <Card className="h-full hover:border-neon-pink/50 transition-all cursor-pointer">
                    <CardContent className="p-4">
                      <h3 className="font-bold text-white text-sm mb-1 line-clamp-1">
                        {related.name}
                      </h3>
                      <p className="text-gray-500 text-xs line-clamp-2">
                        {related.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <MobileNav />
    </div>
  );
}
