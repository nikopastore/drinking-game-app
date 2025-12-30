import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Olympics Drinking Games: Medal Ceremony Watch Party (2025)",
  description: "Olympics drinking games for every sport! Medal ceremonies, national anthem rules, upset specials, and more. Make the Games even more exciting.",
  keywords: [
    "olympics drinking games",
    "summer olympics drinking",
    "winter olympics drinking",
    "olympic watch party",
    "medal ceremony drinking game",
    "team usa drinking game",
  ],
  openGraph: {
    title: "Olympics Drinking Games",
    description: "Go for gold in drinking games.",
    type: "article",
    url: "https://sipwiki.app/guides/olympics-drinking-games",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/olympics-drinking-games",
  },
};

export default function OlympicsDrinkingGamesPage() {
  return (
    <GuideLayout
      title="Olympics Drinking Games: Go For Gold"
      description="The Olympics happen every two years and feature dozens of sports. These drinking games work across all events - from gymnastics to swimming to curling. Represent your country and drink responsibly (or not)."
      breadcrumb="Olympics Games"
      relatedGames={[
        { name: "Flip Cup", slug: "flip-cup", description: "Commercial breaks" },
        { name: "Most Likely To", slug: "most-likely-to", description: "Ceremony games" },
        { name: "Beer Pong", slug: "beer-pong", description: "Medal celebration" },
      ]}
    >
      <QuickAnswer
        question="What are good Olympics drinking game rules?"
        answer="Pick a country to root for. Your country wins gold = opponents drink 3. Silver = 2. Bronze = 1. National anthem plays = drink throughout. Upset win = everyone drinks. World record = everyone takes a shot. Opening/closing ceremonies have their own rules for country entrances and performances."
        tips={[
          "Pick countries - creates international stakes",
          "Medals = drinks (gold 3, silver 2, bronze 1)",
          "National anthems = drink throughout",
          "World records = everyone takes a shot"
        ]}
        variant="primary"
      />

      <h2>Pick Your Country</h2>
      <p>Everyone picks a country to represent. Team USA? Great. Want to root for an underdog? Even better:</p>
      <ul>
        <li><strong>Your country wins gold:</strong> Others drink 3</li>
        <li><strong>Your country wins silver:</strong> Others drink 2</li>
        <li><strong>Your country wins bronze:</strong> Others drink 1</li>
        <li><strong>Your country doesn't medal:</strong> You drink 2</li>
        <li><strong>Your country sets a world record:</strong> Everyone takes a shot</li>
      </ul>

      <h2>Universal Olympic Rules</h2>
      <p>These work for any sport:</p>
      <ul>
        <li><strong>Medal ceremony:</strong> Drink during the anthem</li>
        <li><strong>World record:</strong> Everyone takes a shot</li>
        <li><strong>Olympic record:</strong> Everyone drinks 2</li>
        <li><strong>Personal best:</strong> Social drink</li>
        <li><strong>Photo finish:</strong> Everyone drinks during replay</li>
        <li><strong>Upset:</strong> Favored country's fans finish their drink</li>
        <li><strong>DQ:</strong> That country's fans drink 3</li>
      </ul>

      <h2>Broadcaster Triggers</h2>
      <ul>
        <li>"Olympic spirit" = drink 1</li>
        <li>Athlete's backstory segment = drink throughout</li>
        <li>"They've been training for this moment" = drink 1</li>
        <li>Crying athlete shown = drink 1</li>
        <li>Crying family shown = drink 1</li>
        <li>"Historic" = drink 1</li>
        <li>Medal count shown = drink if your country isn't top 3</li>
      </ul>

      <h2>Opening Ceremony Rules</h2>
      <ul>
        <li><strong>Each country enters:</strong> Drink if it's not your country</li>
        <li><strong>Your country enters:</strong> Toast and celebrate</li>
        <li><strong>Cool outfit:</strong> Social drink</li>
        <li><strong>Tiny delegation (less than 10):</strong> Drink 1 for respect</li>
        <li><strong>Host country enters:</strong> Everyone drinks</li>
        <li><strong>Torch lighting:</strong> Finish your drink</li>
        <li><strong>Performance you don't understand:</strong> Drink throughout</li>
        <li><strong>Fireworks:</strong> Drink</li>
      </ul>

      <h2>Sport-Specific Rules</h2>

      <h3>Swimming</h3>
      <ul>
        <li>False start = that swimmer's fans drink</li>
        <li>Touch pad dispute = everyone drinks during review</li>
        <li>Lane line shown dramatically = drink</li>
        <li>Phelps/Ledecky mentioned = drink</li>
      </ul>

      <h3>Gymnastics</h3>
      <ul>
        <li>Fall = that country drinks 2</li>
        <li>Step out of bounds = drink 1</li>
        <li>Perfect 10 (or close) = opponents drink 3</li>
        <li>Coach reaction shown = drink</li>
        <li>Simone Biles mentioned = drink</li>
      </ul>

      <h3>Track & Field</h3>
      <ul>
        <li>False start = that athlete's fans drink</li>
        <li>Photo finish = drink during replay</li>
        <li>Bolt pose mentioned = drink</li>
        <li>World record line shown = drink</li>
        <li>Relay drop = that team finishes drinks</li>
      </ul>

      <h3>Basketball</h3>
      <ul>
        <li>USA loses a quarter = USA fans drink</li>
        <li>Non-USA team dunks = USA fans drink 2</li>
        <li>NBA player mentioned = drink</li>
        <li>Dream Team reference = drink</li>
      </ul>

      <h3>Soccer/Football</h3>
      <ul>
        <li>Goal = defense drinks 3</li>
        <li>Red card = that team drinks 4</li>
        <li>Penalty kick = everyone drinks during the kick</li>
        <li>Own goal = that team finishes</li>
      </ul>

      <h3>Winter: Curling</h3>
      <ul>
        <li>Someone yells "HARD" = everyone drinks</li>
        <li>Stone knocks out opponent = opponents drink 2</li>
        <li>Perfect draw to the button = opponents drink 2</li>
        <li>End stolen = that team drinks 3</li>
      </ul>

      <h3>Winter: Figure Skating</h3>
      <ul>
        <li>Fall = that country drinks 3</li>
        <li>Hand touches ice = drink 1</li>
        <li>Triple axel landed = opponents drink 2</li>
        <li>Quad landed = opponents drink 3</li>
        <li>Technical vs artistic explained = drink during explanation</li>
      </ul>

      <h3>Winter: Hockey</h3>
      <ul>
        <li>Goal = defense drinks 3</li>
        <li>Fight = everyone drinks</li>
        <li>"Miracle on Ice" mentioned = USA fans toast</li>
        <li>Shootout = drink during each attempt</li>
      </ul>

      <h2>Medal Ceremony Drinks</h2>
      <ul>
        <li>Gold anthem plays = everyone drinks (longest anthem = longest drink)</li>
        <li>Silver/bronze athlete looks disappointed = drink</li>
        <li>Athletes hug = social drink</li>
        <li>Flag raising = stand and drink</li>
      </ul>

      <h2>Multi-Event Day</h2>
      <p>Olympics have multiple events going simultaneously:</p>
      <ul>
        <li>Every channel change = drink</li>
        <li>Miss a medal = drink 2</li>
        <li>Catch a world record live = take a shot</li>
        <li>Your country medals while you're watching another sport = drink 2</li>
      </ul>

      <h2>Closing Ceremony Rules</h2>
      <ul>
        <li>Athlete selfies = drink</li>
        <li>Athletes partying = social drink</li>
        <li>Flag handoff to next host = everyone drinks</li>
        <li>Flame extinguished = finish your drink</li>
        <li>Teaser for next Olympics = toast to the future</li>
      </ul>

      <h2>For Non-Sports Fans</h2>
      <ul>
        <li>Give them an underdog country to root for</li>
        <li>Assign them to track human interest stories</li>
        <li>Put them on mascot sighting duty</li>
        <li>Have them judge outfits in ceremonies</li>
      </ul>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">More Sports Drinking Games</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/super-bowl-drinking-games"
            className="inline-block px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
          >
            Super Bowl Games →
          </Link>
          <Link
            href="/guides/world-series-drinking-games"
            className="inline-block px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
          >
            World Series Games →
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
