import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-backfroundColor w-full font-dmMono">
      <div className="max-w-[1280px] mx-auto text-textWhite px-5 py-10 border-0 border-solid border-t-2 ">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col ">
            <div className="text-lg lg:text-xl mr-2">Nikhil Raj</div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nikhil25803@google.com"
              style={{ textDecoration: "None" }}
              target="_blank"
              className="text-base lg:text-lg text-textGray"
            >
              nikhil25803@gmail.com
            </a>
          </div>
          <div className=" text-xl lg:text-2xl flex flex-row gap-5">
            <a
              href="https://github.com/nikhil25803"
              style={{ textDecoration: "None" }}
              className="text-textWhite"
              target="_blank"
            >
              <FaGithub className="hover-border w-fit p-2" />
            </a>
            <a
              href="https://www.linkedin.com/in/nikhil25803/"
              style={{ textDecoration: "None" }}
              className="text-textWhite"
              target="_blank"
            >
              <FaLinkedin className="hover-border w-fit p-2" />
            </a>
            <a
              href="https://twitter.com/humans_write"
              style={{ textDecoration: "None" }}
              className="text-textWhite"
              target="_blank"
            >
              <FaSquareXTwitter className="hover-border w-fit p-2" />
            </a>
          </div>
        </div>
        <div className="text-center mt-10 text-textGray">
          © Copyright 2024. Made by Nikhil Raj
        </div>
      </div>
    </footer>
  );
};

export default Footer;
