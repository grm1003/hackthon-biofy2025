import { privateRequest } from "@/infrastructure/network/private";

jest.mock("@/infrastructure/network/private");

export const mockPrivate = <T = Record<any, any>>(response?: T) => {
  return jest.mocked(privateRequest).mockResolvedValue(response);
};
