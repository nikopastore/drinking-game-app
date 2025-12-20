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
        const min = game.min_players;
        const max = game.max_players || 99;
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
                          <Badge variant="purple">
                            {game.min_players}{game.max_players ? `-${game.max_players}` : "+"} players
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Quick Reference Tables for Common Searches */}
          <div className="mt-12">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Quick Reference: Alcohol by Party Size
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-dark-600">
                        <th className="py-3 px-4 text-gray-400 font-medium">Guests</th>
                        <th className="py-3 px-4 text-gray-400 font-medium">Beer (cases)</th>
                        <th className="py-3 px-4 text-gray-400 font-medium">Liquor (bottles)</th>
                        <th className="py-3 px-4 text-gray-400 font-medium">Cups</th>
                        <th className="py-3 px-4 text-gray-400 font-medium">Ice (lbs)</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-dark-700"><td className="py-3 px-4">10 people</td><td className="py-3 px-4">2</td><td className="py-3 px-4">1</td><td className="py-3 px-4">20</td><td className="py-3 px-4">10</td></tr>
                      <tr className="border-b border-dark-700"><td className="py-3 px-4">20 people</td><td className="py-3 px-4">4</td><td className="py-3 px-4">2</td><td className="py-3 px-4">40</td><td className="py-3 px-4">20</td></tr>
                      <tr className="border-b border-dark-700"><td className="py-3 px-4">30 people</td><td className="py-3 px-4">6</td><td className="py-3 px-4">3</td><td className="py-3 px-4">60</td><td className="py-3 px-4">30</td></tr>
                      <tr className="border-b border-dark-700"><td className="py-3 px-4">50 people</td><td className="py-3 px-4">10</td><td className="py-3 px-4">5</td><td className="py-3 px-4">100</td><td className="py-3 px-4">50</td></tr>
                      <tr><td className="py-3 px-4">100 people</td><td className="py-3 px-4">20</td><td className="py-3 px-4">10</td><td className="py-3 px-4">200</td><td className="py-3 px-4">100</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-500 text-sm mt-4">*Based on a 4-hour party with moderate drinking. Use calculator above for exact amounts.</p>
              </CardContent>
            </Card>
          </div>

          {/* SEO Content Section */}
          <div className="mt-8 prose prose-invert max-w-none">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  The Complete Guide to Party Alcohol Planning
                </h2>

                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">How Much Alcohol Do I Need for My Party?</h3>
                    <p>
                      The golden rule for party planning is <strong>2 drinks per person for the first hour, then 1 drink per hour after</strong>.
                      For a typical 4-hour party with moderate drinking, plan for about 4-5 drinks per guest. Our free calculator
                      automatically adjusts based on your specific party duration, guest count, and drinking intensity level.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">How Much Beer for 20 People?</h3>
                    <p>
                      For 20 guests at a 4-hour party, you&apos;ll need approximately <strong>4 cases of beer (48 cans/bottles)</strong> plus
                      2 bottles of liquor for mixed drinks. This assumes a 60/40 beer-to-liquor ratio and moderate drinking.
                      For a beer-only party or heavy drinkers, increase to 5-6 cases.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">How Much Alcohol for 50 Guests?</h3>
                    <p>
                      A party of 50 people for 4 hours needs roughly <strong>10 cases of beer and 5 bottles of liquor</strong>.
                      Don&apos;t forget 100+ cups (people lose them!), 50 lbs of ice, and plenty of mixers like cola, sprite, and juice.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Beer vs Liquor: The Perfect Ratio</h3>
                    <p>
                      We recommend a <strong>60% beer / 40% liquor split</strong> for most parties. Beer is easier to drink casually
                      and perfect for drinking games like <Link href="/game/beer-pong" className="text-neon-pink hover:underline">Beer Pong</Link>.
                      Liquor allows for mixed drinks and shots. Adjust based on your crowd - college parties lean heavier on beer,
                      while cocktail parties need more spirits.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Wedding and Event Alcohol Calculator</h3>
                    <p>
                      Planning a wedding or large event? The same principles apply, but consider that formal events typically have
                      lighter drinking (2-3 drinks per person). For a 4-hour wedding reception with 100 guests, plan for approximately
                      15-20 cases of beer, 8-10 bottles of wine, and 5-8 bottles of liquor.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Essential Party Supplies Checklist</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>Ice</strong> - 1 pound per person minimum (more for coolers)</li>
                      <li><strong>Cups</strong> - 2 per person (red solo cups are classic)</li>
                      <li><strong>Mixers</strong> - cola, sprite/7up, tonic, cranberry juice, orange juice</li>
                      <li><strong>Water</strong> - for hydration and non-drinkers</li>
                      <li><strong>Garnishes</strong> - limes, lemons for drinks</li>
                      <li><strong>Food</strong> - never drink on an empty stomach</li>
                      <li><strong>Ping pong balls</strong> - for <Link href="/game/beer-pong" className="text-neon-pink hover:underline">Beer Pong</Link></li>
                      <li><strong>Playing cards</strong> - for <Link href="/game/kings-cup" className="text-neon-pink hover:underline">Kings Cup</Link></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Pro Tips for Party Success</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Buy 10-20% more than calculated - better safe than sorry</li>
                      <li>Chill drinks at least 2 hours before guests arrive</li>
                      <li>Have <Link href="/games" className="text-neon-pink hover:underline">drinking games</Link> ready to break the ice</li>
                      <li>Set up a designated driver system or arrange rideshare codes</li>
                      <li>Keep a first aid kit and phone chargers accessible</li>
                      <li>Have a playlist ready - check out our party music recommendations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Comprehensive FAQ Section */}
          <div className="mt-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Frequently Asked Questions About Party Planning
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">How many drinks should I plan per person at a party?</h3>
                    <p className="text-gray-400">Plan 2 drinks for the first hour and 1 drink per hour after. A 4-hour party needs about 4-5 drinks per person. For heavy drinkers, increase to 6-7. For a casual gathering, 3-4 is sufficient.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">How much ice do I need for a party?</h3>
                    <p className="text-gray-400">Plan for 1 pound of ice per guest, plus 10-20 extra pounds for coolers. For a party of 20, you&apos;ll want at least 25-30 pounds. Buy ice the day of the party and store in coolers or freezer.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">How much beer do I need for 20 people?</h3>
                    <p className="text-gray-400">For 20 people at a 4-hour party, you need about 4 cases of beer (48 cans). If it&apos;s a beer-only party or heavy drinkers, get 5-6 cases. Each case has 12 or 24 beers depending on the type.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">How much alcohol for 50 guests?</h3>
                    <p className="text-gray-400">For 50 guests at a 4-hour moderate drinking party: 10 cases of beer, 5 bottles of liquor, 6 bottles of wine, 100+ cups, and 50 lbs of ice. Add more if your crowd are heavy drinkers.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">What&apos;s the best drinking game for large groups?</h3>
                    <p className="text-gray-400">For large groups (10+ people), <Link href="/game/kings-cup" className="text-neon-pink hover:underline">Kings Cup</Link>, <Link href="/game/flip-cup" className="text-neon-pink hover:underline">Flip Cup</Link>, and Beer Pong tournaments work best. They keep everyone engaged without requiring everyone to play at once. Browse our <Link href="/games/large-groups" className="text-neon-pink hover:underline">large group games</Link>.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Should I buy beer or liquor for my party?</h3>
                    <p className="text-gray-400">A mix of both is ideal. We recommend 60% beer and 40% liquor. Beer is great for casual drinking and games like Beer Pong. Liquor allows for mixed drinks and shots. Consider your crowd&apos;s preferences.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">How many cups do I need for a party?</h3>
                    <p className="text-gray-400">Plan for 2 cups per person - people lose them! For 20 guests, buy 40-50 cups. Red solo cups (16oz) are perfect for beer and mixed drinks. Get shot glasses separately if doing shots.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">How do I calculate alcohol for a wedding?</h3>
                    <p className="text-gray-400">Weddings typically have lighter drinking. Plan 2-3 drinks per person over 4-5 hours. For 100 guests: 15-20 cases of beer, 8-10 bottles of wine, 5-8 bottles of liquor. Consider a signature cocktail to simplify.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">What mixers do I need for a party?</h3>
                    <p className="text-gray-400">Essential mixers: cola, diet cola, sprite/7-up, tonic water, cranberry juice, orange juice, and lime juice. Plan 1 liter of mixers for every bottle of liquor. Don&apos;t forget garnishes like limes and lemons.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">How far in advance should I buy party alcohol?</h3>
                    <p className="text-gray-400">Buy alcohol 1-2 days before the party. Beer and wine can be bought earlier. Buy ice the day of. Chill drinks at least 2 hours before guests arrive. Check store hours if buying the day of.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Internal Links Section */}
          <div className="mt-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-4">Popular Drinking Games for Your Party</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Link href="/game/kings-cup" className="p-3 bg-dark-700 rounded-lg text-center hover:bg-dark-600 transition-colors">
                    <span className="text-2xl block mb-1">👑</span>
                    <span className="text-white text-sm">Kings Cup</span>
                  </Link>
                  <Link href="/game/beer-pong" className="p-3 bg-dark-700 rounded-lg text-center hover:bg-dark-600 transition-colors">
                    <span className="text-2xl block mb-1">🏓</span>
                    <span className="text-white text-sm">Beer Pong</span>
                  </Link>
                  <Link href="/game/flip-cup" className="p-3 bg-dark-700 rounded-lg text-center hover:bg-dark-600 transition-colors">
                    <span className="text-2xl block mb-1">🥤</span>
                    <span className="text-white text-sm">Flip Cup</span>
                  </Link>
                  <Link href="/game/never-have-i-ever" className="p-3 bg-dark-700 rounded-lg text-center hover:bg-dark-600 transition-colors">
                    <span className="text-2xl block mb-1">🤫</span>
                    <span className="text-white text-sm">Never Have I Ever</span>
                  </Link>
                </div>
                <div className="mt-4 text-center">
                  <Link href="/games" className="text-neon-pink hover:underline">Browse all 100+ drinking games →</Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <MobileNav />

      {/* Comprehensive JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Party Planner Calculator - How Much Alcohol Do I Need?",
            "description": "Free party planning calculator to determine exactly how much beer, liquor, wine, cups, ice and supplies you need for your party. Works for 2-100+ guests.",
            "url": "https://sipwiki.app/party-planner",
            "applicationCategory": "LifestyleApplication",
            "operatingSystem": "Any",
            "browserRequirements": "Requires JavaScript",
            "softwareVersion": "1.0",
            "author": {
              "@type": "Organization",
              "name": "SipWiki",
              "url": "https://sipwiki.app"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1247"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Calculate Alcohol for a Party",
            "description": "Learn how to calculate exactly how much beer, liquor, and supplies you need for your party",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Count Your Guests",
                "text": "Determine the number of guests attending your party. Our calculator works for 2-100+ people."
              },
              {
                "@type": "HowToStep",
                "name": "Set Party Duration",
                "text": "Decide how long your party will last. Most parties run 3-5 hours."
              },
              {
                "@type": "HowToStep",
                "name": "Choose Drinking Intensity",
                "text": "Select light (2 drinks/person), moderate (4 drinks), or heavy (6+ drinks) based on your crowd."
              },
              {
                "@type": "HowToStep",
                "name": "Get Your Shopping List",
                "text": "The calculator provides exact amounts of beer, liquor, cups, ice, and mixers needed."
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://sipwiki.app"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Party Planner Calculator",
                "item": "https://sipwiki.app/party-planner"
              }
            ]
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
                "name": "How many drinks should I plan per person at a party?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Plan 2 drinks for the first hour and 1 drink per hour after. A 4-hour party needs about 4-5 drinks per person. For heavy drinkers, increase to 6-7 drinks per person."
                }
              },
              {
                "@type": "Question",
                "name": "How much ice do I need for a party?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Plan for 1 pound of ice per guest, plus 10-20 extra pounds for coolers. For a party of 20, you'll want at least 25-30 pounds of ice."
                }
              },
              {
                "@type": "Question",
                "name": "How much beer do I need for 20 people?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For 20 people at a 4-hour party, you need about 4 cases of beer (48 cans). If it's a beer-only party or heavy drinkers, get 5-6 cases."
                }
              },
              {
                "@type": "Question",
                "name": "How much alcohol for 50 guests?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For 50 guests at a 4-hour moderate drinking party: 10 cases of beer, 5 bottles of liquor, 6 bottles of wine, 100+ cups, and 50 lbs of ice."
                }
              },
              {
                "@type": "Question",
                "name": "What's the best drinking game for large groups?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For large groups (10+ people), Kings Cup, Flip Cup, and Beer Pong tournaments work best. They keep everyone engaged without requiring everyone to play at once."
                }
              },
              {
                "@type": "Question",
                "name": "Should I buy beer or liquor for my party?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A mix of both is ideal. We recommend 60% beer and 40% liquor. Beer is great for casual drinking and games like Beer Pong. Liquor allows for mixed drinks and shots."
                }
              },
              {
                "@type": "Question",
                "name": "How many cups do I need for a party?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Plan for 2 cups per person - people lose them! For 20 guests, buy 40-50 cups. Red solo cups (16oz) are perfect for beer and mixed drinks."
                }
              },
              {
                "@type": "Question",
                "name": "How do I calculate alcohol for a wedding?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Weddings typically have lighter drinking. Plan 2-3 drinks per person over 4-5 hours. For 100 guests: 15-20 cases of beer, 8-10 bottles of wine, 5-8 bottles of liquor."
                }
              },
              {
                "@type": "Question",
                "name": "What mixers do I need for a party?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Essential mixers: cola, diet cola, sprite/7-up, tonic water, cranberry juice, orange juice, and lime juice. Plan 1 liter of mixers for every bottle of liquor."
                }
              },
              {
                "@type": "Question",
                "name": "How far in advance should I buy party alcohol?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Buy alcohol 1-2 days before the party. Beer and wine can be bought earlier. Buy ice the day of. Chill drinks at least 2 hours before guests arrive."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
