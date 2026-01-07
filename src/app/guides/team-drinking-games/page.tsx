import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Best Team Drinking Games | Group Competition Games",
  description: "Team-based drinking games for group competition! Divide and conquer with relay races, team beer pong variants, and group challenges that pit teams against each other.",
  keywords: ["team drinking games", "group drinking games", "team competition drinking", "drinking games teams", "relay drinking games", "team vs team drinking games"],
  openGraph: { title: "15 Best Team Drinking Games", description: "Compete as a team!", type: "article", url: "https://sipwiki.app/guides/team-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/team-drinking-games" },
};

export default function TeamGamesPage() {
  return (
    <GuideLayout
      title="Best Team Drinking Games"
      description="Nothing builds camaraderie like competing together! These team games create instant rivalries and unforgettable moments. Perfect for parties with 8+ people."
      breadcrumb="Team Games"
      relatedGames={[
        { name: "Flip Cup", slug: "flip-cup", description: "Classic relay" },
        { name: "Civil War", slug: "civil-war", description: "Team beer pong" },
        { name: "Beer Pong", slug: "beer-pong", description: "2v2 classic" },
      ]}
    >
      <QuickAnswer
        question="What are the best team drinking games?"
        answer="The best team drinking games are Flip Cup, Civil War (3v3 beer pong), team Beer Pong (2v2), Relay Race, and Baseball. These games work best with even teams of 3-6 players each. The key is balancing skill levels across teams and keeping rounds fast enough that everyone stays engaged."
        tips={[
          "Mix skill levels on each team",
          "Flip Cup works with any team size",
          "Civil War is the most chaotic option",
          "Create team names for extra rivalry"
        ]}
        variant="primary"
      />

      <h2>Top 15 Team Drinking Games</h2>

      <h3>1. Flip Cup</h3>
      <p>The undisputed king of team drinking games. Two teams line up on opposite sides of a table, and race relay-style to drink their beer and flip their cup upside down by flicking the rim. The next teammate can&apos;t start until the previous player successfully flips.</p>
      <ul>
        <li><strong>Team size:</strong> 3-10 per team</li>
        <li><strong>Equipment:</strong> Plastic cups, table, beer</li>
        <li><strong>Why teams love it:</strong> Perfect mix of skill and luck, tons of cheering, anyone can be the hero</li>
        <li><strong>Pro tip:</strong> Put your most clutch player as anchor (last position)</li>
      </ul>
      <p><Link href="/game/flip-cup" className="text-neon-pink hover:underline">Full Flip Cup Rules</Link></p>

      <h3>2. Civil War</h3>
      <p>Beer Pong on steroids. 3v3 with three triangles of cups per side. No turns - everyone shoots simultaneously as fast as they can retrieve balls. First team to eliminate all opposing cups wins. Absolute chaos.</p>
      <ul>
        <li><strong>Team size:</strong> 3 per team (strict)</li>
        <li><strong>Equipment:</strong> Large table, 18+ cups, 6+ ping pong balls</li>
        <li><strong>Why teams love it:</strong> Non-stop action, no waiting, maximum intensity</li>
        <li><strong>Pro tip:</strong> Assign defenders to protect your cups from being hit repeatedly</li>
      </ul>
      <p><Link href="/game/civil-war" className="text-neon-pink hover:underline">Full Civil War Rules</Link></p>

      <h3>3. Beer Pong (2v2)</h3>
      <p>The classic gets even better with teammates. Partners alternate shots, strategize together, and celebrate together. The dynamic of having a partner adds a whole new dimension.</p>
      <ul>
        <li><strong>Team size:</strong> 2 per team</li>
        <li><strong>Equipment:</strong> Beer pong table, 20 cups, 2-4 balls</li>
        <li><strong>Why teams love it:</strong> Strategic partnership, shared glory, classic format</li>
        <li><strong>Pro tip:</strong> Pair a consistent shooter with a clutch shooter</li>
      </ul>
      <p><Link href="/game/beer-pong" className="text-neon-pink hover:underline">Full Beer Pong Rules</Link></p>

      <h3>4. Relay Race</h3>
      <p>Simple but effective. Teams line up and race to complete a drinking task. First team to have all members finish wins. Tasks can vary: chug a beer, take a shot, shotgun a can, etc.</p>
      <ul>
        <li><strong>Team size:</strong> 4-8 per team</li>
        <li><strong>Equipment:</strong> Drinks, start/finish line</li>
        <li><strong>Why teams love it:</strong> Pure speed competition, easy to organize, dramatic finishes</li>
        <li><strong>Pro tip:</strong> Put fastest drinkers first to build momentum</li>
      </ul>

      <h3>5. Baseball</h3>
      <p>Full innings of beer pong action. Teams take turns &quot;batting&quot; (shooting) through a full 9-inning game. Cups represent bases - hit the front cup for a single, back cup for a home run. Score runs like actual baseball.</p>
      <ul>
        <li><strong>Team size:</strong> 2-4 per team</li>
        <li><strong>Equipment:</strong> Beer pong table, cups arranged in diamond</li>
        <li><strong>Why teams love it:</strong> Strategic depth, full game experience, baseball theme</li>
        <li><strong>Pro tip:</strong> Track outs carefully - three outs ends your inning</li>
      </ul>
      <p><Link href="/game/baseball" className="text-neon-pink hover:underline">Full Baseball Rules</Link></p>

      <h3>6. Boat Race</h3>
      <p>Teams sit in a row like rowing a boat. On &quot;go,&quot; the first person chugs and puts their empty cup on their head. Next person goes when cup touches head. First team to finish the &quot;race&quot; wins.</p>
      <ul>
        <li><strong>Team size:</strong> 4-8 per team</li>
        <li><strong>Equipment:</strong> Cups, drinks</li>
        <li><strong>Why teams love it:</strong> Hilarious visuals, synchronized effort, fast rounds</li>
        <li><strong>Pro tip:</strong> Practice the cup-on-head timing - spills are common</li>
      </ul>

      <h3>7. Anchorman Flip Cup</h3>
      <p>Flip Cup variant where the anchor (last player) must flip their cup three times instead of once. Adds pressure and drama to the final position.</p>
      <ul>
        <li><strong>Team size:</strong> 4-8 per team</li>
        <li><strong>Equipment:</strong> Plastic cups, table</li>
        <li><strong>Why teams love it:</strong> Anchor becomes crucial, comeback potential, extra tension</li>
        <li><strong>Pro tip:</strong> Your anchor needs to be genuinely skilled, not just fast at drinking</li>
      </ul>

      <h3>8. Vietnam War (Asymmetric Teams)</h3>
      <p>Uneven teams with different rules for each side. The larger team has more cups but can only shoot one at a time. The smaller team shoots simultaneously. Creates interesting dynamics when teams are naturally uneven.</p>
      <ul>
        <li><strong>Team size:</strong> 2-3 vs 4-6</li>
        <li><strong>Equipment:</strong> Beer pong setup, varied cup counts</li>
        <li><strong>Why teams love it:</strong> Works with odd numbers, unique strategy, underdog potential</li>
        <li><strong>Pro tip:</strong> Give the smaller team fewer but more valuable cups</li>
      </ul>
      <p><Link href="/game/vietnam-war" className="text-neon-pink hover:underline">Full Vietnam War Rules</Link></p>

      <h3>9. Survivor Flip Cup</h3>
      <p>Flip Cup meets elimination. Losing team votes off one player each round. Game continues until one team is eliminated entirely. Creates alliances and drama.</p>
      <ul>
        <li><strong>Team size:</strong> 5-8 per team</li>
        <li><strong>Equipment:</strong> Flip Cup setup</li>
        <li><strong>Why teams love it:</strong> Elimination drama, voting intrigue, extended play</li>
        <li><strong>Pro tip:</strong> Don&apos;t always vote off the worst player - consider team chemistry</li>
      </ul>

      <h3>10. Thunder</h3>
      <p>Teams sit in circles. Each team has a die. Roll the die around - when someone rolls a 6, they pick someone from the OTHER team to drink. First team to make the opposing team finish all their drinks wins.</p>
      <ul>
        <li><strong>Team size:</strong> 4-8 per team</li>
        <li><strong>Equipment:</strong> Two dice, drinks</li>
        <li><strong>Why teams love it:</strong> Target the other team strategically, continuous play</li>
        <li><strong>Pro tip:</strong> Focus fire on one opponent to eliminate them faster</li>
      </ul>

      <h3>11. Stack Cup Team Edition</h3>
      <p>Regular Stack Cup but with team scoring. When you stack someone, your team gets a point. Cups go to a team pile. Team with most stacks at the end wins.</p>
      <ul>
        <li><strong>Team size:</strong> 4-6 per team</li>
        <li><strong>Equipment:</strong> Many cups, 2 ping pong balls</li>
        <li><strong>Why teams love it:</strong> Individual skill contributes to team score</li>
        <li><strong>Pro tip:</strong> Target opposing team&apos;s weaker bouncers</li>
      </ul>

      <h3>12. Tug of War Chug</h3>
      <p>Teams line up facing each other. On go, everyone starts chugging simultaneously. When you finish, you &quot;pull&quot; by touching the next person. Team that finishes first wins the tug.</p>
      <ul>
        <li><strong>Team size:</strong> 4-8 per team</li>
        <li><strong>Equipment:</strong> Equal drinks for everyone</li>
        <li><strong>Why teams love it:</strong> Everyone contributes equally, pure speed contest</li>
        <li><strong>Pro tip:</strong> Order your lineup strategically - fast starters build momentum</li>
      </ul>

      <h3>13. Team Kings Cup</h3>
      <p>Kings Cup with team scoring. When you draw a card, your entire team follows the rule. Points awarded for completing challenges. King drawn = team takes a group drink.</p>
      <ul>
        <li><strong>Team size:</strong> 3-5 per team</li>
        <li><strong>Equipment:</strong> Deck of cards, center cup</li>
        <li><strong>Why teams love it:</strong> Classic game with team twist, shared consequences</li>
        <li><strong>Pro tip:</strong> Make rules that affect the entire opposing team</li>
      </ul>

      <h3>14. Chandeliers Team Battle</h3>
      <p>Two circles of cups, one per team. Bounce to hit opposing team&apos;s cups. Hit all of their cups to win. Protect your own cups while attacking.</p>
      <ul>
        <li><strong>Team size:</strong> 3-6 per team</li>
        <li><strong>Equipment:</strong> Many cups, ping pong balls</li>
        <li><strong>Why teams love it:</strong> Offensive and defensive strategy, simultaneous action</li>
        <li><strong>Pro tip:</strong> Assign some players to defense-only roles</li>
      </ul>

      <h3>15. World Cup</h3>
      <p>Beer pong tournament bracket, but each &quot;country&quot; is a team. Single elimination. Teams represent different nations and play for glory. Full tournament format.</p>
      <ul>
        <li><strong>Team size:</strong> 2 per team</li>
        <li><strong>Equipment:</strong> Beer pong setup, bracket board</li>
        <li><strong>Why teams love it:</strong> Tournament atmosphere, national pride, extended event</li>
        <li><strong>Pro tip:</strong> Seed teams by skill for competitive balance</li>
      </ul>

      <h2>Building Great Teams</h2>

      <h3>Team Composition Tips</h3>
      <ul>
        <li><strong>Mix skill levels</strong> - Don&apos;t stack all the best players on one team</li>
        <li><strong>Balance drinking speeds</strong> - Fast drinkers on each team</li>
        <li><strong>Consider personalities</strong> - Mix hype people with calm players</li>
        <li><strong>Rotate teams</strong> - Switch up teams between games for variety</li>
      </ul>

      <h3>Team Selection Methods</h3>
      <ul>
        <li><strong>Captains pick</strong> - Classic schoolyard style, draft players alternately</li>
        <li><strong>Random draw</strong> - Pull names from a hat for fairness</li>
        <li><strong>Birthday split</strong> - Odd/even birth months</li>
        <li><strong>Relationship status</strong> - Singles vs couples (drama warning!)</li>
        <li><strong>Gender split</strong> - Traditional but ensure balanced skills</li>
      </ul>

      <h3>Creating Team Identity</h3>
      <ul>
        <li><strong>Team names</strong> - Let teams choose creative names</li>
        <li><strong>Team chants</strong> - Simple rallying cries before each round</li>
        <li><strong>Team cups</strong> - Different colored cups per team</li>
        <li><strong>Team captain</strong> - Designate a leader for strategy calls</li>
      </ul>

      <h2>Running a Team Tournament</h2>

      <h3>Tournament Formats</h3>
      <ul>
        <li><strong>Single elimination</strong> - Fast, dramatic, one loss and you&apos;re out</li>
        <li><strong>Double elimination</strong> - Lose twice before elimination, more forgiving</li>
        <li><strong>Round robin</strong> - Everyone plays everyone, most wins takes it</li>
        <li><strong>Swiss system</strong> - Winners play winners, losers play losers</li>
      </ul>

      <h3>Point Systems</h3>
      <ul>
        <li><strong>Win/Loss</strong> - Simple 1 point per win</li>
        <li><strong>Margin of victory</strong> - Bonus points for dominant wins</li>
        <li><strong>Cup differential</strong> - Track cups remaining for tiebreakers</li>
        <li><strong>Bonus challenges</strong> - Extra points for trick shots or challenges</li>
      </ul>

      <h3>Tournament Tips</h3>
      <ul>
        <li><strong>Set time limits</strong> - Prevent games from dragging</li>
        <li><strong>Have backup games</strong> - For teams waiting between rounds</li>
        <li><strong>Keep standings visible</strong> - Whiteboard or poster with brackets</li>
        <li><strong>Prize for winners</strong> - Doesn&apos;t need to be expensive, just recognition</li>
      </ul>

      <h2>Team Game Selection Guide</h2>

      <h3>For 2 Teams of 2-3</h3>
      <ul>
        <li><strong>Beer Pong</strong> - Classic 2v2</li>
        <li><strong>Civil War</strong> - If exactly 3v3</li>
        <li><strong>Baseball</strong> - For longer play</li>
      </ul>

      <h3>For 2 Teams of 4-6</h3>
      <ul>
        <li><strong>Flip Cup</strong> - Perfect size</li>
        <li><strong>Boat Race</strong> - Synchronized fun</li>
        <li><strong>Relay Race</strong> - Pure competition</li>
      </ul>

      <h3>For 2 Teams of 7+</h3>
      <ul>
        <li><strong>Flip Cup</strong> - Scales well</li>
        <li><strong>Survivor Flip Cup</strong> - Elimination keeps it interesting</li>
        <li><strong>Tug of War Chug</strong> - Everyone participates</li>
      </ul>

      <h3>For Tournament Style (4+ teams)</h3>
      <ul>
        <li><strong>World Cup</strong> - Beer pong bracket</li>
        <li><strong>Flip Cup playoffs</strong> - Quick rounds</li>
        <li><strong>Multi-game decathlon</strong> - Different games each round</li>
      </ul>

      <h2>Related Guides</h2>
      <ul>
        <li><Link href="/guides/drinking-games-for-parties" className="text-neon-pink hover:underline">Drinking Games for Parties</Link></li>
        <li><Link href="/guides/college-drinking-games" className="text-neon-pink hover:underline">College Drinking Games</Link></li>
        <li><Link href="/guides/classic-drinking-games" className="text-neon-pink hover:underline">Classic Drinking Games</Link></li>
        <li><Link href="/guides/large-group-drinking-games" className="text-neon-pink hover:underline">Large Group Drinking Games</Link></li>
      </ul>
    </GuideLayout>
  );
}
