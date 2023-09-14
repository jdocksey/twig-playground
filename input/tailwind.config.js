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
      base: ['1rem', '1.5625rem'],

      // TODO: Rename these (after all sizes have been determined)
      'h1':             ['2.8125rem', 'normal'],
      'h2':             ['1.875rem',  'normal'],
      'subtitle':       ['1.8125rem', 'normal'],
      'h1-mobile':      ['1.5625rem', 'normal'],
      'h2-mobile':      ['1.5625rem', 'normal'],
      'h3':             ['1.25rem',   'normal'],
      'h4':             ['1.25rem',   'normal'],

      // TODO: Choose one of these options
      'article':        ['1.125rem',  '1.875rem'],
      'article-LH':     ['1.125rem',  '1.66666'],

      'large-link':     ['1.125rem',  '1.25rem'],
      'large-link-LH':  ['1.125rem',  '1.11111'],
      'h3-mobile':      ['1.125rem',  'normal'],
      'h4-mobile':      ['1.125rem',  'normal'],
      'h5':             ['1.125rem',  'normal'],
      'h5-mobile':      ['1.0625',    'normal'],

      // TODO: Choose one of these options
      'widget':         ['1rem',      '1.5625rem'],
      'widget-LH':      ['1rem',      '1.5625'],

      'widget-link':    ['1rem',      '1.4375rem'],
      'widget-link-LH': ['1rem',      '1.4375'],
      'h6':             ['1rem',      'normal'],

      // TODO: Choose one of these options
      'detail':         ['0.875rem',  '1.25rem'],
      'detail-LH':      ['0.875rem',  '1.42857'],

      'eyebrow':        ['0.8125rem', 'normal'],
      'impact':         ['0.8125rem', 'normal'],
    },
    lineHeight: {
      normal: 'normal',

      // TODO: Choose one of the three sets below
      loose: '1.66666',
      relaxed: '1.5625',
      standard: '1.4375',
      snug: '1.42857',
      tight: '1.11111',

      8: '1.875rem',
      7: '1.5625rem',
      6: '1.4375rem',
      5: '1.25rem',

      '7.5': '1.875rem',
      '6.25': '1.5625rem',
      '5.75': '1.4375rem',
      '5': '1.25rem',
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
