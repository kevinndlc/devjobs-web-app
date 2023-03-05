import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    colors: {
      violet: 'hsl(235, 69%, 61%)',
      'light-violet': 'hsl(235, 82%, 77%)',
      'very-dark-blue': 'hsl(219, 29%, 14%)',
      midnight: 'hsl(220, 29%, 10%)',
      white: 'hsl(0, 0%, 100%)',
      'light-grey': 'hsl(210, 22%, 96%)',
      grey: 'hsl(212, 23%, 69%)',
      'dark-grey': 'hsl(214, 17%, 51%)',
      transparent: 'transparent',
    },
  },
};
