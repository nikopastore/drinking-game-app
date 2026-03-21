import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { AlcoholDisclaimer } from "@/components/AlcoholDisclaimer";
import { Card, CardContent, Badge } from "@/components/ui";
import { getTvGameBySlug, tvGames } from "@/config/tvGameData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tvGames.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getTvGameBySlug(slug);

  if (!game) {
    return { title: "TV Game Not Found - SipWiki" };
  }

  const description = `Play the ${game.name} drinking game with ${game.drinkRules.length} drink rules, ${game.shotRules.length} shot rules, and episode recommendations.`;

  return {
    title: game.title,
    description,
    openGraph: {
      title: game.title,
      description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: game.title,
      description,
    },
  };
}

export default async function TvGameDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const game = getTvGameBySlug(slug);

  if (!game) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/tv-games" className="hover:text-white">TV Games</Link>
          <span className="mx-2">/</span>
          <span className="text-neon-pink">{game.name}</span>
        </nav>

        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{game.title}</h1>
          <p className="text-gray-400 text-lg">{game.name} drinking game rules and episode picks.</p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="pink">{game.drinkRules.length} drink rules</Badge>
            <Badge variant="purple">{game.shotRules.length} shot rules</Badge>
          </div>
        </div>

        <AlcoholDisclaimer variant="compact" className="mb-6" />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Card className="border-dark-600">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-white mb-3">Take a Drink When...</h2>
              <ul className="space-y-2 text-gray-300">
                {game.drinkRules.map((rule) => (
                  <li key={rule}>• {rule}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-dark-600">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-white mb-3">Take a Shot When...</h2>
              <ul className="space-y-2 text-gray-300">
                {game.shotRules.map((rule) => (
                  <li key={rule}>• {rule}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border-dark-600 mt-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-white mb-3">Best Episodes or Movies</h2>
            <ul className="space-y-2 text-gray-300">
              {game.episodeRecommendations.map((episode) => (
                <li key={episode}>• {episode}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
