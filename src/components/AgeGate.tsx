"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui";
import { Wine, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { AGE_CONSENT_MAX_AGE, AGE_CONSENT_STORAGE, AGE_CONSENT_VERSION, nativeAgeConfirmed } from "@/lib/ageConsentConfig";

const staticBuild = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";
const ConsentContext = createContext<{ isVerified: boolean; resetVerification: () => Promise<void> } | null>(null);

export function AgeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [confirmed, setConfirmed] = useState<boolean | null>(null);
  const [declined, setDeclined] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const requestId = useRef(0);
  const legalPage = pathname === "/privacy" || pathname === "/terms" || pathname === "/auth/callback";

  const refresh = useCallback(async () => {
    const id = ++requestId.current;
    try {
      let valid = false;
      if (staticBuild) {
        const raw = localStorage.getItem(AGE_CONSENT_STORAGE);
        valid = nativeAgeConfirmed(raw);
      } else {
        const response = await fetch("/api/age-consent/status", { method: "POST", cache: "no-store" });
        if (!response.ok) throw new Error("Confirmation is temporarily unavailable. Please retry.");
        const data = await response.json();
        valid = data.confirmed === true && data.version === AGE_CONSENT_VERSION;
      }
      if (id === requestId.current) { setConfirmed(valid); setError(""); }
    } catch (err) {
      if (id === requestId.current) {
        setConfirmed(false);
        setError(staticBuild ? "" : err instanceof Error ? err.message : "Please retry confirmation.");
      }
    }
  }, []);

  useEffect(() => {
    const requests = requestId;
    void refresh();
    const expired = () => { setConfirmed(false); void refresh(); };
    window.addEventListener("sipwiki-age-consent-expired", expired);
    return () => { ++requests.current; window.removeEventListener("sipwiki-age-consent-expired", expired); };
  }, [pathname, refresh]);

  const confirm = async () => {
    const id = ++requestId.current;
    setBusy(true); setError("");
    try {
      if (staticBuild) {
        try { localStorage.setItem(AGE_CONSENT_STORAGE, JSON.stringify({ version: AGE_CONSENT_VERSION, expires: Date.now() + AGE_CONSENT_MAX_AGE * 1000 })); }
        catch { /* The explicit declaration still applies for this native session. */ }
      } else {
        const response = await fetch("/api/age-consent", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ confirmed: true, version: AGE_CONSENT_VERSION }),
        });
        if (!response.ok) throw new Error("Could not save confirmation. Please try again.");
        const status = await fetch("/api/age-consent/status", { method: "POST", cache: "no-store" });
        const receipt = status.ok ? await status.json() : null;
        if (receipt?.confirmed !== true || receipt?.version !== AGE_CONSENT_VERSION) {
          throw new Error("Could not remember confirmation. Allow essential cookies for SipWiki and try again.");
        }
      }
      if (id === requestId.current) {
        try { localStorage.removeItem("sipwiki-age-verified"); } catch { /* A web receipt does not depend on browser storage. */ }
        setConfirmed(true);
      }
    } catch (err) {
      if (id === requestId.current) setError(err instanceof Error ? err.message : "Please try again.");
    } finally { setBusy(false); }
  };

  const resetVerification = async () => {
    ++requestId.current;
    if (!staticBuild) {
      const response = await fetch("/api/age-consent", { method: "DELETE" });
      if (!response.ok) throw new Error("Could not reset confirmation. Please try again.");
    }
    try { localStorage.removeItem(AGE_CONSENT_STORAGE); localStorage.removeItem("sipwiki-age-verified"); } catch { /* Server receipt is already cleared. */ }
    setConfirmed(false); setDeclined(false); setError("");
  };

  let content;
  if (legalPage || confirmed) {
    content = children;
  } else if (confirmed === null) {
    content = <div role="status" className="min-h-screen bg-dark-900 flex items-center justify-center"><Wine aria-label="Loading age confirmation" className="h-12 w-12 animate-pulse text-neon-pink" /></div>;
  } else {
    content = (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-dark-800 border border-dark-600 rounded-xl p-8">
          <div className="text-center mb-6">
            {declined ? <AlertTriangle className="mx-auto mb-4 h-14 w-14 text-yellow-500" /> : <Wine className="mx-auto mb-4 h-14 w-14 text-neon-pink" />}
            <h1 className="text-3xl font-bold text-white">Sip<span className="text-neon-pink">Wiki</span></h1>
            <p className="mt-2 text-gray-400">Your party companion</p>
          </div>
          <h2 className="text-xl font-bold text-center text-white mb-4">{declined ? "Adults only" : "Confirm your legal drinking age"}</h2>
          <p className="text-center text-gray-300 mb-4">SipWiki contains alcohol-related content and is intended for adults of legal drinking age in their location.</p>
          <p className="text-sm text-center text-gray-400 mb-6">{declined ? "Please leave SipWiki if you do not meet that requirement." : "By continuing, you confirm you meet that requirement. This is a self-declaration; we do not check identity documents."}</p>
          {error && <p role="alert" className="mb-4 text-sm text-red-400">{error}</p>}
          {declined ? <Button variant="outline" className="w-full" onClick={() => setDeclined(false)}>Go back</Button> : (
            <div className="space-y-3">
              <Button size="lg" className="w-full" isLoading={busy} onClick={() => void confirm()}>I am of legal drinking age</Button>
              <Button variant="outline" size="lg" className="w-full" disabled={busy} onClick={() => setDeclined(true)}>I am not of legal drinking age</Button>
              {error && <Button variant="ghost" className="w-full" disabled={busy} onClick={() => void refresh()}>Retry connection</Button>}
            </div>
          )}
          <p className="mt-6 text-xs text-center text-gray-400">Read our <Link href="/terms" className="text-neon-pink underline">Terms of Service</Link> and <Link href="/privacy" className="text-neon-pink underline">Privacy Policy</Link> before continuing.</p>
          <p className="mt-4 text-xs text-center text-gray-500">Confirmation lasts 30 days on this device. Reset it in Account at any time.</p>
          <p className="mt-4 text-xs text-center text-yellow-300">Drink responsibly. Alcohol is optional. Never drink and drive.</p>
        </div>
      </div>
    );
  }
  return <ConsentContext.Provider value={{ isVerified: confirmed === true, resetVerification }}>{content}</ConsentContext.Provider>;
}

export function useAgeGate() {
  const context = useContext(ConsentContext);
  if (!context) throw new Error("Age confirmation controls require AgeGate");
  return context;
}
