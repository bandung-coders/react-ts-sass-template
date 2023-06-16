import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import alias from '@rollup/plugin-alias';
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8083,
  },
  plugins: [
    react(),
    svgr(),
    alias({
      entries: [{ find: "@", replacement: "/src" }],
    }),
  ],
});
