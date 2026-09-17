import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, fontProviders } from 'astro/config';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
import manifest from './src/assets/manifest.json';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// https://astro.build/config
export default defineConfig({
  site: 'https://benrutlandweb.github.io',
  base: '/recipeasy/',
  integrations: [vue()],
  fonts: [
    {
      name: 'Open Sans',
      cssVariable: '--font-open-sans',
      provider: fontProviders.fontsource(),
      weights: [400, 600, 700],
      styles: ['normal'],
      fallbacks: ['Segoe UI', 'sans-serif'],
      display: 'optional',
      optimizedFallbacks: true,
    },
  ],
  vite: {
    resolve: {
      tsconfigPaths: true,
      alias: { '@': path.resolve(__dirname, 'src') },
    },
    plugins: [
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['*.webp', '*.svg'],
        manifest,
      }),
    ],
  },
});
