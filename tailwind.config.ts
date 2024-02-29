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
        code: {
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#d9a9ff',
          red: '#ff8383',
          blue: '#93ddfd',
          white: '#fff',
        },
      },
      typography: (theme: (arg0: string) => any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            a: {
              color: theme('colors.red.500'),
              '&:hover': {
                color: theme('colors.red.600'),
              },
              code: { color: theme('colors.blue.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
              wordBreak: 'break-word',
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900'),
            },
            code: {
              color: theme('colors.red.500'),
              backgroundColor: '#F4F4F5',
              fontWeight: '0',
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.2rem',
              wordBreak: 'break-word',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li::before': {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'ul li::before': {
              backgroundColor: theme('colors.gray.900'),
            },
            'li::marker': {
              color: theme('colors.gray.900'),
            },
            strong: { color: theme('colors.gray.900') },
            blockquote: {
              fontStyle: 'none',
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.red.500'),
            },
          },
        },
      }),
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
        neo: ['NanumSquareNeoVariable', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
