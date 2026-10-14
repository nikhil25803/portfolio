import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";
import { PRERENDER_ROUTES } from "./seo";

const root = document.getElementById("root")!;
const application = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Analytics />
  </React.StrictMode>
);

if (root.hasChildNodes() && PRERENDER_ROUTES.includes(window.location.pathname)) {
  ReactDOM.hydrateRoot(root, application);
} else {
  root.replaceChildren();
  ReactDOM.createRoot(root).render(application);
}
