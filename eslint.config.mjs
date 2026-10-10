import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".claude/**",
    ".claude-flow/**",
    ".swarm/**",
    "public/**",
    "scripts/**",
  ]),
  {
    rules: {
      // Static editorial prose is authored as JSX text; apostrophes and quotes
      // are safe there and do not need entity escaping.
      "react/no-unescaped-entities": "off",
      // Several providers intentionally hydrate client-only state from local
      // storage and the current route inside effects.
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);

export default eslintConfig;
