"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Home, BookOpen, Clock, Calendar } from "lucide-react";
import { AuthorByline } from "./AuthorByline";
import { EssentialSupplies } from "./ProductCard";
import { blogPosts } from "@/config/blogData";

interface BlogLayoutProps {
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  children: React.ReactNode;
  author?: string;
  publishDate?: string;
  updatedDate?: string;
  readTime?: string;
  supplies?: string[];
  relatedArticles?: Array<{
    title: string;
    slug: string;
    description: string;
  }>;
  tableOfContents?: Array<{
    id: string;
    title: string;
  }>;
}

export function BlogLayout({
  title,
  description,
  category,
  categorySlug,
  children,
  author = "sipwiki-team",
  publishDate,
  updatedDate,
  readTime,
  supplies = [],
  relatedArticles = [],
  tableOfContents = [],
}: BlogLayoutProps) {
  const pathname = usePathname();
  const fallbackRelated = relatedArticles.length
    ? relatedArticles
    : blogPosts
        .filter((post) => post.category === categorySlug && post.slug !== pathname)
        .slice(0, 3)
        .map((post) => ({
          title: post.title,
          slug: post.slug,
          description: post.description,
        }));

  // Generate Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: author === "sipwiki-team" ? "SipWiki Team" : author,
      url: "https://sipwiki.app/about",
    },
    publisher: {
      "@type": "Organization",
      name: "SipWiki",
      url: "https://sipwiki.app",
      logo: {
        "@type": "ImageObject",
        url: "https://sipwiki.app/logo.png",
      },
    },
    datePublished: publishDate,
    dateModified: updatedDate || publishDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sipwiki.app${pathname}`,
    },
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://sipwiki.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://sipwiki.app/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category,
        item: `https://sipwiki.app/blog/${categorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: title,
        item: `https://sipwiki.app${pathname}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <nav className="flex items-center gap-2 text-sm text-gray-400 flex-wrap">
          <Link href="/" className="hover:text-white flex items-center gap-1">
            <Home className="h-4 w-4" />
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            Blog
          </Link>
          <span>/</span>
          <Link href={`/blog/${categorySlug}`} className="hover:text-white">
            {category}
          </Link>
          <span>/</span>
          <span className="text-gray-300 truncate max-w-[200px]">{title}</span>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Article Content */}
          <article className="flex-1 max-w-4xl">
            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-neon-pink/20 text-neon-pink text-sm font-medium rounded-full">
                  {category}
                </span>
                {readTime && (
                  <span className="flex items-center gap-1 text-gray-400 text-sm">
                    <Clock className="h-4 w-4" />
                    {readTime}
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {title}
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {description}
              </p>

              {/* Author Byline */}
              <div className="pt-4 border-t border-dark-600">
                <AuthorByline
                  authorSlug={author}
                  publishDate={publishDate}
                  updatedDate={updatedDate}
                  readTime={readTime}
                  size="medium"
                />
              </div>
            </header>

            {/* Table of Contents (Mobile) */}
            {tableOfContents.length > 0 && (
              <div className="lg:hidden mb-8 p-4 bg-dark-800 rounded-xl border border-dark-600">
                <h3 className="font-semibold text-white mb-3">In This Article</h3>
                <ul className="space-y-2">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-gray-400 hover:text-neon-pink text-sm transition-colors"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Article Body */}
            <div
              className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-dark-600 prose-h2:pb-2
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-gray-300 prose-p:leading-relaxed
              prose-li:text-gray-300
              prose-strong:text-white
              prose-a:text-neon-pink prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-neon-pink prose-blockquote:bg-dark-800 prose-blockquote:rounded-r-xl prose-blockquote:py-2
            "
            >
              {children}
            </div>

            {/* Affiliate Supplies */}
            {supplies.length > 0 && (
              <EssentialSupplies supplies={supplies} title="Shop the Essentials" />
            )}

            {/* Author Bio Box */}
            <div className="mt-12 p-6 bg-dark-800 rounded-2xl border border-dark-600">
              <h3 className="text-lg font-semibold text-white mb-4">About the Author</h3>
              <AuthorByline authorSlug={author} showBio size="large" />
            </div>

            {/* Related Articles */}
            {fallbackRelated.length > 0 && (
              <section className="mt-12 pt-8 border-t border-dark-600">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Related Articles
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {fallbackRelated.map((article) => (
                    <Link
                      key={article.slug}
                      href={article.slug}
                      className="p-4 bg-dark-800 rounded-xl border border-dark-600 hover:border-neon-pink/50 transition-colors group"
                    >
                      <h3 className="font-semibold text-white group-hover:text-neon-pink transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        {article.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Sidebar - Desktop Table of Contents */}
          {tableOfContents.length > 0 && (
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-20">
                <div className="p-4 bg-dark-800 rounded-xl border border-dark-600">
                  <h3 className="font-semibold text-white mb-4">
                    In This Article
                  </h3>
                  <ul className="space-y-2">
                    {tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-gray-400 hover:text-neon-pink text-sm transition-colors block py-1"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sticky CTA */}
                <div className="mt-4 p-4 bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 rounded-xl border border-neon-pink/30">
                  <h4 className="font-semibold text-white mb-2">
                    Find Your Perfect Game
                  </h4>
                  <p className="text-sm text-gray-400 mb-3">
                    Browse 40+ drinking games for any occasion
                  </p>
                  <Link
                    href="/games"
                    className="flex items-center justify-center gap-2 w-full bg-neon-pink text-white py-2 px-4 rounded-lg font-medium hover:bg-neon-pink/80 transition-colors"
                  >
                    Browse Games
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>

      {/* Footer Navigation */}
      <footer className="max-w-4xl mx-auto px-4 py-12 border-t border-dark-600">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-white mb-3">Popular Games</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/game/kings-cup" className="text-gray-400 hover:text-neon-pink">
                  Kings Cup
                </Link>
              </li>
              <li>
                <Link href="/game/beer-pong" className="text-gray-400 hover:text-neon-pink">
                  Beer Pong
                </Link>
              </li>
              <li>
                <Link href="/game/flip-cup" className="text-gray-400 hover:text-neon-pink">
                  Flip Cup
                </Link>
              </li>
              <li>
                <Link href="/game/never-have-i-ever" className="text-gray-400 hover:text-neon-pink">
                  Never Have I Ever
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Blog Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog/buying-guides" className="text-gray-400 hover:text-neon-pink">
                  Buying Guides
                </Link>
              </li>
              <li>
                <Link href="/blog/party-tips" className="text-gray-400 hover:text-neon-pink">
                  Party Tips
                </Link>
              </li>
              <li>
                <Link href="/blog/safety" className="text-gray-400 hover:text-neon-pink">
                  Safety & Responsibility
                </Link>
              </li>
              <li>
                <Link href="/blog/tutorials" className="text-gray-400 hover:text-neon-pink">
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/party-planner" className="text-gray-400 hover:text-neon-pink">
                  Party Planner Calculator
                </Link>
              </li>
              <li>
                <Link href="/quiz/what-drinking-game-are-you" className="text-gray-400 hover:text-neon-pink">
                  Personality Quiz
                </Link>
              </li>
              <li>
                <Link href="/spin" className="text-gray-400 hover:text-neon-pink">
                  Random Game Picker
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-dark-700 text-center">
          <Link href="/" className="text-neon-pink font-bold text-lg hover:text-neon-pink/80">
            SipWiki
          </Link>
          <p className="text-gray-500 text-sm mt-2">
            Your ultimate guide to drinking games
          </p>
        </div>
      </footer>
    </div>
  );
}
