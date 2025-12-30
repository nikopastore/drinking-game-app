"use client";

import Link from "next/link";
import { Cocktail } from "@/types";
import { Header } from "@/components/Header";
import { Sidebar, useSidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { Card, CardContent, Badge } from "@/components/ui";
import {
  ArrowLeft,
  Flame,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface CategoryPageClientProps {
  cocktails: Cocktail[];
  title: string;
  description: string;
  icon?: React.ReactNode;
}

function CocktailCard({ cocktail }: { cocktail: Cocktail }) {
  const strengthIcons = Array.from({ length: 5 }, (_, i) => (
    <Flame
      key={i}
      className={cn(
        "h-3 w-3",
        i < cocktail.strength
          ? "text-neon-pink drop-shadow-[0_0_4px_rgba(236,72,153,0.8)]"
          : "text-gray-600"
      )}
    />
  ));

  const difficultyLabel = ["Easy", "Medium", "Hard"][cocktail.difficulty - 1];

  return (
    <Link href={`/cocktails/${cocktail.slug}`}>
      <Card className="h-full hover:border-neon-pink/50 transition-all duration-200 hover:shadow-lg hover:shadow-neon-pink/20 cursor-pointer group overflow-hidden">
        {cocktail.image && (
          <div className="relative h-52 w-full overflow-hidden bg-dark-700">
            <img
              src={cocktail.image}
              alt={cocktail.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-dark-800 to-transparent" />
          </div>
        )}
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-bold text-white group-hover:text-neon-pink transition-colors line-clamp-1">
              {cocktail.name}
            </h3>
            <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-neon-pink transition-colors flex-shrink-0" />
          </div>

          <p className="text-gray-400 text-sm line-clamp-2 mb-3">
            {cocktail.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="purple" className="text-xs">
              {cocktail.baseSpirit === "none" ? "Non-Alcoholic" : cocktail.baseSpirit}
            </Badge>
            <Badge variant="default" className="text-xs">
              {cocktail.glass}
            </Badge>
            <Badge variant={cocktail.difficulty === 1 ? "green" : cocktail.difficulty === 2 ? "yellow" : "pink"} className="text-xs">
              {difficultyLabel}
            </Badge>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Strength:</span>
            <div className="flex gap-0.5">{strengthIcons}</div>
          </div>

          <div className="mt-3 pt-3 border-t border-dark-600">
            <p className="text-xs text-gray-500">
              {cocktail.ingredients.slice(0, 3).map((i) => i.name).join(", ")}
              {cocktail.ingredients.length > 3 && ` +${cocktail.ingredients.length - 3} more`}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export function CategoryPageClient({ cocktails, title, description, icon }: CategoryPageClientProps) {
  const { isExpanded } = useSidebar();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <Sidebar />

      <main
        className={`
          max-w-6xl mx-auto px-4 py-8 pb-24 md:pb-8
          transition-all duration-300 ease-in-out
          ${isExpanded ? "md:ml-56" : "md:ml-16"}
        `}
      >
        {/* Back button */}
        <button
          onClick={() => router.push("/cocktails")}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          All Cocktails
        </button>

        {/* Hero */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            {icon}
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
                {title}
              </span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg">
            {description}
          </p>
          <Badge variant="green" className="mt-4">
            {cocktails.length} cocktails
          </Badge>
        </div>

        {/* Cocktail Grid */}
        {cocktails.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cocktails.map((cocktail) => (
              <CocktailCard key={cocktail.id} cocktail={cocktail} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-dark-800 rounded-xl border border-dark-600">
            <Sparkles className="h-12 w-12 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-400 text-lg mb-2">No cocktails found</p>
            <p className="text-gray-500 text-sm">
              Check back soon for new recipes
            </p>
          </div>
        )}
      </main>

      <MobileNav />
    </div>
  );
}
