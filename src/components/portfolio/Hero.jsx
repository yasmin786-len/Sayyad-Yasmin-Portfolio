import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FiDownload, FiMail, FiArrowDown } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaMedium } from "react-icons/fa6";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import heroAvatar from "@/assets/hero-avatar.png";
import { PROFILE, HERO_BADGES } from "./data";

function useTyping(words, speed = 90, pause = 1600) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    let delay = deleting ? 45 : speed;

    if (!deleting && text === current) {
      delay = pause;
      const t = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((p) => p + 1);
      return;
    }
    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
      );
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

// Deterministic pseudo-random so SSR and client markup match (no hydration mismatch).
const rand = (seed) => {
  const x = Math.sin(seed * 99.7) * 43758.5453;
  return x - Math.floor(x);
};
const PARTICLES = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  size: 2 + rand(i + 1) * 4,
  left: rand(i + 2) * 100,
  top: rand(i + 3) * 100,
  dur: 6 + rand(i + 4) * 10,
  delay: rand(i + 5) * 6,
}));

export default function Hero({ onNavigate }) {
  const typed = useTyping(PROFILE.roles);
  const visualRef = useRef(null);

  // Mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  const handleMouse = (e) => {
    const rect = visualRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    mx.set(x * 26);
    my.set(y * 26);
  };

  const socials = [
    { icon: <FaLinkedinIn />, href: PROFILE.socials.linkedin, label: "LinkedIn" },
    { icon: <FiMail />, href: `mailto:${PROFILE.email}`, label: "Email" },
    { icon: <SiLeetcode />, href: PROFILE.socials.leetcode, label: "LeetCode" },
    { icon: <SiHackerrank />, href: PROFILE.socials.hackerrank, label: "HackerRank" },
    { icon: <FaGithub />, href: PROFILE.socials.github, label: "GitHub" },
  ];

  return (
    <section id="home" className="pf-hero">
      <div className="pf-blob pf-blob-1" />
      <div className="pf-blob pf-blob-2" />
      <div className="pf-grid-overlay" />
      <div className="pf-particles">
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="pf-particle"
            style={{ width: p.size, height: p.size, left: `${p.left}%`, top: `${p.top}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="pf-container pf-hero-grid">
        {/* Left */}
        <div>
          <motion.span
            className="pf-hero-greet"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="pf-hero-dot" /> Hello, I'm
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            {PROFILE.name}
          </motion.h1>

          <div className="pf-hero-typed" aria-live="polite">
            <span className="pf-typed-text">{typed}</span>
            <span className="pf-cursor" />
          </div>

          <motion.p
            className="pf-hero-intro"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {PROFILE.intro}
          </motion.p>

          <motion.div
            className="pf-hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a className="pf-btn pf-btn-primary" href={PROFILE.resumeUrl} download>
              <FiDownload /> Download Resume
            </a>
            <button className="pf-btn pf-btn-ghost" onClick={() => onNavigate("contact")}>
              <FiMail /> Contact Me
            </button>
            <button className="pf-btn pf-btn-ghost" onClick={() => onNavigate("projects")}>
              View Projects
            </button>
          </motion.div>

          <motion.div
            className="pf-socials"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {socials.map((s) => (
              <a
                key={s.label}
                className="pf-social"
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          className="pf-hero-visual"
          ref={visualRef}
          onMouseMove={handleMouse}
          onMouseLeave={() => {
            mx.set(0);
            my.set(0);
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div className="pf-avatar-ring" style={{ x: sx, y: sy }}>
            <div className="pf-avatar-inner">
              <img
                src={heroAvatar}
                alt={`${PROFILE.name}, ${PROFILE.title}`}
                width={1024}
                height={1024}
              />
            </div>

            {HERO_BADGES.map((b, idx) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.label}
                  className="pf-float-badge"
                  style={b.pos}
                  animate={{ y: [0, idx % 2 === 0 ? -12 : 12, 0] }}
                  transition={{
                    duration: 4 + idx * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Icon style={{ color: b.color }} />
                  {b.label}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="pf-scroll-indicator"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        <span className="pf-scroll-mouse">
          <motion.span
            className="pf-scroll-wheel"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </span>
        <FiArrowDown />
      </motion.div>
    </section>
  );
}
