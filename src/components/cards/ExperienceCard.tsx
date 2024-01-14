interface ExperienceCardDetails {
  position: string;
  companyName: string;
  fromDate: string;
  toDate: string;
  points: string[];
  skillsUsed: string;
}

const ExperienceCard = (props: ExperienceCardDetails) => {
  return (
    <div className="flex flex-col gap-5 border-0 border-solid border-l-2 border-textGray px-4 py-4 rounded-lg hover:shadow-2xl">
      <div className="text-xl md:text-2xl lg:text-3xl  text-textPrimary">
        {props.position}
      </div>
      <div className="text-lg md:text-xl lg:text-2xl">
        {props.companyName} | {props.fromDate} - {props.toDate}
      </div>
      <div className="space-y-2 text-base lg:text-xl">
        {props.points.map((point) => {
          return (
            <p key={point}>
              <span className="text-textPrimary">{"> "}</span>
              {point}
            </p>
          );
        })}
      </div>
      <div className="text-textPrimary">Skills: {props.skillsUsed}</div>
    </div>
  );
};

export default ExperienceCard;
