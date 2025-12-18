"use client";

import { Game } from "@/types";
import { Header } from "@/components/Header";
import { Button, Badge, Card, CardContent } from "@/components/ui";
import {
  Users,
  Wine,
  Flame,
  Play,
  ExternalLink,
  ShoppingCart,
  Package,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { formatPlayerCount, getDrunkennessLabel } from "@/lib/utils";
import { getAffiliateLink, nonAffiliateItems } from "@/config/monetizationConfig";
import { CommentSection } from "@/components/CommentSection";
import { getCategoriesForGame } from "@/config/categoryData";

interface GameDetailClientProps {
  game: Game;
}

export function GameDetailClient({ game }: GameDetailClientProps) {
  const drunkennessColors: Record<number, "green" | "yellow" | "pink" | "purple"> = {
    1: "green",
    2: "green",
    3: "yellow",
    4: "pink",
    5: "purple",
  };

  const alcoholTypeLabel: Record<string, string> = {
    beer: "Beer/Seltzer",
    liquor: "Hard Liquor",
    any: "Any Drink",
  };

  const gameCategories = getCategoriesForGame(game);
  const primaryCategory = gameCategories[0];

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb Navigation for SEO */}
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm flex-wrap">
            <li>
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-600 flex-shrink-0" />
            <li>
              <Link href="/games" className="text-gray-400 hover:text-white transition-colors">
                Games
              </Link>
            </li>
            {primaryCategory && (
              <>
                <ChevronRight className="h-4 w-4 text-gray-600 flex-shrink-0" />
                <li>
                  <Link
                    href={`/games/${primaryCategory.slug}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {primaryCategory.name}
                  </Link>
                </li>
              </>
            )}
            <ChevronRight className="h-4 w-4 text-gray-600 flex-shrink-0" />
            <li className="text-neon-pink font-medium">{game.name}</li>
          </ol>
        </nav>

        {/* Header Section */}
        <div className="mb-8">
          {/* Video placeholder */}
          <div className="aspect-video bg-dark-800 rounded-xl border border-dark-600 mb-6 flex items-center justify-center">
            <div className="text-center">
              <Play className="h-16 w-16 text-dark-600 mx-auto mb-2" />
              <p className="text-gray-500">Demo video coming soon</p>
            </div>
          </div>

          {/* Title and metadata */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {game.name} Rules
          </h1>
          <p className="text-lg text-neon-pink mb-4">How to Play {game.name}</p>

          <p className="text-xl text-gray-400 mb-6">{game.description}</p>

          {/* Category Tags */}
          {gameCategories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {gameCategories.map((cat) => (
                <Link key={cat.slug} href={`/games/${cat.slug}`}>
                  <Badge
                    variant="muted"
                    className="hover:bg-dark-600 transition-colors cursor-pointer"
                  >
                    {cat.icon} {cat.name}
                  </Badge>
                </Link>
              ))}
            </div>
          )}

          {/* Metadata badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge variant="blue" className="flex items-center gap-1 text-sm py-1">
              <Users className="h-4 w-4" />
              {formatPlayerCount(game.min_players, game.max_players)}
            </Badge>

            <Badge variant="purple" className="flex items-center gap-1 text-sm py-1">
              <Wine className="h-4 w-4" />
              {alcoholTypeLabel[game.alcohol_type]}
            </Badge>

            <Badge
              variant={drunkennessColors[game.drunkenness_level]}
              className="flex items-center gap-1 text-sm py-1"
            >
              <Flame className="h-4 w-4" />
              {getDrunkennessLabel(game.drunkenness_level)}
            </Badge>

            <Badge variant="pink" className="flex items-center gap-1 text-sm py-1">
              <Package className="h-4 w-4" />
              {game.materials[0] === "no prop"
                ? "No Props"
                : game.materials.length === 1
                ? game.materials[0]
                : `${game.materials.length} items needed`}
            </Badge>
          </div>
        </div>

        {/* Materials Section with Affiliate Links */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-neon-pink" />
              Materials Needed
            </h2>

            {game.materials[0] === "no prop" ? (
              <div className="flex items-center gap-2">
                <Badge variant="green" className="text-base py-1.5 px-3">
                  No props needed - just bring drinks!
                </Badge>
              </div>
            ) : (
              <div className="flex flex-wrap gap-3">
                {game.materials.map((material) => {
                  const affiliate = getAffiliateLink(material);
                  const isNonAffiliate = nonAffiliateItems.includes(
                    material.toLowerCase()
                  );

                  if (affiliate && !isNonAffiliate) {
                    return (
                      <a
                        key={material}
                        href={affiliate.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-lg hover:opacity-90 transition-all hover:scale-105"
                      >
                        <span>{affiliate.label}</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    );
                  }

                  return (
                    <Badge
                      key={material}
                      variant="muted"
                      className="text-base py-1.5 px-3 capitalize"
                    >
                      {material}
                    </Badge>
                  );
                })}
              </div>
            )}

            <p className="text-xs text-gray-500 mt-4">
              * Amazon affiliate links help support SipWiki
            </p>
          </CardContent>
        </Card>

        {/* Rules Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-white mb-4">How to Play</h2>
            <div className="prose prose-invert max-w-none">
              {game.rules_text.split("\n").map((line, index) => {
                // Handle bold markdown
                const formattedLine = line.replace(
                  /\*\*(.*?)\*\*/g,
                  '<strong class="text-neon-pink">$1</strong>'
                );

                return (
                  <p
                    key={index}
                    className="text-gray-300 mb-3 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formattedLine }}
                  />
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Comments Section */}
        <div className="mb-24">
          <CommentSection gameSlug={game.slug} />
        </div>

        {/* Sticky Play Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-900 via-dark-900 to-transparent">
          <div className="max-w-4xl mx-auto">
            <Link href={`/play/${game.slug}`}>
              <Button size="lg" className="w-full text-lg py-4">
                <Play className="h-5 w-5 mr-2" />
                Start Playing {game.name}
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
