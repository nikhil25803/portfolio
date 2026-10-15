import cautioLogo from "../assets/thumbnails/companies/cautio.webp";
import dashmedLogo from "../assets/thumbnails/companies/dashmed.webp";
import ediliticsLogo from "../assets/thumbnails/companies/edilitics.webp";
import scalerLogo from "../assets/thumbnails/companies/scaler.webp";
import tasklabsLogo from "../assets/thumbnails/companies/tasklabs.webp";
import type { ExperienceEntry } from "../types";

export const EXPERIENCES: ExperienceEntry[] = [
  {
    id: "cautio-software-engineer",
    company: "Cautio",
    companyLogo: cautioLogo,
    role: "Software Development Engineer",
    dates: "July 2025 to Present",
    location: "Bengaluru, India",
    summary:
      "Building high throughput backend systems for real time video, IoT data, machine learning validation, and geospatial processing across India's mobility ecosystem.",
    highlights: [
      {
        parts: [
          {
            text: "Architected and deployed a real time video streaming and two way audio communication system using Go, FFmpeg, and EMQX (MQTT), ingesting and processing binary IoT streams at ",
          },
          { text: "300 GB/day", metric: true },
          { text: " (" },
          { text: "9 TB/month", metric: true },
          { text: ")." },
        ],
      },
      {
        parts: [
          {
            text: "Deployed ML models and built Python based Kafka consumers with Celery for background processing to validate ",
          },
          { text: "1M+", metric: true },
          { text: " IoT generated alert images daily, filtering " },
          { text: "70K+", metric: true },
          { text: " noisy or invalid alerts to reduce false positives." },
        ],
      },
      {
        parts: [
          {
            text: "Developed a high throughput geofencing system using Node.js, TypeScript, PostgreSQL/PostGIS, and MongoDB to evaluate ",
          },
          { text: "20M+", metric: true },
          {
            text: " GPS pings each day through real time spatial queries and low latency alerting.",
          },
        ],
      },
      {
        parts: [
          {
            text: "Engineered a distributed image to video pipeline that processed ",
          },
          { text: "200K+", metric: true },
          {
            text: " images each day, orchestrating frame sequencing and efficient video stitching through parallel, asynchronous execution.",
          },
        ],
      },
    ],
    skills: [
      "Go",
      "FFmpeg",
      "EMQX",
      "MQTT",
      "Python",
      "Kafka",
      "Celery",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "PostGIS",
      "MongoDB",
    ],
    featured: true,
  },
  {
    id: "cautio-backend-engineer-intern",
    company: "Cautio",
    companyLogo: cautioLogo,
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
    companyLogo: dashmedLogo,
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
    companyLogo: ediliticsLogo,
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
    companyLogo: tasklabsLogo,
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
    companyLogo: scalerLogo,
    role: "Technical Writer",
    dates: "June 2022 to June 2023",
    location: "India",
    summary:
      "Wrote technically reviewed learning material for Scaler's Django and Django REST Framework curriculum.",
    highlights: [
      {
        parts: [
          { text: "Published " },
          { text: "more than ten", metric: true },
          { text: " technically and SEO reviewed articles." },
        ],
      },
      "Explained Django, Django REST Framework, and AI concepts with practical code samples.",
    ],
    skills: ["Python", "Django", "Django REST Framework", "Technical Writing"],
  },
];

export const FEATURED_EXPERIENCES = EXPERIENCES.filter(
  (experience) => experience.featured,
);
