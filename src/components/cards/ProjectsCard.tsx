import IMAGES from "../../images/Images";

const ProjectsCard = () => {
  return (
    <div className=" rounded-lg overflow-hidden shadow-2xl hover:drop-shadow-2xl ">
      <img
        className="w-full"
        src={IMAGES.projectReviewIt}
        alt="Project Review It"
      />
      <div className="px-1 py-4">
        <div className="hover-border w-fit text-textPrimary text-2xl mb-2">
          Review It
        </div>
        <p className="text-base md:text-lg">
          Connect with mentors worldwide for personalized resume feedback on
          Review It, a free and open-source platform. Elevate your professional
          story, whether you're entering the job market or making a career
          change.
        </p>
      </div>
      <div className="px-1 py-4">
        <span className="hover-border inline-block py-1 text-base  shadow-2xl ">
          <span className="text-textPrimary mr-1">#</span>photography
        </span>
      </div>
    </div>
  );
};

export default ProjectsCard;
