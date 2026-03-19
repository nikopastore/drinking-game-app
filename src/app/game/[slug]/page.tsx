import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function GameRedirectPage({ params }: PageProps) {
  const { slug } = await params;
  redirect(`/games/${slug}`);
}
