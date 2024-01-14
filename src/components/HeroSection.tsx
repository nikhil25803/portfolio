import SocialButtons from "./elements/SocialButtons";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="bg-backfroundColor w-full font-dmMono">
      <div className="max-w-[1280px] mx-auto px-5 py-10 flex flex-col justify-center items-center gap-10 h-full">
        <div className="flex flex-row justify-between items-center text-lg">
          <div className="w-full lg:w-1/2 text-textWhite flex flex-col gap-10">
            <div className="text-3xl md:text-4xl lg:text-5xl">
              Hey there!
              <div className="mt-2">
                I'm <span className="text-textPrimary">Nikhil Raj</span>
              </div>
            </div>
            <div className="text-base md:text-xl">
              Stepped into programming back in 2021, and now I'm a{" "}
              <span className="text-textPrimary">Backend Developer</span> with
              personal as well as professional experience of building{" "}
              <span className="text-textPrimary">scalable and robust</span>{" "}
              backend architectures.
            </div>
            <div className="text-base md:text-xl">
              When I'm not watching{" "}
              <span className="text-textPrimary">movies 🎬</span>, I build
              projects, involved in
              <span className="text-textPrimary"> Open-Source</span>{" "}
              opportunities and participate in{" "}
              <span className="text-textPrimary">Hackathons</span> with friends.
            </div>
          </div>

          <div className="hidden lg:block  flex-col gap-5">
            <div className="text-textWhite mb-2 text-xl border-0 border-solid border-b-2 border-textPrimary">
              <span className="text-textPrimary">/</span>connect with me
            </div>
            <div className="grid grid-cols-2 gap-5">
              <SocialButtons
                element={<FaLinkedinIn alphabetic={"LinkedIn"} />}
              />
              <SocialButtons element={<FaGithub alphabetic={"GitHub"} />} />
              <SocialButtons
                element={<FaSquareXTwitter alphabetic={"Twitter"} />}
              />
              <SocialButtons element={<MdEmail alphabetic={"Email"} />} />
            </div>
            <div className="hover:bg-textPrimary hover:rounded-lg hover:text-textBlack text-xl text-textWhite flex flex-row justify-center items-center py-2 transition duration-300">
              Resume
            </div>
          </div>
        </div>
        <div className="w-full text-center text-2xl md:text-3xl lg:text-4xl border-1 border-solid py-5  border-textWhite">
          <div className="text-textWhite">
            <FaQuoteLeft className="w-2 md:w-3 mr-2" />
            It's a feature, not a bug -{" "}
            <span className="text-textPrimary">Bertram Gilfoyle</span>
            <FaQuoteRight className="w-2 md:w-3 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
