import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "20 Best College Drinking Games (2024) | Dorm & Frat Party Games",
  description: "The ultimate college drinking games list! Beer Pong, Flip Cup, and more classics. Perfect for dorm parties, frat houses, and tailgates.",
  keywords: ["college drinking games", "frat party games", "dorm drinking games", "college party games", "university drinking games", "best college games"],
  openGraph: { title: "20 Best College Drinking Games", description: "Games that defined the college experience.", type: "article", url: "https://sipwiki.app/guides/college-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/college-drinking-games" },
};

export default function CollegeDrinkingGamesPage() {
  return (
    <GuideLayout title="20 Best College Drinking Games" description="College is where drinking game legends are made. From basement beer pong tournaments to dorm room Kings Cup, these are the games that define the university experience." breadcrumb="College Drinking Games" relatedGames={[{ name: "Beer Pong", slug: "beer-pong", description: "The undisputed king" }, { name: "Flip Cup", slug: "flip-cup", description: "Team relay classic" }, { name: "Rage Cage", slug: "rage-cage", description: "Intense elimination" }]}>
      <h2>Essential College Games</h2>
      <ul><li><Link href="/game/beer-pong" className="text-neon-pink">Beer Pong</Link> - No explanation needed</li><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> - Perfect for team rivalries</li><li><Link href="/game/rage-cage" className="text-neon-pink">Rage Cage</Link> - Gets intense fast</li><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> - Works in any dorm room</li></ul>
      <h2>Low-Key Dorm Games</h2>
      <ul><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - No props needed</li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Great icebreaker</li><li><Link href="/game/ride-the-bus" className="text-neon-pink">Ride the Bus</Link> - Just needs cards</li></ul>
      <h2>Tailgate Essentials</h2>
      <ul><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link></li><li>Cornhole (with drinking rules)</li><li><Link href="/game/beer-pong" className="text-neon-pink">Beer Pong</Link></li></ul>
      <h2>Tips for Dorm Parties</h2>
      <ul><li>Keep noise down - RA&apos;s exist</li><li>Use plastic cups (no glass)</li><li>Have a designated driver plan</li><li>Know your limits</li></ul>
      <p>Browse all <Link href="/games" className="text-neon-pink hover:underline">drinking games</Link>!</p>
    </GuideLayout>
  );
}
