<script setup lang="ts">
import { computed } from 'vue'
import { profile } from '../data/profile'
import type { Lang } from '../data/profile'

const props = defineProps<{ lang: Lang }>()

const groups = computed(() => [
  {
    key: 'stack',
    title: props.lang === 'zh' ? '技术栈' : 'Tech Stack',
    icon: ['M9 6l-5 6 5 6', 'M15 6l5 6-5 6'],
    tags: profile.stack as string[] | null,
    text: '',
  },
  {
    key: 'domain',
    title: props.lang === 'zh' ? '行业领域' : 'Domain',
    icon: ['M12 3l9 5-9 5-9-5 9-5z', 'M3 13l9 5 9-5'],
    tags: profile.domain as string[] | null,
    text: '',
  },
  {
    key: 'lang',
    title: props.lang === 'zh' ? '语言' : 'Languages',
    icon: [
      'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z',
      'M3.6 9h16.8M3.6 15h16.8M12 3c2.6 3 2.6 15 0 18M12 3c-2.6 3-2.6 15 0 18',
    ],
    tags: null,
    text: profile.languages[props.lang],
  },
])
</script>

<template>
  <section id="about" class="container">
    <h2 class="section-title">{{ lang === 'zh' ? '关于我' : 'About' }}</h2>
    <p class="about-text">{{ profile.about[lang] }}</p>

    <div class="highlights">
      <div v-for="h in profile.highlights" :key="h.zh" class="card">
        <span>{{ h[lang] }}</span>
      </div>
    </div>

    <div class="blocks">
      <div v-for="g in groups" :key="g.key" class="block">
        <div class="block-head">
          <span class="block-ico">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path v-for="(d, i) in g.icon" :key="i" :d="d" />
            </svg>
          </span>
          <h3>{{ g.title }}</h3>
        </div>

        <div v-if="g.tags" class="tags">
          <span v-for="t in g.tags" :key="t" class="tag">{{ t }}</span>
        </div>
        <p v-else class="muted">{{ g.text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-text {
  max-width: 760px;
  color: var(--text);
  margin-bottom: 24px;
}

.highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}
.card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--primary);
  opacity: 0;
  transition: opacity 0.2s ease;
}
.card:hover {
  transform: translateY(-2px);
  border-color: var(--primary);
  box-shadow: 0 8px 20px rgba(31, 78, 121, 0.08);
}
.card:hover::before {
  opacity: 1;
}

/* ── 底部三栏：统一卡片式 ── */
.blocks {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}
.block {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 18px 20px 20px;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}
.block:hover {
  transform: translateY(-2px);
  border-color: var(--primary);
  box-shadow: 0 8px 20px rgba(31, 78, 121, 0.08);
}

.block-head {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 1px solid var(--border);
}
.block-ico {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  flex: 0 0 30px;
  border-radius: 9px;
  background: var(--primary-light);
  color: var(--primary);
}
.block-ico svg {
  width: 17px;
  height: 17px;
}
.block-head h3 {
  color: var(--primary);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.2px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.block .tag {
  margin: 0;
  padding: 5px 12px;
  border: 1px solid transparent;
  background: var(--primary-light);
  color: var(--primary);
  font-size: 13px;
  line-height: 1.4;
  transition: background 0.18s ease, border-color 0.18s ease;
}
.block .tag:hover {
  background: #dbe9fd;
  border-color: rgba(31, 78, 121, 0.25);
}

.muted {
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.75;
}
</style>
