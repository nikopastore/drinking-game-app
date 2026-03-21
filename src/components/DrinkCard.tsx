import Link from "next/link";
import { Card, CardContent, Badge } from "@/components/ui";
import { DrinkRecipe } from "@/config/drinkData";
import { cn } from "@/lib/utils";

const categoryStyles: Record<DrinkRecipe["categorySlug"], { label: string; gradient: string; marker: string }> = {
  cocktails: { label: "Cocktail", gradient: "from-rose-500/20 via-transparent to-transparent", marker: "C" },
  shots: { label: "Shot", gradient: "from-amber-500/20 via-transparent to-transparent", marker: "S" },
  punches: { label: "Punch", gradient: "from-emerald-500/20 via-transparent to-transparent", marker: "P" },
  mocktails: { label: "Mocktail", gradient: "from-cyan-500/20 via-transparent to-transparent", marker: "M" },
};

export function DrinkCard({ drink }: { drink: DrinkRecipe }) {
  const style = categoryStyles[drink.categorySlug];

  return (
    <Link href={`/drinks/${drink.slug}`}>
      <Card className="h-full border-dark-600 hover:border-neon-pink/50 transition-all duration-200 hover:shadow-lg hover:shadow-neon-pink/20 overflow-hidden group">
        <div className={cn("h-28 bg-dark-800 relative", style.gradient)}>
          <div className="absolute inset-0 flex items-center justify-center text-3xl font-semibold text-white/70">
            {style.marker}
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-white group-hover:text-neon-pink transition-colors line-clamp-1">
              {drink.name}
            </h3>
          </div>
          <p className="text-gray-400 text-sm line-clamp-2 mt-2">{drink.description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="purple" className="text-xs">
              {style.label}
            </Badge>
            <Badge variant="muted" className="text-xs">
              {drink.glass}
            </Badge>
            <Badge
              variant={drink.difficulty === 1 ? "green" : drink.difficulty === 2 ? "yellow" : "pink"}
              className="text-xs"
            >
              {drink.difficulty === 1 ? "Easy" : drink.difficulty === 2 ? "Medium" : "Hard"}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
