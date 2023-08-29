// deno-fmt-ignore-file
// deno-lint-ignore-file

// https://tailwindcss.com/docs/configuration
tailwind.config = {
  theme: {
    animation: {
      'bounce': 'bounce .8s infinite'
    },
    keyframes: {
      'bounce': {
        '0%': {
          transform: 'translateY(0)',
          'animation-timing-function': 'cubic-bezier(0, 0, 0 .2, 1)',
        },
        '50%': {
          transform: 'translateY(-20%)',
          'animation-timing-function': 'cubic-bezier(0.95, 0, 1, 1)',
        },
      },
    },
  },
};
