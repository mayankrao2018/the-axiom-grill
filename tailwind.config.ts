import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgLight: '#fff8f3',
        textLight: '#1c1c1c',
        primaryLight: '#0d1117',
        
        bgDark: '#0d1117',
        textDark: '#f9f5f2',
        primaryDark: '#ff6b35',
      },
    },
  },
  plugins: [],
}

export default config
