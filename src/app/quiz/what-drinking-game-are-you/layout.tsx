import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Drinking Game Are You? Free Personality Quiz | SipWiki",
  description: "Take our fun 2-minute quiz to discover your drinking game personality! Find out if you're a Kings Cup Royalty, Beer Pong Champion, or Chaos Agent. Get personalized game recommendations based on your party style.",
  keywords: [
    // Primary keywords
    "what drinking game are you",
    "drinking game quiz",
    "drinking game personality quiz",
    "party personality quiz",
    "drinking game personality test",
    // Long-tail keywords
    "which drinking game should i play",
    "what drinking game matches my personality",
    "find my drinking game",
    "drinking game recommendation quiz",
    "best drinking game for me quiz",
    "party game personality test",
    "drinking game finder quiz",
    // Question-based keywords (AI search)
    "what drinking game should we play",
    "how to pick a drinking game",
    "what is the best drinking game",
    "drinking game for my group",
    // Related keywords
    "kings cup or beer pong quiz",
    "fun party quiz",
    "drinking game selector",
    "party game quiz",
    "beer pong personality",
    "flip cup personality"
  ],
  openGraph: {
    title: "What Drinking Game Are You? Take the Quiz!",
    description: "Discover your drinking game personality in 2 minutes! Are you a Kings Cup Royalty, Beer Pong Champion, or Chaos Agent? Get personalized game recommendations.",
    type: "website",
    url: "https://sipwiki.app/quiz/what-drinking-game-are-you",
    siteName: "SipWiki",
    locale: "en_US",
    images: [
      {
        url: "https://sipwiki.app/og-quiz.png",
        width: 1200,
        height: 630,
        alt: "What Drinking Game Are You? Personality Quiz"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "What Drinking Game Are You? Take the Quiz!",
    description: "Discover your drinking game personality! Are you a Kings Cup Royalty, Beer Pong Champion, or Chaos Agent?",
    images: ["https://sipwiki.app/og-quiz.png"],
  },
  alternates: {
    canonical: "https://sipwiki.app/quiz/what-drinking-game-are-you"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
