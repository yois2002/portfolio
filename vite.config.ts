import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base: './' 让产物使用相对路径，部署到 GitHub Pages 项目页
// （https://<user>.github.io/<repo>/）或 Netlify / Vercel 都能直接打开，无需改配置。
export default defineConfig({
  plugins: [vue()],
  base: './',
})
