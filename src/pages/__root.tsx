import { Outlet, createRootRoute } from "@tanstack/react-router";

export const RootComponent = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        <Outlet />
      </div>
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
