import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kings Cup Rules: Complete Card Meanings & How to Play (2024 Guide)",
  description: "Official Kings Cup rules with all card meanings explained. Learn the waterfall, make a rule, question master & more. Free printable rules + popular variations.",
  keywords: [
    "kings cup rules",
    "kings cup card meanings",
    "how to play kings cup",
    "kings cup drinking game",
    "what does each card mean in kings cup",
    "kings cup rules waterfall",
    "kings cup make a rule",
    "kings cup question master",
    "kings cup rules for 2 players",
    "kings cup variations",
    "ring of fire rules",
    "circle of death rules",
    "kings drinking game",
  ],
  openGraph: {
    title: "Kings Cup Rules: Complete Guide to Card Meanings",
    description: "Master Kings Cup with our complete guide. Every card meaning explained with popular variations and house rules.",
    type: "article",
    url: "https://sipwiki.app/guides/kings-cup-rules",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kings Cup Rules & Card Meanings",
    description: "Complete guide to playing Kings Cup. All card meanings + variations.",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/kings-cup-rules",
  },
};

export default function KingsCupRulesPage() {
  const cardMeanings = [
    { card: "Ace", name: "Waterfall", rule: "Everyone starts drinking. You can only stop when the person to your right stops." },
    { card: "2", name: "You", rule: "Point to someone. They drink." },
    { card: "3", name: "Me", rule: "You drink." },
    { card: "4", name: "Floor", rule: "Everyone races to touch the floor. Last person drinks." },
    { card: "5", name: "Guys", rule: "All guys drink." },
    { card: "6", name: "Chicks", rule: "All girls drink." },
    { card: "7", name: "Heaven", rule: "Everyone points to the sky. Last person drinks." },
    { card: "8", name: "Mate", rule: "Pick a drinking buddy. They drink when you drink for the rest of the game." },
    { card: "9", name: "Rhyme", rule: "Say a word. Go around the circle rhyming. First person to fail drinks." },
    { card: "10", name: "Categories", rule: "Pick a category (e.g., beer brands). Go around naming items. First to fail drinks." },
    { card: "Jack", name: "Make a Rule", rule: "Create a rule everyone must follow. Break it = drink." },
    { card: "Queen", name: "Question Master", rule: "You're the Question Master. Anyone who answers your questions drinks." },
    { card: "King", name: "Pour", rule: "Pour some of your drink into the King's Cup. Fourth King drinks it all!" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Play Kings Cup",
    "description": "Complete guide to playing Kings Cup drinking game with all card meanings and rules explained.",
    "totalTime": "PT30M",
    "supply": [
      { "@type": "HowToSupply", "name": "Deck of cards" },
      { "@type": "HowToSupply", "name": "Large cup (the King's Cup)" },
      { "@type": "HowToSupply", "name": "Drinks for all players" }
    ],
    "step": [
      { "@type": "HowToStep", "name": "Setup", "text": "Place a large cup in the center. Spread cards face-down around it in a circle." },
      { "@type": "HowToStep", "name": "Draw Cards", "text": "Players take turns drawing cards and following the rules." },
      { "@type": "HowToStep", "name": "Follow Rules", "text": "Each card has a specific action - Ace is Waterfall, 2 is You, etc." },
      { "@type": "HowToStep", "name": "King's Cup", "text": "When you draw a King, pour into the center cup. The 4th King drinks it all." }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the official Kings Cup rules?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Kings Cup, cards are spread around a center cup. Players draw cards and follow the rules: Ace=Waterfall, 2=You, 3=Me, 4=Floor, 5=Guys, 6=Chicks, 7=Heaven, 8=Mate, 9=Rhyme, 10=Categories, Jack=Make a Rule, Queen=Question Master, King=Pour into cup."
        }
      },
      {
        "@type": "Question",
        "name": "What does each card mean in Kings Cup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ace starts a waterfall, 2 means you pick someone to drink, 3 means you drink, 4 is floor (last to touch drinks), 5 is guys drink, 6 is girls drink, 7 is heaven (point up), 8 is mate (pick a partner), 9 is rhyme, 10 is categories, Jack is make a rule, Queen is question master, King is pour into center cup."
        }
      },
      {
        "@type": "Question",
        "name": "How do you play waterfall in Kings Cup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When an Ace is drawn, everyone starts drinking. The person who drew the card can stop whenever they want. Each person can only stop after the person to their right stops. The last person has to drink the longest."
        }
      },
      {
        "@type": "Question",
        "name": "Can you play Kings Cup with 2 players?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Kings Cup works with 2 players, though some rules need adapting. Skip gender-specific cards (5s and 6s), and for Waterfall, just take turns. It's more fun with 4+ players, but couples can definitely enjoy it."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <GuideLayout
        title="Kings Cup Rules: Complete Card Meanings & How to Play"
        description="Kings Cup (also known as Ring of Fire or Circle of Death) is the ultimate card-based drinking game. This complete guide covers every card meaning, popular variations, and pro tips to run the perfect game."
        breadcrumb="Kings Cup Rules"
        primaryGame={{ name: "Kings Cup", slug: "kings-cup" }}
        relatedGames={[
          { name: "Ride the Bus", slug: "ride-the-bus", description: "Another classic card drinking game" },
          { name: "Irish Poker", slug: "irish-poker", description: "Guess cards and drink" },
          { name: "Beeramid", slug: "beeramid", description: "Card pyramid drinking game" },
        ]}
      >
        {/* Quick Answer for AI Overviews & Featured Snippets */}
        <QuickAnswer
          question="What are the rules for Kings Cup?"
          answer="Kings Cup is a card drinking game where players draw cards from a circle around a center cup. Each card has a specific rule: Ace=Waterfall (everyone drinks until person to right stops), 2=You (pick someone to drink), 3=Me (you drink), 4=Floor (last to touch floor drinks), 5=Guys drink, 6=Girls drink, 7=Heaven (point up), 8=Mate (pick drinking buddy), 9=Rhyme, 10=Categories, Jack=Make a Rule, Queen=Question Master, King=Pour into center cup (4th King drinks it all)."
          tips={[
            "Best with 4-10 players, works with 2+",
            "Game lasts 20-45 minutes",
            "Don't break the circle or you drink",
            "Fourth King ends the game"
          ]}
          variant="primary"
        />

        <h2>What You&apos;ll Need to Play Kings Cup</h2>
        <ul>
          <li><strong>1 standard deck of cards</strong> (52 cards, no jokers)</li>
          <li><strong>1 large cup</strong> - This is the King&apos;s Cup that goes in the center</li>
          <li><strong>Drinks for everyone</strong> - Beer works best, but any drink works</li>
          <li><strong>3+ players</strong> - More is better! Works with 2-10+ people</li>
        </ul>

        <h2>How to Set Up Kings Cup</h2>
        <ol>
          <li>Place the large cup (King&apos;s Cup) in the center of the table</li>
          <li>Spread all cards face-down in a circle around the cup</li>
          <li>Everyone sits in a circle with their drinks ready</li>
          <li>Decide who goes first (youngest, birthday closest, etc.)</li>
        </ol>

        <h2>Kings Cup Card Meanings: The Complete List</h2>
        <p>Here&apos;s what each card means in Kings Cup. These are the standard rules, but feel free to customize!</p>

        <div className="not-prose my-8">
          <div className="grid gap-3">
            {cardMeanings.map((item) => (
              <div key={item.card} className="flex items-start gap-4 p-4 bg-dark-800 rounded-xl border border-dark-600">
                <div className="flex-shrink-0 w-12 h-12 bg-neon-pink/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-neon-pink">{item.card}</span>
                </div>
                <div>
                  <h3 className="font-bold text-white">{item.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.rule}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2>How to Play Kings Cup: Step-by-Step</h2>
        <ol>
          <li><strong>Draw a card</strong> - The first player picks any card from the circle</li>
          <li><strong>Follow the rule</strong> - Execute the action based on the card meaning above</li>
          <li><strong>Don&apos;t break the circle!</strong> - Cards must stay connected. Break it and you drink</li>
          <li><strong>Next player&apos;s turn</strong> - Continue clockwise around the circle</li>
          <li><strong>King&apos;s Cup finale</strong> - When the 4th King is drawn, that player drinks the entire King&apos;s Cup</li>
        </ol>

        <h2>Popular Kings Cup Variations & House Rules</h2>
        <p>Part of what makes Kings Cup great is customizing the rules. Here are popular variations:</p>

        <h3>Alternative Card Rules</h3>
        <ul>
          <li><strong>9 = Bust a Rhyme</strong> - Say a phrase, everyone rhymes. First to fail drinks</li>
          <li><strong>Jack = Thumb Master</strong> - Put your thumb on the table anytime. Last to notice drinks</li>
          <li><strong>Queen = Questions</strong> - Ask questions only. First to answer or hesitate drinks</li>
          <li><strong>10 = Social</strong> - Everyone drinks together</li>
        </ul>

        <h3>Popular House Rules</h3>
        <ul>
          <li><strong>No saying &quot;drink&quot;</strong> - Say it and you drink</li>
          <li><strong>No first names</strong> - Use nicknames only</li>
          <li><strong>No pointing</strong> - Use elbows or head nods instead</li>
          <li><strong>Little green man</strong> - Pretend to remove him from your cup before drinking</li>
          <li><strong>No swearing</strong> - Classic rule, hard to follow</li>
        </ul>

        <h2>Kings Cup Rules for 2 Players</h2>
        <p>Playing with just two people? Here&apos;s how to adapt:</p>
        <ul>
          <li>Skip cards 5 (Guys) and 6 (Chicks) - or make them &quot;drink 2&quot; and &quot;give 2&quot;</li>
          <li>Waterfall: Just drink until the other person stops</li>
          <li>Categories and Rhymes work great with two players</li>
          <li>Consider using half the deck for a shorter game</li>
        </ul>

        <h2>Pro Tips for the Best Kings Cup Game</h2>
        <ul>
          <li><strong>Explain rules before starting</strong> - Make sure everyone knows the card meanings</li>
          <li><strong>Keep the energy up</strong> - Call out rule-breakers immediately</li>
          <li><strong>Creative &quot;Make a Rule&quot;</strong> - The best rules are funny and enforceable</li>
          <li><strong>Pace yourself</strong> - This game can get intense. Drink water too!</li>
          <li><strong>Have snacks ready</strong> - Trust us on this one</li>
        </ul>

        <h2>Frequently Asked Questions About Kings Cup</h2>

        <h3>What happens if you break the circle of cards?</h3>
        <p>If you draw a card and break the connected circle, you must drink. Some groups make you finish your entire drink!</p>

        <h3>How long does a game of Kings Cup last?</h3>
        <p>A typical game lasts 20-45 minutes depending on group size and drinking pace. The game ends when all Kings are drawn.</p>

        <h3>What&apos;s the difference between Kings Cup and Ring of Fire?</h3>
        <p>They&apos;re the same game! Kings Cup is also called Ring of Fire, Circle of Death, King&apos;s Game, or simply &quot;Kings.&quot; Rules may vary slightly by region.</p>

        <h3>What should I put in the King&apos;s Cup?</h3>
        <p>Traditionally, each player pours some of their drink when drawing a King. This creates a mixed drink that the 4th King drawer must finish. Some groups use a separate punishment drink.</p>

        <h3>Can you play Kings Cup with non-alcoholic drinks?</h3>
        <p>Absolutely! Kings Cup works great with any beverage. The game mechanics are fun regardless of what you&apos;re drinking.</p>

        <h2>Ready to Play?</h2>
        <p>Now that you know all the Kings Cup rules and card meanings, it&apos;s time to gather your friends and start playing! Check out our <Link href="/game/kings-cup" className="text-neon-pink hover:underline">interactive Kings Cup game</Link> for a digital version, or browse more <Link href="/games/card-games" className="text-neon-pink hover:underline">card drinking games</Link>.</p>
      </GuideLayout>
    </>
  );
}
