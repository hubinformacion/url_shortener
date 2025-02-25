// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import auth from 'auth-astro';

import db from '@astrojs/db';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  adapter: node({
    mode: 'standalone'
  }),

  integrations: [auth(), db(), react()],

  vite: {
    plugins: [tailwindcss()]
  }
});