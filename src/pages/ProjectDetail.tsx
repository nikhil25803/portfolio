import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProject } from "../data/project-data";

const ProjectDetail = () => {
  const { slug = "" } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    if (project) document.title = `${project.name} — Nikhil Raj`;
  }, [project]);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <main className="site-container">
      <Link to="/projects" className="text-sm">← all projects</Link>
      <article className="project-detail mt-8">
        <header>
          <p className="text-sm text-textGray">case study</p>
          <div className="mt-2 flex items-start justify-between gap-5">
            <div>
              <h1 className="text-3xl font-medium text-textWhite">{project.name}</h1>
              <p className="mt-3 leading-7 text-textGray">{project.tagline}</p>
            </div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="mt-2 shrink-0 text-xl"
            >
              <FaGithub />
            </a>
          </div>
          <img src={project.image} alt={project.imageAlt} className="mt-8 w-full rounded-md border border-textGray/20" />
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((item) => <span key={item} className="tech-pill">{item}</span>)}
          </div>
        </header>

        <section>
          <h2><span>#</span>overview</h2>
          {project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>
        <section>
          <h2><span>#</span>architecture and features</h2>
          {project.architecture.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>
        <section>
          <h2><span>#</span>using the project</h2>
          {project.usage.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
          <FaGithub /> view source on GitHub
        </a>
      </article>
    </main>
  );
};

export default ProjectDetail;
