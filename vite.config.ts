import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import type { Plugin } from "rollup";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    // Enable HMR overlay so compile/runtime errors surface in the browser
    // and enable polling to avoid missing file change events on some filesystems.
    hmr: {
      overlay: true,
    },
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    react(),
    ...(process.env.ANALYZE === "1"
      ? [
          // generates dist/stats.html showing bundle composition
          visualizer({ filename: "dist/stats.html", open: false }) as unknown as Plugin,
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
