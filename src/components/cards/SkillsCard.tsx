interface SkillsBadgeInterface {
  sectionName: string;
  icons: any[];
}

const SkillsCard = (props: SkillsBadgeInterface) => {
  return (
    <div className="border-2 border-solid space-x-2">
      <div className="text-2xl md:text-2xl lg:text-3xl space-y-5 flex flex-col items-center justify-center py-5">
        <div className="hover-border w-fit">{props.sectionName}</div>
        <div className="text-2xl md:text-3xl lg:text-4xl flex flex-row gap-3">
          {props.icons.map((_icon, index) => {
            return (
              <span key={index} className="">
                {_icon}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
