import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [tailwind(), sitemap(), icon()],
  vite: {
    ssr: {
      noExternal: ['embla-carousel'],
    },
  },
});