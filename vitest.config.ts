import { defineConfig } from "vitest/config";

// Component tests opt into jsdom per file via `// @vitest-environment jsdom`
// (matching how the desktop repo these components came from runs them), so the
// default environment stays "node".
export default defineConfig({
  test: {
    environment: "node",
  },
});
