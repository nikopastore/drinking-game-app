"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import type { Game } from "@/types";
import { Button, Input, Modal } from "@/components/ui";
import { useAppStore } from "@/lib/store";
import { refereeSuggestions } from "@/lib/chatSuggestions";
import { CHAT_MESSAGE_LIMIT, CHAT_CONTEXT_MESSAGES, CHAT_HISTORY_CONTENT_LIMIT, CHAT_CLIENT_TIMEOUT_MS } from "@/lib/chatConfig";
import { MessageCircle, Send, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

export function AIChatFAB({ game }: { game: Game }) {
  const startedAt = useAppStore((state) => state.session?.startedAt);
  // A new game/session owns a new request lifecycle. Late responses cannot
  // enter the next session's transcript.
  return <RefereeChat key={`${game.slug}:${startedAt ?? "none"}`} game={game} />;
}

function RefereeChat({ game }: { game: Game }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pending, setPending] = useState<string | null>(null);
  const [failedQuestion, setFailedQuestion] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [cooldownUntil, setCooldownUntil] = useState(0);
  const chatHistory = useAppStore((state) => state.chatHistory);
  const addMessage = useAppStore((state) => state.addMessage);
  const controllerRef = useRef<AbortController | null>(null);
  const requestVersion = useRef(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const staticBuild = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView?.({ behavior: "smooth" });
  }, [chatHistory, pending, error, isOpen]);
  useEffect(() => { if (isOpen) inputRef.current?.focus(); }, [isOpen]);
  useEffect(() => {
    const controller = controllerRef;
    const version = requestVersion;
    return () => { ++version.current; controller.current?.abort(); };
  }, []);
  useEffect(() => {
    if (!cooldownUntil) return;
    const timer = setTimeout(() => setCooldownUntil(0), Math.max(0, cooldownUntil - Date.now()));
    return () => clearTimeout(timer);
  }, [cooldownUntil]);

  const close = useCallback(() => {
    ++requestVersion.current;
    controllerRef.current?.abort();
    controllerRef.current = null;
    setIsLoading(false); setPending(null); setError(""); setFailedQuestion(null); setIsOpen(false);
  }, []);

  const sendMessage = async (question: string) => {
    const userMessage = question.trim();
    if (!userMessage || userMessage.length > CHAT_MESSAGE_LIMIT || controllerRef.current || cooldownUntil > Date.now() || staticBuild) return;
    const id = ++requestVersion.current;
    const controller = new AbortController();
    controllerRef.current = controller;
    const session = useAppStore.getState().session;
    const current = () => id === requestVersion.current && session === useAppStore.getState().session;
    let timedOut = false;
    let failureText = "Could not reach the referee. Try again or read the rules.";
    const timer = setTimeout(() => { timedOut = true; controller.abort(); }, CHAT_CLIENT_TIMEOUT_MS);
    setInput(""); setError(""); setFailedQuestion(null); setPending(userMessage); setIsLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST", headers: { "Content-Type": "application/json" }, signal: controller.signal,
        body: JSON.stringify({ gameSlug: game.slug, message: userMessage, history: chatHistory.slice(-CHAT_CONTEXT_MESSAGES).map((msg) => ({ ...msg, content: msg.content.slice(0, CHAT_HISTORY_CONTENT_LIMIT) })) }),
      });
      const data = await response.json();
      if (!current()) return;
      if (data.code === "AGE_CONFIRMATION_REQUIRED") {
        window.dispatchEvent(new Event("sipwiki-age-consent-expired"));
        return;
      }
      if (!response.ok) {
        const retryAfter = Number(data.retryAfter ?? response.headers.get("retry-after"));
        if (Number.isFinite(retryAfter) && retryAfter > 0) setCooldownUntil(Date.now() + Math.min(retryAfter, 60) * 1000);
        failureText = typeof data.reply === "string" ? data.reply.slice(0, 500) : "The referee is unavailable. Try again or read the rules.";
        throw new Error("Referee request failed");
      }
      if (typeof data.reply !== "string" || !data.reply.trim()) {
        failureText = "The referee returned no answer. Please try again.";
        throw new Error("Empty referee reply");
      }
      addMessage({ role: "user", content: userMessage });
      addMessage({ role: "assistant", content: data.reply.slice(0, CHAT_HISTORY_CONTENT_LIMIT) });
    } catch {
      if (!current()) return;
      setFailedQuestion(userMessage);
      setError(timedOut ? "The referee took too long. Try again or read the rules." : failureText);
    } finally {
      clearTimeout(timer);
      if (id === requestVersion.current) { controllerRef.current = null; setIsLoading(false); setPending(null); }
    }
  };

  const stop = () => {
    ++requestVersion.current; controllerRef.current?.abort(); controllerRef.current = null;
    setFailedQuestion(pending); setPending(null); setIsLoading(false); setError("Question canceled. You can try again.");
  };

  return <>
    <button onClick={() => setIsOpen(true)} className={cn("fixed bottom-4 right-4 z-40 w-14 h-14 rounded-full bg-neon-blue text-dark-900 shadow-lg flex items-center justify-center transition-transform hover:scale-110", isOpen && "hidden")}
      aria-label="Open AI Chat" aria-haspopup="dialog"><MessageCircle className="h-6 w-6" /></button>
    <Modal isOpen={isOpen} onClose={close} title={`AI referee · ${game.name}`} size="lg" placement="bottom" className="max-h-[85dvh] overflow-y-auto">
      <p className="mb-3 text-xs text-gray-400">Catalog rules first. House rules are suggestions. Alcohol is always optional.</p>
      <div role="log" aria-label="Referee conversation" aria-live="polite" aria-relevant="additions" className="min-h-40 max-h-[40dvh] overflow-y-auto space-y-3 mb-4">
        {!chatHistory.length && !pending && !failedQuestion && <div className="text-center py-5">
          <Bot className="h-10 w-10 mx-auto mb-3 text-neon-blue" /><p className="text-gray-300">Need help with {game.name}?</p>
          {!staticBuild && <div className="mt-4 flex flex-wrap justify-center gap-2">{refereeSuggestions(game).map((suggestion) => <button key={suggestion} onClick={() => { setInput(suggestion); inputRef.current?.focus(); }} className="rounded-full bg-dark-700 px-3 py-2 text-xs text-gray-200 hover:bg-dark-600">{suggestion}</button>)}</div>}
        </div>}
        {chatHistory.map((msg, index) => <p key={index} className={cn("text-sm whitespace-pre-wrap break-words rounded-2xl px-4 py-3 max-w-[90%]", msg.role === "user" ? "bg-neon-pink text-white ml-auto" : "bg-dark-700 text-gray-200")}><span className="sr-only">{msg.role === "user" ? "You: " : "Referee: "}</span>{msg.content}</p>)}
        {(pending || failedQuestion) && <p className="text-sm whitespace-pre-wrap break-words rounded-2xl px-4 py-3 bg-neon-pink text-white ml-auto max-w-[90%]">{pending || failedQuestion}</p>}
        {isLoading && <p role="status" className="text-sm text-gray-400">Referee is thinking…</p>}
        <div ref={messagesEndRef} />
      </div>
      {error && <div className="mb-4 rounded-xl border border-red-400/30 p-3"><p role="alert" className="text-sm text-red-300">{error}</p>{failedQuestion && <Button variant="outline" className="mt-3" disabled={isLoading || cooldownUntil > 0} onClick={() => void sendMessage(failedQuestion)}>{cooldownUntil ? "Try again shortly" : "Retry question"}</Button>}</div>}
      {staticBuild ? <p className="text-sm text-gray-400">AI referee requires the web app. The game rules are still available on this device.</p> : <form className="flex gap-2" onSubmit={(event) => { event.preventDefault(); void sendMessage(input); }}>
        <Input ref={inputRef} aria-label="Question about the game rules" placeholder="Ask about the rules…" maxLength={CHAT_MESSAGE_LIMIT} value={input} disabled={isLoading} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && event.nativeEvent.isComposing) event.preventDefault(); }} />
        {isLoading ? <Button type="button" variant="outline" onClick={stop}>Stop</Button> : <Button type="submit" aria-label="Send question" disabled={!input.trim() || cooldownUntil > 0}><Send className="h-4 w-4" /></Button>}
      </form>}
      <div className="mt-4 flex justify-between gap-4 text-xs text-gray-400"><Link href={`/games/${game.slug}`} onClick={close} className="text-neon-blue underline">Read {game.name} rules</Link>{!staticBuild && <span>{input.length}/{CHAT_MESSAGE_LIMIT}</span>}</div>
    </Modal>
  </>;
}
