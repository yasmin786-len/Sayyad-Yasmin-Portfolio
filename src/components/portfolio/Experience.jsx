import { motion } from "framer-motion";
import { FiBriefcase, FiServer } from "react-icons/fi";
import { FiZap } from "react-icons/fi";
import { STATUS_CARDS } from "./data";
import { SectionHead, Reveal } from "./shared";
import infosysCertificate from "./infosys.jpeg";

const ICONS = {
  briefcase: <FiBriefcase />,
  rocket: <FiZap />,
  server: <FiServer />,
};

export default function Experience() {
  return (
    <section id="experience" className="pf-section">
      <div className="pf-container">
        <SectionHead
          center
          eyebrow="My journey"
          title="Experience & Availability"
          subtitle="Currently focused on landing my first full-time role. Here's how I can contribute right now."
        />

        <Reveal>
          <div className="pf-status-grid">
            {STATUS_CARDS.map((card, i) => (
              <motion.div
                className="pf-card pf-status-card"
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="pf-status-icon">{ICONS[card.icon]}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <motion.div
            className="pf-card experience-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="experience-content">
              <div className="experience-info">
                <span className="experience-badge">Internship</span>

                <h3>Java Development Intern</h3>
                <h4>Infosys Springboard</h4>

                <p className="experience-date">
                  📅 Nov 2025 – Jan 2026
                </p>

                <p>
                  Successfully completed Internship 6.0 by developing an
                  <strong> Automated Task Reminder & Tracking Application</strong>
                  using Java, Spring Boot, REST APIs and MySQL.
                </p>

                <div className="pf-chip-row">
                  <span className="pf-chip">Java</span>
                  <span className="pf-chip">Spring Boot</span>
                  <span className="pf-chip">REST API</span>
                  <span className="pf-chip">MySQL</span>
                  <span className="pf-chip">Maven</span>
                </div>
              </div>

              <div className="experience-image">
                <img
                  src={infosysCertificate}
                  alt="Infosys Certificate"
                />
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
