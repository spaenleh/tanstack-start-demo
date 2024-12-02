import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import type { ReactNode } from "react";
import "../app.css";
import { CssBaseline, extendTheme, ThemeProvider } from "@mui/joy";
import { NotFound } from "../components/NotFound";

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
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

const theme = extendTheme({
  fontFamily: {
    body: "Nunito Variable",
  },
});

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <RootDocument>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </RootDocument>
  );
}

function RootComponent() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}

function NotFoundComponent() {
  return (
    <Wrapper>
      <NotFound />
    </Wrapper>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Meta />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
