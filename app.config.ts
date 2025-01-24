import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from '@tanstack/start/config';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    preset: 'node-server',
  },
  vite: {
    plugins: [
      tailwindcss(),
      viteTsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
  },
});
