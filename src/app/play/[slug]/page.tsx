import { notFound } from "next/navigation";
import { getGameBySlug, games } from "@/config/gameData";
import { LiveModeClient } from "./LiveModeClient";
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
    title: `Playing ${game.name} | SipWiki`,
    description: `Live game session for ${game.name}. Get AI referee help and track your game time.`,
  };
}

export default async function PlayPage({ params }: PageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  return <LiveModeClient game={game} />;
}
