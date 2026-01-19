import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 환경 변수 로드
  const env = loadEnv(mode, process.cwd(), '')
  const apiUrl = env.VITE_API_URL || 'http://localhost:80'

  return {
    plugins: [react()],
    server: {
      proxy: {
        // Chapter 1-9 API 프록시 설정
        '/ch1': {
          target: apiUrl,
          changeOrigin: true,
        },
        '/ch2': {
          target: apiUrl,
          changeOrigin: true,
        },
        '/ch3': {
          target: apiUrl,
          changeOrigin: true,
        },
        '/ch4': {
          target: apiUrl,
          changeOrigin: true,
        },
        '/ch5': {
          target: apiUrl,
          changeOrigin: true,
        },
        '/ch6': {
          target: apiUrl,
          changeOrigin: true,
        },
        '/ch7': {
          target: apiUrl,
          changeOrigin: true,
        },
        '/ch8': {
          target: apiUrl,
          changeOrigin: true,
        },
        '/ch9': {
          target: apiUrl,
          changeOrigin: true,
        },
      },
    },
  }
})
