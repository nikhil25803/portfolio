import { useEffect } from "react";
import ExperienceCard from "../components/cards/ExperienceCard";
import { EXPERIENCES } from "../data/experience-data";

const Experience = () => {
  useEffect(() => { document.title = "Experience — Nikhil Raj"; }, []);

  return (
    <main className="site-container">
      <header className="page-heading">
        <p>career</p>
        <h1><span>$</span>experience</h1>
        <p>Backend and distributed-systems work across mobility, healthtech, analytics, and developer education.</p>
      </header>
      <section aria-label="Work experience" className="mt-10">
        {EXPERIENCES.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} detailed />
        ))}
      </section>
    </main>
  );
};

export default Experience;
