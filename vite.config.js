import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // 静态资源服务的文件夹
  cacheDir: 'node_modules/.vite', // 存储缓存文件的目录
})
