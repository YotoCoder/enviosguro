/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      backgroundImage: {
        backgroundHero: 'url("/images/caracas.jpg")',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      animation: {
        "scale-in-center": "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },

      keyframes: {
        "scale-in-center": {
          "0%": {
            transform: "scale(0)",
            opacity: "0",
          },

          "100%": {
            transform: "scale(1)",

            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  // daisyui: {
  //   themes: [
  //     {
  //       "mytheme": {
  //         "primary": "#ffffff",
  //         "primary-focus": "#ffffff",
  //         "primary-content": "#ffffff",
  //         "secondary": "#ffffff",
  //         "secondary-focus": "#ffffff",
  //         "secondary-content": "#ffffff",
  //         "accent": "#ffffff",
  //         "accent-focus": "#ffffff",
  //         "accent-content": "#ffffff",
  //         "neutral": "#ffffff",
  //         "neutral-focus": "#ffffff",
  //         "neutral-content": "#ffffff",
  //         "base-100": "#ffffff",
  //         "base-200": "#ffffff",
  //         "base-300": "#ffffff",
  //         "base-content": "#ffffff",
  //         "info": "#ffffff",
  //         "success": "#ffffff",
  //         "warning": "#ffffff",
  //         "error": "#ffffff",
  //       },
  //     },
  //   ],
  // },
};
