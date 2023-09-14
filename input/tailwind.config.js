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
    },
    fontSize: {
      // TODO: Rename these (except `base`)
      'impact':      ['0.8125rem', 'normal'],
      'eyebrow':     ['0.8125rem', 'normal'],
      'detail':      ['0.875rem',  '1.42857'],
      'h6':          ['1rem',      'normal'],
      'widget-link': ['1rem',      '1.4375'],
      'base':        ['1rem',      '1.5625'],
      'widget':      ['1rem',      '1.5625'],
      'h5-mobile':   ['1.0625',    'normal'],
      'h5':          ['1.125rem',  'normal'],
      'h4-mobile':   ['1.125rem',  'normal'],
      'h3-mobile':   ['1.125rem',  'normal'],
      'large-link':  ['1.125rem',  '1.11111'],
      'article':     ['1.125rem',  '1.66666'],
      'h4':          ['1.25rem',   'normal'],
      'h3':          ['1.25rem',   'normal'],
      'h2-mobile':   ['1.5625rem', 'normal'],
      'h1-mobile':   ['1.5625rem', 'normal'],
      'subtitle':    ['1.8125rem', 'normal'],
      'h2':          ['1.875rem',  'normal'],
      'h1':          ['2.8125rem', 'normal'],
    },
    lineHeight: {
      normal: 'normal',
      tight: '1.11111',
      snug: '1.42857',
      standard: '1.4375',
      relaxed: '1.5625',
      loose: '1.66666',
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
    },
  },
};
