import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/docs/",      // required for GitHub Pages
  build: {
    outDir: "dist"     // ensure output folder is dist
  }
});
