import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { PROFILE } from "./data";
import { SectionHead, Reveal } from "./shared";
import emailjs from "@emailjs/browser";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
  e.preventDefault();
  setError("");
  setSent(false);

  if (!form.name.trim() || !form.message.trim()) {
    setError("Please fill in your name and message.");
    return;
  }

  if (!EMAIL_RE.test(form.email.trim())) {
    setError("Please enter a valid email address.");
    return;
  }

  emailjs
    .send(
      "service_gvw06sk",
      "template_emvtzv7",
      {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        subject: form.subject || `Portfolio message from ${form.name}`,
        message: form.message,
      },
      "6welDsM5T2JA_WCFO"
    )
    .then(() => {
      setSent(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    })
    .catch((error) => {
      console.error(error);
      setError("Failed to send message. Please try again.");
    });
};

  const info = [
    { icon: <FiMail />, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: <FiPhone />, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone}` },
    { icon: <FiMapPin />, label: "Location", value: PROFILE.location, href: null },
    { icon: <FaLinkedinIn />, label: "LinkedIn", value: "Connect with me", href: PROFILE.socials.linkedin },
    { icon: <SiLeetcode />, label: "LeetCode", value: "View my profile", href: PROFILE.socials.leetcode },
    { icon: <SiHackerrank />, label: "HackerRank", value: "View my profile", href: PROFILE.socials.hackerrank },
  ];

  return (
    <section id="contact" className="pf-section" style={{ background: "var(--bg-secondary)" }}>
      <div className="pf-blob pf-blob-3" />
      <div className="pf-container">
        <SectionHead
          center
          eyebrow="Let's connect"
          title="Get In Touch"
          subtitle="Have an opportunity or just want to say hello? My inbox is always open."
        />

        <div className="pf-contact-grid">
          <Reveal>
            <div className="pf-contact-info">
              {info.map((item) => {
                const inner = (
                  <>
                    <span className="ci-icon">{item.icon}</span>
                    <span>
                      <span className="ci-label">{item.label}</span>
                      <span className="ci-value" style={{ display: "block" }}>
                        {item.value}
                      </span>
                    </span>
                  </>
                );
                return item.href ? (
                  <a
                    className="pf-card pf-contact-item"
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="pf-card pf-contact-item" key={item.label}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.form className="pf-card pf-form" onSubmit={onSubmit} noValidate>
              <div className="pf-form-row">
                <div className="pf-field">
                  <label htmlFor="c-name">Name</label>
                  <input
                    id="c-name"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    maxLength={100}
                    required
                  />
                </div>
                <div className="pf-field">
                  <label htmlFor="c-email">Email</label>
                  <input
                    id="c-email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@email.com"
                    maxLength={150}
                    required
                  />
                </div>
              </div>

              <div className="pf-form-row">
                <div className="pf-field">
                  <label htmlFor="c-phone">Phone</label>
                  <input
                    id="c-phone"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="Optional"
                    maxLength={30}
                  />
                </div>
                <div className="pf-field">
                  <label htmlFor="c-subject">Subject</label>
                  <input
                    id="c-subject"
                    value={form.subject}
                    onChange={update("subject")}
                    placeholder="What's this about?"
                    maxLength={150}
                  />
                </div>
              </div>

              <div className="pf-field">
                <label htmlFor="c-message">Message</label>
                <textarea
                  id="c-message"
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me about the opportunity..."
                  maxLength={1500}
                  required
                />
              </div>

              {error && <p className="pf-form-msg" style={{ color: "#fca5a5" }}>{error}</p>}
              {sent && !error && (
  <p
    className="pf-form-msg"
    style={{
      color: "#86efac",
      fontWeight: 600,
    }}
  >
    ✅ Your message has been sent successfully! I'll get back to you soon.
  </p>
)}

              <button className="pf-btn pf-btn-primary" type="submit">
                <FiSend /> Send Message
              </button>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
