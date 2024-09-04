import { createFileRoute } from "@tanstack/react-router";
import Layout from "../layout";
import Homepage from "../pages/home/Homepage";

export const Route = createFileRoute("/")({
  component: () => (
    <Layout>
      <Homepage />
    </Layout>
  ),
});
