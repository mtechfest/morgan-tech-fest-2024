<script setup>
import { watch, onUnmounted, ref, nextTick } from 'vue'

const props = defineProps({
  speaker: { type: Object, default: null },
  kicker: { type: String, default: 'Panelist' }
})
const emit = defineEmits(['close'])

const panel = ref(null)

const onKey = (e) => {
  if (e.key === 'Escape') emit('close')
}

// Lock page scroll while open and move focus into the dialog so keyboard and
// screen-reader users land on the content instead of behind it.
watch(
  () => props.speaker,
  async (open) => {
    if (open) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
      await nextTick()
      panel.value?.focus()
    } else {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }
)

onUnmounted(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="speaker"
        class="bio-scrim"
        @click.self="emit('close')"
      >
        <div
          ref="panel"
          class="bio-panel"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="`bio-title-${speaker.id}`"
          tabindex="-1"
        >
          <button class="bio-close" aria-label="Close bio" @click="emit('close')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>

          <div class="bio-side">
            <div class="bio-portrait">
              <img :src="speaker.img" :alt="speaker.name" width="800" height="1000" />
            </div>
            <div class="bio-portrait-foot">
              <span class="bio-kicker">{{ kicker }}</span>
              <span :id="`bio-title-${speaker.id}`" class="bio-name">{{ speaker.name }}</span>
              <span class="bio-role">{{ speaker.role }}</span>
              <span class="bio-org">{{ speaker.org }}</span>
              <a v-if="speaker.linkedin" :href="speaker.linkedin" target="_blank" rel="noopener noreferrer" class="bio-link">LinkedIn &rarr;</a>
            </div>
          </div>

          <div class="bio-body">
            <div v-if="speaker.workshop" class="bio-workshop">
              <span class="bio-workshop-label">Workshop</span>
              <span class="bio-workshop-title">{{ speaker.workshop }}</span>
              <span class="bio-workshop-blurb">{{ speaker.workshopBlurb }}</span>
            </div>
            <p v-for="(para, i) in speaker.bio" :key="i" class="bio-para">{{ para }}</p>
            <div v-if="speaker.highlights" class="bio-highlights">
              <span class="bio-workshop-label">Notable</span>
              <ul>
                <li v-for="(h, i) in speaker.highlights" :key="i">{{ h }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.bio-scrim {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 16px;
  background: rgba(var(--void-rgb),0.9);
}

.bio-panel {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  width: min(100%, 980px);
  max-height: min(92vh, 860px);
  overflow: hidden;
  border-radius: 24px;
  background: var(--deep);
  border: 1px solid rgba(var(--accent-rgb),0.28);
  box-shadow:
    0 0 0 6px rgba(var(--accent-rgb),0.05),
    0 40px 90px rgba(var(--void-rgb),0.7);
  outline: none;
}

@media (min-width: 768px) {
  .bio-panel {
    grid-template-columns: 340px 1fr;
  }
}

.bio-close {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 3;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  color: #fff;
  background: rgba(var(--void-rgb),0.7);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: border-color 0.2s, background 0.2s;
}
.bio-close:hover {
  border-color: var(--orange);
  background: rgba(var(--accent-rgb),0.15);
}
.bio-close svg {
  width: 18px;
  height: 18px;
}

/* ── Portrait column ── */
.bio-side {
  display: flex;
  flex-direction: column;
  background: var(--void);
  border-bottom: 1px solid rgba(var(--accent-rgb),0.18);
}
@media (min-width: 768px) {
  .bio-side {
    border-bottom: 0;
    border-right: 1px solid rgba(var(--accent-rgb),0.18);
    overflow-y: auto;
  }
}
.bio-portrait {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background: var(--blue);
}
@media (max-width: 767px) {
  .bio-portrait {
    aspect-ratio: 4 / 3;
  }
  .bio-portrait img {
    object-position: center 30%;
  }
  /* On phones the whole card scrolls as one piece */
  .bio-panel {
    overflow-y: auto;
  }
  .bio-body {
    overflow: visible;
  }
}
.bio-portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
}
.bio-portrait-foot {
  display: flex;
  flex-direction: column;
  padding: 18px 22px 22px;
}
.bio-kicker {
  @apply font-mono text-[10px] uppercase tracking-[0.2em] text-flux-cyan;
}
.bio-name {
  @apply mt-1 font-bebas text-3xl leading-none text-white;
}
.bio-role {
  @apply mt-2 font-urbanist text-sm font-semibold text-white/90;
}
.bio-org {
  @apply mt-0.5 font-urbanist text-xs text-white/55;
}
.bio-link {
  @apply mt-3 self-start font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-flux-cyan;
}
.bio-link:hover {
  @apply text-white;
}

/* ── Bio column ── */
.bio-body {
  overflow-y: auto;
  padding: 28px 24px 32px;
  overscroll-behavior: contain;
}
@media (min-width: 640px) {
  .bio-body {
    padding: 40px 40px 44px;
  }
}
.bio-workshop {
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;
  padding: 18px 20px;
  border-radius: 14px;
  border: 1px solid rgba(var(--accent-rgb),0.28);
  border-left: 3px solid var(--orange);
  background: rgba(var(--accent-rgb),0.07);
}
.bio-workshop-label {
  @apply font-mono text-[10px] uppercase tracking-[0.2em] text-flux-cyan;
}
.bio-workshop-title {
  @apply mt-1.5 font-bebas text-2xl leading-tight text-white sm:text-3xl;
}
.bio-workshop-blurb {
  @apply mt-1.5 font-urbanist text-sm leading-relaxed text-white/65;
}
.bio-para {
  @apply font-urbanist text-[15px] leading-relaxed text-white/80 sm:text-base;
  max-width: 62ch;
}
.bio-para + .bio-para {
  margin-top: 1em;
}
.bio-highlights {
  margin-top: 26px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.bio-highlights ul {
  @apply mt-3 flex flex-col gap-y-2 pl-4 font-urbanist text-sm leading-relaxed text-white/75 sm:text-[15px];
  list-style: disc;
  max-width: 62ch;
}
.bio-highlights li::marker {
  color: var(--orange);
}

/* ── Motion ── */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.22s ease;
}
.modal-enter-active .bio-panel,
.modal-leave-active .bio-panel {
  transition: transform 0.26s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.22s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .bio-panel,
.modal-leave-to .bio-panel {
  transform: translateY(18px) scale(0.98);
  opacity: 0;
}
</style>
