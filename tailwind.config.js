/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#63e82e",
                  
          "secondary": "#e564d8",
                  
          "accent": "#da6ff2",
                  
          "neutral": "#28212C",
                  
          "base-100": "#E8ECF3",
                  
          "info": "#A2B8E7",
                  
          "success": "#18C36E",
                  
          "warning": "#C77305",
                  
          "error": "#EE4B2B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
