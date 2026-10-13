<script setup lang="ts">
import { profile } from '../data/profile'
import type { Lang } from '../data/profile'

defineProps<{ lang: Lang }>()
</script>

<template>
  <section id="top" class="hero">
    <div class="container">
      <p class="eyebrow">{{ lang === 'zh' ? '作品集 / Portfolio' : 'Portfolio' }}</p>
      <h1>
        {{ profile.name }} <span class="name-en">{{ profile.nameEn }}</span>
      </h1>
      <h2 class="title">{{ profile.title[lang] }}</h2>
      <p class="tagline">{{ profile.tagline[lang] }}</p>
      <div class="cta">
        <a class="btn btn-primary" href="#projects">
          {{ lang === 'zh' ? '查看项目' : 'View Projects' }}
        </a>
        <a class="btn btn-ghost" href="#contact">
          {{ lang === 'zh' ? '联系我' : 'Contact' }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 96px 0 72px;
  background: linear-gradient(180deg, var(--primary-light), var(--bg));
}
.eyebrow {
  color: var(--primary);
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 13px;
}
h1 {
  font-size: 40px;
  margin: 8px 0;
}
.name-en {
  font-size: 20px;
  color: var(--text-muted);
  font-weight: 500;
  margin-left: 10px;
}
.title {
  font-size: 22px;
  color: var(--primary);
  margin-bottom: 12px;
}
.tagline {
  color: var(--text-muted);
  font-size: 16px;
  max-width: 640px;
}
.cta {
  margin-top: 28px;
  display: flex;
  gap: 12px;
}
</style>
