import { describe, expect, it } from "vitest";
import { getSafeAuthRedirect } from "./authRedirect";

describe("getSafeAuthRedirect", () => {
  it("allows same-origin relative paths", () => {
    expect(getSafeAuthRedirect("/submit?source=oauth")).toBe("/submit?source=oauth");
  });

  it("rejects absolute and protocol-relative URLs", () => {
    expect(getSafeAuthRedirect("https://evil.example")).toBe("/");
    expect(getSafeAuthRedirect("//evil.example/path")).toBe("/");
  });
});
