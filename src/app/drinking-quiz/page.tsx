import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Drinking Quiz - Discover Your Party Personality | SipWiki",
  description: "Take our fun drinking quizzes to discover your party personality. Find out what drinking game matches your style and what cocktail represents you!",
  keywords: [
    "drinking quiz",
    "drinking game quiz",
    "alcohol quiz",
    "party personality quiz",
    "what drinking game am i",
    "drinking personality test",
    "party quiz",
  ],
  openGraph: {
    title: "Drinking Quiz - Discover Your Party Personality",
    description: "Take our fun drinking quizzes to discover your party personality and find games you'll love.",
    type: "website",
    url: "https://sipwiki.app/drinking-quiz",
  },
  alternates: {
    canonical: "https://sipwiki.app/quiz",
  },
};

export default function DrinkingQuizPage() {
  redirect("/quiz");
}
