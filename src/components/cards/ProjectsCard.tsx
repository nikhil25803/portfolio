interface ProjectInfo {
  imageurl: string;
  projectname: string;
  link: {
    name: string;
    url: string;
  }[];
  projectdetails: string;
  skillsUsed: string[];
}

const ProjectsCard = (props: ProjectInfo) => {
  return (
    <div className=" rounded-lg overflow-hidden hover:shadow-2xl flex flex-col ">
      <img
        className="hidden md:block w-full h-[350px] md:h-[250px] lg:h-[375px] overflow-hidden"
        src={props.imageurl}
        alt={props.projectname}
      />
      <div className="px-1 py-4 mt-0">
        <div className="flex flex-row items-center justify-between">
          <div className="hover-border w-fit text-textPrimary text-2xl mb-2">
            {props.projectname}
          </div>
          <div>
            {props.link.map((_proj, index) => {
              return (
                <a
                  key={index}
                  href={_proj.url}
                  target="_blank"
                  style={{ textDecoration: "None" }}
                  className="hover-border mr-2 text-textWhite"
                >
                  {_proj.name}
                </a>
              );
            })}
          </div>
        </div>
        <p className="text-base md:text-lg">{props.projectdetails}</p>
      </div>
      <div className="px-1 py-4 gap-2">
        {props.skillsUsed.map((skills, index) => {
          return (
            <span
              key={index}
              className="hover-border inline-block py-1 text-base md:text-lg  shadow-2xl ml-1 mr-1"
            >
              <span className="text-textPrimary mr-1">#</span>
              {skills}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsCard;
