import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drinking Games for Coworkers (2024) | Work Party Games",
  description: "Appropriate drinking games for work events! Fun games for office parties, happy hours, and team building that won't get you fired.",
  keywords: ["drinking games for coworkers", "work drinking games", "office party drinking games", "team building drinking games", "happy hour games"],
  openGraph: { title: "Drinking Games for Coworkers", description: "Work appropriate fun!", type: "article", url: "https://sipwiki.app/guides/drinking-games-for-coworkers" },
  alternates: { canonical: "https://sipwiki.app/guides/drinking-games-for-coworkers" },
};

export default function DrinkingGamesForCoworkersPage() {
  return (
    <GuideLayout title="Drinking Games for Coworkers" description="Work party? Happy hour? These games are fun enough to be worth playing but appropriate enough that you'll still have a job Monday." breadcrumb="Coworker Games" relatedGames={[{ name: "Most Likely To", slug: "most-likely-to", description: "Keep it work-safe" }, { name: "Kings Cup", slug: "kings-cup", description: "Classic fun" }]}>
      <h2>Work-Appropriate Games</h2>
      <ul><li><Link href="/games/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Work edition (keep it PG)</li><li><strong>Office Trivia</strong> - Who knows the company?</li><li><strong>Two Truths One Lie</strong> - Professional version</li><li><Link href="/games/kings-cup" className="text-neon-pink">Kings Cup</Link> - With tame rules</li></ul>
      <h2>Avoid With Coworkers</h2>
      <ul><li>Anything sexual</li><li>Games targeting individuals</li><li>Truth or Dare (too risky)</li><li>Anything too competitive</li></ul>
      <h2>Work Party Tips</h2>
      <ul><li>Remember HR exists</li><li>Pace yourself (you&apos;ll see these people Monday)</li><li>Keep stories work-appropriate</li><li>Don&apos;t be the drunkest person</li><li>No drunk emailing!</li></ul>
    </GuideLayout>
  );
}
