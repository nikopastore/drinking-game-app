import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Century Club Rules (2024) | 100 Shots of Beer Challenge",
  description: "Century Club drinking game rules - take a shot of beer every minute for 100 minutes. The ultimate endurance drinking challenge!",
  keywords: ["century club", "century club rules", "100 shots of beer", "power hour 100", "century drinking game", "100 minute drinking game"],
  openGraph: { title: "Century Club Rules", description: "100 shots, 100 minutes!", type: "article", url: "https://sipwiki.app/guides/century-club-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/century-club-rules" },
};

export default function CenturyClubRulesPage() {
  return (
    <GuideLayout title="Century Club Rules" description="The ultimate drinking endurance test: 100 shots of beer in 100 minutes. That's about 8-9 beers total. Do you have what it takes?" breadcrumb="Century Club" relatedGames={[{ name: "Power Hour", slug: "power-hour", description: "60-minute version" }]}>
      <h2>The Challenge</h2>
      <ul><li>Take 1 shot of beer (1.5 oz) every minute</li><li>Continue for 100 minutes</li><li>That&apos;s ~8.5 beers total</li><li>Complete it = join the Century Club</li></ul>
      <h2>What You Need</h2>
      <ul><li>Timer or Century Club playlist</li><li>Shot glasses</li><li>Lots of beer (plan for 9+ per person)</li><li>Strong determination</li></ul>
      <h2>Why It&apos;s Hard</h2>
      <ul><li>Seems easy at first</li><li>Minutes 60-80 are brutal</li><li>Bloating becomes real</li><li>Mental endurance required</li></ul>
      <h2>Survival Tips</h2>
      <ul><li>Use light beer</li><li>Stay standing or walking</li><li>Bathroom breaks are allowed</li><li>Eat beforehand</li><li>Know your limits</li></ul>
      <h2>Milestones</h2>
      <ul><li>30 min = &quot;Warm Up Club&quot;</li><li>60 min = &quot;Power Hour&quot;</li><li>100 min = &quot;Century Club&quot;</li></ul>
    </GuideLayout>
  );
}
