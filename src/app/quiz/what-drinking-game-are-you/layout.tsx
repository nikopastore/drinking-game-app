import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Drinking Game Are You? Personality Quiz | SipWiki",
  description: "Take our fun personality quiz to discover which drinking game matches your party style. Find your perfect game based on your social preferences and competitiveness.",
  keywords: [
    "what drinking game are you",
    "drinking game quiz",
    "party personality quiz",
    "drinking game personality test",
    "which drinking game should i play",
    "party game quiz",
    "drinking game finder",
    "beer pong or kings cup quiz",
    "best drinking game for me",
    "drinking game recommendation quiz"
  ],
  openGraph: {
    title: "What Drinking Game Are You? Take the Quiz!",
    description: "Discover your drinking game personality with this fun quiz. Find out which party game matches your style.",
    type: "website",
    url: "https://sipwiki.app/quiz/what-drinking-game-are-you",
    images: [
      {
        url: "https://sipwiki.app/og-quiz.png",
        width: 1200,
        height: 630,
        alt: "What Drinking Game Are You? Quiz"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "What Drinking Game Are You? Take the Quiz!",
    description: "Discover your drinking game personality with this fun quiz.",
  },
  alternates: {
    canonical: "https://sipwiki.app/quiz/what-drinking-game-are-you"
  }
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
