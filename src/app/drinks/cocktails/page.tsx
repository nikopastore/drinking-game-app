import type { Metadata } from "next";
import { DrinksCategoryPage } from "../CategoryPage";

export const metadata: Metadata = {
  title: "Cocktail Recipes - Easy Party Drinks | SipWiki",
  description: "Explore cocktail recipes with step-by-step instructions, ingredients, and pro tips. Find classics like Margaritas, Mojitos, and more.",
};

export default function CocktailsDrinksPage() {
  return <DrinksCategoryPage category="cocktails" />;
}
