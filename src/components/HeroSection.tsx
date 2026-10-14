import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const externalLinkProps = { target: "_blank", rel: "noreferrer" } as const;

const HeroSection = () => {
  return (
    <section aria-labelledby="intro-heading" className="space-y-5">
      <h1 id="intro-heading" className="sr-only">Nikhil Raj, software development engineer</h1>
      <p>
        Currently working as a <Link to="/experience#cautio-software-engineer">Software Development Engineer at Cautio</Link>,
        building backend systems that make India&apos;s mobility ecosystem safer and more reliable. Since going
        full time in July 2025, I&apos;ve focused on designing high throughput, low latency systems for real time
        data, video pipelines, and geospatial processing.
      </p>
      <p>
        Over the past two years, I&apos;ve worked across young startups and healthtech companies, solving
        backend and distributed systems problems. That includes health data integration, API design, real time
        streaming, and large scale event processing.
      </p>
      <p>
        When I&apos;m not building or debugging systems, I&apos;m probably watching a movie or TV series. And yes,{" "}
        <a {...externalLinkProps} href="https://youtu.be/iId5WDsYxZ4?si=-jfoKx0IJsOA1IfQ">
          Better Call Saul tops Breaking Bad
        </a>.
      </p>
      <p>
        I&apos;d love to connect. Find my code and contributions on{" "}
        <a {...externalLinkProps} href="https://github.com/nikhil25803">GitHub</a>. You can also reach me by{" "}
        <a href="mailto:nikhil25803@gmail.com">email</a> or find me on the platforms below.
      </p>
      <div className="flex items-center gap-4 pt-1 text-xl" aria-label="Social links">
        <a {...externalLinkProps} href="https://github.com/nikhil25803" aria-label="GitHub"><FaGithub /></a>
        <a {...externalLinkProps} href="https://www.linkedin.com/in/nikhil25803/" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a {...externalLinkProps} href="https://twitter.com/humans_write" aria-label="X"><FaSquareXTwitter /></a>
        <a href="mailto:nikhil25803@gmail.com" aria-label="Email"><MdEmail /></a>
      </div>
    </section>
  );
};

export default HeroSection;
