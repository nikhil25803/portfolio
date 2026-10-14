import { Link } from "react-router-dom";
import { FEATURED_PROJECTS } from "../data/project-data";
import ProjectsCard from "./cards/ProjectsCard";

const ProjectSection = () => (
  <section aria-labelledby="projects-heading">
    <div className="section-heading">
      <h2 id="projects-heading">
        <span>$</span>projects
      </h2>
      <Link to="/projects">view all →</Link>
    </div>
    <div className="mt-6">
      {FEATURED_PROJECTS.map((project) => (
        <ProjectsCard key={project.slug} project={project} />
      ))}
    </div>
  </section>
);

export default ProjectSection;
