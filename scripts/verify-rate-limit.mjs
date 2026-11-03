import assert from "node:assert/strict";

// Synthetic burst test: invalid chat payloads stop at validation and never call
// the provider. The eleventh request should hit the app's ten-per-minute limit.
const base = new URL(process.argv[2] || "http://localhost:3000").origin;
const allowExistingBlock = process.argv.includes("--allow-existing-block");
async function post(path, body, cookie) {
  return fetch(base + path, {
    method: "POST",
    headers: { Origin: base, "Content-Type": "application/json", ...(cookie ? { Cookie: cookie } : {}) },
    body: JSON.stringify(body), signal: AbortSignal.timeout(15_000), redirect: "manual",
  });
}
const status = await post("/api/age-consent/status", {});
assert.equal(status.status, 200);
const version = (await status.json()).version;
const declaration = await post("/api/age-consent", { confirmed: true, version });
assert.equal(declaration.status, 200);
const cookie = declaration.headers.get("set-cookie")?.split(";")[0];
assert.ok(cookie);
const statuses = [];
for (let index = 0; index < 11; index++) {
  const response = await post("/api/chat", {}, cookie);
  statuses.push(response.status);
}
if (allowExistingBlock) {
  assert.equal(statuses[0], 400);
  assert.ok(statuses.slice(1).some((status) => status === 429));
} else {
  assert.deepEqual(statuses.slice(0, 10), Array(10).fill(400));
  assert.equal(statuses[10], 429);
}
await fetch(base + "/api/age-consent", { method: "DELETE", headers: { Origin: base, Cookie: cookie } });
console.log(JSON.stringify({ base, passed: true, statuses }));
