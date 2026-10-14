import { beforeEach, afterEach, describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, cleanup, waitFor, act } from "@testing-library/react";
import { getGameBySlug } from "@/config/gameData";
import { useAppStore } from "@/lib/store";
import { CHAT_CLIENT_TIMEOUT_MS } from "@/lib/chatConfig";
import { AIChatFAB } from "./AIChatFAB";
vi.mock("next/link", () => ({ default: ({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props}>{children}</a> }));
const game = getGameBySlug("kings-cup")!;
const reply = (text = "Use the catalog rules.") => new Response(JSON.stringify({ reply: text }));
function open() { const trigger = screen.getByRole("button", { name: "Open AI Chat" }); trigger.focus(); fireEvent.click(trigger); }
function send(question = "How do we start?") { fireEvent.change(screen.getByRole("textbox", { name: "Question about the game rules" }), { target: { value: question } }); fireEvent.click(screen.getByRole("button", { name: "Send question" })); }
beforeEach(() => { useAppStore.setState({ chatHistory: [], session: null }); });
afterEach(() => { cleanup(); vi.unstubAllGlobals(); vi.unstubAllEnvs(); vi.useRealTimers(); });
describe("AI referee user flow", () => {
  it("has no hidden chat controls and supports labeled open, Escape and focus restoration", () => {
    render(<AIChatFAB game={game} />);
    expect(screen.queryByRole("textbox")).toBeNull(); open();
    expect(screen.getByRole("dialog", { name: `AI referee · ${game.name}` })).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveFocus();
    expect(screen.getByRole("textbox")).toHaveAttribute("maxlength", "500");
    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(screen.getByRole("button", { name: "Open AI Chat" })).toHaveFocus();
  });
  it("sends bounded context even after a long conversation", async () => {
    useAppStore.setState({ chatHistory: Array.from({ length: 40 }, (_, index) => ({ role: "user", content: `Previous question ${index}` })) });
    const fetchMock = vi.fn().mockImplementation(async () => reply()); vi.stubGlobal("fetch", fetchMock);
    render(<AIChatFAB game={game} />); open(); send();
    await screen.findByText("Use the catalog rules.");
    const data = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(data.history).toHaveLength(10); expect(data.history[0].content).toBe("Previous question 30");
    expect(useAppStore.getState().chatHistory).toHaveLength(40);
  });
  it("shows an error and retries without duplicating the question or storing failure text", async () => {
    const fetchMock = vi.fn().mockResolvedValueOnce(new Response(JSON.stringify({ code: "AI_UNAVAILABLE", reply: "The referee is unavailable." }), { status: 503 })).mockImplementation(async () => reply());
    vi.stubGlobal("fetch", fetchMock); render(<AIChatFAB game={game} />); open(); send();
    expect(await screen.findByRole("alert")).toHaveTextContent("The referee is unavailable.");
    expect(useAppStore.getState().chatHistory).toHaveLength(0);
    expect(screen.getByRole("link", { name: `Read ${game.name} rules` })).toHaveAttribute("href", "/games/kings-cup");
    fireEvent.click(screen.getByRole("button", { name: "Retry question" }));
    await screen.findByText("Use the catalog rules.");
    expect(useAppStore.getState().chatHistory).toEqual([{ role: "user", content: "How do we start?" }, { role: "assistant", content: "Use the catalog rules." }]);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });
  it("respects server cooldown before allowing another request", async () => {
    vi.stubGlobal("fetch", vi.fn().mockImplementation(async () => new Response(JSON.stringify({ reply: "Please wait.", retryAfter: 30 }), { status: 429 })));
    render(<AIChatFAB game={game} />); open(); send();
    await screen.findByRole("alert");
    expect(screen.getByRole("button", { name: "Try again shortly" })).toBeDisabled();
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "Another question" } });
    expect(screen.getByRole("button", { name: "Send question" })).toBeDisabled();
  });
  it("cancels on close and ignores a late response", async () => {
    let resolve!: (value: Response) => void;
    const fetchMock = vi.fn().mockImplementation(() => new Promise<Response>((done) => { resolve = done; }));
    vi.stubGlobal("fetch", fetchMock); render(<AIChatFAB game={game} />); open(); send();
    fireEvent.click(screen.getByRole("button", { name: "Close dialog" }));
    expect(fetchMock.mock.calls[0][1].signal.aborted).toBe(true);
    await act(async () => { resolve(reply("Late reply")); });
    expect(useAppStore.getState().chatHistory).toHaveLength(0);
  });
  it("discards replies after a new session starts", async () => {
    let resolve!: (value: Response) => void;
    vi.stubGlobal("fetch", vi.fn().mockImplementation(() => new Promise<Response>((done) => { resolve = done; })));
    render(<AIChatFAB game={game} />); open(); send();
    act(() => useAppStore.getState().startSession("kings-cup", "Kings Cup"));
    await act(async () => { resolve(reply("Old session reply")); });
    expect(useAppStore.getState().chatHistory).toHaveLength(0);
    expect(screen.queryByRole("dialog")).toBeNull();
  });
  it("can stop and retry without accepting an abandoned reply", async () => {
    let resolve!: (value: Response) => void;
    vi.stubGlobal("fetch", vi.fn().mockImplementation(() => new Promise<Response>((done) => { resolve = done; })));
    render(<AIChatFAB game={game} />); open(); send();
    fireEvent.click(screen.getByRole("button", { name: "Stop" }));
    expect(screen.getByRole("alert")).toHaveTextContent("Question canceled");
    expect(screen.getByRole("button", { name: "Retry question" })).toBeEnabled();
    await act(async () => { resolve(reply("Abandoned reply")); });
    expect(useAppStore.getState().chatHistory).toHaveLength(0);
  });
  it("fails gracefully on the client deadline", async () => {
    vi.useFakeTimers();
    vi.stubGlobal("fetch", vi.fn().mockImplementation((_url, options) => new Promise((_resolve, reject) => { options.signal.addEventListener("abort", () => reject(new DOMException("Aborted", "AbortError"))); })));
    render(<AIChatFAB game={game} />); open(); send();
    await act(async () => { await vi.advanceTimersByTimeAsync(CHAT_CLIENT_TIMEOUT_MS); });
    expect(screen.getByRole("alert")).toHaveTextContent("took too long");
    expect(useAppStore.getState().chatHistory).toHaveLength(0);
  });
  it("requests re-confirmation on an expired declaration", async () => {
    const expired = vi.fn(); window.addEventListener("sipwiki-age-consent-expired", expired);
    vi.stubGlobal("fetch", vi.fn().mockImplementation(async () => new Response(JSON.stringify({ code: "AGE_CONFIRMATION_REQUIRED" }), { status: 428 })));
    render(<AIChatFAB game={game} />); open(); send();
    await waitFor(() => expect(expired).toHaveBeenCalledOnce());
    expect(useAppStore.getState().chatHistory).toHaveLength(0); window.removeEventListener("sipwiki-age-consent-expired", expired);
  });
  it("explains native offline limitations without sending a request", () => {
    vi.stubEnv("NEXT_PUBLIC_STATIC_EXPORT", "true"); const fetchMock = vi.fn(); vi.stubGlobal("fetch", fetchMock);
    render(<AIChatFAB game={game} />); open();
    expect(screen.getByText(/AI referee requires the web app/)).toBeInTheDocument();
    expect(screen.queryByRole("textbox")).toBeNull(); expect(fetchMock).not.toHaveBeenCalled();
  });
});
