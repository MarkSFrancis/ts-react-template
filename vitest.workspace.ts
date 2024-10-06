import { defineWorkspace } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { type LaunchOptions } from 'playwright';

export default defineWorkspace([
  {
    // Runs tests in node
    // Faster but should not be used for react or browser tests
    // Use the `.ts` extension when writing these tests
    test: {
      name: 'node',
      include: ['**/*.test.ts'],
      exclude: ['node_modules/**'],
      environment: 'node',
    },
  },
  {
    // Runs tests in the browser
    // Slower but great for react or browser tests
    // Use the `.tsx` extension when writing these tests
    plugins: [react()],
    test: {
      name: 'browser',
      include: ['**/*.test.tsx'],
      exclude: ['node_modules/**'],
      browser: {
        api: {
          // Avoids conflicts with the vite app
          port: 5200,
        },
        name: 'chromium',
        providerOptions: {
          launch: {} satisfies LaunchOptions,
        },
        enabled: true,
        provider: 'playwright',
        // Switch this to `false` if you want to see the tests running in the browser
        headless: true,
      },
    },
  },
]);
