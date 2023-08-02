/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    fontFamily:{
      blackhans: ['Black Han Sans', 'sans-serif'], 
      opensans: ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors:{
        section1: '#404eed',
        Greysections:'#f6f6f6',
        bottomButton:"#5865f2",
        bottomButtonHover:"#7983f5",
        buttonBrowse:"#23272a",
        buttonBrowseHover:"#313338",
        footer:"#23272a",
        hedear:"#23272a",

      },
      backgroundImage:{
        'hero-pattern': "url('./assest/asset 0.svg')",
        'bottom-hero' :  "url('./assest/asset 6.svg')",
        'bottom-stars' :  "url('./assest/asset 7.svg')",
      },
      filter: {
        invert: 'invert(1)',
      },
    },
  },
  plugins: [],
}

