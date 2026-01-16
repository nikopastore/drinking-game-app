import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Card, CardContent, Button } from "@/components/ui";
import { Calculator, PartyPopper } from "lucide-react";

export const metadata: Metadata = {
  title: "Alcohol Calculator - How Much Do You Need For Your Party | SipWiki",
  description:
    "Plan the right amount of beer, wine, liquor, and supplies for any party size. Use the SipWiki alcohol calculator guide and get precise estimates.",
  keywords: [
    "alcohol calculator",
    "alcohol for party calculator",
    "how much alcohol do i need",
    "party alcohol needs",
    "wedding alcohol calculator",
    "event alcohol calculator",
    "alcohol quantity calculator",
  ],
  openGraph: {
    title: "Alcohol Calculator - How Much Do You Need For Your Party",
    description:
      "Plan the right amount of beer, wine, liquor, and supplies for any party size.",
    type: "website",
    url: "https://sipwiki.app/alcohol-calculator",
  },
  alternates: {
    canonical: "https://sipwiki.app/alcohol-calculator",
  },
};

export default function AlcoholCalculatorPage() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Alcohol Calculator for Parties
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Use this guide to estimate how much beer, wine, liquor, and supplies you
            need for your next party. If you want exact numbers by guest count and
            party length, jump straight to the SipWiki party planner calculator.
          </p>
        </header>

        <Card className="border-neon-pink/30">
          <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-center gap-3">
              <Calculator className="h-6 w-6 text-neon-pink" />
              <div>
                <h2 className="text-xl font-bold text-white">
                  Get a precise shopping list
                </h2>
                <p className="text-gray-400 text-sm">
                  Plug in your guest count, party length, and drinking level for exact totals.
                </p>
              </div>
            </div>
            <Link href="/party-planner" className="md:ml-auto">
              <Button className="bg-neon-pink hover:bg-neon-pink/80">
                Open Party Planner
              </Button>
            </Link>
          </CardContent>
        </Card>

        <section className="prose prose-invert max-w-none text-gray-300">
          <h2>Quick alcohol planning formula</h2>
          <p>
            A reliable starting point is: <strong>2 drinks per person for the first hour,
            then 1 drink per person for every additional hour</strong>. For a 4-hour party,
            that works out to roughly 4 to 5 drinks per guest. You can adjust up for a
            high-energy crowd or down if you expect lighter drinking.
          </p>
          <p>
            Once you have the total drink count, split it by preference. A common mix is
            60% beer, 30% liquor, and 10% wine. If your group leans toward cocktails,
            increase the liquor share. If it is a tailgate or casual hangout, lean heavier
            on beer.
          </p>

          <h2>Quick estimates by party size</h2>
          <p>
            These numbers assume a 4-hour party with moderate drinking. Use them for a
            fast sanity check, then refine with the calculator.
          </p>
        </section>

        <Card>
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-dark-600 text-gray-400">
                    <th className="py-2">Guests</th>
                    <th className="py-2">Beer (cases)</th>
                    <th className="py-2">Liquor (750ml)</th>
                    <th className="py-2">Cups</th>
                    <th className="py-2">Ice (lbs)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-dark-700">
                    <td className="py-2">10</td>
                    <td className="py-2">2</td>
                    <td className="py-2">1</td>
                    <td className="py-2">20</td>
                    <td className="py-2">10</td>
                  </tr>
                  <tr className="border-b border-dark-700">
                    <td className="py-2">20</td>
                    <td className="py-2">4</td>
                    <td className="py-2">2</td>
                    <td className="py-2">40</td>
                    <td className="py-2">20</td>
                  </tr>
                  <tr className="border-b border-dark-700">
                    <td className="py-2">30</td>
                    <td className="py-2">6</td>
                    <td className="py-2">3</td>
                    <td className="py-2">60</td>
                    <td className="py-2">30</td>
                  </tr>
                  <tr className="border-b border-dark-700">
                    <td className="py-2">50</td>
                    <td className="py-2">10</td>
                    <td className="py-2">5</td>
                    <td className="py-2">100</td>
                    <td className="py-2">50</td>
                  </tr>
                  <tr>
                    <td className="py-2">100</td>
                    <td className="py-2">20</td>
                    <td className="py-2">10</td>
                    <td className="py-2">200</td>
                    <td className="py-2">100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-sm mt-3">
              These are estimates. Adjust up for longer events or heavier drinking.
            </p>
          </CardContent>
        </Card>

        <section className="prose prose-invert max-w-none text-gray-300">
          <h2>Adjust for your crowd</h2>
          <ul>
            <li><strong>Light drinking:</strong> subtract 20-30% from totals.</li>
            <li><strong>Heavy drinking:</strong> add 20-30%, especially for liquor.</li>
            <li><strong>Non-drinkers:</strong> count them for water and snacks, not alcohol.</li>
            <li><strong>Outdoor events:</strong> increase water, ice, and light beer.</li>
            <li><strong>Game-heavy parties:</strong> keep extra cups and ping pong balls.</li>
          </ul>

          <h2>Make it a complete party plan</h2>
          <p>
            The calculator will also estimate mixers, cups, and ice. Combine those numbers
            with a few crowd-friendly games and you are set. For ideas, explore the
            <Link href="/guides" className="text-neon-pink hover:underline"> drinking game guides</Link>
            {" "}or browse the <Link href="/cocktails" className="text-neon-pink hover:underline">cocktail recipes</Link>
            {" "}for a simple signature drink.
          </p>
        </section>

        <Card className="bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 border border-neon-pink/30">
          <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-center gap-3">
              <PartyPopper className="h-6 w-6 text-neon-pink" />
              <div>
                <h2 className="text-xl font-bold text-white">
                  Ready for exact numbers?
                </h2>
                <p className="text-gray-300 text-sm">
                  Use the interactive planner for a personalized shopping list.
                </p>
              </div>
            </div>
            <Link href="/party-planner" className="md:ml-auto">
              <Button className="bg-neon-pink hover:bg-neon-pink/80">
                Get My Party Plan
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
