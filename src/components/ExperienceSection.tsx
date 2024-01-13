import ExperienceCard from "./cards/ExperienceCard";

const ExperienceSection = () => {
  return (
    <section className="bg-backfroundColor w-full font-dmMono">
      <div className="max-w-[1280px] mx-auto flex flex-col items-start p-5 text-textWhite">
        <div className="flex flex-row justify-between w-full items-center  py-2">
          <div className="text-2xl md:text-3xl lg:text-4xl ">
            <span className="text-textPrimary mr-1">$</span>expereince
          </div>
          <div className="hover-border">View all ~~~{">"}</div>
        </div>
        <div className="mt-5 space-y-10">
          <ExperienceCard
            position="Backend Developer Intern"
            companyName="Edilitics"
            fromDate="July 2023"
            toDate="October 2023"
            points={[
              "Contributed to building the backend for a no-code data analytic platform, leveraging Python, Fast API for developing REST APIs, MongoDB as a database, and Redis for caching.",
              "Developed a robust OTP authentication system for secure user authorization and implemented in-app, Slack, and email notifications using Python and FastAPI.",
              "Transformed data from MongoDB and other databases into structured formats, creating diverse visualizations like heatmaps, box plots, and radar charts to effectively represent complex data.",
            ]}
            skillsUsed="Back-End Web Development · REST APIs · MongoDB · FastAPI · Python (Programming Language)"
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
