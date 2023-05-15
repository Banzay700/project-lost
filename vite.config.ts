import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  base: './',
  resolve: {
    alias: {
      assets: '/src/assets/',
      sampleTypes: '/src/sampleTypes/', /// DELETE
      sampleComponents: '/src/sampleComponents/', /// DELETE
      components: '/src/components/',
      hooks: '/src/hooks/',
      constants: '/src/constants/',
      pages: '/src/pages/',
      store: '/src/store/',
      theme: '/src/theme/',
      types: '/src/types/',
      UI: '/src/UI/',
      utils: '/src/utils/',
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
})
