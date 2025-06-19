/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        },
        floatLeaves: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-100px) rotate(5deg)' },
          '50%': { transform: 'translateY(-200px) rotate(-5deg)' },
          '75%': { transform: 'translateY(-300px) rotate(10deg)' },
          '100%': { transform: 'translateY(-500px) rotate(0deg)' },
        },
      },
      animation: {
        breathe: 'breathe 2.5s ease-in-out infinite',
        floatLeaves: 'floatLeaves 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

