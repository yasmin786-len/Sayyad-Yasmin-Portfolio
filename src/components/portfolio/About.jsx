import { motion } from "framer-motion";
import aboutImg from "@/assets/about-workspace.png";
import { ABOUT } from "./data";
import { SectionHead, Reveal } from "./shared";

export default function About() {
  return (
    <section id="about" className="pf-section">
      <div className="pf-container">
        <SectionHead
          eyebrow="Get to know me"
          title="About Me"
          subtitle="A passionate developer building reliable software, one clean commit at a time."
        />

        <div className="pf-about-grid">
          <Reveal>
            <div className="pf-about-image">
              <img
                src={aboutImg}
                alt="Developer working at a desk"
                width={1024}
                height={1024}
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="pf-about-lead">{ABOUT.lead}</p>
            {ABOUT.paragraphs.map((p, i) => (
              <p className="pf-about-text" key={i}>
                {p}
              </p>
            ))}

            <div className="pf-about-tags">
              {ABOUT.tags.map((t) => (
                <span className="pf-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>

            <div className="pf-timeline">
              {ABOUT.timeline.map((item, i) => (
                <motion.div
                  className="pf-timeline-item"
                  key={item.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <h4>{item.title}</h4>
                  <span>{item.meta}</span>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
