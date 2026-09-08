import Reveal from "./Reveal";
import { experiences } from "@/data/experiences";

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="experience-header">
        <Reveal>
          <p className="section-label">EXPERIENCE</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="section-heading">
            Where I&apos;ve <span>been.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="section-intro">
            A timeline of my academic, professional, and project-based
            experience.
          </p>
        </Reveal>
      </div>

      <div className="experience-timeline">
        <div className="timeline-line" />

        {experiences.map((experience, index) => (
          <div
            className={`experience-item ${
              index % 2 === 0 ? "experience-left" : "experience-right"
            }`}
            key={experience.number}
          >
            <div className="timeline-dot" />

            <Reveal delay={index * 0.15} y={30}>
              <article className="experience-card">
                <div className="experience-meta">
                  <span>{experience.number}</span>
                  <span>{experience.period}</span>
                </div>

                <p className="experience-type">{experience.type}</p>

                <h3>{experience.title}</h3>

                <p className="experience-organization">
                  {experience.organization}
                </p>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-skills">
                  {experience.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
