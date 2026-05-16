/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Pickit bright palette
        sun:    { DEFAULT: '#FFD93D', deep: '#F5C518' },
        pink:   { DEFAULT: '#FF4D8F', deep: '#E0357A' },
        cyan:   { DEFAULT: '#4DD2FF', deep: '#2BB8E8' },
        lime:   { DEFAULT: '#B6FF6E', deep: '#8FE542' },
        cream:  { DEFAULT: '#FFFBE6', soft: '#FFF7D0' },
        ink:    { DEFAULT: '#1A1A1A', soft: '#2D2D2D' },
      },
      fontFamily: {
        display: ['Fredoka', 'system-ui', 'sans-serif'],
        sans:    ['Fredoka', 'system-ui', 'sans-serif'],
      },
      borderWidth: {
        chunky: '4px',
      },
      boxShadow: {
        chunky: '6px 6px 0 #1A1A1A',
        'chunky-sm': '3px 3px 0 #1A1A1A',
      },
      rotate: {
        'tilt-1': '1deg',
        'tilt-2': '2deg',
        'tilt-3': '3deg',
        'tilt-n1': '-1deg',
        'tilt-n2': '-2deg',
      },
    },
  },
  plugins: [],
};
