import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Layout from "../layout";
import Homepage from "../pages/home/Homepage";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: () => (
    <>
      <Layout>
        <Homepage />
      </Layout>
      <hr />
      {/* <Outlet /> */}
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
});
