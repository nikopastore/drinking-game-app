"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar, useSidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { Card, CardContent, Button, Badge } from "@/components/ui";
import { cocktails } from "@/config/cocktailData";
import {
  ChevronRight,
  ChevronLeft,
  Share2,
  RotateCcw,
  Sparkles,
  Wine,
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

interface CocktailPersonality {
  id: string;
  name: string;
  emoji: string;
  description: string;
  traits: string[];
  cocktails: string[]; // cocktail slugs
  color: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What's your ideal way to spend an evening?",
    answers: [
      { text: "Elegant dinner party with close friends", traits: ["sophisticated", "classic"] },
      { text: "Beach vacation vibes", traits: ["tropical", "fun"] },
      { text: "Dancing at a club until late", traits: ["bold", "energetic"] },
      { text: "Cozy night in with a good movie", traits: ["relaxed", "smooth"] },
    ],
  },
  {
    id: 2,
    question: "Pick a flavor profile:",
    answers: [
      { text: "Citrusy and refreshing", traits: ["citrus", "refreshing"] },
      { text: "Sweet and fruity", traits: ["sweet", "tropical"] },
      { text: "Strong and spirit-forward", traits: ["bold", "sophisticated"] },
      { text: "Herbaceous and complex", traits: ["botanical", "classic"] },
    ],
  },
  {
    id: 3,
    question: "What's your go-to color to wear?",
    answers: [
      { text: "Classic black or white", traits: ["sophisticated", "classic"] },
      { text: "Bright tropical colors", traits: ["tropical", "fun"] },
      { text: "Deep red or burgundy", traits: ["bold", "passionate"] },
      { text: "Soft pastels", traits: ["relaxed", "sweet"] },
    ],
  },
  {
    id: 4,
    question: "Your friends would describe you as:",
    answers: [
      { text: "The sophisticated one", traits: ["sophisticated", "classic"] },
      { text: "The life of the party", traits: ["energetic", "fun"] },
      { text: "The mysterious one", traits: ["bold", "complex"] },
      { text: "The sweet and caring one", traits: ["sweet", "relaxed"] },
    ],
  },
  {
    id: 5,
    question: "Pick a vacation destination:",
    answers: [
      { text: "Paris or Milan", traits: ["sophisticated", "classic"] },
      { text: "Caribbean beach resort", traits: ["tropical", "fun"] },
      { text: "Tokyo or New York", traits: ["bold", "energetic"] },
      { text: "Countryside cottage", traits: ["relaxed", "botanical"] },
    ],
  },
  {
    id: 6,
    question: "What time of day do you feel most yourself?",
    answers: [
      { text: "Evening cocktail hour", traits: ["sophisticated", "classic"] },
      { text: "Sunny afternoon", traits: ["tropical", "refreshing"] },
      { text: "Late night", traits: ["bold", "energetic"] },
      { text: "Lazy morning", traits: ["relaxed", "smooth"] },
    ],
  },
  {
    id: 7,
    question: "Choose a music genre:",
    answers: [
      { text: "Jazz or classical", traits: ["sophisticated", "classic"] },
      { text: "Reggae or tropical house", traits: ["tropical", "fun"] },
      { text: "Electronic or hip-hop", traits: ["bold", "energetic"] },
      { text: "Indie or acoustic", traits: ["relaxed", "botanical"] },
    ],
  },
];

const personalities: CocktailPersonality[] = [
  {
    id: "martini",
    name: "Classic Martini",
    emoji: "🍸",
    description: "You're sophisticated, timeless, and appreciate the finer things in life. You don't need frills - quality speaks for itself.",
    traits: ["sophisticated", "classic"],
    cocktails: ["vodka-martini", "gin-martini", "manhattan"],
    color: "from-gray-400 to-gray-600",
  },
  {
    id: "margarita",
    name: "Tropical Margarita",
    emoji: "🌴",
    description: "You bring sunshine wherever you go! Fun-loving and refreshing, you're the friend everyone wants at their party.",
    traits: ["tropical", "fun", "refreshing"],
    cocktails: ["margarita", "pina-colada", "mojito"],
    color: "from-green-400 to-cyan-400",
  },
  {
    id: "old-fashioned",
    name: "Bold Old Fashioned",
    emoji: "🥃",
    description: "Strong, complex, and unapologetically yourself. You appreciate depth and aren't afraid to stand out.",
    traits: ["bold", "complex", "sophisticated"],
    cocktails: ["old-fashioned", "whiskey-sour", "negroni"],
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "cosmopolitan",
    name: "Sweet Cosmopolitan",
    emoji: "💖",
    description: "Stylish and sweet with a sharp edge. You know how to have fun while looking absolutely fabulous.",
    traits: ["sweet", "energetic", "fun"],
    cocktails: ["cosmopolitan", "french-martini", "sex-on-the-beach"],
    color: "from-pink-400 to-rose-500",
  },
  {
    id: "mojito",
    name: "Refreshing Mojito",
    emoji: "🌿",
    description: "Fresh, easygoing, and always a breath of fresh air. You bring calm energy and make everyone feel relaxed.",
    traits: ["relaxed", "refreshing", "botanical"],
    cocktails: ["mojito", "gin-tonic", "tom-collins"],
    color: "from-emerald-400 to-green-500",
  },
];

export default function WhatCocktailAreYouPage() {
  const { isExpanded } = useSidebar();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<CocktailPersonality | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (allAnswers: number[]) => {
    const traitCounts: Record<string, number> = {};

    allAnswers.forEach((answerIndex, questionIndex) => {
      const traits = questions[questionIndex].answers[answerIndex].traits;
      traits.forEach((trait) => {
        traitCounts[trait] = (traitCounts[trait] || 0) + 1;
      });
    });

    let bestMatch = personalities[0];
    let bestScore = 0;

    personalities.forEach((personality) => {
      let score = 0;
      personality.traits.forEach((trait) => {
        score += traitCounts[trait] || 0;
      });
      if (score > bestScore) {
        bestScore = score;
        bestMatch = personality;
      }
    });

    setResult(bestMatch);
    setShowResult(true);
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setShowResult(false);
  };

  const handleShare = async () => {
    if (!result) return;

    const text = `I got ${result.name}! ${result.emoji}\n\n${result.description}\n\nTake the quiz: sipwiki.app/quiz/what-cocktail-are-you`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Cocktail Personality - SipWiki",
          text,
          url: window.location.href,
        });
      } catch {
        // User cancelled
      }
    } else {
      navigator.clipboard.writeText(text);
      alert("Result copied to clipboard!");
    }
  };

  const matchingCocktails = result
    ? cocktails.filter((c) => result.cocktails.includes(c.slug)).slice(0, 3)
    : [];

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
        {/* Hero */}
        <div className="bg-gradient-to-br from-pink-500/20 via-dark-800 to-purple-500/20 border-b border-dark-600">
          <div className="max-w-2xl mx-auto px-4 py-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-pink-400 font-medium">Cocktail Personality Quiz</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              What Cocktail Are You?
            </h1>
            <p className="text-gray-400">
              Answer 7 questions to discover your cocktail personality
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-8">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={`question-${currentQuestion}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Progress */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Question {currentQuestion + 1} of {questions.length}</span>
                    <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
                      {questions[currentQuestion].question}
                    </h2>

                    <div className="space-y-3">
                      {questions[currentQuestion].answers.map((answer, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswer(index)}
                          className="w-full p-4 bg-dark-700 hover:bg-dark-600 border border-dark-600 hover:border-pink-500/50 rounded-xl text-left transition-all group"
                        >
                          <span className="text-white group-hover:text-pink-400 transition-colors">
                            {answer.text}
                          </span>
                          <ChevronRight className="float-right h-5 w-5 text-gray-500 group-hover:text-pink-400 transition-colors" />
                        </button>
                      ))}
                    </div>

                    {currentQuestion > 0 && (
                      <button
                        onClick={handleBack}
                        className="mt-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors mx-auto"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Back
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
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden">
                  <div className={`bg-gradient-to-br ${result.color} p-8 text-center`}>
                    <span className="text-6xl mb-4 block">{result.emoji}</span>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      You are a {result.name}!
                    </h2>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-300 text-center text-lg mb-6">
                      {result.description}
                    </p>

                    {matchingCocktails.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 justify-center">
                          <Wine className="h-5 w-5 text-pink-400" />
                          Cocktails You&apos;ll Love
                        </h3>
                        <div className="grid gap-3">
                          {matchingCocktails.map((cocktail) => (
                            <Link
                              key={cocktail.slug}
                              href={`/cocktails/${cocktail.slug}`}
                              className="flex items-center justify-between p-3 bg-dark-700/50 rounded-lg hover:bg-dark-600 transition-colors"
                            >
                              <span className="text-white">{cocktail.name}</span>
                              <Badge variant="pink">{cocktail.baseSpirit}</Badge>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3">
                      <Button onClick={handleShare} variant="outline" className="flex-1">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Result
                      </Button>
                      <Button onClick={handleRestart} variant="outline" className="flex-1">
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Retake Quiz
                      </Button>
                    </div>

                    <div className="mt-6 text-center">
                      <Link href="/cocktails" className="text-pink-400 hover:underline">
                        Browse all cocktail recipes →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <MobileNav />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Quiz",
            name: "What Cocktail Are You? - Personality Quiz",
            description: "Take this fun personality quiz to discover which classic cocktail matches your vibe and personality.",
            url: "https://sipwiki.app/quiz/what-cocktail-are-you",
            educationalAlignment: {
              "@type": "AlignmentObject",
              alignmentType: "educationalSubject",
              targetName: "Entertainment",
            },
            author: {
              "@type": "Organization",
              name: "SipWiki",
              url: "https://sipwiki.app",
            },
          }),
        }}
      />
    </div>
  );
}
