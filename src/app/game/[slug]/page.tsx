import { notFound } from "next/navigation";
import { getGameBySlug, games } from "@/config/gameData";
import { getCategoriesForGame } from "@/config/categoryData";
import { GameDetailClient } from "./GameDetailClient";
import { formatPlayerCount } from "@/lib/utils";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return {
      title: "Game Not Found - SipWiki",
    };
  }

  // Optimized SEO title format: "[Game Name] Rules - How to Play [Game Name] | SipWiki"
  const seoTitle = `${game.name} Rules - How to Play ${game.name} | SipWiki`;

  // Optimized meta description with key info
  const playerInfo = formatPlayerCount(game.min_players, game.max_players);
  const materialsInfo = game.materials[0] === "no prop"
    ? "No props needed"
    : `Materials: ${game.materials.slice(0, 3).join(", ")}`;
  const seoDescription = `Learn how to play ${game.name} with complete rules and instructions. Perfect for ${playerInfo} players. ${materialsInfo}. Get the official drinking game rules now!`;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: [
      `${game.name.toLowerCase()} rules`,
      `how to play ${game.name.toLowerCase()}`,
      `${game.name.toLowerCase()} drinking game`,
      `${game.name.toLowerCase()} game rules`,
      "drinking game rules",
      "party games",
    ],
    openGraph: {
      title: `${game.name} Rules - Complete Drinking Game Guide`,
      description: seoDescription,
      type: "article",
      images: game.image ? [{ url: game.image, alt: `${game.name} drinking game` }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${game.name} Rules`,
      description: `Learn how to play ${game.name}. Complete rules for ${playerInfo} players.`,
    },
  };
}

// Generate JSON-LD structured data for the game
function generateGameJsonLd(game: ReturnType<typeof getGameBySlug>) {
  if (!game) return null;

  const categories = getCategoriesForGame(game);

  return {
    "@context": "https://schema.org",
    "@type": "Game",
    name: game.name,
    description: game.description,
    numberOfPlayers: {
      "@type": "QuantitativeValue",
      minValue: game.min_players,
      ...(game.max_players && { maxValue: game.max_players }),
    },
    gameItem: game.materials.filter(m => m !== "no prop"),
    genre: categories.map(c => c.name),
    gamePlatform: "Tabletop",
    url: `https://sipwiki.com/game/${game.slug}`,
    ...(game.image && { image: `https://sipwiki.com${game.image}` }),
  };
}

// Generate HowTo structured data for game instructions
function generateHowToJsonLd(game: ReturnType<typeof getGameBySlug>) {
  if (!game) return null;

  // Extract steps from rules_text (split by double newlines and filter setup/gameplay sections)
  const sections = game.rules_text.split("\n\n").filter(s => s.trim());
  const steps = sections.map((section, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    text: section.replace(/\*\*/g, "").trim(),
  }));

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Play ${game.name}`,
    description: game.description,
    step: steps,
    tool: game.materials.filter(m => m !== "no prop").map(material => ({
      "@type": "HowToTool",
      name: material,
    })),
    totalTime: "PT30M", // Estimated play time
  };
}

export default async function GameDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  const gameJsonLd = generateGameJsonLd(game);
  const howToJsonLd = generateHowToJsonLd(game);

  return (
    <>
      {/* JSON-LD Structured Data */}
      {gameJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(gameJsonLd) }}
        />
      )}
      {howToJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      )}
      <GameDetailClient game={game} />
    </>
  );
}
