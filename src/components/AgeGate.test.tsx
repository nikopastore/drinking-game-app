import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor, cleanup } from "@testing-library/react";
import { AGE_CONSENT_VERSION, AGE_CONSENT_MAX_AGE, nativeAgeConfirmed } from "@/lib/ageConsentConfig";
const navigation = vi.hoisted(() => ({ pathname: "/games" }));
vi.mock("next/navigation", () => ({ usePathname: () => navigation.pathname }));
vi.mock("next/link", () => ({ default: ({ children, href }: { children: React.ReactNode; href: string }) => <a href={href}>{children}</a> }));
import { AgeGate, useAgeGate } from "./AgeGate";

function Application() {
  const { resetVerification } = useAgeGate();
  return <><p>Confirmed app content</p><button onClick={() => void resetVerification()}>Reset test confirmation</button></>;
}
const status = (confirmed = false) => new Response(JSON.stringify({ confirmed, version: AGE_CONSENT_VERSION }));
beforeEach(() => { navigation.pathname = "/games"; });
afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

describe("age confirmation UI", () => {
  it("ignores legacy local flags but keeps policies readable", async () => {
    vi.mocked(localStorage.getItem).mockReturnValue("true");
    vi.stubGlobal("fetch", vi.fn().mockImplementation(async () => status()));
    const view = render(<AgeGate><p>Policy content</p></AgeGate>);
    await screen.findByRole("button", { name: "I am of legal drinking age" });
    expect(screen.queryByText("Policy content")).toBeNull();
    expect(screen.getByRole("link", { name: "Privacy Policy" })).toHaveAttribute("href", "/privacy");
    navigation.pathname = "/privacy";
    view.rerender(<AgeGate><p>Policy content</p></AgeGate>);
    expect(screen.getByText("Policy content")).toBeInTheDocument();
  });
  it("does not unlock the app after a failed confirmation", async () => {
    vi.stubGlobal("fetch", vi.fn().mockImplementation(async (url) => url === "/api/age-consent" ? new Response("{}", { status: 503 }) : status()));
    render(<AgeGate><Application /></AgeGate>);
    fireEvent.click(await screen.findByRole("button", { name: "I am of legal drinking age" }));
    await screen.findByRole("alert");
    expect(screen.queryByText("Confirmed app content")).toBeNull();
  });
  it("confirms and resets without depending on localStorage", async () => {
    let confirmed = false;
    const fetchMock = vi.fn().mockImplementation(async (url, init) => {
      if (url === "/api/age-consent") {
        confirmed = init?.method === "POST";
        return new Response("{}", { status: 200 });
      }
      return status(confirmed);
    });
    vi.stubGlobal("fetch", fetchMock);
    vi.mocked(localStorage.removeItem).mockImplementation(() => { throw new Error("Storage blocked"); });
    render(<AgeGate><Application /></AgeGate>);
    fireEvent.click(await screen.findByRole("button", { name: "I am of legal drinking age" }));
    await screen.findByText("Confirmed app content");
    fireEvent.click(screen.getByRole("button", { name: "Reset test confirmation" }));
    await waitFor(() => expect(screen.getByRole("button", { name: "I am of legal drinking age" })).toBeInTheDocument());
    expect(fetchMock.mock.calls.some(([, init]) => init?.method === "DELETE")).toBe(true);
    vi.mocked(localStorage.removeItem).mockReset();
  });
  it("does not unlock when the browser refuses the receipt cookie", async () => {
    vi.stubGlobal("fetch", vi.fn().mockImplementation(async () => status()));
    render(<AgeGate><Application /></AgeGate>);
    fireEvent.click(await screen.findByRole("button", { name: "I am of legal drinking age" }));
    expect(await screen.findByRole("alert")).toHaveTextContent("Allow essential cookies");
    expect(screen.queryByText("Confirmed app content")).toBeNull();
  });
  it("returns to the gate when an interactive API reports expiry", async () => {
    let confirmed = true;
    vi.stubGlobal("fetch", vi.fn().mockImplementation(async () => status(confirmed)));
    render(<AgeGate><Application /></AgeGate>);
    await screen.findByText("Confirmed app content");
    confirmed = false;
    fireEvent(window, new Event("sipwiki-age-consent-expired"));
    await screen.findByRole("button", { name: "I am of legal drinking age" });
    expect(screen.queryByText("Confirmed app content")).toBeNull();
  });
  it("bounds native declarations by version and expiry", () => {
    const now = Date.now();
    expect(nativeAgeConfirmed(JSON.stringify({ version: AGE_CONSENT_VERSION, expires: now + AGE_CONSENT_MAX_AGE * 1000 }), now)).toBe(true);
    expect(nativeAgeConfirmed("true", now)).toBe(false);
    expect(nativeAgeConfirmed(JSON.stringify({ version: "old", expires: now + 10000 }), now)).toBe(false);
    expect(nativeAgeConfirmed(JSON.stringify({ version: AGE_CONSENT_VERSION, expires: now - 1 }), now)).toBe(false);
  });
});
