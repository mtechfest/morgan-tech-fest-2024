/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Morgan TechFest brand palette (blue + orange, from the logo). Token names are legacy. ──
        'flux-void': '#061430', // deepest ground, page base
        'flux-indigo': '#0B2461', // primary dark violet
        'flux-violet': '#1545A0', // mid purple, section washes
        'flux-plum': '#1F56B8', // lifted purple, card faces
        'flux-cyan': '#FC711B', // primary accent (the "Network" cyan)
        'flux-ember': '#FF5A16', // secondary accent, retained brand orange
        'flux-mist': '#F3F6FC', // pale lilac, light sections
        'flux-ink': '#0A1A3D', // text on light sections

        // Kept so any stray legacy usage still resolves to the new ground
        'morgan-blue': '#0B2461'
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
