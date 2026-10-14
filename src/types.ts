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

export type ExperienceHighlight =
  | string
  | { leading: string; metric: string; trailing: string };

export interface ProjectCommand {
  label: string;
  code: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  githubUrl: string;
  image: string;
  thumbnail: string;
  imageAlt: string;
  tech: string[];
  overview: string[];
  architecture: string[];
  usage: string[];
  commands?: ProjectCommand[];
  gallery?: ProjectImage[];
  featured?: boolean;
}
