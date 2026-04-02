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
  <div class="border-b-[0.3px] border-[#ffffff89] pb-4">
    <div
      class="flex cursor-pointer items-center justify-between py-3 lg:py-4"
      @click="toggleRotation"
    >
      <span class="text-base font-semibold text-white xs:text-lg sm:text-2xl lg:text-3xl">{{ question }}</span>

      <span class="ml-3 flex-shrink-0" :class="{ 'rotate-90-open': CouroselOpened, 'rotate-90-close': !CouroselOpened }">
        <ChevronDownIcon />
      </span>
    </div>

    <p
      v-if="CouroselOpened"
      class="rounded-xl bg-[#f37936] px-4 py-3 font-urbanist text-base font-semibold text-[#121139] sm:rounded-2xl sm:px-6 sm:py-4 sm:text-xl lg:py-6 lg:text-2xl"
    >
      {{ answer }}
    </p>
  </div>
</template>

<style scoped>
.rotate-90-open {
  transform: rotate(-90deg);
  transition: transform 0.3s ease;
}
.rotate-90-close {
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}
</style>
