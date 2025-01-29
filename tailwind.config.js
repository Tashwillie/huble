/** @type {import('tailwindcss').Config}*/
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "4rem",
      screens: {
        "2xl": "1600px",
        xl: "1300px",
        lg: "1020px",
        md: "800px",
        sm: "600px",
        exsm: "360px"
        
      },
      maxWidth: "100%",
    },

    screens: {
      "2xl": { max: "1600px" },
      // => @media (max-width: 1600px) 

      xl: { max: "1300px" },
      // => @media (max-width: 1300px) 

      lg: { max: "1020px" },
      // => @media (max-width: 1020px) 

      md: { max: "800px" },
      // => @media (max-width: 800px) 

      sm: { max: "600px" },
      
      exsm: { max: "360px" },
      // => @media (max-width: 360px) 
    },
    extend: {
      colors: {
        "text-yellow-500": "#283c92",
      },
    },
  },
  plugins: [],
};
