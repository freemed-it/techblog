import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        'freemed-red': {
          light: '#fbd7d3',
          DEFAULT: '#ed3827',
        },
      },
      typography: (theme: (arg0: string) => any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            a: {
              color: '#ed3827',
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
              counterReset: 'line',
            },

            ':not(pre) > code': {
              fontWeight: 'inherit',
              position: 'relative',
              bottom: 1,
              margin: '0 3px',
              color: '#eb5757',
              backgroundColor: 'rgba(135,131,120,0.15)',
              fontFamily: '"SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace',
              borderRadius: 3,
              padding: '0.2em 0.4em',
              overflowWrap: 'break-word',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },

            'code[data-line-numbers]': {
              counterReset: 'line',
            },

            'code[data-line-numbers] > [data-line]::before': {
              counterIncrement: 'line',
              content: 'counter(line)',

              display: 'inline-block',
              width: '1rem',
              marginRight: '1.4rem',
              textAlign: 'right',
              color: 'grey',
              fontSize: '0.75rem',
            },

            'code[data-line-numbers-max-digits="2"] > [data-line]::before': {
              width: '1rem',
            },

            'code[data-line-numbers-max-digits="3"] > [data-line]::before': {
              width: '2rem',
            },

            pre: {
              paddingRight: 0,
              paddingLeft: 0,
              color: 'var(--shiki-light)',
              backgroundColor: 'var(--shiki-light-bg)',
              border: '1px solid #e5e7eb',
            },

            '.dark pre': {
              backgroundColor: 'var(--shiki-dark-bg)',
              color: 'var(--shiki-dark)',
              border: '1px solid #374151',
            },

            'pre > code > span': {
              paddingLeft: '1.1rem',
              paddingRight: '1rem',
            },

            'pre code span': {
              color: 'var(--shiki-light)',
            },
            '.dark pre code span': {
              color: 'var(--shiki-dark)',
            },

            '[data-highlighted-line]': {
              borderLeftWidth: '2px',
              borderTopWidth: '0',
              borderBottomWidth: '0',
              backgroundColor: 'rgba(75, 85, 99, 0.1)',
              borderColor: '#ed3827',
              paddingLeft: 'calc(1.1rem - 2px)',
            },

            u: {
              textUnderlineOffset: '4px',
              textDecorationThickness: 1,
              fontWeight: 600,
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
              a: {
                color: '#ed3827',
              },
              'p::before': {
                display: 'none',
              },
            },
            aside: {
              margin: '24px 0px 8px',
              padding: '16px 40px 32px',
              borderRadius: 4,
              backgroundColor: theme('colors.gray.100'),
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
