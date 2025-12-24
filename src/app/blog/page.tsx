import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Shield, ShoppingBag, Lightbulb, PartyPopper } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Party Tips, Buying Guides & Safety | SipWiki",
  description: "Expert party tips, buying guides for drinking game supplies, safety advice, and tutorials. Everything you need to host the perfect party.",
  keywords: [
    "drinking game tips",
    "party planning advice",
    "beer pong table reviews",
    "responsible drinking",
    "party hosting guide",
    "drinking game tutorials",
  ],
  openGraph: {
    title: "SipWiki Blog - Party Tips & Guides",
    description: "Expert advice for hosting the perfect party. Buying guides, safety tips, and tutorials.",
    type: "website",
    url: "https://sipwiki.app/blog",
  },
  alternates: {
    canonical: "https://sipwiki.app/blog",
  },
};

const categories = [
  {
    slug: "buying-guides",
    name: "Buying Guides",
    description: "Expert reviews and recommendations for party supplies and game equipment",
    icon: ShoppingBag,
    color: "from-green-500 to-emerald-500",
    articles: [
      { title: "Best Beer Pong Tables 2025", slug: "/blog/buying-guides/best-beer-pong-tables" },
      { title: "Best Party Cups for Drinking Games", slug: "/blog/buying-guides/best-party-cups" },
      { title: "Complete Party Supplies Checklist", slug: "/blog/buying-guides/party-supplies-checklist" },
    ],
  },
  {
    slug: "safety",
    name: "Safety & Responsibility",
    description: "Tips for hosting safe parties and drinking responsibly",
    icon: Shield,
    color: "from-blue-500 to-cyan-500",
    articles: [
      { title: "How to Host a Safe Drinking Party", slug: "/blog/safety/how-to-host-safe-drinking-party" },
      { title: "Know Your Limits: Signs to Stop", slug: "/blog/safety/know-your-limits" },
      { title: "Non-Alcoholic Alternatives for Drinking Games", slug: "/blog/safety/non-alcoholic-alternatives" },
    ],
  },
  {
    slug: "tutorials",
    name: "Tutorials & How-Tos",
    description: "Step-by-step guides for setting up games and tournaments",
    icon: Lightbulb,
    color: "from-orange-500 to-amber-500",
    articles: [
      { title: "How to Set Up a Beer Pong Tournament", slug: "/blog/tutorials/beer-pong-tournament-setup" },
      { title: "DIY Beer Pong Table Under $50", slug: "/blog/tutorials/diy-beer-pong-table" },
      { title: "Virtual Drinking Games Guide", slug: "/blog/tutorials/virtual-drinking-games-guide" },
    ],
  },
  {
    slug: "party-tips",
    name: "Party Tips",
    description: "Expert advice for hosting unforgettable parties",
    icon: PartyPopper,
    color: "from-neon-pink to-neon-purple",
    articles: [
      { title: "21st Birthday Party Ideas", slug: "/blog/party-tips/21st-birthday-party-ideas" },
      { title: "Tailgate Party Games Guide", slug: "/blog/party-tips/tailgate-party-games" },
      { title: "Small Apartment Party Hacks", slug: "/blog/party-tips/small-apartment-party-hacks" },
    ],
  },
];

const featuredArticles = [
  {
    title: "How to Host a Safe Drinking Party: The Complete Guide",
    slug: "/blog/safety/how-to-host-safe-drinking-party",
    description: "Everything you need to know about hosting responsibly, from knowing limits to managing guests.",
    category: "Safety",
    readTime: "8 min read",
  },
  {
    title: "Best Beer Pong Tables 2025: Expert Reviews",
    slug: "/blog/buying-guides/best-beer-pong-tables",
    description: "We tested 10+ beer pong tables to find the best options for every budget and space.",
    category: "Buying Guides",
    readTime: "12 min read",
  },
  {
    title: "How to Set Up a Beer Pong Tournament",
    slug: "/blog/tutorials/beer-pong-tournament-setup",
    description: "Complete guide to organizing bracket tournaments, house rules, and prizes.",
    category: "Tutorials",
    readTime: "10 min read",
  },
];

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "SipWiki Blog",
    description: "Expert party tips, buying guides, and drinking game tutorials",
    url: "https://sipwiki.app/blog",
    publisher: {
      "@type": "Organization",
      name: "SipWiki",
      url: "https://sipwiki.app",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-dark-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-dark-800 to-dark-900 border-b border-dark-600">
          <div className="max-w-6xl mx-auto px-4 py-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-pink/20 rounded-full text-neon-pink text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              SipWiki Blog
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Party Tips, Guides & More
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Expert advice for hosting unforgettable parties. From buying guides to safety tips,
              we&apos;ve got everything you need.
            </p>
          </div>
        </div>

        {/* Featured Articles */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <Link
                key={article.slug}
                href={article.slug}
                className="group p-6 bg-dark-800 rounded-2xl border border-dark-600 hover:border-neon-pink/50 transition-all hover:shadow-lg hover:shadow-neon-pink/10"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-neon-pink/20 text-neon-pink text-xs font-medium rounded">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-xs">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-neon-pink transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm">{article.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-white mb-8">Browse by Category</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.slug}
                  className="p-6 bg-dark-800 rounded-2xl border border-dark-600"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`h-12 w-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{category.name}</h3>
                      <p className="text-gray-400 text-sm">{category.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {category.articles.map((article) => (
                      <li key={article.slug}>
                        <Link
                          href={article.slug}
                          className="text-gray-300 hover:text-neon-pink transition-colors text-sm flex items-center gap-2"
                        >
                          <ArrowRight className="h-3 w-3" />
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/blog/${category.slug}`}
                    className="inline-flex items-center gap-2 text-neon-pink hover:text-neon-pink/80 font-medium text-sm"
                  >
                    View all {category.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="p-8 bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 rounded-2xl border border-neon-pink/30 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to Play?
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Browse our collection of 40+ drinking games with complete rules,
              tips, and everything you need to get started.
            </p>
            <Link
              href="/games"
              className="inline-flex items-center gap-2 bg-neon-pink text-white px-6 py-3 rounded-full font-semibold hover:bg-neon-pink/80 transition-colors"
            >
              Browse All Games
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
