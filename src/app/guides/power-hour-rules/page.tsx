import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Power Hour Rules: 60 Shots in 60 Minutes Drinking Game (2024)",
  description: "Power Hour rules explained! Take a shot of beer every minute for an hour. Learn variations, playlists, and tips to survive this legendary endurance drinking game.",
  keywords: ["power hour rules", "power hour drinking game", "60 shots 60 minutes", "power hour playlist", "century club", "drinking game endurance"],
  openGraph: { title: "Power Hour Rules", description: "The legendary 60-minute drinking challenge.", type: "article", url: "https://sipwiki.app/guides/power-hour-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/power-hour-rules" },
};

export default function PowerHourRulesPage() {
  return (
    <GuideLayout
      title="Power Hour: 60 Shots of Beer in 60 Minutes"
      description="Power Hour is the ultimate drinking endurance test. Take a shot of beer every minute for a full hour. Simple concept, legendary results. Can you make it to 60?"
      breadcrumb="Power Hour Rules"
      primaryGame={{ name: "Power Hour", slug: "power-hour" }}
      relatedGames={[
        { name: "Thunderstruck", slug: "thunderstruck", description: "Music-based drinking" },
        { name: "Roxanne", slug: "roxanne", description: "Song drinking game" },
      ]}
    >
      <QuickAnswer
        question="What are the Power Hour rules?"
        answer="Power Hour rules: Take a shot of beer (1.5 oz) every minute for 60 minutes straight. Set a timer or use a playlist that changes songs every minute. That's 60 shots total, about 6-7 beers in an hour. Making it to 60 minutes = you win. Century Club is the extreme version: 100 shots in 100 minutes (about 10 beers). Use Power Hour playlists on YouTube/Spotify with automatic minute markers. Hydrate between rounds."
        tips={[
          "60 shots = about 6-7 beers total",
          "Use Power Hour playlists for automatic timing",
          "Start hydrated - this is endurance drinking",
          "Century Club (100 minutes) for the truly brave"
        ]}
        variant="primary"
      />

      <h2>What You Need</h2>
      <ul>
        <li><strong>Shot glasses</strong> (or a marked cup)</li>
        <li><strong>Plenty of beer</strong> - About 6-7 beers per person</li>
        <li><strong>Timer or playlist</strong> - To mark each minute</li>
        <li><strong>Strong will</strong></li>
      </ul>

      <h2>Basic Power Hour Rules</h2>
      <ol>
        <li>Set a timer for 60 minutes</li>
        <li>Every minute, take a shot of beer (1.5 oz)</li>
        <li>60 shots total = about 6-7 beers in an hour</li>
        <li>Make it through the full hour to win</li>
      </ol>

      <h2>Power Hour Playlists</h2>
      <p>The best way to play is with a playlist that changes songs every minute. Search &quot;Power Hour Mix&quot; on YouTube or Spotify - they exist!</p>

      <h2>Variations</h2>
      <h3>Century Club (100 minutes)</h3>
      <p>For the truly brave. 100 shots in 100 minutes. That&apos;s about 10 beers.</p>

      <h3>Themed Power Hour</h3>
      <p>Use a specific artist or decade. Drink when the song changes.</p>

      <h3>Team Power Hour</h3>
      <p>Teams compete. First team to have someone tap out loses.</p>

      <h2>Survival Tips</h2>
      <ul>
        <li>Eat a solid meal beforehand</li>
        <li>Use light beer (you&apos;ll thank us)</li>
        <li>Stay standing if possible</li>
        <li>Have water between shots</li>
        <li>Know your limits - it&apos;s okay to tap out</li>
      </ul>

      <p>Try our <Link href="/games/power-hour" className="text-neon-pink hover:underline">Power Hour timer</Link>!</p>
    </GuideLayout>
  );
}
