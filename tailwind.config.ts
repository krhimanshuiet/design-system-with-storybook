import type { Config } from 'tailwindcss';
import { colors, white, black, transparent, currentColor } from './src/tokens/colors';
export default {
  content: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.mdx'],
  theme: {
    colors: {
      ...colors,
      white,
      black,
      transparent,
      currentColor,
    },
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
      },
    },
  },
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [],
} satisfies Config;
