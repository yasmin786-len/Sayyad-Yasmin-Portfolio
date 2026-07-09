import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { NAV_ITEMS, PROFILE } from "./data";

export default function Navbar({ active, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    onNavigate(id);
  };

  return (
    <motion.nav
      className={`pf-nav ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pf-container pf-nav-inner">
        <a className="pf-logo" onClick={() => go("home")} aria-label="Home">
          <span className="pf-logo-mark">{"</>"}</span>
          <span>
            {PROFILE.shortName}
            <span className="pf-gradient-text">.dev</span>
          </span>
        </a>

        <ul className="pf-nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <span
                className={`pf-nav-link ${active === item.id ? "active" : ""}`}
                onClick={() => go(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && go(item.id)}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        <div className="pf-nav-cta">
          <a className="pf-btn pf-btn-primary pf-btn-sm" href={PROFILE.resumeUrl} download>
            <FiDownload /> Resume
          </a>
          <button
            className="pf-hamburger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="pf-mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <span
                  className={`pf-nav-link ${active === item.id ? "active" : ""}`}
                  onClick={() => go(item.id)}
                >
                  {item.label}
                </span>
              </li>
            ))}
            <li>
              <a
                className="pf-btn pf-btn-primary"
                href={PROFILE.resumeUrl}
                download
                style={{ marginTop: 8 }}
              >
                <FiDownload /> Download Resume
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
