import type { Metadata } from "next";
import { DrinksCategoryPage } from "../CategoryPage";

export const metadata: Metadata = {
  alternates: { canonical: "/drinks/mocktails" },
  title: "Mocktail Recipes - Non-Alcoholic Drinks | SipWiki",
  description: "Non-alcoholic mocktail recipes with bright flavors and party-ready presentation.",
};

export default function MocktailsDrinksPage() {
  return <DrinksCategoryPage category="mocktails" />;
}
