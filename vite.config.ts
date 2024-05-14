/// <reference types="vitest" />

import analog from '@analogjs/platform';

import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: 'src/assets',
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  ssr: {
    noExternal: ['@spartan-ng/**', '@angular/cdk/**', '@ng-icons/**'],
  },
  plugins: [
    viteTsConfigPaths({
      loose: true,
    }),
    analog({
      vite: {
        experimental: {
          supportAnalogFormat: true,
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));

