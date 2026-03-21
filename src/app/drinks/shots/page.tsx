import type { Metadata } from "next";
import { DrinksCategoryPage } from "../CategoryPage";

export const metadata: Metadata = {
  title: "Shot Recipes - Party Shooters & Bombs | SipWiki",
  description: "Discover shot recipes including Lemon Drop, Kamikaze, B-52, and more. Quick shooters and bomb shots for parties.",
};

export default function ShotsDrinksPage() {
  return <DrinksCategoryPage category="shots" />;
}
