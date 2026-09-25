<script setup>
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
</script>

<template>
  <!-- Digital "what we do" backdrop behind the whole page -->
  <div class="page-backdrop" aria-hidden="true"></div>

  <PageHeader />
  <slot></slot>

  <PageFooter />
</template>

<style>
html,
body {
  background-color: #150829;
}

.page-backdrop {
  /* Painted once as part of the page (no fixed layer, no masks, no forced
     compositing). The previous fixed + masked + will-change version made
     Chrome on macOS re-rasterise a viewport-sized layer under the blurred
     header on every scroll frame, which shows up as jitter and, on Retina
     displays, exhausts GPU memory. */
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-color: #150829;
  background-image:
    radial-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1.4px),
    radial-gradient(55% 45% at 14% 12%, rgba(13, 198, 244, 0.12) 0%, transparent 62%),
    radial-gradient(55% 50% at 86% 16%, rgba(124, 58, 237, 0.16) 0%, transparent 62%),
    radial-gradient(60% 55% at 78% 90%, rgba(252, 71, 11, 0.09) 0%, transparent 62%),
    radial-gradient(50% 50% at 24% 82%, rgba(13, 198, 244, 0.09) 0%, transparent 62%),
    linear-gradient(180deg, #1a0a33 0%, #150829 60%, #10061f 100%);
  background-size: 36px 36px, 100% 100vh, 100% 100vh, 100% 100vh, 100% 100vh, 100% 100%;
  background-repeat: repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;
}
</style>
