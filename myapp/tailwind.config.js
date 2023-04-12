/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lightwhite": "#f9fafb",
        "lightgrayBg": "#e5e7eb",
        "lightgray": "#D1D5DB",
       "gray": "#D7D7D7",
       "searchBargrey": "#f3f4f6",
       "btntextgray": "#374151",
       "darkgray": "#6D798B",
       "darkblue": "#17174A",
       "skyblue": "#368BFF",
       "lightskyblue": "#EDF5FF",
       "linkedinblue": "#0072b1",
       "redditorange": "#FF4300",
      },
    },
  },
  plugins: [],
}