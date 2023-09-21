// deno-fmt-ignore-file
// deno-lint-ignore-file

// https://tailwindcss.com/docs/configuration
tailwind.config = {
  theme: {
    screens: {
      'sm': '374px',
      'md': '768px',
      'lg': '991px',
      'xl': '1200px',
      // TODO: Remove for production
      '2xl': '1600px',
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
      'xs':    ['0.8125rem', 'normal'],  // 13px
      'sm':    ['0.875rem',  '1.42857'], // 14px, 20px
      'base':  ['1rem',      '1.5625'],  // 16px, 25px
      'lg':    ['1.0625rem', 'normal'],  // 17px
      'xl':    ['1.125rem',  'normal'],  // 18px
      '2xl':   ['1.25rem',   'normal'],  // 20px
      '3xl':   ['1.5625rem', 'normal'],  // 25px
      '4xl':   ['1.8125rem', 'normal'],  // 29px
      '5xl':   ['1.875rem',  'normal'],  // 30px
      '6xl':   ['2.1875rem', 'normal'],  // 35px
      '7xl':   ['2.8125rem', 'normal'],  // 45px
    },
    lineHeight: {
      normal:   'normal',
      match:    '1',
      tight:    '1.11111',
      snug:     '1.42857',
      standard: '1.4375',
      relaxed:  '1.5625',
      loose:    '1.66666',
    },
    fontWeight: {
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    extend: {
      borderRadius: {
        '6xl': '3.125rem',
      },
      // TODO: Move this out of `extend` when moving into the production code base
      colors: {
        black: '#000000',
        blue: {
          400: '#0abbe8',
          800: '#0052a5', // links
          950: '#001b3f', // background color
        },
        cyan: {
          50: '#e5f7fa',
        },
        gray: {
          50: '#fafafa', // background color
          300: '#c3cbcd',
          600: '#555555',
        },
        green: {
          500: '#b6c42c',
        },
        white: '#ffffff', // background color
      },
      letterSpacing: {
        wide: '0.01875em'
      },
      maxWidth: {
        // This value is greater than the actual content of 1200px to account for 3rem (48px) of horizontal padding between the content and the window edges
        'content-container-limit': '1248px',
      },
      scale: {
        250: '2.5',
      },
      spacing: {
        0.25: '0.0625rem',
        1.25: '0.3125rem',
        4.5: '1.125rem',
        7.25: '1.8125rem',
        8.75: '2.1875rem',
        13: '3.25rem',
        15: '3.75rem',
        17.5: '4.375rem',
        17.5: '4.375rem',
      },
      transitionDuration: {
        250: '250ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
      textUnderlineOffset: {
        10: '10px',
      }
    },
  },
};
