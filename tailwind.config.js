/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      backfroundColor: "#282C33",
      textPrimary: "#C778DD",
      textGray: "#ABB2BF",
      textWhite: "#FFFFFF",
    },
    fontFamily: {
      firaCode: ["Fira Code"],
      dmMono: ["DM Mono", "monospace"],
    },
  },
  plugins: [],
};
