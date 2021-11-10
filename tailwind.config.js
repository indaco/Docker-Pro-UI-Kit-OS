//
// This plugin will let set opacity darker on Firefox in case you want to use a blur filter by apending
// "firefox:" to the class
// the snippet is att the bottom within the plugins.
const plugin = require("tailwindcss/plugin");
// Here we importa all tailwind colors
const colors = require("tailwindcss/colors");
module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
gitter:"rgba(136, 172, 243, 0.25) 0px 10px 30px, rgba(0, 0, 0, 0.03) 0px 1px 1px, rgba(0, 51, 167, 0.1) 0px 10px 20px;",
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', "ui-monospace"], // Ensure fonts with spaces have " " surrounding it.
        sans: [
          '"IBM Plex Sans"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ], // Ensure fonts with spaces have " " surrounding it.
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
        "10xl": "8rem",
        "11xl": "9rem",
        "12xl": "10rem",
        "13xl": "11rem",
        "14xl": "12rem",
        "15xl": "13rem",
        "16xl": "14rem",
        "17xl": "15rem",
        "18xl": "16rem",
        "19xl": "17rem",
        "20xl": "18rem",
      },
      colors: {
        // whites
        ghost: "#f9fafe",
        lilac: "#f7f8fa",
        gallery: "#f0f0f0",
        smoke: "#f0f0f0",
        mercury: "#e4e5e5",
        // dark
        metal: "#c5c7d3",
        santa: "#a0a1b2",
        manatee: "#9596a9",
        waterloo: "#7f8198",
        storm: "#676d89",
        comet: "#5c617a",
        bay: "#51566c",
        river: "#464a5d",
        tuna: "#313340",
        cinder: "#252731",
        pearl: "#1e2028",
        //system
        gitter: "#e4eeff",
        icy: "#d5ddfe",
        periwinkly: "#bfccfd",
        pastel: "#aabbfc",
        widowmaker: "#95aafc",
        periblue: "#8098fb",
        punch: "#6b87fa",
        oyster: "#5576f9",
        mana: "#4065f9",
        ultramarine: "#445cff",
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', "ui-monospace"], // Ensure fonts with spaces have " " surrounding it.
        sans: [
          '"IBM Plex Sans"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ], // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
