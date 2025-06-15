/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        secondary: '#3A3A3C',
        background: '#F5F5F7',
        text: '#1C1C1E',
        border: '#D1D1D6',
        success: '#34C759',
        error: '#FF3B30',
      },
    },
  },
  plugins: [],
};