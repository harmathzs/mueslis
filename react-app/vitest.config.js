import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul',  // Force Istanbul (no V8 issues)
      reporter: ['text', 'html', 'clover'],
      include: ['src/backend/*.cjs'],      // Target your Express file
      all: true,
    },
    pool: 'threads',  // Stable for Express tests
    environment: 'node'
  }
});
