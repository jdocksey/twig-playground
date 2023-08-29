// deno-fmt-ignore-file
// deno-lint-ignore-file

// https://tailwindcss.com/docs/configuration
tailwind.config = {
  theme: {
    screens: {
      'md': '769px',
      'lg': '992px',
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
        '78.75': '315px',
        '140': '560px',
      }
    }
  },
};
