/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "dist/**/*.html" ],
  theme: {
    extend: {
      colors: {
        primary: "#FE6601",
        secondary:"#09483F"
      },
      screens: {
        max2xl: { max: "1535px" },
        // => @media (max-width: 1535px) { ... }
        maxxl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
        maxmidxl: { max: "1150px" },
        // => @media (max-width: 1150px) { ... }
        maxlg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
        maxmd: { max: "767px" },
        // => @media (max-width: 767px) { ... }
        maxsm: { max: "639px" },

        maxvarysm: {max : "450px"},

        maxvarysmvarysm: {max : "370px"},

        maxvarysmvarysmvarysm: {max : "340px"},
      },
    },
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: '0.5rem',
    //     lg:'2rem'

    //   },
    // },
  },
  plugins: [ 'prettier-plugin-tailwindcss' ],

}

