import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Cocktail Are You?",
  description: "Take the SipWiki personality quiz to discover which classic cocktail matches your vibe.",
  alternates: { canonical: "/quiz/what-cocktail-are-you" },
};

export default function CocktailQuizLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
