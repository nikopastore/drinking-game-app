import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  gameCategories,
  getCategoryBySlug,
  getGamesForCategory,
  getAllCategorySlugs,
} from "@/config/categoryData";
import { Header } from "@/components/Header";
import { GameCard } from "@/components/GameCard";
import { Badge } from "@/components/ui";
import { ArrowLeft, ChevronRight } from "lucide-react";

interface PageProps {
  params: Promise<{ category: string }>;
}

// Generate static paths for all categories
export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({
    category: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);

  if (!categoryData) {
    return {
      title: "Category Not Found - SipWiki",
    };
  }

  return {
    title: categoryData.title,
    description: categoryData.description,
    openGraph: {
      title: categoryData.title,
      description: categoryData.description,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);

  if (!categoryData) {
    notFound();
  }

  const categoryGames = getGamesForCategory(category);
  const otherCategories = gameCategories.filter((c) => c.slug !== category);

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-600" />
            <li>
              <Link
                href="/games"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Games
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-600" />
            <li className="text-neon-pink font-medium">{categoryData.name}</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{categoryData.icon}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {categoryData.heading}
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl">
            {categoryData.subheading}
          </p>
          <div className="mt-4">
            <Badge variant="pink">{categoryGames.length} games</Badge>
          </div>
        </div>

        {/* Games Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categoryGames.map((game) => (
              <GameCard key={game.id} game={game} size="medium" showSipFactor />
            ))}
          </div>
        </div>

        {/* Other Categories */}
        <div className="border-t border-dark-600 pt-8">
          <h2 className="text-xl font-bold text-white mb-4">
            Explore Other Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {otherCategories.slice(0, 4).map((cat) => (
              <Link
                key={cat.slug}
                href={`/games/${cat.slug}`}
                className="group flex items-center gap-3 p-3 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-all"
              >
                <span className="text-xl">{cat.icon}</span>
                <span className="text-white group-hover:text-neon-pink transition-colors">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* SEO Content - unique per category */}
        <div className="mt-12 prose prose-invert max-w-none">
          <CategorySEOContent category={category} gamesCount={categoryGames.length} />
        </div>
      </main>
    </div>
  );
}

// SEO content component with unique text for each category
function CategorySEOContent({
  category,
  gamesCount,
}: {
  category: string;
  gamesCount: number;
}) {
  const content: Record<string, { title: string; paragraphs: string[] }> = {
    "card-games": {
      title: "About Card Drinking Games",
      paragraphs: [
        "Card drinking games are the backbone of party entertainment. With just a standard deck of 52 cards, you can play dozens of different games from the classic King's Cup to the intense Ride the Bus.",
        "Our card game rules include complete setup instructions, card meanings, and house rule variations. Whether you're a beginner or a seasoned player, these games are easy to learn and endlessly replayable.",
        "Popular card drinking games include King's Cup (also known as Circle of Death or Ring of Fire), Ride the Bus, Pyramid, F**k the Dealer, Irish Poker, and many more.",
      ],
    },
    "cup-games": {
      title: "About Cup Drinking Games",
      paragraphs: [
        "Cup drinking games are the most competitive and athletic of all drinking games. From the legendary Beer Pong to the chaotic Rage Cage, these games test your accuracy, speed, and drinking ability.",
        "Most cup games require red Solo cups and ping pong balls, making them perfect for house parties and tailgates. Our rules cover official tournament rules as well as popular house variations.",
        "Master games like Beer Pong, Flip Cup, Rage Cage (Stack Cup), Slap Cup, Chandelier, and Civil War with our complete rule guides.",
      ],
    },
    "dice-games": {
      title: "About Dice Drinking Games",
      paragraphs: [
        "Dice drinking games add an element of chance to your party. Let the roll decide who drinks with games like Three Man, 7-11-Doubles, and Mexico.",
        "All you need is a pair of dice and drinks. These games are quick to learn and perfect for smaller groups or as warm-up games before bigger activities.",
        "Dice games are some of the oldest drinking games, with variations played in bars and parties around the world for decades.",
      ],
    },
    "no-props": {
      title: "About No-Prop Drinking Games",
      paragraphs: [
        "Sometimes the best parties happen spontaneously. No-prop drinking games require nothing but drinks and friends, making them perfect for any situation.",
        "Games like Never Have I Ever, Most Likely To, and Truth or Drink are classic icebreakers that get people talking and laughing. They're also great for getting to know new people.",
        "These games focus on social interaction rather than physical skill, making them inclusive and fun for everyone regardless of experience level.",
      ],
    },
    "two-player": {
      title: "About Drinking Games for Two",
      paragraphs: [
        "You don't need a crowd to have fun. These drinking games are designed for just two people - perfect for date nights, roommate hangouts, or pregaming before meeting friends.",
        "Two-player games tend to be more intense since there's no one else to share the drinks. Pace yourself and enjoy the one-on-one competition.",
        "From competitive games like Speed Quarters to conversation starters like Truth or Drink, there's something for every couple or pair of friends.",
      ],
    },
    "large-groups": {
      title: "About Drinking Games for Large Groups",
      paragraphs: [
        "The more the merrier! These games scale perfectly for big parties with 6, 10, or even 20+ people. Large group games often involve everyone at once, creating shared experiences and memories.",
        "Games like King's Cup, Rage Cage, and Flip Cup tournaments are staples of college parties and house parties alike. They're easy to explain to newcomers and keep everyone engaged.",
        "For very large groups, consider running multiple games simultaneously or organizing tournament-style competitions.",
      ],
    },
    "beer-games": {
      title: "About Beer Drinking Games",
      paragraphs: [
        "Beer drinking games are the classics - the games that have defined party culture for generations. These games are designed to be played with beer or other light drinks.",
        "From Beer Pong to Flip Cup to Power Hour, these games are all about pacing, endurance, and having a good time with friends.",
        "Most beer games originated in American college culture and have since spread worldwide. They're best played with light beer to allow for longer play sessions.",
      ],
    },
    "quick-easy": {
      title: "About Quick & Easy Drinking Games",
      paragraphs: [
        "Not every game needs to be intense. Quick and easy games are perfect for beginners, warming up before a big night, or when you want a more relaxed drinking experience.",
        "These games have simple rules that can be explained in under a minute. They're great for mixed groups where not everyone wants to commit to a long, complex game.",
        "Low-intensity games let you socialize while playing, making them ideal for getting to know new people at parties.",
      ],
    },
    extreme: {
      title: "About Extreme Drinking Games",
      paragraphs: [
        "Warning: These games are not for lightweights. Extreme drinking games are high-intensity experiences designed for experienced players who know their limits.",
        "Games like Ride the Bus, Edward 40 Hands, and Century Club push boundaries and should be approached with caution. Always have water available and know when to stop.",
        "Please drink responsibly. These games can result in significant alcohol consumption in a short time. Look out for your friends and never pressure anyone to participate.",
      ],
    },
  };

  const categoryContent = content[category] || {
    title: "About These Drinking Games",
    paragraphs: [
      `Browse our collection of ${gamesCount} drinking games in this category. Each game includes complete rules, setup instructions, and tips for the best experience.`,
      "SipWiki provides the most comprehensive drinking game rules on the internet. Find your next party favorite and make memories with friends.",
    ],
  };

  return (
    <>
      <h2 className="text-xl font-bold text-white mb-4">{categoryContent.title}</h2>
      {categoryContent.paragraphs.map((p, i) => (
        <p key={i} className="text-gray-400">
          {p}
        </p>
      ))}
    </>
  );
}
