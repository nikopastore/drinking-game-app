import type { Metadata } from "next";
import { DrinksCategoryPage } from "../CategoryPage";

export const metadata: Metadata = {
  title: "Punch Recipes - Batch Drinks for Parties | SipWiki",
  description: "Batch-friendly punch recipes for groups, including Jungle Juice and Sangria variations. Perfect for parties and events.",
};

export default function PunchesDrinksPage() {
  return <DrinksCategoryPage category="punches" />;
}
