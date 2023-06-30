module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          0: "#fff",
          100: "#fafafa",
          200: "#eaeaea",
          300: "#999999",
          400: "#888888",
          500: "#666666",
          600: "#444444",
          700: "#333333",
          800: "#222222",
          900: "#111111",
        },
        custom: {
          900: "#0B0A0A",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: theme("colors.blue.700"),
              },
              textDecoration: "none",
            },
            code: { color: theme("colors.blue.400") },
            blockquote: {
              borderLeftColor: theme("colors.blue.500"),
              color: theme("colors.gray.500"),
              fontStyle: "normal",
            },
            pre: {
              backgroundColor: theme("colors.gray.100"),
              color: theme("colors.gray.500"),
            },
            thead: {
              borderBottomColor: theme("colors.gray.200"),
            },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.200"),
            a: {
              textDecoration: "none",
              color: theme("colors.blue.400"),
              "&:hover": {
                color: theme("colors.blue.600"),
              },
            },
            pre: {
              backgroundColor: theme("colors.neutral.900"),
              color: theme("colors.gray.200"),
            },
            code: { color: theme("colors.blue.400") },
            blockquote: {
              borderLeftColor: theme("colors.blue.500"),
              color: theme("colors.gray.100"),
              fontStyle: "normal",
            },
            "h2,h3,h4": {
              color: theme("colors.gray.100"),
            },
            hr: { borderColor: theme("colors.gray.700") },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.500") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.500") },
              },
            },
            strong: { color: theme("colors.gray.100") },
            thead: {
              th: {
                color: theme("colors.gray.100"),
                borderBottomColor: theme("colors.gray.600"),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
