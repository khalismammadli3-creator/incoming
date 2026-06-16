import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0D3D35',
        accent: '#00C9A7',
        light: '#E8F5F2',
        dark: '#061F1A',
        muted: '#4A7B72',
        'primary-hover': '#0A3029',
        'accent-hover': '#00B396',
      },
      fontFamily: {
        body: ['HostGrotesk', 'sans-serif'],
        display: ['HostGrotesk', 'sans-serif'],
        sans: ['HostGrotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
