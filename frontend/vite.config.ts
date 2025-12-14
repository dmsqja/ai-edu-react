import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // TODO: 백엔드 API 구현 후 프록시 설정 활성화
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:80',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
})
