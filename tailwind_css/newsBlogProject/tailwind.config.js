/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
      screens: {
        'lg': '1220px',
        'xl': '1220px',
        '2xl': '1220px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}
