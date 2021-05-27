module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Kanit"],
      body: ["Kanit"],
    },
    extend: {
      colors: {
        primary: {
          1000: "#000051",
          900: "#1A237E",
          500: "#3F51B5",
          600: "#3949AB",
        },
        secondary: {
          500: "#00BCD4",
          400: "#26C6DA",
          300: "#4DD0E1",
        },
        grey: {
          90: "#212121",
          70: "#616161",
          60: "#757575",
          30: "#E0E0E0",
          10: "#F5F5F5",
        },
      },

      fontSize: {
        icon: "1.75rem",
        symbol: "2rem",
      },
      width: {
        "916px": "916px",
        "675px": "675px",
        "642px": "642px",
        "640px": "640px",
        "540px": "540px",
        "490px": "490px",
        "339px": "339px",
        "266px": "266px",
        "200px": "200px",
      },
      height: {
        "900px": "830px",
        "664px": "664px",
        "616px": "616px",
        "504px": "504px",
        "286px": "286px",
        "220px": "220px",
        "178px": "178px",
        "154px": "154px",
      },
      maxWidth: {
        "310px": "310px",
        "1440px": "1440px",
      },
      backgroundImage: (theme) => ({
        "ksw-work": "url('/svg/ksw_work.svg')",
        "ksw-work-mobile": "url('/svg/ksw_work_mobile.svg')",
      }),
      backgroundPosition: {
        "bottom-custom": "90% center",
        "bottom-custom-mobile": "90% bottom",
        "bottom-center": "bottom center",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      msm: { max: "640px" },
      mmd: { max: "768px" },
      mlg: { max: "1024px" },
      mxl: { max: "1280px" },
      m2xl: { max: "1536px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
