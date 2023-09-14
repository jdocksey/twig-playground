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
    extend: {
      // TODO: Move this out of `extend` when moving into the production code base
      colors: {
        black: '#000000',
        blue: {
          400: '#0abbe8',
          800: '#0052a5',
          950: '#001b3f',
        },
        cyan: {
          50: "#e5f7fa",
        },
        gray: {
          50: "#fafafa" /* background color */,
        },
        green: {
          500: '#b6c42c',
        },
        white: '#ffffff',
      },
    },
  },
};
