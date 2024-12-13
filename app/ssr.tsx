/// <reference types="vinxi/types/server" />
import {
  createStartHandler,
  defaultRenderHandler,
  defaultStreamHandler,
  StartServer,
} from "@tanstack/start/server";
import { getRouterManifest } from "@tanstack/start/router-manifest";
import { createRouter } from "./router";

/*
import ReactDOMServer from "react-dom/server";
import type { AnyRouter } from "@tanstack/react-router";
import createCache from "@emotion/cache";
import createEmotionServer from "@emotion/server/create-instance";
const key = "css";
const cache = createCache({ key });
const { extractCriticalToChunks, constructStyleTagsFromChunks } =
  createEmotionServer(cache);

export type HandlerCallback<TRouter extends AnyRouter> = (ctx: {
  request: Request;
  router: TRouter;
  responseHeaders: Headers;
}) => Response | Promise<Response>;

export const customRenderHandler: HandlerCallback<AnyRouter> = ({
  router,
  responseHeaders,
}) => {
  try {
    const html = ReactDOMServer.renderToString(<StartServer router={router} />);
    // console.log(html);

    const chunks = extractCriticalToChunks(html);
    // console.log(chunks);
    const styles = constructStyleTagsFromChunks(chunks);
    const placeholder = `<script src="emotion-styles"></script>`;
    const htmlWithStyles = html.replace(placeholder, styles);

    return new Response(`<!DOCTYPE html>${htmlWithStyles}`, {
      status: router.state.statusCode,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error("Render to string error:", error);
    return new Response("Internal Server Error", {
      status: 500,
      headers: responseHeaders,
    });
  }
};

// create the handler
export default createStartHandler({
  createRouter,
  getRouterManifest,
})(customRenderHandler);


*/

// original
export default createStartHandler({
  createRouter,
  getRouterManifest,
})(defaultStreamHandler);
