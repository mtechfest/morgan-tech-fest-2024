<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import ChocolateMenuIcon from '@/components/icons/IconChocolateMenu.vue'

// Define reactive properties
const isClicked = ref(false)
const selectedKeys = ref(['1'])
const openKeys = ref([''])
const isMenuOpen = ref(false)
const isSticky = ref(false)
const myHeader = ref(null)

// Define a mapping between the link key and the section id
const sectionIds = {
  Home: 'home',
  'About': 'about',
  'Components': 'components',
  Schedule: 'schedule',
  Partners: 'partners',
  FAQ: 'faq'
}

// watch sub mobile menu property
watch(isMenuOpen, (val) => {
  if (val) {
    openKeys.value = ['sub2']
  } else {
    openKeys.value = ['']
  }
})

// Computed property for button class
const buttonClass = computed(() => ({
  'register-btn': true,
  clicked: isClicked.value
}))

// Event handlers
const scaleDown = async (event) => {
  event.preventDefault()

  isClicked.value = true

  await new Promise((resolve) => {
    setTimeout(() => {
      isClicked.value = false
      resolve()
    }, 100)
  })

  window.open('https://form.jotform.com/252798316140156', '_blank', 'noopener noreferrer')
}

const titleClick = () => {
  // no-op
}

const handleClick = (e) => {
  openKeys.value = ['']

  const sectionId = sectionIds[e.key]
  if (sectionId) {
    const headerEl = document.querySelector('header')
    if (!headerEl) return
    const headerHeight = headerEl.offsetHeight

    const sectionElement = document.getElementById(sectionId)
    if (sectionElement) {
      const scrollToY = sectionElement.offsetTop - headerHeight - 230

      window.scrollTo({
        top: scrollToY,
        behavior: 'smooth'
      })
    }
  }
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Throttle scroll handler with requestAnimationFrame to prevent excessive reflows
let scrollTicking = false

const handleScroll = () => {
  if (scrollTicking) return
  scrollTicking = true

  window.requestAnimationFrame(() => {
    if (myHeader.value) {
      isSticky.value = window.scrollY > myHeader.value.offsetTop
    }
    scrollTicking = false
  })
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  scrollTicking = false
})
</script>

<template>
  <header :class="{ 'bg-flux-indigo': !isSticky, sticky: isSticky }" ref="myHeader">
    <div class="header-bg px-3 py-5 xs:px-5 xs:py-7 xl:px-[5%]">
      <div class="mx-auto flex items-center justify-between gap-x-3 xs:gap-x-[5%]">
        <div class="flex items-center gap-x-2 xs:gap-x-3">
          <button class="lg:hidden" @click="toggleMenu"><ChocolateMenuIcon /></button>
          <RouterLink to="/"
            ><img alt="Logo" src="@/assets/logo.svg" class="w-9/12 lg:w-full"
          /></RouterLink>
        </div>

        <nav class="hidden w-full max-w-screen-md justify-between lg:flex">
          <a href="#" v-scroll-to="'#hero'" class="nav-link">Home</a>
          <a href="#" v-scroll-to="'#about'" class="nav-link">About</a>
          <a href="#" v-scroll-to="'#components'" class="nav-link">Components</a>
          <a href="#" v-scroll-to="'#schedule'" class="nav-link">Schedule</a>
          <a href="#" v-scroll-to="'#partners'" class="nav-link">Partners</a>
          <a href="#" v-scroll-to="'#faq'" class="nav-link">FAQ</a>
        </nav>

        <a href="#" :class="buttonClass" @click="scaleDown">Register now</a>
      </div>
    </div>

    <a-menu
      id="dddddd"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      @click="handleClick"
      class="antd-custom-menu"
    >
      <a-sub-menu key="sub2" @titleClick="titleClick">
        <template #title>Navigation</template>
        <a-menu-item key="Home">Home</a-menu-item>
        <a-menu-item key="About">About</a-menu-item>
        <a-menu-item key="Components">Components</a-menu-item>
        <a-menu-item key="Schedule">Schedule</a-menu-item>
        <a-menu-item key="Partners">Partners</a-menu-item>
        <a-menu-item key="FAQ">FAQ</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </header>
</template>

<style scoped>
.header-bg {
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-left: 0;
  border-right: 0;
  background: linear-gradient(175deg, rgba(78, 22, 104, 0.55) 5%, rgba(36, 17, 69, 0.55) 51%),
    rgba(21, 8, 41, 0.55);
  backdrop-filter: blur(10px);
}

.nav-link {
  @apply relative font-urbanist text-base font-medium text-white/85 transition-colors duration-200 hover:text-white xl:text-lg 2xl:text-xl;
}

.nav-link::after {
  content: '';
  @apply absolute -bottom-1.5 left-0 h-px w-0 bg-flux-cyan transition-all duration-200;
}

.nav-link:hover::after {
  @apply w-full;
}

.register-btn {
  @apply flex h-[36px] w-full max-w-[130px] flex-shrink-0 items-center justify-center rounded-[80px] px-4 text-xs font-extrabold text-white transition-transform duration-150 xs:h-[40px] xs:max-w-[165px] xs:px-9 xs:text-sm md:h-14 md:max-w-[196px] md:text-lg;
  background: linear-gradient(180deg, #ff7a1a 25.62%, #fc470b 100.89%);
  box-shadow: 0 8px 24px rgba(252, 71, 11, 0.3);
}

.clicked {
  transform: scale(0.9);
}

.sticky {
  @apply fixed top-0 z-50 w-full;
}
</style>
