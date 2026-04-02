/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'morgan-blue': '#004583'
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif']
      },
      screens: {
        xs: '425px', // => @media (min-width: 640px) { ... }

        sm: '640px', // => @media (min-width: 640px) { ... }

        md: '768px', // => @media (min-width: 768px) { ... }

        lg: '1024px', // => @media (min-width: 1024px) { ... }

        xl: '1280px', // => @media (min-width: 1280px) { ... }

        '2xl': '1536px', // => @media (min-width: 1536px) { ... }

        '3xl': '1920px', // => @media (min-width: 1920px) { ... }

        '4xl': '2560px' // => @media (min-width: 2560px) { ... }
      }
    }
  },
  plugins: ['prettier-plugin-tailwindcss']
}
