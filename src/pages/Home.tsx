import { useEffect } from "react";
import ExperienceSection from "../components/ExperienceSection";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import Quote from "../components/Quote";
import SkillsMarquee from "../components/SkillsMarquee";

const Home = () => {
  useEffect(() => { document.title = "Nikhil Raj | Engineer"; }, []);

  return (
    <main className="site-container space-y-14">
      <HeroSection />
      <SkillsMarquee />
      <Quote />
      <ExperienceSection />
      <ProjectSection />
    </main>
  );
};

export default Home;
