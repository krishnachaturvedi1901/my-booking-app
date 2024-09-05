import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/displayTicket")({
  component: () => <div>Hello /_layout/displayTicket!</div>,
});
