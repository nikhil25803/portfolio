const Navbar = () => {
  return (
    <nav className="bg-backfroundColor w-full font-dmMono">
      <div className="max-w-[1280px] mx-auto flex flex-row justify-between items-center px-5 py-10">
        <a
          className="text-2xl text-textWhite "
          style={{ textDecoration: "None" }}
          href="/"
        >
          <span className="text-textPrimary mr-1">$</span>nikhil raj.
        </a>
        <div className="hidden md:flex flex-row justify-evenly items-center gap-5 text-lg text-textGray">
          <a
            className="hover-border text-textWhite"
            style={{ textDecoration: "None" }}
            href="/projects"
          >
            <span className="text-textPrimary">/</span>projects
          </a>
          <a
            className="hover-border text-textWhite"
            style={{ textDecoration: "None" }}
            href="/experience"
          >
            <span className="text-textPrimary">/</span>experience
          </a>
          <a
            className="hover-border text-textWhite"
            style={{ textDecoration: "None" }}
            href="/about"
          >
            <span className="text-textPrimary">/</span>about
          </a>
          <a
            className="hover-border text-textWhite "
            style={{ textDecoration: "None" }}
            href="#about-me-section"
          >
            <span className="text-textPrimary">/</span>contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
