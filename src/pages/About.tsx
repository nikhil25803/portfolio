import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "Nikhil Raj - About";
  }, []);
  return (
    <section
      className="bg-backfroundColor w-full font-dmMono"
      id="about-me-section"
    >
      <div className="max-w-[1280px] mx-auto text-textWhite p-5 ">
        <div className="text-2xl md:text-3xl lg:text-4xl ">
          <span className="text-textPrimary mr-1">/</span>about-me
        </div>
        <div className="grid grid-cols-1 justify-center items-center gap-5 mb-10">
          <div className="mt-5 flex flex-col gap-5 text-base md:text-lg ">
            <p>
              Hello! I'm <span className="text-textPrimary">Nikhil Raj</span>, a
              passionate computer science student currently pursuing my
              Bachelor's in Technology (with AI and ML) at{" "}
              <span className="text-textPrimary">
                Heritage Institute of Technology, Kolkata, India.
              </span>
            </p>
            <p>
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
            </p>
            <p>
              During my{" "}
              <span className="text-textPrimary">
                Backend Developer Internship at Edilitics
              </span>
              , I contributed significantly to building a{" "}
              <span className="text-textPrimary">
                no-code data analytics platform
              </span>
              . My responsibilities included implementing verification systems,
              notification services, and transforming data from various
              databases for effective visualizations. As a{" "}
              <span className="text-textPrimary">
                Backend SDE Intern at Tasklabs
              </span>
              , I delved into{" "}
              <span className="text-textPrimary">
                web-assembly-based technologies
              </span>
              , building Python utility tools for document and image processing.
              I also worked as a{" "}
              <span className="text-textPrimary">
                Technical Writer at Scaler Topics
              </span>
              , producing insightful articles on{" "}
              <span className="text-textPrimary">
                Django, Django REST Framework, and AI
              </span>
              .
            </p>
            <p>
              I've earned accolades such as winning{" "}
              <span className="text-textPrimary">Ethos'23</span>, a{" "}
              <span className="text-textPrimary">national-level hackathon</span>{" "}
              organized by{" "}
              <span className="text-textPrimary">IIT Guwahati</span>. A{" "}
              <span className="text-textPrimary">top contributor</span> at
              <span className="text-textPrimary"> GSSoC'22</span>, and obtaining
              certification as a Postman Student Expert. Additionally, I hold
              positions of responsibility as a{" "}
              <span className="text-textPrimary">project admin </span>
              at <span className="text-textPrimary">GSSoC'23</span> and{" "}
              <span className="text-textPrimary">mentor at JWoC'23</span>,
              showcasing my commitment to fostering open-source initiatives.
            </p>
            <div>
              Let's connect and explore the endless possibilities at the
              intersection of technology and creativity!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
