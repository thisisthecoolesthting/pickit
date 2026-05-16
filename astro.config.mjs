import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// @astrojs/sitemap 3.4.1 crashes on our config (same bug as refillwatch).
// Custom sitemap.xml.ts route generates it manually instead.
// import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pickit.kids',
  trailingSlash: 'never',
  integrations: [tailwind()],
  build: { format: 'directory' },
});
