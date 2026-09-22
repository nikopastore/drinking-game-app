import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { games } from "./gameData";
import { products } from "./marketplaceData";
import { affiliateLinks, bundleSuggestions, getAffiliateLink } from "./monetizationConfig";

function collectAffiliateUrls(): string[] {
  return [
    ...products.map((product) => product.affiliateUrl),
    ...Object.values(affiliateLinks).map((item) => item.url),
    ...bundleSuggestions.map((bundle) => bundle.url),
  ];
}

describe("affiliate catalog tags", () => {
  it("uses tagged amazon.com URLs and no short links", () => {
    const urls = collectAffiliateUrls();
    expect(urls.length).toBeGreaterThan(0);

    for (const url of urls) {
      const parsed = new URL(url);
      const host = parsed.hostname.replace(/^www\./, "");
      expect(host).not.toBe("a.co");
      expect(host).not.toBe("amzn.to");
      if (host === "amazon.com" || host.endsWith(".amazon.com")) {
        expect(parsed.searchParams.get("tag")).toBe("sipwiki-20");
      }
    }
  });

  it("points every shop product at a local photo and a product page", () => {
    for (const product of products) {
      expect(product.image.startsWith("/marketplace/")).toBe(true);
      expect(product.image.endsWith(".jpg")).toBe(true);
      expect(product.affiliateUrl).toContain("/dp/");
      const filePath = path.join(process.cwd(), "public", product.image);
      expect(existsSync(filePath)).toBe(true);
    }
  });

  it("uses product pages for materials that appear on game pages", () => {
    const materials = new Set(games.flatMap((game) => game.materials));
    for (const material of materials) {
      const link = getAffiliateLink(material);
      if (!link) continue;
      expect(link.url, material).toContain("/dp/");
    }
  });
});
