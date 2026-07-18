<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ChocolateMenuIcon from '@/components/icons/IconChocolateMenu.vue'
import { nav, eventInfo } from '@/data/home'

const isMenuOpen = ref(false)
const isSticky = ref(false)
const sentinel = ref(null)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const onKeydown = (e) => {
  if (e.key === 'Escape') closeMenu()
}

// Sticky state via IntersectionObserver rather than a scroll listener: the
// browser reports the crossing itself, so there is no per-frame work and no
// layout read on the main thread while scrolling.
let observer = null

onMounted(() => {
  if (sentinel.value && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      ([entry]) => {
        isSticky.value = !entry.isIntersecting
      },
      { rootMargin: '0px', threshold: 0 }
    )
    observer.observe(sentinel.value)
  }
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <!-- Zero-height probe: when it scrolls out of view, the header pins -->
  <div ref="sentinel" aria-hidden="true" class="h-0 w-full"></div>

  <header :class="{ 'is-pinned': isSticky }">
    <div class="header-bg px-3 py-4 xs:px-5 xs:py-5 xl:px-[5%]">
      <div class="mx-auto flex items-center justify-between gap-x-3 xs:gap-x-[5%]">
        <div class="flex items-center gap-x-2 xs:gap-x-3">
          <button
            class="menu-toggle lg:hidden"
            :aria-expanded="isMenuOpen"
            aria-controls="mobile-nav"
            aria-label="Open navigation"
            @click="toggleMenu"
          >
            <ChocolateMenuIcon />
          </button>
          <RouterLink to="/" @click="closeMenu">
            <img alt="Morgan TechFest" src="@/assets/logo.svg" class="w-9/12 lg:w-full" />
          </RouterLink>
        </div>

        <nav class="hidden w-full max-w-screen-md justify-between lg:flex" aria-label="Primary">
          <a v-for="item in nav" :key="item.id" :href="'#' + item.id" class="nav-link">
            <span class="nav-index">{{ item.index }}</span>
            {{ item.label }}
          </a>
        </nav>

        <div class="flex items-center gap-x-3">
          <span class="status-pill" :title="eventInfo.stamp">
            <span class="status-dot"></span>
            <span>Reg. Open</span>
          </span>
          <a
            :href="eventInfo.registerUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="register-btn"
            >Register now</a
          >
        </div>
      </div>
    </div>

    <!-- Native disclosure. Replaces the full component library that used to ship
         just to render this list. -->
    <nav
      v-show="isMenuOpen"
      id="mobile-nav"
      class="mobile-nav lg:hidden"
      aria-label="Primary mobile"
    >
      <a
        v-for="item in nav"
        :key="item.id"
        :href="'#' + item.id"
        class="mobile-nav-link"
        @click="closeMenu"
      >
        <span class="nav-index">{{ item.index }}</span>
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 50;
}

.header-bg {
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(21, 8, 41, 0.82);
  transition: background 0.25s ease, border-color 0.25s ease;
}

/* Only pay for the blur once the header is actually overlapping content.
   backdrop-filter forces a fresh GPU layer every frame, so it stays off
   at rest. */
.is-pinned .header-bg {
  background: rgba(21, 8, 41, 0.72);
  border-bottom-color: rgba(13, 198, 244, 0.22);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.nav-link {
  @apply relative font-mono text-xs font-medium uppercase tracking-[0.12em] text-white/70 transition-colors duration-200 hover:text-white xl:text-[13px];
}

.nav-index {
  @apply mr-1.5 text-[10px] text-flux-cyan/55;
}

.nav-link::after {
  content: '';
  @apply absolute -bottom-1.5 left-0 h-px w-0 bg-flux-cyan transition-all duration-200;
}

.nav-link:hover::after {
  @apply w-full;
}

.menu-toggle {
  @apply rounded-md p-1 transition-colors duration-200 hover:bg-white/10;
}

/* ===== STATUS PILL ===== */
.status-pill {
  @apply hidden flex-shrink-0 items-center gap-x-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-flux-cyan xs:flex;
  border: 1px solid rgba(13, 198, 244, 0.3);
  background: rgba(13, 198, 244, 0.08);
}

.status-dot {
  @apply block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-flux-cyan;
  animation: statusPulse 2.4s ease-in-out infinite;
}

@keyframes statusPulse {
  0%,
  100% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(13, 198, 244, 0.55);
  }
  50% {
    opacity: 0.65;
    box-shadow: 0 0 0 4px rgba(13, 198, 244, 0);
  }
}

.register-btn {
  @apply flex h-9 w-full max-w-[130px] flex-shrink-0 items-center justify-center rounded-full px-4 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-white transition-transform duration-150 active:scale-95 xs:h-10 xs:max-w-[165px] xs:px-7 xs:text-xs md:h-12 md:max-w-[190px] md:text-sm;
  background: linear-gradient(180deg, #ff7a1a 25%, #fc470b 100%);
  box-shadow: 0 8px 24px rgba(252, 71, 11, 0.28);
}

/* ===== MOBILE NAV ===== */
.mobile-nav {
  @apply flex flex-col border-b border-white/10 px-5 pb-4 pt-1;
  background: rgba(21, 8, 41, 0.97);
}

.mobile-nav-link {
  @apply border-b border-white/5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-white/80 transition-colors duration-150 hover:text-flux-cyan;
}

.mobile-nav-link:last-child {
  @apply border-b-0;
}
</style>
