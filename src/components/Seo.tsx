import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSeoData } from "../seo";

function setMeta(
  selector: string,
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }
  element.content = content;
}

const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeoData(pathname);
    document.title = seo.title;
    setMeta('meta[name="description"]', "name", "description", seo.description);
    setMeta('meta[property="og:title"]', "property", "og:title", seo.title);
    setMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      seo.description,
    );
    setMeta('meta[property="og:type"]', "property", "og:type", seo.type);
    setMeta('meta[property="og:url"]', "property", "og:url", seo.canonical);
    setMeta('meta[property="og:image"]', "property", "og:image", seo.image);
    setMeta(
      'meta[property="og:image:alt"]',
      "property",
      "og:image:alt",
      seo.title,
    );
    setMeta(
      'meta[name="twitter:card"]',
      "name",
      "twitter:card",
      "summary_large_image",
    );
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", seo.title);
    setMeta(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      seo.description,
    );
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", seo.image);
    setMeta(
      'meta[name="twitter:image:alt"]',
      "name",
      "twitter:image:alt",
      seo.title,
    );

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.append(canonical);
    }
    canonical.href = seo.canonical;

    let jsonLd = document.head.querySelector<HTMLScriptElement>(
      "#route-structured-data",
    );
    if (!jsonLd) {
      jsonLd = document.createElement("script");
      jsonLd.id = "route-structured-data";
      jsonLd.type = "application/ld+json";
      document.head.append(jsonLd);
    }
    jsonLd.text = JSON.stringify(seo.structuredData).replace(/</g, "\\u003c");
  }, [pathname]);

  return null;
};

export default Seo;
