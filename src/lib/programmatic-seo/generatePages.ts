/**
 * Script to generate programmatic SEO pages
 * Run this to create city-specific game pages
 */

import { cities, City } from "@/data/cities";
import { games } from "@/config/gameData";
import { generateCityPageContent, generateCityPageMetadata } from "./cityPageGenerator";
import { Game } from "@/types";

/**
 * Generate page template code for a city-specific game page
 */
export function generatePageCode(game: Game, city: City): string {
  const data = generateCityPageContent(game, city);
  const metadata = generateCityPageMetadata(game, city);

  return `import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = ${JSON.stringify(metadata, null, 2)};

export default function ${toPascalCase(game.slug)}In${toPascalCase(city.slug)}Page() {
  return (
    <GuideLayout
      title="${data.h1}"
      description="${data.intro}"
      breadcrumb="${game.name} in ${city.name}"
      primaryGame={{ name: "${game.name}", slug: "${game.slug}" }}
    >
      <QuickAnswer
        question="Where can I play ${game.name} in ${city.name}?"
        answer="${getQuickAnswer(game, city)}"
        tips={${JSON.stringify(getQuickAnswerTips(game, city))}}
        variant="primary"
      />

      <h2>Where to Play ${game.name} in ${city.name}</h2>
      ${formatMarkdown(data.whereToPlay)}

      <h2>Local Tips for Playing ${game.name} in ${city.name}</h2>
      ${formatMarkdown(data.localTips)}

      <h2>Why ${city.name} is Great for ${game.name}</h2>
      <p>${data.conclusion}</p>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">New to ${game.name}?</h3>
        <p className="text-gray-400 mb-4">
          Learn the complete rules, strategies, and pro tips in our comprehensive guide.
        </p>
        <Link
          href="/guides/${game.slug}-rules"
          className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
        >
          Read ${game.name} Rules →
        </Link>
      </div>
    </GuideLayout>
  );
}
`;
}

function toPascalCase(str: string): string {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function getQuickAnswer(game: Game, city: City): string {
  if (city.collegeCity) {
    return `${game.name} is hugely popular in ${city.name}! You'll find it at college bars near campus, house parties, tailgates, and campus events. Popular spots include student bars with dedicated ${game.name} tables, fraternity/sorority houses, and weekend house parties. ${city.description} has one of the best party scenes for ${game.name} in ${city.stateAbbr}.`;
  }

  return `${city.name} has a thriving ${game.name} scene! Play at sports bars with ${game.name} tables, join organized bar leagues, attend rooftop parties, or host your own game. Many venues offer ${game.name} nights with specials. ${city.description} provides excellent venues for both casual and competitive play.`;
}

function getQuickAnswerTips(game: Game, city: City): string[] {
  const tips = [
    `${city.collegeCity ? 'Check campus bars for ${game.name} nights' : 'Join local bar leagues for competitive play'}`,
    `Best times: weekends 8pm-2am`,
    `Use rideshare apps - never drive after playing`,
  ];

  if (city.collegeCity) {
    tips.push(`Tailgates and campus events feature ${game.name} tournaments`);
  } else {
    tips.push(`Many ${city.name} bars host monthly tournaments`);
  }

  return tips;
}

function formatMarkdown(markdown: string): string {
  // Convert markdown to JSX
  return markdown
    .split('\n')
    .map(line => {
      if (line.startsWith('### ')) {
        const heading = line.replace('### ', '');
        return `      <h3>${heading}</h3>`;
      }
      if (line.startsWith('- ')) {
        return `        <li>${line.substring(2)}</li>`;
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        const text = line.replace(/\*\*/g, '');
        return `      <p><strong>${text}</strong></p>`;
      }
      if (line.trim() === '') {
        return '';
      }
      return `      <p>${line}</p>`;
    })
    .join('\n');
}

/**
 * Get list of all pages to generate
 */
export function getAllProgrammaticPages(): Array<{ game: Game; city: City; path: string }> {
  const pages: Array<{ game: Game; city: City; path: string }> = [];

  // Top games to generate city pages for
  const topGames = games.filter(g =>
    ['beer-pong', 'kings-cup', 'flip-cup', 'rage-cage', 'never-have-i-ever'].includes(g.slug)
  );

  for (const game of topGames) {
    for (const city of cities) {
      pages.push({
        game,
        city,
        path: `/guides/${game.slug}-in-${city.slug}`
      });
    }
  }

  return pages;
}

/**
 * Generate batch of pages
 */
export function generateBatch(games: Game[], cities: City[]): Map<string, string> {
  const files = new Map<string, string>();

  for (const game of games) {
    for (const city of cities) {
      const filename = `src/app/guides/${game.slug}-in-${city.slug}/page.tsx`;
      const code = generatePageCode(game, city);
      files.set(filename, code);
    }
  }

  return files;
}

// Calculate total pages possible
export function getTotalPagesCount(): number {
  const topGames = 5; // beer-pong, kings-cup, flip-cup, rage-cage, never-have-i-ever
  const totalCities = cities.length; // 50 cities
  return topGames * totalCities; // 250 pages
}
