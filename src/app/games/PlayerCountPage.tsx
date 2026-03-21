import Link from "next/link";
import { Header } from "@/components/Header";
import { GameCard } from "@/components/GameCard";
import { games } from "@/config/gameData";
import { Badge } from "@/components/ui";

interface PlayerCountPageProps {
  title: string;
  description: string;
  minPlayers: number;
  maxPlayers?: number | null;
  slug: string;
}

export function PlayerCountPage({
  title,
  description,
  minPlayers,
  maxPlayers,
  slug,
}: PlayerCountPageProps) {
  const filteredGames = games.filter((game) => {
    const meetsMin = game.min_players <= minPlayers;
    const meetsMax = game.max_players === null || game.max_players >= minPlayers;
    if (!meetsMin || !meetsMax) return false;

    if (typeof maxPlayers === "number") {
      return game.min_players <= maxPlayers;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/games" className="hover:text-white">Games</Link>
          <span className="mx-2">/</span>
          <span className="text-neon-pink">{title}</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{title}</h1>
          <p className="text-gray-400 text-lg">{description}</p>
          <div className="mt-3">
            <Badge variant="pink">{filteredGames.length} games</Badge>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredGames.map((game) => (
            <GameCard key={game.slug} game={game} size="medium" showSipFactor />
          ))}
        </div>

        <div className="mt-10 border-t border-dark-600 pt-6 text-sm text-gray-400">
          Looking for more options? Explore <Link href="/games" className="text-neon-pink hover:underline">all games</Link> or browse
          the <Link href="/games/large-groups" className="text-neon-pink hover:underline">large group category</Link>.
        </div>
      </main>
    </div>
  );
}
