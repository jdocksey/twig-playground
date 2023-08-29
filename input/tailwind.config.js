// deno-fmt-ignore-file
// deno-lint-ignore-file

// https://tailwindcss.com/docs/configuration
tailwind.config = {
  theme: {
    screens: {
      'md': '769px',
      'lg': '992px',
    },
    animation: {
      // TODO: Add an explanation
      'bounce-by-growing': 'bounce-by-growing .8s infinite'
    },
    keyframes: {
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
    },
    extend: {
      boxShadow: {
        'md-heavy': '0 3px 5px 1px rgb(0 0 0 / 0.3)',
      },
      colors: {
        'blue-ispe': '#0052A5',
      },
      spacing: {
        '4.5': '1.125rem',
      }
    }
  },
};
