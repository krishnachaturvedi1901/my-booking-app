import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/cancellation")({
  component: () => <div>Hello /_layout/cancellation!</div>,
});
