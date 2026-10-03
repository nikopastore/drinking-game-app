import { redirect } from "next/navigation";
import { games } from "@/config/gameData";
import { LegacyGameRedirect } from "./LegacyGameRedirect";

const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function GameRedirectPage({ params }: PageProps) {
  const { slug } = await params;

  if (isStaticExport) {
    return <LegacyGameRedirect slug={slug} />;
  }

  redirect(`/games/${slug}`);
}

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}
