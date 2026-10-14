import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import type { Project } from "../../types";

const ProjectsCard = ({ project }: { project: Project }) => (
  <article className="group flex gap-4 border-b border-textGray/20 py-5 first:pt-0 last:border-0 last:pb-0">
    <img
      src={project.image}
      alt={project.imageAlt}
      width="64"
      height="64"
      className="h-16 w-16 shrink-0 rounded-md border border-textGray/20 object-cover"
    />
    <div className="min-w-0 flex-1">
      <div className="flex items-start justify-between gap-3">
        <Link
          to={`/projects/${project.slug}`}
          className="font-medium text-textWhite no-underline group-hover:text-textPrimary"
        >
          {project.name}
        </Link>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name} on GitHub`}
          className="shrink-0 text-textGray hover:text-textPrimary"
        >
          <FaGithub />
        </a>
      </div>
      <p className="mt-1 text-sm leading-6 text-detailText">
        {project.tagline}
      </p>
      <Link
        to={`/projects/${project.slug}`}
        className="mt-2 inline-block text-xs"
      >
        read project details →
      </Link>
    </div>
  </article>
);

export default ProjectsCard;
