<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import FAQItem from '@/components/FAQItem.vue'
import SpeakerModal from '@/components/SpeakerModal.vue'
import { schedule, partners, FaqQuestionsAnswers, eventInfo } from '@/data/home'
import { speakers, representatives, moderator, panelists, workshopHosts } from '@/data/home/speakers'

/* ── Speaker bios ────────────────────────────────────────────
   One modal instance; the cards just say who is open. */
const openSpeaker = ref(null)
const openKicker = ref('Panelist')
const showBio = (person, kicker) => {
  openSpeaker.value = person
  openKicker.value = kicker
}
const closeBio = () => {
  openSpeaker.value = null
}

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

/* ── Provost video ── */
const provostVideo = ref(null)
const provostPlaying = ref(false)
const playProvost = () => {
  const el = provostVideo.value
  if (!el) return
  document.getElementById('provost')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  el.play().catch(() => {})
}

/* ── Off-screen animation pause ─────────────────────────────
   Infinite CSS animations keep the compositor awake even when the element is
   nowhere near the viewport. One observer parks them until they are back. */
const portal = ref(null)
const pressMarquee = ref(null)
const portalLive = ref(true)
const pressLive = ref(true)
let motionObserver = null

onMounted(() => {
  startTimer()
  document.addEventListener('visibilitychange', onVisibility)

  if ('IntersectionObserver' in window) {
    motionObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.target === portal.value) portalLive.value = e.isIntersecting
          if (e.target === pressMarquee.value) pressLive.value = e.isIntersecting
        }
      },
      { rootMargin: '120px' }
    )
    if (portal.value) motionObserver.observe(portal.value)
    if (pressMarquee.value) motionObserver.observe(pressMarquee.value)
  }
})

onUnmounted(() => {
  stopTimer()
  document.removeEventListener('visibilitychange', onVisibility)
  if (motionObserver) {
    motionObserver.disconnect()
    motionObserver = null
  }
})
</script>

<template>
  <!-- ===================== HERO ===================== -->
  <section id="hero" class="hero-wrapper">
    <div class="hero-grid" aria-hidden="true"></div>
    <div class="hero-streaks" aria-hidden="true"></div>
    <div class="hero-veil" aria-hidden="true"></div>
    <div class="hero-grain" aria-hidden="true"></div>

    <div
      class="relative z-10 px-5 pb-16 pt-10 xs:px-8 sm:pb-20 md:pt-14 lg:px-12 lg:pb-28 lg:pt-16 xl:px-16"
    >
      <div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-16">

        <!-- LEFT: glowing globe portal + countdown -->
        <div ref="portal" class="hero-portal animate-rise-2" :class="{ 'is-idle': !portalLive }">
          <div class="hero-portal-globe" aria-hidden="true"></div>
          <div class="hero-portal-inner">
            <span class="portal-label">Doors open in</span>
            <span class="portal-num">{{ days }}</span>
            <span class="portal-unit">Days</span>
            <span class="portal-clock">{{ hours }}:{{ mins }}:{{ secs }}</span>
            <span class="portal-date">September 19, 2026</span>
          </div>
        </div>

        <!-- RIGHT: title, pill, CTAs -->
        <div class="text-center lg:text-left">
          <span class="hero-pill animate-rise-1">
            <span class="pill-dot"></span> Registration Open
            <span class="pill-sep">&middot;</span> {{ eventInfo.date }}
          </span>

          <h1 class="animate-rise-2 mt-5">
            <span class="sr-only">Future Flux: Building the Intelligent World</span>
            <img
              src="/future-flux.webp"
              alt=""
              class="mx-auto w-[86%] max-w-[360px] sm:max-w-[440px] lg:mx-0 lg:max-w-[520px]"
              width="1400"
              height="815"
              fetchpriority="high"
            />
          </h1>

          <p class="tagline-band animate-rise-3">Building The Intelligent World</p>

          <p
            class="animate-rise-3 mt-6 flex items-center justify-center gap-x-3 font-bebas text-2xl tracking-wide text-white xs:gap-x-4 xs:text-3xl sm:text-4xl lg:justify-start"
          >
            <span class="verb">Discover</span>
            <span class="text-white/25">|</span>
            <span class="verb text-flux-cyan">Network</span>
            <span class="text-white/25">|</span>
            <span class="verb">Innovate</span>
          </p>

          <p
            class="hero-intro animate-rise-3 mx-auto mt-4 max-w-md font-urbanist text-base leading-relaxed sm:text-lg lg:mx-0"
          >
            Empowering the next generation of technology leaders.
          </p>

          <div class="animate-rise-4 mt-8 flex flex-col items-center gap-3 xs:flex-row xs:justify-center lg:justify-start">
            <a
              :href="eventInfo.registerUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="cta-solid"
              >Register now</a
            >
            <a href="/schedule.html" class="cta-outline">View schedule</a>
          </div>

          <p class="mt-5 font-urbanist text-sm text-white/45">
            {{ eventInfo.venue }} &middot; {{ eventInfo.city }}
          </p>

          <a href="#provost" class="hero-watch animate-rise-4" @click.prevent="playProvost">
            <span class="hero-watch-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
            Watch the Provost&rsquo;s invitation
            <span class="hero-watch-len">0:49</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== PROVOST INVITATION ===================== -->
  <section class="provost" id="provost">
    <div class="mx-auto grid max-w-6xl gap-10 px-5 xs:px-8 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-14">
      <div class="provost-frame">
        <video
          ref="provostVideo"
          class="provost-video"
          poster="/media/provost-invitation-poster.webp"
          preload="metadata"
          playsinline
          controls
          @play="provostPlaying = true"
          @pause="provostPlaying = false"
          @ended="provostPlaying = false"
        >
          <source src="/media/provost-invitation.mp4" type="video/mp4" />
        </video>
        <button
          v-if="!provostPlaying"
          type="button"
          class="provost-play"
          aria-label="Play the Provost's invitation"
          @click="playProvost"
        >
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        </button>
      </div>
      <div class="text-center lg:text-left">
        <span class="section-label-light">A personal invitation</span>
        <h2 class="mt-3 font-bebas text-5xl font-normal leading-none text-white xs:text-6xl sm:text-7xl">
          From the Office of the Provost
        </h2>
        <p class="mx-auto mt-5 max-w-md font-urbanist text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0">
          Morgan State University&rsquo;s Provost welcomes students, researchers, and industry partners to
          Future Flux, and explains why this year&rsquo;s TechFest matters.
        </p>
        <p class="provost-name">Dr. Hongtao Yu</p>
        <p class="provost-title">Provost and Senior Vice President, Morgan State University</p>
        <div class="mt-8 flex flex-col items-center gap-3 xs:flex-row xs:justify-center lg:justify-start">
          <a :href="eventInfo.registerUrl" target="_blank" rel="noopener noreferrer" class="cta-solid">Accept the invitation</a>
          <a href="#speakers" class="cta-outline">Meet the lineup</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== IN THE NEWS ===================== -->
  <div class="section-dark px-5 py-12 xs:px-8 md:py-16">
    <div class="mx-auto max-w-4xl text-center">
      <blockquote class="press-quote">
        &ldquo;Morgan TechFest demonstrates the knowledge, creativity, and opportunities already present on an HBCU campus.&rdquo;
      </blockquote>
      <p class="press-cite">
        Marybeth Gasman,
        <a href="https://www.forbes.com/sites/marybethgasman/2026/07/21/morgan-state-techfest-shows-what-hbcus-contribute-to-innovation/" target="_blank" rel="noopener noreferrer">Forbes</a>
      </p>
    </div>
    <div class="mx-auto mt-12 max-w-6xl">
      <p class="press-label text-center">As featured in</p>
      <div ref="pressMarquee" class="fi-marquee mt-4" :class="{ 'is-idle': !pressLive }">
        <div class="fi-track">
          <div class="fi-group">
            <span class="fi-chip"><img src="/press/forbes.png" alt="Forbes" /></span>
            <span class="fi-chip"><img src="/press/technically.png" alt="Technical.ly" /></span>
            <span class="fi-chip"><img src="/press/hbcu.png" alt="HBCU News" /></span>
            <span class="fi-chip"><img src="/press/yahoo.png" alt="Yahoo Tech" /></span>
            <span class="fi-chip"><img src="/press/bmore.png" alt="Bmore News" /></span>
          </div>
          <div class="fi-group" aria-hidden="true">
            <span class="fi-chip"><img src="/press/forbes.png" alt="" /></span>
            <span class="fi-chip"><img src="/press/technically.png" alt="" /></span>
            <span class="fi-chip"><img src="/press/hbcu.png" alt="" /></span>
            <span class="fi-chip"><img src="/press/yahoo.png" alt="" /></span>
            <span class="fi-chip"><img src="/press/bmore.png" alt="" /></span>
          </div>
        </div>
      </div>
      <div class="mt-8 text-center">
        <a href="/highlights.html#news" class="cta-outline">Read the coverage &rarr;</a>
      </div>
    </div>
  </div>

  <!-- ===================== SPEAKERS ===================== -->
  <div class="bg-flux-mist px-5 pb-16 pt-14 xs:px-8 md:pb-24 md:pt-20" id="speakers">
    <div class="mx-auto max-w-6xl">
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <span class="section-label">The lineup</span>
          <h2 class="mt-3 font-bebas text-5xl font-normal text-flux-ink xs:text-6xl sm:text-7xl">
            Speakers, Panelists &amp; Workshop Hosts
          </h2>
        </div>
        <p class="max-w-sm font-urbanist text-base text-flux-ink/55 sm:text-lg md:pb-2 md:text-right">
          Builders, researchers, and founders joining us in Baltimore for Future Flux.
        </p>
      </div>

      <!-- Speakers -->
      <div class="lineup-head">
        <span class="lineup-kicker">Keynote speaker</span>
        <span class="lineup-count">10:20 AM · Room 104</span>
      </div>
      <div class="grid grid-cols-1 gap-5 xs:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <button
          v-for="person in speakers"
          :key="person.id"
          type="button"
          class="panelist"
          @click="showBio(person, 'Speaker')"
        >
          <div class="panelist-photo">
            <img
              :src="person.img"
              :alt="person.name"
              width="800"
              height="1000"
              loading="lazy"
              decoding="async"
            />
            <div class="panelist-shade"></div>
            <span class="panelist-focus">{{ person.focus }}</span>
          </div>
          <div class="panelist-meta">
            <span class="panelist-name">{{ person.name }}</span>
            <span class="panelist-role">{{ person.role }}</span>
            <span class="panelist-org">{{ person.org }}</span>
            <span class="panelist-cta">Read bio</span>
          </div>
        </button>
      </div>

      <!-- Government representatives -->
      <div class="lineup-head mt-14 md:mt-20">
        <span class="lineup-kicker">Opening ceremony</span>
        <span class="lineup-count">9:50 AM · Room 104</span>
      </div>
      <div class="grid grid-cols-1 gap-5 xs:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <button
          v-for="person in representatives"
          :key="person.id"
          type="button"
          class="panelist"
          @click="showBio(person, person.id === 'don-terry-veal' ? 'Opening speaker' : 'Government representative')"
        >
          <div class="panelist-photo">
            <img :src="person.img" :alt="person.name" width="800" height="1000" loading="lazy" decoding="async" />
            <div class="panelist-shade"></div>
            <span class="panelist-focus">{{ person.focus }}</span>
          </div>
          <div class="panelist-meta">
            <span class="panelist-name">{{ person.name }}</span>
            <span class="panelist-role">{{ person.role }}</span>
            <span class="panelist-org">{{ person.org }}</span>
            <span class="panelist-cta">Read bio</span>
          </div>
        </button>
      </div>

      <!-- Panel session -->
      <div class="lineup-head mt-14 md:mt-20">
        <span class="lineup-kicker">Panel: “Reinventing Industries”</span>
        <span class="lineup-count">12:10 PM · Room 104</span>
      </div>
      <div class="grid grid-cols-1 gap-5 xs:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <button type="button" class="panelist" @click="showBio(moderator, 'Moderator & MC')">
          <div class="panelist-photo">
            <img :src="moderator.img" :alt="moderator.name" width="800" height="1000" loading="lazy" decoding="async" />
            <div class="panelist-shade"></div>
            <span class="panelist-focus">{{ moderator.focus }}</span>
          </div>
          <div class="panelist-meta">
            <span class="panelist-name">{{ moderator.name }}</span>
            <span class="panelist-role">{{ moderator.role }}</span>
            <span class="panelist-org">{{ moderator.org }}</span>
            <span class="panelist-cta">Read bio</span>
          </div>
        </button>
        <button
          v-for="person in panelists"
          :key="person.id"
          type="button"
          class="panelist"
          @click="showBio(person, 'Panelist')"
        >
          <div class="panelist-photo">
            <img
              :src="person.img"
              :alt="person.name"
              width="800"
              height="1000"
              loading="lazy"
              decoding="async"
            />
            <div class="panelist-shade"></div>
            <span class="panelist-focus">{{ person.focus }}</span>
          </div>
          <div class="panelist-meta">
            <span class="panelist-name">{{ person.name }}</span>
            <span class="panelist-role">{{ person.role }}</span>
            <span class="panelist-org">{{ person.org }}</span>
            <span class="panelist-cta">Read bio</span>
          </div>
        </button>
      </div>

      <!-- Workshops -->
      <div class="lineup-head mt-14 md:mt-20">
        <span class="lineup-kicker">Workshops</span>
        <span class="lineup-count">1:45 PM · 3 parallel sessions</span>
      </div>
      <div class="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
        <button
          v-for="host in workshopHosts"
          :key="host.id"
          type="button"
          class="host"
          @click="showBio(host, 'Workshop host')"
        >
          <div class="host-photo">
            <img
              :src="host.thumb"
              :alt="host.name"
              width="480"
              height="480"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="host-meta">
            <span class="host-workshop">{{ host.workshop }}</span>
            <span class="host-blurb">{{ host.workshopBlurb }}<template v-if="host.room"> · {{ host.room }}</template></span>
            <span class="host-by">
              <span class="host-name">{{ host.name }}</span>
              <span class="host-role">{{ host.role }}</span>
            </span>
            <span class="panelist-cta">Read bio</span>
          </div>
        </button>
      </div>
    </div>
  </div>

  <SpeakerModal :speaker="openSpeaker" :kicker="openKicker" @close="closeBio" />

  <!-- ===================== CORE COMPONENTS ===================== -->
  <div class="section-dark px-5 pb-16 pt-16 xs:px-8 md:pb-24 md:pt-24" id="components">
    <div class="mx-auto max-w-6xl">
      <span class="section-label-light">What we do</span>
      <h2 class="mt-3 font-bebas text-5xl font-normal text-white xs:text-6xl sm:text-7xl">
        Core Components
      </h2>

      <div class="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 md:gap-8">
        <a class="comp-card block" href="/tech-case.html">
          <h3 class="comp-title">Tech Case Competition</h3>
          <p class="comp-subtitle">Team solution sprint</p>
          <p class="comp-text">
            2026 case: AI for Small Business. Teams of 2&ndash;4 map a real small-business
            workflow and pitch an AI-enabled redesign it could actually adopt. $3,000 prize pool.
          </p>
          <span class="comp-more">See details &rarr;</span>
        </a>

        <a class="comp-card block" href="/innovation-expo.html">
          <h3 class="comp-title">Innovation Expo</h3>
          <p class="comp-subtitle">Research &amp; project showcase</p>
          <p class="comp-text">
            Students showcase research and projects, including prototypes and technology-driven
            solutions, evaluated based on clarity, technical depth, organization, and real-world
            impact.
          </p>
          <span class="comp-more">See details &rarr;</span>
        </a>
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
        A full-day experience integrating innovation, competition, and industry engagement.
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
        The organisations making Future Flux possible through funding, speakers, judges, prizes,
        and venue.
      </p>

      <div class="partner-grid mt-10 md:mt-14">
        <div v-for="item in partners" :key="item.name" class="partner-plate" :title="item.name">
          <img :src="item.img" :alt="item.name" width="600" height="360" loading="lazy" decoding="async" />
        </div>
      </div>

      <div class="mt-10 flex justify-center md:mt-14">
        <a href="/sponsors.html" class="cta-btn-dark">Sponsors &amp; reach &rarr;</a>
      </div>
    </div>
  </div>

  <!-- ===================== HIGHLIGHTS (entry point) ===================== -->
  <div class="section-dark px-5 pb-12 pt-16 xs:px-8 md:pb-20 md:pt-24" id="highlights">
    <div class="mx-auto max-w-6xl">
      <span class="section-label-light">2022 &ndash; 2024</span>
      <h2 class="mt-3 font-bebas text-5xl font-normal text-white xs:text-6xl sm:text-7xl">
        Past Events
      </h2>
      <p class="mt-3 max-w-xl font-urbanist text-base text-white/55 sm:text-lg">
        Speakers, judges, award winners, sponsors, and press coverage from previous editions.
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
              <span class="recap-idx-d">Innovation, technical depth, and real-world impact, recognised at the Award Ceremony.</span>
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
        </ul>
      </div>
    </div>
  </div>

  <!-- ===================== FAQ ===================== -->
  <div class="section-dark px-5 pb-12 pt-4 xs:px-8 md:pb-20">
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
  /* Pre-drawn perspective grid. The previous perspective()+rotateX() transform
     made the browser allocate a GPU texture for the projected plane (many
     screens wide), which crashes WebKit on Retina displays. */
  background-image: url('/hero-grid.svg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
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

.hero-veil {
  @apply pointer-events-none absolute inset-0 z-0;
  background:
    radial-gradient(64% 30% at 50% 47%, rgba(24, 9, 47, 0.9) 0%, rgba(24, 9, 47, 0) 78%),
    radial-gradient(58% 26% at 50% 26%, rgba(24, 9, 47, 0.7) 0%, rgba(24, 9, 47, 0) 78%),
    linear-gradient(180deg, rgba(26, 10, 51, 0.45) 0%, rgba(26, 10, 51, 0) 24%, rgba(26, 10, 51, 0) 76%, rgba(26, 10, 51, 0.55) 100%);
}

.hero-grain {
  @apply pointer-events-none absolute inset-0 z-0 opacity-[0.035];
  /* Static noise tile. A live SVG feTurbulence filter here re-rendered on every
     repaint and its memory scaled with the hero's area. */
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAAAAADmVT4XAABAi0lEQVR42gGAQH+/AKVNyhglMLsdbRMs3tYjey7ZHj9yH8sZcRdElNZJPJ1cNGC+MSAeaf7aoO7ouZl/XHwpmf2v5ZMlPNZUr0361xQnoK6z/ukjL4ryIR+e5JHFsQvstVY7/B5vk0J+y8j+KVXlzY5G3I7Ut8J2TSpaTXZ3BvhdhpACSta9o0Ab6cjLAid8a96o76YF/c4nWtj3udJ0FXubBZ+n22ptJhz1/1ySwZfh+ikWRokbsh2BALKOPLJcIlgHjRVNJ6R5xRkC3/rn70PRZcfBgzA3TxXWDNPnt+wUQFrwQaj3YRlg32TMxHhGhMn7Mr8akzA9Ahmwur7Q2GsPiPBqS6Xp4ZYoNu0fAgt5GBMUPqEq7mefBXGMwzbQTKeA8cgnwp8x7HRPrPuQj3BGG4wKGVus03BybCGOpiE2jiyQfci+aH+G/uzgGJ/J1cUfzAsl+zC4mZA1p7yNDT4rktvpH8Tc5CnxotHdQMHyDILke7s/Ozi+00Q04dFm9ybWCPrMvQtz2JFcfbSqBA0ZL2QodxC7AlgBQGdSN8fM1O/omrZgweI5J8Ud9VrVyQ/eSqdYT9S9Kw4J3GEfav3CyFUpx+3Q4PjXoJuKGYMsWXccnUnAQo4CbmckeIZXT1y5j8W8rBnpNwbAdDiLujLwICFieOg6qveBEJ9hkGTJPnM6ZHsZhBMO703ZGdudA4R3pLXpFroURHT+OVMt/l14QVlmW6DzGrAo0BgfIQe+YNw80YUuQjIcsbb3XPCeXfMqOZ5TUXhaH3YxW0oEPsGiH62AGRRufqCzSu4y5Uiz60ZXlljf8cqwdslNU4PVw7lXB7wNNtB7+00xDcbz7MkcVHNOIxcezww4y+5CiWomALyEZwrTxNNrwIqtH/+OuEBuL4p/xMzk3Z8LQRDZ8voAJcjv5X83ck9NN+orFABAdxObQYDfOTIkmWLGhXIABZrrjqF883h+DtKdHAtj/9cpg3TZvXT8Ea3XucplA5Uiaf1mn2N27nGHlzf9X3L41RxKyRttDEjUGh5eyeagOShUAai5/ZEhjyL+6jl04conZ5qKJGgrWPToP0/t2XJaJn5DFTgdw6xRRaxR3DP/ZOC9jQzSIGtwHOsLaSDra7+9+9e7XCBHu1+nl7IrL/xIzm89Y4ktUlHw5bCsiFvvY6Q/x6Yo5XQfzZEWjcZYAPn6NcQD4Hue4R771kLQR3qptv35ADPtEjQC83blvxSWdz0ZYWMmvlvlhQM2s28TvK5IFmiCE2gFp9G+Xp8naBD99yDQM8pPLlPLitGRndUan7bU1Qm6ZMjPaAPeUNg6Ls+661NCBxpIyy29V0qykVJXIjfE+2WaQBb3oRvGLFJxz2TyXW8VzFDEtz9MfmIVE6U8x+mcBKSwbVruyW77nPdr+fSKbAZxNA5R7D52JQi/JjIALsJ2FbO8hMgUFwUckytXHQHjTodW511gOSSZHKSJG1RT+MWEPN8Z7oRc3uCtTrJI0zQ5/I5u3vwlHuVmfy8dSWBNYOf6nfjDdys0SKO5quZRPpuhpoPHqilTOF4vw9cQH0jvAUpAQ7p+F5cwGYPVrBYJ7cOQGtjMGNFe5IuTboVFgnl/3A+9Hw87vnIawlDxnSxs25RuV6gQ2LzcTy/z7+pWu2Xh0kguARIK0pgmz1xfMPPG/Sz9HF6YxgEGMc8N9QqZrLujckjr/9HYABtnYT8Q7zYuDQksrYWp0A2IpOhPoHzEAQ/QU38/KFbAZcSIIWcsiOewSTXLY5+01MxA3AmJVeTx0jpyD3qd/WKsNLKrMutVfGu1dFXRofWol7+xl/Oj88prQY3pJhK1AC8pC6AmL7kksCDgMGCJ/k/+Rq7Y0/9Z2l0nJPXGE5ImVh49O0wzemD7ngDn46n1w+WtpKZQhDBYAugK2CBtj5eZZ980gAi/S7CB7jj4qsD+TZja8VI/YuRYkY4ladZZDKvce3kJAEeVcSr1aQISsEkkZA99Ara9enXKnEcfUsWnshEQy0gsTphX92UaNwHQ4Ayv0nuhNO4HF21cZlkb0t3T4UrmFZb78UwJxscrl49qUnfrIXN9q/4nAFQDUqTv/pfuv9rWJly4DgoXqTD3+EkRbdRArTC7rvJrkd6v2IAalJW1/M6qi7Bo/DypYqKZQSwUzM8ZzJk3Axdh8x7ASypsFOpZM1wS1zMGvEeehJpe1xGjCtwb/hQ818/kIgfGT/PTNCrxbE0H2gIEPi1vPkLxCY185l8Zu0orAkL8md4rEm4xSE7xeUOc6xSKE7D5XQEqTH+VR5Us3bgq/kH7L82ER+kLyvLNXOGYqErgdq58Uhw3wDCYX1+MY2A9KqwuHliYsQHTgsRl9FGeOCDC6MjRhYMWrfIxgALA6GfayyKJUhzdW+A/pRvxk4OLnAR1BUAipNng28v1X8eSAOr5IMs9LoOjdy3JXeVRvXhxWBODtB4OGIT3HDNKogJlmOE18aW+g8c/v/bCVuF6SQbvYxJQcCe/R+QxxQsm562ld/Q7u0mpcR1c50rgTIjW0n5PDYqXq1WF+zei6fc6Th1s9JI9g2e63YV6eTHHlNRTHZZJCOKuR+IAkl+43hTRAoWUPHsfR9bBsf80L3QYieosD/KeHP6jkwwFEtSHUkIj536GIa4Af++lZUf0J8NJ1o9ImtK91OO95o4skCl5mWJkum9KTqTRchdXSRE3P7cYKhHpMbQ4mx/vULUpaxKNifVeJidwShTxAh9TonWEIKuF6CTuV0H4loQK4egf7dRGART9dwOHIU2+yNibm3+mYxWk6OFrosNdll4EUzrD+fCwZ1WJVKJUMLBZ/K5xbS7H72QGPK6fJysBVY8H3SmG7kbRkC8+pxvUgjzchtcIkyAmo8OWuJJhztBqws2BibqpiiUDqSHhHxT84F/8wyG2xT2vleK1t3z81yrCcisIC2t7AJmf39zH7bcUs+cFInUy0b/NTmDX+c3hry9XuaK7Jp9ZOJav11CUamDTXR42tBXSBQGdApvLMgcPZFn+iEll0j5KUDYOMyZX++/cHwalSXm1jVYQiDIgsmLmxQobcMoW4Rt6f3IWUVihA+mb1oH9InzHcdOezPgLfCxYV7fCXwOUAjEaW8/+vhcNjPGuW1EvHtLjK386lT/NoEzrdsLPG0OWQrsN3R47VgrFlko+My6z3LvhzNF1DCd7YbVMF75iWhwsVCop75NBZzLDDm3u91PbKXjdu1s6XVnNDgLRDwOeUUIbuxhaw3dzT/PKxc7F8iOUAyvkErr1vWa9wcZ2tKDXAbB8qfSoHp+EJwnMOTROcma5ZrZv1PolDfqfOGH6IV04OKf/tP6CAojgYW/mqwQzL5Kdffmd45rRWnKyQXCtCHEMydRmR1QZVD0MytvCzvPu6gkyf96ww+QcZ0Ngs3dk7v2rHsj+voBNJaP33moJG5xY7dJHiXjE+aP4IZhLVY/bAP9QmSlIdFNG4s0tFOH1YW++ARDZSZEkHNetIOAEWlTBlwLismTwK6Xr20/NKR6pmNe89kaZrw5gceUrS77VuHvhyoU6dFxnOXGBMGCA+nTqczkp0CXhRDo068hXYvMvRr8dz3kYvhUHbeuZPUXaLGc6tVa7rgWCPnq+tvoWtDO2Ayi+qF8gOt6QJ3az44RB2Tq9HWYMxBM3kSqymYbRTmuq0kkpNqZFQb52OCW0VOWgFbUvGA9O90sWezeMCcBmHm4x2uJKRfunWjus1vgOKosr+hX3mHfwQARbAOCdbNaMHr8sD7gT6MTjJQcMF+eJI0Iz2ENx+PUGTyo25AOqjQ6tBOZK0tg1xKgNDuurgZf6P/e/JYQQ/WWXeV4qWJ4VXpQDZpvXuQg4t6IV81Ukt6oZoZXoLbi5qN/aTMCe5YlFH8U3W8z5MEyOSqZy07cbKu9Ahr0shWHgNvqhSvVmD5G1+LylyZUdbq3fJIE5cyrmADPmgVabEV+ydHFWfChZfj8PAKbZjpj/blD0iEWZkC2pAvh/UqPnbBpruBfgXd5HmAw5TQREmk20MVbtyy7UrcurEHhnBxNFdtw1ChiiITg9+UXbAVtySzm1/ieybnIli1oHh4kjFmQY0LmIBaYV6JCp0onM2KLWxE3GxdFJAnqCwXtlOywRGc+m4qHpAPLwr8J4BBvckqmJNrZ+FUFZwMd9RimZ6bMYDj7jM0M2juVyIjKTfXxAdIb8aU1AX5zAUFWt5GXz/C92P3+I8RW+6EWai9iAm/AZEPnSKwdKezocTQlkWMw3+1qCACPKr8awWiAuTkjcfAS87HwLKg8q6gDz9Xdo5sDqMEq/cvAsFKQTHSV6A84A34/tkpwfbmXfHyhoo8xQfRMiHOCs6DA1lykYszgWS28wM9UoMaBE06uv624bCp9xT+5ZKVdWyV/8u1AqZhfu6m0JO7nxeTcyusYZlaJ+zuB1lFPWs7QDpZhXLsqjuNT2j1RxldGJyLUJtvKNDbw3CqbqEIqdNLsHHqv5WGAaAq45pjPfthH9PXiUBxLiWh8odlGJvObtK+gT5JM8LsuDwv+7DzQkF/sMUxgeLmT7NvGXG4Yp93QtsXIvoptPcyPww8EzEjPkaNRYOyII2ozgn5t+4n8Xahsom3oRE0wXM8SYGJImDxM5NitDUpVHn6fJCi+ptRUFcMbZ52xKPqD/Ain4BZb9eT/gMLm2lV9nQUMqclrml2EzlvGAq58vAvCvZSws8WgIXmAd3+Dq6VOSNbEnMy22uZuR/Omg+bPdr+Gk2o/x4TdNZRp18+9ny2TU77ywN0pfFRasoK1/5E1aoxeeWwc+nUaxHFF6/8xrHAoOcQSVtpuZT8C4UEjZbM0/A75thxU0ltoIeV7V2pBqZlC64A77vZOr5DEn+lq5DJovHBjwEfJdcDaM9s8zM843mRY82Pf49E2LCngkev0pbPL3i/R84UkSdFRwDFNP9kdxOABX6cX0PFb0W13+/NWgy5RyV83Xq2Lj+EU5Nytd2f9wtrvxXWugeIZlTe7CCqHeArFcQJRXunYHA6eDPoNh+DlyJS7CxCfeF3Jvste1TrlOGDeqUiCZlvguCUs9chu58/EVB8EBj0ZnI/Gl5Tnvt4EvU1SvgHvdEJi4BwJzVeFUnau91FmHIhqgzSBOADkwcOJkmML/eQlGOmjnN6IHkq9XGV+GlBatpWo9ozz1Apx3AFLfREYGOG3CDgQs7RZoJKWt7PhpA3xotcM1MkBm4enhIhvwVsx68PFIPP7DIHp1AshyE3wwZgAT7hjNe3AW04YVTu8J9TUxX0lTpTbDASQPKycblOrLA2oMX+pqPmrbOCy0MCx6My28jJqel0v8q2IDKCYWOm3F6dBrKAseD0XcA/PfRnQO5yn4X7OJ+sQHp5Byt70FxZJtT75hNIxHAlzO++ofXtooS7anv8SEYFWLVdUjs0SCmzyqblsZ3jchY+RKKI/7lp0fqujppAdFySMOyvuTnpEDWUhmwEKKtAXg+8Vl+OcSZTvbeBKmzxT54ejoKr+r6H++ePSx/oGtftsmALpaRr2AvbtVOX9UksIPcmNwxLt78YYDGTLBvXiQD/Hg+Ts46/svzzz49Vh22uEfPGEiiLjj8HqtHSRx927AOB7dHHpXoWwzKvSH7+tDJueiMmmPuCI98/aDXAUM8BB3/0e6SsakFbxddAjqKeZvEpLgR2KboGYhzQxUBrj3dyH0AgWhJrHiM6xJsAsfEk7B6ExjRwTXiXpMa7YyCM71bEys3BEOWqnuhjvgYNFx96BTESiuqGL8RY7nB2/oT2lliHteyAKoHPas/I08bZc2rNTh87RitIXH8P0rAOmah8y2a4oT+rEZowagRjmHRaLKALPvkMVVSESV49NNUz4S26jJA9z66BT0EwjmnrOeUVJto8pfF5EuwmqbFdWl+BOKyhbHrin3qOHBdQ/YYHaWAIfjTMv20/ybX/w9SFueGX8vUQ0XSzPldq5I9vzZiTvCi3wkxdXnB63Nlc0/D1KuMmRVJ7pMzPLbD9WC0tcrffMrcxnkY4BlDHk/zqHiJDOVNQ2NAn5eN6fSZixdpAGZWoGbIUuwwZ/CCmoqNs+6u6flBV/5gXrfWh4LaG3+cEGg9zemzyfRmLqTM/zUPEDmJKukm5n85lTIHnLLFWAdJ5N6HbPCEqj+aOUW+ywt2fcEMmgx9E+yXVZhIgz1JOdfkG25gvzliiGyByvUM89X27c4s0VwBDf5zogKx1oTCYVmAANJMP7cHEvS4bbIzRCssw2xo4IASe2qMSo6AE8A+tvb8WvwmFQvziKGPt4x0aJzPmKu9EnzurecCgfGHrCrMTcrAR6hYz6hly0yai/UbHAJ0GOXgSwU06yLJQk+43CHDh6Vgu5YQeAG4o+pWizzk2wnZejQA+3M4lHyRRw35fOms/ngXt75BnQVADj8tFx1bXri8s+Q709SyWJKCgISyr8WpeQaBV/7un8wXmAJvwjRReP5v9SeS3PpiukUg4BJhWV/H1Adj0NAiYSDGlzSkZJSb7UYw9shJyP7+qSW68Dr++3Aga5358l2Ui4BEKLQkRnfnpljBPHUtGXkJglSE0lZs8giCUJN4CIVTfsI8Sa5f8fQJuD5K6H8GGMwtltrAxQApOCrYgQSpV1PBZUo/FSl1CkaFqmShVY2NY9PysJEDiqa8D4IMiEEYXDf13XhaUesFl4KL/5xtEoDK4JK2zNZhCho4h1wE9IR3v39d11/AzlrcK+eBOcmmFqo9xY7u8hHQVKsSJ9DbHUmfBuwfhFYCeVufWvrlyOG+9gA/jD44vyqmlzQ+vGPnbiRCGSWRQz7xoJVUu8xj/tO9N02jTi8e6OTLqu5RV49v2lOL8+IHcGTbhFk0EqCqtn00MI3Aj4OqQs+FbdfeWiQrVECDmzYjZX9iXMGAkXpzqT5+cZN3x6t32Kbbf209dtHLYsWXWt+2eVHb8M0dxglzWx1J/xudy8F1SltaSJECFkMNOHbO0Z1llQRjKhX8iLPCBf2FNJHB8hXdYTdCY+6LT75MbojZq594nPJASnHScTJqy4b9TtVvZQl2wxdlqdljhfqxGdHDFlr9e29ApkpNmIKb5hOAUKvXS5WJ78Adz7COEd59tJaT9qAqY1xS7ju5FDbnDBH5RRergTB8bIQ7YwjFtmKuUK2EkWnh9zTDIS0V11i9QwA/tPaETCtRgbdesxJG/JGuNdQw6qXtR3z9IKzwzFRHN1U3O2CkjroiSAY07jigwyz3yJlqCcIAu9XPq1rSu6tUspgtl8m3Joe4+FAPS91zRFYGTYT3cr/OzZREMj76hcKSjufpeW1hfNjuQtHKEMs4MMjts4+4XRH6FCESfZ3xOffgCLKXnUEBIUjHZ5J5r9/j1iyWNTHM0GlZJnRWhp7hmtqFH1Nw0ZnD70sXH4R8nJe0YflwwKTAf7zdPPKNwYlwRJJ9LCzQQxIEvzMC3HBnXpC6W/KGPPnOz2bN7H9bWxLvJLjCjkNYDZpEmMD5zLcOET5C5M8ea5zHHTiKZHJUnoq0yl7DB/79MZYLk1bvj9y2zDGRhWpF57mYE3Rgf6LhZN6+ho1fFcGJYy4mjCvMj4hmujE+hc+AjLtioe9B9TLjQGsDi3njkrAlcP74RG/oT42IxLF3QvOJBRR/qa2wBT1aCPxGpNxDCLTqwpedu9tqcjyZ22EkS96taj+Zwyx7iQOS4oHQ4MWSI4sqIhj9XL+N6Cp2MO2TAObzD5ZbI4rqJOO6+M8ExJRtgvTcdecIgOm3CrcAcGTAZKEgQW36PP0d3Own28Kav6xrGDq4XKolk6kPlHMCMWq3dCh4eeT5sYslQmCcz/uxcrNVOjSuEY/FAOYy2+3+oayO9sFQCS4BTXBIk5BDJ/7JXgZoMuBHPqoRU4gcJbLgCuGWb3z858FzbHHR35o8wgiv1W572MQleXd/MYhW9ZfAzsWTzi652rY977/fvEuRVeBQbYUA0mMXYRVRiHAAqIpgrtkSgraCbrPA9bMH3n2vzG3OWfOA21jC3o6jv0qMG9lOZwqNlwGJJ0asBZZ92bi1NuXSenc17U62Y7L7iq9yflMFKEWFrCaV6Jmzyf5TCgVOhDlqs6XIc4o70Wz7N4eAOT2F1gdWeQmIucPCfbSLNN2RhnSea2c+9TKHQSlE9xncasGDTAc2Pr8vzLBoQbEhdEh/8A1+zLPNP7dDDvwmxfXjQHyfrPvwTSXGqmdeMwO3OtK9JsXlAdLpB59D1SGecNzpkgzfuDFsU7lWZO9CYr8Gj5TAMsgp6gkT8JEmxQ+AOtJ+T1uTp11ABuEMV3gp0JeoMlK5Y2AXUW+TXwKPmecA5ylMpDuUeI2L7LNXFJqJQMuzSpAfuga0eY7D8uuZnvfsei5QcUildaQlTxt36bjkGD2m8ItPOYg49qD/YTKNHZQ3WED9sOvwD8ryE+d0kGTpuTvk/RHWIII0wyM/r9tAdow5eOSy/5ELSKnbeoq9d4McDywep2q7+AjgSNgzthF3FvoL+xqsjbLleeQRguGmUrvVu4MNxLFk4xMH2kmXjWXzdcS0a1rvcAwJpMR15Bt9ZfJk4VYQDoe0+y7eBmyLWP+3/ni3GV3+ijSSUHCC2nbCrfbXWx0jY8Y3n84Sg+EAyj3SI8rm8r+HhwWSs0L+Ky3F24XpIV6oinIaOQ2ySfIdfD/F+rfnPBeXEwth0yB/RR1i0fVEnf8i6dAwFyUUhLi+rpyrJ1T36kA0ASOLNDYtMFNHllDFVEqoauKaL88G+DYX8Wm5xulQ9Y/QTaG0mACdE+m/rTD1FD0glujlkcwBCTi8MytB2YoBZklj3LJmqjdQN1HzmEK7KXIeQ2ZC1/ECIsZ0HfGjxGcAuy589ouSHKbRxjKFnPF0P9a8YQuKLcCz4fBsBJ4KzzOwieXzif7Qtm+nfTNxQN1cDq6NKQDZdm4HkGRHyH2oW+gbXEO+dux2J7f/by7nc5W2S45OdqMA4WEOM2iTAVxmFhdJMQad1iR+nP9D5j7pEtRXOrjRtYsTcq0qIy3nEOkC6a06a2iVjjUCVRcwIVYTxmJD/1xhTx2x5BnosZY0CsbSIaJNOtj3RLNhMk0+ohozzNYLHQbkcO85Sj2WbnlAUJq6M02AcawvJ2HCNvnxB9QAr8T5h6sA8r1rjL1aFbILF8oVKBqKLI2/i+rDgD9zNSERJ/xUDWtOhkkzd5cnpIcyXITLYyVSmyUfHrcLcqUB/wOXwmDCFLe/Ti245iUlBi0zAlQmEC4WyydIXSFzziL5xvXGXrRDtZp7QuX2yLXfvbhwp9KS19E6LJ2iY8+NBMKxsG3Q4VAANwUFJBc0i5EfzRH4gB5GnMFeU7BTFDL9Y4CdqGb+RG630DmQqkD+kwErPTLvg78Fz/wJy3MpHeF5Sjj452x+W/cJtM/sEDYanpxe3GuC82MkhwH1pnHmVbx6O2SzRQx7qVfDvpZdoq9OKgDtLLGOa2pqJxIWgsg7KBwNQG/btGEAs1t+ZYr5vd/BNVq8wweaJW3oNC4nuDiL/SwvKiM8dW+fEzIsNfOa98IcVYV8VDVu1jrO9Rjn8r9/TEfKh3yEK8AYKY8hqaTvPvG+gGE1WwaTIXsfTQqt0/R/XGhZNPLR4Acr0fRXWc0iZ7VSq0nWoOoACIqH3PE3F1vFGe1QtidACScPPNc7O8AziQS3WANQGew06Zrt2KGZwJ/pB0SmQc3DMfX4LYI50gSUO2giO8Kk66yCSIl4gLVOfUuPYkGxy94ynE9pgDUVAQqWndzWaauyB6x3kH+ZZsDZ6zTaeZ2nhWtxnXQxScuMTafP/gYLBBpEkB018p6ibBMrepY5YfuBPr+M4GapCEAcgEnlOP9EpZVsYFQCAdxCoT3AiiPsrHv/oS+lV75kOHf+XyOTrbeVMahVQNgQQaPXzEVGloodDdLxPRIKTsBI31CD2Gmha3ySS6XI7tYE+Bb5BxUycMtiVtz6QS7+Q6IvlzXgNLAe+ow/wbg9Bf8UxTBd9aC7gKsAN+H/Rbk/rcN8FOdmDX69yYkV+DjsvSNrcZE6gksu5BMtKOk0/wCTENpvHPMqcVC4BR4qxJJIp2/1fqRwLxnjXdx+Ipb+Ttr8CbUgiQ8M7b8cvEo9LyDTf5AGVNn/k1y9YjvAzfLhniRNpUZgFR6RutE8ARIa7Cekhqi7SN1xoLmAU80tww48Hhv4GtJvBybA+9BPzjxOfEJrnogwz8EoI2H+qDvfd8v8sDyw4h4hRGPanZuXg6SkgqLs4p+QjEB1MBCwQAiMi0B5M73fM6JWQhzOyj5Puq+Dw5d7UEL6j0daqnENp8iD9YVhL6KThRGvnsbX/BAZKdJv8xkUzp7PPLZAUVVJMAghugBjBM2pBK6b/m7uL5JBzQUjYpg/t8ZGavcgN0u3tA4oxGwx93qxMjT2pxHsARx4vyyIyJCy5qP7icOyl1k5dybFFpMOeTBVHK2TKOhKlfa7fGb90Mue7Txs6vbF9h6okrG197+R2DDCGBoaipqFJr1BchUWHTDG3TzAuBXgyD3FuLvqBgpLSvCwmpIJA9HVXG3Qe6ceqsVyQkpF5vf5R0idwLAHhYLzfPNgkOezqQBHKXQPzWiZgpO7SnBQT7szA9xSrUB6txFKxOVXhd9CDUIDZeE/WXGt1Xaqk/k+4UzjUhQM9UJIM8BYUlX929trDMf+9eRcgb1UK3tBGDm9k/xQbknTltWkHBPLvD0aWI9RI1omwdl19eQoHfMtPwxbKLTVfs5/495AAs+Pz7TqvvX3wZ3lDnMv6kIslSf4PeoiWHW4Fi7Klm3L+IguNP3gTyjl3G3kAdPUS5z5x8RBVmIdwliqsFYnj7H9QuO18qd1LmCx7El/bk/r+xlAJFfwRtmEURTCMcLVHE531oG0foVbfMqbj7PJu1wFelYx/Yq2pfvFsu8eoX8HzxKrQf46MqV3W4QBnvtMUEtEnMvRL/SDbg41exf0l454i/3tL4xL12572f1SvBfaat75dSa/sgG1sxy997wufwGbbKTk1RpIC9ptk4uSRWLpVmcBM+ElB3T9OmgS5VSdYzybtPPPn3aGyH5UhkjAGAJ316zSPTpaCSO+1E2ESQHPC1L6ST5Wm9OVsO3MoIkV9gWQjHMLKVH/+7q5+TN5jRWmKCPwSxobx3PcX4O8QDGKtkJFITp3Hi0K4gWDTXEN5jeQeqnRFnsGJQ+u14xkVNj20ywA5woszKe0G7Fkhunefd+028rntAHNGDHik0NxTxy1V48XdgHy1N9xP5D8S7U4+sMIAiPZTV5+49RijDj1widmhTeWBd0s85C9iwgkfauOwsVou2NC2H9gXvApc4y8ciw+M5vcSjlUW1fbBNRBmhkBV5bDs7S34z2S6tyu6sozUnqBHTXGalNTUt+pSgQ4sGIjbdJaAfd/gK2xoTT3qr/RQES1mJYTs6/f7l8m0vbIh/ko0RMeP3vruIMwJE05/TSFjW/UxlM3CqsmQlslaEhD0ekbX93K7z4KQcdCmulD2hHcue8SLkj/CbyqkNZ2CEZZqX0CwHurp65zpLf7CIfA6tbAk5VCnb2fPYNhRj5vL3TDX0IzCrTaAD4SBSTtH/BxgtbxDFloKCZucTLUWiBkPOXvsgPY6f7WG+Be86VJdMV09vVA4a/7ijQND9smNfcztOiJlBYRHmpB9ULMc5FEQjNMOjEEgdQmQrhlaz8zxPhN+tZZjrgLOmtmS9wtBulA9EMBAFfmb5aU476t1r0HZ9KziQuYGrDKQNPl/xOuSWcxMeFEwCY7Wo39YFQONGRKUMIPu4XrbidyqyK4NlVUmsJHR9Jk7Ou2jxa16g0Dy5mgwhwZWWx+3guMC/a3tNbrxwqBlNMrhnV574Kfr6d3vVAH5YuJxGqZsBcyfLYxyxvRRngAKgJeS2epzRkfhn3129cPuN81kIwkkQh8QxN5WmCYZvuZRmhAhn4Nkda3AwegWP8rbA0jK4gHnket3FNKJTn8D8EOYfmhq6334Ln3XW3rB/GmG5nBFmNT6jrIKRH+kLejMFNljQeL8vlCEhCCX+KVnTyAfkS+CPMq3ZJ3TtOPKOJAiy/o0R//dxLJKqiME73ueAOvIeYXwuOhCQA7qQGZJOnBNIBDAqGdgT/mOwnCUKnm932SUl+pzvsvoq11cD9+L+6/+4G5/tktwjhs37fePj4uFzbtxo0CDumBGnCP53Aa4P7R0KcvlnyO6kLARG9/9kjIZ75P3bY94tMUlxtbM5ABOa3SWlxDvueo4G/xrmFwQe+fpOnrE8Gi0/Eyt2qQ7BMqQ6MQaVeW7KjUwCwtsBVeUE07t4/NIAW+L7NGc/yZSfsN4rtTUBB8R6A4eqbruTbE/O6OVq0q0d5HGVTNM4p7Tk8+R0Bwir7JS4+Hgn+bjxxEKjZemi12V2DAg/LMvD3AGQQJ9TYBNbQtHnRWQRR00P1bZ9jgDYTNpuJoljnkyC+JqK1TJUW2f81RBijqyGMTzJSztEcLLQR6KH+y5rPsLCs3c1rKrVg9HCROHw7+WB6cfd2m6iPyepn6/ouyWSa+Rpgy/+G/YCRGX/8uSclPDLw6dI0pGkt5jSB5RoIdWDlAx/+FbLk5K0vpF2mqioDzVMeA0dePmDH66YIVsNPkwIpv8jXroULHwuG0LpPY2Wr0GH+rMplBiUTfXhHO+fkp1vJZSWlHJ9U+EaGagDRKauLYEq56atsWBa1EfZcnnNQ3J8U6EW9FYf9WrqSLfLxZycRHASNPHIIqMklZsTL9VuGAMYGzCfkOygXO7hk6TlUR5Py2Sq+0UK7J1XpSPIyqhRt3zZLZGXIXvTKfKvHG/TcATbolc7n/BrYKcukZKJIJ4SisWOkFkT5QsgbHI3QX5s8BqslvNWtqjBc7INZSrIMvOw+Mdqi1+3UTVEZfUyIoCy9hOqohtVDXW7YSldalAYYAPjKK/KoClG3RTdLwbD4KWbMtPnBjqieMoE3BdDDz+PiMiwJrJpjSSDPKXMGdNtuG00Fk22D785Y1VyRteB524ZdHFqyGHbG8BK6PV1PIYh3MGPRZ6MeoWYlssftpXqbUsyv7ug4qPMkmPxf14nM9drTIa9ag+D64uMPdAzP654BAJzN4BsUTkw1isPulOFX4SkG2DZyBZABuvuwMzQvg7Ui48Ay9Ygja7dwkN7INBRBOWvVpoYVsLHRyLyweOKrVu67vFrb5Iq7VMGuZixycspERy4Xm953pLw+GMSoB9DemBe8abHu2EQK8syA3bWXztIBOkEG4/Tv4pUPNAD1GPqkAfIsUyfhY1Nonaq24/aigP1kZbcP0uxd9PyO81b0bsvFIPZVdQQZV6nvzqO8VPnAf6XZl7VjlNtEXQ9btEcXbPHH2T24oZvmgFcuvCItpybrHkFTQ6e3GIvJULHHEFYxU0VwrVyizMzuXo7+J0agJu9F5jmOJhrYu48t1JwISK2nAckK3vC9kUmlq+3ahw1gVU1RZnWamXMg0xkEm+lWGSrCYeMDCHClGB7U0fbHvnAH2C/ctX0grf1GemESS0j7Cw7/gftxASH/wP53UTccPBxfaiWi7JCbJOABzb9LpXcJ9VZ0OjY5WD87S2Yb4J7oZ0rmlfvTkWP+tkgoA3bcvyxxA1fQNgA/lPOSfOloobbIGpaQCQ1+SFP3XNjQAgNjHDcHEAsizn4JoQqEeKZmQ3h97xvAC5zBbJTadfz/IZ0DGuMTPtL6dqAjCgxjHyVkwdgBpYQEXWqfzq3TkiJ/jV+Ca7ebZkBz4/dM9rGa6d4OrtVvG1UirWVWeOHrL59DCbeEAwThDJMa6XehX5vuSMktqoT1EitM//zLpeGE8pfrPYiDvMAgZ+svnV3OvD43GIOFeV6y3a/VNB7M/5PcPW8PQwlG0QFwwRrv07rGESBE+oj0sxJE4BbR+9N9osH24DInxE0s+r8+nYT7VQk2o6NcT8CHo/ZdMyCm1u8KkYERGadXAwEl/0EdsUY14kE/k2aPu/AKtJOvufE0vwXZiKdFJEpC1iGBOT7wALc5stNdSRMPMgrAyLyQD8SFFPJLUGdy9C5FgAgx7uh1+8fv6B+vapPjBR/ZDjEXdSecM8ywYeRyluigYPlHbWN6N5A8IUp960CXgAI11z1bwHiB8IRdyUjrAwXPCnI6pDfJs9+LdigA/5NJC7yCLwBKT4TIOSWHYrxSGLjaifVgeyNsB0AsEf6k95pHBNt7wVpl4krnLD2zodlLlTUGszL5/3BRKH5uBkvQKw3dmrsVRtyoVbSZ1SnlK+2wpxhHoArALEdfieaBPB4SQs7MVa+G0l4PUFa9EPGbAWeAS/t7Bc5FHa4s4UGF3V73WAX1sLRWkGY6/quLjzXKiZIyMb2FzeIMhKNwIJItxKzGtc/0gZCWeuYsjYCEiFz0+6iBfifJRNe/kCKaS/kJEM894aYC254Ff8a9RSBY1Kij2RtlvYdDl4oR2h7PEzEM5/AVV8vq2sy/09f145YGAQS/9RQiwc7/pY1mej4TDBk/TRQdxSqIboYLInDPgxEGadB7jdP3iGjAs9RI3hnY1Tv7LFU5k8WmwfS+iNUCk/z9VUrhE8DiQ7z8lqdkUjqU2ha5TgJQAN/WcxOdFnPOSjKLOtVSq2r5Cf4TBcBvXslrWcHbgx+F7sr/q/TW4EBJAsLiiBiZeYEiWjfupGCZP8fYgsXtWCofh3YKAAje+fD6mcaiPw0Cx8IzIcG0NRbsKbhF/QP8DMsmc6xk4ymZWZylrVFpA9+cWpX4Bi9drWU94TJ42e2RSrv76T1Gac4xCrTjCNo/lZSd+LG465AfZfPZomndyetkDX87ESptQSddAgQgMGKBVuC0XZz+fSBBLRVx4rn7kQKTK5EUWR0nI4+JO/p5Dm4DcjsKh88uA5E+BeqHi1UH9wqtKIeM++WP6lkMSQqZ2UBpEVN66PEjzPetUZhCy3oWncC+J7EFYvzyq8cvZxCvJFCW+//N0nDqSo35bMglKO9cUU1cQbrGP3cTA3I4NvLcGsuFhiCu9SXI6Suh+/8lqpbeSxdIYjrvthXGjzz+HPXJ7RyMkGP5/o0XDLijLM6yiHP1oKdcWD6s0cY4lAU3YOph9IYVIs/gJaBV6p6mKiBSZUBO7r6xpwk2cbntBJBeGSWT7QSvdQ7JFlm1GnRpm+il2GklrMzCN8EaAf4EstElwnUBuGhvW0weEvQA6GzCVNKzDZDNR8HsBtOjYIoybOP4m/sPqm767QdWVvF4RcF6azlSnEOWSBc24JDirEGgtJuG6mtle/EXXu+70UI2WZ55IrWX0yglcBvMmPh8w+jjAI4zWit95+NMwSij/BzZ0Vkji6GvjzYyu337BFXKtf1hgMXZv83ZZBzRPr9i4SkG1/I9IsO7EeQQ8xHqVG2rGNiYOxEqrRqr8qnQAR+6Hz5ZinkrtK38b/0JhzcH3uP8CVefsWGg5nCzNLPdYZSVEp7+B2kLOu8Dup0vZd/HFOocB6O3IIrnwKSZfFIVyezTqzDchDlAPNY6QsLAA/FPj4+IAS58iQhiFxRv+qJyRcf17v/09QDq8wXuWm75hLDtRrBuSf0DVaIibppeC+ZnkYfrJH04wHyck9GzLnc/A2z5GuV5RQNH5qECu9hS9gMXvRH+EWSVb3WZEu/NMMd1mSRGQx8cgmVhQ58WGwTsUCX5SvyXgs2mDUXZGBd6Ab/bSOE26OC/PL9LKdHD5SR3grIRPCzAuJkNV7cHpyfq200JqSL4deNnNhGdGBanvjVQdolGg0Y1NOP1m3dcfBPbp/n7Unq2BToi248n/MAv0XLALvp2krzYgrG85JeEiwHPaRXFl1jlhha6JyOwgesLyEjCVJqBzfQKwyOpLzyUBJiIamA1J6MC1IYd72/HWOymPOJChK1/91GhMIjTMRlsBmWMAAi+LwlgtiYw+Ossdwf2fj0qkTEgb3hvTSe9w+iRxLwSlwly0o4cUmqcndTGakDH88Td1RfrSkIQ5gBrweEFG/Pdv8aKFoRNMgCOAD2d5pW+EfvYh5R3HyHCMp4bAQcLHEJ29GNT+3TuUj9J12tMGn4qZydElDxFozDQEkdWSS11RImyMcyEzymmZwBETDGFyIDY/W4cOguLyuOe4EE34ehAl2sPCAghjzTj2Yght9fwgNqAg96o/O76UCnFimWh3OduMcoaarHQ96A2wdufp752KeJfwvyVumCfigE9APKzIBnkqNt1sFjLzdN0/fWDAR1qg+6IOSXW5aXEO023yU49aKFC3BuFkc8GsOZMcHSfNtlxceCqmWK9pZYzHZ42OfxCkaE/4yOEhQ94FA73O34ud90KwMS9/o/sUSfSf2DjUyiaoQtNRCkQbEFnkLQjDRIHRsw2svHlpgRTBccmARbAa0xmgnbMTmoZ18/t7B4UMtt8tyDZEoLP3nzB6TDr8CpUQ9h6Dtysrl3w+Lo3iCKO77aLu425h4XzTq8SVYGdae+P2Mr94M4F2/TbfgMNObV/LQpDXzBBdwrkFIi547PaxgP+hVZHZMC5SMbEmXhirNPPi5+MoitY/Q8XdvgHA5+EDUrO+sCd8FyHZ5trEWv7in/n/yCo+SDYtmf3/dONbK30N1hpL0YTdRA8slAV4hxz3ygm3N6KKsQE97drx0csktzrVuORI3hTtXCv36D9W6V2HRxCpKQ2lFkSPmb2tkNV/pW1+5lACdhY0YDu0VO/2B7SBTPMQ2InM4YSLaA8AP//H9r9rN0gCBdnT2l97BrYW8qyIKOkzFlJNcFlPrIHntIh3WLeTRvcVc/sCVoUKEPz1383lkwb9VVCUNjtSwb9Grx0/onsgBvO8W+v+quhWTxVNGwyIy0zt3CutMC8f033dFrhhUqltaHUVk6nLnfJB9p0vvJNmvrCa6VKv7wLAwLakFd4eoqtG6TaX24z+CAybQSp+kpz9/n6YEAKZsAgp1sDauzcP+n1HkN2GniK+LQsNRGOeDYeh8RzDi4mcALi7mvu6lHS4vLkSXTMTLanUCJrcGHnIvU56blMnVqFFZUy4tAaYAn+csL9zIunlgf+8f2OCa4LAWkKxawVoMgoAR7qAvcF+U3c8LhKir733N+lkNMmIiReY8ExougHVHgTz5G5OMaTy8r+ClUHuRcpEcttAaXpSgzqc5Ik8tLqoysxmh5zC6HCMfDPYU+NIEz+mWJkHm8OOgKJmOaUu3hxPNBhK2NIfcISgL0rSTTAv9gZGtFBkG8H4LLSGuJDHAUTAtqwOELJecXGzShqSWMOZw6Nkp7Ypq/10Om1/cSVU0OP/wjEVjhH0FmFzVAVKGy1CXHBHI5+EJ8it5zfT8BMD/+063Nt/NzLG2A6Fan5fu7jZ/TwBPfdPbXtROkbg9IiRyIbv0+Hcx8sak+Lm84FjPYJlOspBHc2AzutF/FLM1Q4A/fulSxNAtkIatdksxMY/vWB/nI6zsXT9+tbkpAMMwpYM37p5j1VziZuYWglIpeRLtQk3w3W/wxe2jdaS5QRwr7OA4K7Po5crrYopAeRqgSnngseVWdar6P7uGzJkvqYFrzER7NJBaaZ+lNxwoHK1PRjoKeKB591JGvvz52pxdr8AdfRGJXa+ufGz8n5oTS9+Gg/OboZG3BfIrDau9mMYhd+FI0lKcnh+MASep03J8CL6QUwaTn1dRA9G9WuONz41ZJQQRn8k7Z2QgRgL+hDcsPgp3pKF14u9UnhfBavwMhLw30AyDYYG1T/7DybXNnwg6AZRhXWT9NVVvy1ASPfuFbEBNguTjgqZQV5OQw+PjPqZ5ZvCoWofi7VAMhN1mAIop7xZsdZdieouK6SMhCHPNTM1YgcBw+c8UU6/HSfQHBG9JY5n1fluBFkGS/a53o35rep9Xlhev84VUPGUCWqjGJb8GAspFKgMg9fGjsnjvUkHzTnvnXs8I4UbBjKpwtA9uPOA2bXQchvFksSWAk1dpj+uPbgQkGjVZvZ1CMuyAvgcZpLQkQyG/o7Lt6rlknQuGRN8yrhsXWKQcBl+jmcU7W1wUWa7DR4yORhly9d3hrDRdXw9S08LLGfsCQckNtPubhN0BNNwSN1UwsBTWLf7SukB/N7Qp+PkOBgtYiLargy+8OnBGd615fopJIoq4+JVwIbIQ1EJEiwt7EN6B7OomrYX+8b2XpBVanpYlCZI3dveZVdNSIp1JpBbTr4etD9inURMvYNkdCX48bu4AHsyhjoIP+LSYW4a869P/3nJmUZr4VsCgMQDn0C56hYERkZo/+lehD4CDXZDELkg/fViJ/JzTxHAFUSc6Nq/YYEm3OCvhqnQGDoLE1JPm06XJbj9tJIyAYhV06pwp1H0+wrFXPkPk90LSrM10qQL+IoRO69z/HLatRX9BTladphKfczXrElSoqdxT9nEzhnzSgyAB7H0RXWEIS658CAnjzFtQENv43i0sISCyRwDwN0oEolGc10ZMTwAed+fyLHxuA+4DgBcuUg6I2uXqt93ctZ1memvLe4Jpugz2ZDJwxahkiGOAK7yVMDamrBon/uFRLrpLabzhHMA38FE8iRw3wq+AU66yqo9dYcUikhFHOn6oR0l9yNPe9Z0q9sbuvYb6fNrS3UfCYAkMdyTcg6udU0vSqto0Wv8mEpBEeehyRetd1sJ9yLEmjMNR27/EgnrW6FJOHXX3X5/nJo8A+mgKsv+HfdNmS+y4Zk/87dAzB5s9wb1W7ZqAC2qqKhfgF9Gf5e/O6+tH7EYGuf1Aeb9g6P9QEXXAsh7qzhbJ7wupc/Lz9VGGKUJ6nbJPdfZojfXLhQG0pHBTpmP23TAaSe3PvdIzJr3R9c2BidHunmZlFsUf3NODE4va3Ha/t55CO8qjh9I3W5xlmQ2TYTj2P+0SBYI3GmRBWjT/eiP4TqJz5YzqaSxkR6vBz5+cgihmnlRhs/i1N5Pw8d5tpOm5bt/na1YhMumQitnHtwLUnT3vEQqQvnIZijaYX5Agk+Ac/kiMVTXFpEEZnDJjTL+2TAs1/7Yo3u8xUJpu+GPTNXY1fs07QQLmAni6UxhOs9eN7eB2cewqM2/KpsZAWK0QRXi97CGfPwQuYYLF9aaexgZQJFPXIxc8hRA0kNhyzvoydq2EeuCeHwMwUHhXJU1XNPMR2lZZZJVai4C4Ij9nRMAbUwHvo9VprCGztTVUMpDn+J2kKsN3g/IH7+vLCyNqbnLVO3+fWb0pV3O93tlMBswlosAaZsoxMs0W9FYYftRMehqZD0Uh8hscA3AAmDTQm8BAUlQ3AgIzYaib4pv4v6+7czzQwbb1x5zRffUtoZBdY+MtDdJ1eTy0ElRZbxQTvvA9Gy09RAgfS34beZpcbxm1KRa+bGUnJ1Q8TCifb0EgWR+J5Xgw5cFJdiyL0h6FUp1w8YBlNbfcPai/xdhxhikOHwV/Z6KgA4bEw4/LHSK+ICxq/03gBSSau/d43yh2vZPiC7qybtFEam8fenoULS4lsA2rg7L65bVSVVE5HmZo12A1H4bsnj4nd38wVGcqvGB/PLVGxft6+fv9lABQMiXDFap3Y9of3YBvbvrfuzKYIN1XT+P6S3Eu0R9ZFABFYb4at4dNawTEcfvkl+kTbIRUWZwCoI/KV1babTrmsvfKaqr/8+velJDFJiwBIrLRLL2XB9F0xfHhytzC2aig3XPXP5AisaDuurUEB+sNQIKhLn6kjgzqoMCcPb+abk/8zdGmRNBLKRKu7ksOmnB9FnO+mr8t95/FUhTPI4ZNLHCRn4nmXVYEpTduEX2ttsT+3ARBeIEDb4y1MsFhEHkzjx70iZcEEMnkku6JSeKF/HNAW3lXfvnB6iROPCpW6jClLkDiS/A8f+xDQlCh2OUBS378GM0l5uG4kyyQLRVATA6k8WklWI4NBMWEKw1JDjtpNMIF7pgR/hIfhBOQJLSQuwU4LdHIDue++1Jupb6SfvJ+kvLA0ouubvA1VLll8Yvp6k+vD0w/14WSeZLMMcGj2N3wQe2CNrF151B9Lk3VrUDN7ENZ0mA50UgJa49AwLzEqXMEUCNuweU0mMkLwgXMoNYHA4cHn4Oy2yMVYGVbVzsJ/19etRhrzs4SnXbo6lKs1QA/4rEi9Ne/s6GSOFiN/dY1JcAnbspuzHGfBa1rZWzuoQjj2EoBj55+eKZWVXSCOt2faYvsWTrllnAVpXjcPwG07jPTMqAUgGczVAMSVJ4SIM6FbePU6gAMzCdNI6c9KCGPP34SV9mpH2cDo86E/IJFjwftGfCjv5o5ovkFtc/0Jn0ehE04x/wzWoF4d43Wo1Fg/+mFVUnbh2B0CbQVhq5OQMV4FhoGHduOybtNsittMsSks05Z/JtLkvO0CJjT3Iyd7YpxEBAzguu0Cb9A6cM/S7sSb223uYNEATOAQP+PFG89lr7m6DZ/8vnuzWh2zZz4WMPmSQ0SCJGx4xJ2J0D6LQdQBnC55i9AyvF7QDfHyc4nfIC1JrR5srkb5UKQsq1Wr/+T4cxvRsMeJ729Y172249eUXaJjXLeFZuTo2ACViRZs1hnFwA0weTCX1hwgUQiGIxhgffQpYMsxI8Cdpz1rPOAS6s0z85EB+0dTg2tTgqWQqLzQ6UtfFzHVYl0Drddhmd5+WQVfKI+p4gHaiUsx1QRs3und+r1W99hXvdMGxys7ifhTC908HZwV4KQ6Ib37v6nbI2+aWJvshb0Xa29FE0N7G8LOpAA1cfUfeInnGoDe4xAzpdhqa/q3GKi3+Q9uZ3olDBVxbc4TCum0LSlmpmMZsofZO/QyQNQPggi0MU1T4O0B1+MpqufehKCnpHiI1y6w83eRSGuGIxtJUeEWo8YCvZR0iFPFHRGNTo3gRr1SQ16cmnSO+xDLD7dvz0r6sMcdXYAOOAgz6YVIbgz88FUZ4BwGCE/i/UAxoobigCvgjqaw95aqCYN8P5C+fjCiPCVwq7QfhBT7aTXdv6hKXZyKO1TrYSTOnQG3LFsTv4UgUCriKPlAZ3RoFQqNH3Qi8aI1B2qGQ5AEyjmJk8oY+N8YadwR1t8J+rWCdcAD7pALU2liVk5GDA/rTW+zHkmUlI8Eo1NO9HPa33cc2dUCuArILBISSAOeG9Z1EqG2rk5Klboes1PjrKcrRXGj2QF/eBCqQLxyhjytkIqtLLHSVUQDXhBx92AVjUE5qu9dvIwxYuMTa8QtZNLx13rRQcp7UAkXabnFoLZ4IDQVaAlsgUT/dWO9G7rBeAm+qh8x6F2dP8rUx2/5ot08QoT50L6kjWjquiz4/hN7V/k8I8dLFdPNuNx9gxjnTuorKYMyGvQA232DM277/uUbj+gYs1pjcO34r+CJZASGNi+gZM0FdeLida7wT2dKK8bl3+yoyMKeohaxA41WLRQkJefPhpknnnRmQhU92MPGvAN+YqLgnG/JaE/+xH+tkVFRYRdGlqPo9tvxeE5Oj7hFWvpdbmXXv69P+Aunt7lWRhZGo2lhn5SENmpvxb5LyR3IoEI6qCYHfrlsJmm7YL/EE8NxoNNLy2Zt34PRsFiYCBSGE4gSb+V8r7PZUQp+nzHRLp7AKEO/yTA0elIjEk/QuAlvYmERGGRr+GOtdn/3s0KguVyXJ5XyY0ipmJwaiqnaa+EBtfVHjnWKVqdw2WLtFnBEPyUr2YGNWCr8dHiDYjdPejhlhyNXFHHDZIbYJgZMjitgcqpzKF+u5gRktJyEWh9EBSp3HzJ5JMjWLeq5+RQBN+ig+7PqV34RI4pjgBLgiAX5ozROxRHbmqdvs5FUCbYPQtWjNfKoLJrs0gXEVlxK/1FVQ3B/XpbanLxCeQybkC/6yy5v7GBEfc+Cl15IPvYIUOvIPUIKipBvkkBX2cPFaiIHL5ndlPyImJxweu88KDz1vUM07lItQ1rbQfct+xa6w4EBMUqYLghE1LhXQ7qb1AHIVgfoH23xSFWisIfHrfEU/mzSvz4KQc8FAniVcCq7r6p0W+ri8URJlcE3GPa3j/81+2Rabw2XRPG2gYVr4W1X+Mh3nk13361OrKDAUkv66uJ+UhFrRwYUEJ8C6sdzjGxjNzEAn/sHVFVijhyzAdXCVBXp4AlYiiuMIfAGvYbPGrEvDAj5tyngAAAAASUVORK5CYII=");
  background-size: 128px 128px;
}

@keyframes globeSpin {
  from {
    transform: translateX(-50%) rotate(0deg);
  }
  to {
    transform: translateX(-50%) rotate(360deg);
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
  background-color: rgba(36, 17, 69, 0.78);
  background-image: linear-gradient(180deg, rgba(36, 17, 69, 0.82) 0%, rgba(44, 19, 80, 0.62) 50%, rgba(36, 17, 69, 0.82) 100%);
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
  border: 1px solid rgba(255, 255, 255, 0.16);
}

.recap-stat {
  @apply absolute right-4 top-4 flex items-baseline gap-x-1.5 rounded-xl;
  padding: 8px 13px;
  background: rgba(13, 198, 244, 0.14);
  border: 1px solid rgba(13, 198, 244, 0.4);
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
/* ===== PROVOST INVITATION ===== */
.hero-watch {
  @apply mt-6 inline-flex items-center gap-x-3 font-urbanist text-sm font-semibold text-white/80 transition-colors duration-200 hover:text-white;
}
.hero-watch-icon {
  @apply grid h-9 w-9 place-items-center rounded-full text-flux-cyan;
  border: 1.5px solid rgba(13, 198, 244, 0.55);
  background: rgba(13, 198, 244, 0.1);
  transition: background 0.2s ease, transform 0.2s ease;
}
.hero-watch-icon svg {
  @apply h-4 w-4 translate-x-px;
}
.hero-watch:hover .hero-watch-icon {
  background: rgba(13, 198, 244, 0.22);
  transform: scale(1.06);
}
.hero-watch-len {
  @apply font-mono text-[11px] tracking-[0.1em] text-white/40;
}
.provost {
  @apply relative overflow-hidden py-16 md:py-24;
  background: radial-gradient(ellipse 70% 60% at 85% 20%, rgba(13, 198, 244, 0.14), transparent 60%),
    linear-gradient(160deg, #1c0b39 0%, #150829 100%);
  border-top: 1px solid rgba(13, 198, 244, 0.18);
  border-bottom: 1px solid rgba(13, 198, 244, 0.18);
}
.provost-frame {
  @apply relative overflow-hidden rounded-3xl;
  aspect-ratio: 16 / 9;
  background: #0d041c;
  border: 1.5px solid rgba(13, 198, 244, 0.3);
  box-shadow: 0 0 0 8px rgba(13, 198, 244, 0.05), 0 30px 80px rgba(5, 1, 14, 0.6);
}
.provost-video {
  @apply h-full w-full object-cover;
}
.provost-play {
  @apply absolute inset-0 grid place-items-center;
  background: linear-gradient(180deg, rgba(21, 8, 41, 0.05), rgba(21, 8, 41, 0.45));
}
.provost-play svg {
  @apply h-8 w-8 translate-x-0.5 text-white;
}
.provost-play::before {
  content: '';
  @apply absolute h-20 w-20 rounded-full;
  background: #fc470b;
  box-shadow: 0 12px 40px rgba(252, 71, 11, 0.45);
  transition: transform 0.25s ease;
}
.provost-play svg {
  @apply relative;
}
.provost-play:hover::before {
  transform: scale(1.08);
}
.provost-name {
  @apply mt-6 font-urbanist text-lg font-bold text-white;
}
.provost-title {
  @apply mt-0.5 font-urbanist text-sm text-flux-cyan;
}

/* ===== PARTNERS ===== */
.partner-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}
@media (min-width: 640px) {
  .partner-grid { grid-template-columns: repeat(3, 1fr); gap: 18px; }
}
@media (min-width: 1024px) {
  .partner-grid { grid-template-columns: repeat(5, 1fr); gap: 20px; }
}
.partner-plate {
  overflow: hidden;
  border-radius: 16px;
  background: #fff;
  border: 1.5px solid rgba(22, 7, 43, 0.08);
  box-shadow: 0 10px 28px rgba(22, 7, 43, 0.07);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}
.partner-plate:hover {
  transform: translateY(-3px);
  border-color: rgba(13, 198, 244, 0.55);
  box-shadow: 0 18px 40px rgba(22, 7, 43, 0.14);
}
.partner-plate img {
  display: block;
  width: 100%;
  height: auto;
}

/* ===== LINEUP ===== */
.lineup-head {
  @apply mb-5 mt-10 flex items-center gap-x-4 md:mb-7 md:mt-14;
}
.lineup-head::after {
  content: '';
  @apply h-px flex-1;
  background: linear-gradient(to right, rgba(22, 7, 43, 0.22), rgba(22, 7, 43, 0));
}
.lineup-kicker {
  @apply font-bebas text-2xl leading-none text-flux-ink sm:text-3xl;
}
.lineup-count {
  @apply rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.12em] text-flux-violet;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 60%;
  border: 1px solid rgba(61, 21, 82, 0.28);
  background: rgba(61, 21, 82, 0.06);
}

/* Panelist: tall portrait, name block below on a white card face */
.panelist {
  @apply flex flex-col overflow-hidden rounded-3xl text-left;
  background: #fff;
  border: 1.5px solid rgba(22, 7, 43, 0.08);
  box-shadow: 0 14px 40px rgba(22, 7, 43, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}
.panelist:hover {
  transform: translateY(-4px);
  border-color: rgba(13, 198, 244, 0.55);
  box-shadow: 0 24px 56px rgba(22, 7, 43, 0.16);
}
.panelist-photo {
  @apply relative overflow-hidden;
  aspect-ratio: 4 / 5;
  background: #241145;
}
.panelist-photo img {
  @apply h-full w-full object-cover;
  object-position: center 20%;
  transition: transform 0.6s ease;
}
.panelist:hover .panelist-photo img {
  transform: scale(1.04);
}
.panelist-shade {
  @apply absolute inset-0;
  background: linear-gradient(180deg, rgba(21, 8, 41, 0) 60%, rgba(21, 8, 41, 0.72) 100%);
}
.panelist-focus {
  @apply absolute bottom-4 left-4 rounded-full font-mono text-[10px] tracking-[0.1em] text-white;
  padding: 6px 11px;
  background: rgba(13, 198, 244, 0.16);
  border: 1px solid rgba(13, 198, 244, 0.5);
}
.panelist-meta {
  @apply flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6;
}
.panelist-name {
  @apply font-bebas text-3xl leading-none text-flux-ink;
}
.panelist-role {
  @apply mt-2 font-urbanist text-sm font-semibold leading-snug text-flux-ink/85;
}
.panelist-org {
  @apply mt-0.5 font-urbanist text-xs leading-snug text-flux-ink/50;
}
.panelist-cta {
  @apply mt-4 inline-flex items-center gap-x-1.5 self-start font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-flux-violet transition-colors duration-200;
}
.panelist-cta::after {
  content: '';
  @apply inline-block h-1.5 w-1.5 rounded-full bg-flux-cyan;
  transition: transform 0.2s ease;
}
.panelist:hover .panelist-cta,
.host:hover .panelist-cta {
  @apply text-flux-ink;
}
.panelist:hover .panelist-cta::after,
.host:hover .panelist-cta::after {
  transform: translateX(3px);
}

/* Workshop host: wide card on the dark ground, square headshot at left */
.host {
  @apply grid gap-5 rounded-3xl p-5 text-left sm:grid-cols-[150px_1fr] sm:gap-6 sm:p-6;
  background: linear-gradient(150deg, #2b1452 0%, #1a0a33 100%);
  border: 1.5px solid rgba(13, 198, 244, 0.22);
  box-shadow: 0 18px 44px rgba(22, 7, 43, 0.18);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}
.host:hover {
  transform: translateY(-4px);
  border-color: rgba(13, 198, 244, 0.65);
  box-shadow: 0 26px 60px rgba(22, 7, 43, 0.3), 0 0 0 6px rgba(13, 198, 244, 0.06);
}
.host-photo {
  @apply overflow-hidden rounded-2xl;
  width: 120px;
  aspect-ratio: 1 / 1;
  border: 1px solid rgba(255, 255, 255, 0.14);
}
@media (min-width: 640px) {
  .host-photo {
    width: 150px;
  }
}
.host-photo img {
  @apply h-full w-full object-cover;
}
.host-meta {
  @apply flex min-w-0 flex-col;
}
.host-workshop {
  @apply font-bebas text-3xl leading-none text-white sm:text-4xl;
}
.host-blurb {
  @apply mt-2 font-urbanist text-sm leading-relaxed text-white/60;
  max-width: 48ch;
}
.host-by {
  @apply mt-4 flex flex-col pt-3;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.host-name {
  @apply font-urbanist text-base font-bold text-white;
}
.host-role {
  @apply font-urbanist text-xs text-flux-cyan;
}
.host .panelist-cta {
  @apply text-white/70;
}
.host:hover .panelist-cta {
  @apply text-white;
}

@media (prefers-reduced-motion: reduce) {
  .panelist,
  .host,
  .panelist-photo img {
    transition: none;
  }
}

/* ===== PRIZES ===== */
.prize-grid {
  @apply mt-10 grid grid-cols-1 gap-5 md:grid-cols-2;
}

.prize-card {
  @apply rounded-2xl p-6 sm:p-8;
  border: 1.5px solid rgba(22, 7, 43, 0.1);
  background: linear-gradient(165deg, #ffffff 0%, #f6f1fb 100%);
  box-shadow: 0 12px 30px rgba(22, 7, 43, 0.06);
}

.prize-kicker {
  @apply font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-flux-cyan;
}

.prize-comp {
  @apply mt-1 font-bebas text-3xl leading-none text-flux-ink sm:text-4xl;
}

.prize-tiers {
  @apply mt-5 flex flex-col;
}

.prize-tiers li {
  @apply flex items-center justify-between py-3;
  border-top: 1px solid rgba(22, 7, 43, 0.08);
}

.prize-place {
  @apply flex items-center gap-x-3 font-urbanist text-base font-semibold text-flux-ink/80;
}

.medal {
  @apply inline-block h-3.5 w-3.5 flex-shrink-0 rounded-full;
}
.medal-gold { background: linear-gradient(180deg, #f5d36b, #e0a92e); }
.medal-silver { background: linear-gradient(180deg, #dfe3e8, #b6bcc6); }
.medal-bronze { background: linear-gradient(180deg, #e6a562, #c2763a); }

.prize-amount {
  @apply font-mono text-lg font-bold tracking-[0.2em] text-flux-ink/35;
}

.prize-foot {
  @apply mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between;
}

.prize-sealed {
  @apply inline-flex items-center gap-x-2 font-mono text-xs uppercase tracking-[0.12em] text-flux-ink/55;
}

.comp-more {
  @apply mt-5 inline-block font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-flux-cyan;
}

/* ===== HERO PORTAL (glowing globe emblem) ===== */
.hero-portal {
  position: relative;
  width: min(80vw, 400px);
  aspect-ratio: 1 / 1;
  margin: 0 auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
  overflow: hidden;
  border: 2px solid rgba(13, 198, 244, 0.5);
  background: radial-gradient(circle at 50% 42%, rgba(24, 12, 52, 0.55), rgba(10, 5, 24, 0.92));
  box-shadow:
    0 0 0 6px rgba(13, 198, 244, 0.05),
    0 0 55px rgba(13, 198, 244, 0.35),
    inset 0 0 55px rgba(13, 198, 244, 0.14);
}

.hero-portal-globe {
  position: absolute;
  inset: 7%;
  border-radius: 50%;
  background: url('/flux-globe.webp') center / cover no-repeat;
  opacity: 0.45;
  will-change: transform;
  animation: spin360 80s linear infinite;
}
.hero-portal.is-idle .hero-portal-globe {
  animation-play-state: paused;
}

.hero-portal::after {
  content: '';
  position: absolute;
  inset: 4.5%;
  border-radius: 50%;
  border: 1px solid rgba(13, 198, 244, 0.22);
  pointer-events: none;
}

.hero-portal-inner {
  @apply relative z-10 flex flex-col items-center text-center;
}

.portal-label {
  @apply font-mono text-[11px] uppercase tracking-[0.2em] text-flux-cyan;
}

.portal-num {
  @apply font-bebas leading-none text-white;
  font-size: clamp(68px, 15vw, 120px);
  text-shadow: 0 0 26px rgba(13, 198, 244, 0.55);
}

.portal-unit {
  @apply -mt-0.5 font-mono text-[13px] uppercase tracking-[0.3em] text-white/70;
}

.portal-clock {
  @apply mt-3 font-mono text-[15px] tracking-[0.14em] text-white/55;
}

.portal-date {
  @apply mt-1.5 font-mono text-[12px] uppercase tracking-[0.14em] text-flux-cyan;
}

@keyframes spin360 {
  to { transform: rotate(360deg); }
}

/* ===== HERO PILL + OUTLINE CTA ===== */
.hero-pill {
  @apply inline-flex items-center gap-x-2 rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white/80;
  border-color: rgba(13, 198, 244, 0.3);
  background: rgba(13, 198, 244, 0.06);
}

.pill-dot {
  @apply inline-block h-2 w-2 flex-shrink-0 rounded-full bg-flux-cyan;
  animation: pillPulse 2.2s ease-in-out infinite;
}

.pill-sep {
  @apply text-white/30;
}

@keyframes pillPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
}

.cta-outline {
  @apply inline-flex items-center justify-center rounded-full border px-7 py-3 font-mono text-sm font-bold uppercase tracking-[0.1em] text-white transition-all duration-200;
  border-color: rgba(255, 255, 255, 0.25);
}

.cta-outline:hover {
  border-color: rgba(13, 198, 244, 0.6);
  background: rgba(13, 198, 244, 0.08);
}

@media (prefers-reduced-motion: reduce) {
  .hero-portal-globe { animation: none; }
}

.press-label {
  @apply font-mono text-[11px] uppercase tracking-[0.16em] text-flux-cyan;
}
.press-logos {
  @apply mt-3 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 lg:justify-start;
}
.press-logos span {
  @apply inline-flex;
}
.fi-chip {
  @apply inline-flex overflow-hidden rounded-[10px];
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
.fi-chip img {
  @apply block h-9 w-auto sm:h-10;
}
.fi-marquee {
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}
.fi-track {
  display: flex;
  width: max-content;
  animation: logoSlide 26s linear infinite;
}
.fi-marquee:hover .fi-track,
.fi-marquee.is-idle .fi-track {
  animation-play-state: paused;
}
.fi-track {
  will-change: transform;
}
.fi-group {
  display: flex;
  align-items: center;
  gap: 36px;
  padding-right: 36px;
}
@keyframes logoSlide {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
@media (prefers-reduced-motion: reduce) {
  .fi-track { animation: none; }
}
.press-quote {
  @apply font-urbanist text-xl font-semibold leading-relaxed text-white sm:text-2xl;
}
.press-cite {
  @apply mt-4 font-mono text-sm uppercase tracking-[0.12em] text-flux-cyan;
}
.press-cite a {
  @apply underline;
}
</style>
