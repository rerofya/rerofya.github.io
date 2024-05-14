export default {
  content: ['./src/**/*.{html,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#00a8e8',
        dark: '#111111',
        light: '#fff',
        secondary: '#e9e9e9',
        icon: '#5f5f5f',
        paragraph: '#434343'
      }
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
}

