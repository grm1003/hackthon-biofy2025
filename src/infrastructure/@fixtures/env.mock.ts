import { getEnv } from "@/infrastructure/environment";

jest.mock("@/infrastructure/environment");

const defaultEnv: Omit<
  ImportMeta["env"],
  "PROD" | "DEV" | "SSR" | "MODE" | "BASE_URL"
> = {
  VITE_API_URL: "https://api.example.com",
};

export const mockEnv = (env: typeof defaultEnv = defaultEnv) => {
  jest
    .mocked(getEnv)
    .mockImplementation(
      (key: keyof ImportMeta["env"], defaultValue?: string) => {
        return env[key] || defaultValue;
      },
    );

  return env;
};
