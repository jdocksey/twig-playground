// deno-fmt-ignore-file
// deno-lint-ignore-file

// https://tailwindcss.com/docs/configuration
tailwind.config = {
  theme: {
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
      spacing: {
        '4.5': '1.125rem',
      }
    }
  },
};
