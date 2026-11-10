import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import components from 'unplugin-vue-components/vite';
import path from 'path';
import manifest from './src/assets/manifest.json' with { type: 'json' };
import IndexRecipes from './src/IndexRecipes.mjs';

export default {
  base: '/recipeasy/',
  plugins: [
    vue({
      pagesDir: 'src/pages',
      include: [/\.vue$/],
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['*.webp', '*.jpg', '*.png', '*.svg', 'fonts/*'],
      manifest,
    }),
    components({
      dirs: ['src/components', 'src/templates'],
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
    }),
    IndexRecipes(),
  ],
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, 'src') },
  },
};
