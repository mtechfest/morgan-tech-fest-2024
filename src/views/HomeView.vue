<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LinkedinIcon from '@/components/icons/IconLinkedin.vue'
import TwitterIcon from '@/components/icons/IconTwitter.vue'
import InstagramIcon from '@/components/icons/IconInstagram.vue'
import GithubIcon from '@/components/icons/IconGithub.vue'
import DiscordIcon from '@/components/icons/IconDiscord.vue'
import FAQItem from '@/components/FAQItem.vue'
import {
  schedule,
  speakerSlots,
  tracks,
  partners,
  FaqQuestionsAnswers,
  eventInfo
} from '@/data/home'

/* ── Countdown ───────────────────────────────────────────────
   One interval, and it only runs while the tab is actually visible.
   A background tab that keeps ticking is wasted wakeups on a phone. */
const eventDate = new Date(eventInfo.iso)
const days = ref('00')
const hours = ref('00')
const mins = ref('00')
const secs = ref('00')
let timer = null

const updateCountdown = () => {
  const diff = eventDate - Date.now()
  if (diff <= 0) {
    days.value = hours.value = mins.value = secs.value = '00'
    return false
  }
  days.value = String(Math.floor(diff / 86400000)).padStart(2, '0')
  hours.value = String(Math.floor((diff / 3600000) % 24)).padStart(2, '0')
  mins.value = String(Math.floor((diff / 60000) % 60)).padStart(2, '0')
  secs.value = String(Math.floor((diff / 1000) % 60)).padStart(2, '0')
  return true
}

const stopTimer = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

const startTimer = () => {
  stopTimer()
  if (updateCountdown()) timer = setInterval(updateCountdown, 1000)
}

const onVisibility = () => {
  if (document.hidden) stopTimer()
  else startTimer()
}

/* ── Marquee ─────────────────────────────────────────────────
   An infinite CSS animation keeps the compositor working even when the
   strip is far off screen. Pause it unless it is in view. */
const marquee = ref(null)
const marqueeLive = ref(true)
let marqueeObserver = null

onMounted(() => {
  startTimer()
  document.addEventListener('visibilitychange', onVisibility)

  if (marquee.value && 'IntersectionObserver' in window) {
    marqueeObserver = new IntersectionObserver(
      ([entry]) => {
        marqueeLive.value = entry.isIntersecting
      },
      { rootMargin: '150px' }
    )
    marqueeObserver.observe(marquee.value)
  }
})

onUnmounted(() => {
  stopTimer()
  document.removeEventListener('visibilitychange', onVisibility)
  if (marqueeObserver) {
    marqueeObserver.disconnect()
    marqueeObserver = null
  }
})
</script>

<template>
  <!-- ===================== HERO ===================== -->
  <section id="hero" class="hero-wrapper">
    <div class="hero-grid" aria-hidden="true"></div>
    <div class="hero-streaks" aria-hidden="true"></div>
    <div class="hero-globe" aria-hidden="true"></div>
    <div class="hero-veil" aria-hidden="true"></div>
    <div class="hero-grain" aria-hidden="true"></div>

    <div
      class="relative z-10 px-5 pb-16 pt-10 xs:px-8 sm:pb-20 md:pt-14 lg:px-12 lg:pb-28 lg:pt-16 xl:px-16"
    >
      <div class="mx-auto flex max-w-5xl flex-col items-center text-center">
        <!-- Eyebrow: the four domains the theme runs on -->
        <p class="hero-eyebrow animate-rise-1">
          <span v-for="(d, i) in eventInfo.domains" :key="d">
            <span v-if="i" class="dot">/</span>{{ d }}
          </span>
        </p>

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

        <p class="tagline-band animate-rise-3">Building The Intelligent World</p>

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
            <span class="hero-label">Doors open in</span>
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
            <p class="stamp mt-3">{{ eventInfo.stamp }}</p>
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
          :href="eventInfo.registerUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-solid animate-rise-4 mt-7 sm:mt-8"
          >Register now</a
        >

        <!-- Readout: only counts that are true by construction -->
        <dl class="stat-row animate-rise-4 mt-10 sm:mt-12">
          <div class="stat">
            <dt class="stat-label">Domains</dt>
            <dd class="stat-value">{{ eventInfo.domains.length }}</dd>
          </div>
          <div class="stat">
            <dt class="stat-label">Tracks</dt>
            <dd class="stat-value">{{ tracks.length }}</dd>
          </div>
          <div class="stat">
            <dt class="stat-label">Program blocks</dt>
            <dd class="stat-value">{{ schedule.length }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>

  <!-- ===================== ABOUT ===================== -->
  <div class="bg-flux-mist px-5 pb-10 pt-14 xs:px-8 md:pb-16 md:pt-20" id="about">
    <div class="mx-auto max-w-6xl">
      <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
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
        <div class="video-container-inline">
          <iframe
            src="https://www.youtube-nocookie.com/embed/MLX3J9nk0cI?si=Fe_QZEDKo3kaM7Qe"
            title="Morgan TechFest networking session"
            loading="lazy"
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
        <span class="section-label justify-center">Speakers &amp; Panelists</span>
        <h2 class="mt-3 font-bebas text-5xl font-normal text-flux-ink xs:text-6xl sm:text-7xl">
          Featured Voices
        </h2>
        <p class="mx-auto mt-3 max-w-md font-urbanist text-base text-flux-ink/55 sm:text-lg">
          The Future Flux lineup lands closer to the event. Follow along and you will hear first.
        </p>
      </div>
    </div>

    <div ref="marquee" class="speaker-marquee mt-10 md:mt-14">
      <div class="speaker-track" :class="{ 'is-paused': !marqueeLive }">
        <template v-for="pass in 2" :key="pass">
          <div
            v-for="slot in speakerSlots"
            :key="pass + slot.id"
            class="speaker-card"
            :aria-hidden="pass === 2"
          >
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
  <div class="section-dark px-5 pb-16 pt-16 xs:px-8 md:pb-24 md:pt-24" id="components">
    <div class="mx-auto max-w-6xl">
      <span class="section-label-light">What we do</span>
      <h2 class="mt-3 font-bebas text-5xl font-normal text-white xs:text-6xl sm:text-7xl">
        Core Components
      </h2>

      <div class="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 md:gap-8">
        <div class="comp-card">
          <h3 class="comp-title">Tech Case Competition</h3>
          <p class="comp-subtitle">Team solution sprint</p>
          <p class="comp-text">
            Student teams develop technology-driven solutions to real-world problems across key
            tracks. Solutions are evaluated based on clarity, innovation, feasibility, and impact.
          </p>
        </div>

        <div class="comp-card">
          <h3 class="comp-title">Innovation Expo</h3>
          <p class="comp-subtitle">Research &amp; project showcase</p>
          <p class="comp-text">
            Students showcase research and projects, including prototypes and technology-driven
            solutions, evaluated based on clarity, technical depth, organization, and real-world
            impact.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- ===================== TRACKS ===================== -->
  <div class="section-dark px-5 pb-16 pt-4 xs:px-8 md:pb-28 md:pt-8" id="tracks">
    <div class="mx-auto max-w-6xl">
      <span class="section-label-light">Pick your problem</span>
      <h2 class="mt-3 font-bebas text-5xl font-normal text-white xs:text-6xl sm:text-7xl">
        Competition Tracks
      </h2>
      <p class="mt-3 max-w-xl font-urbanist text-base text-white/55 sm:text-lg">
        Every case solution is built against one of six tracks. Choose the domain your team wants to
        move.
      </p>

      <div class="track-grid mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="track in tracks" :key="track.id" class="track-card">
          <h3 class="track-name">{{ track.name }}</h3>
          <p class="track-brief">{{ track.brief }}</p>
        </article>
      </div>
    </div>
  </div>

  <!-- ===================== SCHEDULE ===================== -->
  <div class="section-dark px-5 pb-16 pt-16 xs:px-8 md:pb-28 md:pt-24" id="schedule">
    <div class="mx-auto max-w-6xl">
      <span class="section-label-light">The event</span>
      <h2 class="mt-3 font-bebas text-5xl font-normal text-white xs:text-6xl sm:text-7xl">
        Schedule
      </h2>
      <p class="mt-3 max-w-xl font-urbanist text-base text-white/55 sm:text-lg">
        Six headline blocks, in the order they run. The full timed programme lives on its own page.
      </p>

      <div class="mt-8 grid grid-cols-1 gap-3 xs:grid-cols-2 md:mt-12 lg:grid-cols-3 lg:gap-4">
        <span v-for="item in schedule" :key="item.id" class="sched-pill">
          {{ item.name }}
        </span>
      </div>

      <div class="mt-10 flex justify-center md:mt-14">
        <a href="/schedule.html" target="_blank" rel="noopener noreferrer" class="cta-btn"
          >Check full schedule</a
        >
      </div>
    </div>
  </div>

  <!-- ===================== PARTNERS ===================== -->
  <div class="bg-flux-mist px-5 pb-16 pt-16 xs:px-8 md:pb-24 md:pt-24" id="partners">
    <div class="mx-auto max-w-6xl">
      <span class="section-label">Backed by</span>
      <h2 class="mt-3 font-bebas text-5xl font-normal text-flux-ink xs:text-6xl sm:text-7xl">
        Sponsors &amp; Partners
      </h2>
      <p class="mt-3 max-w-xl font-urbanist text-base text-flux-ink/55 sm:text-lg">
        Organisations that have supported past editions through funding, speakers, judges, prizes,
        and venue.
      </p>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-8 md:mt-14 lg:gap-16">
        <img
          v-for="item in partners"
          :key="item.name"
          :src="item.img"
          :alt="item.name"
          loading="lazy"
          decoding="async"
          class="h-10 max-w-[120px] object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-14 sm:max-w-[140px]"
        />
      </div>

      <div class="mt-10 flex justify-center md:mt-14">
        <a href="/sponsors.html" class="cta-btn-dark">Sponsors &amp; reach &rarr;</a>
      </div>
    </div>
  </div>

  <!-- ===================== HIGHLIGHTS (entry point) ===================== -->
  <div class="section-dark px-5 pb-12 pt-16 xs:px-8 md:pb-20 md:pt-24" id="highlights">
    <div class="mx-auto max-w-6xl">
      <span class="section-label-light">Recap</span>
      <h2 class="mt-3 font-bebas text-5xl font-normal text-white xs:text-6xl sm:text-7xl">
        Highlights
      </h2>
      <p class="mt-3 max-w-xl font-urbanist text-base text-white/55 sm:text-lg">
        Award winners, the photo album, and the write-ups from previous years.
      </p>

      <div class="mt-8 grid grid-cols-1 gap-4 md:mt-10 lg:grid-cols-[1.2fr_1fr]">

        <!-- Hero still -->
        <a href="/highlights.html" class="recap-hero">
          <img
            src="https://res.cloudinary.com/ojay-dev/image/upload/v1693949821/MorganTechFest/gallery/_PAG0547_1_1_z7ffvg.png"
            alt="Morgan TechFest attendees at the last edition"
            loading="lazy"
            decoding="async"
          />
          <div class="recap-hero-shade"></div>
          <span class="recap-chip">2024 &middot; GBSM, Baltimore</span>
          <div class="recap-stat"><b>175</b><span>attendees</span></div>
          <div class="recap-hero-foot">
            <span class="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-flux-cyan">The recap</span>
            <span class="mt-1 block font-bebas text-3xl leading-none text-white sm:text-4xl">Celebrating Innovation &amp; Excellence</span>
            <span class="mt-2.5 inline-block font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-flux-cyan">Open the recap <span aria-hidden="true">&rarr;</span></span>
          </div>
        </a>

        <!-- Entry index -->
        <div class="flex flex-col gap-3">

          <a href="/highlights.html#awards" class="recap-idx">
            <span class="recap-idx-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4zM7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3"/></svg>
            </span>
            <span class="min-w-0 flex-1">
              <span class="recap-idx-h">Award Winners</span>
              <span class="recap-idx-d">Innovation, technical depth, and real-world impact &mdash; recognised at the Award Ceremony.</span>
            </span>
            <span class="recap-idx-arrow" aria-hidden="true">&rarr;</span>
          </a>

          <a href="/highlights.html#gallery" class="recap-idx">
            <span class="recap-idx-thumb">
              <img
                src="https://res.cloudinary.com/ojay-dev/image/upload/v1693912317/MorganTechFest/gallery/_PAG05472_b2x7ra.png"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </span>
            <span class="min-w-0 flex-1">
              <span class="recap-idx-h">Photo Album</span>
              <span class="recap-idx-d">The full gallery from the last edition, on one page.</span>
            </span>
            <span class="recap-idx-arrow" aria-hidden="true">&rarr;</span>
          </a>

          <a href="/highlights.html#writeups" class="recap-idx">
            <span class="recap-idx-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16M4 10h16M4 15h10M4 20h7"/></svg>
            </span>
            <span class="min-w-0 flex-1">
              <span class="recap-idx-h">Write-ups</span>
              <span class="recap-idx-d">Read the Medium recaps and stories from previous years.</span>
            </span>
            <span class="recap-idx-arrow" aria-hidden="true">&rarr;</span>
          </a>

        </div>
      </div>

      <!-- Proof strip -->
      <div class="recap-proof">
        <span class="recap-proof-label">Past sponsors &amp; partners</span>
        <ul class="recap-proof-logos">
          <li><img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" loading="lazy" decoding="async" /></li>
          <li><img src="/LFG_color.jpg" alt="Lincoln Financial" loading="lazy" decoding="async" /></li>
          <li><img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" loading="lazy" decoding="async" /></li>
          <li><img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/New_Bloomberg_Logo.svg" alt="Bloomberg" loading="lazy" decoding="async" /></li>
        </ul>
      </div>
    </div>
  </div>

  <!-- ===================== FAQ + FOOTER ===================== -->
  <div class="section-dark px-5 pb-12 pt-4 xs:px-8 md:pb-20">
    <!-- ===================== FAQ ===================== -->
    <div class="mx-auto max-w-6xl pt-8 md:pt-16" id="faq">
      <span class="section-label-light">Questions?</span>
      <h2 class="mt-3 font-bebas text-5xl font-normal text-white xs:text-6xl sm:text-7xl">FAQ</h2>

      <div class="mt-6 md:mt-10">
        <FAQItem
          v-for="item in FaqQuestionsAnswers"
          :key="item.question"
          :question="item.question"
          :answer="item.answer"
        />
      </div>
    </div>

    <!-- ===================== FOOTER ===================== -->
    <div class="mx-auto mt-20 max-w-6xl border-t border-white/10 pt-10 md:mt-28">
      <div class="flex flex-col items-center justify-between gap-y-6 sm:flex-row">
        <p class="font-mono text-xs uppercase tracking-[0.1em] text-white/40">
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
   HERO
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

.hero-streaks {
  @apply pointer-events-none absolute inset-0 z-0;
  background-image:
    linear-gradient(101deg, transparent 46%, rgba(140, 220, 255, 0.5) 49.6%, transparent 52%),
    linear-gradient(96deg, transparent 62%, rgba(214, 79, 214, 0.42) 64.5%, transparent 67%),
    linear-gradient(84deg, transparent 22%, rgba(120, 190, 255, 0.28) 24.4%, transparent 27%);
  opacity: 0.55;
}

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
  @apply mx-auto max-w-md font-mono text-[10px] font-medium uppercase leading-relaxed tracking-[0.14em] text-white/80 xs:text-xs xs:tracking-[0.18em] sm:max-w-none sm:text-sm sm:tracking-[0.22em];
}

.hero-eyebrow .dot {
  @apply mx-2 text-flux-cyan/70;
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
  background: rgba(21, 8, 41, 0.9);
  border: 1px solid rgba(13, 198, 244, 0.28);
  padding: 0.5rem 1.25rem;
  border-radius: 4px;
  transform: rotate(-1.6deg);
}

@media (min-width: 640px) {
  .tagline-band {
    padding: 0.6rem 2rem;
  }
}

.hero-label {
  @apply mb-1 block font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-flux-cyan xs:text-xs;
}

.stamp {
  @apply font-mono text-[10px] uppercase tracking-[0.14em] text-white/55 xs:text-xs;
}

/* ===== HERO INFO CARD ===== */
.info-card {
  @apply w-full max-w-2xl rounded-2xl px-5 py-6 text-center xs:px-7 sm:rounded-3xl sm:px-9 sm:py-8;
  background: rgba(30, 13, 58, 0.86);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 24px 70px rgba(10, 3, 24, 0.5);
}

.info-rule {
  @apply my-5 h-px w-full sm:my-6;
  background: linear-gradient(to right, transparent, rgba(13, 198, 244, 0.3), transparent);
}

.info-value {
  @apply font-urbanist text-base font-semibold leading-snug text-white xs:text-lg sm:text-xl;
}

/* ===== STAT READOUT ===== */
.stat-row {
  @apply flex flex-wrap items-stretch justify-center gap-x-8 gap-y-4 xs:gap-x-12 sm:gap-x-16;
}

.stat {
  @apply flex flex-col items-center;
}

.stat-value {
  @apply font-mono text-2xl font-bold leading-none text-white sm:text-3xl;
  text-shadow: 0 2px 14px rgba(20, 6, 40, 0.9);
}

.stat-label {
  @apply mb-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-flux-cyan xs:text-[10px];
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

.section-label,
.section-label-light {
  @apply flex items-center gap-x-2 font-mono text-[10px] font-medium uppercase tracking-[0.2em] sm:text-xs;
}

.section-label {
  @apply text-flux-violet;
}

.section-label-light {
  @apply text-flux-cyan;
}

.section-label i,
.section-label-light i {
  @apply not-italic;
}

.section-label i::after,
.section-label-light i::after {
  content: '';
  @apply ml-2 inline-block h-px w-5 align-middle;
  background: currentColor;
  opacity: 0.5;
}

/* ===== VIDEO ===== */
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
  @apply font-mono text-3xl font-bold leading-none text-white xs:text-4xl sm:text-5xl;
  text-shadow: 0 0 24px rgba(13, 198, 244, 0.45);
  font-variant-numeric: tabular-nums;
}

.countdown-label {
  @apply mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/45 xs:text-[10px];
}

/* ===== CARDS ===== */
.card-id {
  @apply mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-flux-cyan/60;
}

.comp-card {
  @apply relative rounded-2xl px-5 pb-6 pt-6 transition-colors duration-300 xs:px-6 sm:rounded-3xl sm:px-8 sm:pb-8 sm:pt-8;
  border: 1.5px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.01) 100%);
}

.comp-card:hover {
  border-color: rgba(13, 198, 244, 0.35);
}

.comp-title {
  @apply font-bebas text-3xl text-white sm:text-4xl lg:text-5xl;
}

.comp-subtitle {
  @apply -mt-0.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white/40;
}

.comp-text {
  @apply mt-3 font-urbanist text-base leading-relaxed text-white/60 sm:text-lg;
}

/* ===== TRACK GRID =====
   One hairline lattice: the wrapper's background shows through the 1px gaps,
   so every rule is a single shared line and no cell owns a border. */
.track-grid {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.track-card {
  @apply px-5 py-6 transition-colors duration-200 sm:px-6 sm:py-7;
  background: #26124a;
}

.track-card:hover {
  background: #2f1659;
}

.track-name {
  @apply font-bebas text-2xl leading-tight text-white sm:text-3xl;
}

.track-brief {
  @apply mt-1.5 font-urbanist text-sm leading-relaxed text-white/50 sm:text-base;
}

/* ===== SCHEDULE PILLS ===== */
.sched-pill {
  @apply flex min-h-[56px] flex-col items-center justify-center gap-y-1 rounded-xl px-4 py-3 text-center font-urbanist text-sm font-semibold text-white sm:min-h-[76px] sm:text-base;
  border: 1.5px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  transition: border-color 0.2s, background 0.2s;
}

.sched-index {
  @apply font-mono text-[10px] not-italic tracking-[0.16em] text-flux-cyan/60;
}

.sched-pill:hover {
  border-color: rgba(13, 198, 244, 0.5);
  background: rgba(13, 198, 244, 0.08);
}

/* ===== BUTTONS ===== */
.cta-btn {
  @apply inline-block rounded-full border-2 border-flux-cyan px-7 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-flux-cyan transition-colors duration-200 hover:bg-flux-cyan hover:text-flux-void sm:px-9 sm:py-4 sm:text-xs;
}

.cta-btn-dark {
  @apply inline-block rounded-full border-2 border-flux-violet px-7 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-flux-violet transition-colors duration-200 hover:bg-flux-violet hover:text-white sm:px-9 sm:py-4 sm:text-xs;
}

.cta-solid {
  @apply inline-block rounded-full px-8 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-transform duration-200 hover:-translate-y-0.5 sm:px-10 sm:py-4 sm:text-sm;
  background: linear-gradient(180deg, #ff7a1a 20%, #fc470b 100%);
  box-shadow: 0 12px 34px rgba(252, 71, 11, 0.34);
}

/* ===== RECAP: HERO STILL ===== */
.recap-hero {
  @apply relative block overflow-hidden rounded-3xl;
  min-height: 340px;
  border: 1.5px solid rgba(255, 255, 255, 0.1);
}

.recap-hero img {
  @apply absolute inset-0 h-full w-full object-cover;
  transition: transform 0.5s ease;
}

.recap-hero:hover img {
  transform: scale(1.04);
}

.recap-hero-shade {
  @apply absolute inset-0;
  background: linear-gradient(180deg, rgba(21, 8, 41, 0) 30%, rgba(21, 8, 41, 0.4) 62%, rgba(21, 8, 41, 0.92) 100%);
}

.recap-chip {
  @apply absolute left-4 top-4 rounded-full font-mono text-[10px] uppercase tracking-[0.14em] text-white/85;
  padding: 6px 11px;
  background: rgba(21, 8, 41, 0.55);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.16);
}

.recap-stat {
  @apply absolute right-4 top-4 flex items-baseline gap-x-1.5 rounded-xl;
  padding: 8px 13px;
  background: rgba(13, 198, 244, 0.14);
  border: 1px solid rgba(13, 198, 244, 0.4);
  backdrop-filter: blur(6px);
}

.recap-stat b {
  @apply font-mono text-xl leading-none text-white;
}

.recap-stat span {
  @apply font-mono text-[9px] uppercase tracking-[0.12em] text-white/70;
}

.recap-hero-foot {
  @apply absolute inset-x-6 bottom-5;
}

/* ===== RECAP: ENTRY INDEX ===== */
.recap-idx {
  @apply relative flex flex-1 items-center gap-x-3.5 rounded-2xl px-4 py-4 transition-all duration-200;
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.01) 100%);
}

.recap-idx:hover {
  border-color: rgba(13, 198, 244, 0.45);
  transform: translateX(4px);
  background: linear-gradient(160deg, rgba(13, 198, 244, 0.1) 0%, rgba(255, 255, 255, 0.01) 100%);
}

.recap-idx-icon {
  @apply flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-flux-cyan;
  background: rgba(13, 198, 244, 0.12);
  border: 1px solid rgba(13, 198, 244, 0.3);
}

.recap-idx-icon svg {
  @apply h-5 w-5;
}

.recap-idx-thumb {
  @apply h-14 w-16 flex-shrink-0 overflow-hidden rounded-xl;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.recap-idx-thumb img {
  @apply h-full w-full object-cover;
}

.recap-idx-id {
  @apply mb-0.5 block font-mono text-[9px] uppercase tracking-[0.18em] text-flux-cyan/60;
}

.recap-idx-h {
  @apply block font-bebas text-2xl leading-none text-white;
}

.recap-idx-d {
  @apply mt-1 block font-urbanist text-sm leading-snug text-white/50;
}

.recap-idx-arrow {
  @apply flex-shrink-0 font-mono text-lg text-white/35 transition-all duration-200;
}

.recap-idx:hover .recap-idx-arrow {
  @apply text-flux-cyan;
  transform: translateX(3px);
}

/* ===== RECAP: PROOF STRIP ===== */
.recap-proof {
  @apply mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 pt-6;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.recap-proof-label {
  @apply flex-shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40;
}

.recap-proof-logos {
  @apply flex flex-wrap items-center gap-2.5;
}

.recap-proof-logos li {
  @apply flex h-10 -translate-y-0 items-center justify-center rounded-lg bg-white px-4 opacity-90 transition-all duration-200;
}

.recap-proof-logos li:hover {
  @apply -translate-y-0.5 opacity-100;
}

.recap-proof-logos img {
  @apply max-h-5 object-contain;
  max-width: 96px;
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

.speaker-track:hover,
.speaker-track.is-paused {
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
  transition: border-color 0.3s, transform 0.3s;
}

.speaker-card:hover .speaker-img-wrap {
  border-color: #0dc6f4;
  transform: scale(1.05);
}

.speaker-pending {
  @apply text-center font-mono text-[11px] font-medium uppercase leading-snug tracking-[0.1em] text-flux-violet;
}

.speaker-name {
  @apply text-center font-mono text-[10px] uppercase tracking-[0.12em] text-flux-ink/60;
}
</style>
