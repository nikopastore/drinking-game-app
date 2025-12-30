import { cocktails } from "@/config/cocktailData";
import { CategoryPageClient } from "../(category)/CategoryPageClient";
import { Leaf } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gin Cocktails - SipWiki",
  description: "Explore botanical gin cocktail recipes. From classic Gin & Tonic to Negronis, find your perfect gin drink.",
};

export default function GinCocktailsPage() {
  const ginCocktails = cocktails.filter((c) => c.baseSpirit === "gin");

  return (
    <CategoryPageClient
      cocktails={ginCocktails}
      title="Gin Cocktails"
      description="Botanical, aromatic, and sophisticated. Explore the world of gin-based cocktails."
      icon={<Leaf className="h-10 w-10 text-neon-green" />}
    />
  );
}
