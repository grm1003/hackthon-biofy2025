import type { Config } from "jest";

const config: Config = {
  setupFilesAfterEnv: ["@testing-library/jest-dom", "<rootDir>/jest.setup.tsx"],
  coverageReporters: ["json", "html", "lcovonly"],
  testRegex: "(?<!integ\\.)test\\.ts(x)?$",
  preset: "ts-jest",
  testEnvironment: "jsdom",
  clearMocks: true,
  collectCoverage: true,
  reporters: ["default", "jest-junit"],
  collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}"],
  coveragePathIgnorePatterns: [
    "App.tsx",
    "main.tsx",
    "env.ts",
    "routeTree.gen.ts",
    "tailwind-variables.ts",
    "index.(ts|tsx)",
    ".integ.test.(ts|tsx)",
    ".test.(ts|tsx)",
    ".mock.(ts|tsx)",
    "@fixtures",
  ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/e2e/",
    "<rootDir>/.storybook/",
  ],
  transformIgnorePatterns: ["node_modules", "e2e", ".storybook"],
  modulePathIgnorePatterns: [
    "<rootDir>/.storybook/",
    "<rootDir>/src/presentation/layouts/ai/hooks",
  ],
  transform: {
    ".+\\.(ts|tsx)$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
    "^.+\\.svg$": "jest-transformer-svg",
  },
  moduleNameMapper: {
    "^(@/)(.*)$": "<rootDir>/src/$2",
    "\\.svg\\?(react|url)$": "<rootDir>/__mocks__/image.tsx",
  },
};

export default config;
