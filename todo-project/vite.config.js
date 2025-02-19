import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // 他のコンテナからのアクセスを許可する場合
    host: '0.0.0.0'
  }
})

