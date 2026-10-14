/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      backfroundColor: "#20242B",
      textPrimary: "#C778DD",
      textGray: "#BBC2CC",
      detailText: "#D1D5DB",
      textWhite: "#FFFFFF",
      textBlack: "#000000",
    },
    fontFamily: {
      firaCode: ["Fira Code"],
      dmMono: ["DM Mono", "monospace"],
    },
  },
  plugins: [],
};
