/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#17130F',
        night: '#050505',
        night2: '#0D0B0A',
        panel: '#12100F',
        panel2: '#191512',
        orange: '#FF6A00',
        orange2: '#FF8A1E',
        amber: '#FFB347',
        gold: '#F5C24A',
        ember: '#B23A00',
      },
      fontFamily: {
        raleway: ['Raleway', 'Arial', 'sans-serif'],
        display: ['"Bebas Neue"', 'Raleway', 'sans-serif'],
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(.22,1,.36,1)',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translate(0,0) scale(1)' },
          '100%': { transform: 'translate(-7vw,9vh) scale(1.13)' },
        },
        beam: {
          '0%': { top: '-5%', transform: 'rotate(-6deg)' },
          '100%': { top: '105%', transform: 'rotate(-6deg)' },
        },
        navIn: {
          '0%': { opacity: '0', transform: 'translate(-50%,-24px)' },
          '100%': { opacity: '1', transform: 'translate(-50%,0)' },
        },
        shine: {
          '0%': { backgroundPosition: '0% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        btnRing: {
          '0%': { transform: 'scale(.96)', opacity: '.8' },
          '70%,100%': { transform: 'scale(1.18)', opacity: '0' },
        },
        pulseDot: {
          '0%,100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(.55)', opacity: '.5' },
        },
        rise: {
          '0%': { transform: 'translateY(112%)' },
          '100%': { transform: 'translateY(0)' },
        },
        floatPortrait: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        halo: {
          '0%,100%': { transform: 'scale(1)', opacity: '.72' },
          '50%': { transform: 'scale(1.12)', opacity: '.9' },
        },
        ringSpin: {
          '0%': { transform: 'translate(-50%,-50%) rotateX(72deg) rotateZ(0deg)' },
          '100%': { transform: 'translate(-50%,-50%) rotateX(72deg) rotateZ(360deg)' },
        },
        chip: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-9px)' },
        },
        scrollLine: {
          '0%': { transform: 'scaleY(.2)', transformOrigin: 'top', opacity: '.3' },
          '50%': { transform: 'scaleY(1)', opacity: '1' },
          '100%': { transform: 'scaleY(.2)', transformOrigin: 'bottom', opacity: '.3' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite alternate',
        'drift-reverse': 'drift 25s ease-in-out infinite alternate-reverse',
        beam: 'beam 15s linear infinite',
        'beam-delay': 'beam 15s linear 7.5s infinite',
        'nav-in': 'navIn .9s cubic-bezier(.22,1,.36,1) both',
        shine: 'shine 4s linear infinite',
        'button-ring': 'btnRing 2.4s ease-out infinite',
        'pulse-dot': 'pulseDot 1.6s ease-in-out infinite',
        rise: 'rise .95s cubic-bezier(.22,1,.36,1) both',
        float: 'floatPortrait 5.8s ease-in-out infinite',
        halo: 'halo 4s ease-in-out infinite',
        'ring-20': 'ringSpin 20s linear infinite',
        'ring-34': 'ringSpin 34s linear infinite reverse',
        chip: 'chip 5s ease-in-out infinite',
        'scroll-line': 'scrollLine 1.7s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
        'spin-13': 'spin 13s linear infinite',
        'spin-17': 'spin 17s linear infinite',
        'spin-24': 'spin 24s linear infinite',
        'spin-30': 'spin 30s linear infinite',
        'spin-39': 'spin 39s linear infinite reverse',
        'spin-42': 'spin 42s linear infinite',
        'spin-64': 'spin 64s linear infinite reverse',
      },
    },
  },
  plugins: [],
}
