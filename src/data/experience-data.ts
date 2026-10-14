import type { ExperienceEntry } from "../types";

export const EXPERIENCES: ExperienceEntry[] = [
  {
    id: "cautio-software-engineer",
    company: "Cautio",
    companyMark: "C",
    role: "Software Engineer",
    dates: "July 2025 to Present",
    location: "Bengaluru, India",
    summary:
      "Building high throughput backend systems for real time video, IoT data, machine learning validation, and geospatial processing across India's mobility ecosystem.",
    highlights: [
      { leading: "Built a real time video streaming and two way audio platform handling more than ", metric: "2.5 TB each month", trailing: "." },
      { leading: "Designed pipelines for binary IoT streams and ML validation workflows processing more than ", metric: "30,000 images per hour", trailing: "." },
      { leading: "Engineered geofencing that processes more than ", metric: "15 million events per day", trailing: " with PostGIS and ScyllaDB." },
      { leading: "Built a distributed image to video pipeline processing more than ", metric: "200,000 images per day", trailing: " through parallel and asynchronous execution." },
    ],
    skills: ["TypeScript", "Kafka", "PostGIS", "ScyllaDB", "FFmpeg"],
    featured: true,
  },
  {
    id: "cautio-backend-engineer-intern",
    company: "Cautio",
    companyMark: "C",
    role: "Backend Engineer Intern",
    dates: "December 2024 to June 2025",
    location: "Bengaluru, India",
    summary:
      "Worked close to the device layer on snapshots, driver authentication, and shared authorization infrastructure for Cautio's connected mobility platform.",
    highlights: [
      "Built an on demand IoT snapshot feature spanning protocol messages, binary parsing, and cloud uploads.",
      "Developed real time driver authentication using AWS Rekognition.",
      "Designed a centralized gRPC RBAC service used by multiple services for consistent authorization checks.",
    ],
    skills: ["NestJS", "gRPC", "AWS", "IoT", "RBAC"],
    featured: true,
  },
  {
    id: "dashmed-backend-developer",
    company: "Dashmed",
    companyMark: "D",
    role: "Backend Developer",
    dates: "April 2024 to July 2024",
    location: "Kolkata, India",
    summary:
      "Developed healthcare APIs around India's ABDM ecosystem, simplifying complex callback integrations for product users.",
    highlights: [
      "Built APIs that integrated with ABDM while managing asynchronous callbacks behind a simpler application interface.",
      "Used Django REST Framework, MySQL, and Redis backed background tasks.",
      "Deployed the system to AWS EC2 through GitLab CI/CD pipelines.",
    ],
    skills: ["Python", "Django", "MySQL", "Redis", "AWS"],
    featured: true,
  },
  {
    id: "edilitics-backend-developer",
    company: "Edilitics",
    companyMark: "E",
    role: "Backend Developer",
    dates: "July 2023 to October 2023",
    location: "Kolkata, India",
    summary:
      "Contributed to a no code analytics backend, covering authentication, notifications, data transformation, and visualization ready output.",
    highlights: [
      "Developed REST APIs with FastAPI, MongoDB, and Redis.",
      "Implemented OTP authentication plus in app, Slack, and email notifications.",
      "Transformed data from multiple databases into structures for heatmaps, box plots, and radar charts.",
    ],
    skills: ["Python", "FastAPI", "MongoDB", "Redis", "GCP"],
  },
  {
    id: "tasklabs-sde-intern",
    company: "TaskLabs",
    companyMark: "T",
    role: "SDE Intern Backend",
    dates: "April 2023 to July 2023",
    location: "Kolkata, India",
    summary:
      "Built Python document and image processing utilities and connected them to a TypeScript web application through WebAssembly workflows.",
    highlights: [
      "Explored WebAssembly execution concepts for browser tools.",
      "Created Python utilities for document and image processing.",
      "Integrated those tools into a Next.js and TypeScript interface.",
    ],
    skills: ["Python", "TypeScript", "Next.js", "WebAssembly"],
  },
  {
    id: "scaler-technical-writer",
    company: "Scaler",
    companyMark: "S",
    role: "Technical Writer",
    dates: "June 2022 to June 2023",
    location: "India",
    summary:
      "Wrote technically reviewed learning material for Scaler's Django and Django REST Framework curriculum.",
    highlights: [
      { leading: "Published ", metric: "more than ten", trailing: " technically and SEO reviewed articles." },
      "Explained Django, Django REST Framework, and AI concepts with practical code samples.",
    ],
    skills: ["Python", "Django", "Django REST Framework", "Technical Writing"],
  },
];

export const FEATURED_EXPERIENCES = EXPERIENCES.filter(
  (experience) => experience.featured,
);
