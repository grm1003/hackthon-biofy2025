import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/*.{tsx,ts}",
    "./src/**/*.{tsx,ts}",
    "./src/infrastructure/ui/components/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: "Roboto, sans-serif",
        title: "Roboto, sans-serif",
        subtitle: "Roboto, sans-serif",
      },
      fontWeight: {
        DEFAULT: "400",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },

      fontSize: {
        "body-large": [
          "1.25rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "400",
          },
        ],
        "body-medium": [
          "1rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "400",
          },
        ],
        "body-small": [
          "0.8rem",
          {
            lineHeight: "1rem",
            fontWeight: "400",
          },
        ],
        "title-large": [
          "3.125rem",
          {
            lineHeight: "4rem",
            fontWeight: "700",
          },
        ],
        "title-medium": [
          "2.875rem",
          {
            lineHeight: "3.5rem",
            fontWeight: "700",
          },
        ],
        "title-small": [
          "2.625rem",
          {
            lineHeight: "3.25rem",
            fontWeight: "700",
          },
        ],
        "subtitle-large": [
          "2rem",
          {
            lineHeight: "2.25rem",
            fontWeight: "500",
          },
        ],
        "subtitle-medium": [
          "1.8rem",
          {
            lineHeight: "2rem",
            fontWeight: "500",
          },
        ],
        "subtitle-small": [
          "1.5rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "500",
          },
        ],
      },
      screens: {
        sm: "600px",
        md: "1280px",
        lg: "1920px",
      },
      colors: {
        background: {
          DEFAULT: "#11111b",
          neutral: {
            DEFAULT: "#1e1e2e",
            primary: "rgba(88, 91, 112, 0.7)",
            secondary: "rgb(49, 50, 68, 0.7)",
          },
          border: {
            DEFAULT: "rgb(137, 180, 250, 0.5)",
          },
        },
        text: {
          DEFAULT: "#cdd6f4",
          disabled: "#a6adc8",
          link: {
            DEFAULT: "#cdd6f4",
            pressed: "#bac2de",
          },
          inverse: {
            DEFAULT: "#11111b",
          },
        },
        textarea: {
          DEFAULT: "#1e1e2e",
        },
        button: {
          DEFAULT: "#9399b2",
          hover: "#6c7086",
        },
        icon: {
          DEFAULT: "rgba(88, 91, 112, 0.7)",
          hover: "rgb(49, 50, 68, 0.7)",
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

export default config;
