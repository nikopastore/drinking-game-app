import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pregaming Drinking Games (2024) | Before Going Out Games",
  description: "Best drinking games for pregaming before going out! Fast games to get the party started before hitting the bars or clubs.",
  keywords: ["pregaming drinking games", "pregame games", "pre drinking games", "before going out games", "pre party drinking games"],
  openGraph: { title: "Pregaming Drinking Games", description: "Get the party started!", type: "article", url: "https://sipwiki.app/guides/pregaming-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/pregaming-drinking-games" },
};

export default function PregamingGamesPage() {
  return (
    <GuideLayout title="Pregaming Drinking Games" description="The party before the party! These fast-paced games get everyone hyped before heading to the bar, club, or main event." breadcrumb="Pregaming Games" relatedGames={[{ name: "Power Hour", slug: "power-hour", description: "Timed drinking" }, { name: "Flip Cup", slug: "flip-cup", description: "Quick rounds" }]}>
      <h2>Quick Pregame Games</h2>
      <ul><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> - Fast rounds</li><li><Link href="/game/rage-cage" className="text-neon-pink">Rage Cage</Link></li><li><Link href="/game/medusa" className="text-neon-pink">Medusa</Link></li><li><Link href="/game/thunderstruck" className="text-neon-pink">Thunderstruck</Link></li></ul>
      <h2>Pregame Tips</h2>
      <ul><li>Start 1-2 hours before leaving</li><li>Pace yourself - night is young</li><li>Eat before you play</li><li>Hydrate between games</li><li>Have your ride ready</li></ul>
    </GuideLayout>
  );
}
