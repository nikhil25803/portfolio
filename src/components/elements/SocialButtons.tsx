// Props Interface
interface SocailButtonInterface {
  element: any;
}

const SocialButtons = (props: SocailButtonInterface) => {
  return (
    <div>
      <div className="py-3 text-textWhite px-1 flex flex-col items-center justify-between hover:bg-textPrimary hover:text-textBlack transition  duration-300 hover:rounded-lg">
        <div className="text-3xl lg:text-4xl">{props.element}</div>
      </div>
    </div>
  );
};

export default SocialButtons;
