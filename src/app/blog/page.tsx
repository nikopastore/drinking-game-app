import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Shield,
  ShoppingBag,
  Lightbulb,
  PartyPopper,
} from "lucide-react";
import { blogCategories, blogPosts, getBlogPostsByCategory } from "@/config/blogData";

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

const categoryUi = {
  "buying-guides": {
    icon: ShoppingBag,
    color: "from-green-500 to-emerald-500",
  },
  safety: {
    icon: Shield,
    color: "from-blue-500 to-cyan-500",
  },
  tutorials: {
    icon: Lightbulb,
    color: "from-orange-500 to-amber-500",
  },
  "party-tips": {
    icon: PartyPopper,
    color: "from-neon-pink to-neon-purple",
  },
  seasonal: {
    icon: BookOpen,
    color: "from-purple-500 to-indigo-500",
  },
};

const categories = blogCategories.map((category) => ({
  ...category,
  ...categoryUi[category.slug],
  articles: getBlogPostsByCategory(category.slug).slice(0, 3),
}));

const featuredArticles = [
  blogPosts.find((post) => post.slug === "/blog/safety/how-to-host-safe-drinking-party"),
  blogPosts.find((post) => post.slug === "/blog/buying-guides/best-beer-pong-tables"),
  blogPosts.find((post) => post.slug === "/blog/tutorials/beer-pong-tournament-setup"),
].filter(Boolean) as typeof blogPosts;

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
                    {blogCategories.find((cat) => cat.slug === article.category)?.name || "Blog"}
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

        {/* Editorial Standards */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-white mb-4">Why the SipWiki Blog Exists</h2>
          <div className="prose prose-invert max-w-none text-gray-300">
            <p>
              SipWiki is built for hosts, players, and party planners who want reliable rules and
              practical advice. The blog is where we go deeper. We review gear, explain setups,
              and share hosting playbooks that reduce friction before the first cup hits the table.
              If a guide is on this site, it is because we believe it makes game night better.
            </p>
            <p>
              Our buying guides emphasize value and durability. We call out tradeoffs so you can
              pick the right option for your space and budget. Our party tips focus on pacing,
              food, and inclusivity because the best parties keep everyone comfortable. Tutorials
              walk through the logistics so you can run tournaments, set up DIY builds, or host
              remote nights without stress.
            </p>
            <p>
              If you are new here, start with a category that matches your next event. Each
              article links to related guides so you can move from an idea to a full plan
              without jumping between sites. Think of this as the planning layer that sits
              on top of the rules pages and tools.
            </p>
            <h3>How we keep content useful</h3>
            <ul>
              <li>We prioritize clarity and real use cases over fluff.</li>
              <li>We update guides when gear or trends change.</li>
              <li>We link to rules and tools so you can take action fast.</li>
            </ul>
          </div>
        </section>

        {/* All Articles */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-white mb-6">All Articles</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={post.slug}
                className="p-5 bg-dark-800 rounded-xl border border-dark-600 hover:border-neon-pink/50 transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span>{blogCategories.find((cat) => cat.slug === post.category)?.name}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{post.title}</h3>
                <p className="text-gray-400 text-sm">{post.description}</p>
              </Link>
            ))}
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
