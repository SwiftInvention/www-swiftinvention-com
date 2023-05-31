const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{tsx, ts, css, html, js, jsx}' ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primaryCol1: '#000000', // black
      primaryCol2: '#FFFFFF', // white
      primaryCol3: '#FF7B53', // orange coral
      secondaryCol1: '#F3F3F3', // gray concrete
      secondaryCol2: '#D8D8D8', // gray alto
      secondaryCol3: '#979797', // dusty gray
      secondaryCol4: '#2D2D2D', // gray mineshaft lighter
      secondaryCol5: '#212121', // gray mineshaft darker      
      secondaryCol6: '#C2C2C2',
    },
    stroke: theme => ({
      orange: theme('colors.orange.coral'),
      black: theme('colors.black'),
    }),
    extend: {
      maxWidth: {
        '8xl': '90rem',
        'sm2': '235px'
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '25': '6.25rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '37': '9.25rem',
        '50': '3.75rem',
        '100': '25rem'
      },
      height: {
        '62': '15.5rem'
      },
      boxShadow: {
        'card': '0 0 23px 0 rgba(0,0,0,0.5)',
        'cardHovered': '0 0 35px 0 rgba(0,0,0,0.7)'
      },
      opacity: {
        '65': '.65'
      },
      fontSize: {
        '2.5xl': ['1.75rem', '2rem']
      },
      fontFamily: {
        sans: [
          'Akzidenz-Grotesk',
          ...defaultTheme.fontFamily.sans,
        ]
      },
    }
  },
  variants: {
    extend: {
      display: ['responsive', 'hover', 'group-hover'],
      borderWidth: ['hover']
    }
  },
  plugins: [],
};