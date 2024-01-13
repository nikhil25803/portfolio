const Navbar = () => {
  return (
    <nav className="bg-backfroundColor w-full font-dmMono">
      <div className="max-w-[1280px] mx-auto flex flex-row justify-between items-center px-5 py-10">
        <div className="text-2xl text-textWhite ">
          <span className="text-textPrimary mr-1">$</span>nikhil raj.
        </div>
        <div className="hidden md:flex flex-row justify-evenly items-center gap-5 text-lg text-textGray">
          <div className="hover-border">
            <span className="text-textPrimary">/</span>projects
          </div>
          <div className="hover-border">
            <span className="text-textPrimary">/</span>work
          </div>
          <div className="hover-border">
            <span className="text-textPrimary">/</span>about
          </div>
          <div className="hover-border">
            <span className="text-textPrimary">/</span>contact
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
