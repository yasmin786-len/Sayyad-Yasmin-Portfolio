import { FiArrowUp, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaMedium } from "react-icons/fa6";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { PROFILE, NAV_ITEMS } from "./data";

export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear();
  const socials = [
    { icon: <FaLinkedinIn />, href: PROFILE.socials.linkedin, label: "LinkedIn" },
    { icon: <FiMail />, href: `mailto:${PROFILE.email}`, label: "Email" },
    { icon: <SiLeetcode />, href: PROFILE.socials.leetcode, label: "LeetCode" },
    { icon: <SiHackerrank />, href: PROFILE.socials.hackerrank, label: "HackerRank" },
    { icon: <FaGithub />, href: PROFILE.socials.github, label: "GitHub" },
  ];

  return (
    <footer className="pf-footer">
      <div className="pf-container">
        <div className="pf-footer-top">
          <div className="pf-footer-brand">
            <a className="pf-logo" onClick={() => onNavigate("home")}>
              <span className="pf-logo-mark">{"</>"}</span>
              <span>
                {PROFILE.shortName}
                <span className="pf-gradient-text">.dev</span>
              </span>
            </a>
            <p>
              {PROFILE.title} — building reliable, scalable software and elegant user experiences.
            </p>
          </div>

          <div className="pf-footer-col">
            <h4>Quick Links</h4>
            <ul className="pf-footer-links">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a onClick={() => onNavigate(item.id)}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="pf-footer-col">
            <h4>Connect</h4>
            <div className="pf-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  className="pf-social"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pf-footer-bottom">
          <span>
            © {year} {PROFILE.name}. Crafted with React & Framer Motion.
          </span>
          <button className="pf-back-top" onClick={() => onNavigate("home")} aria-label="Back to top">
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
