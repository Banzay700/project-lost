// vite.config.ts
import { defineConfig } from "file:///C:/Users/HP/Desktop/Restoran/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/HP/Desktop/Restoran/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///C:/Users/HP/Desktop/Restoran/node_modules/vite-plugin-svgr/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react(), svgr()],
  base: "./",
  resolve: {
    alias: {
      assets: "/src/assets/",
      sampleTypes: "/src/sampleTypes/",
      /// DELETE
      sampleComponents: "/src/sampleComponents/",
      /// DELETE
      components: "/src/components/",
      hooks: "/src/hooks/",
      constants: "/src/constants/",
      pages: "/src/pages/",
      store: "/src/store/",
      theme: "/src/theme/",
      types: "/src/types/",
      UI: "/src/UI/",
      utils: "/src/utils/"
    }
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxIUFxcXFxEZXNrdG9wXFxcXFJlc3RvcmFuXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxIUFxcXFxEZXNrdG9wXFxcXFJlc3RvcmFuXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9IUC9EZXNrdG9wL1Jlc3RvcmFuL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCBzdmdyIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Z3InXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBzdmdyKCldLFxuICBiYXNlOiAnLi8nLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIGFzc2V0czogJy9zcmMvYXNzZXRzLycsXG4gICAgICBzYW1wbGVUeXBlczogJy9zcmMvc2FtcGxlVHlwZXMvJywgLy8vIERFTEVURVxuICAgICAgc2FtcGxlQ29tcG9uZW50czogJy9zcmMvc2FtcGxlQ29tcG9uZW50cy8nLCAvLy8gREVMRVRFXG4gICAgICBjb21wb25lbnRzOiAnL3NyYy9jb21wb25lbnRzLycsXG4gICAgICBob29rczogJy9zcmMvaG9va3MvJyxcbiAgICAgIGNvbnN0YW50czogJy9zcmMvY29uc3RhbnRzLycsXG4gICAgICBwYWdlczogJy9zcmMvcGFnZXMvJyxcbiAgICAgIHN0b3JlOiAnL3NyYy9zdG9yZS8nLFxuICAgICAgdGhlbWU6ICcvc3JjL3RoZW1lLycsXG4gICAgICB0eXBlczogJy9zcmMvdHlwZXMvJyxcbiAgICAgIFVJOiAnL3NyYy9VSS8nLFxuICAgICAgdXRpbHM6ICcvc3JjL3V0aWxzLycsXG4gICAgfSxcbiAgfSxcbiAgY3NzOiB7XG4gICAgbW9kdWxlczoge1xuICAgICAgbG9jYWxzQ29udmVudGlvbjogJ2NhbWVsQ2FzZU9ubHknLFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnUixTQUFTLG9CQUFvQjtBQUM3UyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBRWpCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQUEsRUFDekIsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsYUFBYTtBQUFBO0FBQUEsTUFDYixrQkFBa0I7QUFBQTtBQUFBLE1BQ2xCLFlBQVk7QUFBQSxNQUNaLE9BQU87QUFBQSxNQUNQLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1Asa0JBQWtCO0FBQUEsSUFDcEI7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
