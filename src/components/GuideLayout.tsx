"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Play, Home, BookOpen } from "lucide-react";
import { ShareButton } from "@/components/ShareButton";
import { EmailCapture } from "@/components/EmailCapture";

interface RelatedGame {
  name: string;
  slug: string;
  description: string;
}

interface GuideLayoutProps {
  title: string;
  description: string;
  breadcrumb: string;
  children: React.ReactNode;
  primaryGame?: {
    name: string;
    slug: string;
  };
  relatedGames?: RelatedGame[];
}

export function GuideLayout({
  title,
  description,
  breadcrumb,
  children,
  primaryGame,
  relatedGames = [],
}: GuideLayoutProps) {
  const pathname = usePathname();

  // Generate BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sipwiki.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Guides",
        "item": "https://sipwiki.app/guides"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": breadcrumb,
        "item": `https://sipwiki.app${pathname}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Sticky CTA Banner - Only shows when there's a primary game */}
      {primaryGame && (
        <div className="sticky top-14 z-20 bg-gradient-to-r from-neon-pink/90 to-neon-purple/90 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="text-white font-medium text-sm md:text-base">
              Ready to play {primaryGame.name}?
            </span>
            <Link
              href={`/games/${primaryGame.slug}`}
              className="flex items-center gap-2 bg-white text-dark-900 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors"
            >
              <Play className="h-4 w-4" />
              Play Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-white flex items-center gap-1">
            <Home className="h-4 w-4" />
            Home
          </Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-white flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            Guides
          </Link>
          <span>/</span>
          <span className="text-gray-300">{breadcrumb}</span>
        </nav>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            <ShareButton
              title={`${title} - SipWiki`}
              text={description.slice(0, 100)}
              url={`https://sipwiki.app${pathname}`}
              variant="compact"
            />
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            {description}
          </p>
        </header>

        {/* AdSense In-Content Ad Placeholder */}
        <div className="my-8 rounded-xl border border-dashed border-dark-600 bg-dark-800/40 px-6 py-10 text-center text-sm text-gray-500">
          {/* AdSense: Guide In-Content Ad */}
          Ad Placeholder - Guide In-Content
        </div>

        <div className="prose prose-invert prose-lg max-w-none
          prose-headings:text-white prose-headings:font-bold
          prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-dark-600 prose-h2:pb-2
          prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
          prose-p:text-gray-300 prose-p:leading-relaxed
          prose-li:text-gray-300
          prose-strong:text-white
          prose-a:text-neon-pink prose-a:no-underline hover:prose-a:underline
        ">
          {children}
        </div>

        <EmailCapture source="guide" />

        {/* Inline CTA */}
        {primaryGame && (
          <div className="my-12 p-6 bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 rounded-2xl border border-neon-pink/30">
            <h3 className="text-xl font-bold text-white mb-2">
              Ready to play {primaryGame.name}?
            </h3>
            <p className="text-gray-300 mb-4">
              Now that you know the rules, jump into a game on SipWiki!
            </p>
            <Link
              href={`/games/${primaryGame.slug}`}
              className="inline-flex items-center gap-2 bg-neon-pink text-white px-6 py-3 rounded-full font-semibold hover:bg-neon-pink/80 transition-colors"
            >
              <Play className="h-5 w-5" />
              Play {primaryGame.name} Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        )}

        {/* Related Games */}
        {relatedGames.length > 0 && (
          <section className="mt-12 pt-8 border-t border-dark-600">
            <h2 className="text-2xl font-bold text-white mb-6">Related Games You Might Like</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedGames.map((game) => (
                <Link
                  key={game.slug}
                  href={`/games/${game.slug}`}
                  className="p-4 bg-dark-800 rounded-xl border border-dark-600 hover:border-neon-pink/50 transition-colors group"
                >
                  <h3 className="font-semibold text-white group-hover:text-neon-pink transition-colors">
                    {game.name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{game.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Browse All Games CTA */}
        <section className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Looking for more games?</p>
          <Link
            href="/games"
            className="inline-flex items-center gap-2 text-neon-pink hover:text-neon-pink/80 font-semibold"
          >
            Browse All Drinking Games
            <ArrowRight className="h-5 w-5" />
          </Link>
        </section>
      </article>

      {/* Footer Navigation for SEO visitors */}
      <footer className="max-w-4xl mx-auto px-4 py-12 border-t border-dark-600">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-white mb-3">Popular Games</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/games/kings-cup" className="text-gray-400 hover:text-neon-pink">Kings Cup</Link></li>
              <li><Link href="/games/beer-pong" className="text-gray-400 hover:text-neon-pink">Beer Pong</Link></li>
              <li><Link href="/games/flip-cup" className="text-gray-400 hover:text-neon-pink">Flip Cup</Link></li>
              <li><Link href="/games/never-have-i-ever" className="text-gray-400 hover:text-neon-pink">Never Have I Ever</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Game Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/games/card-games" className="text-gray-400 hover:text-neon-pink">Card Games</Link></li>
              <li><Link href="/games/cup-games" className="text-gray-400 hover:text-neon-pink">Cup Games</Link></li>
              <li><Link href="/games/no-props" className="text-gray-400 hover:text-neon-pink">No Props Needed</Link></li>
              <li><Link href="/games/two-player" className="text-gray-400 hover:text-neon-pink">Two Player</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/party-planner" className="text-gray-400 hover:text-neon-pink">Party Planner Calculator</Link></li>
              <li><Link href="/quiz/what-drinking-game-are-you" className="text-gray-400 hover:text-neon-pink">Personality Quiz</Link></li>
              <li><Link href="/spin" className="text-gray-400 hover:text-neon-pink">Random Game Picker</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-dark-700 text-center">
          <Link href="/" className="text-neon-pink font-bold text-lg hover:text-neon-pink/80">
            SipWiki
          </Link>
          <p className="text-gray-500 text-sm mt-2">Your ultimate guide to drinking games</p>
        </div>
      </footer>
    </div>
  );
}
