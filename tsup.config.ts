import { defineConfig } from "tsup";

// Dual ESM + CJS build with type declarations. CSS modules are bundled and
// emitted to a single dist/index.css that consumers import once
// (`import "@block52/ui-sdk/styles.css"`).
export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  // React/motion are peer deps — never bundle them.
  external: ["react", "react-dom", "motion"],
  // tsup/esbuild handles .module.css as CSS modules out of the box.
  loader: {
    ".css": "local-css",
  },
});
