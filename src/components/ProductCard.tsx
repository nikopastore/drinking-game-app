"use client";

import { ExternalLink, ShoppingCart } from "lucide-react";
import { affiliateLinks } from "@/config/monetizationConfig";

interface ProductCardProps {
  productKey: string;
  customLabel?: string;
  customDescription?: string;
  variant?: "compact" | "full" | "inline";
  showPrice?: boolean;
}

export function ProductCard({
  productKey,
  customLabel,
  customDescription,
  variant = "compact",
  showPrice = true,
}: ProductCardProps) {
  const product = affiliateLinks[productKey.toLowerCase()];

  if (!product) {
    return null;
  }

  const label = customLabel || product.label;
  const price = product.price;

  if (variant === "inline") {
    return (
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="inline-flex items-center gap-1 text-neon-pink hover:text-neon-pink/80 font-medium"
      >
        {label}
        <ExternalLink className="h-3 w-3" />
        {showPrice && price && (
          <span className="text-gray-400 text-sm ml-1">({price})</span>
        )}
      </a>
    );
  }

  if (variant === "compact") {
    return (
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="flex items-center justify-between p-3 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors group"
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 flex items-center justify-center">
            <ShoppingCart className="h-5 w-5 text-neon-pink" />
          </div>
          <div>
            <span className="font-medium text-white group-hover:text-neon-pink transition-colors">
              {label}
            </span>
            {showPrice && price && (
              <span className="text-gray-400 text-sm ml-2">{price}</span>
            )}
          </div>
        </div>
        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-neon-pink transition-colors" />
      </a>
    );
  }

  // Full variant
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="block p-4 bg-dark-800 rounded-xl border border-dark-600 hover:border-neon-pink/50 transition-all hover:shadow-lg hover:shadow-neon-pink/10 group"
    >
      <div className="flex items-start gap-4">
        <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 flex items-center justify-center flex-shrink-0">
          <ShoppingCart className="h-8 w-8 text-neon-pink" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-white group-hover:text-neon-pink transition-colors">
            {label}
          </h4>
          {customDescription && (
            <p className="text-gray-400 text-sm mt-1">{customDescription}</p>
          )}
          <div className="flex items-center gap-3 mt-2">
            {showPrice && price && (
              <span className="text-neon-pink font-bold">{price}</span>
            )}
            <span className="text-xs text-gray-500 flex items-center gap-1">
              View on Amazon <ExternalLink className="h-3 w-3" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

// Grid of product cards for buying guides
interface ProductGridProps {
  products: Array<{
    key: string;
    description?: string;
  }>;
  columns?: 1 | 2 | 3;
}

export function ProductGrid({ products, columns = 2 }: ProductGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4`}>
      {products.map((product) => (
        <ProductCard
          key={product.key}
          productKey={product.key}
          customDescription={product.description}
          variant="full"
        />
      ))}
    </div>
  );
}

// Essential supplies section for game pages
interface EssentialSuppliesProps {
  supplies: string[];
  title?: string;
}

export function EssentialSupplies({
  supplies,
  title = "Get the Essentials",
}: EssentialSuppliesProps) {
  const validSupplies = supplies.filter(
    (s) => affiliateLinks[s.toLowerCase()]
  );

  if (validSupplies.length === 0) {
    return null;
  }

  return (
    <div className="my-8 p-6 bg-gradient-to-r from-dark-800 to-dark-800/50 rounded-2xl border border-dark-600">
      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <ShoppingCart className="h-5 w-5 text-neon-pink" />
        {title}
      </h3>
      <div className="space-y-2">
        {validSupplies.map((supply) => (
          <ProductCard key={supply} productKey={supply} variant="compact" />
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-4">
        * As an Amazon Associate, SipWiki earns from qualifying purchases.
      </p>
    </div>
  );
}
