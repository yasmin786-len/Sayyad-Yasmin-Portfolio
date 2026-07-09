import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "./data";
import { SectionHead } from "./shared";

function levelClass(level) {
  if (level === "Expert") return "pf-level-expert";
  if (level === "Advanced") return "pf-level-advanced";
  return "pf-level-intermediate";
}

export default function Skills() {
  return (
    <section id="skills" className="pf-section" style={{ background: "var(--bg-secondary)" }}>
      <div className="pf-container">
        <SectionHead
          center
          eyebrow="What I work with"
          title="Skills & Technologies"
          subtitle="A categorized snapshot of the tools and concepts I use to ship full stack applications."
        />

        <div className="pf-skills-grid">
          {SKILL_CATEGORIES.map((cat, i) => {
            const CatIcon = cat.icon;
            return (
              <motion.div
                className="pf-card pf-skill-card"
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="pf-skill-icon">
                  <CatIcon />
                </div>
                <h3>{cat.title}</h3>
                <div className="pf-skill-badges">
                  {cat.skills.map((s) => {
                    const Icon = s.icon;
                    return (
                      <span className="pf-skill-badge" key={s.name}>
                        {Icon && <Icon />}
                        {s.name}
                        <span className={`pf-skill-level ${levelClass(s.level)}`}>{s.level}</span>
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
