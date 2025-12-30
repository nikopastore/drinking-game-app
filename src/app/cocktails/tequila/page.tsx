import { cocktails } from "@/config/cocktailData";
import { CategoryPageClient } from "../(category)/CategoryPageClient";
import { Citrus } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tequila Cocktails - SipWiki",
  description: "Explore authentic tequila cocktail recipes. From Margaritas to Palomas, find your perfect tequila drink.",
};

export default function TequilaCocktailsPage() {
  const tequilaCocktails = cocktails.filter((c) => c.baseSpirit === "tequila");

  return (
    <CategoryPageClient
      cocktails={tequilaCocktails}
      title="Tequila Cocktails"
      description="Bold, vibrant, and full of character. Explore Mexican-inspired cocktails."
      icon={<Citrus className="h-10 w-10 text-lime-400" />}
    />
  );
}
