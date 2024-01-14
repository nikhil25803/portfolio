const About = () => {
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
              Hello! I'm Nikhil Raj, a passionate computer science student
              currently pursuing my Bachelor's in Technology (with AI and ML) at
              Heritage Institute of Technology, Kolkata, India.
            </p>
            <p>
              Alongside my studies, I've immersed myself in the world of
              technology, honing my skills in various programming languages like
              Python, JavaScript, and C++. My proficiency extends to frameworks
              such as Django, Django DRF, Fast API, React, Express.js, and
              Node.js, complemented by a strong foundation in databases like
              MongoDB, PostgreSQL, MySQL, and Firebase.
            </p>
            <p>
              During my Backend Developer Internship at Edilitics, I contributed
              significantly to building a no-code data analytics platform. My
              responsibilities included implementing verification systems,
              notification services, and transforming data from various
              databases for effective visualizations. As a Backend SDE Intern at
              Tasklabs, I delved into web-assembly-based technologies, building
              Python utility tools for document and image processing. I also
              worked as a Technical Writer at Scaler Topics, producing
              insightful articles on Django, Django REST Framework, and AI.
            </p>
            <p>
              I've earned accolades such as winning Ethos'23, being a top
              contributor at GSSoC'22, and obtaining certification as a Postman
              Student Expert. Additionally, I hold positions of responsibility
              as a project admin at GSSoC'23 and mentor at JWoC'23, showcasing
              my commitment to fostering open-source initiatives.
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
