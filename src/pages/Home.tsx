import AboutMeSection from "../components/AboutMeSection";
import ExperienceSection from "../components/ExperienceSection";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import SkillsSection from "../components/SkillsSection";

const Home = () => {
  return (
    <section>
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectSection />
      <AboutMeSection />
    </section>
  );
};

export default Home;
