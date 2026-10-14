import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => (
  <footer className="site-container mt-16 border-t border-textGray/25 py-8">
    <div className="flex items-center justify-between gap-5">
      <div>
        <p className="text-sm text-textWhite">Nikhil Raj</p>
        <a href="mailto:nikhil25803@gmail.com" className="text-xs text-textGray">nikhil25803@gmail.com</a>
      </div>
      <div className="flex gap-4 text-lg">
        <a href="https://github.com/nikhil25803" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/nikhil25803/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://twitter.com/humans_write" target="_blank" rel="noreferrer" aria-label="X"><FaSquareXTwitter /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
