module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "customColor": "#ff6b6b"
      },
      fontFamily: {
        'paragraph': ['Poppins', "sans-serif"],
        'heading': ['Space Grotesk', "sans-serif"]
      }
    },
  },
  plugins: [],
}
