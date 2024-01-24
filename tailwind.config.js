/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primario': '#2595B8',
        'secundario': '#314A52',
        'llamativo': '#00B4EB',
        'tono-bajo': '#357285',
        'opaco': '#293133',
        'blanco': '#ffffff',
        'negro': '#000000'
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Nunito: ['Nunito Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

