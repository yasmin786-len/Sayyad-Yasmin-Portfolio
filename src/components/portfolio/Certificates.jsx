import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { CERTIFICATES } from "./data";
import { SectionHead } from "./shared";

export default function Certificates() {
  return (
    <section id="certificates" className="pf-section">
      <div className="pf-container">
        <SectionHead
          center
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Continuous learning across the full stack, backed by verified certificates."
        />

        <div className="pf-cert-grid">
          {CERTIFICATES.map((c, i) => {
            const Icon = c.icon;

            return (
              <motion.div
                className="pf-card pf-cert-card"
                key={c.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div
                  className="pf-cert-thumb"
                  style={{ background: c.gradient }}
                >
                  <Icon size={42} color="white" />
                  <span className="pf-cert-badge">Verified</span>
                </div>

                <div className="pf-cert-body">
                  <h3>{c.title}</h3>
                  <p className="pf-cert-issuer">{c.issuer}</p>
                  <p className="pf-cert-date">{c.date}</p>

                  <a
                    className="pf-btn pf-btn-ghost pf-btn-sm"
                    href={c.verify}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiExternalLink /> Verify
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}