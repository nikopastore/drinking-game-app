import { cocktails } from "@/config/cocktailData";
import { CategoryPageClient } from "../(category)/CategoryPageClient";
import { Grape } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wine Cocktails - SipWiki",
  description: "Discover refreshing wine cocktail recipes. From Sangria to Spritzers, find your perfect wine-based drink.",
};

export default function WineCocktailsPage() {
  const wineCocktails = cocktails.filter((c) => c.category === "wine-cocktail");

  return (
    <CategoryPageClient
      cocktails={wineCocktails}
      title="Wine Cocktails"
      description="Elegant, fruity, and refreshing. Discover wine-based cocktails and spritzers."
      icon={<Grape className="h-10 w-10 text-purple-400" />}
    />
  );
}
