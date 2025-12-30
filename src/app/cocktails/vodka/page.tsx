import { cocktails } from "@/config/cocktailData";
import { CategoryPageClient } from "../(category)/CategoryPageClient";
import { GlassWater } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vodka Cocktails - SipWiki",
  description: "Discover the best vodka cocktail recipes. From Moscow Mules to Cosmopolitans, find your perfect vodka drink.",
};

export default function VodkaCocktailsPage() {
  const vodkaCocktails = cocktails.filter((c) => c.baseSpirit === "vodka");

  return (
    <CategoryPageClient
      cocktails={vodkaCocktails}
      title="Vodka Cocktails"
      description="Clean, versatile, and perfect for mixing. Discover classic and modern vodka cocktails."
      icon={<GlassWater className="h-10 w-10 text-neon-blue" />}
    />
  );
}
