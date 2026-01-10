import { resolve } from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    tailwindcss(),
    react(),
    svgr(),
  ],
  resolve: {
    alias: [
      {
        find: '@', // Your alias, e.g., "@"
        replacement: resolve(__dirname, 'src'), // Path it points to
      },
    ],
  },
});
