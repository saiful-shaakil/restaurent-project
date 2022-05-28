module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      popins: ["Poppins", "sans-serif"],
      ubutu: ["Ubuntu", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F54748",

          secondary: "#f5cac2",

          accent: "#fae5df",

          neutral: "#303179",

          "base-100": "#FFFFFF",

          info: "#141850",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
};
