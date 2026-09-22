"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Product } from "@/config/marketplaceData";
import { withAssociateTag } from "@/lib/affiliateUrl";
import { trackEvent } from "@/lib/analytics";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const badgeColors = {
    bestseller: "from-amber-500 to-orange-500",
    new: "from-emerald-500 to-green-500",
    trending: "from-pink-500 to-purple-500",
  };

  return (
    <motion.a
      href={withAssociateTag(product.affiliateUrl)}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className="group block"
      onClick={() => trackEvent("affiliate_click", product.id)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <div className="relative bg-dark-800 rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-dark-700 to-dark-800">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-dark-800 to-pink-900/20" />

          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-contain p-6"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Quick shop button */}
          <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <div className="flex items-center justify-center gap-2 bg-white text-black font-semibold py-3 rounded-xl">
              <span>Shop Now</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3 z-10">
              <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-gradient-to-r ${badgeColors[product.badge]} text-white shadow-lg`}>
                {product.badge}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Price */}
          <div className="text-lg font-bold text-white mb-1">
            {product.price}
          </div>

          {/* Name */}
          <h3 className="font-semibold text-white/90 group-hover:text-white transition-colors line-clamp-1 mb-2">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-white/50 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>
    </motion.a>
  );
}
