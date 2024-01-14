import { EXPERIENCEDATA } from "../data/experience-data";
import ExperienceCard from "./cards/ExperienceCard";

const ExperienceSection = () => {
  const experienceData = EXPERIENCEDATA[0];
  return (
    <section className="bg-backfroundColor w-full font-dmMono">
      <div className="max-w-[1280px] mx-auto flex flex-col items-start p-5 text-textWhite">
        <div className="flex flex-row justify-between w-full items-center  py-2">
          <div className="text-2xl md:text-3xl lg:text-4xl ">
            <span className="text-textPrimary mr-1">$</span>experience
          </div>
          <a
            href="/experience"
            className="hover-border text-textWhite"
            style={{ textDecoration: "None" }}
          >
            View all ~~~{">"}
          </a>
        </div>
        <div className="mt-5 space-y-10">
          <ExperienceCard
            position={experienceData.position}
            companyName={experienceData.companyName}
            fromDate={experienceData.fromDate}
            toDate={experienceData.toDate}
            points={experienceData.points}
            skillsUsed={experienceData.skillsUsed}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
