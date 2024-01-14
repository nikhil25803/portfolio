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
              Hello! I'm <span className="text-textPrimary">Nikhil Raj</span>, a
              passionate computer science student currently pursuing my
              Bachelor's in Technology (with AI and ML) at{" "}
              <span className="text-textPrimary">
                Heritage Institute of Technology, Kolkata, India.
              </span>
            </div>
            <div>
              Alongside my studies, I've immersed myself in the world of
              technology, honing my skills in various programming languages like
              <span className="text-textPrimary"> Python</span>,{" "}
              <span className="text-textPrimary">JavaScript</span>, and{" "}
              <span className="text-textPrimary">C++</span>. My proficiency
              extends to frameworks such as{" "}
              <span className="text-textPrimary">Django</span>,{" "}
              <span className="text-textPrimary">Django DRF</span>,{" "}
              <span className="text-textPrimary">Fast API</span>,{" "}
              <span className="text-textPrimary">React.js</span>,{" "}
              <span className="text-textPrimary">Express.js</span>, and
              <span className="text-textPrimary"> Node.js</span>, complemented
              by a strong foundation in databases like
              <span className="text-textPrimary"> MongoDB</span>,{" "}
              <span className="text-textPrimary">PostgreSQL</span>,{" "}
              <span className="text-textPrimary">MySQL</span>, and{" "}
              <span className="text-textPrimary">Firebase</span>.
            </div>
            <div className="hidden md:block">
              Beyond Backend Development, I've also explored{" "}
              <span className="text-textPrimary">Machine Learning </span>
              and <span className="text-textPrimary">Deep Learning</span>. I am
              familiar with prominent libraries such as
              <span className="text-textPrimary"> Tensorflow</span>,{" "}
              <span className="text-textPrimary">Keras</span>, and{" "}
              <span className="text-textPrimary">Scikit-Learn</span>. I am eager
              to channel my passion and expertise into a dynamic career within
              this rapidly evolving and promising technological landscape.
            </div>
            <a
              href="/about"
              style={{ textDecoration: "None" }}
              className="hover-border w-fit text-textPrimary"
            >
              Read More ~~~{">"}
            </a>
          </div>
          <div>
            <div className="text-textWhite mb-2 text-xl border-0 border-solid border-b-2 border-textPrimary">
              <span className="text-textPrimary">/</span>social profiles
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-5">
              <SocialButtons
                url="https://www.linkedin.com/in/nikhil25803/"
                element={<FaLinkedinIn alphabetic={"LinkedIn"} />}
              />
              <SocialButtons
                url="https://github.com/nikhil25803"
                element={<FaGithub alphabetic={"GitHub"} />}
              />
              <SocialButtons
                url="https://twitter.com/humans_write"
                element={<FaSquareXTwitter alphabetic={"Twitter"} />}
              />
              <SocialButtons
                url="https://www.kaggle.com/nikhil25803"
                element={<FaKaggle alphabetic={"Kaggle"} />}
              />
              <SocialButtons
                url="https://auth.geeksforgeeks.org/user/nikhil25803"
                element={<SiGeeksforgeeks alphabetic={"GFG"} />}
              />
              <SocialButtons
                url="https://leetcode.com/nikhil25803/"
                element={<SiLeetcode alphabetic={"Kaggle"} />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
