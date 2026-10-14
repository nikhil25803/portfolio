import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { getSeoData, PRERENDER_ROUTES, SITE_ORIGIN } from "./seo";

export { PRERENDER_ROUTES, SITE_ORIGIN };

// eslint-disable-next-line react-refresh/only-export-components -- SSR build entry, not a refreshable browser module.
export function render(pathname: string) {
  return {
    html: renderToString(
      <StaticRouter location={pathname}>
        <App />
      </StaticRouter>,
    ),
    seo: getSeoData(pathname),
  };
}
