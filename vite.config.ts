import { resolve } from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import svgr from 'vite-plugin-svgr';

const app = defineConfig({
  server: { port: 3000, open: true },
  preview: { port: 3001, open: true },
  resolve: { alias: { '@': resolve(process.cwd(), 'src') } },

  plugins: [
    react(),
    svgr(),
    nodePolyfills(),
    checker({
      typescript: true,
      eslint: { lintCommand: 'eslint .', useFlatConfig: true },
    }),
  ],
});

export default app;
