import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Love Is Blind Drinking Game Rules 2025: Pod Drama Edition",
  description: "Complete Love Is Blind drinking game rules! Drink every time someone says 'my person', there's pod drama, or the gold goblets appear.",
  keywords: [
    "Love Is Blind drinking game",
    "Love Is Blind Netflix drinking game",
    "reality TV drinking game",
    "dating show drinking game",
    "pod drinking game",
    "Love Is Blind watch party",
    "Netflix dating drinking game",
    "gold goblet drinking game"
  ],
  openGraph: {
    title: "Love Is Blind Drinking Game: Pod Drama Edition",
    description: "Turn Love Is Blind chaos into a drinking game experience.",
    type: "article",
    url: "https://sipwiki.app/guides/love-is-blind-drinking-game",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/love-is-blind-drinking-game",
  },
};

export default function LoveIsBlindDrinkingGamePage() {
  return (
    <GuideLayout
      title="Love Is Blind Drinking Game: Pod Drama Edition"
      description="The pods. The proposals. The drama. The gold goblets. Turn your Love Is Blind binge into a drinking game that's almost as messy as the show itself."
      breadcrumb="Love Is Blind Drinking Game"
    >
      <div className="bg-gradient-to-r from-amber-900/30 to-red-900/30 p-6 rounded-xl border border-dark-600 my-6">
        <h2 className="text-xl font-bold text-white mb-2">🥂 Gold Goblet Alert</h2>
        <p className="text-gray-300">
          For the authentic experience, drink from the most ridiculous wine glass
          you can find. Bonus points for actual gold goblets.
        </p>
      </div>

      <h2>Basic Rules (All Episodes)</h2>
      <p>These rules apply every episode:</p>
      <ul>
        <li><strong>&quot;My person&quot;:</strong> 1 drink</li>
        <li><strong>&quot;I&apos;m falling for you&quot;:</strong> 1 drink</li>
        <li><strong>&quot;I love you&quot;:</strong> 2 drinks</li>
        <li><strong>Gold goblet shown:</strong> 1 drink</li>
        <li><strong>Nick and Vanessa Lachey appear:</strong> 1 drink</li>
        <li><strong>Someone cries:</strong> 1 drink</li>
        <li><strong>Pod wall shown:</strong> 1 drink</li>
        <li><strong>Dramatic music sting:</strong> 1 drink</li>
      </ul>

      <h2>Pod Phase Rules</h2>
      <ul>
        <li>Someone talks about their &quot;type&quot;: 1 drink</li>
        <li>Deep conversation about past trauma: 2 drinks</li>
        <li>Someone has multiple connections: 1 drink per connection</li>
        <li>Love triangle drama: 2 drinks</li>
        <li>Someone says &quot;I&apos;ve never felt this way&quot;: 1 drink</li>
        <li>Pod date ends awkwardly: 1 drink</li>
        <li>Someone talks about marriage too fast: 1 drink</li>
        <li>Wine poured in pods: 1 drink</li>
      </ul>

      <h2>Proposal Rules</h2>
      <ul>
        <li>Proposal happens: Everyone toasts</li>
        <li>Proposal is super cheesy: 2 drinks</li>
        <li>Proposal rejected: Shot (for the fallen)</li>
        <li>Ring shown: 1 drink</li>
        <li>&quot;I said yes!&quot;: 1 drink</li>
        <li>Tears during proposal: 1 drink</li>
      </ul>

      <h2>Reveal/Meeting Rules</h2>
      <ul>
        <li>First look at each other: 2 drinks</li>
        <li>Someone is clearly disappointed: 3 drinks</li>
        <li>Someone is clearly MORE attracted: 2 drinks</li>
        <li>Awkward physical moment: 1 drink</li>
        <li>&quot;You&apos;re more beautiful than I imagined&quot;: 1 drink</li>
        <li>Running and hugging: 1 drink</li>
        <li>Height difference mentioned: 1 drink</li>
      </ul>

      <h2>Resort/Mexico Phase Rules</h2>
      <ul>
        <li>Someone in a pool: 1 drink</li>
        <li>Beach makeout: 1 drink</li>
        <li>Couples discuss intimacy: 1 drink</li>
        <li>Someone calls home crying: 2 drinks</li>
        <li>Doubts surface: 1 drink</li>
        <li>Another couple drama discussed: 1 drink</li>
        <li>&quot;The experiment&quot; mentioned: 1 drink</li>
      </ul>

      <h2>Real World Phase Rules</h2>
      <ul>
        <li>Meeting the parents: 2 drinks</li>
        <li>Parents are skeptical: 2 drinks</li>
        <li>Someone mentions the timeline: 1 drink</li>
        <li>Living together issues: 1 drink</li>
        <li>Financial discussion: 1 drink</li>
        <li>Pet introduction: 1 drink</li>
        <li>Ex mentioned: 2 drinks</li>
        <li>Red flag ignored: 2 drinks</li>
      </ul>

      <h2>Wedding Day Rules</h2>
      <ul>
        <li>Getting ready montage: 1 drink</li>
        <li>&quot;I don&apos;t know what I&apos;m going to say&quot;: 1 drink</li>
        <li>Family member gives warning: 2 drinks</li>
        <li>Walking down the aisle: 1 drink</li>
        <li><strong>&quot;I do&quot;:</strong> Toast and drink</li>
        <li><strong>&quot;I don&apos;t/I can&apos;t&quot;:</strong> Finish your drink</li>
        <li>Left at the altar: Take a shot</li>
        <li>Crying at altar: 1 drink</li>
        <li>Shocking yes when you expected no: 2 drinks</li>
        <li>Shocking no when you expected yes: 2 drinks</li>
      </ul>

      <h2>Reunion Rules</h2>
      <ul>
        <li>Nick and Vanessa recap: 1 drink</li>
        <li>Couple still together: Toast</li>
        <li>Couple broke up: 1 drink</li>
        <li>Drama addressed: 1 drink</li>
        <li>Someone gets defensive: 1 drink</li>
        <li>New relationship revealed: 2 drinks</li>
        <li>Pregnancy announced: Finish your drink</li>
        <li>Someone storms off: Shot</li>
      </ul>

      <h2>Drama-Specific Rules</h2>
      <ul>
        <li>Someone is clearly playing multiple people: 2 drinks</li>
        <li>Someone switches their pick: 2 drinks</li>
        <li>Confrontation between contestants: 2 drinks</li>
        <li>Friend group gossip: 1 drink</li>
        <li>DMs/texts revealed: 3 drinks</li>
        <li>Cliffhanger ending: Finish your drink</li>
      </ul>

      <h2>Drinking Game Variations</h2>

      <h3>Team Mode</h3>
      <ul>
        <li>Everyone picks a couple to root for</li>
        <li>Your couple has drama: You drink</li>
        <li>Your couple succeeds: Others drink</li>
        <li>Your couple gets married: Give out 5 drinks</li>
      </ul>

      <h3>Prediction Mode</h3>
      <ul>
        <li>Before each episode, predict outcomes</li>
        <li>Wrong prediction: 2 drinks</li>
        <li>Right prediction: Give out 2 drinks</li>
        <li>Called the whole season: You&apos;re the host, give out 10 drinks</li>
      </ul>

      <h2>Watch Party Ideas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg border border-amber-500/30">
          <h4 className="font-bold text-amber-400 mb-2">Gold Goblets</h4>
          <p className="text-gray-300 text-sm">
            You need ridiculous wine glasses. The bigger and more
            absurd, the better. It&apos;s canon.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg border border-amber-500/30">
          <h4 className="font-bold text-amber-400 mb-2">Pod Setup</h4>
          <p className="text-gray-300 text-sm">
            Hang a sheet between two couches. Guests can have
            &quot;pod conversations&quot; during commercials.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg border border-amber-500/30">
          <h4 className="font-bold text-amber-400 mb-2">Voting</h4>
          <p className="text-gray-300 text-sm">
            Everyone predicts: married or not? Keep score
            throughout the season.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg border border-amber-500/30">
          <h4 className="font-bold text-amber-400 mb-2">Snacks</h4>
          <p className="text-gray-300 text-sm">
            Fancy appetizers, wine and cheese - make it
            bougie like the show pretends to be.
          </p>
        </div>
      </div>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">Binge Warning</h3>
        <p className="text-gray-300">
          Love Is Blind episodes are LONG and there are MANY. The &quot;my person&quot;
          rule alone will get you. Consider playing with lighter drinks or only
          doing 2-3 episodes per session. Wedding day episodes should be approached
          with caution.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">More Reality TV Drinking Games</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/the-bachelor-drinking-game"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            The Bachelor →
          </Link>
          <Link
            href="/guides/tv-show-drinking-games"
            className="inline-block px-6 py-3 bg-dark-600 text-white rounded-lg hover:bg-dark-500 transition-colors"
          >
            All TV Shows
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
