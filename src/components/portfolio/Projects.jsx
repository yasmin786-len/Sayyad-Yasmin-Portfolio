import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiExternalLink, FiCode, FiX, FiCheck } from "react-icons/fi";
import { PROJECTS } from "./data";
import { SectionHead } from "./shared";

function TiltCard({ project, onOpen, index }) {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 18 });
  const sry = useSpring(ry, { stiffness: 150, damping: 18 });
  const rotateX = useTransform(srx, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(sry, [-0.5, 0.5], ["-7deg", "7deg"]);

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    rx.set((e.clientY - rect.top) / rect.height - 0.5);
    ry.set((e.clientX - rect.left) / rect.width - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      className="pf-card pf-project-card"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      <div className="pf-project-thumb" style={{ background: project.gradient }}>
        <span className="pf-project-emoji">{project.emoji}</span>
      </div>
      <div className="pf-project-body">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className="pf-chip-row">
          {project.tech.slice(0, 4).map((t) => (
            <span className="pf-chip" key={t}>
              {t}
            </span>
          ))}
        </div>
        <div className="pf-project-actions">
          {project.demo && (
            <a
              className="pf-btn pf-btn-primary pf-btn-sm"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink /> Live Demo
            </a>
          )}

          <a
            className="pf-btn pf-btn-ghost pf-btn-sm"
            href={project.code}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <FiCode /> Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="pf-section" style={{ background: "var(--bg-secondary)" }}>
      <div className="pf-container">
        <SectionHead
          center
          eyebrow="Selected work"
          title="Featured Projects"
          subtitle="A collection of full stack applications showcasing backend depth and frontend polish."
        />

        <div className="pf-projects-grid">
          {PROJECTS.map((p, i) => (
            <TiltCard key={p.title} project={p} onOpen={setActive} index={i} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="pf-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="pf-modal"
              initial={{ scale: 0.92, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pf-modal-thumb" style={{ background: active.gradient }}>
                <span>{active.emoji}</span>
                <button
                  className="pf-modal-close"
                  onClick={() => setActive(null)}
                  aria-label="Close"
                >
                  <FiX />
                </button>
              </div>
              <div className="pf-modal-body">
                <h3>{active.title}</h3>
                <p>{active.desc}</p>

                <div className="pf-modal-label">Key Features</div>
                <ul className="pf-modal-features">
                  {active.features.map((f) => (
                    <li key={f}>
                      <FiCheck /> {f}
                    </li>
                  ))}
                </ul>

                <div className="pf-modal-label">Technologies</div>
                <div className="pf-chip-row">
                  {active.tech.map((t) => (
                    <span className="pf-chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pf-project-actions" style={{ marginTop: 22 }}>
                  {active.demo && (
                    <a
                      className="pf-btn pf-btn-primary"
                      href={active.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}

                  <a
                    className="pf-btn pf-btn-ghost"
                    href={active.code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiCode /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
