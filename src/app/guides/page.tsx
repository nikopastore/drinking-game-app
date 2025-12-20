import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight, Crown, Target, Users, Hand, UsersRound } from "lucide-react";

export const metadata: Metadata = {
  title: "Drinking Game Guides & Rules | SipWiki",
  description: "Complete guides and official rules for all popular drinking games. Learn how to play Kings Cup, Beer Pong, and more with step-by-step instructions.",
  keywords: [
    "drinking game rules",
    "how to play drinking games",
    "drinking game guides",
    "party game rules",
    "kings cup rules",
    "beer pong rules",
  ],
  openGraph: {
    title: "Drinking Game Guides & Rules | SipWiki",
    description: "Complete guides and official rules for all popular drinking games.",
    type: "website",
    url: "https://sipwiki.app/guides",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides",
  },
};

const guides = [
  {
    slug: "kings-cup-rules",
    title: "Kings Cup Rules",
    description: "Complete guide to Kings Cup card meanings, rules, and variations. Learn what each card means and how to play.",
    icon: Crown,
    category: "Game Rules",
  },
  {
    slug: "beer-pong-rules",
    title: "Beer Pong Rules",
    description: "Official beer pong rules including re-racks, bouncing, and house rules. Everything you need to dominate the table.",
    icon: Target,
    category: "Game Rules",
  },
  {
    slug: "drinking-games-for-2",
    title: "Best Drinking Games for 2 People",
    description: "The ultimate list of fun drinking games perfect for couples or two friends. No large group needed!",
    icon: Users,
    category: "Game Lists",
  },
  {
    slug: "drinking-games-without-cards",
    title: "Drinking Games Without Cards",
    description: "No deck? No problem! These drinking games require no cards, no props - just drinks and friends.",
    icon: Hand,
    category: "Game Lists",
  },
  {
    slug: "drinking-games-for-large-groups",
    title: "Drinking Games for Large Groups",
    description: "The best drinking games for big parties of 10+ people. Keep everyone entertained and involved.",
    icon: UsersRound,
    category: "Game Lists",
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-dark-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-neon-pink mb-4">
            <BookOpen className="h-6 w-6" />
            <span className="font-semibold">Guides & Rules</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Drinking Game Guides
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Master every drinking game with our comprehensive guides. From official rules to pro tips,
            we&apos;ve got everything you need to be the life of the party.
          </p>
        </header>

        <div className="grid gap-6">
          {guides.map((guide) => {
            const Icon = guide.icon;
            return (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group p-6 bg-dark-800 rounded-2xl border border-dark-600 hover:border-neon-pink/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-dark-700 rounded-xl group-hover:bg-neon-pink/20 transition-colors">
                    <Icon className="h-6 w-6 text-neon-pink" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {guide.category}
                    </span>
                    <h2 className="text-xl font-bold text-white mt-1 group-hover:text-neon-pink transition-colors">
                      {guide.title}
                    </h2>
                    <p className="text-gray-400 mt-2">{guide.description}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-neon-pink group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Want to jump straight into playing?</p>
          <Link
            href="/games"
            className="inline-flex items-center gap-2 bg-neon-pink text-white px-6 py-3 rounded-full font-semibold hover:bg-neon-pink/80 transition-colors"
          >
            Browse All Games
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
