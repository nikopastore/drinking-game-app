import { notFound } from "next/navigation";
import { getGameBySlug, games } from "@/config/gameData";
import { GameDetailClient } from "./GameDetailClient";
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

  return {
    title: `${game.name} - Drinking Game Rules | SipWiki`,
    description: game.description,
  };
}

export default async function GameDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  return <GameDetailClient game={game} />;
}
