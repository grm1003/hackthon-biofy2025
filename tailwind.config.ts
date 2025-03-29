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
          "1.5rem",
          {
            lineHeight: "2rem",
            fontWeight: "400",
          },
        ],
        "body-medium": [
          "1.25rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "400",
          },
        ],
        "body-small": [
          "1rem",
          {
            lineHeight: "1.25rem",
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
          "2.2rem",
          {
            lineHeight: "2.5rem",
            fontWeight: "500",
          },
        ],
        "subtitle-medium": [
          "2rem",
          {
            lineHeight: "2.25rem",
            fontWeight: "500",
          },
        ],
        "subtitle-small": [
          "1.8rem",
          {
            lineHeight: "2rem",
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
        //         background: {
        //           DEFAULT: variables["$color.background.base"],
        //           neutral: {
        //             DEFAULT: variables["$color.background.neutral.default"],
        //             pronounced: variables["$color.background.neutral.pronounced"],
        //             bold: variables["$color.background.neutral.bold"],
        //             bolder: variables["$color.background.neutral.bolder"],
        //             boldest: variables["$color.background.neutral.boldest"],
        //             hovered: {
        //               DEFAULT: variables["$color.background.neutral.hovered"],
        //               solid: variables["$color.background.neutral.hovered.solid"],
        //             },
        //             disabled: {
        //               DEFAULT: variables["$color.background.neutral.disabled"],
        //               solid: variables["$color.background.neutral.disabled.solid"],
        //             },
        //             transparent: {
        //               72: variables["$color.background.neutral.transparent.72"],
        //               80: variables["$color.background.neutral.transparent.80"],
        //               88: variables["$color.background.neutral.transparent.88"],
        //               96: variables["$color.background.neutral.transparent.96"],
        //             },
        //           },
        //           transparent: {
        //             8: variables["$color.background.transparent.8"],
        //             12: variables["$color.background.transparent.12"],
        //             32: variables["$color.background.transparent.32"],
        //             56: variables["$color.background.transparent.56"],
        //           },
        //           inverse: {
        //             DEFAULT: variables["$color.background.inverse.default"],
        //             pronounced: variables["$color.background.inverse.pronounced"],
        //             bold: variables["$color.background.inverse.bold"],
        //             bolder: variables["$color.background.inverse.bolder"],
        //             boldest: variables["$color.background.inverse.boldest"],
        //             hovered: {
        //               DEFAULT: variables["$color.background.inverse.hovered"],
        //               solid: variables["$color.background.inverse.hovered.solid"],
        //             },
        //             disabled: {
        //               DEFAULT: variables["$color.background.inverse.disabled"],
        //               solid: variables["$color.background.inverse.disabled.solid"],
        //             },
        //             transparent: {
        //               8: variables["$color.background.inverse.transparent.8"],
        //               12: variables["$color.background.inverse.transparent.12"],
        //               32: variables["$color.background.inverse.transparent.32"],
        //               56: variables["$color.background.inverse.transparent.56"],
        //               72: variables["$color.background.inverse.transparent.72"],
        //               80: variables["$color.background.inverse.transparent.80"],
        //               88: variables["$color.background.inverse.transparent.88"],
        //               96: variables["$color.background.inverse.transparent.96"],
        //             },
        //           },
        //           "text-selected": variables["$color.background.text.selected"],
        //           brand: {
        //             subtlest: variables["$color.background.brand.subtlest"],
        //             subtler: variables["$color.background.brand.subtler"],
        //             subtle: variables["$color.background.brand.subtle"],
        //             DEFAULT: variables["$color.background.brand.default"],
        //             bold: variables["$color.background.brand.bold"],
        //             highlight: variables["$color.background.brand.highlight"],
        //           },
        //           danger: {
        //             subtlest: variables["$color.background.danger.subtlest"],
        //             subtler: variables["$color.background.danger.subtler"],
        //             subtle: variables["$color.background.danger.subtle"],
        //             DEFAULT: variables["$color.background.danger.default"],
        //             bold: variables["$color.background.danger.bold"],
        //           },
        //           success: {
        //             subtlest: variables["$color.background.success.subtlest"],
        //             subtler: variables["$color.background.success.subtler"],
        //             subtle: variables["$color.background.success.subtle"],
        //             DEFAULT: variables["$color.background.success.default"],
        //             bold: variables["$color.background.success.bold"],
        //           },
        //           warning: {
        //             subtlest: variables["$color.background.warning.subtlest"],
        //             subtler: variables["$color.background.warning.subtler"],
        //             subtle: variables["$color.background.warning.subtle"],
        //             DEFAULT: variables["$color.background.warning.default"],
        //             bold: variables["$color.background.warning.bold"],
        //           },
        //         },
        //         border: {
        //           subtle: variables["$color.border.subtle"],
        //           DEFAULT: variables["$color.border.default"],
        //           bold: variables["$color.border.bold"],
        //           bolder: variables["$color.border.bolder"],
        //           disabled: variables["$color.border.disabled"],
        //           focused: variables["$color.border.focused"],
        //           selected: variables["$color.border.selected"],
        //           danger: variables["$color.border.danger"],
        //           success: variables["$color.border.success"],
        //           warning: variables["$color.border.warning"],
        //           inverse: {
        //             subtle: variables["$color.border.inverse.subtle"],
        //             DEFAULT: variables["$color.border.inverse.default"],
        //             bold: variables["$color.border.inverse.bold"],
        //             bolder: variables["$color.border.inverse.bolder"],
        //             disabled: variables["$color.border.inverse.disabled"],
        //             selected: variables["$color.border.inverse.selected"],
        //           },
        //           brand: {
        //             primary: variables["$color.border.brand.primary"],
        //             secondary: variables["$color.border.brand.secondary"],
        //             tertiary: variables["$color.border.brand.tertiary"],
        //           },
        //         },
        //         icon: {
        //           subtler: variables["$color.icon.subtler"],
        //           subtle: variables["$color.icon.subtle"],
        //           DEFAULT: variables["$color.icon.default"],
        //           disabled: variables["$color.icon.disabled"],
        //           brand: {
        //             primary: variables["$color.icon.brand.primary"],
        //             secondary: variables["$color.icon.brand.secondary"],
        //             tertiary: variables["$color.icon.brand.tertiary"],
        //           },
        //           inverse: {
        //             subtler: variables["$color.icon.inverse.subtler"],
        //             subtle: variables["$color.icon.inverse.subtle"],
        //             DEFAULT: variables["$color.icon.inverse.default"],
        //             disabled: variables["$color.icon.inverse.disabled"],
        //           },
        //           danger: variables["$color.icon.danger"],
        //           success: variables["$color.icon.success"],
        //           warning: variables["$color.icon.warning"],
        //         },
        text: {
          DEFAULT: "#000",
          disabled: "#AAA",
          link: {
            DEFAULT: "#046",
            pressed: "#057",
          },
        },
        //         blanket: {
        //           DEFAULT: variables["$color.blanket.default"],
        //           bold: variables["$color.blanket.bold"],
        //         },
        //         skeleton: {
        //           subtle: variables["$color.skeleton.subtle"],
        //           DEFAULT: variables["$color.skeleton.default"],
        //           inverse: {
        //             subtle: variables["$color.skeleton.inverse.subtle"],
        //             DEFAULT: variables["$color.skeleton.inverse.default"],
        //           },
        //         },
        //         comp: {
        //           brush: {
        //             bg: variables["$color.comp.brush.bg"],
        //           },
        //           header: {
        //             bg: variables["$color.comp.header.bg"],
        //           },
        //           "empty-state": {
        //             icon: variables["$color.comp.empty-state.icon"],
        //             text: variables["$color.comp.empty-state.text"],
        //           },
        //           "ai-selection-card": {
        //             bg: variables["$color.comp.ai-selection-card.bg"],
        //           },
        //         },
        //       },
        //       boxShadow: {
        //         "elevation-trigger": "0.1px 0.1px 0.5px 0px rgba(41, 41, 66, 0.25)",
        //       },
        //       keyframes: {
        //         animateCheckboxMark: {
        //           "0%": { strokeDashoffset: "33" },
        //           "100%": { strokeDashoffset: "0" },
        //         },
        //         fadeInOut1: {
        //           "0%": { opacity: "0" },
        //           "20%": { opacity: "0" },
        //           "30%": { opacity: "1" },
        //           "90%": { opacity: "1" },
        //           "100%": { opacity: "0" },
        //         },
        //         fadeInOut2: {
        //           "0%": { opacity: "0" },
        //           "54%": { opacity: "0" },
        //           "60%": { opacity: "1" },
        //           "92%": { opacity: "1" },
        //           "100%": { opacity: "0" },
        //         },
        //         "caret-blink": {
        //           "0%,70%,100%": { opacity: "1" },
        //           "20%,50%": { opacity: "0" },
        //         },
        //         pulsate: {
        //           "0%": { transform: "scale(0.1)" },
        //           "50%": { transform: "scale(1)" },
        //           "100%": { transform: "scale(0.1)" },
        //         },
        //       },
        //       animation: {
        //         animateCheckboxMark: "animateCheckboxMark ease-in-out 0.15s forwards",
        //         fadeInOut1: "fadeInOut1 2.9s infinite",
        //         fadeInOut2: "fadeInOut2 2.9s infinite",
        //         "caret-blink": "caret-blink 1.25s ease-out infinite",
        //         pulsate: "pulsate 2s infinite",
        //       },
        //       height: {
        //         vh: "var(--vh)",
        //       },
        //       maxHeight: {
        //         vh: "var(--vh)",
        //       },
        //       minHeight: {
        //         vh: "var(--vh)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

export default config;
