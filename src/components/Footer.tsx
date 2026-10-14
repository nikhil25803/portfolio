import { FaGithub, FaKaggle, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const socialLinks = [
  { href: "mailto:nikhil25803@gmail.com", label: "Email", icon: <MdEmail /> },
  { href: "https://github.com/nikhil25803", label: "GitHub", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/nikhil25803/", label: "LinkedIn", icon: <FaLinkedin /> },
  { href: "https://twitter.com/humans_write", label: "X", icon: <FaSquareXTwitter /> },
  { href: "https://leetcode.com/nikhil25803/", label: "LeetCode", icon: <SiLeetcode /> },
  { href: "https://www.kaggle.com/nikhil25803", label: "Kaggle", icon: <FaKaggle /> },
  { href: "https://auth.geeksforgeeks.org/user/nikhil25803", label: "GeeksforGeeks", icon: <SiGeeksforgeeks /> },
];

const Footer = () => (
  <footer className="site-container mt-16 border-t border-textGray/25 py-10">
    <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-base text-textWhite">Nikhil Raj</p>
        <p className="mt-1 text-xs text-textGray">Backend and distributed systems engineer</p>
        <a href="mailto:nikhil25803@gmail.com" className="mt-2 inline-block text-xs">nikhil25803@gmail.com</a>
      </div>
      <div>
        <p className="mb-2 text-xs text-textGray sm:text-right">find me elsewhere</p>
        <div className="flex flex-wrap gap-x-4 gap-y-3 text-lg">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={link.label}
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
