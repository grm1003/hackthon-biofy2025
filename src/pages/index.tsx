import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Component,
});

export function Component() {
  return <span>Hello</span>;
}
