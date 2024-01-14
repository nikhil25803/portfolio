import { FaLinkedinIn, FaGithub, FaKaggle } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import SocialButtons from "./elements/SocialButtons";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const AboutMeSection = () => {
  return (
    <section
      className="bg-backfroundColor w-full font-dmMono"
      id="about-me-section"
    >
      <div className="max-w-[1280px] mx-auto text-textWhite p-5 ">
        <div className="text-2xl md:text-3xl lg:text-4xl ">
          <span className="text-textPrimary mr-1">$</span>about-me
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-5">
          <div className="mt-5 flex flex-col gap-5 text-base md:text-lg lg:col-span-2">
            <div>
              Hello! I'm Nikhil Raj, a passionate computer science student
              currently pursuing my Bachelor's in Technology (with AI and ML) at
              Heritage Institute of Technology, Kolkata, India.
            </div>
            <div>
              Alongside my studies, I've immersed myself in the world of
              technology, honing my skills in various programming languages like
              Python, JavaScript, and C++. My proficiency extends to frameworks
              such as Django, Django DRF, Fast API, React, Express.js, and
              Node.js, complemented by a strong foundation in databases like
              MongoDB, PostgreSQL, MySQL, and Firebase.
            </div>
            <div className="hidden md:block">
              Beyond coding, I've also explored the realm of Technical Writing
              as a contributor to Scaler Topics. I authored 10+ articles on
              Django, Django REST Framework, and Artificial Intelligence,
              providing valuable insights with sample code snippets.
            </div>
            <div className="hover-border w-fit text-textPrimary">
              Read More ~~~{">"}
            </div>
          </div>
          <div>
            <div className="text-textWhite mb-2 text-xl border-0 border-solid border-b-2 border-textPrimary">
              <span className="text-textPrimary">/</span>social profiles
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-5">
              <SocialButtons
                element={<FaLinkedinIn alphabetic={"LinkedIn"} />}
              />
              <SocialButtons element={<FaGithub alphabetic={"GitHub"} />} />
              <SocialButtons
                element={<FaSquareXTwitter alphabetic={"Twitter"} />}
              />
              <SocialButtons element={<FaKaggle alphabetic={"Kaggle"} />} />
              <SocialButtons element={<SiGeeksforgeeks alphabetic={"GFG"} />} />
              <SocialButtons element={<SiLeetcode alphabetic={"Kaggle"} />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
