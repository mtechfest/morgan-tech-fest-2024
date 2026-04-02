<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LinkedinIcon from '@/components/icons/IconLinkedin.vue'
import TwitterIcon from '@/components/icons/IconTwitter.vue'
import InstagramIcon from '@/components/icons/IconInstagram.vue'
import GithubIcon from '@/components/icons/IconGithub.vue'
import DiscordIcon from '@/components/icons/IconDiscord.vue'
import FAQItem from '@/components/FAQItem.vue'
import { schedule, speakers, tracks, partners, FaqQuestionsAnswers } from '@/data/home'

// Countdown timer
const eventDate = new Date('2026-10-15T09:00:00') // Update with actual event date
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
  <div id="hero" class="hero-wrapper">
    <div class="hero-grain"></div>
    <div class="relative z-10 px-5 xs:px-8 lg:px-12 xl:px-16">
      <!-- Desktop -->
      <div class="hidden pb-24 pt-20 lg:block xl:pt-28 xl:pb-32">
        <div class="flex">
          <!-- Left spacer (robot area ~50%) -->
          <div class="w-[50%] flex-shrink-0 xl:w-[45%]"></div>
          <!-- Right content -->
          <div class="flex flex-col items-start text-left">
            <span class="hero-word animate-word-1">Discover</span>
            <span class="hero-word animate-word-2 text-[#F68F21]">Network</span>
            <span class="hero-word animate-word-3">Innovate</span>
            <p class="mt-6 max-w-md text-left font-urbanist text-lg leading-relaxed text-white/70">
              Empowering the next generation of technology leaders at Morgan State University.
            </p>
            <!-- Countdown -->
            <div class="mt-6">
              <span class="font-urbanist text-[10px] font-bold uppercase tracking-[0.25em] text-[#F68F21]">Event Countdown</span>
              <div class="mt-2 flex gap-x-6">
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
            <div class="mt-6 flex gap-x-10">
              <div>
                <span class="hero-label">Date</span>
                <p class="font-urbanist text-xl text-white">TBA</p>
              </div>
              <div>
                <span class="hero-label">Venue</span>
                <p class="font-urbanist text-xl text-white">Morgan State University</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 h-px w-full bg-white/10"></div>
      </div>

      <!-- Mobile / Tablet -->
      <div class="block pb-16 pt-10 sm:pb-20 sm:pt-14 lg:hidden">
        <div class="rounded-2xl bg-[#002a52]/80 px-6 py-10 backdrop-blur-sm">
          <div class="flex flex-col items-center gap-y-1">
            <span class="hero-word-mobile animate-word-1">Discover</span>
            <span class="hero-word-mobile animate-word-2 text-[#F68F21]">Network</span>
            <span class="hero-word-mobile animate-word-3">Innovate</span>
          </div>
          <p class="mx-auto mt-6 max-w-xs text-center font-urbanist text-base text-white/70 xs:text-lg">
            Empowering the next generation of technology leaders.
          </p>
          <!-- Mobile countdown -->
          <div class="mt-6 flex justify-center gap-x-4">
            <div class="countdown-block-sm">
              <span class="countdown-number-sm">{{ days }}</span>
              <span class="countdown-label-sm">Days</span>
            </div>
            <div class="countdown-block-sm">
              <span class="countdown-number-sm">{{ hours }}</span>
              <span class="countdown-label-sm">Hours</span>
            </div>
            <div class="countdown-block-sm">
              <span class="countdown-number-sm">{{ mins }}</span>
              <span class="countdown-label-sm">Mins</span>
            </div>
            <div class="countdown-block-sm">
              <span class="countdown-number-sm">{{ secs }}</span>
              <span class="countdown-label-sm">Secs</span>
            </div>
          </div>
          <div class="mt-8 flex justify-center gap-x-8">
            <div class="text-center">
              <span class="hero-label">Date</span>
              <p class="font-urbanist text-lg text-white">TBA</p>
            </div>
            <div class="text-center">
              <span class="hero-label">Venue</span>
              <p class="font-urbanist text-lg text-white">Morgan State University</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ===================== ABOUT (with Video) ===================== -->
  <div class="bg-[#FEF8F0] px-5 pb-10 pt-10 xs:px-8 md:pb-16 md:pt-14" id="about">
    <div class="mx-auto max-w-6xl">
      <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <!-- Left: About text -->
        <div>
          <span class="section-label">About Morgan TechFest</span>
          <p class="mt-4 font-urbanist text-xl leading-relaxed text-[#121139] xs:text-2xl md:text-2xl md:leading-relaxed">
            Morgan TechFest is a platform for discovery, innovation, and collaboration, empowering
            the next generation of technology leaders while supporting student development and enabling
            career path discovery in technology-driven fields.
          </p>
          <p class="mt-4 font-urbanist text-base leading-relaxed text-[#121139]/60 xs:text-lg">
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
  <div class="overflow-hidden bg-[#FEF8F0] px-5 pb-14 pt-10 xs:px-8 md:pb-20 md:pt-14" id="speakers">
    <div class="mx-auto max-w-6xl">
      <div class="text-center">
        <span class="section-label">Past Speakers & Guests</span>
        <h2 class="mt-3 font-bebas text-5xl font-normal text-[#121139] xs:text-6xl sm:text-7xl">Featured Voices</h2>
      </div>
    </div>

    <!-- Scrolling marquee -->
    <div class="speaker-marquee mt-10 md:mt-14">
      <div class="speaker-track">
        <template v-for="item in speakers" :key="item.name + '-1'">
          <div class="speaker-card">
            <div class="speaker-img-wrap">
              <img :src="item.img" :alt="item.name" class="speaker-img" />
            </div>
            <p class="speaker-name">{{ item.name }}</p>
          </div>
        </template>
        <!-- Duplicate for seamless loop -->
        <template v-for="item in speakers" :key="item.name + '-2'">
          <div class="speaker-card">
            <div class="speaker-img-wrap">
              <img :src="item.img" :alt="item.name" class="speaker-img" />
            </div>
            <p class="speaker-name">{{ item.name }}</p>
          </div>
        </template>
      </div>
    </div>
  </div>

  <!-- ===================== CORE COMPONENTS ===================== -->
  <div class="bg-morgan-blue px-5 pb-16 pt-16 xs:px-8 md:pb-28 md:pt-24" id="components">
    <div class="mx-auto max-w-6xl">
      <span class="section-label-light">What We Do</span>
      <h2 class="mt-3 font-bebas text-5xl font-normal text-white xs:text-6xl sm:text-7xl">Core Components</h2>

      <div class="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
        <!-- Tech Case Competition -->
        <div class="comp-card group">
          <span class="comp-number">01</span>
          <h3 class="comp-title">Tech Case Competition</h3>
          <p class="comp-text">
            Student teams tackle real-world AI and technology challenges, developing strategic
            solutions evaluated by faculty, researchers, and industry professionals.
          </p>
          <div class="mt-5 flex flex-wrap gap-2">
            <template v-for="track in tracks" :key="track">
              <span class="track-tag">{{ track }}</span>
            </template>
          </div>
        </div>

        <!-- Innovation Expo -->
        <div class="comp-card group">
          <span class="comp-number">02</span>
          <h3 class="comp-title">Innovation Expo</h3>
          <p class="comp-subtitle">Research & Project Showcase</p>
          <p class="comp-text">
            Students showcase research projects, engineering prototypes, and AI solutions.
            Participants compete for awards judged by academic experts and industry professionals.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- ===================== SCHEDULE ===================== -->
  <div class="bg-morgan-blue px-5 pb-16 pt-16 xs:px-8 md:pb-28 md:pt-24" id="schedule">
    <div class="mx-auto max-w-6xl">
      <span class="section-label-light">The Event</span>
      <h2 class="mt-3 font-bebas text-5xl font-normal text-white xs:text-6xl sm:text-7xl">Schedule</h2>

      <div class="mt-8 grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-3 md:mt-14 lg:grid-cols-5 lg:gap-4">
        <template v-for="item in schedule" :key="item">
          <span class="sched-pill">{{ item }}</span>
        </template>
      </div>

      <div class="mt-10 flex justify-center md:mt-14">
        <a
          href="/schedule.html"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-btn"
          >Check Full Schedule
        </a>
      </div>
    </div>
  </div>

  <!-- ===================== PARTNERS ===================== -->
  <div class="bg-[#FEF8F0] px-5 pb-16 pt-16 xs:px-8 md:pb-28 md:pt-24" id="partners">
    <div class="mx-auto max-w-6xl">
      <span class="section-label">Our</span>
      <h2 class="mt-3 font-bebas text-5xl font-normal text-[#121139] xs:text-6xl sm:text-7xl">Partners</h2>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-8 md:mt-16 lg:gap-16">
        <template v-for="item in partners" :key="item.name">
          <img :src="item.img" :alt="item.name" class="h-10 max-w-[120px] object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-14 sm:max-w-[140px]" />
        </template>
      </div>
    </div>
  </div>

  <!-- ===================== AWARDS ===================== -->
  <div class="bg-morgan-blue px-5 pb-16 pt-16 xs:px-8 md:pb-28 md:pt-24" id="awards">
    <div class="mx-auto max-w-6xl">
      <div class="mx-auto max-w-3xl text-center">
        <span class="section-label-light">Highlights</span>
        <h2 class="mt-3 font-bebas text-5xl font-normal text-white xs:text-6xl sm:text-7xl">Celebrating Innovation and Excellence</h2>
        <p class="mt-6 font-urbanist text-base leading-relaxed text-white/60 xs:text-lg md:text-xl">
          Morgan TechFest 2024 recognized standout projects and individuals through its Award Ceremony, emphasizing innovation and problem-solving in tech.
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
  <div class="bg-morgan-blue px-5 pb-12 pt-16 xs:px-8 md:pb-20 md:pt-24">
    <div class="mx-auto max-w-6xl text-center">
      <span class="section-label-light">Moments</span>
      <h2 class="mt-3 font-bebas text-5xl font-normal text-white xs:text-6xl sm:text-7xl">Gallery</h2>

      <div class="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:gap-6">
        <img
          src="https://res.cloudinary.com/ojay-dev/image/upload/v1693949821/MorganTechFest/gallery/_PAG0547_1_1_z7ffvg.png"
          alt="gallery"
          class="w-full rounded-xl object-cover sm:rounded-2xl"
        />
        <img
          src="https://res.cloudinary.com/ojay-dev/image/upload/v1693912317/MorganTechFest/gallery/_PAG05472_b2x7ra.png"
          alt="gallery"
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
        <p class="font-urbanist text-sm text-white/40">Morgan TechFest &middot; Morgan State University</p>
        <div class="flex gap-x-4">
          <a href="https://www.linkedin.com/company/morgan-techfest/" target="_blank" rel="noopener noreferrer" class="social-link"><LinkedinIcon /></a>
          <a href="https://twitter.com/MorganTechFest" target="_blank" rel="noopener noreferrer" class="social-link"><TwitterIcon /></a>
          <a href="https://www.instagram.com/morgantechfest/" target="_blank" rel="noopener noreferrer" class="social-link"><InstagramIcon /></a>
          <a href="https://github.com/morgantechfest" target="_blank" rel="noopener noreferrer" class="social-link"><GithubIcon /></a>
          <a href="https://www.discord.com/channels/morgantechfest" target="_blank" rel="noopener noreferrer" class="social-link"><DiscordIcon /></a>
        </div>
      </div>
    </div>
    <div class="h-10"></div>
  </div>
</template>

<style scoped>
/* ===== HERO ===== */
.hero-wrapper {
  @apply relative overflow-hidden;
  background-color: #002a52;
  background-image: url('/backg.png');
  background-size: cover;
  background-position: left center;
  background-repeat: no-repeat;
}

.hero-grain {
  @apply pointer-events-none absolute inset-0 z-0 opacity-[0.03];
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

.hero-word {
  @apply block font-bebas text-[88px] font-normal leading-[0.9] text-white xl:text-[112px] 3xl:text-[130px];
}

.hero-word-mobile {
  @apply block text-center font-bebas text-[56px] font-normal leading-[0.9] text-white xs:text-[68px] sm:text-[88px];
}

.hero-label {
  @apply mb-1 block font-urbanist text-xs font-bold uppercase tracking-[0.2em] text-[#F68F21];
}

/* Hero stagger animation */
.animate-word-1 { animation: fadeSlideUp 0.7s ease both; animation-delay: 0.1s; }
.animate-word-2 { animation: fadeSlideUp 0.7s ease both; animation-delay: 0.25s; }
.animate-word-3 { animation: fadeSlideUp 0.7s ease both; animation-delay: 0.4s; }

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ===== SECTION LABELS ===== */
.section-label {
  @apply block font-urbanist text-xs font-bold uppercase tracking-[0.25em] text-[#F68F21] sm:text-sm;
}

.section-label-light {
  @apply block font-urbanist text-xs font-bold uppercase tracking-[0.25em] text-[#F68F21]/80 sm:text-sm;
}

/* ===== VIDEO (inline in about) ===== */
.video-container-inline {
  @apply relative h-0 w-full pb-[56.25%];
}

.video-container-inline iframe {
  @apply absolute left-0 top-0 h-full w-full rounded-xl sm:rounded-2xl;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

/* ===== COUNTDOWN ===== */
.countdown-block {
  @apply flex flex-col items-center;
}

.countdown-number {
  @apply font-bebas text-6xl text-white xl:text-7xl;
  text-shadow: 0 0 20px rgba(246, 143, 33, 0.3);
}

.countdown-label {
  @apply mt-1 font-urbanist text-xs font-bold uppercase tracking-[0.15em] text-white/50;
}

.countdown-block-sm {
  @apply flex flex-col items-center;
}

.countdown-number-sm {
  @apply font-bebas text-4xl text-white;
  text-shadow: 0 0 15px rgba(246, 143, 33, 0.3);
}

.countdown-label-sm {
  @apply mt-0.5 font-urbanist text-[10px] font-bold uppercase tracking-[0.15em] text-white/50;
}

/* ===== COMPONENT CARDS ===== */
.comp-card {
  @apply relative rounded-2xl px-5 pb-6 pt-8 transition-transform duration-300 xs:px-6 sm:rounded-3xl sm:px-8 sm:pb-8 sm:pt-10;
  border: 1.5px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%);
}

.comp-card:hover {
  transform: translateY(-4px);
  border-color: rgba(246, 143, 33, 0.2);
}

.comp-number {
  @apply font-bebas text-5xl text-[#F68F21]/30 sm:text-6xl;
}

.comp-title {
  @apply mt-1 font-bebas text-3xl text-white sm:text-4xl lg:text-5xl;
}

.comp-subtitle {
  @apply -mt-0.5 font-urbanist text-base text-white/40 sm:text-lg;
}

.comp-text {
  @apply mt-3 font-urbanist text-base leading-relaxed text-white/60 sm:text-lg;
}

.track-tag {
  @apply rounded-full px-4 py-1.5 font-urbanist text-xs font-semibold text-white/80 sm:text-sm;
  border: 1px solid rgba(246, 143, 33, 0.35);
  background: rgba(246, 143, 33, 0.08);
}

/* ===== SCHEDULE PILLS ===== */
.sched-pill {
  @apply flex min-h-[56px] items-center justify-center rounded-full px-4 py-2.5 text-center font-urbanist text-sm font-semibold text-white sm:min-h-[64px] sm:text-base lg:min-h-[72px] lg:text-lg;
  border: 1.5px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  transition: border-color 0.2s, background 0.2s;
}

.sched-pill:hover {
  border-color: rgba(246, 143, 33, 0.4);
  background: rgba(246, 143, 33, 0.06);
}

/* ===== BUTTONS ===== */
.cta-btn {
  @apply inline-block rounded-full border-2 border-[#F68F21] px-7 py-3 font-urbanist text-sm font-semibold text-[#F68F21] transition-all duration-200 hover:bg-[#F68F21] hover:text-white sm:px-9 sm:py-4 sm:text-base;
}

/* ===== SOCIAL LINKS ===== */
.social-link {
  @apply block rounded-lg border border-white/10 px-2.5 py-2.5 transition-colors duration-200 hover:border-[#F68F21]/40;
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
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
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
  border: 3px solid rgba(246, 143, 33, 0.2);
  transition: border-color 0.3s, transform 0.3s;
}

.speaker-card:hover .speaker-img-wrap {
  border-color: #F68F21;
  transform: scale(1.05);
}

.speaker-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.speaker-name {
  @apply text-center font-urbanist text-sm font-semibold text-[#121139];
  line-height: 1.3;
}
</style>
