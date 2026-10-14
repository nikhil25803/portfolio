export interface ProfileImage {
  src: string;
  alt: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  companyMark: string;
  role: string;
  dates: string;
  location: string;
  summary: string;
  highlights: string[];
  skills: string[];
  featured?: boolean;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  githubUrl: string;
  image: string;
  imageAlt: string;
  tech: string[];
  overview: string[];
  architecture: string[];
  usage: string[];
  featured?: boolean;
}
