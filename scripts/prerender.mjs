import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = resolve(projectRoot, "dist");
const serverDirectory = resolve(projectRoot, "dist-server");
const template = await readFile(resolve(outputDirectory, "index.html"), "utf8");
const { PRERENDER_ROUTES, SITE_ORIGIN, render } = await import(
  new URL("../dist-server/entry-server.js", import.meta.url)
);

if (PRERENDER_ROUTES.length !== 15 || new Set(PRERENDER_ROUTES).size !== 15) {
  throw new Error("Expected 15 unique prerender routes");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderHead(seo) {
  const title = escapeHtml(seo.title);
  const description = escapeHtml(seo.description);
  const canonical = escapeHtml(seo.canonical);
  const image = escapeHtml(seo.image);
  const structuredData = JSON.stringify(seo.structuredData).replaceAll(
    "<",
    "\\u003c",
  );

  return [
    `<meta name="description" content="${description}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:type" content="${seo.type}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${image}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<script id="route-structured-data" type="application/ld+json">${structuredData}</script>`,
  ].join("\n    ");
}

for (const route of PRERENDER_ROUTES) {
  const { html, seo } = render(route);
  const document = template
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(seo.title)}</title>`)
    .replace("<!--route-head-->", renderHead(seo))
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  const outputFile =
    route === "/"
      ? resolve(outputDirectory, "index.html")
      : resolve(outputDirectory, `.${route}.html`);
  await mkdir(dirname(outputFile), { recursive: true });
  await writeFile(outputFile, document);
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...PRERENDER_ROUTES.map(
    (route) =>
      `  <url><loc>${new URL(route, SITE_ORIGIN).href}</loc></url>`,
  ),
  "</urlset>",
  "",
].join("\n");

await writeFile(resolve(outputDirectory, "sitemap.xml"), sitemap);
await rm(serverDirectory, { recursive: true, force: true });
