import { Metadata } from "next";
import { BlogLayout } from "@/components/BlogLayout";
import { QuickAnswer } from "@/components/seo";
import { ProductCard } from "@/components/ProductCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DIY Beer Pong Table Under $50: Easy Build Guide (2025)",
  description: "Build your own beer pong table for under $50! Step-by-step instructions with materials list, dimensions, and customization ideas. Perfect weekend project.",
  keywords: [
    "DIY beer pong table",
    "homemade beer pong table",
    "build beer pong table",
    "beer pong table dimensions",
    "cheap beer pong table",
    "beer pong table plans",
    "make beer pong table",
    "beer pong table size",
  ],
  openGraph: {
    title: "DIY Beer Pong Table Under $50",
    description: "Build your own regulation beer pong table this weekend.",
    type: "article",
    url: "https://sipwiki.app/blog/tutorials/diy-beer-pong-table",
  },
  alternates: {
    canonical: "https://sipwiki.app/blog/tutorials/diy-beer-pong-table",
  },
};

export default function DIYBeerPongTablePage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Build a DIY Beer Pong Table",
    description: "Step-by-step guide to building a regulation beer pong table for under $50",
    totalTime: "PT3H",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "30-50",
    },
    supply: [
      { "@type": "HowToSupply", name: "Plywood sheet (4x8 feet)" },
      { "@type": "HowToSupply", name: "2x4 lumber for legs" },
      { "@type": "HowToSupply", name: "Wood screws" },
      { "@type": "HowToSupply", name: "Exterior paint or polyurethane" },
      { "@type": "HowToSupply", name: "Sandpaper" },
    ],
    tool: [
      { "@type": "HowToTool", name: "Circular saw or have store cut wood" },
      { "@type": "HowToTool", name: "Drill" },
      { "@type": "HowToTool", name: "Measuring tape" },
      { "@type": "HowToTool", name: "Paintbrush or roller" },
    ],
    step: [
      { "@type": "HowToStep", name: "Cut Plywood", text: "Cut plywood to 8 feet x 2 feet for regulation size" },
      { "@type": "HowToStep", name: "Sand Surface", text: "Sand the playing surface smooth for consistent ball bounce" },
      { "@type": "HowToStep", name: "Build Legs", text: "Construct folding or fixed legs to regulation 27.5 inch height" },
      { "@type": "HowToStep", name: "Seal Surface", text: "Apply waterproof sealant to protect from spills" },
      { "@type": "HowToStep", name: "Add Graphics", text: "Paint cup markings and custom design" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <BlogLayout
        title="DIY Beer Pong Table Under $50: Easy Build Guide"
        description="Why buy an expensive table when you can build your own? This weekend project creates a regulation-size beer pong table that's customized to your style and saves you money."
        category="Tutorials"
        categorySlug="tutorials"
        author="sipwiki-team"
        publishDate="2025-01-15"
        updatedDate="2025-01-15"
        readTime="8 min"
        supplies={["ping pong balls", "red solo cups"]}
        tableOfContents={[
          { id: "materials", title: "Materials List" },
          { id: "dimensions", title: "Regulation Dimensions" },
          { id: "basic-build", title: "Basic Build Guide" },
          { id: "folding-legs", title: "Adding Folding Legs" },
          { id: "waterproofing", title: "Waterproofing" },
          { id: "customization", title: "Customization Ideas" },
          { id: "alternatives", title: "Ultra-Budget Alternatives" },
        ]}
        relatedArticles={[
          {
            title: "Best Beer Pong Tables 2025",
            slug: "/blog/buying-guides/best-beer-pong-tables",
            description: "Compare to store-bought options",
          },
          {
            title: "Beer Pong Tournament Setup",
            slug: "/blog/tutorials/beer-pong-tournament-setup",
            description: "Use your new table for tournaments",
          },
        ]}
      >
        <QuickAnswer
          question="How do I build a cheap beer pong table?"
          answer="Get a 4x8 sheet of plywood (or have it cut to 2x8 at the store), add folding legs from hardware store (~$20), sand and seal the surface, then paint your design. Total cost: $30-50. Takes about 2-3 hours."
          tips={[
            "Regulation size is 8ft x 2ft x 27.5in tall",
            "Plywood gives best ball bounce",
            "Polyurethane sealant protects from spills",
            "Most hardware stores will cut plywood for free",
          ]}
          variant="primary"
        />

        <h2 id="materials">Materials List</h2>

        <h3>Basic Build (~$30-40)</h3>
        <div className="not-prose my-6 p-6 bg-dark-800 rounded-xl border border-dark-600">
          <ul className="space-y-2 text-gray-300">
            <li><strong>1x Plywood sheet (4&apos;x8&apos;x1/2&quot;)</strong> - ~$20-25</li>
            <li><strong>Folding table legs (set of 4)</strong> - ~$15-20</li>
            <li><strong>Wood screws (1.5&quot;)</strong> - ~$5</li>
            <li><strong>Sandpaper (120 and 220 grit)</strong> - ~$5</li>
          </ul>
          <p className="text-sm text-gray-500 mt-4">
            *Most stores will cut plywood to 2&apos;x8&apos; for free or a small fee
          </p>
        </div>

        <h3>Upgraded Build (~$50-70)</h3>
        <p>Add these for durability and looks:</p>
        <ul>
          <li><strong>Polyurethane sealant</strong> - ~$10 (waterproofs surface)</li>
          <li><strong>Exterior latex paint</strong> - ~$15 (for custom graphics)</li>
          <li><strong>Edge trim/molding</strong> - ~$10 (protects edges)</li>
          <li><strong>Carrying handles</strong> - ~$5 (makes transport easier)</li>
        </ul>

        <h3>Tools Needed</h3>
        <ul>
          <li>Drill with screwdriver bit</li>
          <li>Measuring tape</li>
          <li>Pencil</li>
          <li>Sandpaper or sanding block</li>
          <li>Paintbrush or roller</li>
          <li>Circular saw (optional - store can cut for you)</li>
        </ul>

        <h2 id="dimensions">Regulation Beer Pong Table Dimensions</h2>

        <div className="not-prose my-8 p-6 bg-gradient-to-r from-neon-pink/10 to-neon-purple/10 border border-neon-pink/30 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-4">Official Dimensions</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-neon-pink">8 ft</div>
              <div className="text-gray-400 text-sm">Length</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-blue">2 ft</div>
              <div className="text-gray-400 text-sm">Width</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-purple">27.5 in</div>
              <div className="text-gray-400 text-sm">Height</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-4 text-center">
            These are World Series of Beer Pong regulation dimensions
          </p>
        </div>

        <h3>Dimension Notes</h3>
        <ul>
          <li><strong>Length (8ft):</strong> Creates proper throwing distance</li>
          <li><strong>Width (2ft):</strong> Standard for 10-cup triangle formation</li>
          <li><strong>Height (27.5&quot;):</strong> Comfortable for standing play</li>
          <li><strong>Thickness (1/2&quot;-3/4&quot;):</strong> Provides good ball bounce</li>
        </ul>

        <p>
          <strong>Space-saving option:</strong> Build a 6-foot table if space is limited.
          Games play slightly differently but still work great.
        </p>

        <h2 id="basic-build">Basic Build Guide</h2>

        <h3>Step 1: Get Your Plywood Cut</h3>
        <p>
          Most hardware stores (Home Depot, Lowe&apos;s) will cut plywood for free or a small fee.
          Ask them to cut a 4&apos;x8&apos; sheet into one 2&apos;x8&apos; piece. You&apos;ll have a 2&apos;x8&apos; leftover
          for a second table or other projects.
        </p>

        <h3>Step 2: Sand the Surface</h3>
        <ol>
          <li>Start with 120-grit sandpaper for rough spots</li>
          <li>Finish with 220-grit for a smooth surface</li>
          <li>Sand in the direction of the wood grain</li>
          <li>Wipe clean with a damp cloth</li>
        </ol>
        <p>
          <strong>Why this matters:</strong> A smooth surface gives consistent ball bounce.
          Rough spots cause unpredictable bounces.
        </p>

        <h3>Step 3: Attach Legs</h3>
        <ol>
          <li>Flip table upside down</li>
          <li>Position folding leg brackets 6-8 inches from each end</li>
          <li>Mark screw holes with pencil</li>
          <li>Pre-drill pilot holes (prevents wood splitting)</li>
          <li>Attach brackets with screws</li>
          <li>Attach legs to brackets</li>
          <li>Flip table and test stability</li>
        </ol>

        <div className="not-prose my-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
          <p className="text-gray-300">
            <strong className="text-yellow-400">Pro Tip:</strong> Standard folding leg height is 28&quot;,
            which is close to regulation 27.5&quot;. If using sawhorses, stack books or wood
            underneath to adjust height.
          </p>
        </div>

        <h3>Step 4: Basic Seal (Minimum)</h3>
        <p>At minimum, apply one coat of polyurethane to protect from spills:</p>
        <ol>
          <li>Apply thin, even coat with brush or roller</li>
          <li>Let dry 2-4 hours</li>
          <li>Lightly sand with 220-grit</li>
          <li>Apply second coat</li>
          <li>Let cure 24 hours before use</li>
        </ol>

        <h2 id="folding-legs">Adding Folding Legs</h2>

        <h3>Option 1: Folding Leg Brackets ($15-25)</h3>
        <p>
          Pre-made folding leg sets from hardware stores are the easiest option.
          They fold flat for storage and include everything you need.
        </p>

        <h3>Option 2: Sawhorses ($20-30)</h3>
        <ul>
          <li>Buy two folding sawhorses</li>
          <li>Set plywood on top</li>
          <li>No attachment needed</li>
          <li>Easy to adjust height with shims</li>
          <li>Folds flat for storage</li>
        </ul>

        <h3>Option 3: DIY 2x4 Legs ($10-15)</h3>
        <p>For a fixed (non-folding) table:</p>
        <ol>
          <li>Cut four 2x4 pieces to 27.5&quot; length</li>
          <li>Attach to corners with L-brackets</li>
          <li>Add cross-braces for stability</li>
          <li>Cheaper but doesn&apos;t fold</li>
        </ol>

        <h2 id="waterproofing">Waterproofing Your Table</h2>

        <p>Beer pong = spills. Waterproofing is essential for longevity.</p>

        <h3>Polyurethane (Recommended)</h3>
        <ul>
          <li>Best protection for wood</li>
          <li>2-3 coats for full coverage</li>
          <li>Dries clear, shows wood grain</li>
          <li>Sand lightly between coats</li>
        </ul>

        <h3>Exterior Paint</h3>
        <ul>
          <li>Covers wood completely</li>
          <li>Adds color and graphics</li>
          <li>Apply primer first</li>
          <li>2 coats minimum</li>
          <li>Top with clear poly for extra protection</li>
        </ul>

        <h3>Vinyl/Plastic Sheet</h3>
        <ul>
          <li>Glue vinyl sheet to surface</li>
          <li>100% waterproof</li>
          <li>Easy to clean</li>
          <li>Different ball bounce feel</li>
        </ul>

        <h2 id="customization">Customization Ideas</h2>

        <h3>Cup Markings</h3>
        <ol>
          <li>Measure and mark triangle positions (6&quot; from each end)</li>
          <li>Use painter&apos;s tape to outline triangles</li>
          <li>Paint inside tape lines</li>
          <li>Remove tape carefully while paint is tacky</li>
        </ol>

        <h3>Team Logos</h3>
        <ul>
          <li>Print logo on large format paper</li>
          <li>Trace onto table with carbon paper</li>
          <li>Paint by hand or use stencils</li>
          <li>Seal with clear polyurethane</li>
        </ul>

        <h3>LED Underlighting</h3>
        <ul>
          <li>Attach LED strip lights under edges</li>
          <li>Use battery-powered strips for portability</li>
          <li>Color-changing RGB for party vibes</li>
          <li>Cost: ~$15-20 extra</li>
        </ul>

        <h3>Ball Return Rails</h3>
        <ul>
          <li>Attach small molding strips along edges</li>
          <li>Prevents balls from rolling off</li>
          <li>Adds professional look</li>
          <li>Cost: ~$10 extra</li>
        </ul>

        <h2 id="alternatives">Ultra-Budget Alternatives</h2>

        <h3>The Door Method ($0-10)</h3>
        <ol>
          <li>Find an old interior door (hollow-core works)</li>
          <li>Standard doors are 80&quot; x 32&quot; (close to regulation)</li>
          <li>Set on sawhorses or tables</li>
          <li>No cutting needed</li>
        </ol>

        <h3>Folding Table + Plywood Top ($25-40)</h3>
        <ol>
          <li>Buy a cheap 6&quot; folding table (~$30)</li>
          <li>Cut plywood to fit on top (extends length)</li>
          <li>Attach with clamps or velcro</li>
          <li>Table folds, plywood stores separately</li>
        </ol>

        <h3>Cardboard (Emergency Option)</h3>
        <p>
          Desperate times: Flatten large cardboard boxes, tape together to 2&apos;x8&apos;,
          set on any table or sawhorses. Won&apos;t last but works for one party.
        </p>

        <h2>Comparison: DIY vs. Store-Bought</h2>

        <div className="not-prose my-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-dark-800 rounded-xl border border-green-500/30">
              <h4 className="font-bold text-green-400 mb-2">DIY Table ($30-50)</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>+ Customizable design</li>
                <li>+ Pride of building it</li>
                <li>+ Quality materials choice</li>
                <li>- Requires time and tools</li>
                <li>- May not fold as compactly</li>
              </ul>
            </div>
            <div className="p-4 bg-dark-800 rounded-xl border border-blue-500/30">
              <h4 className="font-bold text-blue-400 mb-2">Store-Bought ($60-100)</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>+ Ready to use immediately</li>
                <li>+ Folds compactly</li>
                <li>+ Includes cup markings</li>
                <li>- Generic designs</li>
                <li>- Variable quality</li>
              </ul>
            </div>
          </div>
        </div>

        <p>
          If you&apos;d rather buy, check out our{" "}
          <Link href="/blog/buying-guides/best-beer-pong-tables" className="text-neon-pink hover:underline">
            Best Beer Pong Tables guide
          </Link>.
        </p>

        <div className="not-prose my-8">
          <ProductCard
            productKey="beer pong table"
            variant="full"
            customDescription="Not into DIY? This ready-to-play table ships to your door."
          />
        </div>

        <h2>Ready to Build?</h2>
        <p>
          Head to your local hardware store, grab a sheet of plywood and some folding legs,
          and you&apos;ll have a regulation beer pong table by this weekend. Once it&apos;s done,
          check out our <Link href="/blog/tutorials/beer-pong-tournament-setup" className="text-neon-pink hover:underline">
          tournament setup guide</Link> to put your new table to good use!
        </p>
      </BlogLayout>
    </>
  );
}
