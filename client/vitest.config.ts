import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  // @ts-ignore
  plugins: [svgr()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup-tests.ts'],
    deps: {
      inline: ['react-formik-ui'],
    },
  },
  base: './',
  resolve: {
    alias: {
      assets: '/src/assets/',
      components: '/src/components/',
      hooks: '/src/hooks/',
      routes: '/src/routes/',
      pages: '/src/pages/',
      theme: '/src/theme/',
      store: '/src/store/',
      types: '/src/types/',
      UI: '/src/UI/',
      utils: '/src/utils/',
    },
  },
})
