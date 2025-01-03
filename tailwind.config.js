/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        satlok: {
          primary: '#FF1E1E',     // Logo red
          secondary: '#141E46',   // Deep navy
          accent: '#FD8D14',      // Warm orange
          light: '#FFF5E0',       // Light cream
          dark: '#183D3D',        // Dark teal
          muted: '#5C5470',       // Muted purple
          'text-primary': '#141E46',
          'text-secondary': '#5C5470',
          'bg-primary': '#FFF5E0',
          'bg-secondary': '#FFFFFF',
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out',
        slideIn: 'slideIn 0.3s ease-out',
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'wing-left': 'wingLeft 1s ease-in-out infinite',
        'wing-right': 'wingRight 1s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(-2deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        wingLeft: {
          '0%, 100%': { transform: 'scaleX(1) rotate(0deg)' },
          '50%': { transform: 'scaleX(0.7) rotate(-15deg)' },
        },
        wingRight: {
          '0%, 100%': { transform: 'scaleX(1) rotate(0deg)' },
          '50%': { transform: 'scaleX(0.7) rotate(15deg)' },
        },
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
    },
  },
  plugins: [],
}
