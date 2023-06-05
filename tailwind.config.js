/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        showSidebar: {
          from: { opacity: 0, width: 0 },
          to: { opacity: 1 },
        },
        bye: {
          0: {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(45deg)',
          },
          '100%': {
            transform: 'rotate(0deg)',
          },
        },
      },
      animation: {
        showSidebar: 'showSidebar 1s ease-in-out',
        bye: 'bye 2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};
