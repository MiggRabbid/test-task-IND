import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx,scss}'],
  theme: {
    extend: {
      colors: {
        projectTheme: {
          background: 'var(--background)',
          foreground: 'var(--foreground)',
        },
      },
      fontFamily: {
        projectFont: ['PP Neue Montreal Thin', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
