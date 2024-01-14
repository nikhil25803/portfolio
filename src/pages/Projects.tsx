import ProjectsCard from "../components/cards/ProjectsCard";

const Projects = () => {
  return (
    <section className="bg-backfroundColor w-full font-dmMono">
      <div className="max-w-[1280px] mx-auto text-textWhite p-5 ">
        <div className="flex flex-row justify-between items-center">
          <div className="text-2xl md:text-3xl lg:text-4xl ">
            <span className="text-textPrimary mr-1">/</span>projects
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mb-5 ">
          <ProjectsCard />
          <ProjectsCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
