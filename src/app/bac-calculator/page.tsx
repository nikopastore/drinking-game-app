import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Sidebar, useSidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { BACCalculator } from "@/components/calculators";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BAC Calculator: Blood Alcohol Content Estimator | SipWiki",
  description: "Free BAC calculator estimates your blood alcohol content based on weight, gender, drinks consumed, and time. Know when it's safe to drive. Never drink and drive.",
  keywords: [
    "BAC calculator",
    "blood alcohol calculator",
    "alcohol content calculator",
    "BAC estimator",
    "how drunk am I",
    "when can I drive after drinking",
    "alcohol metabolism calculator",
    "Widmark formula calculator",
  ],
  openGraph: {
    title: "BAC Calculator - Blood Alcohol Content Estimator",
    description: "Calculate your estimated BAC. Free, accurate, and educational tool for responsible drinking.",
    type: "website",
    url: "https://sipwiki.app/bac-calculator",
  },
  alternates: {
    canonical: "https://sipwiki.app/bac-calculator",
  },
};

export default function BACCalculatorPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "BAC Calculator",
    "description": "Blood Alcohol Content calculator using the Widmark formula",
    "applicationCategory": "UtilityApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "url": "https://sipwiki.app/bac-calculator"
  };

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
              BAC Calculator: Blood Alcohol Content Estimator
            </h1>
            <p className="text-gray-400 text-lg">
              Calculate your estimated blood alcohol content (BAC) based on your weight, gender, drinks consumed, and time elapsed. This tool uses the Widmark formula for accurate estimation.
            </p>
          </div>

          <QuickAnswer
            question="How do I calculate my BAC (Blood Alcohol Content)?"
            answer="To calculate BAC, use the Widmark formula: BAC = (Alcohol consumed in grams / (Body weight in grams × r)) - (0.015 × Hours). 'r' is 0.68 for men, 0.55 for women. One standard drink contains 14g of alcohol. Your BAC decreases approximately 0.015% per hour. This calculator handles the math for you - just input your weight, gender, number of drinks, and hours since first drink."
            tips={[
              "1 standard drink = 12oz beer, 5oz wine, or 1.5oz liquor",
              "BAC decreases ~0.015% per hour",
              "Legal limit for driving is 0.08% in most states",
              "NEVER drive if you've been drinking"
            ]}
            variant="primary"
          />

          <div className="my-12">
            <BACCalculator />
          </div>

          <div className="prose prose-invert max-w-none">
            <h2>Understanding Blood Alcohol Content (BAC)</h2>
            <p>
              Blood Alcohol Content (BAC) is a measurement of the amount of alcohol in your bloodstream. It's expressed as a percentage - for example, a BAC of 0.08% means there are 0.08 grams of alcohol per 100 milliliters of blood.
            </p>

            <h3>BAC Levels and Effects</h3>
            <div className="not-prose my-6">
              <div className="space-y-4">
                <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-green-400">0.00% - Sober</span>
                    <span className="text-sm text-gray-400">Safe to drive</span>
                  </div>
                  <p className="text-sm text-gray-300">No alcohol in bloodstream. Normal functioning.</p>
                </div>

                <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-yellow-400">0.01-0.03% - Slight Buzz</span>
                    <span className="text-sm text-gray-400">Minimal impairment</span>
                  </div>
                  <p className="text-sm text-gray-300">Slight mood elevation. Relaxation. Minimal impairment. Still, best not to drive.</p>
                </div>

                <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-orange-400">0.04-0.07% - Impaired</span>
                    <span className="text-sm text-gray-400">DO NOT DRIVE</span>
                  </div>
                  <p className="text-sm text-gray-300">Lowered inhibitions. Impaired judgment. Reduced coordination. Reaction time affected.</p>
                </div>

                <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-red-400">0.08-0.14% - Legally Drunk</span>
                    <span className="text-sm text-gray-400">Illegal to drive</span>
                  </div>
                  <p className="text-sm text-gray-300">Illegal to drive in all 50 states. Significantly impaired balance, speech, vision, hearing, and motor skills.</p>
                </div>

                <div className="p-4 bg-dark-800 rounded-lg border border-red-600">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-red-600">0.15%+ - Dangerous</span>
                    <span className="text-sm text-gray-400">Medical emergency possible</span>
                  </div>
                  <p className="text-sm text-gray-300">Risk of alcohol poisoning. Vomiting, loss of consciousness possible. Seek medical help if needed.</p>
                </div>
              </div>
            </div>

            <h2>How the BAC Calculator Works</h2>
            <p>
              Our calculator uses the <strong>Widmark formula</strong>, the most widely accepted method for estimating BAC. Here's how it works:
            </p>

            <h3>The Widmark Formula</h3>
            <p className="font-mono text-sm bg-dark-800 p-4 rounded-lg">
              BAC = (A / (W × r)) - (0.015 × H)
            </p>
            <ul>
              <li><strong>A</strong> = Alcohol consumed in grams (standard drink = 14g)</li>
              <li><strong>W</strong> = Body weight in grams</li>
              <li><strong>r</strong> = Gender constant (0.68 for men, 0.55 for women)</li>
              <li><strong>H</strong> = Hours since first drink</li>
              <li><strong>0.015</strong> = Average hourly metabolism rate</li>
            </ul>

            <h3>Why Gender Matters</h3>
            <p>
              Women typically have a higher BAC than men after consuming the same amount of alcohol due to:
            </p>
            <ul>
              <li>Lower percentage of body water (where alcohol distributes)</li>
              <li>Different enzyme levels for alcohol metabolism</li>
              <li>Typically lower body weight</li>
            </ul>

            <h2>Factors That Affect BAC</h2>
            <p>The calculator provides estimates, but many factors influence actual BAC:</p>

            <h3>Factors Increasing BAC</h3>
            <ul>
              <li><strong>Empty stomach:</strong> Alcohol absorbs faster without food</li>
              <li><strong>Carbonated drinks:</strong> Speed up alcohol absorption</li>
              <li><strong>Medications:</strong> Some drugs interact with alcohol</li>
              <li><strong>Fatigue or illness:</strong> May affect metabolism</li>
            </ul>

            <h3>Factors Decreasing BAC</h3>
            <ul>
              <li><strong>Food consumption:</strong> Slows alcohol absorption</li>
              <li><strong>Time:</strong> Only time eliminates alcohol (coffee doesn't help!)</li>
              <li><strong>Higher body weight:</strong> More tissue to distribute alcohol</li>
            </ul>

            <h2>Safe Drinking Guidelines</h2>

            <h3>Moderate Drinking Defined</h3>
            <p>According to the CDC and NIAAA:</p>
            <ul>
              <li><strong>Men:</strong> Up to 2 standard drinks per day</li>
              <li><strong>Women:</strong> Up to 1 standard drink per day</li>
            </ul>

            <h3>What is a Standard Drink?</h3>
            <p>A standard drink in the United States contains approximately 14 grams (0.6 ounces) of pure alcohol:</p>
            <ul>
              <li>12 ounces of beer (~5% alcohol)</li>
              <li>5 ounces of wine (~12% alcohol)</li>
              <li>1.5 ounces of distilled spirits (~40% alcohol)</li>
            </ul>

            <h2>When is it Safe to Drive?</h2>
            <p className="font-semibold text-yellow-400">
              The only safe answer is: NEVER drive after drinking any amount of alcohol.
            </p>
            <p>
              However, if you must know when you'll reach 0.00% BAC:
            </p>
            <ul>
              <li>Alcohol metabolizes at approximately 0.015% per hour</li>
              <li>This rate cannot be sped up with coffee, cold showers, or exercise</li>
              <li>A 0.08% BAC takes roughly 5-6 hours to reach 0.00%</li>
              <li>Always add buffer time and use alternative transportation</li>
            </ul>

            <h2>Myths About Sobering Up</h2>
            <p>These do NOT lower your BAC:</p>
            <ul>
              <li>❌ Drinking coffee</li>
              <li>❌ Taking a cold shower</li>
              <li>❌ Exercising</li>
              <li>❌ Eating food (helps prevent further increase, doesn't lower current BAC)</li>
              <li>❌ Drinking water</li>
            </ul>
            <p>⏰ <strong>Only TIME lowers BAC.</strong> Your liver processes alcohol at a fixed rate.</p>

            <h2>Legal Limits by State</h2>
            <p>While most states have a 0.08% legal limit for drivers 21+, some have stricter laws:</p>
            <ul>
              <li><strong>Utah:</strong> 0.05% BAC limit</li>
              <li><strong>Underage drivers (under 21):</strong> 0.00-0.02% in most states (zero tolerance)</li>
              <li><strong>Commercial drivers:</strong> 0.04% limit</li>
            </ul>

            <h2>Frequently Asked Questions</h2>

            <h3>How accurate is this BAC calculator?</h3>
            <p>
              This calculator provides a reasonable estimate using the Widmark formula, which is used in legal and medical contexts. However, actual BAC varies based on individual factors. For legally accurate BAC, use a certified breathalyzer or blood test.
            </p>

            <h3>Can I use this to determine if I'm safe to drive?</h3>
            <p className="font-semibold text-red-400">
              NO. This tool is educational only. If you've been drinking, do not drive regardless of the calculator result. Use rideshare, public transit, or a designated driver.
            </p>

            <h3>Why doesn't coffee sober me up?</h3>
            <p>
              Coffee makes you a more alert drunk person, but it doesn't lower your BAC. Only your liver can metabolize alcohol, and it works at a fixed rate of approximately 0.015% per hour.
            </p>

            <h3>How long until I'm completely sober?</h3>
            <p>
              Divide your current BAC by 0.015 to get approximate hours. For example, 0.08% BAC ÷ 0.015 = 5.3 hours. Always add buffer time and never risk driving.
            </p>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-br from-neon-pink/10 to-neon-blue/10 rounded-xl border border-neon-pink/30">
            <h3 className="text-xl font-bold text-white mb-3">More Drinking Resources</h3>
            <p className="text-gray-300 mb-4">
              Explore our comprehensive guides for responsible drinking and party planning:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/party-planner"
                className="px-4 py-2 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
              >
                Party Planner Calculator
              </Link>
              <Link
                href="/guides/drinking-games"
                className="px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
              >
                Drinking Games Guide
              </Link>
              <Link
                href="/cocktails"
                className="px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
              >
                Cocktail Recipes
              </Link>
            </div>
          </div>
        </main>

        <MobileNav />
      </div>
    </>
  );
}
