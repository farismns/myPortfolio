import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-content">
        <Reveal>
          <p className="section-label">GET IN TOUCH</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2>
            Let&apos;s build something <span>together.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="contact-description">
            I&apos;m currently open to opportunities in data analysis, frontend
            development, and backend development. If you&apos;d like to connect,
            feel free to reach out.
          </p>
        </Reveal>

        <div className="contact-links">
          <Reveal delay={0.3}>
            <a href="mailto:faris.m.saputra@email.com" className="contact-link">
              <span className="contact-link-label">EMAIL</span>
              <span className="contact-link-value">faris.m.saputra@email.com</span>
              <span className="contact-arrow">↗</span>
            </a>
          </Reveal>

          <Reveal delay={0.4}>
            <a
              href="https://www.linkedin.com/in/farisms/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link-label">LINKEDIN</span>
              <span className="contact-link-value">
                linkedin.com/in/farisms
              </span>
              <span className="contact-arrow">↗</span>
            </a>
          </Reveal>

          <Reveal delay={0.5}>
            <a
              href="https://github.com/farismns"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link-label">GITHUB</span>
              <span className="contact-link-value">
                https://github.com/farismns
              </span>
              <span className="contact-arrow">↗</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
