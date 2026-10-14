import { FaGithub } from "react-icons/fa";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProject } from "../data/project-data";

const ProjectDetail = () => {
  const { slug = "" } = useParams();
  const project = getProject(slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <main className="site-container">
      <Link to="/projects" className="text-sm">← all projects</Link>
      <article className="project-detail mt-8">
        <header>
          <p className="text-sm text-textGray">project details</p>
          <div className="mt-2 flex items-start justify-between gap-5">
            <div>
              <h1 className="text-3xl font-medium text-textWhite">{project.name}</h1>
              <p className="mt-3 leading-7 text-detailText">{project.tagline}</p>
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
          <img
            src={project.image}
            alt={project.imageAlt}
            width="1200"
            height="675"
            className="project-hero mt-8 w-full rounded-md border border-textGray/20"
          />
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((item) => <span key={item} className="tech-pill">{item}</span>)}
          </div>
        </header>

        <section>
          <h2><span>#</span>overview</h2>
          {project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>
        {project.commands && (
          <section className="project-commands">
            <h2><span>#</span>install and run</h2>
            {project.commands.map((command) => (
              <div key={command.label} className="project-command">
                <h3 className="text-sm text-textWhite">{command.label}</h3>
                <pre><code>{command.code}</code></pre>
              </div>
            ))}
          </section>
        )}
        <section>
          <h2><span>#</span>architecture and features</h2>
          {project.architecture.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>
        {project.gallery && (
          <section className="project-gallery" aria-label={`${project.name} screenshots`}>
            <h2><span>#</span>inside the project</h2>
            {project.gallery.map((image) => (
              <figure key={image.src}>
                <img
                  src={image.src}
                  alt={image.alt}
                  width="1200"
                  height="675"
                  loading="lazy"
                />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </section>
        )}
        <section>
          <h2><span>#</span>using the project</h2>
          <ol className="space-y-4">
            {project.usage.map((paragraph, index) => (
              <li key={paragraph} className="flex gap-3">
                <span className="shrink-0 text-textPrimary">{String(index + 1).padStart(2, "0")}</span>
                <span>{paragraph}</span>
              </li>
            ))}
          </ol>
        </section>
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
          <FaGithub /> view source on GitHub
        </a>
      </article>
    </main>
  );
};

export default ProjectDetail;
