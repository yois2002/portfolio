export type Lang = 'zh' | 'en'

export interface Bilingual {
  zh: string
  en: string
}

export const profile = {
  name: '黄丽芸',
  nameEn: 'Yois',
  title: {
    zh: '前端开发 | AI应用 | 产品经理',
    en: 'Energy - Frontend Developer',
  } as Bilingual,
  tagline: {
    zh: 'Vue / React  · 储能 EMS 行业背景 · 商务英语',
    en: 'Vue / React · BESS & EMS Domain · Business English',
  } as Bilingual,
  about: {
    zh: '2 年左右企业级 Vue2 实战，系统完成 Vue3 / React / TypeScript 课程，深耕储能 BESS / EMS 领域，能用英语对接海外客户与输出技术文档。',
    en: '2 years enterprise Vue2 practice, completed Vue3 / React / TypeScript courses, deep in BESS / EMS domain, able to communicate with overseas clients and write technical docs in  English.',
  } as Bilingual,
  highlights: [
    { zh: '储能 / 新能源行业背景', en: 'Energy storage / renewable domain' },
    { zh: '前端：Vue · React', en: 'Frontend: Vue3 · React' },
    { zh: '商务英语 / 技术文档', en: 'Business English / technical docs' },
    { zh: 'AI 辅助开发 (VibeCoding)', en: 'AI-assisted dev (VibeCoding)' },
  ],
  stack: ['Vue', 'React','JavaScript', 'TypeScript', 'uni-app', 'Vite', 'Pinia', 'ECharts','ant-design-vue','Element-ui'],
  domain: ['储能 BESS', 'EMS 能量管理', 'PCS / BMS', '峰谷套利', '微网拓扑'],
  languages: {
    zh: '中文（母语） · English（日常沟通 / 技术文档） · 韩语（入门） · 法语（入门）',
    en: 'Chinese (native) · English (daily / technical) · Korean (Beginner) · French (Beginner)',
  } as Bilingual,
  contact: {
    email: 'yoish@foxmail.com',
    github: 'https://github.com/yois2002',
    linkedin: 'https://www.linkedin.com/in/丽芸-黄-3a9230397',
  },
}
