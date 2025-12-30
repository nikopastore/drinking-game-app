import { cocktails } from "@/config/cocktailData";
import { CategoryPageClient } from "../(category)/CategoryPageClient";
import { Leaf } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mocktails - Non-Alcoholic Drinks - SipWiki",
  description: "Discover refreshing non-alcoholic mocktail recipes. Perfect for designated drivers, kids, or anyone taking a break.",
};

export default function MocktailsPage() {
  const mocktails = cocktails.filter((c) => c.category === "mocktail" || c.baseSpirit === "none");

  return (
    <CategoryPageClient
      cocktails={mocktails}
      title="Mocktails"
      description="Delicious non-alcoholic drinks for everyone to enjoy."
      icon={<Leaf className="h-10 w-10 text-green-400" />}
    />
  );
}
