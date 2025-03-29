import { getEnv } from "@/infrastructure/environment";

export const request = async <Response = Record<any, any>>(
  path: string,
  options?: RequestInit,
): Promise<Response> => {
  const apiGatewayUrl = getEnv("VITE_API_GATEWAY_URL");

  const response = await fetch(`${apiGatewayUrl}${path}`, {
    ...options,
    method: options?.method ?? "GET",
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (response.ok) {
    if (options?.method === "DELETE" && response.status === 204) {
      return void 0 as unknown as Response;
    }

    return (await response.json()) as Response;
  }

  throw await response.json();
};
