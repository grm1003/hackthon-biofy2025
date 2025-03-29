import { createFileRoute } from "@tanstack/react-router";

import { HeaderContainer } from "@/modules/header";

export const Route = createFileRoute("/")({
  component: Component,
});

export function Component() {
  return (
    <>
      <HeaderContainer />
      <span>Hello</span>
    </>
  );
}
