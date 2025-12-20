import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Friends Drinking Game (2024) | TV Show Drinking Rules",
  description: "The ultimate Friends drinking game! Drink every time Ross says 'we were on a break,' Monica cleans obsessively, or Joey says 'how you doin'?' Complete rules inside.",
  keywords: ["friends drinking game", "friends tv show drinking game", "friends drinking game rules", "watch friends drinking game", "friends episode drinking game"],
  openGraph: { title: "Friends Drinking Game - Complete Rules", description: "Could this BE any more fun?", type: "article", url: "https://sipwiki.app/guides/friends-tv-show-drinking-game" },
  alternates: { canonical: "https://sipwiki.app/guides/friends-tv-show-drinking-game" },
};

export default function FriendsDrinkingGamePage() {
  return (
    <GuideLayout title="Friends Drinking Game" description="Turn your Friends rewatch into a drinking game! From 'We were on a break!' to 'How you doin?' - every catchphrase becomes a sip." breadcrumb="Friends" relatedGames={[{ name: "TV Show Drinking Games", slug: "tv-show-drinking-games", description: "More TV games" }, { name: "The Office Drinking Game", slug: "office-drinking-game", description: "Another sitcom game" }]}>
      <h2>Classic Rules (Every Episode)</h2>
      <p>These happen all the time - sip for each:</p>
      <ul>
        <li><strong>&quot;How you doin&apos;?&quot;</strong> - Drink 2</li>
        <li><strong>&quot;We were on a break!&quot;</strong> - Drink 3</li>
        <li><strong>&quot;Oh. My. God.&quot; (Janice)</strong> - Drink 3</li>
        <li><strong>Monica cleans or organizes</strong> - Drink 1</li>
        <li><strong>Chandler makes a sarcastic joke</strong> - Drink 1</li>
        <li><strong>Ross mentions dinosaurs/paleontology</strong> - Drink 1</li>
        <li><strong>Phoebe says something weird</strong> - Drink 1</li>
        <li><strong>Rachel mentions fashion/shopping</strong> - Drink 1</li>
        <li><strong>Joey mentions food</strong> - Drink 1</li>
        <li><strong>They&apos;re at Central Perk</strong> - Drink 1</li>
        <li><strong>Ugly Naked Guy is mentioned</strong> - Drink 2</li>
      </ul>

      <h2>Character-Specific Rules</h2>

      <h3>Ross</h3>
      <ul>
        <li>Gets divorced or mentions a divorce - Drink 3</li>
        <li>Says &quot;PIVOT!&quot; - Finish your drink</li>
        <li>Does the &quot;sound&quot; (noise complaints) - Drink 2</li>
        <li>Gets jealous about Rachel - Drink 1</li>
        <li>His voice goes high when upset - Drink 1</li>
      </ul>

      <h3>Monica</h3>
      <ul>
        <li>References her fat past - Drink 2</li>
        <li>Gets competitive - Drink 1</li>
        <li>Controls a situation - Drink 1</li>
        <li>&quot;I KNOW!&quot; - Drink 2</li>
      </ul>

      <h3>Chandler</h3>
      <ul>
        <li>Could this BE any more [something]? - Drink 2</li>
        <li>Makes self-deprecating joke - Drink 1</li>
        <li>Gets awkward about commitment - Drink 2</li>
        <li>References his parents&apos; divorce - Drink 2</li>
      </ul>

      <h3>Joey</h3>
      <ul>
        <li>Doesn&apos;t understand something obvious - Drink 1</li>
        <li>JOEY DOESN&apos;T SHARE FOOD! - Drink 3</li>
        <li>Mentions Days of Our Lives - Drink 1</li>
        <li>Uses a pickup line - Drink 2</li>
      </ul>

      <h3>Phoebe</h3>
      <ul>
        <li>Mentions her mom/suicide - Drink 2</li>
        <li>Sings or plays guitar - Drink 2</li>
        <li>&quot;Smelly Cat&quot; specifically - Drink 3</li>
        <li>References her street past - Drink 1</li>
        <li>Her twin Ursula appears - Drink 3</li>
      </ul>

      <h3>Rachel</h3>
      <ul>
        <li>Talks about being a waitress - Drink 1</li>
        <li>Has a hair change moment - Drink 2</li>
        <li>Mentions her spoiled upbringing - Drink 1</li>
      </ul>

      <h2>Relationship Rules</h2>
      <ul>
        <li><strong>Ross and Rachel have a moment</strong> - Drink 2</li>
        <li><strong>Monica and Chandler are couple goals</strong> - Drink 1</li>
        <li><strong>Someone dates someone inappropriate</strong> - Drink 2</li>
        <li><strong>A breakup happens</strong> - Drink 4</li>
        <li><strong>Someone says &quot;I love you&quot;</strong> - Drink 3</li>
        <li><strong>A wedding/proposal happens</strong> - Finish drink</li>
      </ul>

      <h2>Episode-Specific Rules</h2>

      <h3>&quot;The One Where No One&apos;s Ready&quot; (S3E2)</h3>
      <p>Add: Drink every time Ross yells about being late.</p>

      <h3>&quot;The One with the Embryos&quot; (S4E12)</h3>
      <p>Add: Drink for every quiz question. Take a shot if you get one wrong yourself.</p>

      <h3>&quot;The One Where Everybody Finds Out&quot; (S5E14)</h3>
      <p>Add: Drink every time someone &quot;finds out.&quot; Drink 3 for &quot;THEY DON&apos;T KNOW THAT WE KNOW THEY KNOW!&quot;</p>

      <h3>&quot;The One with the Routine&quot; (S6E10)</h3>
      <p>Add: Drink throughout the entire dance routine.</p>

      <h3>&quot;The Last One&quot; (S10E17-18)</h3>
      <p>Add: Drink every time you get emotional. Finish everything when Rachel gets off the plane.</p>

      <h2>Intensity Guide</h2>
      <ul>
        <li><strong>Casual</strong> - Pick 3-4 rules</li>
        <li><strong>Standard</strong> - All character catchphrases</li>
        <li><strong>Hard Mode</strong> - All rules active</li>
        <li><strong>Death Mode</strong> - Thanksgiving episodes with all rules</li>
      </ul>

      <h2>Binge-Watching Warning</h2>
      <p>Friends has 236 episodes. These rules are designed for 1-3 episodes at a time. Do not attempt a full season in drinking game mode unless you have a designated survivor.</p>
    </GuideLayout>
  );
}
