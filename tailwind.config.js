/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          main: '#1a6ff2',
        },
        grey: {
          main: '#e5e5e5',
          dark: '#555c66',
          light: '#bdbdbd',
        },
        green: {
          main: '#157207',
        },
        cyan: {
          main: '#2cccc4',
        },
      },
    },
  },
  plugins: [],
};
