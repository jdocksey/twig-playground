// deno-fmt-ignore-file
// deno-lint-ignore-file

// https://tailwindcss.com/docs/configuration
tailwind.config = {
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      // TODO: Remove for production
      '2xl': '1600px',
    },
    fontFamily: {
      sans: [
        'proxima-nova',
        // TODO: Remove the demo typeface
        '"FONTSPRING DEMO - Proxima Nova"',
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
        'monospace',
        'Courier New',
      ],
    },
    fontSize: {
      '2xs':   ['0.8125rem', 'normal'],  // 13px
      'xs':    ['0.875rem',  '1.42857'], // 14px, 20px
      'sm':    ['0.9375rem', 'normal'],  // 15px
      'base':  ['1rem',      '1.5625'],  // 16px, 25px
      'lg':    ['1.0625rem', 'normal'],  // 17px
      'xl':    ['1.125rem',  'normal'],  // 18px
      '2xl':   ['1.25rem',   'normal'],  // 20px
      '3xl':   ['1.5625rem', 'normal'],  // 25px
      '4xl':   ['1.8125rem', 'normal'],  // 29px
      '5xl':   ['1.875rem',  'normal'],  // 30px
      '6xl':   ['2.1875rem', 'normal'],  // 35px
      '7xl':   ['2.8125rem', 'normal'],  // 45px
      '8xl':   ['3.75rem',   'normal'],  // 60px
      'super': ['12.5rem',   'normal'],  // 200px
    },
    lineHeight: {
      normal:     'normal',
      match:      '1',
      tight:      '1.11111',
      snug:       '1.42857',
      standard:   '1.4375',
      relaxed:    '1.5',
      loose:      '1.5625',
      'loose-xl': '1.66666',
    },
    fontWeight: {
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    letterSpacing: {
      // TODO: Update these values:
      wide: '0.00769em', // probably not needed after the `0.08em` updates
      wider: '0.01875em',
      // TODO: Add `0.04em` (for eyebrow text)
      widest: '0.0875em', // can probably change to `0.08em`
    },
    animation: {
      'fade-in': 'fade-in 0.6s ease forwards',
      'fade-in-left': 'fade-in-left 0.6s ease forwards',
      'fade-in-right': 'fade-in-right 0.6s ease forwards',
      'fade-in-up': 'fade-in-up 0.6s ease forwards',
    },
    keyframes: {
      'fade-in': {
        'from': { opacity: 0 },
        'to': { opacity: 1 },
      },
      'fade-in-left': {
        'from': { opacity: 0, transform: 'translateX(20px)' },
        'to': { opacity: 1, transform: 'translateX(0)' },
      },
      'fade-in-right': {
        'from': { opacity: 0, transform: 'translateX(-20px)' },
        'to': { opacity: 1, transform: 'translateX(0)' },
      },
      'fade-in-up': {
        'from': { opacity: 0, transform: 'translateY(20px)' },
        'to': { opacity: 1, transform: 'translateY(0)' },
      },
    },
    extend: {
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
          100: '#f5f5f5',
          200: '#ececec',
          250: '#d9d9d9',
          300: '#c3cbcd',
          500: '#737373',
          600: '#555555',
        },
        green: {
          500: '#b6c42c',
        },
        white: '#ffffff', // background color
      },
      borderRadius: {
        '5':  '.3125rem', // 5px (between `rounded` and `rounded-md`)
        '10': '.6125rem', // 10px (between `rounded-lg` and `rounded-xl`)
      },
      boxShadow: {
        'sm': '4px 2px 10px 4px rgba(0, 0, 0, 0.06)',
        'md-heavy': '1px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      gridTemplateRows: {
        '2-min-content-1fr': 'min-content 1fr',
      },
      transitionDuration: {
        250: '250ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
      textUnderlineOffset: {
        10: '10px',
      },
      scale: {
        250: '2.5',
      },
      height: {
        75: '18.75rem',
        116: '29rem',
      },
      minHeight: {
        60: '15rem',
        72: '18rem',
      },
      maxHeight: {
        58: '14.5rem',
        105: '26.26rem',
        116: '29rem',
      },
      maxWidth: {
        // This value is 24px greater than half of the content limit of 1200px to account for the 1.5rem (24px) of horizontal padding on just one side
        'content-container-limit-1/2': '624px',
        // This value is greater than the actual content of 1200px to account for 3rem (48px) of horizontal padding between the content and the window edges
        'content-container-limit': '1248px',
      },
      gap: {
        19.5: '4.875rem'
      },
      spacing: {
        0.25: '0.0625rem',
        1.25: '0.3125rem',
        3.75: '0.9375rem',
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        7.5: '1.875rem',
        8.75: '2.1875rem',
        9.5: '2.375rem',
        12.5: '3.125rem',
        13: '3.25rem',
        13.5: '3.375rem',
        15: '3.75rem',
        17: '4.25rem',
        17.5: '4.375rem',
        19: '4.75rem',
        21: '5.25rem',
        26: '6.5rem',
        29: '7.25rem',
        30: '7.5rem',
        43.5: '10.875rem',
        86: '21.5rem',
        '5.75vw': '5.75vw',
        '10vw': '10vw',
      },
    },
  },
};
