import { Metadata } from "next";
import { BlogLayout } from "@/components/BlogLayout";
import { QuickAnswer } from "@/components/seo";
import { ProductCard, ProductGrid } from "@/components/ProductCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Set Up a Beer Pong Tournament: Complete Guide (2025)",
  description: "Everything you need to organize a beer pong tournament: brackets, rules, equipment, house rules, and tips for running a smooth competition. Perfect for parties and events.",
  keywords: [
    "beer pong tournament",
    "beer pong bracket",
    "how to run beer pong tournament",
    "beer pong tournament rules",
    "organize beer pong tournament",
    "beer pong competition",
    "beer pong tournament format",
    "beer pong event planning",
  ],
  openGraph: {
    title: "How to Set Up a Beer Pong Tournament",
    description: "Complete guide to organizing the perfect beer pong tournament.",
    type: "article",
    url: "https://sipwiki.app/blog/tutorials/beer-pong-tournament-setup",
  },
  alternates: {
    canonical: "https://sipwiki.app/blog/tutorials/beer-pong-tournament-setup",
  },
};

export default function BeerPongTournamentSetupPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Set Up a Beer Pong Tournament",
    description: "Step-by-step guide to organizing a beer pong tournament",
    totalTime: "PT2H",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "50-150",
    },
    supply: [
      { "@type": "HowToSupply", name: "Beer pong table(s)" },
      { "@type": "HowToSupply", name: "Ping pong balls (20+)" },
      { "@type": "HowToSupply", name: "Solo cups (200+)" },
      { "@type": "HowToSupply", name: "Beer or drinks" },
      { "@type": "HowToSupply", name: "Bracket printout or whiteboard" },
    ],
    step: [
      { "@type": "HowToStep", name: "Determine Format", text: "Choose single elimination, double elimination, or round robin based on team count" },
      { "@type": "HowToStep", name: "Set Rules", text: "Establish and announce official rules before play begins" },
      { "@type": "HowToStep", name: "Create Brackets", text: "Seed teams and create tournament bracket" },
      { "@type": "HowToStep", name: "Set Up Tables", text: "Prepare tables, cups, and supplies" },
      { "@type": "HowToStep", name: "Run Tournament", text: "Manage games, track results, and keep energy high" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <BlogLayout
        title="How to Set Up a Beer Pong Tournament: Complete Guide"
        description="From bracket creation to trophy presentation, here's everything you need to run a legendary beer pong tournament that your friends will talk about for years."
        category="Tutorials"
        categorySlug="tutorials"
        author="sipwiki-team"
        publishDate="2025-01-15"
        updatedDate="2025-01-15"
        readTime="10 min"
        supplies={["beer pong table", "ping pong balls", "red solo cups", "cup rack"]}
        tableOfContents={[
          { id: "planning", title: "Tournament Planning" },
          { id: "format", title: "Choosing Your Format" },
          { id: "rules", title: "Setting Official Rules" },
          { id: "brackets", title: "Creating Brackets" },
          { id: "equipment", title: "Equipment Needed" },
          { id: "running", title: "Running the Tournament" },
          { id: "prizes", title: "Prizes & Celebration" },
        ]}
        relatedArticles={[
          {
            title: "Beer Pong Rules: Complete Guide",
            slug: "/guides/beer-pong-rules",
            description: "Master the official rules",
          },
          {
            title: "Best Beer Pong Tables 2025",
            slug: "/blog/buying-guides/best-beer-pong-tables",
            description: "Get the right equipment",
          },
          {
            title: "Party Supplies Checklist",
            slug: "/blog/buying-guides/party-supplies-checklist",
            description: "Everything you need",
          },
        ]}
      >
        <QuickAnswer
          question="How do I run a beer pong tournament?"
          answer="Choose a format (single/double elimination), set clear rules before starting, create a bracket (8-16 teams works best), prepare 1-2 tables per 8 teams, stock plenty of cups and balls, assign a bracket manager, and have prizes ready. Allow 15-20 minutes per game."
          tips={[
            "8-16 teams is the ideal tournament size",
            "Single elimination is faster, double is more forgiving",
            "Print rules and post them visibly",
            "Have a designated 'commissioner' to resolve disputes",
          ]}
          variant="primary"
        />

        <h2 id="planning">Tournament Planning Basics</h2>

        <h3>Choosing Your Tournament Size</h3>
        <p>The number of teams affects everything from duration to equipment needs:</p>

        <div className="not-prose my-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-dark-800 rounded-xl border border-dark-600">
              <h4 className="font-bold text-white mb-2">8 Teams (Sweet Spot)</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>7 games total (single elim)</li>
                <li>~2 hours with 1 table</li>
                <li>~1 hour with 2 tables</li>
                <li>Perfect for house parties</li>
              </ul>
            </div>
            <div className="p-4 bg-dark-800 rounded-xl border border-dark-600">
              <h4 className="font-bold text-white mb-2">16 Teams (Large Event)</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>15 games total (single elim)</li>
                <li>~4 hours with 1 table</li>
                <li>~2 hours with 2 tables</li>
                <li>Need dedicated space</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>Time Estimates</h3>
        <ul>
          <li><strong>Average game:</strong> 15-20 minutes</li>
          <li><strong>Between games:</strong> 5-10 minutes for setup and next teams</li>
          <li><strong>Buffer time:</strong> Add 30 minutes for delays, disputes, refills</li>
        </ul>

        <h2 id="format">Choosing Your Tournament Format</h2>

        <h3>Single Elimination</h3>
        <p>One loss and you&apos;re out. Best for:</p>
        <ul>
          <li>Shorter events (limited time)</li>
          <li>Larger team counts</li>
          <li>High-stakes intensity</li>
          <li>Clear, simple progression</li>
        </ul>
        <p><strong>Downside:</strong> Some teams only play one game if they lose early.</p>

        <h3>Double Elimination</h3>
        <p>Teams get a second chance after one loss. Best for:</p>
        <ul>
          <li>All-day events with time to spare</li>
          <li>Competitive players who want more games</li>
          <li>Finding the true best team</li>
          <li>More games = more fun</li>
        </ul>
        <p><strong>Downside:</strong> Takes roughly twice as long as single elimination.</p>

        <h3>Round Robin</h3>
        <p>Everyone plays everyone. Best for:</p>
        <ul>
          <li>Small groups (4-6 teams max)</li>
          <li>Casual competitions</li>
          <li>When everyone wants maximum games</li>
          <li>Determining standings over time</li>
        </ul>
        <p><strong>Downside:</strong> Very time-intensive. 6 teams = 15 games.</p>

        <h3>Pool Play + Bracket</h3>
        <p>Groups play round robin, top teams advance to single elimination. Best for:</p>
        <ul>
          <li>Larger tournaments (16+ teams)</li>
          <li>Multi-day events</li>
          <li>Ensuring competitive final rounds</li>
        </ul>

        <h2 id="rules">Setting Official Tournament Rules</h2>

        <p>Prevent disputes by announcing rules BEFORE the tournament starts. Post them visibly.</p>

        <h3>Core Rules to Establish</h3>
        <ul>
          <li><strong>Cups:</strong> 10-cup or 6-cup format?</li>
          <li><strong>Re-racks:</strong> How many per game? (Usually 2)</li>
          <li><strong>Bounce shots:</strong> Worth 2 cups and swattable, or disabled?</li>
          <li><strong>Redemption:</strong> Allowed or sudden death?</li>
          <li><strong>Elbow/wrist rule:</strong> Which body part can&apos;t cross the table?</li>
          <li><strong>Blowing/fingering:</strong> Can defenders remove spinning balls?</li>
          <li><strong>Overtime:</strong> 3 cups or sudden death?</li>
        </ul>

        <h3>Tournament-Specific Rules</h3>
        <ul>
          <li><strong>Time limits:</strong> Max game time (optional, usually 20-30 min)</li>
          <li><strong>Warm-up shots:</strong> Allowed before first game only</li>
          <li><strong>Substitutions:</strong> Can teams swap players mid-tournament?</li>
          <li><strong>Disputes:</strong> Commissioner has final say</li>
        </ul>

        <h3>Example Rule Sheet</h3>
        <div className="not-prose my-6 p-6 bg-dark-800 rounded-xl border border-dark-600">
          <h4 className="font-bold text-white mb-3">Tournament Rules</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>• 10-cup formation, standard triangle</li>
            <li>• 2 re-racks per team per game</li>
            <li>• Bounces count as 2 cups and can be swatted</li>
            <li>• Redemption allowed (shoot until miss)</li>
            <li>• Elbow must stay behind table edge</li>
            <li>• No blowing or fingering</li>
            <li>• Overtime: 3 cups each side</li>
            <li>• Commissioner rulings are final</li>
          </ul>
        </div>

        <h2 id="brackets">Creating Tournament Brackets</h2>

        <h3>Seeding Teams</h3>
        <p>Fair seeding prevents the best teams from meeting early:</p>
        <ul>
          <li><strong>Random draw:</strong> Names from a hat (most fair)</li>
          <li><strong>Skill seeding:</strong> If you know players, rank teams 1-16</li>
          <li><strong>Sign-up order:</strong> First to register = #1 seed, etc.</li>
        </ul>

        <h3>Standard 8-Team Bracket</h3>
        <div className="not-prose my-6 p-4 bg-dark-800 rounded-xl border border-dark-600 font-mono text-sm">
          <pre className="text-gray-300 overflow-x-auto">
{`Round 1          Semis          Finals
-------          -----          ------
1 vs 8  ─┐
         ├─ Winner ─┐
4 vs 5  ─┘         │
                   ├─ Winner ─ CHAMPION
3 vs 6  ─┐         │
         ├─ Winner ─┘
2 vs 7  ─┘`}
          </pre>
        </div>

        <h3>Bracket Tools</h3>
        <ul>
          <li><strong>Whiteboard:</strong> Classic, visual, everyone can see</li>
          <li><strong>Challonge.com:</strong> Free online bracket generator</li>
          <li><strong>Printed bracket:</strong> Fill in as you go</li>
          <li><strong>Large poster board:</strong> Dedicated tournament display</li>
        </ul>

        <h2 id="equipment">Equipment Checklist</h2>

        <div className="not-prose my-8">
          <ProductGrid
            products={[
              { key: "beer pong table", description: "8ft regulation table (1-2 depending on size)" },
              { key: "ping pong balls", description: "At least 20 balls - they get lost and damaged" },
              { key: "red solo cups", description: "200+ cups for a 16-team tournament" },
              { key: "cup rack", description: "Keeps formations perfect between games" },
            ]}
            columns={2}
          />
        </div>

        <h3>Full Equipment List</h3>
        <ul>
          <li><strong>Tables:</strong> 1 table per 8 teams minimum</li>
          <li><strong>Cups:</strong> 22 per game + extras (budget 50 per table)</li>
          <li><strong>Balls:</strong> 4 per table minimum, 10+ backup</li>
          <li><strong>Beer/drinks:</strong> Use <Link href="/party-planner" className="text-neon-pink hover:underline">Party Planner</Link> to calculate</li>
          <li><strong>Water cups:</strong> For ball rinsing</li>
          <li><strong>Towels:</strong> For spills</li>
          <li><strong>Sharpies:</strong> For team names on cups</li>
          <li><strong>Bracket display:</strong> Whiteboard or poster</li>
        </ul>

        <h2 id="running">Running the Tournament</h2>

        <h3>Assign Roles</h3>
        <ul>
          <li><strong>Commissioner:</strong> Makes rule calls, resolves disputes, final authority</li>
          <li><strong>Bracket manager:</strong> Updates bracket, calls next teams</li>
          <li><strong>Table captain:</strong> Monitors each table, ensures fair play</li>
          <li><strong>Setup crew:</strong> Resets cups between games</li>
        </ul>

        <h3>Game Flow</h3>
        <ol>
          <li>Announce next matchup 5 minutes before</li>
          <li>Teams check in at table</li>
          <li>Quick cup and ball inspection</li>
          <li>Eye-to-eye shoot for first possession</li>
          <li>Play game with table captain watching</li>
          <li>Report results to bracket manager immediately</li>
          <li>Reset table for next game</li>
        </ol>

        <h3>Keeping Energy High</h3>
        <ul>
          <li>Play music between games</li>
          <li>Announce exciting plays (&quot;THAT&apos;S A BOUNCE FOR TWO!&quot;)</li>
          <li>Update bracket publicly after each game</li>
          <li>Encourage spectators to cheer</li>
          <li>Take photos/videos for social media</li>
        </ul>

        <h3>Handling Disputes</h3>
        <ul>
          <li>Commissioner decision is always final</li>
          <li>If unclear, re-shoot the ball</li>
          <li>Keep it fun - don&apos;t let arguments ruin the vibe</li>
          <li>Post rules beforehand to prevent most disputes</li>
        </ul>

        <h2 id="prizes">Prizes & Celebration</h2>

        <h3>Prize Ideas</h3>
        <ul>
          <li><strong>Trophy:</strong> Custom beer pong trophy (Amazon has cheap options)</li>
          <li><strong>Cash pot:</strong> $5-10 entry fee, winner takes all</li>
          <li><strong>Gift cards:</strong> Bar gift cards, Uber credits</li>
          <li><strong>Bragging rights:</strong> Name on a house trophy</li>
          <li><strong>Championship belt:</strong> Defender must return next tournament</li>
        </ul>

        <h3>Championship Presentation</h3>
        <ul>
          <li>Gather everyone for final game</li>
          <li>Announce finalists dramatically</li>
          <li>Play championship game with crowd watching</li>
          <li>Award prizes immediately after</li>
          <li>Take championship photo</li>
          <li>Post results on socials</li>
        </ul>

        <h2>Quick Reference: Tournament Day Checklist</h2>

        <div className="not-prose my-8 p-6 bg-gradient-to-br from-dark-800 to-dark-700 rounded-xl border border-dark-600">
          <h3 className="font-bold text-white mb-4">Day-Of Checklist</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-neon-pink mb-2">Before Start</h4>
              <ul className="text-gray-300 space-y-1">
                <li>[ ] Tables set up and leveled</li>
                <li>[ ] Cups and balls ready</li>
                <li>[ ] Bracket created and displayed</li>
                <li>[ ] Rules posted visibly</li>
                <li>[ ] Commissioner assigned</li>
                <li>[ ] Drinks stocked and cold</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-neon-blue mb-2">During Tournament</h4>
              <ul className="text-gray-300 space-y-1">
                <li>[ ] Call next teams in advance</li>
                <li>[ ] Update bracket after each game</li>
                <li>[ ] Reset cups between games</li>
                <li>[ ] Keep music and energy up</li>
                <li>[ ] Take photos/videos</li>
                <li>[ ] Prepare prizes for finals</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Ready to Run Your Tournament?</h2>
        <p>
          You&apos;ve got all the knowledge you need. Start with 8 teams, single elimination, and
          simple rules. As you get comfortable, add double elimination and fancier formats.
        </p>
        <p>
          Make sure everyone knows the <Link href="/guides/beer-pong-rules" className="text-neon-pink hover:underline">official
          beer pong rules</Link> and stock up on <Link href="/blog/buying-guides/party-supplies-checklist" className="text-neon-pink hover:underline">supplies</Link>.
          Good luck, commissioner!
        </p>
      </BlogLayout>
    </>
  );
}
