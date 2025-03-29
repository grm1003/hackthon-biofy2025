import fetch from "jest-fetch-mock";

import { mockEnv } from "@/infrastructure/@fixtures/env.mock";

import { request } from "../request";

describe("request", () => {
  beforeEach(() => {
    mockEnv({
      VITE_API_GATEWAY_URL: "https://api-gateway.com",
    });

    fetch.mockResponseOnce(JSON.stringify({ id: 123 }));
  });

  it("should call endpoint with correct api gateway url and path", async () => {
    await request("/me");

    expect(fetch.mock.calls[0][0]).toEqual("https://api-gateway.com/me");
  });

  it("should call with default method and headers", async () => {
    await request("/me");

    expect(fetch.mock.calls[0][1]).toEqual({
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  });

  it("should call with custom method and headers", async () => {
    await request("/me", {
      method: "POST",
      headers: {
        Authorization: "Bearer token",
        "Content-Type": "text/plain",
      },
    });

    expect(fetch.mock.calls[0][1]).toEqual({
      method: "POST",
      headers: {
        Authorization: "Bearer token",
        "Content-Type": "text/plain",
      },
    });
  });
});
