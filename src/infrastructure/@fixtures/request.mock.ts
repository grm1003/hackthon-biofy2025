import { request } from "@/infrastructure/network/request";

jest.mock("@/infrastructure/network/request");

export const mockRequest = <T = Record<any, any>>(response?: T) => {
  return jest.mocked(request).mockResolvedValue(response);
};
