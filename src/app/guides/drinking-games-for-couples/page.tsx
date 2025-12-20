import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Best Drinking Games for Couples (2024) | Date Night Games",
  description: "Fun drinking games for couples! Perfect for date nights, anniversaries, or staying in. Romantic games, competitive games, and getting-to-know-you games.",
  keywords: ["drinking games for couples", "couple drinking games", "date night drinking games", "romantic drinking games", "2 player drinking games", "couples game night"],
  openGraph: { title: "15 Best Drinking Games for Couples", description: "Make date night unforgettable with these couple games.", type: "article", url: "https://sipwiki.app/guides/drinking-games-for-couples" },
  alternates: { canonical: "https://sipwiki.app/guides/drinking-games-for-couples" },
};

export default function DrinkingGamesForCouplesPage() {
  const games = [
    { name: "Truth or Drink", desc: "Ask personal questions - answer or drink. Gets conversations going!", link: "/game/truth-or-drink" },
    { name: "Never Have I Ever", desc: "Learn surprising things about each other's past.", link: "/game/never-have-i-ever" },
    { name: "Two Truths and a Lie", desc: "Test how well you really know your partner." },
    { name: "Higher or Lower", desc: "Simple card game with drinking stakes." },
    { name: "Movie Drinking Game", desc: "Pick a rom-com and drink when tropes happen.", link: "/game/movie-drinking-game" },
    { name: "Drink If...", desc: "Take turns saying 'Drink if you've ever...' statements." },
    { name: "Would You Rather", desc: "Hypotheticals get wild when drinks are involved." },
    { name: "Strip Poker (21+)", desc: "Classic for a reason. Add drinking for extra fun." },
    { name: "Jenga for Couples", desc: "Write romantic/spicy dares on blocks." },
    { name: "The Question Game", desc: "Ask questions back and forth. First to hesitate drinks." },
  ];

  return (
    <GuideLayout title="15 Best Drinking Games for Couples" description="Date night doesn't need a crowded bar or expensive restaurant. These drinking games are perfect for couples who want to have fun, connect, and maybe get a little tipsy together." breadcrumb="Couples Drinking Games" relatedGames={[{ name: "Truth or Drink", slug: "truth-or-drink", description: "Deep questions" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Learn about each other" }]}>
      <h2>Why Drinking Games Work for Couples</h2>
      <ul><li>Break out of routine conversations</li><li>Add playful competition</li><li>Create memorable moments</li><li>Low-key date night at home</li></ul>
      <h2>Best Games for Couples</h2>
      <div className="not-prose my-6 space-y-3">
        {games.map((g, i) => (
          <div key={i} className="p-4 bg-dark-800 rounded-lg flex justify-between items-center">
            <div><span className="font-bold text-white">{g.name}</span><p className="text-sm text-gray-400">{g.desc}</p></div>
            {g.link && <Link href={g.link} className="text-neon-pink text-sm">Play →</Link>}
          </div>
        ))}
      </div>
      <h2>Tips for Couples</h2>
      <ul><li>Set boundaries before playing spicy games</li><li>Keep it light - winning isn&apos;t everything</li><li>Have snacks ready</li><li>It&apos;s okay to skip questions</li></ul>
      <p>Browse our <Link href="/games/two-player" className="text-neon-pink hover:underline">two-player games</Link>!</p>
    </GuideLayout>
  );
}
