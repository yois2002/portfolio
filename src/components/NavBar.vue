<script setup lang="ts">
import { profile } from '../data/profile'
import type { Lang } from '../data/profile'

defineProps<{ lang: Lang }>()
defineEmits<{ toggle: [] }>()
</script>

<template>
  <header class="nav">
    <div class="container nav-inner">
      <a class="brand" href="#top">{{ profile.name }}</a>
      <nav class="links">
        <a href="#about">{{ lang === 'zh' ? '关于' : 'About' }}</a>
        <a href="#projects">{{ lang === 'zh' ? '项目' : 'Projects' }}</a>
        <a href="#contact">{{ lang === 'zh' ? '联系' : 'Contact' }}</a>
        <button class="lang-btn" @click="$emit('toggle')">
          {{ lang === 'zh' ? 'EN' : '中文' }}
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}
.brand {
  font-weight: 700;
  color: var(--primary);
  font-size: 18px;
}
.links {
  display: flex;
  align-items: center;
  gap: 20px;
}
.links a {
  color: var(--text);
  font-size: 15px;
}
.lang-btn {
  border: 1px solid var(--border);
  background: var(--surface);
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 13px;
  color: var(--primary);
}
.lang-btn:hover {
  background: var(--primary-light);
}
</style>
