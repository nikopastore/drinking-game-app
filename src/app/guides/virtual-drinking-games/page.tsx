import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Virtual Drinking Games (2024) | Online & Zoom Party Games",
  description: "Best drinking games for video calls! Perfect for virtual happy hours, Zoom parties, and long-distance friend groups.",
  keywords: ["virtual drinking games", "zoom drinking games", "online drinking games", "video call drinking games", "remote drinking games"],
  openGraph: { title: "Virtual Drinking Games", description: "Cheers through the screen!", type: "article", url: "https://sipwiki.app/guides/virtual-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/virtual-drinking-games" },
};

export default function VirtualDrinkingGamesPage() {
  return (
    <GuideLayout title="Virtual Drinking Games" description="Can't be together in person? These games work perfectly over Zoom, FaceTime, Discord, or any video call platform." breadcrumb="Virtual Games" relatedGames={[{ name: "Never Have I Ever", slug: "never-have-i-ever", description: "Works perfectly online" }, { name: "Most Likely To", slug: "most-likely-to", description: "Point at camera" }]}>
      <h2>Best for Video Calls</h2>
      <ul><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Hold up fingers</li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Point at screens</li><li><Link href="/game/truth-or-drink" className="text-neon-pink">Truth or Drink</Link> - Q&A format works</li><li><strong>Trivia</strong> - Screen share questions</li></ul>
      <h2>Online Tools</h2>
      <ul><li>Jackbox Party Packs</li><li>Online card simulators</li><li>Random wheel spinners</li><li>Shared music playlists</li></ul>
      <h2>Virtual Party Tips</h2>
      <ul><li>Good internet is essential</li><li>One person talks at a time</li><li>Mute when drinking (no slurp sounds)</li><li>Virtual backgrounds for fun</li><li>Everyone needs their own drinks</li></ul>
    </GuideLayout>
  );
}
