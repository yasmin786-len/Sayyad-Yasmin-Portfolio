import { useCallback, useEffect, useState } from "react";
import "@/styles/portfolio.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Certificates from "./Certificates";
import Achievements from "./Achievements";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "./Footer";
import { NAV_ITEMS } from "./data";

export default function Portfolio() {
  const [active, setActive] = useState("home");

  const handleNavigate = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pf-root">
      <Navbar active={active} onNavigate={handleNavigate} />
      <main>
        <Hero onNavigate={handleNavigate} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
