import { BiLogoPostgresql } from "react-icons/bi";
import SkillsCard from "./cards/SkillsCard";
import {
  FaAws,
  FaDocker,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSnowflake,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiAmazondynamodb,
  SiDjango,
  SiExpress,
  SiFastapi,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCpp, TbBrandNextjs } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
const SkillsSection = () => {
  return (
    <section className="bg-backfroundColor w-full font-dmMono">
      <div className="max-w-[1280px] mx-auto p-5 text-textWhite">
        <div>
          <div className="text-2xl md:text-3xl lg:text-4xl ">
            <span className="text-textPrimary mr-1">$</span>skills
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5 ">
          <SkillsCard
            sectionName="languages"
            icons={[
              <FaPython />,
              <IoLogoJavascript />,
              <SiTypescript />,
              <TbBrandCpp />,
            ]}
          />
          <SkillsCard
            sectionName="frameworks"
            icons={[
              <SiDjango />,
              <SiFastapi />,
              <FaReact />,
              <FaNodeJs />,
              <SiExpress />,
              <TbBrandNextjs />,
              <SiTailwindcss />,
            ]}
          />
          <SkillsCard
            sectionName="databases"
            icons={[
              <SiMongodb />,
              <BiLogoPostgresql />,
              <SiMysql />,
              <SiAmazondynamodb />,
              <FaSnowflake />,
            ]}
          />
          <SkillsCard
            sectionName="tools"
            icons={[
              <FaGithub />,
              <IoLogoFirebase />,
              <FaAws />,
              <FaDocker />,
              <SiKubernetes />,
              <SiNginx />,
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
