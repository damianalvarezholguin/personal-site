// @ts-check
import mdx from '@astrojs/mdx';
import { defineConfig, envField } from 'astro/config';

import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [mdx()],

  env: {
      schema: {
          PUBLIC_SITE_URL: envField.string({context: 'client', access: 'public', optional: true})
      }
    },

  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  }
});