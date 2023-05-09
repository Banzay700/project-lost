import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  base: './',
  resolve: {
    alias: {
      assets: '/src/assets/',
      components: '/src/components/',
      constants: '/src/constants/',
      modules: '/src/modules/',
      pages: '/src/pages/',
      store: '/src/store/',
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
