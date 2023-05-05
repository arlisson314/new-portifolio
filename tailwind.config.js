/** @type {import('tailwindcss').Config} */
export default {
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
      },
      animation: {
        showSidebar: 'showSidebar 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
