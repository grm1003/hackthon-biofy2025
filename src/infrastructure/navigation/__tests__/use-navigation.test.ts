import { renderHook } from "@testing-library/react";

import { LAST_ROUTES_ACCESSED_KEY } from "../constants";
import { useNavigation } from "../use-navigation";

const navigate = jest.fn().mockResolvedValue("mocked");

jest.mock("@tanstack/react-router", () => ({
  useNavigate: () => navigate,
}));

describe("useNavigation", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it("should navigate to the given path", () => {
    const { result } = renderHook(() => useNavigation());

    result.current.navigate("/");

    expect(sessionStorage.getItem(LAST_ROUTES_ACCESSED_KEY)).toBe(
      '["/dashboard"]',
    );
    expect(navigate).toHaveBeenCalledWith({ to: "/" });
  });

  it("should add many routes to the history", () => {
    sessionStorage.setItem(LAST_ROUTES_ACCESSED_KEY, "");
    const { result } = renderHook(() => useNavigation());
    result.current.navigate("/");
    result.current.navigate("/ai");
    result.current.navigate("/ai/generate");
    expect(sessionStorage.getItem(LAST_ROUTES_ACCESSED_KEY)).toBe(
      '["/dashboard","/dashboard","/dashboard"]',
    );
  });

  it("should remove the oldest route from the history when it reaches the limit", () => {
    sessionStorage.setItem(LAST_ROUTES_ACCESSED_KEY, "");
    const { result } = renderHook(() => useNavigation());

    // biome-ignore lint/complexity/noForEach: test
    Array.from({ length: 25 }).forEach(() => result.current.navigate("/"));

    expect(
      JSON.parse(sessionStorage.getItem(LAST_ROUTES_ACCESSED_KEY) ?? ""),
    ).toHaveLength(21);
  });
});
