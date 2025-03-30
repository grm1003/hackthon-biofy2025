import { Outlet, createRootRoute } from "@tanstack/react-router";

import { HeaderContainer } from "@/modules/header";
import { FooterContainer } from "@/modules/footer";

export const RootComponent = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        <HeaderContainer />
        <Outlet />
        <FooterContainer />
      </div>
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
