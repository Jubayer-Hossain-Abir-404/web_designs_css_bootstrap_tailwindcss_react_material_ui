module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      Roboto: ['Roboto'],
      Roboto_Slab: ['Roboto Slab'],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        'lg': '780px',
        'xl': '1220px',
        '2xl': '1220px',
      },
    },
  },
  plugins: [],
}
