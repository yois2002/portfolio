# 个人作品集 · Portfolio (Vue3 + Vite + TypeScript)

能源领域 Junior 前端的作品集站点，同时也是你的「第 0 个作品」——证明你能从 0 搭项目并部署上线。
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

## 你要改的内容（集中在 data 层，不用动组件）

1. `src/data/profile.ts`：把姓名、定位、关于、技术栈、行业领域、邮箱 / GitHub / LinkedIn 换成你自己的。
2. `src/data/projects.ts`：每做出一个项目，把 `demo` / `repo` 换成真实链接，并把 `status` 改为 `'wip'` 或 `'done'`。
3. 站点右上角可一键切换「中文 / EN」。

## 部署

### 方案 A：GitHub Pages（推荐，免费）

1. 在 GitHub 新建仓库（如 `portfolio`），把本目录内容 push 上去（建议推到 `main` 分支）。
2. 仓库 **Settings → Pages → Build and deployment → Source 选 "GitHub Actions"**。
3. 推送后 Actions 会自动构建并发布；访问 `https://<你的用户名>.github.io/<仓库名>/`。
4. 因 `vite.config.ts` 已设 `base: './'`，项目页子路径资源能正确加载，无需额外配置。

> 如需自定义域名，在 Settings → Pages 填 Custom domain 即可。

### 方案 B：Vercel / Netlify（更简单，免费）

1. 用 GitHub 账号登录 Vercel 或 Netlify。
2. 导入本仓库。
3. 构建命令：`npm run build`；输出目录：`dist`。
4. 部署后获得一个 `.vercel.app` / `.netlify.app` 域名（可绑自定义域名）。

## 建议的推进节奏（配合 90 天周计划）

- W1：本地跑起来，改好 profile，4 张卡片先留占位 → 部署上线拿到 URL。
- W2–W5：uni-app 课做完，替换卡片③的 demo / repo。
- W6–W7：储能估算器做完，替换卡片①。
- W8–W9：EMS 看板做完，替换卡片②。
- W10：VibeCoding 小工具做完，替换卡片④。
- W11–W12：整体润色，把 URL 写进简历顶部。
