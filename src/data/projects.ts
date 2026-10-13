import type { Bilingual } from './profile'

export type ProjectStatus = 'planned' | 'wip' | 'done'

export interface Project {
  id: string
  title: Bilingual
  desc: Bilingual
  stack: string[]
  demo: string
  repo: string
  status: ProjectStatus
}

// 占位卡片：做出对应项目后，把 demo / repo 换成真实链接，status 改为 'wip' / 'done'。
export const projects: Project[] = [
  {
    id: 'bess-estimator',
    title: { zh: '储能容量估算器', en: 'BESS Capacity Estimator' },
    desc: {
      zh: '输入负荷曲线与峰谷电价，计算建议配置容量与回本周期。占位：待 W6–W7 实现。',
      en: 'Input load profile & TOU tariffs, compute suggested capacity & payback. Placeholder: build in W6–W7.',
    },
    stack: ['Vue3', 'TypeScript', 'Vite'],
    demo: '#',
    repo: '#',
    status: 'planned',
  },
  {
    id: 'ems-dashboard',
    title: { zh: 'EMS 数据看板', en: 'EMS Data Dashboard' },
    desc: {
      zh: '模拟拉取 EMS 数据，可视化尖峰平谷用电。占位：待 W8–W9 实现。',
      en: 'Mock EMS data pull, visualize peak / flat / valley consumption. Placeholder: build in W8–W9.',
    },
    stack: ['React', 'TypeScript', 'ECharts'],
    demo: '#',
    repo: '#',
    status: 'planned',
  },
  {
    id: 'uniapp-capstone',
    title: { zh: 'uni-app 项目课作品', en: 'uni-app Capstone' },
    desc: {
      zh: '黑马 uni-app 项目课交付的跨端应用。占位：W2–W5 完成后替换。',
      en: 'Cross-platform app from Heima uni-app project course. Placeholder: replace after W2–W5.',
    },
    stack: ['uni-app', 'Vue3'],
    demo: '#',
    repo: '#',
    status: 'planned',
  },
  {
    id: 'vibe-tool',
    title: { zh: 'VibeCoding 小工具', en: 'AI-assisted Tool' },
    desc: {
      zh: '用 AI 辅助开发（VibeCoding）从想法到上线的实用小工具。占位：待 W10 实现。',
      en: 'A practical tool shipped with AI-assisted dev (VibeCoding). Placeholder: build in W10.',
    },
    stack: ['VibeCoding', 'AI-assisted'],
    demo: '#',
    repo: '#',
    status: 'planned',
  },
]
