import { Outlet, createFileRoute } from "@tanstack/react-router";
import Layout from "../layout";

export const Route = createFileRoute("/_layout")({
  component: () => (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  ),
});
