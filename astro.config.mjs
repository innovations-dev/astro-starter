import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import site from "./src/data/site.json";

import icon from "astro-icon";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: site.url,
  output: "hybrid",
  integrations: [
    tailwind(),
    sitemap({
      // https://github.com/alextim/astro-lib/tree/main/packages/astro-sitemap#readme
      lastmod: Date(),
      lastmodDateOnly: true,
      exclude: [
        "/404",
        "/signin",
        "/signup",
        "/reset-password",
        "/forgot-password",
        "/dashboard",
        "/admin"
      ]
    }),
    icon(),
    robotsTxt({
      // https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme
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
