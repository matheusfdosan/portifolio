import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import sitemap from "vite-plugin-sitemap"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://matheusdev.is-a.dev",
      routes: ["/"],
    }),
  ],
})
