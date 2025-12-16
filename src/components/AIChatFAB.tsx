"use client";

import { useState, useRef, useEffect } from "react";
import { Game } from "@/types";
import { Button, Input } from "@/components/ui";
import { useAppStore } from "@/lib/store";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface AIChatFABProps {
  game: Game;
}

export function AIChatFAB({ game }: AIChatFABProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { chatHistory, addMessage } = useAppStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    addMessage({ role: "user", content: userMessage });
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gameName: game.name,
          rules: game.rules_text,
          message: userMessage,
          history: chatHistory,
        }),
      });

      const data = await res.json();
      addMessage({ role: "assistant", content: data.reply });
    } catch (error) {
      addMessage({
        role: "assistant",
        content: "Oops! Something went wrong. Try again!",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* FAB Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full",
          "bg-neon-blue text-dark-900 shadow-lg",
          "flex items-center justify-center",
          "transition-all duration-300 hover:scale-110",
          "animate-pulse-glow",
          isOpen && "hidden"
        )}
        aria-label="Open AI Chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Drawer */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 transition-transform duration-300",
          isOpen ? "translate-y-0" : "translate-y-full"
        )}
      >
        <div className="bg-dark-800 border-t border-dark-600 rounded-t-2xl shadow-2xl max-h-[70vh] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-dark-600">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center">
                <Bot className="h-5 w-5 text-neon-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-white">AI Referee</h3>
                <p className="text-xs text-gray-400">Ask me about the rules</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="p-2"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[200px] max-h-[400px]">
            {chatHistory.length === 0 && (
              <div className="text-center py-8">
                <Bot className="h-12 w-12 text-dark-600 mx-auto mb-3" />
                <p className="text-gray-400 mb-2">
                  Need help with {game.name}?
                </p>
                <p className="text-sm text-gray-500">
                  Ask me anything about the rules!
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {["What happens if I roll doubles?", "How do I win?", "Can you explain the rules?"].map(
                    (suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => setInput(suggestion)}
                        className="text-xs px-3 py-1.5 bg-dark-700 text-gray-300 rounded-full hover:bg-dark-600 transition-colors"
                      >
                        {suggestion}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}

            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={cn(
                  "flex gap-3",
                  msg.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-neon-blue" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] px-4 py-2 rounded-2xl",
                    msg.role === "user"
                      ? "bg-neon-pink text-white rounded-br-md"
                      : "bg-dark-700 text-gray-200 rounded-bl-md"
                  )}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-neon-pink/20 flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-neon-pink" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-neon-blue" />
                </div>
                <div className="bg-dark-700 px-4 py-2 rounded-2xl rounded-bl-md">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.1s]" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-dark-600">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about the rules..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="px-4"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
