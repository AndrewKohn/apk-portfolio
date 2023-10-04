import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/SetupTests.ts'],
    coverage: {
      provider: 'c8',
      reporter: ['text', 'html'],
    },
  },
});
