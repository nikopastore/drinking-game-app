import { cocktails } from "@/config/cocktailData";
import { CategoryPageClient } from "../(category)/CategoryPageClient";
import { Citrus } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rum Cocktails - SipWiki",
  description: "Discover tropical rum cocktail recipes. From Mojitos to Piña Coladas, find your perfect rum drink.",
};

export default function RumCocktailsPage() {
  const rumCocktails = cocktails.filter((c) => c.baseSpirit === "rum");

  return (
    <CategoryPageClient
      cocktails={rumCocktails}
      title="Rum Cocktails"
      description="Tropical, sweet, and perfect for parties. Discover classic Caribbean-inspired cocktails."
      icon={<Citrus className="h-10 w-10 text-amber-400" />}
    />
  );
}
