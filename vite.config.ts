import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dynamicImport from 'vite-plugin-dynamic-import'
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dynamicImport(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    open: ''
  }
})
