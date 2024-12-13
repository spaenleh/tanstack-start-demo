import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import appCss from "../app.css?url";
import { Box, CssBaseline, extendTheme, ThemeProvider } from "@mui/joy";
import { NotFound } from "../components/NotFound";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

export const emotionCache = createCache({ key: "css" });

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  component: RootDocument,
  notFoundComponent: NotFound,
});

const theme = extendTheme({
  fontFamily: {
    body: "Nunito Variable",
  },
});

function RootDocument() {
  return (
    <html lang="en">
      <head>
        <Meta />
      </head>
      <body>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box p={2}>
              <Outlet />
            </Box>
          </ThemeProvider>
        </CacheProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
