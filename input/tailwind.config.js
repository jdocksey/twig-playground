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
      'h1': ['2.8125rem', 'normal'],
      'h1-mobile': ['1.5625', 'normal'],
      'h2': ['1.875rem', 'normal'],
      'h2-mobile': ['1.5625', 'normal'],
      'h3': ['1.25rem', 'normal'],
      'h3-mobile': ['1.125', 'normal'],
      'h4': ['1.25rem', 'normal'],
      'h4-mobile': ['1.125rem', 'normal'],
      'h5': ['1.125rem', 'normal'],
      'h5-mobile': ['1.0625', 'normal'],
      'h6': ['1rem', 'normal'],
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
          50: "#e5f7fa",
        },
        gray: {
          50: "#fafafa", // background color
        },
        green: {
          500: '#b6c42c',
        },
        white: '#ffffff',
      },
    },
  },
};
