import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Night Drinking Games (2024) | Marathon Party Games",
  description: "Drinking games designed for long nights! Complete guide with marathon games, pacing strategies, and activities that keep the party going until dawn.",
  keywords: ["all night drinking games", "marathon drinking games", "long drinking games", "party all night games", "hours long drinking games", "overnight party games"],
  openGraph: { title: "All Night Drinking Games", description: "Party until dawn!", type: "article", url: "https://sipwiki.app/guides/all-night-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/all-night-drinking-games" },
};

export default function AllNightDrinkingGamesPage() {
  return (
    <GuideLayout title="All Night Drinking Games" description="In it for the long haul? These games keep going as long as you do, designed for cabin trips, NYE, graduations, and any marathon party session that doesn't end until the sun comes up." breadcrumb="All Night Games" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Endless rounds" }, { name: "Power Hour", slug: "power-hour", description: "The marathon" }, { name: "Rage Cage", slug: "rage-cage", description: "High energy" }]}>
      <h2>The All-Night Philosophy</h2>
      <p>All-night parties require a different approach:</p>
      <ul>
        <li><strong>Pacing over intensity</strong> - You have hours, not minutes</li>
        <li><strong>Variety is key</strong> - No single game works for 8+ hours</li>
        <li><strong>Energy management</strong> - Peaks and valleys throughout the night</li>
        <li><strong>Sustenance matters</strong> - Food and water are part of the game</li>
        <li><strong>No one left behind</strong> - People tap in and out</li>
      </ul>

      <h2>Marathon Games</h2>

      <h3>Century Club (The Ultimate Endurance)</h3>
      <p>100 shots of beer in 100 minutes.</p>
      <ul>
        <li>1 shot of beer (1.5 oz) every minute for 100 minutes</li>
        <li>Sounds easy - it&apos;s not</li>
        <li>Equals about 8-9 beers total</li>
        <li>Use a playlist with shots marked every minute</li>
        <li>People drop out naturally as they go</li>
        <li>Survivors are legends</li>
      </ul>
      <p>Variation: Do 60 minutes (Power Hour) for a more manageable challenge.</p>
      <p><Link href="/guides/power-hour-rules" className="text-neon-pink">Power Hour rules →</Link></p>

      <h3>Kings Cup (Infinite Rounds)</h3>
      <p>The perfect repeatable game.</p>
      <ul>
        <li>Play through a deck, then shuffle and restart</li>
        <li>Change rules each time through the deck</li>
        <li>Make new rules for cards as the night progresses</li>
        <li>People can join and leave between decks</li>
        <li>Gets more chaotic as rules accumulate</li>
      </ul>
      <p><Link href="/games/kings-cup" className="text-neon-pink">Play Kings Cup →</Link></p>

      <h3>Rage Cage Tournament</h3>
      <p>High-energy game for peak party hours.</p>
      <ul>
        <li>Multiple rounds with elimination</li>
        <li>Winners face off in championship rounds</li>
        <li>Losers form the &quot;losers&apos; bracket&quot;</li>
        <li>Ultimate champion crowned at the end</li>
        <li>Death cup rules keep stakes high</li>
      </ul>
      <p><Link href="/games/rage-cage" className="text-neon-pink">Play Rage Cage →</Link></p>

      <h3>Drunk Board Games</h3>
      <p>Regular board games + drinking rules = hours of fun.</p>
      <ul>
        <li><strong>Monopoly</strong> - Drink when you pay rent, land on Go, or go to jail</li>
        <li><strong>Risk</strong> - Drink when you lose a battle, finish your drink when eliminated</li>
        <li><strong>Settlers of Catan</strong> - Drink when someone trades with you, when the robber hits you</li>
        <li><strong>Uno</strong> - Drink for every card drawn, skip cards mean skipped person drinks</li>
        <li><strong>Cards Against Humanity</strong> - Card Czar&apos;s pick drinks, worst card drinks</li>
      </ul>

      <h3>Flip Cup League</h3>
      <ul>
        <li>Set up a bracket tournament</li>
        <li>Teams change each round</li>
        <li>Track wins and losses</li>
        <li>Crown a champion at the end of the night</li>
        <li>Championship game at 2 AM</li>
      </ul>
      <p><Link href="/games/flip-cup" className="text-neon-pink">Flip Cup rules →</Link></p>

      <h2>All-Night Schedule</h2>

      <h3>Early Night (8 PM - 11 PM)</h3>
      <ul>
        <li>Easy games - Kings Cup, Never Have I Ever</li>
        <li>Not everyone&apos;s arrived yet</li>
        <li>Casual drinking, building energy</li>
        <li>Eat dinner if you haven&apos;t</li>
      </ul>

      <h3>Peak Hours (11 PM - 2 AM)</h3>
      <ul>
        <li>High-energy games - Rage Cage, Flip Cup tournaments</li>
        <li>Everyone&apos;s there, everyone&apos;s buzzing</li>
        <li>This is when games get intense</li>
        <li>Group activities, team games</li>
      </ul>

      <h3>Late Night (2 AM - 4 AM)</h3>
      <ul>
        <li>Mix of energy levels</li>
        <li>Some people dropping, some going strong</li>
        <li>Seated games work better</li>
        <li>Truth or Drink, deep conversations</li>
        <li>Drunk board games</li>
      </ul>

      <h3>Sunrise Crew (4 AM - Dawn)</h3>
      <ul>
        <li>The survivors</li>
        <li>Casual games or no games</li>
        <li>Watch the sunrise together</li>
        <li>Reflection mode</li>
        <li>Toast to making it</li>
      </ul>

      <h2>Pacing Strategies</h2>

      <h3>The Drink</h3>
      <ul>
        <li>Beer or wine for longevity</li>
        <li>Hard alcohol = harder to pace</li>
        <li>Light beers work for marathons</li>
        <li>Have water available always</li>
        <li>Consider switching to water after 2 AM</li>
      </ul>

      <h3>The Food</h3>
      <ul>
        <li>Eat before and during</li>
        <li>Midnight pizza run is crucial</li>
        <li>Carbs help absorb alcohol</li>
        <li>Snacks throughout the night</li>
        <li>Breakfast supplies for morning</li>
      </ul>

      <h3>The Breaks</h3>
      <ul>
        <li>Step outside for fresh air</li>
        <li>Take a walk if possible</li>
        <li>Bathroom breaks are natural pauses</li>
        <li>Chat breaks between games</li>
        <li>It&apos;s okay to sit out a game</li>
      </ul>

      <h2>Games for Different Energy Levels</h2>

      <h3>High Energy</h3>
      <ul>
        <li>Rage Cage</li>
        <li>Flip Cup</li>
        <li>Beer Pong tournament</li>
        <li>Civil War</li>
        <li>Stack Cup</li>
      </ul>

      <h3>Medium Energy</h3>
      <ul>
        <li>Kings Cup</li>
        <li>Most Likely To</li>
        <li>Drunk board games</li>
        <li>Card games with drinking rules</li>
      </ul>

      <h3>Low Energy</h3>
      <ul>
        <li>Never Have I Ever</li>
        <li>Truth or Drink</li>
        <li>Conversation games</li>
        <li>Movie drinking games</li>
      </ul>

      <h2>All-Night Essentials Checklist</h2>

      <h3>Drinks</h3>
      <ul>
        <li>More than you think you need</li>
        <li>Variety - not just one type</li>
        <li>Ice - lots of it</li>
        <li>Mixers if doing cocktails</li>
        <li>Water, water, water</li>
      </ul>

      <h3>Food</h3>
      <ul>
        <li>Dinner beforehand</li>
        <li>Snacks throughout</li>
        <li>Late-night food delivery plan</li>
        <li>Breakfast supplies</li>
      </ul>

      <h3>Setup</h3>
      <ul>
        <li>Comfortable seating for long stretches</li>
        <li>Game supplies (cards, dice, cups)</li>
        <li>Good speaker and playlist</li>
        <li>Blankets (it gets cold at 4 AM)</li>
        <li>Phone chargers everywhere</li>
      </ul>

      <h3>Survival</h3>
      <ul>
        <li>Crash space for everyone</li>
        <li>No one drives - plan ahead</li>
        <li>First aid basics</li>
        <li>Aspirin for the morning</li>
        <li>Pedialyte or sports drinks</li>
      </ul>

      <h2>Handling Dropouts</h2>
      <ul>
        <li>People will tap out - that&apos;s normal</li>
        <li>Have sleeping spots ready</li>
        <li>Don&apos;t wake people up to play</li>
        <li>Let people rejoin when they recover</li>
        <li>No shame in knowing your limits</li>
      </ul>

      <h2>The Morning After</h2>
      <ul>
        <li>Have breakfast ready or planned</li>
        <li>Water and electrolytes</li>
        <li>Coffee for those who need it</li>
        <li>Share stories and photos</li>
        <li>Plan the next one</li>
      </ul>

      <p>More party planning: <Link href="/guides/house-party-drinking-games" className="text-neon-pink hover:underline">house party games</Link> | <Link href="/guides/new-years-eve-drinking-games" className="text-neon-pink hover:underline">NYE games</Link></p>
    </GuideLayout>
  );
}
