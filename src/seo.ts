import profileImage from "./assets/profile/profile_4.png";
import socialCard from "./assets/social-card.png";
import { getProject, PROJECTS } from "./data/project-data";

export const SITE_ORIGIN = "https://nikhilraj.space";

export interface SeoData {
  title: string;
  description: string;
  canonical: string;
  image: string;
  imageAlt: string;
  type: "profile" | "website" | "article";
  structuredData: Record<string, unknown> | Record<string, unknown>[];
}

const person = {
  "@type": "Person",
  "@id": `${SITE_ORIGIN}/#nikhil-raj`,
  name: "Nikhil Raj",
  jobTitle: "Backend and Distributed Systems Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Cautio",
  },
  url: SITE_ORIGIN,
  image: new URL(profileImage, SITE_ORIGIN).href,
  sameAs: [
    "https://github.com/nikhil25803",
    "https://www.linkedin.com/in/nikhil25803/",
    "https://twitter.com/humans_write",
    "https://leetcode.com/nikhil25803/",
    "https://www.kaggle.com/nikhil25803",
    "https://auth.geeksforgeeks.org/user/nikhil25803",
  ],
};

function canonicalPath(pathname: string) {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  return new URL(normalized, SITE_ORIGIN).href;
}

function baseSeo(
  pathname: string,
  title: string,
  description: string,
  type: SeoData["type"] = "website",
  image = socialCard,
  imageAlt = title,
): Omit<SeoData, "structuredData"> {
  return {
    title,
    description,
    canonical: canonicalPath(pathname),
    image: new URL(image, SITE_ORIGIN).href,
    imageAlt,
    type,
  };
}

export function getSeoData(pathname: string): SeoData {
  if (pathname === "/") {
    return {
      ...baseSeo(
        pathname,
        "Nikhil Raj | Backend and Distributed Systems Engineer",
        "Nikhil Raj is a software engineer building backend and distributed systems for real time data, Kafka, video pipelines, and geospatial workloads.",
        "profile",
      ),
      structuredData: {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        mainEntity: person,
      },
    };
  }

  if (pathname === "/experience") {
    return {
      ...baseSeo(
        pathname,
        "Backend Engineering Experience | Nikhil Raj",
        "Nikhil Raj's backend and distributed systems experience across mobility, healthtech, analytics, real time data, video, and geospatial processing.",
      ),
      structuredData: {
        "@context": "https://schema.org",
        ...person,
      },
    };
  }

  if (pathname === "/projects") {
    return {
      ...baseSeo(
        pathname,
        "Backend and Open Source Projects | Nikhil Raj",
        "Explore Nikhil Raj's backend systems, Kafka observability, Go CLI tools, distributed services, and open source software projects.",
      ),
      structuredData: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Projects by Nikhil Raj",
        url: canonicalPath(pathname),
        author: { "@id": person["@id"] },
        hasPart: PROJECTS.map((project) => ({
          "@type": "SoftwareSourceCode",
          name: project.name,
          url: canonicalPath(`/projects/${project.slug}`),
        })),
      },
    };
  }

  const project = getProject(pathname.replace(/^\/projects\//, ""));
  if (project) {
    const canonical = canonicalPath(pathname);
    return {
      ...baseSeo(
        pathname,
        project.seoTitle ?? `${project.name} Project Details | Nikhil Raj`,
        project.seoDescription ??
          `${project.tagline} Explore its architecture, technology, installation, usage, screenshots, and source code.`,
        "article",
        project.socialImage ?? project.image,
        project.imageAlt,
      ),
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          name: project.name,
          description: project.seoDescription ?? project.tagline,
          url: canonical,
          codeRepository: project.githubUrl,
          programmingLanguage: project.tech[0],
          image: new URL(project.image, SITE_ORIGIN).href,
          author: { "@id": person["@id"] },
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: SITE_ORIGIN,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Projects",
              item: canonicalPath("/projects"),
            },
            {
              "@type": "ListItem",
              position: 3,
              name: project.name,
              item: canonical,
            },
          ],
        },
      ],
    };
  }

  return getSeoData("/");
}

export const PRERENDER_ROUTES = [
  "/",
  "/experience",
  "/projects",
  ...PROJECTS.map((project) => `/projects/${project.slug}`),
];
