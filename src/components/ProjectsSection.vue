<script setup lang="ts">
import { projects } from '../data/projects'
import type { Lang } from '../data/profile'

defineProps<{ lang: Lang }>()

const statusLabel: Record<string, { zh: string; en: string }> = {
  planned: { zh: '规划中', en: 'Planned' },
  wip: { zh: '进行中', en: 'In Progress' },
  done: { zh: '已完成', en: 'Done' },
}
</script>

<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title">{{ lang === 'zh' ? '项目作品' : 'Projects' }}</h2>
      <div class="grid">
        <article v-for="p in projects" :key="p.id" class="project">
          <div class="project-head">
            <h3>{{ p.title[lang] }}</h3>
            <span class="status" :class="p.status">{{ statusLabel[p.status][lang] }}</span>
          </div>
          <p class="desc">{{ p.desc[lang] }}</p>
          <div class="stack">
            <span v-for="s in p.stack" :key="s" class="tag">{{ s }}</span>
          </div>
          <div class="links">
            <a :href="p.demo" target="_blank" rel="noopener">Demo</a>
            <a :href="p.repo" target="_blank" rel="noopener">Repo</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  background: var(--surface);
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
.project {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: box-shadow 0.2s, transform 0.2s;
}
.project:hover {
  box-shadow: 0 8px 24px rgba(31, 78, 121, 0.12);
  transform: translateY(-2px);
}
.project-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.project-head h3 {
  font-size: 18px;
  color: var(--text);
}
.status {
  font-size: 12px;
  padding: 3px 10px;
  border-radius: 999px;
  background: #eee;
  color: #666;
  white-space: nowrap;
}
.status.planned {
  background: #fff4e5;
  color: #b26a00;
}
.status.wip {
  background: var(--primary-light);
  color: var(--primary);
}
.status.done {
  background: #e2efda;
  color: #2e7d32;
}
.desc {
  color: var(--text-muted);
  flex: 1;
}
.links {
  display: flex;
  gap: 16px;
}
.links a {
  font-weight: 600;
}
</style>
