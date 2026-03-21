import Link from "next/link";
import { tvGames } from "@/config/tvGameData";
import { Header } from "@/components/Header";
import { Card, CardContent, Badge } from "@/components/ui";

export default function TvGamesPage() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            TV & Movie Drinking Games
          </h1>
          <p className="text-gray-400 text-lg">
            {tvGames.length} complete drinking games for your favorite shows and movies.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tvGames.map((game) => (
            <Link key={game.slug} href={`/tv-games/${game.slug}`}>
              <Card className="h-full border-dark-600 hover:border-neon-pink/50 transition-all duration-200">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-bold text-white mb-1">{game.name}</h2>
                      <p className="text-gray-400 text-sm">{game.title}</p>
                    </div>
                    <Badge variant="pink" className="text-xs">New</Badge>
                  </div>
                  <p className="text-gray-500 text-sm mt-3">
                    {game.drinkRules.length} drink rules • {game.shotRules.length} shot rules
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
