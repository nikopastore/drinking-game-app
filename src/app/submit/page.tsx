"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Button, Card, CardContent, Input, Textarea, Badge } from "@/components/ui";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import { User, Session } from "@supabase/supabase-js";
import {
  PlusCircle,
  LogIn,
  Send,
  CheckCircle,
  Link as LinkIcon,
  Users,
  Package,
  Wine,
} from "lucide-react";
import { cn } from "@/lib/utils";

const materialOptions = [
  "cards",
  "dice",
  "cups",
  "red solo cups",
  "ping pong balls",
  "shot glasses",
  "no prop",
];

const playerOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const maxPlayerOptions = [2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20, null];

export default function SubmitPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rulesText, setRulesText] = useState("");
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [customMaterial, setCustomMaterial] = useState("");
  const [minPlayers, setMinPlayers] = useState<number>(2);
  const [maxPlayers, setMaxPlayers] = useState<number | null>(null);
  const [alcoholType, setAlcoholType] = useState<"beer" | "liquor" | "any">("any");
  const [sourceUrl, setSourceUrl] = useState("");

  const supabase = createClient();

  useEffect(() => {
    const configured = isSupabaseConfigured();
    setIsConfigured(configured);
    if (!configured) {
      setIsLoading(false);
      return;
    }

    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setIsLoading(false);
    };
    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event: unknown, session: Session | null) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const handleSignIn = async (provider: "google" | "github") => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/submit`,
      },
    });
  };

  const handleSignInWithEmail = async () => {
    const email = prompt("Enter your email for a magic link:");
    if (!email) return;

    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/submit`,
      },
    });
    alert("Check your email for a login link!");
  };

  const toggleMaterial = (material: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material]
    );
  };

  const addCustomMaterial = () => {
    if (customMaterial.trim() && !selectedMaterials.includes(customMaterial.trim())) {
      setSelectedMaterials((prev) => [...prev, customMaterial.trim()]);
      setCustomMaterial("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    // Validation
    if (!name.trim() || !description.trim() || !rulesText.trim()) {
      alert("Please fill in all required fields");
      return;
    }

    if (selectedMaterials.length === 0) {
      alert("Please select at least one material (or 'No Props')");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("game_submissions").insert({
        user_id: user.id,
        name: name.trim(),
        description: description.trim(),
        rules_text: rulesText.trim(),
        materials: selectedMaterials,
        min_players: minPlayers,
        max_players: maxPlayers,
        alcohol_type: alcoholType,
        source_url: sourceUrl.trim() || null,
      });

      if (error) throw error;

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting game:", error);
      alert("There was an error submitting your game. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-neon-pink border-t-transparent rounded-full" />
      </div>
    );
  }

  // Show placeholder when Supabase isn't configured
  if (!isConfigured) {
    return (
      <div className="min-h-screen bg-dark-900">
        <Header />
        <main className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-neon-pink/20 flex items-center justify-center mx-auto mb-4">
              <PlusCircle className="h-8 w-8 text-neon-pink" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Submit a{" "}
              <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
                Drinking Game
              </span>
            </h1>
          </div>
          <Card>
            <CardContent className="p-8 text-center">
              <PlusCircle className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">
                Coming Soon!
              </h2>
              <p className="text-gray-400 mb-4">
                Game submissions will be available once Supabase is configured.
              </p>
              <p className="text-gray-500 text-sm">
                See .env.example for setup instructions.
              </p>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />

      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-neon-pink/20 flex items-center justify-center mx-auto mb-4">
            <PlusCircle className="h-8 w-8 text-neon-pink" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Submit a{" "}
            <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
              Drinking Game
            </span>
          </h1>
          <p className="text-gray-400">
            Know a game we&apos;re missing? Share it with the community!
          </p>
        </div>

        {/* Auth prompt */}
        {!user ? (
          <Card>
            <CardContent className="p-8 text-center">
              <LogIn className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">
                Sign in to submit
              </h2>
              <p className="text-gray-400 mb-6">
                Create an account to submit games and track your contributions
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Button onClick={() => handleSignIn("google")}>
                  Sign in with Google
                </Button>
                <Button variant="secondary" onClick={handleSignInWithEmail}>
                  Magic Link
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : submitted ? (
          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-neon-green/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-neon-green" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">
                Thanks for your submission!
              </h2>
              <p className="text-gray-400 mb-6">
                We&apos;ll review your game and add it to the collection soon.
              </p>
              <Button onClick={() => window.location.reload()}>
                Submit Another
              </Button>
            </CardContent>
          </Card>
        ) : (
          <form onSubmit={handleSubmit}>
            <Card className="mb-6">
              <CardContent className="p-6 space-y-6">
                {/* Game Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Game Name *
                  </label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Ring of Fire"
                    required
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Short Description * (max 300 chars)
                  </label>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value.slice(0, 300))}
                    placeholder="A fun one-liner that describes the vibe of the game..."
                    className="min-h-[80px]"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {description.length}/300 characters
                  </p>
                </div>

                {/* Rules */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Rules *
                  </label>
                  <Textarea
                    value={rulesText}
                    onChange={(e) => setRulesText(e.target.value)}
                    placeholder="Write out the complete rules step by step. Use numbered lists for clarity.

Example:
1. Players sit in a circle...
2. Each player draws a card...
3. If you draw an Ace..."
                    className="min-h-[200px] font-mono text-sm"
                    required
                  />
                </div>

                {/* Materials */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                    <Package className="h-4 w-4 text-neon-pink" />
                    Materials Needed *
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {materialOptions.map((material) => (
                      <button
                        key={material}
                        type="button"
                        onClick={() => toggleMaterial(material)}
                        className={cn(
                          "px-3 py-1.5 rounded-full text-sm font-medium transition-all capitalize",
                          selectedMaterials.includes(material)
                            ? "bg-neon-pink text-white"
                            : "bg-dark-700 text-gray-300 hover:bg-dark-600"
                        )}
                      >
                        {material}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      value={customMaterial}
                      onChange={(e) => setCustomMaterial(e.target.value)}
                      placeholder="Add custom material..."
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addCustomMaterial();
                        }
                      }}
                    />
                    <Button type="button" variant="secondary" onClick={addCustomMaterial}>
                      Add
                    </Button>
                  </div>
                  {selectedMaterials.filter((m) => !materialOptions.includes(m)).length >
                    0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {selectedMaterials
                        .filter((m) => !materialOptions.includes(m))
                        .map((material) => (
                          <Badge
                            key={material}
                            variant="purple"
                            className="cursor-pointer"
                            onClick={() => toggleMaterial(material)}
                          >
                            {material} ✕
                          </Badge>
                        ))}
                    </div>
                  )}
                </div>

                {/* Player Count */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                      <Users className="h-4 w-4 text-neon-blue" />
                      Min Players *
                    </label>
                    <select
                      value={minPlayers}
                      onChange={(e) => setMinPlayers(Number(e.target.value))}
                      className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white"
                    >
                      {playerOptions.map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Max Players
                    </label>
                    <select
                      value={maxPlayers ?? "unlimited"}
                      onChange={(e) =>
                        setMaxPlayers(
                          e.target.value === "unlimited" ? null : Number(e.target.value)
                        )
                      }
                      className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white"
                    >
                      {maxPlayerOptions.map((num) => (
                        <option key={num ?? "unlimited"} value={num ?? "unlimited"}>
                          {num ?? "Unlimited"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Alcohol Type */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                    <Wine className="h-4 w-4 text-neon-purple" />
                    Best Played With *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "Beer/Seltzer", value: "beer" as const },
                      { label: "Liquor/Shots", value: "liquor" as const },
                      { label: "Any Drink", value: "any" as const },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setAlcoholType(option.value)}
                        className={cn(
                          "px-4 py-2 rounded-full text-sm font-medium transition-all",
                          alcoholType === option.value
                            ? "bg-neon-purple text-white"
                            : "bg-dark-700 text-gray-300 hover:bg-dark-600"
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Source URL */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                    <LinkIcon className="h-4 w-4" />
                    Source URL (optional)
                  </label>
                  <Input
                    value={sourceUrl}
                    onChange={(e) => setSourceUrl(e.target.value)}
                    placeholder="https://youtube.com/... or website link"
                    type="url"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Found a YouTube video or website for this game? Paste the link so we
                    can feature it!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
              isLoading={isSubmitting}
            >
              <Send className="h-5 w-5 mr-2" />
              Submit Game
            </Button>
          </form>
        )}
      </main>
    </div>
  );
}
