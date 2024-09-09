import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import createEmotionCache from "./styles/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./styles/theme";
import { LanguageProvider } from "./context/LanguageContext";
import "./i18n";
import "./index.css";
import { ScreenModeProvider } from "./context/ScreenModeContext";

const queryClient = new QueryClient();
const emotionCache = createEmotionCache();

// Create a new router instance
const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <CacheProvider value={emotionCache}>
    <ScreenModeProvider>
      <ThemeProvider theme={lightTheme}>
        <LanguageProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ScreenModeProvider>
  </CacheProvider>
);
