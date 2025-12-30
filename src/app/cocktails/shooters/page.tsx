import { cocktails } from "@/config/cocktailData";
import { CategoryPageClient } from "../(category)/CategoryPageClient";
import { FlaskConical } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shooters & Shots - SipWiki",
  description: "Discover party shooter recipes. From B-52s to Lemon Drops, find the perfect shots for your party.",
};

export default function ShootersCocktailsPage() {
  const shooterCocktails = cocktails.filter((c) => c.category === "shooter");

  return (
    <CategoryPageClient
      cocktails={shooterCocktails}
      title="Shooters & Shots"
      description="Quick, fun, and perfect for celebrations. Discover popular party shots."
      icon={<FlaskConical className="h-10 w-10 text-neon-pink" />}
    />
  );
}
