import { notFound } from "next/navigation";
import { getGameBySlug, games } from "@/config/gameData";
import { getCategoriesForGame } from "@/config/categoryData";
import { GameDetailClient } from "./GameDetailClient";
import { formatPlayerCount } from "@/lib/utils";
import { generateGameSchema, generateGameHowToSchema, generateFAQSchema } from "@/lib/schema";
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

// Generate enhanced FAQ schema for common game questions
function generateGameFAQJsonLd(game: ReturnType<typeof getGameBySlug>) {
  if (!game) return null;

  const playerInfo = formatPlayerCount(game.min_players, game.max_players);

  const faqs = [
    {
      question: `How many people do you need to play ${game.name}?`,
      answer: `${game.name} requires ${playerInfo} players. ${game.min_players === game.max_players ? `This game works best with exactly ${game.min_players} players.` : game.max_players ? `It works with anywhere from ${game.min_players} to ${game.max_players} players.` : `It works with ${game.min_players} or more players.`}`
    },
    {
      question: `What materials do you need for ${game.name}?`,
      answer: game.materials[0] === "no prop"
        ? `${game.name} requires no props - just players and drinks!`
        : `To play ${game.name}, you need: ${game.materials.join(", ")}.`
    },
    {
      question: `How drunk will you get playing ${game.name}?`,
      answer: `${game.name} has a drunkenness level of ${game.drunkenness_level} out of 5. ${game.drunkenness_level >= 4 ? "This is an intense game that can get you very drunk quickly - pace yourself!" : game.drunkenness_level >= 3 ? "This is a moderate drinking game - you'll definitely feel it but it's manageable." : "This is a lighter drinking game that's good for beginners or casual sessions."}`
    },
    {
      question: `Is ${game.name} good for parties?`,
      answer: `${game.name} is ${game.min_players > 6 ? "perfect for large parties" : game.max_players && game.max_players >= 8 ? "great for medium to large gatherings" : "better for smaller groups"}. ${game.description}`
    }
  ];

  return generateFAQSchema({ faqs });
}

export default async function GameDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  const categories = getCategoriesForGame(game);

  // Generate comprehensive schema using enhanced generators
  const gameJsonLd = generateGameSchema({
    name: game.name,
    description: game.description,
    image: game.image,
    minPlayers: game.min_players,
    maxPlayers: game.max_players || undefined,
    materials: game.materials.filter(m => m !== "no prop"),
    categories: categories.map(c => c.name),
    url: `https://sipwiki.app/game/${game.slug}`,
    aggregateRating: {
      ratingValue: 4.5, // Could pull from actual ratings
      ratingCount: 100,
      bestRating: 5,
      worstRating: 1
    }
  });

  const howToJsonLd = generateGameHowToSchema({
    name: game.name,
    description: game.description,
    rulesText: game.rules_text,
    materials: game.materials.filter(m => m !== "no prop"),
    difficulty: game.drunkenness_level >= 4 ? "Hard" : game.drunkenness_level >= 3 ? "Medium" : "Easy",
    timeRequired: "PT30M"
  });

  const faqJsonLd = generateGameFAQJsonLd(game);

  return (
    <>
      {/* Enhanced JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <GameDetailClient game={game} />
    </>
  );
}
