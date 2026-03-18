import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cocktail Recipes & Party Drinks | SipWiki",
  description:
    "Explore cocktail recipes for every party: classics, shooters, tropical drinks, and mocktails. Browse by spirit, difficulty, and vibe to find your next favorite drink.",
  keywords: [
    "cocktail recipes",
    "party drinks",
    "mixed drinks",
    "classic cocktails",
    "shooters",
    "tropical cocktails",
    "mocktails",
    "vodka cocktails",
    "tequila cocktails",
    "rum cocktails",
  ],
  openGraph: {
    title: "Cocktail Recipes & Party Drinks | SipWiki",
    description:
      "Explore cocktail recipes for every party: classics, shooters, tropical drinks, and mocktails.",
    type: "website",
    url: "https://sipwiki.app/cocktails",
  },
  alternates: {
    canonical: "https://sipwiki.app/cocktails",
  },
};

export default function CocktailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
