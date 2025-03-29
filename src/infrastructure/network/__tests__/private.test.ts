import { mockRequest } from "@/infrastructure/@fixtures/request.mock";

import { privateRequest } from "../private";

describe("privateRequest", () => {
  beforeEach(() => {
    mockRequest();
  });

  it("should make a request with signed headers", async () => {
    const request = mockRequest();

    await privateRequest("/me");

    expect(request).toHaveBeenCalledWith("/me", {
      method: "GET",
      headers: {
        Host: "api-gateway.com",
        Authorization: "signed authorization",
        "Content-Type": "application/json",
        "X-Amz-Security-Token": "sessionToken",
      },
    });
  });
});
