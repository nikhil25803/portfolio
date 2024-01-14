import { useEffect } from "react";
import AboutMeSection from "../components/AboutMeSection";
import ExperienceSection from "../components/ExperienceSection";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import SkillsSection from "../components/SkillsSection";

const Home = () => {
  useEffect(() => {
    document.title = "Nikhil Raj - Portfolio Website";
  }, []);
  return (
    <section>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectSection />
      <AboutMeSection />
    </section>
  );
};

export default Home;
