import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { ChatMessage } from "@/types";

// Initialize OpenAI client lazily to avoid build-time errors
function getOpenAIClient() {
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

function getSystemPrompt(gameName: string, rules: string): string {
  return `You are the official referee for "${gameName}". You know the rules inside and out.

RULES:
${rules}

INSTRUCTIONS:
- Answer questions about the rules concisely (1-3 sentences max)
- If asked about a scenario not covered by the rules, make a fair ruling and say "House rule suggestion:"
- Be fun and casual - you're at a party, not a courtroom
- Use simple language, avoid complex explanations
- If someone asks something unrelated to the game, redirect them playfully back to the game
- Never encourage dangerous drinking behavior or excessive consumption
- If asked about drinking amounts, always remind players to drink responsibly

Remember: Keep responses SHORT and PARTY-FRIENDLY!`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { gameName, rules, message, history } = body as {
      gameName: string;
      rules: string;
      message: string;
      history: ChatMessage[];
    };

    // Validate input
    if (!gameName || !rules || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          reply: "AI referee is not configured yet. Please add your OpenAI API key to enable this feature!"
        },
        { status: 200 }
      );
    }

    // Build messages array
    const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: getSystemPrompt(gameName, rules),
      },
      // Add chat history (last 10 messages to keep context manageable)
      ...history.slice(-10).map((msg) => ({
        role: msg.role as "user" | "assistant",
        content: msg.content,
      })),
      // Add current message
      {
        role: "user" as const,
        content: message,
      },
    ];

    const completion = await getOpenAIClient().chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      max_tokens: 200,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || "I'm not sure about that one!";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);

    // Handle specific OpenAI errors
    if (error instanceof OpenAI.APIError) {
      if (error.status === 401) {
        return NextResponse.json(
          { reply: "AI referee credentials are invalid. Please check your API key." },
          { status: 200 }
        );
      }
      if (error.status === 429) {
        return NextResponse.json(
          { reply: "AI referee is taking a break (rate limited). Try again in a moment!" },
          { status: 200 }
        );
      }
    }

    return NextResponse.json(
      { reply: "AI referee had a hiccup. Try asking again!" },
      { status: 200 }
    );
  }
}
