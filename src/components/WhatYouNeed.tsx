import { Game } from "@/types";
import { Badge, Card, CardContent } from "@/components/ui";
import { ExternalLink, Package } from "lucide-react";
import {
  getAffiliateLink,
  getBundleSuggestions,
  nonAffiliateItems,
} from "@/config/monetizationConfig";

const formatPrice = (value: number) => `$${value.toFixed(0)}`;

const parsePrice = (price?: string) => {
  if (!price) return null;
  const cleaned = price.replace(/[^0-9.]/g, "");
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : null;
};

export function WhatYouNeed({ game }: { game: Game }) {
  const materials = game.materials[0] === "no prop" ? [] : game.materials;

  const affiliateItems = materials.map((material) => {
    const affiliate = getAffiliateLink(material);
    return {
      material,
      affiliate,
      isNonAffiliate: nonAffiliateItems.includes(material.toLowerCase()),
    };
  });

  const pricedItems = affiliateItems
    .map((item) => parsePrice(item.affiliate?.price))
    .filter((price): price is number => price !== null);

  const estimatedTotal = pricedItems.length
    ? formatPrice(pricedItems.reduce((sum, price) => sum + price, 0))
    : "Varies";

  const bundles = getBundleSuggestions(game.materials, game.slug);

  return (
    <div className="space-y-4 mb-8">
      <Card className="border-dark-600">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Package className="h-5 w-5 text-neon-pink" />
            What You Need
          </h2>

          {materials.length === 0 ? (
            <Badge variant="green" className="text-base py-1.5 px-3">
              No props needed - just bring drinks!
            </Badge>
          ) : (
            <div className="flex flex-wrap gap-3">
              {affiliateItems.map((item) => {
                if (item.affiliate && !item.isNonAffiliate) {
                  return (
                    <a
                      key={item.material}
                      href={item.affiliate.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-lg hover:opacity-90 transition-all hover:scale-105"
                    >
                      <span>{item.affiliate.label}</span>
                      {item.affiliate.price ? (
                        <span className="text-xs opacity-80">{item.affiliate.price}</span>
                      ) : null}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  );
                }

                return (
                  <Badge
                    key={item.material}
                    variant="muted"
                    className="text-base py-1.5 px-3 capitalize"
                  >
                    {item.material}
                  </Badge>
                );
              })}
            </div>
          )}

          <p className="text-sm text-gray-500 mt-4">
            Estimated gear cost: <span className="text-gray-300">{estimatedTotal}</span>
          </p>
          <p className="text-xs text-gray-500 mt-2">* Amazon affiliate links help support SipWiki</p>
        </CardContent>
      </Card>

      {bundles.length > 0 && (
        <Card className="border-dark-600">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-white mb-3">Bundle Suggestions</h3>
            <div className="grid gap-3 md:grid-cols-2">
              {bundles.map((bundle) => (
                <a
                  key={bundle.id}
                  href={bundle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-2 p-4 rounded-lg border border-dark-600 bg-dark-800/60 hover:border-neon-pink/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-white font-semibold">{bundle.title}</p>
                      <p className="text-sm text-gray-400">{bundle.description}</p>
                    </div>
                    <Badge variant="pink" className="text-xs">{bundle.price}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {bundle.tags.map((tag) => (
                      <Badge key={tag} variant="muted" className="text-[10px] uppercase tracking-wide">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
