import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import { I18nProvider } from "./infrastructure/i18n";
import { routeTree } from "./routeTree.gen";

export const appRouter = createRouter({ routeTree });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof appRouter;
  }
}

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <RouterProvider router={appRouter} />
      </I18nProvider>
    </QueryClientProvider>
  );
}
