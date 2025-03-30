import { createFileRoute } from "@tanstack/react-router";

import { HeaderContainer } from "@/modules/header";
import { ContentContainer } from "@/modules/content";
import { FooterContainer } from "@/modules/footer";

export const Route = createFileRoute("/")({
  component: Component,
});

export function Component() {
  return (
    <div className="bg-[#fefefe]">
      <HeaderContainer />
      <ContentContainer />
      <FooterContainer />
    </div>
  );
}
