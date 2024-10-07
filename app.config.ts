import { defineConfig } from '@tanstack/start/config';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    preset: 'node-server',
  },
  vite: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    plugins: () => [
      viteTsConfigPaths({
        projects: ['./tsconfig.json'],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }) as any,
    ],
  },
});
