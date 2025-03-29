import { request } from "./request";

export const privateRequest = async <Response = Record<any, any>>(
  path: string,
  options?: RequestInit,
) => {
  // const apiUrl = getEnv("VITE_API_URL");

  const requestData = {
    ...options,
    method: options?.method ?? "GET",
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  } satisfies RequestInit;

  // @ts-ignore - This is a hack to add the Authorization header to the request
  requestData.headers.Authorization = authorization;

  return request<Response>(path, requestData);
};
