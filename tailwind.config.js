/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   brFirma: ["BR Firma", ...defaultFonts]
      // }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}

