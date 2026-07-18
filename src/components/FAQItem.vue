<script setup>
import ChevronDownIcon from '@/components/icons/IconChevronDown.vue'
import { ref } from 'vue'
const { question, answer } = defineProps(['question', 'answer'])

const CouroselOpened = ref(false)

function toggleRotation() {
  CouroselOpened.value = !CouroselOpened.value
}
</script>

<template>
  <div class="border-b border-white/15 pb-4">
    <div
      class="flex cursor-pointer items-center justify-between py-3 lg:py-4"
      @click="toggleRotation"
    >
      <span class="text-base font-semibold text-white transition-colors duration-200 xs:text-lg sm:text-2xl lg:text-3xl">{{ question }}</span>

      <span class="ml-3 flex-shrink-0" :class="{ 'rotate-90-open': CouroselOpened, 'rotate-90-close': !CouroselOpened }">
        <ChevronDownIcon />
      </span>
    </div>

    <p
      v-if="CouroselOpened"
      class="faq-answer"
    >
      {{ answer }}
    </p>
  </div>
</template>

<style scoped>
.faq-answer {
  @apply rounded-xl px-4 py-3 font-urbanist text-base font-medium leading-relaxed text-white/85 sm:rounded-2xl sm:px-6 sm:py-4 sm:text-lg lg:py-5 lg:text-lg;
  border: 1px solid rgba(13, 198, 244, 0.28);
  border-left: 3px solid #0dc6f4;
  background: rgba(13, 198, 244, 0.07);
}

.rotate-90-open {
  transform: rotate(-90deg);
  transition: transform 0.3s ease;
}
.rotate-90-close {
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}
</style>
