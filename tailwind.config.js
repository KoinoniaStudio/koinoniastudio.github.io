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
        'heroimg' : "url('../images/desktop/Full/landscape/iNNOVATIONphotography-commercial-photographer-Swansea-80.jpg')",
        'heroAbout' : "url('../images/Aboutme/iNNOVATIONphotography-commercial-photographer-Swansea-297.jpg')",
        'wallart' : "url('../images/desktop/Full/landscape/iNNOVATIONphotography-commercial-photographer-Swansea-97.jpg')",
        'coasters': "url('../images/coasters/iNNOVATIONphotography-commercial-photographer-Swansea-212.jpg')",
        'allproducts' : "url('../images/desktop/Full/landscape/iNNOVATIONphotography-commercial-photographer-Swansea-185.jpg')",
        'noir' : "url('../images/coasters/iNNOVATIONphotography-commercial-photographer-Swansea-203.jpg')",
        'bliss' : "url('../images/coasters/iNNOVATIONphotography-commercial-photographer-Swansea-233.jpg')",
        'vortex' : "url('../images/coasters/iNNOVATIONphotography-commercial-photographer-Swansea-256.jpg')",
        'langland' : "url('../images/coasters/iNNOVATIONphotography-commercial-photographer-Swansea-264.jpg')",
        'promise' : "url('../images/coasters/iNNOVATIONphotography-commercial-photographer-Swansea-275.jpg')"
        
      },
      colors: {
        strongCyan: 'hsl(171, 66%, 44%)',
        lightBlue: 'hsl(233, 100%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
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
