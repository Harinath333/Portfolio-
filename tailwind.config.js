/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
    '-10': '-10',
  },
      animation: {
        'gradient-x': 'gradientX 10s ease infinite',
      },
      keyframes: {
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '400': '400% 400%',
      },
      backgroundImage: {
        'animated-gradient': 'linear-gradient(-45deg, #ff6ec4, #7873f5, #3c8ce7, #00eaff)',
      },
    },
  },
  plugins: [],
}

