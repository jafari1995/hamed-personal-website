import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

// Static site for Vercel. Articles are published into ./content (repo root).
export default defineConfig({
  output: "static",
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
  vite: {
    resolve: {
      alias: {
        // Let Astro content collections resolve repo-root `content/` as the articles source.
        "@content": fileURLToPath(new URL("./content", import.meta.url)),
      },
    },
  },
});
