/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        olive: {
          600: '#A8C050',
        },
        azure: {
          600: '#387EC0',
        },
        sapphire: {
          700: '#064990',
        },
      },
      screens: {
        xs: '448px',
      },
    },
  },
  plugins: [],
};
