import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-backfroundColor w-full font-dmMono">
      <div className="max-w-[1280px] mx-auto text-textWhite px-5 py-10 border-0 border-solid border-t-2 ">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col ">
            <div className="text-lg lg:text-xl mr-2">Nikhil Raj</div>
            <div className="text-base lg:text-lg text-textGray">
              nikhil25803@gmail.com
            </div>
          </div>
          <div className=" text-xl lg:text-2xl flex flex-row gap-5">
            <FaGithub className="hover-border w-fit p-2" />{" "}
            <FaLinkedin className="hover-border w-fit p-2" />
            <FaSquareXTwitter className="hover-border w-fit p-2" />
          </div>
        </div>
        <div className="text-center mt-10 text-textGray">
          © Copyright 2022. Made by Nikhil Raj
        </div>
      </div>
    </footer>
  );
};

export default Footer;
