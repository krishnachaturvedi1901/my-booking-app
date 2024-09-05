import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Homepage from "../pages/home/Homepage";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({});

// export const Route = createRootRouteWithContext<{
//   queryClient: QueryClient;
// }>()({
//   component: () => (
//     <>
//       <Homepage />
//       <hr />
//       <Outlet />
//       <TanStackRouterDevtools position="bottom-right" />
//     </>
//   ),
// });
