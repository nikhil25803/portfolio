import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { getSeoData, PRERENDER_ROUTES } from "./seo";

export { PRERENDER_ROUTES };

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
