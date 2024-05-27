import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "360px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1600px",
    },
    colors: {
      background: "#141518",
      primary: "#b3c444",
      whatsapp: "#25D366",
      "--nextui-primary": "#b3c444",
      "grey-dark": "#212121",
      secundary: "#37B39F",
      danger: "#F1063F",
      white: "#FAFAFA",
      dark: "#000000",
      red: "#FF0000",
      default: "#FFF",
      yellow: "yellow",
      yellowLigth: "#F8CD5B",
      "color-yellow-light": "#ffce00",
      "color-gray-dark-light": "#23313b",
      "color-green-light": "rgb(0 203 169)",
      "dark-color-light": "#313638",
      "tag-color-light": "#FF5722",
      "grey-light-bg": "#f8f8f8",
      "dark-light": "rgba(0, 0, 0, 0.4)",
      "color-grey-light": "#979797",
      "grey-light": "#e4e4e4",
      "bg-grey-light": "#f2f2f2",
      "board-color-blue": "#0079bf",
      "board-color-green": "#519839",
      "board-color-purple": "#89609e",
      "board-color-pink": "#cd5a91",
      "board-color-orange-light": "#d29034",
      "board-color-green-light": "#4bbf6b",
      "board-color-blue-light": "#00aecc",
      "board-color-grey-light": "#838c91",
      "tag-color-orange-light": "#FAAD14",
      "tag-color-grey-light": "#808080",
      "text-color-grey": "#3b4144",
      "text-color-black-light": "#444444",
      "text-secundary": "#37B39F",
      "color-text-light": "#4AA8A0",
      "color-text-black-light": "#8C8C8C",
    },
    borderRadius: {
      xl: 30,
      lg: 24,
      md: 12,
      sm: 8,
      xs: 4,
    },
    fontFamily: {
      visby: ["var(--font-visby)"],
      mono: ["var(--font-roboto-mono)"],
    },
    fontSize: {
      xs: ["14px", "18px"],
      sm: ["20px", "24px"],
      base: ["24px", "28px"],
      lg: ["28px", "32px"],
      xl: ["32px", "42px"],
      xxl: ["42px", "50px"],
    },
    spacing: {
      1: "8px",
      2: "12px",
      3: "17px",
      4: "24px",
      5: "32px",
      6: "48px",
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "donec", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          fontFamily: {
            visby: ["var(--font-visby)"],
            mono: ["var(--font-roboto-mono)"],
          },
          colors: {
            background: "#141518",
            primary: "#b3c444",
            "grey-dark": "#212121",
            secundary: "#37B39F",
            danger: "#F1063F",
            white: "#FAFAFA",
            dark: "#000000",
            "bg-dark": "#181818",
            red: "#FF0000",
            default: "#FFF",
            yellow: "yellow",
            yellowLigth: "#F8CD5B",
            "color-yellow-light": "#ffce00",
            "color-gray-dark-light": "#23313b",
            "color-green-light": "rgb(0 203 169)",
            "color-green-light-transparent": "rgb(0 0 0 / 50%)",
            "dark-color-light": "#313638",
            "tag-color-light": "#FF5722",
            "grey-light-bg": "#F0F2F5",
            "dark-light": "rgb(36, 36, 36)",
            "color-grey-light": "#ababab",
            "grey-light": "#e4e4e4",
            "bg-grey-light": "#f2f2f2",
            "board-color-blue": "#0079bf",
            "board-color-green": "#519839",
            "board-color-purple": "#89609e",
            "board-color-pink": "#cd5a91",
            "board-color-orange-light": "#d29034",
            "board-color-green-light": "#4bbf6b",
            "board-color-blue-light": "#00aecc",
            "board-color-grey-light": "#838c91",
            "tag-color-orange-light": "#FAAD14",
            "tag-color-grey-light": "#808080",
            "text-color-grey": "#3b4144",
            "text-color-black-light": "#444444",
            "text-secundary": "#37B39F",
            "color-text-light": "#4AA8A0",
            "color-text-black-light": "#8C8C8C",
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};
