import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'freemed-red': {
          light: '#fbd7d3',
          DEFAULT: '#ed3827',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
        neo: ['NanumSquareNeoVariable', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
