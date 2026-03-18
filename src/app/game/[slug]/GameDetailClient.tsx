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
import { formatMarkdownBold } from "@/lib/sanitize";
import { getAffiliateLink, nonAffiliateItems } from "@/config/monetizationConfig";
import { CommentSection } from "@/components/CommentSection";
import { getCategoriesForGame } from "@/config/categoryData";
import { useAuthContext, UnlockRulesCard } from "@/components/auth";
import { FavoriteButton } from "@/components/favorites";
import { ShareButton } from "@/components/ShareButton";

/**
 * Extracts YouTube video ID and returns embed URL
 * Supports: youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID
 */
function getYouTubeEmbedUrl(url: string): string {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) {
      return `https://www.youtube.com/embed/${match[1]}?rel=0&modestbranding=1`;
    }
  }

  // If already an embed URL or fallback
  if (url.includes("youtube.com/embed/")) {
    return url;
  }

  return url;
}

interface GameDetailClientProps {
  game: Game;
}

export function GameDetailClient({ game }: GameDetailClientProps) {
  const { isAuthenticated } = useAuthContext();

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

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-8">
          <div>
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
          {/* Video Section */}
          {game.video_url ? (
            <div className="aspect-video bg-dark-800 rounded-xl border border-dark-600 mb-6 overflow-hidden">
              <iframe
                src={getYouTubeEmbedUrl(game.video_url)}
                title={`How to play ${game.name} - Video tutorial`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ) : (
            <div className="aspect-video bg-dark-800 rounded-xl border border-dark-600 mb-6 flex items-center justify-center">
              <div className="text-center">
                <Play className="h-16 w-16 text-dark-600 mx-auto mb-2" />
                <p className="text-gray-500">Demo video coming soon</p>
              </div>
            </div>
          )}

          {/* Title and metadata */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {game.name} Rules
              </h1>
              <p className="text-lg text-neon-pink mb-4">How to Play {game.name}</p>
            </div>
            <div className="flex items-center gap-2">
              <ShareButton
                title={`${game.name} Rules - SipWiki`}
                text={`Learn how to play ${game.name}! Complete rules and instructions.`}
                url={`https://sipwiki.app/game/${game.slug}`}
                variant="compact"
                gameName={game.name}
              />
              <FavoriteButton
                type="game"
                slug={game.slug}
                name={game.name}
                size="lg"
              />
            </div>
          </div>

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

        <Card className="mb-8 border-dark-600">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-white mb-4">Hosting Tips & Supplies</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/blog/buying-guides/party-supplies-checklist"
                className="p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors"
              >
                <h3 className="font-semibold text-white">Party Supplies Checklist</h3>
                <p className="text-sm text-gray-400 mt-1">Everything you need before guests arrive.</p>
              </Link>
              <Link
                href="/blog/buying-guides/best-party-cups"
                className="p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors"
              >
                <h3 className="font-semibold text-white">Best Party Cups</h3>
                <p className="text-sm text-gray-400 mt-1">Durable cups that survive game night.</p>
              </Link>
              <Link
                href="/blog/safety/how-to-host-safe-drinking-party"
                className="p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors"
              >
                <h3 className="font-semibold text-white">Host a Safe Party</h3>
                <p className="text-sm text-gray-400 mt-1">Responsible hosting tips for any group.</p>
              </Link>
              <Link
                href="/party-planner"
                className="p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors"
              >
                <h3 className="font-semibold text-white">Party Planner Calculator</h3>
                <p className="text-sm text-gray-400 mt-1">Estimate drinks, ice, and supplies.</p>
              </Link>
            </div>
          </CardContent>
        </Card>

        {game.slug === "roxanne" && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Roxanne Drinking Game Overview
              </h2>
              <p className="text-gray-300 mb-4">
                Roxanne is a fast, song-based drinking game that lasts about three minutes.
                One team drinks on &quot;Roxanne&quot; and the other drinks on &quot;red light.&quot;
                It is quick, chaotic, and a great way to kick off a guys night or reset the room
                between longer games.
              </p>
              <p className="text-gray-300 mb-4">
                For a smoother experience, use small sips and keep a water break nearby. The
                chorus ramps up quickly, so tell first-time players to pace early. If you want
                a full breakdown with variations, read the complete Roxanne rules guide.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <Link
                  href="/guides/roxanne-drinking-game-rules"
                  className="text-neon-pink hover:underline"
                >
                  Roxanne rules guide
                </Link>
                <Link
                  href="/guides/guys-night-drinking-games"
                  className="text-neon-pink hover:underline"
                >
                  Guys night drinking games
                </Link>
                <Link
                  href="/blog/safety/how-to-host-safe-drinking-party"
                  className="text-neon-pink hover:underline"
                >
                  Safe hosting tips
                </Link>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Rules Section */}
        {isAuthenticated ? (
          <>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-white mb-4">How to Play</h2>
                <div className="prose prose-invert max-w-none">
                  {game.rules_text.split("\n").map((line, index) => {
                    // Handle bold markdown with XSS sanitization
                    const sanitizedLine = formatMarkdownBold(line);

                    return (
                      <p
                        key={index}
                        className="text-gray-300 mb-3 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: sanitizedLine }}
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
          </>
        ) : (
          <>
            {/* Rules Preview for guests */}
            <Card className="mb-4">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-white mb-4">How to Play</h2>
                <div className="prose prose-invert max-w-none relative">
                  {/* Show first 3 paragraphs as preview */}
                  {game.rules_text
                    .split(/\n\n+/)
                    .slice(0, 3)
                    .map((paragraph, index) => {
                      const sanitizedLine = formatMarkdownBold(paragraph);
                      return (
                        <p
                          key={index}
                          className="text-gray-300 mb-3 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: sanitizedLine }}
                        />
                      );
                    })}
                  {/* Fade-out gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-800 to-transparent pointer-events-none" />
                </div>
              </CardContent>
            </Card>

            {/* Unlock prompt below preview */}
            <div className="mb-24">
              <UnlockRulesCard gameName={game.name} showPreviewContext />
            </div>
          </>
        )}

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
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              {/* AdSense Sidebar Ad Placeholder */}
              <div className="flex h-[600px] items-center justify-center rounded-xl border border-dashed border-dark-600 bg-dark-800/40 px-4 text-center text-sm text-gray-500">
                Ad Placeholder - Game Sidebar
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
