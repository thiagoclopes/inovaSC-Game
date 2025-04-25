/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
				'vibrant-green': '#60B320',
        'soft-green': '#7FC14C',
        'soft-pink' : '#E7D7D7',
        'soft-red': '#771115',
			}
    },
  },
  plugins: [],
}

