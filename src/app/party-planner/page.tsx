"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Sidebar, useSidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { Card, CardContent, Button, Badge } from "@/components/ui";
import { games } from "@/config/gameData";
import {
  Users,
  Clock,
  Wine,
  Beer,
  Calculator,
  PartyPopper,
  ShoppingCart,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Share2,
  Download,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

// SEO-optimized metadata is in layout or generated separately for static

interface PartyPlan {
  guests: number;
  duration: number; // hours
  drinkingLevel: "light" | "moderate" | "heavy";
  hasNonDrinkers: boolean;
  nonDrinkerCount: number;
}

interface Calculations {
  beerCases: number;
  liquorBottles: number;
  mixers: number;
  cups: number;
  ice: number;
  water: number;
  snacks: string;
  suggestedGames: typeof games;
  totalDrinks: number;
}

const drinkingLevelMultipliers = {
  light: 2,
  moderate: 4,
  heavy: 6,
};

export default function PartyPlannerPage() {
  const { isExpanded } = useSidebar();
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [plan, setPlan] = useState<PartyPlan>({
    guests: 10,
    duration: 4,
    drinkingLevel: "moderate",
    hasNonDrinkers: true,
    nonDrinkerCount: 2,
  });

  const calculations = useMemo((): Calculations => {
    const drinkers = plan.guests - (plan.hasNonDrinkers ? plan.nonDrinkerCount : 0);
    const drinksPerPerson = drinkingLevelMultipliers[plan.drinkingLevel] * (plan.duration / 4);
    const totalDrinks = Math.ceil(drinkers * drinksPerPerson);

    // Beer: 12 per case, assume 60% prefer beer
    const beerDrinks = Math.ceil(totalDrinks * 0.6);
    const beerCases = Math.ceil(beerDrinks / 12);

    // Liquor: ~17 shots per 750ml bottle, assume 40% prefer mixed drinks
    const liquorDrinks = Math.ceil(totalDrinks * 0.4);
    const liquorBottles = Math.ceil(liquorDrinks / 17);

    // Mixers: 2L per 8 drinks
    const mixers = Math.ceil(liquorDrinks / 8);

    // Cups: 2 per person (people lose them)
    const cups = plan.guests * 2;

    // Ice: 1 lb per person
    const ice = plan.guests;

    // Water bottles for non-drinkers and hydration
    const water = plan.guests;

    // Snacks based on duration
    const snacks = plan.duration <= 3
      ? "Light snacks (chips, pretzels)"
      : plan.duration <= 5
        ? "Medium spread (chips, dips, finger foods)"
        : "Full spread (pizza, wings, substantial food)";

    // Suggest games based on group size
    const suggestedGames = games
      .filter(game => {
        const [min, max] = game.players.split("-").map(n => parseInt(n) || 99);
        return plan.guests >= min && plan.guests <= max;
      })
      .slice(0, 5);

    return {
      beerCases,
      liquorBottles,
      mixers,
      cups,
      ice,
      water,
      snacks,
      suggestedGames,
      totalDrinks,
    };
  }, [plan]);

  const handleShare = async () => {
    const text = `Party Plan for ${plan.guests} guests:
- ${calculations.beerCases} cases of beer
- ${calculations.liquorBottles} bottles of liquor
- ${calculations.cups} cups
- ${calculations.ice} lbs of ice

Made with SipWiki Party Planner`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Party Plan - SipWiki",
          text,
          url: window.location.href,
        });
      } catch {
        // User cancelled
      }
    } else {
      navigator.clipboard.writeText(text);
      alert("Party plan copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <Sidebar />

      <main
        className={`
          transition-all duration-300 ease-in-out pb-24 md:pb-8
          ${isExpanded ? "md:ml-56" : "md:ml-16"}
        `}
      >
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-neon-pink/20 via-dark-800 to-neon-purple/20 border-b border-dark-600">
          <div className="max-w-4xl mx-auto px-4 py-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-pink/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-neon-pink" />
              <span className="text-sm text-neon-pink font-medium">Free Party Calculator</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI Party Planner Calculator
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Calculate exactly how much alcohol, cups, and supplies you need for your party.
              Never run out of drinks or over-buy again.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-neon-pink" />
                    Party Details
                  </h2>

                  {/* Guest Count */}
                  <div className="mb-6">
                    <label className="block text-gray-400 mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Number of Guests
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min="2"
                        max="100"
                        value={plan.guests}
                        onChange={(e) => setPlan({ ...plan, guests: parseInt(e.target.value) })}
                        className="flex-1 h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer accent-neon-pink"
                      />
                      <span className="w-16 text-center text-2xl font-bold text-white">
                        {plan.guests}
                      </span>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="mb-6">
                    <label className="block text-gray-400 mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Party Duration (hours)
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min="1"
                        max="12"
                        value={plan.duration}
                        onChange={(e) => setPlan({ ...plan, duration: parseInt(e.target.value) })}
                        className="flex-1 h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer accent-neon-pink"
                      />
                      <span className="w-16 text-center text-2xl font-bold text-white">
                        {plan.duration}h
                      </span>
                    </div>
                  </div>

                  {/* Drinking Level */}
                  <div className="mb-6">
                    <label className="block text-gray-400 mb-3 flex items-center gap-2">
                      <Wine className="w-4 h-4" />
                      Drinking Intensity
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(["light", "moderate", "heavy"] as const).map((level) => (
                        <button
                          key={level}
                          onClick={() => setPlan({ ...plan, drinkingLevel: level })}
                          className={`py-3 px-4 rounded-lg font-medium transition-all ${
                            plan.drinkingLevel === level
                              ? "bg-neon-pink text-white"
                              : "bg-dark-700 text-gray-400 hover:bg-dark-600"
                          }`}
                        >
                          {level.charAt(0).toUpperCase() + level.slice(1)}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      {plan.drinkingLevel === "light" && "~2 drinks per person over 4 hours"}
                      {plan.drinkingLevel === "moderate" && "~4 drinks per person over 4 hours"}
                      {plan.drinkingLevel === "heavy" && "~6 drinks per person over 4 hours"}
                    </p>
                  </div>

                  {/* Advanced Options */}
                  <button
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showAdvanced ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    Advanced Options
                  </button>

                  {showAdvanced && (
                    <div className="mt-4 pt-4 border-t border-dark-600 space-y-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={plan.hasNonDrinkers}
                          onChange={(e) => setPlan({ ...plan, hasNonDrinkers: e.target.checked })}
                          className="w-5 h-5 rounded bg-dark-600 border-dark-500 text-neon-pink focus:ring-neon-pink"
                        />
                        <span className="text-gray-300">Include non-drinkers</span>
                      </label>

                      {plan.hasNonDrinkers && (
                        <div>
                          <label className="block text-gray-400 mb-2 text-sm">
                            Number of non-drinkers
                          </label>
                          <input
                            type="number"
                            min="0"
                            max={plan.guests - 1}
                            value={plan.nonDrinkerCount}
                            onChange={(e) => setPlan({ ...plan, nonDrinkerCount: parseInt(e.target.value) || 0 })}
                            className="w-24 px-3 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <Card className="border-neon-pink/30">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-neon-pink" />
                    Shopping List
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-dark-700/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Beer className="w-5 h-5 text-yellow-500" />
                        <span className="text-gray-300">Beer (cases of 12)</span>
                      </div>
                      <span className="text-2xl font-bold text-white">{calculations.beerCases}</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-dark-700/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Wine className="w-5 h-5 text-purple-500" />
                        <span className="text-gray-300">Liquor (750ml bottles)</span>
                      </div>
                      <span className="text-2xl font-bold text-white">{calculations.liquorBottles}</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-dark-700/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🥤</span>
                        <span className="text-gray-300">Mixers (2L bottles)</span>
                      </div>
                      <span className="text-2xl font-bold text-white">{calculations.mixers}</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-dark-700/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🥤</span>
                        <span className="text-gray-300">Solo Cups</span>
                      </div>
                      <span className="text-2xl font-bold text-white">{calculations.cups}</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-dark-700/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🧊</span>
                        <span className="text-gray-300">Ice (lbs)</span>
                      </div>
                      <span className="text-2xl font-bold text-white">{calculations.ice}</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-dark-700/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">💧</span>
                        <span className="text-gray-300">Water Bottles</span>
                      </div>
                      <span className="text-2xl font-bold text-white">{calculations.water}</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-neon-pink/10 rounded-lg border border-neon-pink/30">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-neon-pink flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">Food Recommendation</p>
                        <p className="text-gray-400 text-sm">{calculations.snacks}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Button onClick={handleShare} variant="outline" className="flex-1">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Link href="/shop" className="flex-1">
                      <Button className="w-full bg-neon-pink hover:bg-neon-pink/80">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Shop Supplies
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Suggested Games */}
              {calculations.suggestedGames.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <PartyPopper className="w-5 h-5 text-neon-purple" />
                      Recommended Games for {plan.guests} People
                    </h3>
                    <div className="space-y-2">
                      {calculations.suggestedGames.map((game) => (
                        <Link
                          key={game.slug}
                          href={`/game/${game.slug}`}
                          className="flex items-center justify-between p-3 bg-dark-700/50 rounded-lg hover:bg-dark-600 transition-colors"
                        >
                          <span className="text-white">{game.name}</span>
                          <Badge variant="purple">{game.players} players</Badge>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* SEO Content Section */}
          <div className="mt-12 prose prose-invert max-w-none">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  How to Plan the Perfect Drinking Party
                </h2>

                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">How Much Alcohol Do I Need for My Party?</h3>
                    <p>
                      The general rule of thumb is 2 drinks per person for the first hour, and 1 drink per hour after that.
                      For a 4-hour party with moderate drinking, plan for about 4 drinks per guest. Our calculator automatically
                      adjusts based on your party duration and drinking intensity.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Beer vs Liquor: What Ratio Should I Buy?</h3>
                    <p>
                      We recommend a 60/40 split between beer and liquor for most parties. Beer is easier to drink casually,
                      while liquor allows for mixed drinks and shots. Adjust based on your crowd - college parties might lean
                      heavier on beer, while cocktail parties need more spirits.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Don&apos;t Forget the Essentials</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Ice - at least 1 pound per person</li>
                      <li>Cups - always buy more than you think (people lose them!)</li>
                      <li>Mixers - cola, sprite, tonic, juice</li>
                      <li>Water - for hydration and non-drinkers</li>
                      <li>Food - drinking on an empty stomach is never a good idea</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Pro Tips for Party Planning</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Buy 10-20% more than calculated to be safe</li>
                      <li>Chill drinks at least 2 hours before guests arrive</li>
                      <li>Have drinking games ready to break the ice</li>
                      <li>Designate a sober driver or arrange rideshare codes</li>
                      <li>Keep a first aid kit and phone chargers handy</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Schema Content */}
          <div className="mt-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      How many drinks should I plan per person?
                    </h3>
                    <p className="text-gray-400">
                      For a standard party, plan 2 drinks for the first hour and 1 drink per hour after.
                      A 4-hour party needs about 4-5 drinks per person. Adjust up for heavy drinkers or
                      down for casual gatherings.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      How much ice do I need for a party?
                    </h3>
                    <p className="text-gray-400">
                      Plan for 1 pound of ice per guest, plus extra for coolers. For a party of 20,
                      you&apos;ll want at least 25-30 pounds of ice. Buy bags the day of and store in
                      coolers or your freezer.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      What&apos;s the best drinking game for large groups?
                    </h3>
                    <p className="text-gray-400">
                      For large groups (10+ people), games like Kings Cup, Flip Cup, and Beer Pong tournaments
                      work best. They keep everyone engaged without requiring everyone to play at once.
                      Check out our <Link href="/games" className="text-neon-pink hover:underline">full games list</Link> for more options.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Should I buy beer or liquor for my party?
                    </h3>
                    <p className="text-gray-400">
                      A mix of both is ideal. We recommend 60% beer and 40% liquor. Beer is great for
                      casual drinking and games like Beer Pong, while liquor allows for mixed drinks
                      and shots. Consider your crowd&apos;s preferences when deciding.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <MobileNav />

      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Party Planner Calculator",
            "description": "Free party planning calculator to determine how much alcohol, cups, and supplies you need for your party.",
            "url": "https://sipwiki.app/party-planner",
            "applicationCategory": "LifestyleApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How many drinks should I plan per person?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For a standard party, plan 2 drinks for the first hour and 1 drink per hour after. A 4-hour party needs about 4-5 drinks per person."
                }
              },
              {
                "@type": "Question",
                "name": "How much ice do I need for a party?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Plan for 1 pound of ice per guest, plus extra for coolers. For a party of 20, you'll want at least 25-30 pounds of ice."
                }
              },
              {
                "@type": "Question",
                "name": "What's the best drinking game for large groups?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For large groups (10+ people), games like Kings Cup, Flip Cup, and Beer Pong tournaments work best."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
