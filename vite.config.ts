import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  appType: "spa",
  publicDir: "static",
  build: {
    assetsDir: "static",
    sourcemap: "hidden",
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        compact: true,
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  plugins: [
    react(),
    svgr(),
    TanStackRouterVite({
      quoteStyle: "double",
      routesDirectory: "src/pages",
      routeFileIgnorePattern: ".test.tsx",
    }),
  ],
});
