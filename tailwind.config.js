/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#070B14',
          surface: '#0B1325',
          card: '#101B33',
          border: 'rgba(255, 255, 255, 0.08)',
          red: '#E50914',
          'red-hover': '#C40812',
          blue: '#0066FF',
          cyan: '#00D2FF',
          silver: '#94A3B8',
          lightBg: '#F8FAFC',
          lightCard: '#FFFFFF',
          lightBorder: '#E2E8F0',
        },
        itel: {
          red: '#FF0033',
          darkRed: '#CC0029',
          lightRed: '#FFE5EA',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.04)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'neon-blue': '0 0 25px rgba(0, 102, 255, 0.35)',
        'neon-red': '0 0 25px rgba(229, 9, 20, 0.35)',
        'neon-cyan': '0 0 25px rgba(0, 210, 255, 0.35)',
        'premium-card': '0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'premium-card-hover': '0 20px 40px -15px rgba(0, 102, 255, 0.15), 0 8px 20px -4px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
