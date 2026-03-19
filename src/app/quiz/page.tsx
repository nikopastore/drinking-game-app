import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { Card, CardContent } from "@/components/ui";

export const metadata: Metadata = {
  title: "Drinking Quizzes - Fun Party Personality Tests | SipWiki",
  description: "Take our fun drinking quizzes to discover your party personality, find your perfect cocktail, and get matched with drinking games you'll love.",
  keywords: [
    "drinking quiz",
    "drinking game quiz",
    "party quiz",
    "alcohol quiz",
    "cocktail quiz",
    "what drink are you quiz",
    "drinking personality quiz",
    "party personality test",
  ],
  openGraph: {
    title: "Drinking Quizzes - Fun Party Personality Tests",
    description: "Take our fun drinking quizzes to discover your party personality and find games you'll love.",
    type: "website",
    url: "https://sipwiki.app/quiz",
  },
};

const quizzes = [
  {
    slug: "what-drinking-game-are-you",
    title: "What Drinking Game Are You?",
    description: "Answer 7 questions to discover which drinking game matches your personality perfectly.",
    emoji: "🎲",
    color: "from-neon-pink to-purple-500",
    duration: "2 min",
  },
  {
    slug: "what-cocktail-are-you",
    title: "What Cocktail Are You?",
    description: "Find out which classic cocktail matches your vibe based on your personality and preferences.",
    emoji: "🍸",
    color: "from-blue-500 to-cyan-400",
    duration: "2 min",
  },
];

function QuizHubClient() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <Sidebar />

      <main className="md:ml-16 transition-all duration-300 ease-in-out pb-24 md:pb-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-neon-pink/20 via-dark-800 to-neon-purple/20 border-b border-dark-600">
          <div className="max-w-4xl mx-auto px-4 py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Drinking Quizzes
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Fun personality quizzes to help you discover your party style, find your perfect drink, and get matched with games you&apos;ll love.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Quiz Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {quizzes.map((quiz) => (
              <Link key={quiz.slug} href={`/quiz/${quiz.slug}`}>
                <Card className="h-full hover:border-neon-pink/50 transition-all cursor-pointer group">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${quiz.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                      {quiz.emoji}
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2">{quiz.title}</h2>
                    <p className="text-gray-400 mb-4">{quiz.description}</p>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <span>⏱️ {quiz.duration}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* SEO Content */}
          <div className="mt-12">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Find Your Perfect Party Match
                </h2>
                <div className="prose prose-invert max-w-none space-y-4 text-gray-300">
                  <p>
                    Our drinking quizzes are designed to help you discover your party personality and find
                    the perfect games and drinks for your next gathering. Whether you&apos;re planning a
                    casual hangout or an epic party, these fun personality tests will guide you to the
                    best choices.
                  </p>
                  <h3 className="text-xl font-semibold text-white">What Drinking Game Are You?</h3>
                  <p>
                    This quiz analyzes your party style, competitiveness, and social preferences to match
                    you with drinking games that fit your personality. Are you a strategic{" "}
                    <Link href="/games/kings-cup" className="text-neon-pink hover:underline">Kings Cup</Link> player,
                    a competitive <Link href="/games/beer-pong" className="text-neon-pink hover:underline">Beer Pong</Link> champion,
                    or more of a chill <Link href="/games/never-have-i-ever" className="text-neon-pink hover:underline">Never Have I Ever</Link> type?
                  </p>
                  <h3 className="text-xl font-semibold text-white">What Cocktail Are You?</h3>
                  <p>
                    Discover which classic cocktail matches your personality. From sophisticated Martinis
                    to tropical Margaritas, find out which drink represents your vibe and explore our
                    complete <Link href="/cocktails" className="text-neon-pink hover:underline">cocktail recipes</Link>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <MobileNav />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Drinking Quizzes - Fun Party Personality Tests",
            description: "Take our fun drinking quizzes to discover your party personality, find your perfect cocktail, and get matched with drinking games you'll love.",
            url: "https://sipwiki.app/quiz",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: quizzes.map((quiz, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `https://sipwiki.app/quiz/${quiz.slug}`,
                name: quiz.title,
              })),
            },
          }),
        }}
      />
    </div>
  );
}

export default function QuizHubPage() {
  return <QuizHubClient />;
}
