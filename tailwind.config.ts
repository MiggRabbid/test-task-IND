import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx,scss}'],
  theme: {
    extend: {
      colors: {
        'project-theme': {
          background: 'var(--background)',
          'background-second': 'var(--background-second)',
          foreground: 'var(--foreground)',
          dark: 'var(--color-dark)',
          accent: 'var(--color-accent)',
          gray: 'var(--color-gray)',
          'gray-second': 'var(--color-gray)',
        },
      },
      fontFamily: {
        projectFont: ['PP Neue Montreal Thin', 'sans-serif'],
      },
      keyframes: {
        fadeIn0: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomIn95: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in-0': 'fadeIn0 0.3s ease-out',
        'zoom-in-95': 'zoomIn95 0.3s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
