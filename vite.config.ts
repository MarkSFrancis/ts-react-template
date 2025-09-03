import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart({ customViteReactPlugin: true }),
    react(),
  ],
  test: {
    projects: [
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
            instances: [
              {
                browser: 'chromium',
              },
            ],
            enabled: true,
            provider: 'playwright',
            // Switch this to `false` if you want to see the tests running in the browser
            headless: true,
          },
        },
      },
    ],
  },
});
