import { cocktails } from "@/config/cocktailData";
import { CategoryPageClient } from "../(category)/CategoryPageClient";
import { Wheat } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whiskey Cocktails - SipWiki",
  description: "Discover classic whiskey cocktail recipes. From Old Fashioneds to Manhattans, find your perfect whiskey drink.",
};

export default function WhiskeyCocktailsPage() {
  const whiskeyCocktails = cocktails.filter((c) => c.baseSpirit === "whiskey");

  return (
    <CategoryPageClient
      cocktails={whiskeyCocktails}
      title="Whiskey Cocktails"
      description="Rich, complex, and timeless. Discover the art of whiskey-based cocktails."
      icon={<Wheat className="h-10 w-10 text-amber-600" />}
    />
  );
}
