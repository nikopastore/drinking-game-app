import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { QuickAnswer, ComparisonTable } from "@/components/seo";
import Link from "next/link";
import { generateArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Cocktails Guide: Classic & Modern Recipes (2025) | SipWiki",
  description: "Complete guide to cocktails: 50+ classic and modern recipes, bartending tips, ingredient guides, and mixing techniques. From Margaritas to Old Fashioneds, master them all.",
  keywords: [
    "cocktail recipes",
    "best cocktails",
    "how to make cocktails",
    "classic cocktails",
    "mixed drinks",
    "cocktail guide",
    "bartending basics",
    "cocktail ingredients",
    "easy cocktails",
    "popular cocktails 2025",
  ],
  openGraph: {
    title: "Complete Cocktails Guide - 50+ Recipes & Bartending Tips",
    description: "Master cocktail making with our comprehensive guide featuring classic and modern recipes, techniques, and pro tips.",
    type: "article",
    url: "https://sipwiki.app/guides/cocktails",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/cocktails",
  },
};

export default function CocktailsGuidePage() {
  const articleSchema = generateArticleSchema({
    title: "Complete Guide to Cocktails: Recipes, Techniques & Tips",
    description: "Comprehensive cocktail guide with 50+ recipes, bartending techniques, ingredient guides, and expert mixing tips for home bartenders and professionals.",
    author: { name: "SipWiki" },
    publishDate: "2025-01-15",
    url: "https://sipwiki.app/guides/cocktails",
    imageUrl: "/cocktails/margarita.jpg",
    keywords: ["Cocktails", "Bartending", "Recipes", "Mixology"],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-dark-900">
        <Header />
        <Sidebar />

        <main className="max-w-5xl mx-auto px-4 py-8 pb-24 md:pb-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Guide to Cocktails: Master 50+ Classic & Modern Recipes
            </h1>
            <p className="text-gray-400 text-lg">
              From Margaritas to Old Fashioneds, learn how to make every cocktail perfectly. Professional bartending techniques, ingredient guides, and expert tips for beginners and pros.
            </p>
          </div>

          <QuickAnswer
            question="What are the most popular cocktails?"
            answer="The most popular cocktails worldwide are: Margarita (tequila, lime, triple sec), Old Fashioned (whiskey, bitters, sugar), Mojito (rum, mint, lime), Martini (gin/vodka, vermouth), and Cosmopolitan (vodka, cranberry, lime). These classics have stood the test of time due to perfect flavor balance and versatility. Margarita tops the list as the #1 ordered cocktail globally, followed by Old Fashioned which has seen a massive resurgence since 2015."
            tips={[
              "Start with classic cocktails before experimenting",
              "Fresh ingredients make the biggest difference",
              "Proper glassware enhances the experience",
              "Master 5-6 basics, then expand your repertoire"
            ]}
            variant="primary"
          />

          <div className="prose prose-invert max-w-none mt-12">
            <h2>What Are Cocktails?</h2>
            <p>
              A cocktail is a mixed alcoholic drink combining spirits with other ingredients like fruit juices, syrups, bitters, herbs, or carbonated beverages. The term "cocktail" originated in the early 1800s America and has evolved into a sophisticated art form practiced by bartenders worldwide.
            </p>
            <p>
              Modern cocktails range from simple two-ingredient highballs to complex creations requiring specialized techniques and equipment. What separates a great cocktail from a mediocre one is balance - the interplay between sweet, sour, bitter, and strong elements that creates a harmonious drinking experience.
            </p>

            <h3>The Anatomy of a Perfect Cocktail</h3>
            <p>Every well-crafted cocktail consists of these components:</p>
            <ul>
              <li><strong>Base Spirit:</strong> The primary alcohol (vodka, rum, gin, tequila, whiskey, etc.)</li>
              <li><strong>Modifier:</strong> Secondary ingredient that complements the spirit (vermouth, liqueurs, wine)</li>
              <li><strong>Accent:</strong> Small amounts that add complexity (bitters, herbs, spices)</li>
              <li><strong>Mixer:</strong> Non-alcoholic ingredients (juices, sodas, tonic water)</li>
              <li><strong>Garnish:</strong> Visual and aromatic enhancement (citrus peels, herbs, fruit)</li>
            </ul>

            <h2>Top 10 Classic Cocktails Every Bartender Should Master</h2>
            <p>
              These timeless recipes form the foundation of cocktail knowledge. Master these, and you can handle most bar situations:
            </p>

            <h3>1. Margarita - The World's #1 Cocktail</h3>
            <div className="not-prose my-4 p-4 bg-dark-800 rounded-lg border border-neon-pink/30">
              <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Classic Recipe:</strong></p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• 2 oz tequila (100% agave blanco recommended)</li>
                <li>• 1 oz fresh lime juice</li>
                <li>• 0.75 oz Cointreau or triple sec</li>
                <li>• 0.25 oz agave syrup (optional, for sweetness)</li>
                <li>• Salt rim, lime wheel garnish</li>
              </ul>
            </div>
            <p>
              <strong>Why it's popular:</strong> Perfect balance of sweet, sour, and salty. Incredibly versatile - works frozen or on the rocks. Easy to batch for parties. The use of fresh lime juice is non-negotiable; bottled lime juice ruins this drink.
            </p>
            <p>
              <strong>Pro tip:</strong> The secret to a great Margarita is quality tequila and fresh citrus. Skip the pre-made mixes. Salt only half the rim so drinkers can choose their saltiness level.
            </p>

            <h3>2. Old Fashioned - The Timeless Whiskey Classic</h3>
            <div className="not-prose my-4 p-4 bg-dark-800 rounded-lg border border-neon-blue/30">
              <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Classic Recipe:</strong></p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• 2 oz bourbon or rye whiskey</li>
                <li>• 1 sugar cube or 0.25 oz simple syrup</li>
                <li>• 2-3 dashes Angostura bitters</li>
                <li>• Orange peel, cherry garnish</li>
                <li>• Large ice cube</li>
              </ul>
            </div>
            <p>
              <strong>Why it's popular:</strong> The original cocktail (literally - this recipe dates to the 1880s). Showcases quality whiskey without overpowering it. Sophisticated and simple. Has experienced a massive resurgence thanks to shows like Mad Men.
            </p>
            <p>
              <strong>Pro tip:</strong> Use a large format ice cube to minimize dilution. Express the orange peel oils over the drink by twisting it over the glass, then rub the peel around the rim before adding it as garnish.
            </p>

            <h3>3. Mojito - Cuba's Refreshing Gift to the World</h3>
            <div className="not-prose my-4 p-4 bg-dark-800 rounded-lg border border-green-500/30">
              <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Classic Recipe:</strong></p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• 2 oz white rum</li>
                <li>• 1 oz fresh lime juice</li>
                <li>• 2 tsp white sugar</li>
                <li>• 6-8 fresh mint leaves</li>
                <li>• Club soda to top</li>
                <li>• Mint sprig, lime wheel garnish</li>
              </ul>
            </div>
            <p>
              <strong>Why it's popular:</strong> Incredibly refreshing, especially in summer. The mint-lime combination is universally appealing. Looks impressive and tropical without being overly sweet.
            </p>
            <p>
              <strong>Pro tip:</strong> Gently muddle the mint with sugar and lime juice - you want to bruise the mint to release oils, not pulverize it. Slapping the mint sprig garnish between your hands releases aromatic oils.
            </p>

            <h3>4. Martini - The Iconic Sophistication</h3>
            <div className="not-prose my-4 p-4 bg-dark-800 rounded-lg border border-gray-400/30">
              <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Classic Recipe (Gin Martini):</strong></p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• 2.5 oz gin (or vodka for Vodka Martini)</li>
                <li>• 0.5 oz dry vermouth</li>
                <li>• Lemon twist or olives garnish</li>
                <li>• Stirred, not shaken (unless you're James Bond)</li>
              </ul>
            </div>
            <p>
              <strong>Why it's popular:</strong> Ultimate symbol of elegance and refinement. Incredibly simple but demands perfect execution. Highly customizable (dry, dirty, with a twist, etc.).
            </p>
            <p>
              <strong>Pro tip:</strong> Stir with ice for 30 seconds to achieve proper dilution and temperature. A proper Martini should be ice-cold but not watered down. Store gin and vermouth in the freezer for even colder Martinis.
            </p>

            <h3>5. Cosmopolitan - The '90s Icon That Endures</h3>
            <div className="not-prose my-4 p-4 bg-dark-800 rounded-lg border border-pink-500/30">
              <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Classic Recipe:</strong></p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• 1.5 oz vodka (citrus vodka preferred)</li>
                <li>• 1 oz Cointreau</li>
                <li>• 0.5 oz fresh lime juice</li>
                <li>• 0.5 oz cranberry juice</li>
                <li>• Lime wheel or orange peel garnish</li>
              </ul>
            </div>
            <p>
              <strong>Why it's popular:</strong> Beautiful pink color, perfectly balanced sweet-tart flavor. Made famous by Sex and the City. Approachable for vodka drinkers who want something more interesting than a basic mixed drink.
            </p>

            <h3>6. Negroni - The Bitter Italian Masterpiece</h3>
            <div className="not-prose my-4 p-4 bg-dark-800 rounded-lg border border-red-500/30">
              <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Classic Recipe:</strong></p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• 1 oz gin</li>
                <li>• 1 oz Campari</li>
                <li>• 1 oz sweet vermouth</li>
                <li>• Orange peel garnish</li>
                <li>• Built over ice in rocks glass</li>
              </ul>
            </div>
            <p>
              <strong>Why it's popular:</strong> Equal parts simplicity (1:1:1 ratio). Complex, bitter flavor that separates cocktail enthusiasts from casual drinkers. Low-maintenance - just stir and serve.
            </p>

            <h3>7. Daiquiri - The Cuban Classic Done Right</h3>
            <div className="not-prose my-4 p-4 bg-dark-800 rounded-lg border border-yellow-500/30">
              <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Classic Recipe:</strong></p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• 2 oz white rum</li>
                <li>• 1 oz fresh lime juice</li>
                <li>• 0.75 oz simple syrup</li>
                <li>• Lime wheel garnish</li>
                <li>• Shaken and strained</li>
              </ul>
            </div>
            <p>
              <strong>Why it's popular:</strong> Perfect 3-ingredient simplicity. NOT a frozen slushie (that's a different drink). Shows that rum can be sophisticated. Endless variations (strawberry, hemingway, etc.).
            </p>

            <h3>8. Manhattan - The Old Fashioned's Sophisticated Cousin</h3>
            <div className="not-prose my-4 p-4 bg-dark-800 rounded-lg border border-orange-500/30">
              <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Classic Recipe:</strong></p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• 2 oz rye whiskey (or bourbon)</li>
                <li>• 1 oz sweet vermouth</li>
                <li>• 2 dashes Angostura bitters</li>
                <li>• Luxardo cherry garnish</li>
                <li>• Stirred and strained</li>
              </ul>
            </div>
            <p>
              <strong>Why it's popular:</strong> More complex than an Old Fashioned thanks to vermouth. Perfect pre-dinner cocktail. New York City's signature drink.
            </p>

            <h3>9. Whiskey Sour - The Perfect Introduction to Sours</h3>
            <div className="not-prose my-4 p-4 bg-dark-800 rounded-lg border border-yellow-400/30">
              <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Classic Recipe:</strong></p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• 2 oz bourbon whiskey</li>
                <li>• 0.75 oz fresh lemon juice</li>
                <li>• 0.5 oz simple syrup</li>
                <li>• Optional: egg white for foam</li>
                <li>• Cherry and orange slice garnish</li>
              </ul>
            </div>
            <p>
              <strong>Why it's popular:</strong> Sweet-sour balance appeals to almost everyone. Adding egg white (optional) creates a beautiful foam cap. Base template for countless variations.
            </p>

            <h3>10. Espresso Martini - The Modern Classic</h3>
            <div className="not-prose my-4 p-4 bg-dark-800 rounded-lg border border-brown-500/30">
              <p className="text-sm text-gray-400 mb-2"><strong className="text-white">Classic Recipe:</strong></p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• 2 oz vodka</li>
                <li>• 1 oz fresh espresso (cooled)</li>
                <li>• 0.5 oz coffee liqueur (Kahlua)</li>
                <li>• 0.25 oz simple syrup</li>
                <li>• 3 coffee beans garnish</li>
              </ul>
            </div>
            <p>
              <strong>Why it's popular:</strong> Combines two of the world's favorite things: alcohol and caffeine. Perfect after-dinner drink. The foam created by shaking fresh espresso is visually stunning.
            </p>
          </div>

          <div className="my-12">
            <h2 className="text-2xl font-bold text-white mb-6">Cocktail Comparison: Find Your Perfect Drink</h2>
            <ComparisonTable
              headers={["Cocktail", "Base Spirit", "Difficulty", "Best For", "Flavor Profile"]}
              rows={[
                ["Margarita", "Tequila", "Easy", "Parties, Summer", "Sweet, Sour, Salty"],
                ["Old Fashioned", "Whiskey", "Easy", "Sipping, Winter", "Strong, Bitter, Sweet"],
                ["Mojito", "Rum", "Medium", "Summer, Daytime", "Fresh, Minty, Citrus"],
                ["Martini", "Gin/Vodka", "Medium", "Sophisticated Occasions", "Dry, Herbal, Clean"],
                ["Espresso Martini", "Vodka", "Medium", "After Dinner", "Coffee, Sweet, Strong"],
                ["Negroni", "Gin", "Easy", "Aperitif", "Bitter, Herbal, Complex"],
              ]}
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <h2>How to Choose the Right Cocktail</h2>
            <p>
              Selecting the perfect cocktail depends on several factors. Here's a decision framework:
            </p>

            <h3>By Occasion</h3>
            <ul>
              <li><strong>House Party:</strong> Margaritas, Mojitos, Sangria (easy to batch)</li>
              <li><strong>Romantic Date:</strong> French 75, Sidecar, Champagne Cocktail</li>
              <li><strong>Business Dinner:</strong> Old Fashioned, Manhattan, Dry Martini</li>
              <li><strong>Summer BBQ:</strong> Paloma, Aperol Spritz, Tom Collins</li>
              <li><strong>Winter Evening:</strong> Hot Toddy, Irish Coffee, Boulevardier</li>
              <li><strong>Brunch:</strong> Mimosa, Bloody Mary, Bellini</li>
            </ul>

            <h3>By Base Spirit Preference</h3>
            <ul>
              <li><strong>Vodka Lovers:</strong> Moscow Mule, Cosmopolitan, Espresso Martini</li>
              <li><strong>Whiskey Enthusiasts:</strong> Old Fashioned, Manhattan, Whiskey Sour</li>
              <li><strong>Tequila Fans:</strong> Margarita, Paloma, Tequila Sunrise</li>
              <li><strong>Rum Aficionados:</strong> Mojito, Daiquiri, Mai Tai, Piña Colada</li>
              <li><strong>Gin Devotees:</strong> Martini, Negroni, Tom Collins, Gin & Tonic</li>
            </ul>

            <h3>By Flavor Profile</h3>
            <ul>
              <li><strong>Sweet & Fruity:</strong> Piña Colada, Sex on the Beach, Strawberry Daiquiri</li>
              <li><strong>Refreshing & Light:</strong> Mojito, Aperol Spritz, Gin & Tonic</li>
              <li><strong>Strong & Boozy:</strong> Manhattan, Sazerac, Boulevardier</li>
              <li><strong>Bitter & Complex:</strong> Negroni, Americano, Campari Soda</li>
              <li><strong>Sour & Tart:</strong> Margarita, Whiskey Sour, Lemon Drop</li>
            </ul>

            <h2>Essential Cocktail Ingredients & Tools</h2>

            <h3>The Home Bar Essentials</h3>
            <p>Start with these spirits to make 80% of classic cocktails:</p>
            <ul>
              <li><strong>Vodka:</strong> A neutral mid-shelf bottle (Tito's, Absolut, Ketel One)</li>
              <li><strong>Gin:</strong> London Dry style (Tanqueray, Beefeater)</li>
              <li><strong>Rum:</strong> White rum for Mojitos/Daiquiris (Havana Club, Bacardi)</li>
              <li><strong>Tequila:</strong> 100% agave blanco (Espolòn, Olmeca Altos)</li>
              <li><strong>Whiskey:</strong> Bourbon for versatility (Buffalo Trace, Four Roses)</li>
            </ul>

            <h3>Modifiers & Liqueurs</h3>
            <ul>
              <li><strong>Triple Sec/Cointreau:</strong> For Margaritas and Sidecars</li>
              <li><strong>Sweet & Dry Vermouth:</strong> Manhattans and Martinis</li>
              <li><strong>Campari:</strong> Negronis and Spritzes</li>
              <li><strong>Coffee Liqueur:</strong> Espresso Martinis, White Russians</li>
            </ul>

            <h3>Fresh Ingredients</h3>
            <ul>
              <li><strong>Citrus:</strong> Lemons, limes, oranges (always fresh, never bottled juice)</li>
              <li><strong>Herbs:</strong> Fresh mint, basil, rosemary</li>
              <li><strong>Simple Syrup:</strong> Equal parts sugar and water (make your own)</li>
              <li><strong>Bitters:</strong> Angostura and orange bitters</li>
            </ul>

            <h3>Essential Tools</h3>
            <ul>
              <li><strong>Cocktail Shaker:</strong> Boston shaker (two-piece) or Cobbler shaker (three-piece)</li>
              <li><strong>Jigger:</strong> For accurate measuring (crucial!)</li>
              <li><strong>Bar Spoon:</strong> For stirring Martinis and Manhattans</li>
              <li><strong>Strainer:</strong> Hawthorne strainer for shaken drinks</li>
              <li><strong>Muddler:</strong> For Mojitos and Old Fashioneds</li>
              <li><strong>Citrus Juicer:</strong> Fresh juice is non-negotiable</li>
              <li><strong>Peeler:</strong> For citrus twists and garnishes</li>
            </ul>

            <h2>Bartending Techniques Every Home Mixologist Should Know</h2>

            <h3>1. Shaking vs. Stirring</h3>
            <p><strong>Shake when:</strong> The cocktail contains citrus juice, cream, egg whites, or other thick ingredients. Shaking aerates and chills quickly. Examples: Margarita, Daiquiri, Whiskey Sour.</p>
            <p><strong>Stir when:</strong> The cocktail is spirit-forward with all liquid ingredients. Stirring maintains clarity and texture. Examples: Martini, Manhattan, Negroni.</p>
            <p><strong>Rule of thumb:</strong> If it's clear, stir it. If it has juice or dairy, shake it.</p>

            <h3>2. Proper Measuring</h3>
            <p>
              NEVER free-pour when learning. Use a jigger every single time until ratios are muscle memory. Cocktails are about precise balance - too much of any ingredient ruins the drink.
            </p>

            <h3>3. Ice Matters More Than You Think</h3>
            <ul>
              <li><strong>Large cubes:</strong> Melt slowly, perfect for Old Fashioneds and Negronis</li>
              <li><strong>Standard cubes:</strong> All-purpose for shaking and serving</li>
              <li><strong>Crushed ice:</strong> For Mojitos, Mint Juleps, Tiki drinks</li>
              <li><strong>Clear ice:</strong> Looks professional, melts slowly (directional freezing technique)</li>
            </ul>

            <h3>4. The Art of the Garnish</h3>
            <p>
              Garnishes aren't just decoration - they add aroma and flavor. Express citrus oils over the drink by twisting peels. Use fresh herbs that complement the cocktail. A properly executed garnish is the sign of a pro.
            </p>

            <h2>Cocktails by Season</h2>

            <h3>Spring Cocktails (March-May)</h3>
            <ul>
              <li><strong>Aperol Spritz:</strong> Light, bubbly, and refreshing</li>
              <li><strong>French 75:</strong> Champagne cocktail with gin and lemon</li>
              <li><strong>Pimm's Cup:</strong> British summer classic</li>
              <li><strong>Aviation:</strong> Floral gin cocktail with crème de violette</li>
            </ul>

            <h3>Summer Cocktails (June-August)</h3>
            <ul>
              <li><strong>Mojito:</strong> The ultimate refresher</li>
              <li><strong>Paloma:</strong> Tequila and grapefruit soda</li>
              <li><strong>Tom Collins:</strong> Gin, lemon, soda - simple perfection</li>
              <li><strong>Frozen Daiquiri:</strong> When it's too hot for anything else</li>
            </ul>

            <h3>Fall Cocktails (September-November)</h3>
            <ul>
              <li><strong>Boulevardier:</strong> Whiskey Negroni for cooler weather</li>
              <li><strong>Apple Cider Whiskey Sour:</strong> Seasonal twist on a classic</li>
              <li><strong>Paper Plane:</strong> Modern classic with amaro</li>
              <li><strong>Pumpkin Spice Espresso Martini:</strong> Embrace the season</li>
            </ul>

            <h3>Winter Cocktails (December-February)</h3>
            <ul>
              <li><strong>Hot Toddy:</strong> Whiskey, honey, lemon, hot water</li>
              <li><strong>Irish Coffee:</strong> Coffee, whiskey, cream</li>
              <li><strong>Eggnog (with rum or bourbon):</strong> Holiday classic</li>
              <li><strong>Mulled Wine:</strong> Spiced warm wine</li>
            </ul>

            <h2>Cocktail Families: Understanding the Categories</h2>

            <h3>Sours</h3>
            <p>Spirit + Citrus + Sweetener = Sour family. Examples: Margarita, Daiquiri, Whiskey Sour, Sidecar.</p>

            <h3>Highballs</h3>
            <p>Spirit + Mixer served tall over ice. Examples: Gin & Tonic, Rum & Coke, Vodka Soda, Tom Collins.</p>

            <h3>Martinis</h3>
            <p>Spirit + Vermouth, stirred and served up. Examples: Dry Martini, Vodka Martini, Dirty Martini.</p>

            <h3>Tiki Drinks</h3>
            <p>Rum-based, tropical, often complex with multiple rums and syrups. Examples: Mai Tai, Zombie, Painkiller.</p>

            <h3>Juleps & Smashes</h3>
            <p>Spirit muddled with mint and sugar over crushed ice. Examples: Mint Julep, Whiskey Smash.</p>

            <h2>Common Cocktail Mistakes (And How to Avoid Them)</h2>

            <h3>1. Using Bottled Citrus Juice</h3>
            <p><strong>The mistake:</strong> Bottled lime/lemon juice tastes artificial and ruins cocktails.</p>
            <p><strong>The fix:</strong> Always use fresh-squeezed citrus. Buy a citrus juicer. It takes 30 extra seconds and transforms your drinks.</p>

            <h3>2. Over-Shaking or Under-Shaking</h3>
            <p><strong>The mistake:</strong> Shaking for 5 seconds doesn't chill or dilute enough. Shaking for 2 minutes over-dilutes.</p>
            <p><strong>The fix:</strong> Shake vigorously for 10-15 seconds until the shaker frosts over. That's the sweet spot.</p>

            <h3>3. Skipping the Jigger</h3>
            <p><strong>The mistake:</strong> Free-pouring leads to inconsistent, unbalanced drinks.</p>
            <p><strong>The fix:</strong> Use a jigger. Even professional bartenders measure. Precision is key.</p>

            <h3>4. Wrong Ice, Wrong Glass</h3>
            <p><strong>The mistake:</strong> Serving an Old Fashioned in a pint glass with crushed ice.</p>
            <p><strong>The fix:</strong> Match ice and glassware to the drink style. It affects temperature, dilution, and presentation.</p>

            <h3>5. Neglecting the Garnish</h3>
            <p><strong>The mistake:</strong> Skipping garnishes or using dried-out limes from last month.</p>
            <p><strong>The fix:</strong> Fresh, properly prepared garnishes complete the drink. They're not optional.</p>

            <h2>FAQ: Cocktail Making</h2>

            <h3>Do I need expensive spirits to make good cocktails?</h3>
            <p>
              No! Mid-shelf spirits ($20-35/bottle) work perfectly for mixed drinks. Save the top-shelf bottles for sipping neat. The difference between $25 vodka and $50 vodka disappears in a Cosmopolitan.
            </p>

            <h3>Can I make cocktails without a shaker?</h3>
            <p>
              Yes - use a mason jar with a tight lid. It works! For stirred drinks, use a tall glass and a spoon. However, a basic cocktail shaker costs $10-15 and is worth the investment.
            </p>

            <h3>How long do cocktail ingredients last?</h3>
            <ul>
              <li><strong>Spirits:</strong> Years if stored properly (unopened liqueurs can last indefinitely)</li>
              <li><strong>Vermouth:</strong> 1-2 months refrigerated after opening</li>
              <li><strong>Citrus juice:</strong> Use immediately, within hours at most</li>
              <li><strong>Simple syrup:</strong> 2 weeks refrigerated, 1 month with vodka added</li>
            </ul>

            <h3>What's the difference between shaking and stirring?</h3>
            <p>
              Shaking creates tiny ice chips that cloud the drink, adds air (good for juice-based cocktails), and chills faster. Stirring keeps drinks crystal clear, maintains silky texture, and is gentler (perfect for spirit-forward cocktails).
            </p>

            <h3>How do I batch cocktails for a party?</h3>
            <p>
              Multiply the recipe by number of servings, combine all ingredients except carbonation and ice. Store in the fridge. When serving, add ice to individual glasses and pour, topping with any carbonated elements. Margaritas, Mojitos, and Sangria batch beautifully.
            </p>

            <h2>Conclusion</h2>
            <p>
              Mastering cocktails is a journey, not a destination. Start with the classics, understand the fundamentals, and build from there. The difference between a good cocktail and a great one often comes down to fresh ingredients, proper technique, and attention to detail. Whether you're mixing drinks for yourself or hosting a party, these recipes and techniques will serve you well.
            </p>
            <p>
              Remember: cocktails are meant to be enjoyed, not stressed over. Have fun, experiment, and don't be afraid to adjust recipes to your taste. The best cocktail is the one you're drinking with good company.
            </p>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-br from-neon-pink/10 to-neon-blue/10 rounded-xl border border-neon-pink/30">
            <h3 className="text-xl font-bold text-white mb-3">More Cocktail Resources</h3>
            <p className="text-gray-300 mb-4">
              Explore our complete cocktail library and tools:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/cocktails"
                className="px-4 py-2 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
              >
                Browse All Cocktails
              </Link>
              <Link
                href="/bac-calculator"
                className="px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
              >
                BAC Calculator
              </Link>
              <Link
                href="/party-planner"
                className="px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
              >
                Party Planner
              </Link>
            </div>
          </div>
        </main>

        <MobileNav />
      </div>
    </>
  );
}
