<script setup>
// Same markup and class names as the footer block in the static pages under
// /public; the styles live in /public/site-footer.css (linked from index.html)
// so both render identically. Change one, change the other.
import LinkedinIcon from '@/components/icons/IconLinkedin.vue'
import TwitterIcon from '@/components/icons/IconTwitter.vue'
import InstagramIcon from '@/components/icons/IconInstagram.vue'
import GithubIcon from '@/components/icons/IconGithub.vue'
import DiscordIcon from '@/components/icons/IconDiscord.vue'
import { footerLinks } from '@/data/home'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/morgan-techfest/', icon: LinkedinIcon },
  { label: 'X', href: 'https://twitter.com/MorganTechFest', icon: TwitterIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/morgantechfest/', icon: InstagramIcon },
  { label: 'GitHub', href: 'https://github.com/morgantechfest', icon: GithubIcon },
  { label: 'Discord', href: 'https://www.discord.com/channels/morgantechfest', icon: DiscordIcon }
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer-inner">
      <div class="site-footer-brand">
        <a class="site-footer-logo" href="/"><img src="/logo.svg" alt="Morgan TechFest" /></a>
        <p class="site-footer-tag">
          The annual student technology innovation conference at Morgan State University, Baltimore.
        </p>
      </div>
      <nav class="site-footer-nav" aria-label="Footer">
        <h2 class="site-footer-heading">More from TechFest</h2>
        <ul class="site-footer-list">
          <li v-for="link in footerLinks" :key="link.href">
            <a class="site-footer-link" :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </nav>
      <div class="site-footer-follow">
        <h2 class="site-footer-heading">Follow along</h2>
        <div class="site-footer-socials">
          <a
            v-for="s in socials"
            :key="s.label"
            class="site-footer-social"
            :href="s.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="s.label"
            ><component :is="s.icon" aria-hidden="true"
          /></a>
        </div>
      </div>
    </div>
    <p class="site-footer-legal">&copy; {{ year }} Morgan TechFest. Morgan State University.</p>
  </footer>
</template>
