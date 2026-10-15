import { Link } from "react-router-dom";
import { FEATURED_EXPERIENCES } from "../data/experience-data";
import ExperienceCard from "./cards/ExperienceCard";

const ExperienceSection = () => (
  <section aria-labelledby="experience-heading">
    <div className="section-heading">
      <h2 id="experience-heading">
        <span>$</span>experience
      </h2>
      <Link to="/experience">view all →</Link>
    </div>
    <div className="mt-6">
      {FEATURED_EXPERIENCES.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          linkTo={`/experience#${experience.id}`}
        />
      ))}
    </div>
  </section>
);

export default ExperienceSection;
