import Link from "next/link";
import { Home, Search, Gamepad2, BookOpen, GlassWater } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-8xl font-bold bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
            404
          </div>
          <div className="mt-2 text-2xl font-bold text-white">
            Page Not Found
          </div>
          <p className="mt-4 text-gray-400">
            Looks like this page had one too many drinks and wandered off.
            Let&apos;s get you back to the party!
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3 mb-8">
          <Link
            href="/"
            className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>

          <Link
            href="/games"
            className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-dark-800 text-white font-medium rounded-xl border border-dark-600 hover:border-neon-pink/50 transition-colors"
          >
            <Gamepad2 className="h-5 w-5 text-neon-pink" />
            Browse All Games
          </Link>

          <Link
            href="/guides"
            className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-dark-800 text-white font-medium rounded-xl border border-dark-600 hover:border-neon-blue/50 transition-colors"
          >
            <BookOpen className="h-5 w-5 text-neon-blue" />
            Game Guides
          </Link>

          <Link
            href="/cocktails"
            className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-dark-800 text-white font-medium rounded-xl border border-dark-600 hover:border-neon-purple/50 transition-colors"
          >
            <GlassWater className="h-5 w-5 text-neon-purple" />
            Cocktail Recipes
          </Link>
        </div>

        {/* Search Suggestion */}
        <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-600">
          <p className="text-sm text-gray-400 mb-3">
            Looking for something specific?
          </p>
          <Link
            href="/search"
            className="inline-flex items-center gap-2 text-neon-pink hover:underline"
          >
            <Search className="h-4 w-4" />
            Search SipWiki
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-8 text-xs text-gray-500">
          If you think this is a mistake, please{" "}
          <Link href="/about" className="text-neon-pink hover:underline">
            contact us
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
