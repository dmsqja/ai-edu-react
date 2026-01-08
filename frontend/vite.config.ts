import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Chapter 1-9 API 프록시 설정
      '/ch1': {
        target: 'http://localhost:80',
        changeOrigin: true,
      },
      '/ch2': {
        target: 'http://localhost:80',
        changeOrigin: true,
      },
      '/ch3': {
        target: 'http://localhost:80',
        changeOrigin: true,
      },
      '/ch4': {
        target: 'http://localhost:80',
        changeOrigin: true,
      },
      '/ch5': {
        target: 'http://localhost:80',
        changeOrigin: true,
      },
      '/ch6': {
        target: 'http://localhost:80',
        changeOrigin: true,
      },
      '/ch7': {
        target: 'http://localhost:80',
        changeOrigin: true,
      },
      '/ch8': {
        target: 'http://localhost:80',
        changeOrigin: true,
      },
      '/ch9': {
        target: 'http://localhost:80',
        changeOrigin: true,
      },
    },
  },
})
