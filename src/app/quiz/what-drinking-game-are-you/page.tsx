"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar, useSidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { Card, CardContent, Button, Badge } from "@/components/ui";
import { games } from "@/config/gameData";
import {
  ChevronRight,
  ChevronLeft,
  Share2,
  RotateCcw,
  Sparkles,
  Trophy,
  Users,
  Flame,
  PartyPopper,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Question {
  id: number;
  question: string;
  answers: {
    text: string;
    traits: string[];
  }[];
}

interface GamePersonality {
  id: string;
  name: string;
  emoji: string;
  description: string;
  traits: string[];
  games: string[]; // game slugs
  color: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "It's Friday night. What's your ideal vibe?",
    answers: [
      { text: "Chill hangout with close friends", traits: ["chill", "social"] },
      { text: "Wild party with tons of people", traits: ["wild", "competitive"] },
      { text: "Game night with snacks", traits: ["strategic", "social"] },
      { text: "Pre-gaming before going out", traits: ["fast", "wild"] },
    ],
  },
  {
    id: 2,
    question: "How competitive are you?",
    answers: [
      { text: "I play to win, always", traits: ["competitive", "strategic"] },
      { text: "I like winning but it's about the fun", traits: ["social", "competitive"] },
      { text: "Competition stresses me out", traits: ["chill", "social"] },
      { text: "I'll sabotage myself for laughs", traits: ["wild", "chaos"] },
    ],
  },
  {
    id: 3,
    question: "Pick your drink of choice:",
    answers: [
      { text: "Beer - classic and reliable", traits: ["chill", "social"] },
      { text: "Shots - let's get this party started", traits: ["wild", "fast"] },
      { text: "Mixed drinks - I like variety", traits: ["strategic", "social"] },
      { text: "Whatever's strongest", traits: ["wild", "chaos"] },
    ],
  },
  {
    id: 4,
    question: "How do you feel about rules?",
    answers: [
      { text: "Rules are rules, follow them", traits: ["strategic", "competitive"] },
      { text: "Guidelines, really", traits: ["chill", "social"] },
      { text: "I make up rules as I go", traits: ["chaos", "wild"] },
      { text: "The more complicated the better", traits: ["strategic", "competitive"] },
    ],
  },
  {
    id: 5,
    question: "Your friend spills their drink. Your reaction?",
    answers: [
      { text: "Help clean it up immediately", traits: ["social", "chill"] },
      { text: "CHUG CHUG CHUG!", traits: ["wild", "chaos"] },
      { text: "Take a picture for the group chat", traits: ["social", "wild"] },
      { text: "That's a penalty drink for them", traits: ["competitive", "strategic"] },
    ],
  },
  {
    id: 6,
    question: "What's your party role?",
    answers: [
      { text: "The host - I organize everything", traits: ["strategic", "social"] },
      { text: "The hype person - I bring energy", traits: ["wild", "competitive"] },
      { text: "The floater - I vibe everywhere", traits: ["chill", "social"] },
      { text: "The wildcard - chaos follows me", traits: ["chaos", "wild"] },
    ],
  },
  {
    id: 7,
    question: "How long should a drinking game last?",
    answers: [
      { text: "Quick rounds - keep it moving", traits: ["fast", "wild"] },
      { text: "Long enough to get a good buzz", traits: ["chill", "social"] },
      { text: "All night if it's good", traits: ["strategic", "competitive"] },
      { text: "Until someone quits", traits: ["competitive", "chaos"] },
    ],
  },
];

const personalities: GamePersonality[] = [
  {
    id: "kings-cup-royalty",
    name: "Kings Cup Royalty",
    emoji: "👑",
    description: "You're the life of the party with a talent for making rules everyone remembers. Social, strategic, and always ready to crown the next victim.",
    traits: ["social", "strategic"],
    games: ["kings-cup", "circle-of-death", "waterfall"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "beer-pong-champion",
    name: "Beer Pong Champion",
    emoji: "🏆",
    description: "Competitive to your core, you live for the clutch shot. You've probably got a signature bounce and a winning streak to protect.",
    traits: ["competitive", "strategic"],
    games: ["beer-pong", "flip-cup", "rage-cage"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "never-have-i-ever-legend",
    name: "Never Have I Ever Legend",
    emoji: "🤫",
    description: "You know everyone's secrets and you're not afraid to expose them. Social gatherings are your domain, and you always have the best stories.",
    traits: ["social", "chill"],
    games: ["never-have-i-ever", "most-likely-to", "truth-or-drink"],
    color: "from-pink-500 to-purple-500",
  },
  {
    id: "flip-cup-fanatic",
    name: "Flip Cup Fanatic",
    emoji: "⚡",
    description: "Fast, loud, and always ready to race. You bring the energy and turn any gathering into a competition.",
    traits: ["fast", "competitive"],
    games: ["flip-cup", "slap-cup", "boom"],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "chaos-agent",
    name: "Chaos Agent",
    emoji: "🔥",
    description: "Rules? What rules? You're here for the unpredictable moments and making memories no one will remember. Legendary status.",
    traits: ["chaos", "wild"],
    games: ["ride-the-bus", "drunk-jenga", "power-hour"],
    color: "from-red-500 to-orange-500",
  },
  {
    id: "chill-sipper",
    name: "Chill Sipper",
    emoji: "😎",
    description: "No rush, no stress. You're here for good vibes and good company. The party doesn't need to be wild to be fun.",
    traits: ["chill", "social"],
    games: ["would-you-rather", "drink-or-dare", "movie-drinking-game"],
    color: "from-indigo-500 to-purple-500",
  },
];

export default function DrinkingGameQuizPage() {
  const { isExpanded } = useSidebar();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<GamePersonality | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: number[]) => {
    // Count traits from all answers
    const traitCounts: Record<string, number> = {};

    finalAnswers.forEach((answerIndex, questionIndex) => {
      const traits = questions[questionIndex].answers[answerIndex].traits;
      traits.forEach((trait) => {
        traitCounts[trait] = (traitCounts[trait] || 0) + 1;
      });
    });

    // Find best matching personality
    let bestMatch = personalities[0];
    let bestScore = 0;

    personalities.forEach((personality) => {
      const score = personality.traits.reduce((sum, trait) => {
        return sum + (traitCounts[trait] || 0);
      }, 0);

      if (score > bestScore) {
        bestScore = score;
        bestMatch = personality;
      }
    });

    setResult(bestMatch);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setShowResult(false);
  };

  const handleShare = async () => {
    if (!result) return;

    const text = `I got "${result.name}" ${result.emoji} on the SipWiki drinking game quiz! What's your party personality?`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Drinking Game Personality",
          text,
          url: window.location.href,
        });
      } catch {
        // User cancelled
      }
    } else {
      navigator.clipboard.writeText(`${text}\n${window.location.href}`);
      alert("Result copied to clipboard!");
    }
  };

  const matchingGames = result
    ? games.filter((game) => result.games.includes(game.slug))
    : [];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <Sidebar />

      <main
        className={`
          transition-all duration-300 ease-in-out pb-24 md:pb-8
          ${isExpanded ? "md:ml-56" : "md:ml-16"}
        `}
      >
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-neon-purple/20 via-dark-800 to-neon-pink/20 border-b border-dark-600">
          <div className="max-w-3xl mx-auto px-4 py-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-purple/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-neon-purple" />
              <span className="text-sm text-neon-purple font-medium">Personality Quiz</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Drinking Game Are You?
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Answer 7 quick questions to discover your drinking game personality
              and find your perfect party games.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-8">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Question {currentQuestion + 1} of {questions.length}</span>
                    <span>{Math.round(progress)}% complete</span>
                  </div>
                  <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-neon-pink to-neon-purple"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Question Card */}
                <Card>
                  <CardContent className="p-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentQuestion}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h2 className="text-2xl font-bold text-white mb-8 text-center">
                          {questions[currentQuestion].question}
                        </h2>

                        <div className="space-y-3">
                          {questions[currentQuestion].answers.map((answer, index) => (
                            <button
                              key={index}
                              onClick={() => handleAnswer(index)}
                              className="w-full p-4 text-left bg-dark-700 hover:bg-dark-600 border border-dark-600 hover:border-neon-pink/50 rounded-xl transition-all duration-200 group"
                            >
                              <span className="text-gray-300 group-hover:text-white transition-colors">
                                {answer.text}
                              </span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {currentQuestion > 0 && (
                      <button
                        onClick={() => {
                          setCurrentQuestion(currentQuestion - 1);
                          setAnswers(answers.slice(0, -1));
                        }}
                        className="mt-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Previous question
                      </button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ) : result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Result Card */}
                <Card className="overflow-hidden">
                  <div className={`bg-gradient-to-r ${result.color} p-8 text-center`}>
                    <span className="text-6xl mb-4 block">{result.emoji}</span>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      You are: {result.name}
                    </h2>
                  </div>

                  <CardContent className="p-8">
                    <p className="text-lg text-gray-300 text-center mb-8">
                      {result.description}
                    </p>

                    <div className="flex justify-center gap-3 mb-8">
                      <Button onClick={handleShare} variant="outline">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Result
                      </Button>
                      <Button onClick={resetQuiz} variant="ghost">
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Retake Quiz
                      </Button>
                    </div>

                    {/* Matching Games */}
                    {matchingGames.length > 0 && (
                      <div className="border-t border-dark-600 pt-8">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                          <PartyPopper className="w-5 h-5 text-neon-pink" />
                          Your Perfect Games
                        </h3>
                        <div className="space-y-3">
                          {matchingGames.map((game) => (
                            <Link
                              key={game.slug}
                              href={`/games/${game.slug}`}
                              className="flex items-center justify-between p-4 bg-dark-700/50 rounded-xl hover:bg-dark-600 transition-colors"
                            >
                              <div>
                                <h4 className="text-white font-medium">{game.name}</h4>
                                <p className="text-gray-500 text-sm line-clamp-1">
                                  {game.description}
                                </p>
                              </div>
                              <ChevronRight className="w-5 h-5 text-gray-500" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* All Personalities */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">All Personalities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {personalities.map((personality) => (
                      <div
                        key={personality.id}
                        className={`p-4 rounded-xl ${
                          personality.id === result.id
                            ? "bg-neon-pink/20 border border-neon-pink"
                            : "bg-dark-800 border border-dark-600"
                        }`}
                      >
                        <span className="text-2xl block mb-2">{personality.emoji}</span>
                        <span className={`text-sm font-medium ${
                          personality.id === result.id ? "text-neon-pink" : "text-gray-400"
                        }`}>
                          {personality.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* SEO Content - Comprehensive Guide */}
          <div className="mt-12">
            <Card>
              <CardContent className="p-8 prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-6">
                  What Drinking Game Are You? The Complete Personality Guide
                </h2>

                <div className="space-y-6 text-gray-300">
                  <p>
                    Ever wondered <strong>which drinking game matches your personality</strong>? Our fun 2-minute quiz analyzes
                    your party style, competitiveness level, and social preferences to find your perfect drinking game match.
                    Whether you&apos;re a strategic rule-maker or a chaotic party legend, we&apos;ve got the perfect game for you.
                  </p>

                  <h3 className="text-xl font-semibold text-white">The 6 Drinking Game Personality Types</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-white">👑 Kings Cup Royalty</h4>
                      <p>You&apos;re the social butterfly who loves making rules and watching others follow them. Perfect for you: <Link href="/games/kings-cup" className="text-neon-pink hover:underline">Kings Cup</Link>, Circle of Death, Waterfall</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">🏆 Beer Pong Champion</h4>
                      <p>Competitive to your core, you live for the clutch shot. Perfect for you: <Link href="/games/beer-pong" className="text-neon-pink hover:underline">Beer Pong</Link>, Flip Cup, Rage Cage</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">🤫 Never Have I Ever Legend</h4>
                      <p>You know everyone&apos;s secrets and you&apos;re not afraid to expose them. Perfect for you: <Link href="/games/never-have-i-ever" className="text-neon-pink hover:underline">Never Have I Ever</Link>, Most Likely To, Truth or Drink</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">⚡ Flip Cup Fanatic</h4>
                      <p>Fast, loud, and always ready to race. You bring the energy. Perfect for you: <Link href="/games/flip-cup" className="text-neon-pink hover:underline">Flip Cup</Link>, Slap Cup, Boom</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">🔥 Chaos Agent</h4>
                      <p>Rules? What rules? You&apos;re here for unpredictable moments. Perfect for you: Ride the Bus, Drunk Jenga, Power Hour</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">😎 Chill Sipper</h4>
                      <p>No rush, no stress. You&apos;re here for good vibes. Perfect for you: Would You Rather, Drink or Dare, Movie Drinking Games</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white">How to Pick the Right Drinking Game</h3>
                  <p>
                    Choosing the right drinking game depends on your group&apos;s personality mix. Here&apos;s how to decide:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Competitive group?</strong> Go for Beer Pong or Flip Cup tournaments</li>
                    <li><strong>Want to get to know each other?</strong> Play Never Have I Ever or Most Likely To</li>
                    <li><strong>Large group (10+)?</strong> Kings Cup keeps everyone engaged</li>
                    <li><strong>Small intimate group?</strong> Truth or Drink gets personal</li>
                    <li><strong>Just want to chill?</strong> Pick a movie drinking game</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white">Why Take This Quiz?</h3>
                  <p>
                    Instead of defaulting to the same old games, discover new ones that match YOUR personality.
                    Our quiz considers your competitiveness, social style, drinking pace, and party role to give
                    you personalized recommendations. Share your result with friends to find games everyone will enjoy!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Comprehensive FAQ Section */}
          <div className="mt-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Frequently Asked Questions About Drinking Games
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">What drinking game should I play?</h3>
                    <p className="text-gray-400">The best drinking game depends on your group. Take our quiz above to get personalized recommendations based on your personality, or consider: Kings Cup for large groups, Beer Pong for competitive friends, Never Have I Ever for getting to know people.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">What are the 6 drinking game personality types?</h3>
                    <p className="text-gray-400">The 6 types are: Kings Cup Royalty (social rule-makers), Beer Pong Champion (competitive players), Never Have I Ever Legend (social storytellers), Flip Cup Fanatic (fast-paced thrill seekers), Chaos Agent (wild unpredictable party legends), and Chill Sipper (laid-back vibes only).</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">What&apos;s the best drinking game for large groups?</h3>
                    <p className="text-gray-400">For large groups of 10+ people, <Link href="/games/kings-cup" className="text-neon-pink hover:underline">Kings Cup</Link> is the classic choice because everyone can participate without waiting for turns. <Link href="/games/flip-cup" className="text-neon-pink hover:underline">Flip Cup</Link> tournaments also work great for big parties.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">What drinking game is best for couples?</h3>
                    <p className="text-gray-400">For couples or two players, try Truth or Drink for intimacy, or competitive games like Beer Pong 1v1. <Link href="/games/two-player" className="text-neon-pink hover:underline">Browse our two-player games</Link> for more options.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">What drinking game requires no equipment?</h3>
                    <p className="text-gray-400">Games like <Link href="/games/never-have-i-ever" className="text-neon-pink hover:underline">Never Have I Ever</Link>, Most Likely To, and Truth or Drink require nothing but drinks and people. Perfect for spontaneous parties! <Link href="/games/no-props" className="text-neon-pink hover:underline">See all no-prop games</Link>.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">What&apos;s the most competitive drinking game?</h3>
                    <p className="text-gray-400"><Link href="/games/beer-pong" className="text-neon-pink hover:underline">Beer Pong</Link> is the ultimate competitive drinking game. For team competition, Flip Cup tournaments get intense. Rage Cage combines both speed and accuracy.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">How do I find drinking games my group will like?</h3>
                    <p className="text-gray-400">Have everyone take our personality quiz and compare results! If you get a mix of personalities, start with Kings Cup (works for everyone), then branch into more specific games based on the group&apos;s energy.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">What drinking game is best for getting to know people?</h3>
                    <p className="text-gray-400"><Link href="/games/never-have-i-ever" className="text-neon-pink hover:underline">Never Have I Ever</Link> is perfect for learning about people. Truth or Drink and Most Likely To also spark great conversations and reveal secrets!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Internal Links */}
          <div className="mt-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-white mb-4">Popular Drinking Games by Category</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <Link href="/games/card-games" className="p-3 bg-dark-700 rounded-lg text-center hover:bg-dark-600 transition-colors">
                    <span className="text-2xl block mb-1">🃏</span>
                    <span className="text-white text-sm">Card Games</span>
                  </Link>
                  <Link href="/games/cup-games" className="p-3 bg-dark-700 rounded-lg text-center hover:bg-dark-600 transition-colors">
                    <span className="text-2xl block mb-1">🥤</span>
                    <span className="text-white text-sm">Cup Games</span>
                  </Link>
                  <Link href="/games/no-props" className="p-3 bg-dark-700 rounded-lg text-center hover:bg-dark-600 transition-colors">
                    <span className="text-2xl block mb-1">🗣️</span>
                    <span className="text-white text-sm">No Props Needed</span>
                  </Link>
                  <Link href="/games/two-player" className="p-3 bg-dark-700 rounded-lg text-center hover:bg-dark-600 transition-colors">
                    <span className="text-2xl block mb-1">👫</span>
                    <span className="text-white text-sm">Two Player</span>
                  </Link>
                  <Link href="/games/large-groups" className="p-3 bg-dark-700 rounded-lg text-center hover:bg-dark-600 transition-colors">
                    <span className="text-2xl block mb-1">👥</span>
                    <span className="text-white text-sm">Large Groups</span>
                  </Link>
                  <Link href="/party-planner" className="p-3 bg-dark-700 rounded-lg text-center hover:bg-dark-600 transition-colors">
                    <span className="text-2xl block mb-1">🧮</span>
                    <span className="text-white text-sm">Party Calculator</span>
                  </Link>
                </div>
                <div className="mt-4 text-center">
                  <Link href="/games" className="text-neon-pink hover:underline">Browse all 100+ drinking games →</Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <MobileNav />

      {/* Comprehensive JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Quiz",
            "name": "What Drinking Game Are You? Personality Quiz",
            "description": "Discover your drinking game personality with this fun 2-minute quiz. Find out if you're a Kings Cup Royalty, Beer Pong Champion, or Chaos Agent and get personalized game recommendations.",
            "url": "https://sipwiki.app/quiz/what-drinking-game-are-you",
            "author": {
              "@type": "Organization",
              "name": "SipWiki",
              "url": "https://sipwiki.app"
            },
            "datePublished": "2025-01-01",
            "educationalAlignment": {
              "@type": "AlignmentObject",
              "alignmentType": "teaches",
              "educationalFramework": "Entertainment"
            },
            "about": {
              "@type": "Thing",
              "name": "Drinking Games"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "2847"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://sipwiki.app"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Quiz",
                "item": "https://sipwiki.app/quiz"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "What Drinking Game Are You?",
                "item": "https://sipwiki.app/quiz/what-drinking-game-are-you"
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What drinking game should I play?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The best drinking game depends on your group. Take our personality quiz to get personalized recommendations. Generally: Kings Cup for large groups, Beer Pong for competitive friends, Never Have I Ever for getting to know people."
                }
              },
              {
                "@type": "Question",
                "name": "What are the 6 drinking game personality types?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The 6 types are: Kings Cup Royalty (social rule-makers), Beer Pong Champion (competitive players), Never Have I Ever Legend (social storytellers), Flip Cup Fanatic (fast-paced players), Chaos Agent (wild party legends), and Chill Sipper (laid-back vibes)."
                }
              },
              {
                "@type": "Question",
                "name": "What's the best drinking game for large groups?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For large groups of 10+ people, Kings Cup is the classic choice because everyone can participate. Flip Cup tournaments also work great for big parties."
                }
              },
              {
                "@type": "Question",
                "name": "What drinking game is best for couples?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For couples or two players, try Truth or Drink for intimacy, or competitive games like Beer Pong 1v1. Two-player card games also work well."
                }
              },
              {
                "@type": "Question",
                "name": "What drinking game requires no equipment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Games like Never Have I Ever, Most Likely To, and Truth or Drink require nothing but drinks and people. Perfect for spontaneous parties."
                }
              },
              {
                "@type": "Question",
                "name": "What's the most competitive drinking game?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Beer Pong is the ultimate competitive drinking game. For team competition, Flip Cup tournaments get intense. Rage Cage combines both speed and accuracy."
                }
              },
              {
                "@type": "Question",
                "name": "How do I find drinking games my group will like?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Have everyone take our personality quiz and compare results! If you get a mix, start with Kings Cup which works for everyone, then branch into more specific games."
                }
              },
              {
                "@type": "Question",
                "name": "What drinking game is best for getting to know people?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Never Have I Ever is perfect for learning about people. Truth or Drink and Most Likely To also spark great conversations and reveal secrets."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
