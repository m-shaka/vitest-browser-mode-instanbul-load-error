/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    // setupFiles: ['./vitest.setup.ts'],
    passWithNoTests: true,
    coverage: {
      provider: 'istanbul',
      include: ['src']
    },
    browser: {
      enabled: true,
      headless: true,
      name: 'chromium',
      provider: 'playwright'
    }
  }
})
