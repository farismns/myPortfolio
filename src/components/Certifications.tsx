import Reveal from "@/components/Reveal";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications-section">
      <div className="certifications-header">
        <Reveal>
          <p className="section-label">CERTIFICATIONS</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="section-heading">
            What I&apos;ve <span>earned.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="section-intro">
            Certifications and programs that support my skills and continuous
            learning in technology and software development.
          </p>
        </Reveal>
      </div>

      <div className="certifications-list">
        {certifications.map((certification, index) => (
          <Reveal key={certification.number} delay={0.15 + index * 0.15} y={40}>
            <article className="certification-card">
              <div className="certification-number">{certification.number}</div>

              <div className="certification-content">
                <p className="certification-date">{certification.date}</p>

                <h3>{certification.title}</h3>

                <p className="certification-issuer">{certification.issuer}</p>

                <p className="certification-description">
                  {certification.description}
                </p>

              </div>

              <div className="certification-icon">
                <span>✓</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
