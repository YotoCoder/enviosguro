/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backgroundHero': 'url("/images/caracas.jpg")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
  

}
