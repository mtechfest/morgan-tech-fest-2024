/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Future Flux 2026 palette, sampled from the event key art ──
        'flux-void': '#150829', // deepest ground, page base
        'flux-indigo': '#241145', // primary dark violet
        'flux-violet': '#3D1552', // mid purple, section washes
        'flux-plum': '#4E1668', // lifted purple, card faces
        'flux-cyan': '#0DC6F4', // primary accent (the "Network" cyan)
        'flux-ember': '#FF5A16', // secondary accent, retained brand orange
        'flux-mist': '#F4F0FA', // pale lilac, light sections
        'flux-ink': '#16072B', // text on light sections

        // Kept so any stray legacy usage still resolves to the new ground
        'morgan-blue': '#241145'
      },
      // Intermediate steps the theme leans on. Needed as real scale entries
      // because `@apply` will not resolve slash opacities outside the scale.
      opacity: {
        8: '0.08',
        12: '0.12',
        15: '0.15',
        35: '0.35',
        45: '0.45',
        55: '0.55',
        65: '0.65',
        85: '0.85'
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
        // Utility face for data, labels, IDs and timestamps
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      screens: {
        xs: '425px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px'
      }
    }
  },
  plugins: ['prettier-plugin-tailwindcss']
}
