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
      keyframes: {
        wobble: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(4deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1.2) rotate(20deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '25%': { transform: 'rotate(3deg)' },
          '50%': { transform: 'rotate(-2deg)' },
          '75%': { transform: 'rotate(2deg)' },
        },
        confettiFall: {
          '0%': { transform: 'translateY(-20px) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: '0' },
        },
        popIn: {
          '0%': { transform: 'scale(0) rotate(-20deg)', opacity: '0' },
          '60%': { transform: 'scale(1.15) rotate(5deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
      },
      animation: {
        wobble: 'wobble 1.8s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2.2s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        sparkle: 'sparkle 2s ease-in-out infinite',
        wiggle: 'wiggle 0.6s ease-in-out',
        'pop-in': 'popIn 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both',
      },
    },
  },
  plugins: [],
};
