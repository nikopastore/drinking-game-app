import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";
import { generateArticleSchema } from "@/lib/schema";
import { EmailCapture } from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Never Have I Ever in Los Angeles, CA: Where to Play & Local Rules (2025)",
  description: "Play Never Have I Ever in Los Angeles! Find the best bars, house party tips, local variations, and everything you need to know about Never Have I Ever in City of Angels.",
  keywords: [
    "Never Have I Ever Los Angeles",
    "Never Have I Ever in Los Angeles",
    "where to play Never Have I Ever Los Angeles",
    "Los Angeles Never Have I Ever bars",
    "Never Have I Ever CA",
    "drinking games Los Angeles",
  ],
  openGraph: {
    title: "Never Have I Ever in Los Angeles: Local Guide",
    description: "Play Never Have I Ever in Los Angeles! Find the best bars, house party tips, local variations, and everything you need to know about Never Have I Ever in City of Angels.",
    type: "article",
    url: "https://sipwiki.app/guides/never-have-i-ever-in-los-angeles-ca",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/never-have-i-ever-in-los-angeles-ca",
  },
};

export default function NeverHaveIEverInLosAngelesPage() {
  const articleSchema = generateArticleSchema({
    title: "Never Have I Ever in Los Angeles, CA: The Complete Local Guide",
    description: "Comprehensive guide to playing Never Have I Ever in Los Angeles, including where to play, local variations, and celebrity-worthy questions.",
    author: { name: "SipWiki" },
    publishDate: "2025-01-15",
    url: "https://sipwiki.app/guides/never-have-i-ever-in-los-angeles-ca",
    imageUrl: "/games/never-have-i-ever-1.png",
    keywords: ["Drinking Games", "Party Games", "Los Angeles", "City Guides"],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-dark-900">
        <Header />
        <Sidebar />

        <main className="max-w-4xl mx-auto px-4 py-8 pb-24 md:pb-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Never Have I Ever in Los Angeles, CA: The Complete Local Guide
            </h1>
            <p className="text-gray-400 text-lg">
              Everything you need to know about playing Never Have I Ever in the City of Angels
            </p>
          </div>

          <QuickAnswer
            question="Where can I play Never Have I Ever in Los Angeles?"
            answer="Never Have I Ever is huge in LA's social scene! Play at West Hollywood rooftop bars (Skybar, EP&LP), Santa Monica beach bars, Hollywood nightclubs, Venice house parties, and DTLA lofts. The game thrives at industry networking events, actor meetups, and influencer parties. LA's version features entertainment industry questions like 'Never have I ever been on a reality show' or 'Never have I ever had a celebrity DM me.' Perfect icebreaker for LA's transient creative community."
            tips={[
              "WeHo rooftops = best views while playing",
              "Santa Monica Third Street Promenade bars",
              "Venice Beach parties get creative",
              "Industry parties love this game for networking"
            ]}
            variant="primary"
          />

          {/* AdSense In-Content Ad Placeholder */}
          <div className="my-8 rounded-xl border border-dashed border-dark-600 bg-dark-800/40 px-6 py-10 text-center text-sm text-gray-500">
            {/* AdSense: Guide In-Content Ad */}
            Ad Placeholder - Guide In-Content
          </div>

          <div className="prose prose-invert max-w-none mt-12">
            <h2>Playing Never Have I Ever in Los Angeles</h2>
            <p>
              Los Angeles, CA - City of Angels - is home to an incredible party scene, and Never Have I Ever is one of the most popular drinking games played here. Whether you're at a downtown bar, a house party, or a rooftop gathering, you'll find Never Have I Ever enthusiasts throughout Los Angeles. This comprehensive guide covers where to play Never Have I Ever in Los Angeles, local variations, and tips from seasoned Los Angeles players.
            </p>

            <h2>Where to Play Never Have I Ever in Los Angeles</h2>

            <h3>Popular Bars & Venues by Neighborhood</h3>

            <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">West Hollywood (WeHo)</h4>
                <p className="text-sm text-gray-300">
                  Rooftop bars with stunning views. Skybar, EP&LP, Catch LA. Perfect for intimate Never Have I Ever sessions with creative crowds.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">Santa Monica</h4>
                <p className="text-sm text-gray-300">
                  Beach bars and Third Street Promenade spots. Chill vibe with tourists and locals mixing. Circle Bar, Finn McCool's.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">Venice Beach</h4>
                <p className="text-sm text-gray-300">
                  Bohemian house parties and beachfront bars. The Waterfront, Venice Ale House. Questions get weird (in a good way).
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">Downtown LA (DTLA)</h4>
                <p className="text-sm text-gray-300">
                  Arts District lofts and rooftop bars. Perch, Upstairs at the Ace. Young professionals and artists.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">Hollywood</h4>
                <p className="text-sm text-gray-300">
                  Nightclubs and lounges. Industry people love Never Have I Ever for networking. Warwick, No Vacancy.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
                <h4 className="text-lg font-semibold text-white mb-2">Silver Lake / Echo Park</h4>
                <p className="text-sm text-gray-300">
                  Hipster bars and house parties. The Silverlake Lounge, The Echo. Indie film crowd dominates.
                </p>
              </div>
            </div>

            <h3>Private Parties & Events</h3>
            <p>Many Los Angeles residents host Never Have I Ever parties at:</p>
            <ul>
              <li>Hills mansions with infinity pool views</li>
              <li>Venice lofts with industrial vibes</li>
              <li>Rooftop terraces (especially popular year-round)</li>
              <li>Warehouse party spaces in the Arts District</li>
              <li>Malibu beach houses</li>
            </ul>

            <h3>Industry & Networking Events</h3>
            <p>Check out Los Angeles's unique Never Have I Ever scene:</p>
            <ul>
              <li>Actor networking mixers (great icebreaker)</li>
              <li>Film industry wrap parties</li>
              <li>Influencer collaboration events</li>
              <li>Creative professional meetups</li>
              <li>Production company socials</li>
            </ul>

            <h2>LA-Specific Never Have I Ever Questions</h2>
            <p>
              Los Angeles players have developed entertainment industry-specific questions that reflect the city's unique culture:
            </p>

            <h3>The Entertainment Industry Set</h3>
            <ul>
              <li>"Never have I ever been on a reality show"</li>
              <li>"Never have I ever had a verified social media account"</li>
              <li>"Never have I ever worked as an extra"</li>
              <li>"Never have I ever been to a red carpet event"</li>
              <li>"Never have I ever had a celebrity slide into my DMs"</li>
              <li>"Never have I ever auditioned for something and bombed"</li>
              <li>"Never have I ever lived in my car while pursuing my dream"</li>
              <li>"Never have I ever pretended to know someone famous when I didn't"</li>
            </ul>

            <h3>The LA Lifestyle Set</h3>
            <ul>
              <li>"Never have I ever done yoga on the beach at sunset"</li>
              <li>"Never have I ever been to a sound bath"</li>
              <li>"Never have I ever eaten at a restaurant just because it's Instagrammable"</li>
              <li>"Never have I ever paid $20 for a juice"</li>
              <li>"Never have I ever been stuck in traffic for over 2 hours"</li>
              <li>"Never have I ever hiked Runyon Canyon just to be seen"</li>
              <li>"Never have I ever lied about knowing a shortcut to avoid traffic"</li>
            </ul>

            <h3>The Transplant Set</h3>
            <ul>
              <li>"Never have I ever moved to LA to 'make it'"</li>
              <li>"Never have I ever told someone I'm an actor when I'm actually a server"</li>
              <li>"Never have I ever had 3+ roommates to afford rent"</li>
              <li>"Never have I ever worked for free 'for the exposure'"</li>
              <li>"Never have I ever claimed to be from LA when I'm from the Midwest"</li>
            </ul>

            <h2>Los Angeles-Specific Tips</h2>

            <h3>Weather Considerations</h3>
            <p>
              Los Angeles's warm climate means year-round outdoor Never Have I Ever is possible. Bring sunscreen for daytime games and take advantage of rooftop venues. The city's perfect weather makes it ideal for beach bonfires, poolside games, and rooftop sessions every month of the year.
            </p>

            <h3>Transportation</h3>
            <p>Los Angeles offers multiple options for safe travel after playing Never Have I Ever:</p>
            <ul>
              <li><strong>Rideshare:</strong> Uber/Lyft essential (LA is NOT walkable, traffic is brutal)</li>
              <li><strong>Public transportation:</strong> Metro exists but limited coverage and hours</li>
              <li><strong>Designated driver:</strong> Highly recommended - parking is challenging anyway</li>
              <li><strong>Stay local:</strong> Choose venues near where you're staying</li>
              <li><strong>Important:</strong> DUI enforcement is strict and expensive in LA</li>
            </ul>

            <h3>Best Times to Play</h3>
            <ul>
              <li><strong>Weekends:</strong> Bars fill up 8pm-2am, arrive early for tables</li>
              <li><strong>Weekdays:</strong> Happy hour specials often include games</li>
              <li><strong>Special events:</strong> Award show after-parties, film festival events, music festivals</li>
              <li><strong>Sunday Funday:</strong> LA tradition - day drinking that often includes Never Have I Ever</li>
            </ul>

            <h3>Local Etiquette</h3>
            <ul>
              <li>Respect house rules - they vary by venue</li>
              <li>Clean up after yourself (Los Angeles players take pride in their setups)</li>
              <li>Be friendly - Los Angeles has a welcoming Never Have I Ever community</li>
              <li>Tip your bartenders if playing at bars (20%+ is standard in LA)</li>
              <li><strong>LA specific:</strong> Don't ask "what do you do" immediately - it's seen as shallow</li>
              <li><strong>Industry etiquette:</strong> Don't pitch your project during Never Have I Ever</li>
            </ul>

            <h2>Best Venues for Never Have I Ever</h2>

            <h3>Rooftop Bars (LA's Specialty)</h3>
            <ul>
              <li><strong>Perch (DTLA):</strong> French bistro with stunning skyline views</li>
              <li><strong>EP & LP (West Hollywood):</strong> Asian-inspired rooftop with fire pits</li>
              <li><strong>Skybar (West Hollywood):</strong> Legendary poolside bar</li>
              <li><strong>Broken Shaker (DTLA):</strong> Craft cocktails, relaxed vibe</li>
              <li><strong>The Highlight Room (Hollywood):</strong> See-and-be-seen rooftop</li>
            </ul>

            <h3>Beach Bars</h3>
            <ul>
              <li><strong>The Waterfront (Venice):</strong> Locals favorite, right on the sand</li>
              <li><strong>Hinano Cafe (Venice):</strong> Dive bar charm, been there forever</li>
              <li><strong>Circle Bar (Santa Monica):</strong> Underground speakeasy vibe</li>
              <li><strong>Barney's Beanery (Santa Monica):</strong> Classic with arcade games</li>
            </ul>

            <h3>House Party Neighborhoods</h3>
            <ul>
              <li><strong>Hollywood Hills:</strong> Mansion parties with celebrity potential</li>
              <li><strong>Venice Canals:</strong> Unique architecture, artsy crowds</li>
              <li><strong>Silver Lake houses:</strong> Music industry and creatives</li>
              <li><strong>Mar Vista / Palms:</strong> Young professionals, more affordable</li>
            </ul>

            <h2>Seasonal Guide to LA Never Have I Ever</h2>

            <h3>Year-Round (LA Advantage!)</h3>
            <p>
              Unlike most cities, LA's perfect weather means Never Have I Ever happens outdoors year-round. However, there are still seasonal highlights:
            </p>

            <h3>Award Season (Jan-March)</h3>
            <ul>
              <li><strong>Oscars parties:</strong> Themed Never Have I Ever questions about movies</li>
              <li><strong>Grammys week:</strong> Music industry questions dominate</li>
              <li><strong>Industry mixers:</strong> Peak networking season</li>
            </ul>

            <h3>Festival Season (April-May)</h3>
            <ul>
              <li><strong>Coachella weekend:</strong> Pre/post-parties in LA before heading to desert</li>
              <li><strong>Film festivals:</strong> Tribeca LA, deadCenter Film - after-parties feature the game</li>
            </ul>

            <h3>Summer (June-August)</h3>
            <ul>
              <li><strong>Beach bonfires:</strong> Never Have I Ever by the ocean</li>
              <li><strong>Pool parties:</strong> Hills mansions and hotel day clubs</li>
              <li><strong>Rooftop bars peak:</strong> Best weather for outdoor drinking games</li>
            </ul>

            <h3>Fall (Sep-Nov)</h3>
            <ul>
              <li><strong>Fashion Week parties:</strong> Industry questions about modeling/fashion</li>
              <li><strong>Halloween:</strong> Costume Never Have I Ever (WeHo Carnival)</li>
              <li><strong>Pilot season starts:</strong> Actor networking events increase</li>
            </ul>

            <h2>Pro Tips from LA Insiders</h2>

            <h3>Making Connections</h3>
            <p>
              Never Have I Ever is a phenomenal networking tool in LA:
            </p>
            <ul>
              <li>Ask entertainment industry questions to find common ground</li>
              <li>Share genuine stories - authenticity is rare and valued in LA</li>
              <li>Exchange social media handles, not just phone numbers</li>
              <li>Follow up within 48 hours if you clicked with someone</li>
            </ul>

            <h3>The Right Drink for LA</h3>
            <p>
              LA has specific drinking culture:
            </p>
            <ul>
              <li>Craft cocktails {'>'}  cheap beer (image matters here)</li>
              <li>Low-calorie options popular (body-conscious city)</li>
              <li>Mezcal and natural wine are trendy</li>
              <li>Green juice between rounds is totally normal</li>
            </ul>

            <h3>Celebrity Sightings</h3>
            <p>
              If someone famous joins your Never Have I Ever game:
            </p>
            <ul>
              <li><strong>DO:</strong> Treat them normally, they appreciate it</li>
              <li><strong>DON'T:</strong> Ask for photos mid-game (wait until after)</li>
              <li><strong>DO:</strong> Keep their answers confidential</li>
              <li><strong>DON'T:</strong> Post on social media without permission</li>
            </ul>

            <h2>LA Never Have I Ever Variations</h2>

            <h3>The "Industry Edition"</h3>
            <p>
              Only entertainment and media questions allowed. First to run out of fingers must share their most embarrassing industry story.
            </p>

            <h3>The "Influencer Challenge"</h3>
            <p>
              Questions must relate to social media, content creation, or internet fame. Penalty: Post an embarrassing throwback photo.
            </p>

            <h3>The "Traffic Therapy" Version</h3>
            <p>
              All questions must relate to LA traffic, driving, or transportation nightmares. Surprisingly therapeutic!
            </p>

            <h3>The "Wellness Warrior" Edition</h3>
            <p>
              Questions about yoga, cleanses, crystals, meditation, etc. Drink kombucha instead of alcohol for authentic LA experience.
            </p>

            <h2>FAQ: Never Have I Ever in Los Angeles</h2>

            <h3>Will I actually meet celebrities playing this game?</h3>
            <p>
              It's possible! Many actors, musicians, and creators enjoy Never Have I Ever at bars and parties. WeHo and Hollywood venues have highest likelihood.
            </p>

            <h3>Can I play Never Have I Ever at the beach?</h3>
            <p>
              Yes, but alcohol is technically illegal on most LA beaches. Beach bonfires at designated fire rings are popular (bring discrete drinks).
            </p>

            <h3>What if I'm new to LA and don't know anyone?</h3>
            <p>
              Join meetup groups, take improv classes, or attend industry mixers. Never Have I Ever is perfect for breaking the ice with fellow transplants.
            </p>

            <h3>Is it true LA people are all fake?</h3>
            <p>
              Stereotype! Never Have I Ever actually helps you find genuine people. Those who share real stories are the ones worth befriending.
            </p>

            <h3>How expensive are drinks at LA bars?</h3>
            <p>
              $15-20 for cocktails at nice venues, $8-12 at dive bars. Happy hour is your friend (usually 4-7pm).
            </p>

            <h2>LA Never Have I Ever Hall of Fame</h2>
            <p>
              Legendary moments (names changed for privacy):
            </p>
            <ul>
              <li><strong>The Producer:</strong> "Never have I ever greenlit a project that flopped" - 8 people drank at a WeHo party</li>
              <li><strong>The Influencer:</strong> "Never have I ever bought followers" - awkward silence, then everyone drank</li>
              <li><strong>The Actor:</strong> "Never have I ever auditioned for the same role as someone in this room" - 4 people drank simultaneously</li>
              <li><strong>The Reality Star:</strong> Someone from a famous reality show joined a Venice party and answered every single question</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              Los Angeles offers an incredible Never Have I Ever scene whether you're a casual player or using it for networking. From rooftop bars with city views to beach bonfires under the stars, you'll find your people here. Remember to play responsibly, respect local customs, and most importantly - have fun! The Los Angeles Never Have I Ever community is welcoming, creative, and always ready for another round.
            </p>
            <p>
              Ready to master the game? Check out our complete <Link href="/guides/never-have-i-ever-rules" className="text-neon-pink hover:text-neon-pink/80">Never Have I Ever rules guide</Link> with 500+ questions for any occasion.
            </p>
          </div>

          <EmailCapture source="guide" />

          <div className="mt-12 p-6 bg-gradient-to-br from-neon-pink/10 to-neon-blue/10 rounded-xl border border-neon-pink/30">
            <h3 className="text-xl font-bold text-white mb-3">More Never Have I Ever Resources</h3>
            <p className="text-gray-300 mb-4">
              Master the game with our comprehensive guides and question banks:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/guides/never-have-i-ever-rules"
                className="px-4 py-2 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
              >
                Complete Rules & 500+ Questions
              </Link>
              <Link
                href="/guides/never-have-i-ever-questions"
                className="px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
              >
                Best Questions List
              </Link>
              <Link
                href="/guides/drinking-games"
                className="px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
              >
                All Drinking Games
              </Link>
            </div>
          </div>
        </main>

        <MobileNav />
      </div>
    </>
  );
}
