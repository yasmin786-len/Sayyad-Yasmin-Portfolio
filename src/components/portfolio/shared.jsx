import { motion } from "framer-motion";

// Shared reveal-on-scroll variants
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export function Reveal({ children, className, delay = 0, y = 32 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ eyebrow, title, subtitle, center }) {
  return (
    <Reveal className={`pf-section-head ${center ? "center" : ""}`}>
      {eyebrow && <span className="pf-section-eyebrow">{eyebrow}</span>}
      <h2 className="pf-section-title">{title}</h2>
      {subtitle && <p className="pf-section-subtitle">{subtitle}</p>}
    </Reveal>
  );
}
