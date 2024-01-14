import { PROJECTDATA } from "../data/project-data";
import ProjectsCard from "./cards/ProjectsCard";

const ProjectSection = () => {
  const projectData = PROJECTDATA.slice(0, 2);
  return (
    <section className="bg-backfroundColor w-full font-dmMono">
      <div className="max-w-[1280px] mx-auto text-textWhite p-5 ">
        <div className="flex flex-row justify-between items-center">
          <div className="text-2xl md:text-3xl lg:text-4xl ">
            <span className="text-textPrimary mr-1">$</span>projects
          </div>
          <div className="hover-border">View all ~~~{">"}</div>
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2  gap-5">
          {projectData.map((_pr, index) => {
            return (
              <ProjectsCard
                key={index}
                imageurl={_pr.imageurl}
                projectname={_pr.projectname}
                link={_pr.link}
                projectdetails={_pr.projectdetails}
                skillsUsed={_pr.skillsUsed}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
