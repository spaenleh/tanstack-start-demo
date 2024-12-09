import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import type { ReactNode } from "react";
import { NotFound } from "../components/NotFound";
import appCSS from "@/styles/global.css?url";
import { Header } from "@/components/ui/header";

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
    links: [{ rel: "stylesheet", href: appCSS }],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function Wrapper({ children }: Readonly<{ children: ReactNode }>) {
  return <RootDocument>{children}</RootDocument>;
}

function RootComponent() {
  return (
    <Wrapper>
      <Header />
      <div className="flex flex-1 flex-col gap-4 p-4">
        <Outlet />
      </div>
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
