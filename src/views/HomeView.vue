<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LinkedinIcon from '@/components/icons/IconLinkedin.vue'
import TwitterIcon from '@/components/icons/IconTwitter.vue'
import InstagramIcon from '@/components/icons/IconInstagram.vue'
import GithubIcon from '@/components/icons/IconGithub.vue'
import DiscordIcon from '@/components/icons/IconDiscord.vue'
import FAQItem from '@/components/FAQItem.vue'
import { schedule, speakerSlots, tracks, partners, FaqQuestionsAnswers, eventInfo } from '@/data/home'

// Countdown timer
const eventDate = new Date(eventInfo.iso)
const days = ref('00')
const hours = ref('00')
const mins = ref('00')
const secs = ref('00')
let countdownInterval = null

const updateCountdown = () => {
  const now = new Date()
  const diff = eventDate - now
  if (diff <= 0) {
    days.value = '00'
    hours.value = '00'
    mins.value = '00'
    secs.value = '00'
    return
  }
  days.value = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0')
  hours.value = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0')
  mins.value = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0')
  secs.value = String(Math.floor((diff / 1000) % 60)).padStart(2, '0')
}

onMounted(() => {
  updateCountdown()
  countdownInterval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (countdownInterval) clearInterval(countdownInterval)
})
</script>

<template>
  <!-- ===================== HERO ===================== -->
  <section id="hero" class="hero-wrapper">
    <!-- Atmosphere: perspective grid, light streaks, globe, grain -->
    <div class="hero-grid" aria-hidden="true"></div>
    <div class="hero-streaks" aria-hidden="true"></div>
    <div class="hero-globe" aria-hidden="true"></div>
    <div class="hero-veil" aria-hidden="true"></div>
    <div class="hero-grain" aria-hidden="true"></div>

    <div class="relative z-10 px-5 pb-16 pt-10 xs:px-8 sm:pb-20 md:pt-14 lg:px-12 lg:pb-28 lg:pt-16 xl:px-16">
      <div class="mx-auto flex max-w-5xl flex-col items-center text-center">
        <!-- Eyebrow: the four tracks the theme runs on -->
        <p class="hero-eyebrow animate-rise-1">
          AI <span class="dot">&bull;</span> Cybersecurity <span class="dot">&bull;</span> Robotics
          <span class="dot">&bull;</span> Data Science
        </p>

        <!-- Theme wordmark -->
        <h1 class="animate-rise-2 mt-4 w-full sm:mt-5">
          <span class="sr-only">Future Flux — Building the Intelligent World</span>
          <img
            src="/future-flux.webp"
            alt=""
            class="mx-auto w-[84%] max-w-[280px] xs:max-w-[330px] sm:max-w-[430px] md:max-w-[490px] lg:max-w-[560px] xl:max-w-[620px]"
            width="1400"
            height="815"
            fetchpriority="high"
          />
        </h1>

        <!-- Tagline band, lifted straight from the key art -->
        <p class="tagline-band animate-rise-3">Building The Intelligent World</p>

        <!-- The three verbs the festival has always run on -->
        <p
          class="animate-rise-3 mt-7 flex items-center justify-center gap-x-3 font-bebas text-2xl tracking-wide text-white xs:gap-x-4 xs:text-3xl sm:text-4xl md:text-5xl"
        >
          <span class="verb">Discover</span>
          <span class="text-white/25">|</span>
          <span class="verb text-flux-cyan">Network</span>
          <span class="text-white/25">|</span>
          <span class="verb">Innovate</span>
        </p>

        <p
          class="hero-intro animate-rise-3 mx-auto mt-4 max-w-md font-urbanist text-base leading-relaxed sm:mt-5 sm:max-w-xl sm:text-lg"
        >
          Empowering the next generation of technology leaders at Morgan State University.
        </p>

        <!-- Info card — the flyer's own device, so the type stays readable over the globe -->
        <div class="info-card animate-rise-4 mt-8 sm:mt-10">
          <div>
            <span class="hero-label">Event countdown</span>
            <div class="mt-2 flex justify-center gap-x-4 xs:gap-x-6 sm:gap-x-8">
              <div class="countdown-block">
                <span class="countdown-number">{{ days }}</span>
                <span class="countdown-label">Days</span>
              </div>
              <div class="countdown-block">
                <span class="countdown-number">{{ hours }}</span>
                <span class="countdown-label">Hours</span>
              </div>
              <div class="countdown-block">
                <span class="countdown-number">{{ mins }}</span>
                <span class="countdown-label">Mins</span>
              </div>
              <div class="countdown-block">
                <span class="countdown-number">{{ secs }}</span>
                <span class="countdown-label">Secs</span>
              </div>
            </div>
          </div>

          <div class="info-rule"></div>

          <div class="flex flex-col gap-y-5 sm:flex-row sm:gap-x-10 sm:gap-y-0">
            <div class="flex-1">
              <span class="hero-label">Date</span>
              <p class="info-value">{{ eventInfo.date }}</p>
            </div>
            <div class="hidden w-px self-stretch bg-white/10 sm:block"></div>
            <div class="flex-1">
              <span class="hero-label">Venue</span>
              <p class="info-value">{{ eventInfo.venue }}</p>
              <p class="mt-0.5 font-urbanist text-sm text-white/45">{{ eventInfo.city }}</p>
            </div>
          </div>
        </div>

        <a
          href="https://form.jotform.com/252798316140156"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-solid animate-rise-4 mt-7 sm:mt-8"
          >Register now</a
        >
      </div>
    </div>
  </section>

  <!-- ===================== ABOUT (with Video) ===================== -->
  <div class="bg-flux-mist px-5 pb-10 pt-10 xs:px-8 md:pb-16 md:pt-14" id="about">
    <div class="mx-auto max-w-6xl">
      <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <!-- Left: About text -->
        <div>
          <span class="section-label">About Morgan TechFest</span>
          <p
            class="mt-4 font-urbanist text-xl leading-relaxed text-flux-ink xs:text-2xl md:text-2xl md:leading-relaxed"
          >
            Morgan TechFest is a platform that drives discovery, innovation, and collaboration,
            empowering the next generation of technology leaders and enabling meaningful career
            exploration in technology-driven fields.
          </p>
          <p class="mt-4 font-urbanist text-base leading-relaxed text-flux-ink/60 xs:text-lg">
            Open to students from Morgan State University and other institutions, Morgan TechFest
            encourages collaboration across schools, diverse perspectives, and increased visibility
            of student innovation.
          </p>
        </div>
        <!-- Right: Video -->
        <div class="video-container-inline">
          <iframe
            src="https://www.youtube.com/embed/MLX3J9nk0cI?si=Fe_QZEDKo3kaM7Qe"
            title="Networking Session"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>

  <!-- ===================== SPEAKERS ===================== -->
  <div class="overflow-hidden bg-flux-mist px-5 pb-14 pt-10 xs:px-8 md:pb-20 md:pt-14" id="speakers">
    <div class="mx-auto max-w-6xl">
      <div class="text-center">
        <span class="section-label">Speakers &amp; Panelists</span>
        <h2 class="mt-3 font-bebas text-5xl font-normal text-flux-ink xs:text-6xl sm:text-7xl">
          Featured Voices
        </h2>
        <p class="mx-auto mt-3 max-w-md font-urbanist text-base text-flux-ink/55 sm:text-lg">
          The Future Flux lineup lands closer to the event. Follow along and you will hear first.
        </p>
      </div>
    </div>

    <!-- Scrolling marquee -->
    <div class="speaker-marquee mt-10 md:mt-14">
      <div class="speaker-track">
        <template v-for="slot in speakerSlots" :key="slot.id + '-1'">
          <div class="speaker-card">
            <div class="speaker-img-wrap">
              <span class="speaker-pending">Revealed<br />soon</span>
            </div>
            <p class="speaker-name">{{ slot.role }}</p>
          </div>
        </template>
        <!-- Duplicate for seamless loop -->
        <template v-for="slot in speakerSlots" :key="slot.id + '-2'">
          <div class="speaker-card" aria-hidden="true">
            <div class="speaker-img-wrap">
              <span class="speaker-pending">Revealed<br />soon</span>
            </div>
            <p class="speaker-name">{{ slot.role }}</p>
          </div>
        </template>
      </div>
    </div>
  </div>

  <!-- ===================== CORE COMPONENTS ===================== -->
  <div class="section-dark px-5 pb-16 pt-16 xs:px-8 md:pb-28 md:pt-24" id="components">
    <div class="mx-auto max-w-6xl">
      <span class="section-label-light">What We Do</span>
      <h2 class="mt-3 font-bebas text-5xl font-normal text-white xs:text-6xl sm:text-7xl">
        Core Components
      </h2>

      <div class="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
        <!-- Tech Case Competition -->
        <div class="comp-card group">
          <h3 class="comp-title">Tech Case Competition</h3>
          <p class="comp-text">
            Student teams develop technology-driven solutions to real-world problems across key
            tracks. Solutions are evaluated based on clarity, innovation, feasibility, and impact.
          </p>
          <div class="mt-5 flex flex-wrap gap-2">
            <template v-for="track in tracks" :key="track">
              <span class="track-tag">{{ track }}</span>
            </template>
          </div>
        </div>

        <!-- Innovation Expo -->
        <div class="comp-card group">
          <h3 class="comp-title">Innovation Expo</h3>
          <p class="comp-subtitle">Research &amp; Project Showcase</p>
          <p class="comp-text">
            Students showcase research and projects, including prototypes and technology-driven
            solutions, evaluated based on clarity, technical depth, organization, and real-world
            impact.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- ===================== SCHEDULE ===================== -->
  <div class="section-dark px-5 pb-16 pt-16 xs:px-8 md:pb-28 md:pt-24" id="schedule">
    <div class="mx-auto max-w-6xl">
      <span class="section-label-light">The Event</span>
      <h2 class="mt-3 font-bebas text-5xl font-normal text-white xs:text-6xl sm:text-7xl">
        Schedule
      </h2>

      <div class="mt-8 grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-3 md:mt-14 lg:grid-cols-5 lg:gap-4">
        <template v-for="item in schedule" :key="item">
          <span class="sched-pill">{{ item }}</span>
        </template>
      </div>

      <div class="mt-10 flex justify-center md:mt-14">
        <a href="/schedule.html" target="_blank" rel="noopener noreferrer" class="cta-btn"
          >Check Full Schedule
        </a>
      </div>
    </div>
  </div>

  <!-- ===================== PARTNERS ===================== -->
  <div class="bg-flux-mist px-5 pb-16 pt-16 xs:px-8 md:pb-28 md:pt-24" id="partners">
    <div class="mx-auto max-w-6xl">
      <span class="section-label">Our</span>
      <h2 class="mt-3 font-bebas text-5xl font-normal text-flux-ink xs:text-6xl sm:text-7xl">
        Partners
      </h2>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-8 md:mt-16 lg:gap-16">
        <template v-for="item in partners" :key="item.name">
          <img
            :src="item.img"
            :alt="item.name"
            loading="lazy"
            class="h-10 max-w-[120px] object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-14 sm:max-w-[140px]"
          />
        </template>
      </div>
    </div>
  </div>

  <!-- ===================== AWARDS ===================== -->
  <div class="section-dark px-5 pb-16 pt-16 xs:px-8 md:pb-28 md:pt-24" id="awards">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <span class="section-label-light">Highlights</span>
        <h2 class="mt-3 font-bebas text-5xl font-normal text-white xs:text-6xl sm:text-7xl">
          Celebrating Innovation and Excellence
        </h2>
        <p class="mt-6 font-urbanist text-base leading-relaxed text-white/60 xs:text-lg md:text-xl">
          Morgan TechFest 2024 recognized standout projects and individuals through its Award
          Ceremony, emphasizing innovation and problem-solving in tech.
        </p>
        <div class="mt-8 flex justify-center md:mt-12">
          <a
            href="https://medium.com/@morgantechfest"
            target="_blank"
            rel="noopener noreferrer"
            class="cta-btn"
            >Read on Medium
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- ===================== GALLERY ===================== -->
  <div class="section-dark px-5 pb-12 pt-16 xs:px-8 md:pb-20 md:pt-24">
    <div class="mx-auto max-w-6xl text-center">
      <span class="section-label-light">Moments</span>
      <h2 class="mt-3 font-bebas text-5xl font-normal text-white xs:text-6xl sm:text-7xl">Gallery</h2>

      <div class="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:gap-6">
        <img
          src="https://res.cloudinary.com/ojay-dev/image/upload/v1693949821/MorganTechFest/gallery/_PAG0547_1_1_z7ffvg.png"
          alt="gallery"
          loading="lazy"
          class="w-full rounded-xl object-cover sm:rounded-2xl"
        />
        <img
          src="https://res.cloudinary.com/ojay-dev/image/upload/v1693912317/MorganTechFest/gallery/_PAG05472_b2x7ra.png"
          alt="gallery"
          loading="lazy"
          class="w-full rounded-xl object-cover sm:rounded-2xl"
        />
      </div>

      <div class="mt-8 flex justify-center md:mt-12">
        <a
          href="https://drive.google.com/drive/folders/1-m8WPWPPjLZuv9BUEwkRIMI6z2F6DEgb?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-btn"
          >View Full Album
        </a>
      </div>
    </div>

    <!-- ===================== FAQ ===================== -->
    <div class="mx-auto mt-20 max-w-6xl md:mt-32" id="faq">
      <span class="section-label-light">Questions?</span>
      <h2 class="mt-3 font-bebas text-5xl font-normal text-white xs:text-6xl sm:text-7xl">FAQ</h2>

      <div class="mt-6 md:mt-10">
        <div v-for="item in FaqQuestionsAnswers" :key="item.question">
          <FAQItem :question="item.question" :answer="item.answer" />
        </div>
      </div>
    </div>

    <!-- ===================== FOOTER ===================== -->
    <div class="mx-auto mt-20 max-w-6xl border-t border-white/10 pt-10 md:mt-28">
      <div class="flex flex-col items-center justify-between gap-y-6 sm:flex-row">
        <p class="font-urbanist text-sm text-white/40">
          Morgan TechFest &middot; Morgan State University
        </p>
        <div class="flex gap-x-4">
          <a
            href="https://www.linkedin.com/company/morgan-techfest/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            class="social-link"
            ><LinkedinIcon
          /></a>
          <a
            href="https://twitter.com/MorganTechFest"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            class="social-link"
            ><TwitterIcon
          /></a>
          <a
            href="https://www.instagram.com/morgantechfest/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            class="social-link"
            ><InstagramIcon
          /></a>
          <a
            href="https://github.com/morgantechfest"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            class="social-link"
            ><GithubIcon
          /></a>
          <a
            href="https://www.discord.com/channels/morgantechfest"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            class="social-link"
            ><DiscordIcon
          /></a>
        </div>
      </div>
    </div>
    <div class="h-10"></div>
  </div>
</template>

<style scoped>
/* ============================================================
   HERO — the 2026 key art, rebuilt as layers
   ============================================================ */
.hero-wrapper {
  @apply relative overflow-hidden;
  background-color: #241145;
  background-image:
    radial-gradient(90% 60% at 50% 78%, rgba(78, 22, 104, 0.85) 0%, rgba(36, 17, 69, 0) 70%),
    radial-gradient(60% 45% at 88% 10%, rgba(97, 21, 112, 0.7) 0%, rgba(36, 17, 69, 0) 70%),
    radial-gradient(55% 45% at 6% 8%, rgba(45, 20, 85, 0.9) 0%, rgba(36, 17, 69, 0) 70%),
    linear-gradient(180deg, #1d0c3a 0%, #2a1250 45%, #1a0a33 100%);
}

/* Perspective grid — the flyer's floor, receding toward the horizon */
.hero-grid {
  @apply pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[55%];
  background-image:
    repeating-linear-gradient(to right, rgba(150, 205, 255, 0.5) 0 1px, transparent 1px 76px),
    repeating-linear-gradient(to bottom, rgba(150, 205, 255, 0.5) 0 1px, transparent 1px 76px);
  transform: perspective(300px) rotateX(64deg);
  transform-origin: bottom center;
  -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent 78%);
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent 78%);
  opacity: 0.32;
}

/* Light streaks raking across the art */
.hero-streaks {
  @apply pointer-events-none absolute inset-0 z-0;
  background-image:
    linear-gradient(101deg, transparent 46%, rgba(140, 220, 255, 0.5) 49.6%, transparent 52%),
    linear-gradient(96deg, transparent 62%, rgba(214, 79, 214, 0.42) 64.5%, transparent 67%),
    linear-gradient(84deg, transparent 22%, rgba(120, 190, 255, 0.28) 24.4%, transparent 27%);
  opacity: 0.55;
}

/* The globe, sitting behind the type as ambient ground */
.hero-globe {
  @apply pointer-events-none absolute z-0;
  background-image: url('/flux-globe.webp');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2%;
  width: min(158vw, 640px);
  height: min(158vw, 640px);
  opacity: 0.72;
  animation: globeDrift 26s ease-in-out infinite;
}

/* Veil keeps the type legible where it crosses the globe */
.hero-veil {
  @apply pointer-events-none absolute inset-0 z-0;
  background:
    radial-gradient(64% 30% at 50% 47%, rgba(24, 9, 47, 0.9) 0%, rgba(24, 9, 47, 0) 78%),
    radial-gradient(58% 26% at 50% 26%, rgba(24, 9, 47, 0.7) 0%, rgba(24, 9, 47, 0) 78%),
    linear-gradient(180deg, rgba(26, 10, 51, 0.45) 0%, rgba(26, 10, 51, 0) 24%, rgba(26, 10, 51, 0) 76%, rgba(26, 10, 51, 0.55) 100%);
}

.hero-grain {
  @apply pointer-events-none absolute inset-0 z-0 opacity-[0.035];
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

@keyframes globeDrift {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-14px);
  }
}

/* Desktop: give the globe more room, sitting lower and larger */
@media (min-width: 1024px) {
  .hero-globe {
    width: min(68vw, 920px);
    height: min(68vw, 920px);
    bottom: 3%;
    opacity: 0.78;
  }
}

/* ===== HERO TYPE ===== */
.hero-eyebrow {
  @apply mx-auto max-w-md font-urbanist text-[10px] font-bold uppercase leading-relaxed tracking-[0.14em] text-white/85 xs:text-xs xs:tracking-[0.18em] sm:max-w-none sm:text-sm sm:tracking-[0.24em];
}

.hero-eyebrow .dot {
  @apply text-flux-cyan;
}

.verb {
  text-shadow: 0 2px 18px rgba(20, 6, 40, 0.85);
}

.hero-intro {
  @apply text-white/65;
  text-shadow: 0 2px 14px rgba(20, 6, 40, 0.9);
}

.tagline-band {
  @apply mt-4 inline-block font-urbanist text-sm font-medium tracking-wide text-white xs:text-base sm:mt-5 sm:text-xl;
  background: rgba(21, 8, 41, 0.82);
  border: 1px solid rgba(13, 198, 244, 0.28);
  padding: 0.5rem 1.25rem;
  border-radius: 4px;
  transform: rotate(-1.6deg);
  backdrop-filter: blur(4px);
}

@media (min-width: 640px) {
  .tagline-band {
    padding: 0.6rem 2rem;
  }
}

.hero-label {
  @apply mb-1 block font-urbanist text-[10px] font-bold uppercase tracking-[0.2em] text-flux-cyan xs:text-xs;
}

/* ===== HERO INFO CARD (mirrors the flyer's card) ===== */
.info-card {
  @apply w-full max-w-2xl rounded-2xl px-5 py-6 text-center xs:px-7 sm:rounded-3xl sm:px-9 sm:py-8;
  background: rgba(30, 13, 58, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 24px 70px rgba(10, 3, 24, 0.5);
}

.info-rule {
  @apply my-5 h-px w-full sm:my-6;
  background: linear-gradient(to right, transparent, rgba(13, 198, 244, 0.3), transparent);
}

.info-value {
  @apply font-urbanist text-base font-semibold leading-snug text-white xs:text-lg sm:text-xl;
}

/* ===== HERO STAGGER ===== */
.animate-rise-1 {
  animation: fadeSlideUp 0.7s ease both;
  animation-delay: 0.05s;
}
.animate-rise-2 {
  animation: fadeSlideUp 0.7s ease both;
  animation-delay: 0.18s;
}
.animate-rise-3 {
  animation: fadeSlideUp 0.7s ease both;
  animation-delay: 0.32s;
}
.animate-rise-4 {
  animation: fadeSlideUp 0.7s ease both;
  animation-delay: 0.46s;
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* The band keeps its tilt through the entrance */
.tagline-band.animate-rise-3 {
  animation-name: fadeSlideUpTilt;
}

@keyframes fadeSlideUpTilt {
  from {
    opacity: 0;
    transform: translateY(24px) rotate(-1.6deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotate(-1.6deg);
  }
}

/* ============================================================
   SECTIONS
   ============================================================ */
.section-dark {
  background-color: #241145;
  background-image: linear-gradient(180deg, #241145 0%, #2c1350 50%, #241145 100%);
}

.section-label {
  @apply block font-urbanist text-xs font-bold uppercase tracking-[0.25em] text-flux-violet sm:text-sm;
}

.section-label-light {
  @apply block font-urbanist text-xs font-bold uppercase tracking-[0.25em] text-flux-cyan sm:text-sm;
}

/* ===== VIDEO (inline in about) ===== */
.video-container-inline {
  @apply relative h-0 w-full pb-[56.25%];
}

.video-container-inline iframe {
  @apply absolute left-0 top-0 h-full w-full rounded-xl sm:rounded-2xl;
  box-shadow: 0 20px 60px rgba(22, 7, 43, 0.22);
}

/* ===== COUNTDOWN ===== */
.countdown-block {
  @apply flex flex-col items-center;
}

.countdown-number {
  @apply font-bebas text-4xl leading-none text-white xs:text-5xl sm:text-6xl;
  text-shadow: 0 0 24px rgba(13, 198, 244, 0.45);
  font-variant-numeric: tabular-nums;
}

.countdown-label {
  @apply mt-1.5 font-urbanist text-[10px] font-bold uppercase tracking-[0.15em] text-white/45 xs:text-xs;
}

/* ===== COMPONENT CARDS ===== */
.comp-card {
  @apply relative rounded-2xl px-5 pb-6 pt-7 transition-transform duration-300 xs:px-6 sm:rounded-3xl sm:px-8 sm:pb-8 sm:pt-9;
  border: 1.5px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.01) 100%);
}

.comp-card:hover {
  transform: translateY(-4px);
  border-color: rgba(13, 198, 244, 0.35);
}

.comp-title {
  @apply font-bebas text-3xl text-white sm:text-4xl lg:text-5xl;
}

.comp-subtitle {
  @apply -mt-0.5 font-urbanist text-base text-white/40 sm:text-lg;
}

.comp-text {
  @apply mt-3 font-urbanist text-base leading-relaxed text-white/60 sm:text-lg;
}

.track-tag {
  @apply rounded-full px-4 py-1.5 font-urbanist text-xs font-semibold text-white/85 sm:text-sm;
  border: 1px solid rgba(13, 198, 244, 0.35);
  background: rgba(13, 198, 244, 0.08);
}

/* ===== SCHEDULE PILLS ===== */
.sched-pill {
  @apply flex min-h-[56px] items-center justify-center rounded-full px-4 py-2.5 text-center font-urbanist text-sm font-semibold text-white sm:min-h-[64px] sm:text-base lg:min-h-[72px] lg:text-lg;
  border: 1.5px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  transition:
    border-color 0.2s,
    background 0.2s;
}

.sched-pill:hover {
  border-color: rgba(13, 198, 244, 0.5);
  background: rgba(13, 198, 244, 0.08);
}

/* ===== BUTTONS ===== */
.cta-btn {
  @apply inline-block rounded-full border-2 border-flux-cyan px-7 py-3 font-urbanist text-sm font-semibold text-flux-cyan transition-all duration-200 hover:bg-flux-cyan hover:text-flux-void sm:px-9 sm:py-4 sm:text-base;
}

.cta-solid {
  @apply inline-block rounded-full px-8 py-3.5 font-urbanist text-sm font-extrabold uppercase tracking-wider text-white transition-transform duration-200 sm:px-10 sm:py-4 sm:text-base;
  background: linear-gradient(180deg, #ff7a1a 20%, #fc470b 100%);
  box-shadow: 0 12px 34px rgba(252, 71, 11, 0.34);
}

.cta-solid:hover {
  transform: translateY(-2px);
}

/* ===== SOCIAL LINKS ===== */
.social-link {
  @apply block rounded-lg border border-white/10 px-2.5 py-2.5 transition-colors duration-200 hover:border-flux-cyan/50;
}

/* ===== SPEAKERS MARQUEE ===== */
.speaker-marquee {
  width: 100%;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
  mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
}

.speaker-track {
  display: flex;
  gap: 24px;
  animation: scrollMarquee 35s linear infinite;
  width: max-content;
}

.speaker-track:hover {
  animation-play-state: paused;
}

@keyframes scrollMarquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.speaker-card {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 160px;
}

.speaker-img-wrap {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed rgba(61, 21, 82, 0.45);
  background: radial-gradient(
    circle at 50% 38%,
    rgba(13, 198, 244, 0.22) 0%,
    rgba(61, 21, 82, 0.08) 72%
  );
  transition:
    border-color 0.3s,
    transform 0.3s;
}

.speaker-card:hover .speaker-img-wrap {
  border-color: #0dc6f4;
  transform: scale(1.05);
}

.speaker-pending {
  @apply text-center font-bebas text-xl leading-none tracking-wide text-flux-violet;
}

.speaker-name {
  @apply text-center font-urbanist text-sm font-semibold text-flux-ink/65;
  line-height: 1.3;
}
</style>
