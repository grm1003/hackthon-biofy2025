import { TextDecoder, TextEncoder } from "node:util";

import fetchMock from "jest-fetch-mock";
import React from "react";
import ResizeObserver from "resize-observer-polyfill";

fetchMock.enableMocks();

Object.assign(global, {
  TextDecoder,
  TextEncoder,
  ResizeObserver,
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

window.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: () => null,
  unobserve: () => null,
}));

// @ts-ignore
window.PointerEvent = class PointerEvent extends Event {};
window.HTMLElement.prototype.scrollIntoView = jest.fn();
window.HTMLElement.prototype.hasPointerCapture = jest.fn();
window.HTMLElement.prototype.setPointerCapture = jest.fn();
window.HTMLElement.prototype.releasePointerCapture = jest.fn();
window.scrollTo = jest.fn();
window.URL.createObjectURL = jest.fn(() => "mock");

jest.mock("@tanstack/react-router", () => ({
  ...jest.requireActual("@tanstack/react-router"),
  Link: ({ children, ...props }: { children: React.ReactNode; to: string }) => (
    <a {...props}>{children}</a>
  ),
}));

jest.mock("@/infrastructure/environment", () => ({
  getEnv: jest.fn((key) => {
    if (key === "VITE_CDN_URL") return "https://cdn.com";

    return key;
  }),
}));

jest.mock("lottie-react", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="lottie-react" />),
}));
