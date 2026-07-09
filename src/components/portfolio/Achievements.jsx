import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiCode, FiAward, FiLayers } from "react-icons/fi";
import { TbPuzzle } from "react-icons/tb";
import { STATS } from "./data";
import { SectionHead } from "./shared";

const ICONS = {
  code: <FiCode />,
  puzzle: <TbPuzzle />,
  award: <FiAward />,
  layers: <FiLayers />,
};

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/(\d+)(.*)/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseInt(match[1], 10);
    const suffix = match[2] || "";
    const duration = 1400;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(target * eased) + suffix);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export default function Achievements() {
  return (
    <section className="pf-section" style={{ background: "var(--bg-secondary)" }}>
      <div className="pf-container">
        <SectionHead
          center
          eyebrow="By the numbers"
          title="Achievements"
          subtitle="Measurable progress across building, problem solving and continuous learning."
        />

        <div className="pf-stats-grid">
          {STATS.map((s, i) => (
            <motion.div
              className="pf-card pf-stat-card"
              key={s.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="pf-stat-icon">{ICONS[s.icon]}</div>
              <div className="pf-stat-number">
                <Counter value={s.number} />
              </div>
              <div className="pf-stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
