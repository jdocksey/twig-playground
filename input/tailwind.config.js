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
      '8xl':   ['3.125rem',  '1.3'],     // 50px, 65px
      '9xl':   ['3.75rem',   'normal'],  // 60px
      'super': ['12.5rem',   'normal'],  // 200px
    },
    lineHeight: {
      normal:       'normal',
      match:        '1',
      tight:        '1.11111',
      'snug-tight': '1.3',
      snug:         '1.42857',
      standard:     '1.4375',
      relaxed:      '1.5',
      loose:        '1.5625',
      'loose-xl':   '1.66666',
      'loose-2xl':   '1.875',
    },
    fontWeight: {
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    letterSpacing: {
      wide: '0.3px',
      wider: '1.3px',
    },
    animation: {
      'bounce-by-growing': 'bounce-by-growing .8s infinite',
      'bounce-by-growing-small': 'bounce-by-growing-small .8s infinite',
      'fade-in': 'fade-in 0.6s ease forwards',
      'fade-in-left': 'fade-in-left 0.6s ease forwards',
      'fade-in-right': 'fade-in-right 0.6s ease forwards',
      'fade-in-up': 'fade-in-up 0.6s ease forwards',
    },
    keyframes: {
      /*
        The "bounce-by-growing" animations create a bouncing effect for an element by increasing its height. Typically `transform: translateY(...)` is used for this,
        but this may result in poor UX when the animation is triggered by a mouse hover, as the element can then move away from the cursor on its on, therefore automatically stopping, and then restarting, the animation.
        Increasing the height of the element instead ensures that the element will remain under the hovering cursor.
      */
      'bounce-by-growing': {
        '0%, 100%': {
          height: '4rem',
          'animation-timing-function': 'cubic-bezier(0, 0, 0 .2, 1)',
        },
        '50%': {
          height: '4.8rem',
          'animation-timing-function': 'cubic-bezier(0.95, 0, 1, 1)',
        },
      },
      'bounce-by-growing-small': {
        '0%, 100%': {
          height: '2rem',
          'animation-timing-function': 'cubic-bezier(0, 0, 0 .2, 1)',
        },
        '50%': {
          height: '2.75rem',
          'animation-timing-function': 'cubic-bezier(0.95, 0, 1, 1)',
        },
      },
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
    boxShadow: {
      'sm': '4px 2px 10px 4px rgba(0, 0, 0, 0.06)',
      'md': '1px 4px 4px  0px rgba(0, 0, 0, 0.25)',
      'md-light': '0px 2px 8px  0px rgba(0, 0, 0, 0.25)',
      'map': '0px 3px 5px  1px rgba(0, 0, 0, 0.3)',
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
          700: '#333333',
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
      gridTemplateColumns: {
        /* 4 = 4 columns / max-content/fill = each column takes up at least the maximum space of its content, and then expands to fill any remaining space */
        '4-max-content/fill': 'repeat(4, minmax(max-content, 1fr))',
      },
      gridTemplateRows: {
        '2-min-content-1fr': 'min-content 1fr',
      },
      transitionDuration: {
        250: '250ms',
        600: '600ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
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
        176: '44rem',
      },
      maxWidth: {
        185: '46.25rem',
        // This value is 24px greater than half of the content limit of 1200px to account for the 1.5rem (24px) of horizontal padding on just one side
        'content-container-limit-1/2': '624px',
        // This value is greater than the actual content of 1200px to account for 3rem (48px) of horizontal padding between the content and the window edges
        'content-container-limit': '1248px',
        'content-extra-wide': '1440px',
        // These are the maximum widths for sliders: 750/8 = slide width of 750px, gap of 8px, -[number] = number of slides
        // TODO: Determine which, or any, of these should be used in production
        'slider-750/8-1': '750px',
        'slider-750/8-2': '1508px',
        'slider-750/8-3': '2266px',
        'slider-750/8-4': '3024px',
        'slider-750/8-5': '3782px',
        'slider-750/8-6': '4540px',
        'slider-750/8-7': '5298px',
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
        8.5: '2.125rem',
        8.75: '2.1875rem',
        9.5: '2.375rem',
        11.5: '2.875rem',
        12.5: '3.125rem',
        13: '3.25rem',
        13.5: '3.375rem',
        15: '3.75rem',
        16.5: '4.125rem',
        17: '4.25rem',
        17.5: '4.375rem',
        18.5: '4.625rem',
        19: '4.75rem',
        21: '5.25rem',
        21.25: '5.3125rem',
        23: '5.75rem',
        26: '6.5rem',
        29: '7.25rem',
        30: '7.5rem',
        34: '8.5rem',
        38: '9.5rem',
        43: '10.75rem',
        43.5: '10.875rem',
        44: '11rem',
        70: '17.5rem',
        78.75: '19.6875rem',
        86: '21.5rem',
        93: '23.25rem',
        110: '27.5rem',
        135: '33.75rem',
        140: '35rem',
        142.5: '35.625rem',
        '15vh': '15vh',
        '5.75vw': '5.75vw',
        '10vw': '10vw',
        '67vw': '67vw',
      },
    },
  },
};
