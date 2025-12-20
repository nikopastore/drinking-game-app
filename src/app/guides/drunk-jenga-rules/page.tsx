import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drunk Jenga Rules & Block Ideas: 50+ Best Challenges (2024)",
  description: "Complete Drunk Jenga rules and 50+ block ideas! Learn how to set up, write challenges, and play this classic party game. Includes printable rule ideas.",
  keywords: ["drunk jenga rules", "drunk jenga ideas", "drunk jenga blocks", "jenga drinking game", "tipsy tower", "drunk jenga challenges", "jenga block ideas"],
  openGraph: { title: "Drunk Jenga Rules & Block Ideas", description: "Everything you need for Drunk Jenga.", type: "article", url: "https://sipwiki.app/guides/drunk-jenga-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/drunk-jenga-rules" },
};

export default function DrunkJengaRulesPage() {
  const blockIdeas = [
    { rule: "Take 2 drinks", category: "Drinking" },
    { rule: "Give 3 drinks", category: "Drinking" },
    { rule: "Waterfall!", category: "Group" },
    { rule: "Everyone drinks", category: "Group" },
    { rule: "Truth or dare", category: "Challenge" },
    { rule: "Make a rule", category: "Power" },
    { rule: "Thumb master", category: "Power" },
    { rule: "Never have I ever", category: "Game" },
    { rule: "Do an impression", category: "Performance" },
    { rule: "Swap seats with someone", category: "Action" },
    { rule: "Text your ex", category: "Dare" },
    { rule: "Silent game - no talking", category: "Rule" },
    { rule: "Drink with your non-dominant hand", category: "Rule" },
    { rule: "No first names", category: "Rule" },
    { rule: "Finish your drink", category: "Extreme" },
  ];

  return (
    <GuideLayout
      title="Drunk Jenga: Rules, Block Ideas & Setup Guide"
      description="Drunk Jenga combines the tension of classic Jenga with drinking challenges. Every block you pull has a rule - from simple 'take a drink' to wild dares. When the tower falls, you finish your drink!"
      breadcrumb="Drunk Jenga Rules"
      primaryGame={{ name: "Drunk Jenga", slug: "drunk-jenga" }}
      relatedGames={[
        { name: "Kings Cup", slug: "kings-cup", description: "Card-based rules game" },
        { name: "Truth or Drink", slug: "truth-or-drink", description: "Answer or drink" },
      ]}
    >
      <h2>What You Need</h2>
      <ul>
        <li><strong>Jenga set</strong> - Standard or giant size</li>
        <li><strong>Permanent marker</strong> - To write rules on blocks</li>
        <li><strong>Drinks</strong> - For everyone playing</li>
        <li><strong>Imagination</strong> - For creative rules!</li>
      </ul>

      <h2>How to Set Up Drunk Jenga</h2>
      <ol>
        <li>Write a rule on each Jenga block (one side only)</li>
        <li>Stack the tower with rules facing random directions</li>
        <li>Keep some blocks blank (free passes)</li>
        <li>Have everyone grab their drinks</li>
      </ol>

      <h2>How to Play</h2>
      <ol>
        <li>Pull a block using one hand only</li>
        <li>Read the rule out loud</li>
        <li>Follow the rule before placing the block on top</li>
        <li>Whoever knocks over the tower finishes their drink!</li>
      </ol>

      <h2>Best Drunk Jenga Block Ideas</h2>
      <div className="not-prose my-6 grid md:grid-cols-2 gap-3">
        {blockIdeas.map((item, i) => (
          <div key={i} className="p-3 bg-dark-800 rounded-lg flex justify-between items-center">
            <span className="text-gray-300">{item.rule}</span>
            <span className="text-xs bg-dark-700 px-2 py-1 rounded text-gray-400">{item.category}</span>
          </div>
        ))}
      </div>

      <h2>Block Categories</h2>
      <ul>
        <li><strong>Drinking Rules</strong> - Take X drinks, give X drinks</li>
        <li><strong>Group Actions</strong> - Everyone drinks, waterfall</li>
        <li><strong>Powers</strong> - Make a rule, become thumb master</li>
        <li><strong>Dares</strong> - Text someone, do something embarrassing</li>
        <li><strong>Games</strong> - Mini-games within the game</li>
      </ul>

      <h2>Pro Tips</h2>
      <ul>
        <li>Balance the rules - not every block should be extreme</li>
        <li>Include some &quot;safe&quot; blank blocks</li>
        <li>Write in permanent marker so rules last</li>
        <li>Have different colored markers for rule intensity</li>
      </ul>

      <p>Check out our <Link href="/game/drunk-jenga" className="text-neon-pink hover:underline">Drunk Jenga game page</Link>!</p>
    </GuideLayout>
  );
}
