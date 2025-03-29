import {
  FileRoutesByPath,
  NavigateOptions,
  useNavigate,
} from "@tanstack/react-router";

export type ToRoutes = keyof FileRoutesByPath;

export function useNavigation() {
  const doNavigate = useNavigate();

  /**
   * Navigate to a route and save the current route as the last route accessed.
   * @param to      - The route to navigate to. If the route is not prefixed with the language code, it will be added automatically.
   * @param options - Navigate options to be passed down while navigating
   */
  function navigate(
    to: ToRoutes,
    options?: { newTab?: boolean } & NavigateOptions,
  ) {
    const { newTab, ...rest } = options ?? {};
    if (newTab) {
      Object.assign(document.createElement("a"), {
        target: "_blank",
        rel: "next opener",
        href: to,
      }).click();

      return;
    }

    doNavigate({ to, ...rest });
  }

  return {
    navigate,
  };
}
