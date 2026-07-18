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

// Clicking the logo returns the visitor to the hero at the top of the page.
// On a single-route SPA a plain RouterLink to "/" would be a no-op when already
// home, so we scroll to the top ourselves.
const goHome = () => {
  closeMenu()
  window.scrollTo({ top: 0, behavior: 'smooth' })
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
          <RouterLink to="/" @click="goHome">
            <img alt="Morgan TechFest" src="@/assets/logo.svg" class="w-9/12 lg:w-full" />
          </RouterLink>
        </div>

        <nav class="hidden w-full max-w-screen-md justify-between lg:flex" aria-label="Primary">
          <a
            v-for="item in nav"
            :key="item.id"
            :href="item.href || '#' + item.id"
            class="nav-link"
          >
            {{ item.label }}
            <span v-if="item.href" class="nav-out" aria-hidden="true">&#8599;</span>
          </a>
        </nav>

        <div class="flex items-center gap-x-3">
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
        :href="item.href || '#' + item.id"
        class="mobile-nav-link"
        @click="closeMenu"
      >
        {{ item.label }}
        <span v-if="item.href" class="nav-out" aria-hidden="true">&#8599;</span>
      </a>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 50;
  /* A sticky header can never be scrolled past, so it must never be taller
     than the screen, otherwise anything below the fold is unreachable.
     Capping it here and letting the nav scroll inside is what keeps the last
     menu item reachable on short viewports (landscape phones). */
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  max-height: 100dvh; /* dvh accounts for mobile browser chrome; vh is the fallback */
}

.header-bg {
  flex: 0 0 auto;
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

/* Marks the two items that leave this page for a standalone one */
.nav-out {
  @apply ml-1 text-[10px] text-flux-cyan/60;
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

.register-btn {
  @apply flex h-9 w-full max-w-[130px] flex-shrink-0 items-center justify-center rounded-full px-4 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-white transition-transform duration-150 active:scale-95 xs:h-10 xs:max-w-[165px] xs:px-7 xs:text-xs md:h-12 md:max-w-[190px] md:text-sm;
  background: linear-gradient(180deg, #ff7a1a 25%, #fc470b 100%);
  box-shadow: 0 8px 24px rgba(252, 71, 11, 0.28);
}

/* ===== MOBILE NAV ===== */
.mobile-nav {
  @apply flex flex-col border-b border-white/10 px-5 pb-4 pt-1;
  background: rgba(21, 8, 41, 0.97);
  /* min-height:0 lets this flex child shrink below its content height so the
     cap above can bite; without it the list would push the header taller. */
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
}

/* Landscape phones are wide and short: a single 7-item column wastes the width
   and runs off the bottom. Two columns halve the height. */
@media (max-height: 500px) and (orientation: landscape) {
  .mobile-nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }

  .mobile-nav-link {
    @apply py-2;
  }
}

.mobile-nav-link {
  @apply border-b border-white/5 py-3 font-mono text-xs uppercase tracking-[0.12em] text-white/80 transition-colors duration-150 hover:text-flux-cyan;
}

.mobile-nav-link:last-child {
  @apply border-b-0;
}

/* In the two-column layout the "last child" rule no longer maps to the visually
   bottom row, so keep the rules uniform there. */
@media (max-height: 500px) and (orientation: landscape) {
  .mobile-nav-link:last-child {
    @apply border-b;
    border-color: rgb(255 255 255 / 0.05);
  }
}
</style>
