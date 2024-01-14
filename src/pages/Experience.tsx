import { useEffect } from "react";
import ExperienceCard from "../components/cards/ExperienceCard";
import { EXPERIENCEDATA } from "../data/experience-data";

const Experience = () => {
  useEffect(() => {
    document.title = "Nikhil Raj - Experience";
  }, []);
  const expereinceData = EXPERIENCEDATA;
  return (
    <section className="bg-backfroundColor w-full font-dmMono">
      <div className="max-w-[1280px] mx-auto flex flex-col items-start p-5 text-textWhite">
        <div className="flex flex-row justify-between w-full items-center  py-2">
          <div className="text-2xl md:text-3xl lg:text-4xl ">
            <span className="text-textPrimary mr-1">/</span>experience
          </div>
        </div>
        <div className="mt-5 space-y-10 mb-5">
          {expereinceData.map((_expdata, index) => {
            return (
              <ExperienceCard
                key={index}
                position={_expdata.position}
                companyName={_expdata.companyName}
                fromDate={_expdata.fromDate}
                toDate={_expdata.toDate}
                points={_expdata.points}
                skillsUsed={_expdata.skillsUsed}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
