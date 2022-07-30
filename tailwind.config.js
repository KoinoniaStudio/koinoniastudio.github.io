module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'heroimg' : "url('./images/desktop/Full/landscape/iNNOVATIONphotography-commercial-photographer-Swansea-80.jpg')",
        'heroAbout' : "url('./images/Aboutme/iNNOVATIONphotography-commercial-photographer-Swansea-297.jpg')"
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],
      },
      letterSpacing: {
        widest: '.3em',
      },
    },
  },
  plugins: [],
}
