/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from "@tanstack/react-router"

// Import Routes

import { Route as rootRoute } from "./pages/__root"
import { Route as UserSubscriptionImport } from "./pages/user-subscription"
import { Route as SignUpImport } from "./pages/sign-up"
import { Route as SignOutImport } from "./pages/sign-out"
import { Route as SignInImport } from "./pages/sign-in"
import { Route as ManagementImport } from "./pages/management"
import { Route as GenerateImport } from "./pages/generate"
import { Route as ForgotPasswordImport } from "./pages/forgot-password"
import { Route as ConfirmationImport } from "./pages/confirmation"
import { Route as AiImport } from "./pages/ai"
import { Route as IndexImport } from "./pages/index"
import { Route as GenerateIndexImport } from "./pages/generate/index"
import { Route as AiIndexImport } from "./pages/ai/index"
import { Route as UserSubscriptionPaymentImport } from "./pages/user-subscription/payment"

// Create Virtual Routes

const LearnLazyImport = createFileRoute("/learn")()
const GenerateWorkflowLazyImport = createFileRoute("/generate/$workflow")()
const AiLearnLazyImport = createFileRoute("/ai/learn")()
const AiGenerateLazyImport = createFileRoute("/ai/generate")()

// Create/Update Routes

const LearnLazyRoute = LearnLazyImport.update({
  path: "/learn",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./pages/learn.lazy").then((d) => d.Route))

const UserSubscriptionRoute = UserSubscriptionImport.update({
  path: "/user-subscription",
  getParentRoute: () => rootRoute,
} as any)

const SignUpRoute = SignUpImport.update({
  path: "/sign-up",
  getParentRoute: () => rootRoute,
} as any)

const SignOutRoute = SignOutImport.update({
  path: "/sign-out",
  getParentRoute: () => rootRoute,
} as any)

const SignInRoute = SignInImport.update({
  path: "/sign-in",
  getParentRoute: () => rootRoute,
} as any)

const ManagementRoute = ManagementImport.update({
  path: "/management",
  getParentRoute: () => rootRoute,
} as any)

const GenerateRoute = GenerateImport.update({
  path: "/generate",
  getParentRoute: () => rootRoute,
} as any)

const ForgotPasswordRoute = ForgotPasswordImport.update({
  path: "/forgot-password",
  getParentRoute: () => rootRoute,
} as any)

const ConfirmationRoute = ConfirmationImport.update({
  path: "/confirmation",
  getParentRoute: () => rootRoute,
} as any)

const AiRoute = AiImport.update({
  path: "/ai",
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any)

const GenerateIndexRoute = GenerateIndexImport.update({
  path: "/",
  getParentRoute: () => GenerateRoute,
} as any)

const AiIndexRoute = AiIndexImport.update({
  path: "/",
  getParentRoute: () => AiRoute,
} as any)

const GenerateWorkflowLazyRoute = GenerateWorkflowLazyImport.update({
  path: "/$workflow",
  getParentRoute: () => GenerateRoute,
} as any).lazy(() =>
  import("./pages/generate/$workflow.lazy").then((d) => d.Route),
)

const AiLearnLazyRoute = AiLearnLazyImport.update({
  path: "/learn",
  getParentRoute: () => AiRoute,
} as any).lazy(() => import("./pages/ai/learn.lazy").then((d) => d.Route))

const AiGenerateLazyRoute = AiGenerateLazyImport.update({
  path: "/generate",
  getParentRoute: () => AiRoute,
} as any).lazy(() => import("./pages/ai/generate.lazy").then((d) => d.Route))

const UserSubscriptionPaymentRoute = UserSubscriptionPaymentImport.update({
  path: "/payment",
  getParentRoute: () => UserSubscriptionRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/"
      path: "/"
      fullPath: "/"
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    "/ai": {
      id: "/ai"
      path: "/ai"
      fullPath: "/ai"
      preLoaderRoute: typeof AiImport
      parentRoute: typeof rootRoute
    }
    "/confirmation": {
      id: "/confirmation"
      path: "/confirmation"
      fullPath: "/confirmation"
      preLoaderRoute: typeof ConfirmationImport
      parentRoute: typeof rootRoute
    }
    "/forgot-password": {
      id: "/forgot-password"
      path: "/forgot-password"
      fullPath: "/forgot-password"
      preLoaderRoute: typeof ForgotPasswordImport
      parentRoute: typeof rootRoute
    }
    "/generate": {
      id: "/generate"
      path: "/generate"
      fullPath: "/generate"
      preLoaderRoute: typeof GenerateImport
      parentRoute: typeof rootRoute
    }
    "/management": {
      id: "/management"
      path: "/management"
      fullPath: "/management"
      preLoaderRoute: typeof ManagementImport
      parentRoute: typeof rootRoute
    }
    "/sign-in": {
      id: "/sign-in"
      path: "/sign-in"
      fullPath: "/sign-in"
      preLoaderRoute: typeof SignInImport
      parentRoute: typeof rootRoute
    }
    "/sign-out": {
      id: "/sign-out"
      path: "/sign-out"
      fullPath: "/sign-out"
      preLoaderRoute: typeof SignOutImport
      parentRoute: typeof rootRoute
    }
    "/sign-up": {
      id: "/sign-up"
      path: "/sign-up"
      fullPath: "/sign-up"
      preLoaderRoute: typeof SignUpImport
      parentRoute: typeof rootRoute
    }
    "/user-subscription": {
      id: "/user-subscription"
      path: "/user-subscription"
      fullPath: "/user-subscription"
      preLoaderRoute: typeof UserSubscriptionImport
      parentRoute: typeof rootRoute
    }
    "/learn": {
      id: "/learn"
      path: "/learn"
      fullPath: "/learn"
      preLoaderRoute: typeof LearnLazyImport
      parentRoute: typeof rootRoute
    }
    "/user-subscription/payment": {
      id: "/user-subscription/payment"
      path: "/payment"
      fullPath: "/user-subscription/payment"
      preLoaderRoute: typeof UserSubscriptionPaymentImport
      parentRoute: typeof UserSubscriptionImport
    }
    "/ai/generate": {
      id: "/ai/generate"
      path: "/generate"
      fullPath: "/ai/generate"
      preLoaderRoute: typeof AiGenerateLazyImport
      parentRoute: typeof AiImport
    }
    "/ai/learn": {
      id: "/ai/learn"
      path: "/learn"
      fullPath: "/ai/learn"
      preLoaderRoute: typeof AiLearnLazyImport
      parentRoute: typeof AiImport
    }
    "/generate/$workflow": {
      id: "/generate/$workflow"
      path: "/$workflow"
      fullPath: "/generate/$workflow"
      preLoaderRoute: typeof GenerateWorkflowLazyImport
      parentRoute: typeof GenerateImport
    }
    "/ai/": {
      id: "/ai/"
      path: "/"
      fullPath: "/ai/"
      preLoaderRoute: typeof AiIndexImport
      parentRoute: typeof AiImport
    }
    "/generate/": {
      id: "/generate/"
      path: "/"
      fullPath: "/generate/"
      preLoaderRoute: typeof GenerateIndexImport
      parentRoute: typeof GenerateImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AiRoute: AiRoute.addChildren({
    AiGenerateLazyRoute,
    AiLearnLazyRoute,
    AiIndexRoute,
  }),
  ConfirmationRoute,
  ForgotPasswordRoute,
  GenerateRoute: GenerateRoute.addChildren({
    GenerateWorkflowLazyRoute,
    GenerateIndexRoute,
  }),
  ManagementRoute,
  SignInRoute,
  SignOutRoute,
  SignUpRoute,
  UserSubscriptionRoute: UserSubscriptionRoute.addChildren({
    UserSubscriptionPaymentRoute,
  }),
  LearnLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/ai",
        "/confirmation",
        "/forgot-password",
        "/generate",
        "/management",
        "/sign-in",
        "/sign-out",
        "/sign-up",
        "/user-subscription",
        "/learn"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/ai": {
      "filePath": "ai.tsx",
      "children": [
        "/ai/generate",
        "/ai/learn",
        "/ai/"
      ]
    },
    "/confirmation": {
      "filePath": "confirmation.tsx"
    },
    "/forgot-password": {
      "filePath": "forgot-password.tsx"
    },
    "/generate": {
      "filePath": "generate.tsx",
      "children": [
        "/generate/$workflow",
        "/generate/"
      ]
    },
    "/management": {
      "filePath": "management.tsx"
    },
    "/sign-in": {
      "filePath": "sign-in.tsx"
    },
    "/sign-out": {
      "filePath": "sign-out.tsx"
    },
    "/sign-up": {
      "filePath": "sign-up.tsx"
    },
    "/user-subscription": {
      "filePath": "user-subscription.tsx",
      "children": [
        "/user-subscription/payment"
      ]
    },
    "/learn": {
      "filePath": "learn.lazy.tsx"
    },
    "/user-subscription/payment": {
      "filePath": "user-subscription/payment.tsx",
      "parent": "/user-subscription"
    },
    "/ai/generate": {
      "filePath": "ai/generate.lazy.tsx",
      "parent": "/ai"
    },
    "/ai/learn": {
      "filePath": "ai/learn.lazy.tsx",
      "parent": "/ai"
    },
    "/generate/$workflow": {
      "filePath": "generate/$workflow.lazy.tsx",
      "parent": "/generate"
    },
    "/ai/": {
      "filePath": "ai/index.tsx",
      "parent": "/ai"
    },
    "/generate/": {
      "filePath": "generate/index.tsx",
      "parent": "/generate"
    }
  }
}
ROUTE_MANIFEST_END */
