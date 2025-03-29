import { createFileRoute } from "@tanstack/react-router";

import { HeaderContainer } from "@/modules/header";
import { ContentContainer } from "@/modules/content";

export const Route = createFileRoute("/")({
  component: Component,
});

export function Component() {
  return (
    <div className="bg-[#fefefe]">
      <HeaderContainer />
      <ContentContainer />
    </div>
  );
}
