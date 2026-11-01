/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#F9F4E8',
          200: '#F2E5C8',
          300: '#E8D29F',
          400: '#DEBF76',
          500: '#D4AF37', // Luxury Metallic Gold
          600: '#B59325',
          700: '#8F731A',
          800: '#695311',
          900: '#43340A',
        },
        obsidian: {
          950: '#060709',
          900: '#0B0D12',
          850: '#11141B',
          800: '#171B24',
          750: '#1F2430',
          700: '#2A3040',
        },
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'Georgia', 'serif'],
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFF1BD 0%, #D4AF37 50%, #AA820A 100%)',
        'gold-metallic': 'linear-gradient(90deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
        'dark-glass': 'linear-gradient(180deg, rgba(22, 27, 36, 0.75) 0%, rgba(11, 13, 18, 0.85) 100%)',
        'luxury-glow': 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 8px 25px -4px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 15px 40px -5px rgba(212, 175, 55, 0.35)',
        'obsidian-glow': '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(212, 175, 55, 0.08)',
      },
    },
  },
  plugins: [],
};
