// deno-fmt-ignore-file
// deno-lint-ignore-file

// https://tailwindcss.com/docs/configuration
tailwind.config = {
  theme: {
    screens: {
      'sm': '375px',
      'md': '769px',
      'lg': '992px',
      'xl': '1201px',
    },
    fontFamily: {
      sans: [
        'proxima-nova',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
      // TODO: Remove for production
      mono: [
        'JetBrains Mono',
        'Fira Code',
        'ui-monospace',
        'Courier New',
        'monospace',
      ],
    },
    fontSize: {
      'xs':    ['0.8125rem', 'normal'],
      'sm':    ['0.875rem',  '1.42857'],
      'base':  ['1rem',      '1.5625'],
      'lg':    ['1.0625',    'normal'],
      'xl':    ['1.125rem',  'normal'],
      '2xl':   ['1.25rem',   'normal'],
      '3xl':   ['1.5625rem', 'normal'],
      '4xl':   ['1.8125rem', 'normal'],
      '5xl':   ['1.875rem',  'normal'],
      '6xl':   ['2.8125rem', 'normal'],
    },
    lineHeight: {
      normal:   'normal',
      tight:    '1.11111',
      snug:     '1.42857',
      standard: '1.4375',
      relaxed:  '1.5625',
      loose:    '1.66666',
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    extend: {
      // TODO: Move this out of `extend` when moving into the production code base
      colors: {
        black: '#000000',
        blue: {
          400: '#0abbe8',
          800: '#0052a5', // links
          950: '#001b3f',
        },
        cyan: {
          50: '#e5f7fa',
        },
        gray: {
          50: '#fafafa', // background color
          600: '#555555',
        },
        green: {
          500: '#b6c42c',
        },
        white: '#ffffff',
      },
      spacing: {
        8.75: '2.1875rem',
        17.5: '4.375rem',
        17.5: '4.375rem',
      }
    },
  },
};
