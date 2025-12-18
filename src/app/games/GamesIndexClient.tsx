"use client";

import Link from "next/link";
import { games } from "@/config/gameData";
import { gameCategories, getGamesForCategory } from "@/config/categoryData";
import { Header } from "@/components/Header";
import { GameCard } from "@/components/GameCard";
import { Sidebar, useSidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { ChevronRight } from "lucide-react";

export function GamesIndexClient() {
  const { isExpanded } = useSidebar();

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <Sidebar />

      <main
        className={`
          max-w-7xl mx-auto px-4 py-8 pb-24 md:pb-8
          transition-all duration-300 ease-in-out
          ${isExpanded ? "md:ml-56" : "md:ml-16"}
        `}
      >
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            All Drinking Games
          </h1>
          <p className="text-gray-400 text-lg">
            {games.length} games with complete rules. Find your next party favorite.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-white mb-4">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {gameCategories.map((category) => {
              const categoryGames = getGamesForCategory(category.slug);
              return (
                <Link
                  key={category.slug}
                  href={`/games/${category.slug}`}
                  className="group flex items-center justify-between p-4 bg-dark-800 rounded-xl border border-dark-600 hover:border-neon-pink/50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <div>
                      <span className="text-white font-medium group-hover:text-neon-pink transition-colors">
                        {category.name}
                      </span>
                      <p className="text-xs text-gray-500">
                        {categoryGames.length} games
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-neon-pink transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* All Games Grid */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">All Games A-Z</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {games
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((game) => (
                <GameCard key={game.id} game={game} size="medium" showSipFactor />
              ))}
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-12 prose prose-invert max-w-none">
          <h2 className="text-xl font-bold text-white mb-4">
            About Our Drinking Game Rules
          </h2>
          <p className="text-gray-400">
            SipWiki is the ultimate resource for drinking game rules. Whether you're
            looking for classic card games like King's Cup and Ride the Bus, competitive
            cup games like Beer Pong and Flip Cup, or easy no-prop games like Never Have
            I Ever, we've got you covered with complete rules and tips.
          </p>
          <p className="text-gray-400">
            Each game includes detailed setup instructions, gameplay rules, variations,
            and pro tips to make your party unforgettable. Use our filters to find games
            based on player count, required materials, or intensity level.
          </p>
        </div>
      </main>

      <MobileNav />
    </div>
  );
}
