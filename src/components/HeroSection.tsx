import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const externalLinkProps = { target: "_blank", rel: "noreferrer" } as const;

const HeroSection = () => {
  return (
    <section aria-labelledby="intro-heading" className="space-y-5">
      <h1 id="intro-heading" className="sr-only">Nikhil Raj, software development engineer</h1>
      <p>
        Currently working as a <span className="text-textPrimary">Software Development Engineer at Cautio</span>,
        building backend systems that make India&apos;s mobility ecosystem safer and more reliable. Since going
        full-time in July 2025, I&apos;ve focused on designing high-throughput, low-latency systems for real-time
        data, video pipelines, and geospatial processing.
      </p>
      <p>
        Over the past two years, I&apos;ve worked across early-stage startups and healthtech companies, solving
        backend and distributed-systems problems—from health-data integration and API design to real-time
        streaming and large-scale event processing.
      </p>
      <p>
        When I&apos;m not building or debugging systems, I&apos;m probably watching a movie or TV series—and yes,
        Better Call Saul tops Breaking Bad.
      </p>
      <p>
        I&apos;d love to connect—find my code and contributions on{" "}
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
