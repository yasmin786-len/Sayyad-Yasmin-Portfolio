import { FiDownload, FiCheck } from "react-icons/fi";
import { PROFILE, RESUME_HIGHLIGHTS } from "./data";
import { SectionHead, Reveal } from "./shared";

export default function Resume() {
  return (
    <section className="pf-section">
      <div className="pf-container">
        <SectionHead
          center
          eyebrow="One page, full picture"
          title="My Resume"
          subtitle="Download a recruiter-ready summary of my skills, projects and education."
        />

        <Reveal>
          <div className="pf-resume-card">
            <div className="pf-resume-left">
              <h3>{PROFILE.title}</h3>
              <p>
                A concise overview of my experience, technical strengths and the value I bring to an
                engineering team — formatted and ready to print.
              </p>
              <ul className="pf-resume-list">
                {RESUME_HIGHLIGHTS.map((h) => (
                  <li key={h}>
                    <FiCheck /> {h}
                  </li>
                ))}
              </ul>
              <a className="pf-btn pf-btn-primary" href={PROFILE.resumeUrl} download>
                <FiDownload /> Download Resume
              </a>
            </div>

            <div className="pf-resume-right">
              <div className="pf-resume-preview" aria-hidden="true">
                <div className="rp-bar title" />
                <div className="rp-bar sub" />
                <div className="rp-bar mid" />
                <div className="rp-bar" />
                <div className="rp-bar short" />
                <div className="rp-bar mid" style={{ marginTop: 22 }} />
                <div className="rp-bar" />
                <div className="rp-bar short" />
                <div className="rp-bar mid" style={{ marginTop: 22 }} />
                <div className="rp-bar" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
