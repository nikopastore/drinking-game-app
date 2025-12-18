import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui";
import { games } from "@/config/gameData";
import {
  Gamepad2,
  Users,
  Sparkles,
  BookOpen,
  Heart,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About SipWiki - The #1 Drinking Game Rules App",
  description:
    "SipWiki is the ultimate drinking game rules and party companion app. Learn about our mission to be the best resource for party games, drinking games, and icebreakers.",
  alternates: {
    canonical: "https://sipwiki.app/about",
  },
  openGraph: {
    title: "About SipWiki - The #1 Drinking Game Rules App",
    description:
      "Learn about SipWiki, the ultimate drinking game rules and party companion app.",
    url: "https://sipwiki.app/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
              SipWiki
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The #1 drinking game rules and party companion app. Your one-stop
            destination for party games, drinking games, and icebreakers.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-neon-pink mb-1">
                {games.length}+
              </div>
              <div className="text-gray-400 text-sm">Games</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-neon-blue mb-1">100%</div>
              <div className="text-gray-400 text-sm">Free</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-neon-green mb-1">0</div>
              <div className="text-gray-400 text-sm">Ads</div>
            </CardContent>
          </Card>
        </div>

        {/* Mission */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-neon-pink" />
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              SipWiki was created with one goal: to be the definitive resource
              for drinking game rules and party games. We noticed that finding
              accurate, complete rules for popular games was surprisingly
              difficult - information was scattered across dozens of sites, often
              incomplete or contradictory.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We set out to create the "Wikipedia of drinking games" - a
              comprehensive, well-organized, and completely free resource that
              anyone can access. Whether you're hosting your first party or
              you're a seasoned party veteran, SipWiki has the rules you need.
            </p>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <BookOpen className="h-8 w-8 text-neon-blue mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">
                Complete Rules
              </h3>
              <p className="text-gray-400 text-sm">
                Every game includes detailed setup instructions, gameplay rules,
                variations, and pro tips. No more arguing about the rules!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Gamepad2 className="h-8 w-8 text-neon-pink mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">
                AI Game Referee
              </h3>
              <p className="text-gray-400 text-sm">
                Our AI referee knows every rule and can settle any dispute
                instantly. Just ask during Live Mode!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-neon-green mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">
                For Every Group Size
              </h3>
              <p className="text-gray-400 text-sm">
                Filter games by player count, required materials, and intensity.
                Perfect for any party size.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Heart className="h-8 w-8 text-neon-purple mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">
                Community Driven
              </h3>
              <p className="text-gray-400 text-sm">
                Submit your own games, share house rules, and help us build the
                best drinking game resource ever.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Responsible Drinking */}
        <Card className="mb-8 border-yellow-500/30">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-yellow-500" />
              Drink Responsibly
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              While we celebrate party culture, we take responsible drinking
              seriously. All games on SipWiki can be played with non-alcoholic
              beverages, and we encourage everyone to:
            </p>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Know your limits and respect them</li>
              <li>Never pressure anyone to drink</li>
              <li>Always have a designated driver or use rideshare</li>
              <li>Stay hydrated with water between drinks</li>
              <li>Look out for your friends</li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Party?
          </h2>
          <p className="text-gray-400 mb-6">
            Browse our collection of {games.length}+ games and find your next
            party favorite.
          </p>
          <Link
            href="/games"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
          >
            <Gamepad2 className="h-5 w-5" />
            Browse All Games
          </Link>
        </div>
      </main>
    </div>
  );
}
