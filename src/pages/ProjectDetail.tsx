import { FaGithub } from "react-icons/fa";
import { Link, Navigate, useParams } from "react-router-dom";
import { getProject } from "../data/project-data";

const ProjectDetail = () => {
  const { slug = "" } = useParams();
  const project = getProject(slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <main className="site-container">
      <Link to="/projects" className="text-sm">
        ← all projects
      </Link>
      <article className="project-detail mt-8">
        <header>
          <p className="text-sm text-textGray">project details</p>
          <div className="mt-2 flex items-start justify-between gap-5">
            <div>
              <h1 className="text-3xl font-medium text-textWhite">
                {project.name}
              </h1>
              <p className="mt-3 leading-7 text-detailText">
                {project.tagline}
              </p>
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
            {...{ fetchpriority: "high" }}
            src={project.image}
            srcSet={
              project.heroSmall
                ? `${project.heroSmall} 768w, ${project.image} 1440w`
                : undefined
            }
            sizes={
              project.heroSmall
                ? "(max-width: 760px) calc(100vw - 2rem), 720px"
                : undefined
            }
            alt={project.imageAlt}
            width={project.walkthrough ? 1440 : 1200}
            height={project.walkthrough ? 576 : 675}
            loading="eager"
            decoding="async"
            className={`project-hero mt-8 w-full rounded-md border border-textGray/20 ${project.walkthrough ? "project-hero-banner" : ""}`}
          />
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span key={item} className="tech-pill">
                {item}
              </span>
            ))}
          </div>
        </header>

        <section>
          <h2>
            <span>#</span>overview
          </h2>
          {project.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
        {project.commands && (
          <section className="project-commands">
            <h2>
              <span>#</span>install and run
            </h2>
            {project.commands.map((command) => (
              <div key={command.label} className="project-command">
                <h3 className="text-sm text-textWhite">{command.label}</h3>
                <pre>
                  <code>{command.code}</code>
                </pre>
              </div>
            ))}
          </section>
        )}
        <section>
          <h2>
            <span>#</span>
            {project.features ? "how it works" : "architecture and features"}
          </h2>
          {project.architecture.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
        {project.features && (
          <section className="project-features">
            <h2>
              <span>#</span>features
            </h2>
            <div className="project-table-scroll">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Concern</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {project.features.map((feature) => (
                    <tr key={feature.concern}>
                      <th scope="row">{feature.concern}</th>
                      <td>
                        <ul>
                          {feature.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
        {project.guide && (
          <section className="project-guide">
            <h2>
              <span>#</span>
              {project.guide.title}
            </h2>
            {project.guide.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <h3>Before you start</h3>
            <ol className="project-requirements">
              {project.guide.requirements.map((requirement) => (
                <li key={requirement}>{requirement}</li>
              ))}
            </ol>
            <div className="project-guide-steps">
              {project.guide.steps.map((step, index) => (
                <div key={step.title} className="project-guide-step">
                  <h3>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {step.title}
                  </h3>
                  {step.body?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {step.commands?.map((command) => (
                    <div key={command.label} className="project-command">
                      <h4>{command.label}</h4>
                      <pre>
                        <code>{command.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <aside className="project-guide-notes" aria-label="Deployment notes">
              <h3>Production notes</h3>
              <ul>
                {project.guide.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </aside>
          </section>
        )}
        {project.walkthrough && (
          <section
            className="project-walkthrough"
            aria-label={`${project.name} UI walkthrough`}
          >
            <h2>
              <span>#</span>UI walkthrough
            </h2>
            {project.walkthrough.map((walkthroughSection) => (
              <div
                key={walkthroughSection.title}
                className="project-walkthrough-section"
              >
                <h3>{walkthroughSection.title}</h3>
                {walkthroughSection.intro && (
                  <p>{walkthroughSection.intro}</p>
                )}
                {walkthroughSection.rows.map((row, rowIndex) => (
                  <div
                    key={`${walkthroughSection.title}-${rowIndex}`}
                    className={`project-walkthrough-row ${row.length === 1 ? "project-walkthrough-row-single" : ""}`}
                  >
                    {row.map((image) => (
                      <figure key={image.src}>
                        <a
                          href={image.src}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${image.caption} full size`}
                        >
                          <img
                            src={image.thumbnail ?? image.src}
                            alt={image.alt}
                            width={image.width ?? 1440}
                            height={image.height ?? 800}
                            loading="lazy"
                            decoding="async"
                          />
                        </a>
                        <figcaption>
                          <h4>{image.caption}</h4>
                          {image.description.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </section>
        )}
        {project.gallery && (
          <section
            className={`project-gallery ${project.galleryLayout === "grid" ? "project-gallery-grid" : ""}`}
            aria-label={`${project.name} screenshots`}
          >
            <h2>
              <span>#</span>inside the project
            </h2>
            {project.gallery.map((image) => (
              <figure key={image.src}>
                <a
                  href={image.src}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${image.caption} full size`}
                >
                  <img
                    src={image.thumbnail ?? image.src}
                    alt={image.alt}
                    width={image.width ?? 480}
                    height={image.height ?? 270}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </section>
        )}
        {project.usage && (
          <section>
            <h2>
              <span>#</span>using the project
            </h2>
            <ol className="space-y-4">
              {project.usage.map((paragraph, index) => (
                <li key={paragraph} className="flex gap-3">
                  <span className="shrink-0 text-textPrimary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{paragraph}</span>
                </li>
              ))}
            </ol>
          </section>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2"
        >
          <FaGithub /> view source on GitHub
        </a>
      </article>
    </main>
  );
};

export default ProjectDetail;
