import ProjectsCard from "../components/cards/ProjectsCard";
import { PROJECTS } from "../data/project-data";

const Projects = () => {
  return (
    <main className="site-container">
      <header className="page-heading">
        <p>things I build</p>
        <h1><span>$</span>projects</h1>
        <p>Backend systems, developer tools, terminal applications, and earlier full stack experiments.</p>
      </header>
      <section aria-label="Projects" className="mt-10">
        {PROJECTS.map((project) => <ProjectsCard key={project.slug} project={project} />)}
      </section>
    </main>
  );
};

export default Projects;
