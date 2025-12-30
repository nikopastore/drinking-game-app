import { cocktails } from "@/config/cocktailData";
import { CategoryPageClient } from "../(category)/CategoryPageClient";
import { PartyPopper } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Party Drinks - SipWiki",
  description: "Discover crowd-pleasing party cocktail recipes. Perfect drinks for entertaining and celebrations.",
};

export default function PartyCocktailsPage() {
  const partyCocktails = cocktails.filter((c) => c.category === "party");

  return (
    <CategoryPageClient
      cocktails={partyCocktails}
      title="Party Drinks"
      description="Big batch favorites and crowd-pleasers. Perfect for entertaining."
      icon={<PartyPopper className="h-10 w-10 text-yellow-400" />}
    />
  );
}
