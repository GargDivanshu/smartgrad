/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       "gray": "#D7D7D7",
       "darkgray": "#6D798B",
       "darkblue": "#17174A",
       "skyblue": "#368BFF",
       "lightskyblue": "#EDF5FF",
      },
    },
  },
  plugins: [],
}