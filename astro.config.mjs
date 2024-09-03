import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [
    tailwind(),
    sitemap(),
    icon(),
    robotsTxt({
      sitemap: true,
      sitemapBaseFileName: "sitemap-index",
      host: "https://momentuminnovations.com",
      policy: [
        {
          userAgent: "*",
          allow: "/",
          disallow: [
            "/admin",
            "/api",
            "/private",
            "/dashboard",
            "/login",
            "/logout",
            "/signup",
            "/reset-password",
            "/forgot-password",
            "/404"
          ],
          crawlDelay: 2
        }
      ]
    })
  ],
  vite: {
    ssr: {
      noExternal: ["embla-carousel"]
    }
  }
});
