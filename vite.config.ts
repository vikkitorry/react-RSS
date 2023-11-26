/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    watch: false,
    coverage: {
      enabled: true,
      all: true,
      provider: 'v8',
      reporter: ['text'],
      include: ['**/*.tsx'],
      exclude: ['**/main.tsx', '**/test-utils.tsx', '**/pages', '**/CardsHandler'],
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: '/' }],
  },
});

