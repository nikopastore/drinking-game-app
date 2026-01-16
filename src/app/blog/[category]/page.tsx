import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen } from "lucide-react";
import {
  blogCategories,
  getBlogPostsByCategory,
  type BlogCategoryKey,
} from "@/config/blogData";

interface PageProps {
  params: Promise<{ category: BlogCategoryKey }>;
}

export async function generateStaticParams() {
  return blogCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = blogCategories.find((item) => item.slug === categorySlug);

  if (!category) {
    return {};
  }

  return {
    title: category.title,
    description: category.description,
    alternates: {
      canonical: `https://sipwiki.app/blog/${category.slug}`,
    },
    openGraph: {
      title: category.title,
      description: category.description,
      url: `https://sipwiki.app/blog/${category.slug}`,
      type: "website",
    },
  };
}

export default async function BlogCategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = blogCategories.find((item) => item.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const posts = getBlogPostsByCategory(category.slug);
  const relatedCategories = blogCategories.filter((item) => item.slug !== category.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} - SipWiki Blog`,
    description: category.description,
    url: `https://sipwiki.app/blog/${category.slug}`,
    isPartOf: {
      "@type": "Blog",
      name: "SipWiki Blog",
      url: "https://sipwiki.app/blog",
    },
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            Blog
          </Link>
          <span>/</span>
          <span className="text-gray-300">{category.name}</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {category.name}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            {category.description}
          </p>
        </header>

        <section className="mb-12">
          <div className="prose prose-invert max-w-none text-gray-300">
            {category.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <h2>What you will find here</h2>
            <ul>
              {category.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{category.closing}</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Articles in {category.name}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={post.slug}
                className="p-5 bg-dark-800 rounded-xl border border-dark-600 hover:border-neon-pink/50 transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span>{post.readTime}</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{post.title}</h3>
                <p className="text-gray-400 text-sm">{post.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Explore other sections</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {relatedCategories.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="p-4 bg-dark-800 rounded-xl border border-dark-600 hover:border-neon-pink/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-1">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
