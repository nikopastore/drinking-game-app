"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Sparkles, TrendingUp, Star } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/marketplace/ProductCard";
import {
  products,
  categories,
  getFeaturedProducts,
  getProductsByCategory,
  Category,
} from "@/config/marketplaceData";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const featuredProducts = getFeaturedProducts();

  const displayProducts =
    selectedCategory === "all"
      ? products
      : getProductsByCategory(selectedCategory);

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-dark-900/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </Link>

          <h1 className="text-xl font-bold text-white tracking-tight">
            SIP<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">SHOP</span>
          </h1>

          <div className="w-20" /> {/* Spacer for centering */}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Party{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              Essentials
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Curated gear for unforgettable nights. Every product hand-picked for the ultimate party experience.
          </p>
        </motion.section>

        {/* Featured Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20">
              <TrendingUp className="w-5 h-5 text-pink-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">Featured</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.slice(0, 4).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
              <Sparkles className="w-5 h-5 text-cyan-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">Browse</h3>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-white text-black"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-white text-black"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <section>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {displayProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {displayProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-white/50">No products in this category yet.</p>
            </div>
          )}
        </section>

        {/* Bottom CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 mb-8 text-center"
        >
          <div className="bg-gradient-to-br from-purple-900/30 via-dark-800 to-pink-900/30 rounded-3xl p-12 border border-white/5">
            <Star className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Can&apos;t find what you need?
            </h3>
            <p className="text-white/50 mb-6 max-w-md mx-auto">
              We&apos;re always adding new products. Check back soon or browse our full collection on Amazon.
            </p>
            <a
              href="https://www.amazon.com/shop/sipwiki?tag=sipwiki-20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              View Full Store
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </a>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-white/30 text-sm">
          <p>Affiliate links support SipWiki at no extra cost to you.</p>
        </div>
      </footer>
    </div>
  );
}
