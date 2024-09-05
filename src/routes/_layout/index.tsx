import { createFileRoute } from "@tanstack/react-router";
import Homepage from "../../pages/home/Homepage";

export const Route = createFileRoute("/_layout/")({
  component: Homepage,
});
