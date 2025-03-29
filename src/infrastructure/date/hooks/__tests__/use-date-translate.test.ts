import { renderHook } from "@testing-library/react";

import { useDateTranslate } from "../use-date-translate";

describe("useDateTranslate", () => {
  test.each([
    "2020-12-20T13:09:42.64+00:00",
    "2022-01-28T13:09:42.64+00:00",
    "2010-10-01T13:09:42.64+00:00",
    new Date("2020-12-30T13:09:42.64+00:00"),
  ])("should return value '%p'", async (value) => {
    const { result } = renderHook(useDateTranslate);
    expect(result.current.translate(new Date(value))).toBe(
      new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(value)),
    );
  });

  it("should return short", () => {
    const { result } = renderHook(useDateTranslate);
    expect(
      result.current.translate(new Date("2020-12-20T13:09:42.64+00:00"), {
        short: true,
      }),
    ).toBe("12/20/20");
  });

  it("should return hours", () => {
    const { result } = renderHook(useDateTranslate);
    expect(
      result.current.translate(new Date("2020-12-20T13:09:42.64+00:00"), {
        hours: true,
      }),
    ).toBe(
      new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      }).format(new Date("2020-12-20T13:09:42.64+00:00")),
    );
  });
});
