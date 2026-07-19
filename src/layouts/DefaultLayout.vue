<script setup>
import PageHeader from '@/components/PageHeader.vue'
// import PageFooter from '@/components/PageFooter.vue';
</script>

<template>
  <!-- Digital "what we do" backdrop behind the whole page -->
  <div class="page-backdrop" aria-hidden="true"></div>

  <PageHeader />
  <slot></slot>

  <!-- <PageFooter /> -->
</template>

<style>
html,
body {
  background-color: #150829;
}

.page-backdrop {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-color: #150829;
  background-image:
    radial-gradient(55% 45% at 14% 12%, rgba(13, 198, 244, 0.12) 0%, transparent 62%),
    radial-gradient(55% 50% at 86% 16%, rgba(124, 58, 237, 0.16) 0%, transparent 62%),
    radial-gradient(60% 55% at 78% 90%, rgba(252, 71, 11, 0.09) 0%, transparent 62%),
    radial-gradient(50% 50% at 24% 82%, rgba(13, 198, 244, 0.09) 0%, transparent 62%),
    linear-gradient(180deg, #1a0a33 0%, #150829 60%, #10061f 100%);
}

/* data-grid dot matrix */
.page-backdrop::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1.4px);
  background-size: 36px 36px;
  -webkit-mask-image: radial-gradient(90% 85% at 50% 35%, #000 25%, transparent 100%);
  mask-image: radial-gradient(90% 85% at 50% 35%, #000 25%, transparent 100%);
}

/* faint connective network lines */
.page-backdrop::after {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.5;
  background-image:
    linear-gradient(115deg, transparent 49.6%, rgba(13, 198, 244, 0.06) 49.8%, rgba(13, 198, 244, 0.06) 50.2%, transparent 50.4%),
    linear-gradient(-115deg, transparent 49.6%, rgba(124, 58, 237, 0.06) 49.8%, rgba(124, 58, 237, 0.06) 50.2%, transparent 50.4%);
  background-size: 260px 260px, 320px 320px;
  -webkit-mask-image: radial-gradient(100% 100% at 50% 30%, #000 40%, transparent 100%);
  mask-image: radial-gradient(100% 100% at 50% 30%, #000 40%, transparent 100%);
}
</style>
