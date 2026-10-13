<script setup lang="ts">
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import type { Lang } from './data/profile'

const lang = ref<Lang>('zh')
function toggleLang() {
  lang.value = lang.value === 'zh' ? 'en' : 'zh'
}
</script>

<template>
  <NavBar :lang="lang" @toggle="toggleLang" />
  <main>
    <HeroSection :lang="lang" />
    <AboutSection :lang="lang" />
    <ProjectsSection :lang="lang" />
    <ContactSection :lang="lang" />
  </main>
</template>
