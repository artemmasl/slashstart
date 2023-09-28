/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./components/sections/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      'sans':  [
        "Inter var, sans-serif",
        { fontFeatureSettings: '"cv11", "ss01"' },
      ],
    },
    extend: {
      padding: {
        15: '60px'
      },
      margin: {
        15: '60px'
      },
      boxShadow: {
        md: '0 4px 4px'
      },
    },
    container: {
      center: true,
      screens: {
        '2xl': '1400px'
      }
    }
  },
  plugins: []
}
