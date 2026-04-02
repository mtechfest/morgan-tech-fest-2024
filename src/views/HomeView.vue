<script setup>
import MessageIcon from '@/components/icons/IconMessage.vue'
import TwitterIcon from '@/components/icons/IconTwitter.vue'
import InstagramIcon from '@/components/icons/IconInstagram.vue'
import GithubIcon from '@/components/icons/IconGithub.vue'
import DiscordIcon from '@/components/icons/IconDiscord.vue'
import FAQItem from '@/components/FAQItem.vue'
import { schedule, tracks, studentValues, panelist, recruitPanels, partners, FaqQuestionsAnswers } from '@/data/home'
</script>

<template>
  <!-- ===================== HERO ===================== -->
  <div id="hero">
    <!-- Desktop hero -->
    <div class="hidden bg-morgan-blue pt-14 lg:block lg:pb-[100px]">
      <div class="mx-auto px-6 lg:max-w-5xl lg:px-0 3xl:max-w-screen-lg 4xl:max-w-screen-xl">
        <div class="hero-grid-desktop">
          <span class="hero-text-desktop">Discover</span>
          <span class="hero-text-desktop text-right">Network</span>
        </div>

        <div class="hero-grid-desktop mt-2 items-end 3xl:mt-4">
          <span class="hero-text-desktop">Innovate</span>

          <div class="flex justify-end gap-x-10">
            <div class="max-w-[163px]">
              <span class="font-urbanist text-base font-black uppercase text-[#F68F21]">Date:</span>
              <p class="font-urbanist text-[22px] text-white">TBA</p>
            </div>
            <div class="max-w-[163px]">
              <span class="font-urbanist text-base font-black uppercase text-[#F68F21]">Venue:</span>
              <p class="font-urbanist text-[22px] text-white">Morgan State University.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile / Tablet hero -->
    <div class="block bg-morgan-blue pb-16 pt-8 sm:pb-20 lg:hidden">
      <div class="px-4 xs:px-6">
        <div class="flex flex-col items-center gap-y-2">
          <span class="hero-text-mobile">Discover</span>
          <span class="hero-text-mobile">Network</span>
          <span class="hero-text-mobile">Innovate</span>

          <div class="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-4">
            <div>
              <span class="font-urbanist text-sm font-black uppercase text-[#F68F21] xs:text-base">Date:</span>
              <p class="font-urbanist text-lg text-white xs:text-[22px]">TBA</p>
            </div>
            <div>
              <span class="font-urbanist text-sm font-black uppercase text-[#F68F21] xs:text-base">Venue:</span>
              <p class="font-urbanist text-lg text-white xs:text-[22px]">Morgan State University.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ===================== VIDEO ===================== -->
  <div class="video-section">
    <div class="lg:mx-auto lg:max-w-5xl 3xl:max-w-screen-lg 4xl:max-w-screen-xl">
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/rbUvsSZRNnI?si=kidkUFrEuH_m1Yu1"
          title="Networking Session"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>

  <!-- ===================== ABOUT ===================== -->
  <div class="bg-[#FEF8F0] px-4 pb-16 pt-4 xs:px-6 md:pb-[174px]" id="about">
    <div class="lg:mx-auto lg:max-w-5xl 3xl:max-w-screen-2xl 4xl:max-w-screen-3xl">
      <div class="flex flex-col items-center gap-x-9 gap-y-4 md:flex-row md:justify-center">
        <h2 class="section-title-dark w-full">About Us</h2>
        <p class="max-w-[626px] font-urbanist text-lg font-normal xs:text-xl">
          An annual technology innovation platform hosted by Morgan State University.
        </p>
      </div>
    </div>

    <div class="mt-8 xs:mt-11 lg:mx-auto lg:max-w-5xl 3xl:max-w-screen-lg 4xl:max-w-screen-xl">
      <div class="flex flex-col items-center gap-x-12 gap-y-8 md:flex-row md:gap-y-12">
        <p class="text-justify font-urbanist text-base font-normal xs:text-lg md:w-1/2 md:text-xl">
          Morgan TechFest brings together students, faculty, and the broader academic community to solve
          real-world technology challenges, showcase cutting-edge research, and foster meaningful
          innovation and collaboration.

          <br /><br />
          At its core, Morgan TechFest bridges the gap between academic learning and real-world
          application through a dual structure: the <strong>Tech Case Competition</strong> and the
          <strong>Innovation Expo</strong> (Research & Project Showcase Competition).

          <br /><br />
          Morgan TechFest is a platform for discovery, innovation, and collaboration — empowering the
          next generation of technology leaders while supporting student development and enabling
          career path discovery in technology-driven fields.

          <br /><br />
          Open to students from Morgan State University and other institutions, Morgan TechFest
          encourages collaboration across schools, diverse perspectives, and increased visibility
          of student innovation.
        </p>

        <div class="md:w-1/2">
          <img
            src="https://res.cloudinary.com/ojay-dev/image/upload/v1693949804/MorganTechFest/gallery/DYO_0087_websize_1_svatmt.png"
            alt="conference"
            class="w-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- ===================== CORE COMPONENTS ===================== -->
  <div class="bg-morgan-blue px-4 pb-12 pt-10 xs:px-6 sm:pb-16 sm:pt-12 lg:pb-[140px] lg:pt-[112px]" id="components">
    <div class="lg:mx-auto lg:max-w-5xl 4xl:max-w-screen-xl">
      <h2 class="section-title mx-auto">Core Components</h2>

      <div class="mt-8 grid grid-cols-1 gap-6 sm:mt-10 md:grid-cols-2 lg:mt-20 lg:gap-12">
        <!-- Tech Case Competition -->
        <div class="component-card">
          <div class="component-card-number">01</div>
          <h3 class="component-card-title">Tech Case Competition</h3>
          <p class="component-card-text">
            Real-world AI/technology problem statements are designed to reflect current societal and
            technological challenges. Student teams analyse and develop strategic, innovative solutions
            evaluated by a multidisciplinary panel, including faculty, researchers, and industry professionals.
          </p>
          <div class="mt-4 sm:mt-6">
            <span class="font-urbanist text-xs font-bold uppercase tracking-wider text-[#F68F21] sm:text-sm">Solution Tracks</span>
            <div class="mt-2 flex flex-wrap gap-2 sm:mt-3">
              <template v-for="track in tracks" :key="track">
                <span class="track-pill">{{ track }}</span>
              </template>
            </div>
          </div>
          <div class="outcome-box">
            <span class="font-urbanist text-xs font-bold uppercase tracking-wider text-[#F68F21] sm:text-sm">Outcome</span>
            <p class="mt-1 font-urbanist text-xs font-normal text-gray-300 sm:text-sm">
              Students gain hands-on experience solving real-world challenges while building
              portfolio-ready work and strengthening their problem-solving and analytical skills.
            </p>
          </div>
        </div>

        <!-- Innovation Expo -->
        <div class="component-card">
          <div class="component-card-number">02</div>
          <h3 class="component-card-title">Innovation Expo</h3>
          <p class="component-card-subtitle">(Research & Project Showcase Competition)</p>
          <p class="component-card-text">
            Students showcase research projects, engineering prototypes, and AI/technology solutions.
            Participants compete for awards and recognition judged by a panel of graduate students,
            faculty members, academic experts, and industry professionals.
          </p>
          <div class="outcome-box">
            <span class="font-urbanist text-xs font-bold uppercase tracking-wider text-[#F68F21] sm:text-sm">Outcome</span>
            <p class="mt-1 font-urbanist text-xs font-normal text-gray-300 sm:text-sm">
              Provides visibility for student innovation, promotes applied research with real-world
              impact, and reinforces the connection between academic work and practical applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ===================== STUDENT VALUE PROPOSITION ===================== -->
  <div class="bg-[#FEF8F0] px-4 pb-12 pt-10 xs:px-6 sm:pb-16 sm:pt-14 lg:pb-[140px] lg:pt-[100px]" id="value">
    <div class="lg:mx-auto lg:max-w-5xl 4xl:max-w-screen-xl">
      <h2 class="section-title-dark mx-auto">What You Gain</h2>
      <p class="mx-auto mt-3 max-w-2xl text-center font-urbanist text-base font-normal text-gray-600 xs:text-lg sm:mt-4 md:text-xl">
        Morgan TechFest equips students with the skills, experience, and connections to thrive
        in technology-driven fields.
      </p>

      <div class="mt-8 grid grid-cols-1 gap-4 xs:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
        <template v-for="item in studentValues" :key="item.title">
          <div class="value-card">
            <h4 class="font-bebas text-xl font-normal text-[#121139] sm:text-2xl">{{ item.title }}</h4>
            <p class="mt-1 font-urbanist text-sm font-normal text-gray-600 sm:mt-2 sm:text-base">{{ item.description }}</p>
          </div>
        </template>
      </div>
    </div>
  </div>

  <!-- ===================== SCHEDULE ===================== -->
  <div class="bg-morgan-blue px-4 pb-12 pt-10 xs:px-6 sm:pb-16 sm:pt-12 lg:pb-[239px] lg:pt-[112px]" id="schedule">
    <div class="lg:mx-auto lg:max-w-5xl 4xl:max-w-screen-xl">
      <h2 class="section-title mx-auto">schedule</h2>

      <div class="mt-6 grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 sm:gap-6 md:mt-12 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-8">
        <template v-for="item in schedule" :key="item">
          <span class="schedule-pill">{{ item }}</span>
        </template>
      </div>

      <div class="mt-10 flex justify-center sm:mt-14 lg:mt-16">
        <a
          href="https://drive.google.com/file/d/19I9O3YuLNebegV23h7Z6oSua8dEuOGfI/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-link"
          >Check full schedule here
        </a>
      </div>

      <div class="mt-16 sm:mt-24 lg:mt-40" id="speakers">
        <h2 class="section-title mx-auto">speakers</h2>

        <div
          class="mt-6 flex flex-col items-center justify-center gap-x-8 gap-y-6 lg:mt-24 lg:flex-row 4xl:justify-between"
        >
          <div class="speaker-img-container">
            <img
              src="https://res.cloudinary.com/ojay-dev/image/upload/v1694032777/MorganTechFest/speakers/hongtao-yu_xumojr.jpg"
              alt="Dr. Hongtao Yu"
              class="h-full w-full object-cover"
            />
            <span class="speaker-name">Prov. Dr. Hongtao Yu</span>
          </div>

          <div class="speaker-img-container">
            <img
              src="https://res.cloudinary.com/ojay-dev/image/upload/v1700029935/MorganTechFest/speakers/Patrice_Barnes_fwbin6.jpg"
              alt="Patrice Barnes"
              class="h-full w-full object-cover"
            />
            <span class="speaker-name">Patrice Barnes</span>
          </div>
        </div>
      </div>

      <div class="mt-16 sm:mt-24 lg:mt-40">
        <h2 class="section-title mx-auto">Panelists/Judges</h2>

        <div class="panelist-section">
          <template v-for="item in panelist" :key="item.name">
            <img :src="item.img" :alt="item.name" class="panelist-img"
          /></template>
        </div>
      </div>

      <div class="mt-16 sm:mt-24 lg:mt-40">
        <h2 class="section-title mx-auto">Recruiter's Panel</h2>

        <div class="panelist-section">
          <template v-for="item in recruitPanels" :key="item.name">
            <img :src="item.img" :alt="item.name" class="panelist-img"
          /></template>
        </div>
      </div>
    </div>
  </div>

  <!-- ===================== SPONSORS ===================== -->
  <div
    class="px-4 pb-12 pt-10 xs:px-6 sm:pb-16 sm:pt-14 lg:mx-auto lg:max-w-5xl lg:px-0 lg:pb-52 lg:pt-40 4xl:max-w-screen-xl"
    id="sponsors"
  >
    <h2 class="section-title-dark mx-auto">Sponsors</h2>

    <div class="mt-10 flex flex-col items-center gap-y-10 sm:mt-20 lg:gap-y-24">
      <div class="flex w-full justify-center md:w-4/5 4xl:w-full">
        <img
          src="https://res.cloudinary.com/ojay-dev/image/upload/v1693912316/MorganTechFest/sponsors/gold_sponsor_efuamu.svg"
          alt="Bloomberg"
          class="max-w-full md:w-4/5 4xl:w-full"
        />
      </div>

      <div class="w-full 4xl:w-full">
        <img
          src="https://res.cloudinary.com/ojay-dev/image/upload/v1700027733/MorganTechFest/sponsors/Silver_Sponsor_fqwafo.svg"
          alt="HBCU"
          class="max-w-full 4xl:mx-auto 4xl:w-[80%]"
        />
      </div>
    </div>

    <div
      class="mt-8 rounded-[20px] bg-[#313036] px-4 pb-8 pt-8 sm:mt-11 sm:rounded-[27px] sm:pb-10 sm:pt-12 lg:mt-32 lg:rounded-[36px] lg:pl-24 lg:pr-16"
    >
      <p class="font-urbanist text-sm font-normal text-white xs:text-base lg:text-xl">
        Morgan TechFest provides an outstanding platform to attract accomplished students,
        developers, and researchers, elevate brand visibility, and explore pioneering technological
        research. We present a diverse array of methods to support you in refining your engagement
        and realizing your goals.
      </p>

      <p class="mt-6 font-urbanist text-sm font-bold text-white xs:text-base sm:mt-9 lg:mt-[60px] lg:text-xl">
        Learn more about the opportunity to become a Platinum sponsor or explore other available
        sponsorship tiers for the upcoming event. Please send an email to:
        <a href="mailto:morgantechfest@gmail.com" target="_blank" rel="noopener noreferrer"
          class="break-all underline">morgantechfest@gmail.com</a
        > /
        <a href="mailto:sewil16@morgan.edu" target="_blank" rel="noopener noreferrer"
          class="break-all underline">sewil16@morgan.edu</a
        >
      </p>

      <div class="mt-8 flex justify-center sm:mt-14 lg:mt-16">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdY4ck5YX9NmUqldB8Cw-9tjsrqo37z8GoQ_1XzNDYvaA8DHQ/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-link"
          >Become a Sponsor
        </a>
      </div>
    </div>

    <div class="mt-12 sm:mt-[84px] lg:mt-[158px]">
      <h2 class="section-title-dark mx-auto">Partners</h2>

      <div
        class="mt-5 grid grid-cols-2 items-center justify-center gap-x-6 gap-y-8 xs:gap-x-9 xs:gap-y-10 md:flex md:flex-wrap lg:mt-[78px] lg:gap-x-[128px] lg:gap-y-16"
      >
        <template v-for="item in partners" :key="item.name">
          <div class="flex w-fit items-center justify-center">
            <img :src="item.img" :alt="item.name" class="max-h-16 max-w-full object-contain sm:max-h-20" />
          </div>
        </template>
      </div>
    </div>
  </div>

  <!-- ===================== GALLERY ===================== -->
  <div class="bg-morgan-blue px-4 pb-12 pt-12 xs:px-6 sm:pb-20 sm:pt-[86px] lg:pb-11 lg:pt-32">
    <div class="lg:mx-auto lg:max-w-5xl 4xl:max-w-screen-xl">
      <h2 class="section-title mx-auto">gallery</h2>

      <div class="mt-7">
        <div class="hidden gap-x-4 overflow-auto md:flex md:justify-center lg:gap-x-7">
          <div class="flex-shrink-0 md:flex-shrink">
            <img
              src="https://res.cloudinary.com/ojay-dev/image/upload/v1693949821/MorganTechFest/gallery/_PAG0547_1_1_z7ffvg.png"
              alt="gallery"
              class="max-w-full rounded-2xl"
            />
          </div>

          <div class="flex-shrink-0 md:flex-shrink">
            <img
              src="https://res.cloudinary.com/ojay-dev/image/upload/v1693912317/MorganTechFest/gallery/_PAG05472_b2x7ra.png"
              alt="gallery"
              class="max-w-full rounded-2xl"
            />
          </div>
        </div>

        <div class="flex gap-x-4 overflow-auto md:hidden lg:gap-x-7">
          <img
            src="https://res.cloudinary.com/ojay-dev/image/upload/v1693949821/MorganTechFest/gallery/_PAG0547_1_1_z7ffvg.png"
            alt="gallery"
            class="w-[85vw] max-w-[400px] flex-shrink-0 rounded-xl"
          />

          <img
            src="https://res.cloudinary.com/ojay-dev/image/upload/v1693912317/MorganTechFest/gallery/_PAG05472_b2x7ra.png"
            alt="gallery"
            class="w-[85vw] max-w-[400px] flex-shrink-0 rounded-xl"
          />
        </div>

        <div class="mt-8 flex justify-center sm:mt-14 lg:mt-16">
          <a
            href="https://seethroughmylens.pixieset.com/morgantechfest/"
            target="_blank"
            rel="noopener noreferrer"
            class="cta-link"
            >View album
          </a>
        </div>
      </div>
    </div>

    <!-- ===================== FAQ ===================== -->
    <div class="mt-12 sm:mt-16 lg:mx-auto lg:mt-44 lg:max-w-5xl 4xl:max-w-screen-xl" id="faq">
      <h2 class="section-title mx-auto">FAQ</h2>

      <div class="mt-4 sm:mt-5 lg:mt-6" v-for="item in FaqQuestionsAnswers" :key="item.question">
        <FAQItem :question="item.question" :answer="item.answer" />
      </div>
    </div>

    <!-- ===================== SOCIAL LINKS ===================== -->
    <div class="mx-auto mt-12 flex flex-wrap justify-center gap-3 sm:mt-[84px] 3xl:max-w-sm 3xl:justify-around">
      <a
        href="mailto:morgantechfest@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        class="block border border-[#D6D6D6] px-2 py-[14px]"
        ><MessageIcon
      /></a>

      <a
        href="https://twitter.com/MorganTechFest"
        target="_blank"
        rel="noopener noreferrer"
        class="block border border-[#D6D6D6] px-2 py-[14px]"
        ><TwitterIcon
      /></a>

      <a
        href="https://www.instagram.com/morgantechfest/"
        target="_blank"
        rel="noopener noreferrer"
        class="block border border-[#D6D6D6] px-2 py-[14px]"
        ><InstagramIcon
      /></a>

      <a
        href="https://github.com/morgantechfest"
        target="_blank"
        rel="noopener noreferrer"
        class="block border border-[#D6D6D6] px-2 py-[14px]"
        ><GithubIcon
      /></a>

      <a
        href="https://www.discord.com/channels/morgantechfest"
        target="_blank"
        rel="noopener noreferrer"
        class="block border border-[#D6D6D6] px-2 py-[14px]"
        ><DiscordIcon
      /></a>
    </div>
  </div>
</template>

<style scoped>
/* ===== HERO ===== */
.hero-grid-desktop {
  @apply grid grid-cols-2 items-center gap-x-8 3xl:mb-6;
}

.hero-text-desktop {
  @apply block font-bebas text-[96px] font-normal text-white xl:text-[112px] 3xl:text-[128px];
}

.hero-text-mobile {
  @apply block text-center font-bebas text-6xl font-normal text-white xs:text-7xl sm:text-8xl;
}

/* ===== SECTION TITLES ===== */
.section-title {
  @apply block text-center font-bebas text-5xl font-normal text-white xs:text-6xl sm:text-7xl md:text-8xl lg:text-[112px];
}

.section-title-dark {
  @apply block text-center font-bebas text-5xl font-normal text-[#121139] xs:text-6xl sm:text-7xl md:text-8xl lg:text-[112px];
}

/* ===== VIDEO ===== */
.video-section {
  @apply relative px-4 pb-6 xs:px-6 lg:px-0 lg:pb-[100px] lg:pt-20;
  background: linear-gradient(to bottom, #004583 0%, #004583 40%, #fef8f0 40%, #fef8f0 100%);
}

.video-container {
  @apply relative h-0 w-full pb-[56.25%];
}

.video-container iframe {
  @apply absolute left-0 top-0 h-full w-full rounded-xl sm:rounded-[30px];
}

/* ===== SCHEDULE PILLS ===== */
.schedule-pill {
  @apply flex min-h-[64px] items-center justify-center rounded-[73px] px-4 py-3 text-center font-urbanist text-base font-bold text-white sm:px-6 sm:text-lg lg:min-h-[96px] lg:text-2xl;
  border: 3px solid rgba(255, 255, 255, 0.2);
  background: linear-gradient(
      136deg,
      rgba(177, 177, 177, 0.32) 5.24%,
      rgba(54, 53, 103, 0.2) 51.01%
    ),
    rgba(49, 48, 54, 0.3);
  backdrop-filter: blur(3.297909736633301px);
}

/* ===== CTA LINKS ===== */
.cta-link {
  @apply flex items-center justify-center gap-x-4 rounded-[44px] border-2 border-white px-5 py-3 text-center font-urbanist text-base font-semibold text-white hover:text-white sm:px-6 sm:py-4 sm:text-lg md:text-2xl lg:border-0 lg:py-6 lg:text-3xl;
}

/* ===== SPEAKERS ===== */
.speaker-img-container {
  @apply relative h-[280px] w-full max-w-[328px] overflow-hidden rounded-2xl xs:h-[320px] sm:h-[375px] sm:rounded-3xl;
}

.speaker-img-container::before {
  @apply absolute left-0 top-0 h-full w-full rounded-2xl sm:rounded-3xl;
  content: '';
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 9.19%, rgba(0, 0, 0, 0) 34.63%);
}

.speaker-name {
  @apply absolute bottom-4 left-6 z-10 font-bebas text-xl font-normal text-white sm:bottom-6 sm:left-10 sm:text-2xl;
}

/* ===== PANELISTS ===== */
.panelist-section {
  @apply mt-6 flex gap-x-4 gap-y-6 overflow-x-auto sm:gap-x-5 sm:gap-y-9 lg:mt-24;
}

.panelist-img {
  @apply relative block h-[220px] w-[180px] flex-shrink-0 rounded-xl object-cover object-center xs:h-[260px] xs:w-[220px] sm:h-[300px] sm:w-[263px] sm:rounded-2xl;
}

/* ===== CORE COMPONENT CARDS ===== */
.component-card {
  @apply relative rounded-xl px-4 pb-6 pt-8 xs:rounded-2xl xs:px-5 sm:rounded-[27px] sm:px-6 sm:pb-8 sm:pt-10 lg:px-8 lg:pb-10 lg:pt-12;
  border: 2px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(
      155deg,
      rgba(177, 177, 177, 0.15) 0%,
      rgba(54, 53, 103, 0.12) 50%
    ),
    rgba(49, 48, 54, 0.35);
  backdrop-filter: blur(6px);
}

.component-card-number {
  @apply font-bebas text-4xl font-normal text-[#F68F21] opacity-40 sm:text-5xl lg:text-6xl;
}

.component-card-title {
  @apply mt-1 font-bebas text-2xl font-normal text-white sm:mt-2 sm:text-3xl lg:text-4xl;
}

.component-card-subtitle {
  @apply font-urbanist text-sm font-medium text-gray-400 sm:text-base;
}

.component-card-text {
  @apply mt-3 font-urbanist text-sm font-normal leading-relaxed text-gray-300 sm:mt-4 sm:text-base;
}

.track-pill {
  @apply inline-block rounded-full px-2.5 py-1 font-urbanist text-[11px] font-semibold text-white sm:px-3 sm:text-xs;
  border: 1.5px solid rgba(246, 143, 33, 0.5);
  background: rgba(246, 143, 33, 0.12);
}

.outcome-box {
  @apply mt-4 rounded-lg bg-[rgba(255,255,255,0.05)] px-3 py-2.5 sm:mt-6 sm:rounded-xl sm:px-4 sm:py-3;
}

/* ===== STUDENT VALUE CARDS ===== */
.value-card {
  @apply rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm transition-shadow duration-200 hover:shadow-md sm:rounded-2xl sm:px-6 sm:py-6;
}
</style>
