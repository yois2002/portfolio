# 个人作品集 · Portfolio (Vue3 + Vite + TypeScript)

能源领域 Junior 前端的作品集站点。
支持中英双语切换，响应式布局。

## 目录结构

```
portfolio/
├─ index.html
├─ package.json
├─ vite.config.ts        # base:'./' 已配好，GitHub Pages / Vercel / Netlify 直接可用
├─ src/
│  ├─ main.ts
│  ├─ App.vue            # 语言切换状态管理
│  ├─ styles/global.css  # 主题变量
│  ├─ data/
│  │  ├─ profile.ts      # ★ 改这里：姓名 / 定位 / 关于 / 标签 / 联系方式
│  │  └─ projects.ts     # ★ 改这里：4 个项目卡片（做出后替换链接与状态）
│  └─ components/        # NavBar / Hero / About / Projects / Contact
└─ .github/workflows/deploy.yml   # GitHub Pages 自动部署
```

## 本地运行

```bash
npm install
npm run dev      # 本地预览 http://localhost:5173
npm run build    # 产物输出到 dist/
```
