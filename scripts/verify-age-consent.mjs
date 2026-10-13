import assert from "node:assert/strict";

// Synthetic release smoke test. Creates only a declaration receipt; does not
// write ratings/signups, send email, or assert the operator's real age.
const base = new URL(process.argv[2] || "http://localhost:3000").origin;
const results = [];
async function request(path, method = "POST", body, cookie, origin = base) {
  const response = await fetch(base + path, {
    method,
    headers: { Origin: origin, ...(body === undefined ? {} : { "Content-Type": "application/json" }), ...(cookie ? { Cookie: cookie } : {}) },
    body: body === undefined ? undefined : JSON.stringify(body),
    signal: AbortSignal.timeout(25_000),
    redirect: "manual",
  });
  return response;
}
async function expectStatus(label, response, status) {
  assert.equal(response.status, status, `${label}: expected ${status}, received ${response.status}`);
  results.push({ check: label, status });
}
for (const route of ["chat", "game-finder", "ratings", "subscribe"]) {
  for (const cookie of [undefined, "sipwiki-age-verified=true; __Host-sipwiki-age-consent=true"]) {
    const response = await request(`/api/${route}`, "POST", {}, cookie);
    await expectStatus(`${route}: ${cookie ? "forged" : "missing"} receipt`, response, 428);
    assert.equal((await response.json()).code, "AGE_CONFIRMATION_REQUIRED");
  }
}
const before = await request("/api/age-consent/status");
await expectStatus("status before declaration", before, 200);
const initial = await before.json();
assert.equal(initial.confirmed, false);
await expectStatus("cross-origin declaration", await request("/api/age-consent", "POST", { confirmed: true, version: initial.version }, undefined, "https://foreign.example"), 403);
const declaration = await request("/api/age-consent", "POST", { confirmed: true, version: initial.version });
await expectStatus("synthetic declaration", declaration, 200);
const setCookie = declaration.headers.get("set-cookie");
assert.ok(setCookie?.includes("HttpOnly") && setCookie.includes("SameSite=Lax") || setCookie?.includes("HttpOnly") && setCookie.includes("SameSite=lax"));
if (base.startsWith("https://")) assert.ok(setCookie.includes("Secure") && setCookie.startsWith("__Host-sipwiki-age-consent="));
const cookie = setCookie.split(";")[0];
const status = await request("/api/age-consent/status", "POST", undefined, cookie);
await expectStatus("confirmed status", status, 200);
assert.equal((await status.json()).confirmed, true);
assert.ok(status.headers.get("cache-control")?.includes("no-store"));
for (const route of ["chat", "ratings", "subscribe"]) {
  // Invalid payload proves passage through the receipt guard without writes.
  await expectStatus(`${route}: acknowledged input validation`, await request(`/api/${route}`, "POST", {}, cookie), 400);
}
const finder = await request("/api/game-finder", "POST", { query: "A relaxed card game for four friends using non-alcoholic drinks" }, cookie);
await expectStatus("acknowledged game finder", finder, 200);
const matches = await finder.json();
assert.ok(Array.isArray(matches.recommendations) && matches.recommendations.length > 0);
results.push({ check: "finder response", source: matches.source, recommendationCount: matches.recommendations.length });
for (const page of ["privacy", "terms"]) {
  await expectStatus(`${page} reachable without receipt`, await request(`/${page}`, "GET"), 200);
}
const reset = await request("/api/age-consent", "DELETE", undefined, cookie);
await expectStatus("reset", reset, 200);
assert.ok(reset.headers.get("set-cookie")?.includes("Max-Age=0"));
await expectStatus("chat requires declaration after reset", await request("/api/chat", "POST", {}), 428);
console.log(JSON.stringify({ base, passed: true, results }, null, 2));
