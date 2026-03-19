import { Metadata } from "next";
import { BlogLayout } from "@/components/BlogLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Know Your Limits: Signs You Should Stop Drinking (2025 Guide)",
  description: "Learn to recognize when you've had enough to drink. Expert tips on understanding your personal limits, signs of overconsumption, and how to pace yourself at parties.",
  keywords: [
    "know your drinking limits",
    "signs to stop drinking",
    "how much is too much alcohol",
    "drinking responsibly",
    "alcohol tolerance",
    "pacing yourself drinking",
    "when to stop drinking",
    "responsible drinking guide",
  ],
  openGraph: {
    title: "Know Your Limits: When to Stop Drinking",
    description: "Expert guide to understanding your alcohol limits and drinking responsibly.",
    type: "article",
    url: "https://sipwiki.app/blog/safety/know-your-limits",
  },
  alternates: {
    canonical: "https://sipwiki.app/blog/safety/know-your-limits",
  },
};

export default function KnowYourLimitsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I know when I've had too much to drink?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Signs you've had too much include: slurred speech, difficulty walking straight, blurred vision, nausea, difficulty focusing or following conversations, and making decisions you wouldn't normally make. If you notice any of these, switch to water.",
        },
      },
      {
        "@type": "Question",
        name: "How many drinks per hour is safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The general guideline is one standard drink per hour. Your liver can process about one drink per hour. Drinking faster than this causes alcohol to accumulate in your bloodstream, leading to intoxication.",
        },
      },
      {
        "@type": "Question",
        name: "What factors affect alcohol tolerance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Body weight, biological sex, food consumption, hydration, medications, sleep quality, and genetics all affect how alcohol impacts you. Smaller people and those who haven't eaten will feel effects faster.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BlogLayout
        title="Know Your Limits: Signs You Should Stop Drinking"
        description="Understanding your personal alcohol limits is key to having fun while staying safe. Learn to recognize the signs that it's time to switch to water."
        category="Safety & Responsibility"
        categorySlug="safety"
        author="party-pro"
        publishDate="2025-01-15"
        updatedDate="2025-01-15"
        readTime="6 min"
        supplies={["water bottles", "breathalyzer"]}
        tableOfContents={[
          { id: "understanding-limits", title: "Understanding Your Limits" },
          { id: "warning-signs", title: "Warning Signs" },
          { id: "factors", title: "Factors That Affect Tolerance" },
          { id: "pacing", title: "How to Pace Yourself" },
          { id: "drinking-games", title: "Limits During Drinking Games" },
        ]}
        relatedArticles={[
          {
            title: "How to Host a Safe Drinking Party",
            slug: "/blog/safety/how-to-host-safe-drinking-party",
            description: "Be a responsible host",
          },
          {
            title: "Non-Alcoholic Alternatives for Drinking Games",
            slug: "/blog/safety/non-alcoholic-alternatives",
            description: "Options for when you've hit your limit",
          },
        ]}
      >
        <QuickAnswer
          question="How do I know when I've had too much to drink?"
          answer="Watch for slurred speech, difficulty walking, blurred vision, nausea, or making decisions you wouldn't normally make. The safest rule: if you're questioning whether you've had too much, you probably have. Switch to water."
          tips={[
            "One standard drink per hour is a safe pace",
            "Eat before and during drinking",
            "Alternate alcoholic drinks with water",
            "Know your personal limit and stick to it",
          ]}
          variant="primary"
        />

        <h2 id="understanding-limits">Understanding Your Personal Limits</h2>

        <p>
          Everyone&apos;s alcohol tolerance is different. Your limit isn&apos;t about how much you
          <em>can</em> drink—it&apos;s about how much you can drink while still being in control,
          having fun, and waking up feeling okay the next day.
        </p>

        <h3>What&apos;s a &quot;Standard Drink&quot;?</h3>
        <p>Understanding drink sizes is crucial for knowing your limits:</p>
        <ul>
          <li><strong>Beer:</strong> 12 oz (355 ml) at 5% ABV</li>
          <li><strong>Wine:</strong> 5 oz (150 ml) at 12% ABV</li>
          <li><strong>Spirits:</strong> 1.5 oz (44 ml) at 40% ABV</li>
        </ul>

        <div className="not-prose my-6 p-4 bg-dark-800 rounded-xl border border-dark-600">
          <p className="text-gray-300">
            <strong className="text-white">Pro Tip:</strong> Many cocktails contain 2-3 standard
            drinks. A Long Island Iced Tea can have 4+ shots. A &quot;glass&quot; of wine at a
            restaurant is often 6-8 oz, not 5.
          </p>
        </div>

        <h3>Finding Your Number</h3>
        <p>
          Your personal limit is the number of drinks you can have while still:
        </p>
        <ul>
          <li>Speaking clearly</li>
          <li>Walking without stumbling</li>
          <li>Making good decisions</li>
          <li>Remembering the night</li>
          <li>Feeling okay the next day</li>
        </ul>
        <p>
          For many people, this is 2-4 drinks over several hours. There&apos;s no shame in having
          a low limit—it&apos;s actually cheaper and healthier.
        </p>

        <h2 id="warning-signs">Warning Signs: When to Stop</h2>

        <h3>Physical Signs</h3>
        <ul>
          <li><strong>Slurred speech</strong> - Words running together or hard to pronounce</li>
          <li><strong>Balance issues</strong> - Stumbling, swaying, needing to hold onto things</li>
          <li><strong>Blurred vision</strong> - Difficulty focusing on objects or people</li>
          <li><strong>Nausea</strong> - Feeling queasy or needing to vomit</li>
          <li><strong>Flushing</strong> - Face and neck turning red and warm</li>
          <li><strong>Numbness</strong> - Tingling in face, hands, or feet</li>
        </ul>

        <h3>Mental Signs</h3>
        <ul>
          <li><strong>Difficulty concentrating</strong> - Losing track of conversations</li>
          <li><strong>Impaired judgment</strong> - Considering things you normally wouldn&apos;t</li>
          <li><strong>Mood swings</strong> - Sudden anger, sadness, or euphoria</li>
          <li><strong>Memory gaps</strong> - Forgetting what just happened</li>
          <li><strong>Overconfidence</strong> - Feeling like you can do anything</li>
        </ul>

        <div className="not-prose my-8 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
          <h4 className="text-lg font-bold text-yellow-400 mb-2">The Golden Rule</h4>
          <p className="text-gray-300">
            If you&apos;re asking yourself &quot;Am I drunk?&quot; or &quot;Should I have another?&quot;—the answer is
            probably yes and no respectively. When in doubt, switch to water.
          </p>
        </div>

        <h2 id="factors">Factors That Affect Your Tolerance</h2>

        <h3>Why You Might Get Drunk Faster Today</h3>
        <ul>
          <li><strong>Empty stomach</strong> - Food slows alcohol absorption significantly</li>
          <li><strong>Dehydration</strong> - Hot weather or not drinking water</li>
          <li><strong>Lack of sleep</strong> - Tiredness amplifies alcohol&apos;s effects</li>
          <li><strong>Medications</strong> - Many drugs interact with alcohol</li>
          <li><strong>Stress</strong> - Mental state affects how you process alcohol</li>
          <li><strong>Illness</strong> - Being sick lowers your tolerance</li>
        </ul>

        <h3>Permanent Factors</h3>
        <ul>
          <li><strong>Body size</strong> - Smaller people have less blood volume to dilute alcohol</li>
          <li><strong>Biological sex</strong> - Women typically have less of the enzyme that breaks down alcohol</li>
          <li><strong>Genetics</strong> - Some people lack enzymes to process alcohol efficiently</li>
          <li><strong>Age</strong> - Tolerance often decreases with age</li>
        </ul>

        <h2 id="pacing">How to Pace Yourself</h2>

        <h3>The One-Drink-Per-Hour Rule</h3>
        <p>
          Your liver can process about one standard drink per hour. Drinking faster than this
          means alcohol accumulates faster than your body can handle it.
        </p>

        <h3>Practical Pacing Strategies</h3>
        <ul>
          <li><strong>Set a drink limit</strong> - Decide before the party: &quot;I&apos;m having 3 drinks tonight&quot;</li>
          <li><strong>Alternate with water</strong> - One alcoholic drink, one water</li>
          <li><strong>Sip, don&apos;t chug</strong> - Make each drink last longer</li>
          <li><strong>Eat continuously</strong> - Snack throughout the night</li>
          <li><strong>Avoid shots</strong> - They hit faster and are easy to lose count of</li>
          <li><strong>Check the time</strong> - Space drinks at least 45-60 minutes apart</li>
        </ul>

        <h3>The Water Trick</h3>
        <p>
          Keep a water bottle or cup with you at all times. Between drinks, sip from it.
          This keeps you hydrated, slows your pace, and gives you something to do with your hands.
        </p>

        <h2 id="drinking-games">Managing Limits During Drinking Games</h2>

        <p>
          Drinking games can make pacing difficult because you&apos;re drinking based on game rules,
          not your own pace. Here&apos;s how to stay in control:
        </p>

        <h3>Modify the Rules</h3>
        <ul>
          <li><strong>Sips, not chugs</strong> - Take small sips instead of full drinks</li>
          <li><strong>Low-ABV drinks</strong> - Use beer instead of shots, or light beer instead of craft</li>
          <li><strong>Water rounds</strong> - Every third round, use water instead of alcohol</li>
          <li><strong>Tap out respectfully</strong> - Switch to water when you hit your limit</li>
        </ul>

        <h3>Games That Are Easier to Pace</h3>
        <p>Some games naturally have better pacing than others:</p>
        <ul>
          <li>
            <Link href="/games/kings-cup" className="text-neon-pink hover:underline">Kings Cup</Link> - Sip-based, slower pace
          </li>
          <li>
            <Link href="/games/never-have-i-ever" className="text-neon-pink hover:underline">Never Have I Ever</Link> - Depends on your experiences
          </li>
          <li>
            <Link href="/games/most-likely-to" className="text-neon-pink hover:underline">Most Likely To</Link> - Lower overall consumption
          </li>
        </ul>

        <h3>Games to Be Careful With</h3>
        <ul>
          <li>
            <Link href="/games/rage-cage" className="text-neon-pink hover:underline">Rage Cage</Link> - Fast-paced, stacking drinks
          </li>
          <li>
            <Link href="/guides/power-hour-rules" className="text-neon-pink hover:underline">Power Hour</Link> - 60 shots in 60 minutes
          </li>
          <li>
            <Link href="/guides/century-club-rules" className="text-neon-pink hover:underline">Century Club</Link> - 100 shots in 100 minutes
          </li>
        </ul>

        <h2>What to Do When You&apos;ve Had Too Much</h2>

        <ol>
          <li><strong>Stop drinking alcohol immediately</strong></li>
          <li><strong>Switch to water</strong> - Sip slowly, don&apos;t chug</li>
          <li><strong>Eat something</strong> - Bread, crackers, anything starchy</li>
          <li><strong>Find a safe place to sit</strong> - Preferably with a friend</li>
          <li><strong>Don&apos;t drive</strong> - Get a ride home or stay over</li>
          <li><strong>Rest</strong> - Time is the only thing that actually sobers you up</li>
        </ol>

        <div className="not-prose my-8 p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
          <h4 className="text-lg font-bold text-blue-400 mb-2">Myth Busters</h4>
          <ul className="space-y-2 text-gray-300">
            <li><strong>Coffee doesn&apos;t sober you up</strong> - It just makes you a wide-awake drunk</li>
            <li><strong>Cold showers don&apos;t help</strong> - They can actually be dangerous</li>
            <li><strong>&quot;Walking it off&quot; doesn&apos;t work</strong> - Time is the only cure</li>
            <li><strong>Bread doesn&apos;t absorb alcohol</strong> - But eating helps slow absorption of future drinks</li>
          </ul>
        </div>

        <h2>The Bottom Line</h2>
        <p>
          Knowing your limits isn&apos;t about being boring—it&apos;s about having fun consistently without
          the regret, hangovers, and dangerous situations that come from overdoing it. Set a limit
          before you start drinking, stick to it, and you&apos;ll have a much better time.
        </p>

        <p>
          Need help calculating how much to drink? Try our{" "}
          <Link href="/alcohol-calculator" className="text-neon-pink hover:underline">
            Alcohol Calculator
          </Link>{" "}
          to estimate your BAC based on what you&apos;ve had.
        </p>
      </BlogLayout>
    </>
  );
}
