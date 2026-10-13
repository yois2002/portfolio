<script setup lang="ts">
import { profile } from '../data/profile'
import type { Lang } from '../data/profile'

defineProps<{ lang: Lang }>()

const items = [
  {
    key: 'email',
    label: 'Email',
    value: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
    icon: '<path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.24-8 5-8-5V6l8 5 8-5z"/>',
  },
  {
    key: 'github',
    label: 'GitHub',
    value: profile.contact.github,
    href: profile.contact.github,
    icon: '<path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3.01-.4c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.8 5.66-5.48 5.95.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.83.58C20.56 22.29 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z"/>',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    value: profile.contact.linkedin,
    href: profile.contact.linkedin,
    icon: '<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z"/>',
  },
]
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="contact-card">
        <h2 class="contact-title">{{ lang === 'zh' ? '联系我' : 'Contact' }}</h2>
        <p class="contact-lead">
          {{
            lang === 'zh'
              ? '欢迎能源 / 储能 / 工业软件团队与我联系，探讨初级前端岗位机会。'
              : 'Open to junior frontend roles in energy / storage / industrial software teams.'
          }}
        </p>
        <div class="contact-grid">
          <a
            v-for="it in items"
            :key="it.key"
            class="contact-item"
            :href="it.href"
            :target="it.key === 'email' ? undefined : '_blank'"
            rel="noopener"
          >
            <span
              class="icon"
              aria-hidden="true"
              v-html="`<svg viewBox='0 0 24 24' width='20' height='20' fill='currentColor'>${it.icon}</svg>`"
            ></span>
            <span class="meta">
              <span class="label">{{ it.label }}</span>
              <span class="value">{{ it.value }}</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: linear-gradient(180deg, var(--surface) 0%, var(--bg) 100%);
}
.contact-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 48px 32px;
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 0 12px 36px rgba(31, 78, 121, 0.08);
}
.contact-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 10px;
}
.contact-lead {
  color: var(--text-muted);
  max-width: 560px;
  margin: 0 auto 32px;
}
.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface);
  text-align: left;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}
.contact-item:hover {
  border-color: var(--primary);
  box-shadow: 0 8px 22px rgba(31, 78, 121, 0.12);
  transform: translateY(-2px);
  text-decoration: none;
}
.icon {
  flex: 0 0 auto;
  width: 42px;
  height: 42px;
  border-radius: 11px;
  background: var(--primary-light);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
}
.meta {
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.label {
  font-size: 12px;
  color: var(--text-muted);
}
.value {
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  overflow-wrap: anywhere;
}
@media (max-width: 720px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .contact-card {
    padding: 36px 20px;
  }
}
</style>
