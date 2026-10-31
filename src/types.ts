export interface ProfileImage {
  src: string;
  alt: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  companyLogo: string;
  role: string;
  dates: string;
  location: string;
  summary: string;
  highlights: ExperienceHighlight[];
  skills: string[];
  featured?: boolean;
}

export interface ExperienceHighlightPart {
  text: string;
  metric?: boolean;
}

export type ExperienceHighlight = string | { parts: ExperienceHighlightPart[] };

export interface ProjectCommand {
  label: string;
  code: string;
}

export interface ProjectImage {
  src: string;
  thumbnail?: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
}

export interface ProjectFeature {
  concern: string;
  details: string[];
}

export interface ProjectGuideStep {
  title: string;
  body?: string[];
  commands?: ProjectCommand[];
}

export interface ProjectGuide {
  title: string;
  intro: string[];
  requirements: string[];
  steps: ProjectGuideStep[];
  notes: string[];
}

export interface ProjectWalkthroughItem extends ProjectImage {
  description: string[];
}

export interface ProjectWalkthroughSection {
  title: string;
  intro?: string;
  rows: ProjectWalkthroughItem[][];
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  githubUrl: string;
  image: string;
  heroSmall?: string;
  thumbnail: string;
  imageAlt: string;
  seoTitle?: string;
  seoDescription?: string;
  socialImage?: string;
  galleryLayout?: "grid";
  tech: string[];
  overview: string[];
  architecture: string[];
  usage?: string[];
  commands?: ProjectCommand[];
  gallery?: ProjectImage[];
  features?: ProjectFeature[];
  guide?: ProjectGuide;
  walkthrough?: ProjectWalkthroughSection[];
  featured?: boolean;
}
