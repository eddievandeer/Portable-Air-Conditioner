import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@utils': path.join(__dirname, './src/utils'),
      '@store': path.join(__dirname, './src/store')
    }
  },
  plugins: [vue()]
})
